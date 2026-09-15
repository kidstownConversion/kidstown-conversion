// Converted only from scripts/school/e_scramble.pl.
// Original has zero subroutines and one MAIN block; default entry wraps that block.
import {CountRecords, GetRecord} from './file-lib.js';
import {hidden, levelForm, schoolFile, resultHTML} from '../../integration/context.js';

export default async function main(ctx) {
  const p = ctx.params, e = ctx.escape;
  let html = `<title>KidsTown: School: Scramble Game</title><body bgcolor="#CCFFFF" text="black"><center><form method="post" action="${e(ctx.config.engine)}">` + hidden({KEY: 4002});
  if (!p.file || Object.hasOwn(p, 'START_OVER')) {
    return html + levelForm(ctx, 'Welcome to the Word Scramble Game') + '</form></center></body>';
  }
  const file = schoolFile(ctx, p.file);
  const count = await CountRecords(file, ctx);
  if (!count) throw new Error('There are no words in this level.');
  let index, record, word, scrambled, tries = 0, guess = '', error = '';
  if (!Object.hasOwn(p, 'guess') || p.play_again) {
    index = Math.floor(ctx.random() * count) + 1;
    record = await GetRecord(file, index, ctx);
    word = record.WORD.toUpperCase();
    const letters = [...word];
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(ctx.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    scrambled = letters.join('');
    // Bounded fallback instead of Perl's potentially endless re-scramble loop.
    if (scrambled === word && new Set(letters).size > 1) {
      for (let j = 1; j < letters.length; j++) {
        if (letters[0] !== letters[j]) { [letters[0], letters[j]] = [letters[j], letters[0]]; break; }
      }
      scrambled = letters.join('');
    }
  } else {
    index = Number(p.index);
    record = await GetRecord(file, index, ctx);
    word = record.WORD.toUpperCase(); // Never trust the hidden answer/picture fields.
    scrambled = String(p.scrambled || '');
    if ([...scrambled].sort().join('') !== [...word].sort().join('')) throw new Error('Invalid scramble state. Start a new game.');
    tries = Number(p.count);
    if (!Number.isSafeInteger(tries) || tries < 0) throw new Error('Invalid attempt count.');
    guess = String(p.guess).toUpperCase();
    if (guess.length !== word.length) error = `The input should be of length ${word.length}.`;
    else if (!/^[A-Z]+$/.test(guess)) error = 'Only use letters for input.';
    else tries++;
  }
  if (guess === word && !error) {
    html += `<h3>That's correct! The word is <i>${e(word)}</i>.<br>Good job, you got it in ${tries} ${tries === 1 ? 'try' : 'tries'}!</h3>`;
    html += resultHTML(ctx, record) + hidden({file}) + '<button name="play_again" value="1">Play Again</button> <button name="START_OVER" value="1">Change Level</button>';
  } else {
    html += hidden({file, index, count: tries, scrambled});
    html += `<h2>What is this picture?</h2><img src="${e(ctx.config.schoolgraphics + '/' + record.GRAPHIC)}" alt="Picture clue"><p role="status">${e(error)}</p><h3>Scrambled Word: ${e(scrambled)}</h3><label>Enter Guess: <input name="guess" size="${word.length}" autocomplete="off"></label><p>Your Last Guess: ${e(guess || '-'.repeat(word.length))}</p><button>Continue</button>`;
  }
  return html + '</form></center></body>';
}
