// Shared browser dispatcher. Section files registerRoute(KEY, renderFunction).
const routes = Object.create(null);
let renderRevision = 0;
function registerRoute(key, renderFn) {
  if (routes[key]) throw new Error(`Duplicate route: ${key}`);
  routes[key] = renderFn;
}
function parseHrefParams(href) {
  const search = new URLSearchParams(href.replace(/^#\??/, ''));
  const key = Number(search.get('KEY')) || 1000;
  search.delete('KEY');
  return {key, params: Object.fromEntries(search)};
}
async function navigate(key, params = {}, recordHistory = true) {
  const revision = ++renderRevision;
  const app = document.getElementById('app');
  if (recordHistory) {
    const query = new URLSearchParams(params);
    query.set('KEY', key);
    history.pushState(null, '', '#?' + query);
  }
  try {
    if (!routes[key]) throw new Error(`This section is not connected yet (KEY=${key}).`);
    const html = await routes[key](params);
    if (revision !== renderRevision) return;
    // The source Turkey page uses different case than the actual asset filename.
    const normalizedHTML = html.replaceAll('graphics/township/Turkey.gif', 'graphics/township/turkey.gif');
    const parsed = new DOMParser().parseFromString(normalizedHTML, 'text/html');
    app.innerHTML = parsed.body.innerHTML;
    document.title = parsed.title || 'KidsTown';
    app.style.backgroundColor = parsed.body.getAttribute('bgcolor') || '';
    app.style.color = parsed.body.getAttribute('text') || '';
    const background = parsed.body.getAttribute('background');
    app.style.backgroundImage = background ? `url(${JSON.stringify(background)})` : '';
    const linkColor = parsed.body.getAttribute('link');
    if (linkColor) app.querySelectorAll('a').forEach(a => {a.style.color = linkColor;});
  } catch (error) {
    if (revision !== renderRevision) return;
    app.replaceChildren();
    const message = document.createElement('p');
    message.setAttribute('role', 'alert');
    message.textContent = error.message;
    app.append(message);
  }
  if (revision !== renderRevision) return;
  document.getElementById('nav').innerHTML = renderNavbar(params.HelpState || 1010);
  window.scrollTo(0, 0);
}
document.addEventListener('click', event => {
  const anchor = event.target.closest('a, area');
  if (!anchor || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || anchor.target === '_blank') return;
  if (anchor.dataset.key) {
    event.preventDefault();
    navigate(Number(anchor.dataset.key), anchor.dataset.params ? JSON.parse(anchor.dataset.params) : {});
  } else {
    const href = anchor.getAttribute('href') || '';
    if (href.startsWith('#') && href.includes('KEY=')) {
      event.preventDefault();
      const {key, params} = parseHrefParams(href);
      navigate(key, params);
    }
  }
});
document.addEventListener('submit', event => {
  const form = event.target;
  if (!form.closest('#app')) return;
  const data = new FormData(form);
  // City Park has its own existing form handler and no hidden KEY field.
  if (!data.has('KEY')) {
    const action = form.getAttribute?.('action') || '';
    if (!action.includes('KEY=')) return;
    const query = action.slice(action.indexOf('?') + 1);
    for (const [key, value] of new URLSearchParams(query)) if (!data.has(key)) data.set(key, value);
    if (!data.has('KEY')) return;
  }
  event.preventDefault();
  if (event.submitter?.name) data.set(event.submitter.name, event.submitter.value);
  const key = Number(data.get('KEY'));
  data.delete('KEY');
  navigate(key, Object.fromEntries(data));
});
window.addEventListener('popstate', () => {
  const {key, params} = parseHrefParams(location.hash);
  navigate(key, params, false);
});
// boot.js starts navigation after asynchronous School/Museum registration finishes.
