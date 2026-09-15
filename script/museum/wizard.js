// Converted only from scripts/museum/wizard.pl.
// All 11 named Perl subroutines remain separate with the same names.
// main is the entry point corresponding to the original MAIN block.
import {ReadParse} from './cgi-lib.js';
import {GetRecord, CountRecords} from './c_parse.js';
import {hidden} from '../../integration/context.js';

export function InitFormVars(ctx) {
  return {ctx, imagePath: ctx.config.museumgraphics, dataPath: ctx.config.museumdata,
    newQuestionIcon: 'newquest.gif', tryAgainIcon: 'tryagain.gif',
    dataFileName: '', prevGames: '', prevSelect: '0000', selection: 0, answer: '', gameIndex: 0};
}

export default async function main(ctx) {
  const game = InitFormVars(ctx);
  let command = ctx.params.data;
  if (['ANSWER', 'QUESTION', 'RET_FROM_HELP'].includes(command)) {
    GetInputData(game);
    if (game.prevSelect === 'SKIP_QUESTION') { game.prevSelect = '0000'; command = 'QUESTION'; }
  } else game.dataFileName = command;
  if (!['ss1.dat', 'ss2.dat'].includes(game.dataFileName)) {
    return '<p>Select a tour to start the quiz.</p><a href="#?KEY=8550">Return to the Planetarium</a>';
  }
  await GetEnvironment(game);
  if (command === 'ANSWER') return SendAnswerHTML(game);
  return DisplayQuestion(game, command === 'QUESTION' ? 'GAME_IN_PROGRESS' : command === 'RET_FROM_HELP' ? 'RET_FROM_HELP' : 'FIRST_GAME');
}

export async function GetEnvironment(game) {
  const text = await game.ctx.text(`${game.dataPath}/${game.dataFileName}`);
  const environment = text.split(/^ENVIRONMENT\s*$/m)[1]?.split(/^\.\s*$/m)[0];
  if (!environment) throw new Error('Missing quiz environment.');
  const settings = {};
  for (const line of environment.split('\n')) {
    const match = line.match(/^([^=]+)="([^"]*)"/);
    if (match) settings[match[1].trim()] = match[2];
  }
  const e = game.ctx.escape;
  game.environment = `<body bgcolor="${e(settings['BACKGROUND COLOR'])}" text="${e(settings['TEXT COLOR'])}" link="yellow" vlink="yellow"`;
  if (settings['BACKGROUND IMAGE']) game.environment += ` background="${e(game.imagePath + '/' + settings['BACKGROUND IMAGE'])}"`;
  game.environment += '>';
  game.coverPageIcon = settings['COVERPAGE ICON'];
  game.coverPageFileName = settings['COVERPAGE FILENAME'];
  game.catagoryFileName = settings['CATAGORY FILENAME'];
  game.catagoryIcon = settings['CATAGORY ICON'];
  game.retCatagoryText = settings['CATAGORY TEXT'];
}

export function GetInputData(game) {
  const input = Object.create(null);
  ReadParse(game.ctx.params, input);
  game.dataFileName = input.FILENAME;
  game.prevGames = input.PREVGAMES || '';
  game.prevSelect = input.PREVSELECT || '0000';
  if (game.prevGames !== 'START_OVER' && !/^[a-zA-Z]{1,52}$/.test(game.prevGames)) throw new Error('Invalid quiz history. Start a new tour.');
  if (game.prevSelect !== 'SKIP_QUESTION' && !/^[01]{4}$/.test(game.prevSelect)) throw new Error('Invalid previous selections.');
  // Image inputs legitimately send x=0; check presence, not truthiness.
  if (Object.hasOwn(input, 'skipQuestion.x')) game.prevSelect = 'SKIP_QUESTION';
  for (let i = 1; i <= 4; i++) {
    if (Object.hasOwn(input, `select${i}.x`) || input.selection === String(i)) game.selection = i;
  }
}

export async function SendAnswerHTML(game) {
  if (game.selection < 1 || game.selection > 4 || game.prevSelect[game.selection - 1] === '1') throw new Error('Choose an available picture.');
  const selections = [...game.prevSelect];
  selections[game.selection - 1] = '1';
  game.prevSelect = selections.join('');
  const status = await GetAnswerFormData(game);
  const correct = status === 'CORRECT_ANSWER';
  if (correct) game.prevSelect = '0000';
  const e = game.ctx.escape;
  let html = '<title>KidsTown Museum - Planetarium: Answer</title>' + game.environment + '<center>';
  html += `<img src="${e(game.imagePath + '/' + game.answerImage)}" alt="Selected picture"><p style="font-size:1.5em">${e(game.answer)}</p>`;
  html += `<form method="post" action="${e(game.ctx.config.engine)}">`;
  html += hidden({KEY: 8500, data: 'QUESTION', PREVSELECT: game.prevSelect, PREVGAMES: game.prevGames, FILENAME: game.dataFileName});
  html += `<button><img src="${e(game.imagePath + '/' + (correct ? game.newQuestionIcon : game.tryAgainIcon))}" alt="${correct ? 'New question' : 'Try again'}"></button></form>`;
  if (!correct) {
    html += `<form method="post" action="${e(game.ctx.config.engine)}">` + hidden({KEY: 8500, data: 'QUESTION', PREVSELECT: 'SKIP_QUESTION', PREVGAMES: game.prevGames, FILENAME: game.dataFileName}) + '<button>SKIP THIS QUESTION</button></form>';
  }
  return html + '</center></body>';
}

export async function GetAnswerFormData(game) {
  game.gameIndex = Decode(game.prevGames.slice(-1));
  const record = await GetRecord(`${game.dataPath}/${game.dataFileName}`, game.gameIndex, game.ctx);
  // Read answers in source order. CORRECT_ANS can be in any of the four slots.
  let position = 0;
  for (const [field, value] of Object.entries(record)) {
    if (field === 'CORRECT_ANS' || /^INCORRECT_ANS\d+$/.test(field)) {
      position++;
      if (position === game.selection) {
        game.answer = value;
        game.answerImage = record[`IMG${position}`];
        return field === 'CORRECT_ANS' ? 'CORRECT_ANSWER' : 'INCORRECT_ANSWER';
      }
    }
  }
  throw new Error('Answer data is incomplete.');
}

export async function DisplayQuestion(game, status) {
  if (status === 'FIRST_GAME') {
    game.prevSelect = '0000';
    game.gameIndex = await GetNextGame(game, 'FIRST_GAME');
    if (game.gameIndex === 'NO_GAMES_LEFT') return SendStartOverHTML(game);
    game.prevGames = Encode(game.gameIndex);
  } else if (game.prevGames === 'START_OVER') return SendStartOverHTML(game);
  else if (game.prevSelect !== '0000' || status === 'RET_FROM_HELP') {
    game.gameIndex = Decode(game.prevGames.slice(-1));
  } else {
    game.gameIndex = await GetNextGame(game, game.prevGames);
    if (game.gameIndex === 'NO_GAMES_LEFT') return SendStartOverHTML(game);
    game.prevGames += Encode(game.gameIndex);
  }
  return SendQuestionHTML(game);
}

export async function SendQuestionHTML(game) {
  const record = await GetRecord(`${game.dataPath}/${game.dataFileName}`, game.gameIndex, game.ctx);
  const e = game.ctx.escape;
  let html = '<title>KidsTown Museum - Planetarium: Question</title>' + game.environment + `<center><form method="post" action="${e(game.ctx.config.engine)}"><h2>${e(record.QUESTION)}</h2><div>`;
  for (let i = 1; i <= 4; i++) {
    const image = `<img src="${e(game.imagePath + '/' + record['IMG' + i])}" alt="Answer picture ${i}">`;
    html += `<button name="selection" value="${i}" ${game.prevSelect[i - 1] === '1' ? 'disabled' : ''}>${image}</button>`;
  }
  html += '</div><p>Click on one of the images.</p>' + hidden({KEY: 8500, data: 'ANSWER', PREVSELECT: game.prevSelect, PREVGAMES: game.prevGames, FILENAME: game.dataFileName}) + '</form>';
  html += `<form method="post" action="${e(game.ctx.config.engine)}">` + hidden({KEY: 8500, data: 'QUESTION', PREVSELECT: 'SKIP_QUESTION', PREVGAMES: game.prevGames, FILENAME: game.dataFileName}) + '<button>SKIP THIS QUESTION</button></form></center></body>';
  return html;
}

export function SendStartOverHTML(game) {
  return '<title>KidsTown Museum - Planetarium: Completed Category</title>' + game.environment + `<center><h2>You have reached the end of this category.</h2><p>Select New Question to start over.</p><a href="${game.ctx.escape(game.ctx.config.engine)}?KEY=8500&amp;data=${game.ctx.escape(game.dataFileName)}"><img src="${game.ctx.escape(game.imagePath + '/' + game.newQuestionIcon)}" alt="New Question"></a></center></body>`;
}

export async function GetNextGame(game, history) {
  const count = await CountRecords(`${game.dataPath}/${game.dataFileName}`, game.ctx);
  if (count > 52) throw new Error('Legacy history format supports at most 52 questions.');
  const remaining = [];
  for (let i = 1; i <= count; i++) if (history === 'FIRST_GAME' || !history.includes(Encode(i))) remaining.push(i);
  if (!remaining.length) return 'NO_GAMES_LEFT';
  return remaining[Math.floor(game.ctx.random() * remaining.length)];
}

export function Decode(character) {
  if (!/^[a-zA-Z]$/.test(character)) throw new Error('Invalid encoded question.');
  return character.charCodeAt(0) - (character >= 'a' ? 96 : 38);
}

export function Encode(number) {
  if (!Number.isInteger(number) || number < 1 || number > 52) throw new Error('Question number must be 1–52.');
  return String.fromCharCode(number + (number <= 26 ? 96 : 38));
}
