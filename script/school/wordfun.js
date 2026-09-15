// Converted only from scripts/school/wordfun.pl.
// Three original subroutines retained; main wraps the original separate MAIN block.
import {CountRecords, GetRecord} from './file-lib.js';
import {hidden, levelForm, schoolFile, resultHTML} from '../../integration/context.js';

export function header(ctx) {
  return `<title>KidsTown: School: Word Fun</title><body bgcolor="white" text="black"><center><form method="post" action="${ctx.escape(ctx.config.engine)}">` + hidden({KEY: 4001});
}
export function footer() { return '</form></center></body>'; }
export function intro(ctx) { return levelForm(ctx, 'Welcome to the Word Fun Activity'); }

export default async function main(ctx) {
  const p = ctx.params, e = ctx.escape;
  let html = header(ctx);
  if (!p.file || Object.hasOwn(p, 'START_OVER')) return html + intro(ctx) + footer();
  const file = schoolFile(ctx, p.file);
  const count = await CountRecords(file, ctx);
  if (!count) throw new Error('There are no words in this level.');
  let index, used = '';
  if (!Object.hasOwn(p, 'choice') || p.play_again) {
    index = Math.floor(ctx.random() * count) + 1;
  } else {
    index = Number(p.index);
    const choice = String(p.choice).trim().toUpperCase();
    if (!/^[A-Z]$/.test(choice)) throw new Error('Choose one letter.');
    used = String(p.deadlet || '').replace(/[^A-Z]/g, '');
    used = [...new Set(used + choice)].join('');
  }
  const record = await GetRecord(file, index, ctx);
  const word = record.WORD.toUpperCase();
  let current = '';
  for (const letter of word) current += used.includes(letter) ? letter : '_';
  if (current === word) {
    html += `<h3>That's correct! The word is <i>${e(word)}</i>.<br>Good job, you got it in ${used.length} tries!</h3>`;
    html += resultHTML(ctx, record) + hidden({file}) + '<button name="play_again" value="1">Play Again</button> <button name="START_OVER" value="1">Change Level</button>';
  } else {
    html += '<h2>Select a letter from below</h2>' + hidden({file, index, deadlet: used});
    html += `<img src="${e(ctx.config.schoolgraphics)}/blocks-left.gif" alt=""><p style="font-size:2em;letter-spacing:.3em">${e(current)}</p><img src="${e(ctx.config.schoolgraphics)}/blocks-right.gif" alt=""><br>`;
    for (const letter of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
      if ('HOV'.includes(letter)) html += '<br>';
      html += `<button name="choice" value="${letter}" ${used.includes(letter) ? 'disabled' : ''}>${used.includes(letter) ? '—' : letter}</button>`;
    }
  }
  return html + footer();
}
