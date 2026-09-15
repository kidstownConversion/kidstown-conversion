// Section adapter utilities, not a replacement for the team's shared router.
export function escapeHTML(value = '') {
  return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
}

export function createContext({params = {}, config = {}, state = new Map(), baseURL = new URL('../', import.meta.url), random = Math.random, loadText} = {}) {
  const ktini = {engine: '#', schoolgraphics: 'graphics/school', museumgraphics: 'graphics/museum',
    schooldata: 'data/school', museumdata: 'data/museum', ...config};
  return {params: {...params}, config: ktini, state, random, escape: escapeHTML,
    text: loadText || (async path => {
      const url = new URL(path, baseURL);
      if (url.origin !== new URL(baseURL).origin) throw new Error('Only local activity data is allowed.');
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Cannot load activity data (${response.status}): ${path}`);
      return response.text();
    })};
}

export function parseRecords(text) {
  const blocks = String(text).replaceAll('\r', '').split(/^\.\s*$/m).slice(1);
  const records = [];
  for (const block of blocks) {
    const record = Object.create(null);
    let field;
    for (const line of block.split('\n')) {
      if (!line.trim()) continue;
      const tab = line.indexOf('\t');
      if (tab >= 0) {
        field = line.slice(0, tab);
        record[field] = (record[field] || '') + line.slice(tab + 1).trim();
      } else if (field) record[field] += ' ' + line.trim();
    }
    if (Object.keys(record).length) records.push(record);
  }
  return records;
}

export function hidden(values) {
  let html = '';
  for (const [name, value] of Object.entries(values)) {
    html += `<input type="hidden" name="${escapeHTML(name)}" value="${escapeHTML(value)}">`;
  }
  return html;
}

export function levelForm(ctx, title) {
  let html = `<h1>${escapeHTML(title)}</h1><p>Choose a difficulty, then select Start Game.</p>`;
  const levels = ['Easy — short words', 'Medium — longer words', 'Difficult — longest words'];
  for (let i = 0; i < levels.length; i++) {
    html += `<label><input type="radio" name="file" value="${escapeHTML(ctx.config.schooldata)}/e_data${i + 1}.txt" ${i === 0 ? 'checked' : ''}>${levels[i]}</label><br>`;
  }
  return html + '<button name="CONTINUE" value="1">Start Game</button>';
}

export function schoolFile(ctx, input) {
  const allowed = [1, 2, 3].map(n => `${ctx.config.schooldata}/e_data${n}.txt`);
  if (!allowed.includes(input)) throw new Error('Choose a valid difficulty level.');
  return input;
}

export function resultHTML(ctx, record) {
  const word = record.WORD;
  const sentence = record.SENTENCE[0].toUpperCase() + record.SENTENCE.slice(1);
  // Escape text before highlighting; data is not executable markup.
  const marked = escapeHTML(sentence).replace(new RegExp(escapeHTML(word).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), '<strong style="color:blue">$&</strong>');
  return `<img src="${escapeHTML(ctx.config.schoolgraphics + '/' + record.GRAPHIC)}" alt="${escapeHTML(word)}"><p>${marked}</p>`;
}

export function renderTemplate(template, ctx) {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    if (!(key in ctx.config)) throw new Error(`Missing configuration: ${key}`);
    return escapeHTML(ctx.config[key]);
  });
}
