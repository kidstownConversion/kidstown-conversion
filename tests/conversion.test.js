import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile, readdir, access} from 'node:fs/promises';
import {createContext, parseRecords, renderTemplate} from '../integration/context.js';
import {renderSection} from '../integration/render-section.js';
import * as files from '../script/school/file-lib.js';
import * as schoolCGI from '../script/school/cgi-lib.js';
import * as museumCGI from '../script/museum/cgi-lib.js';
import scramble from '../script/school/e_scramble.js';
import wordfun from '../script/school/wordfun.js';
import wizard, * as quiz from '../script/museum/wizard.js';
const root = new URL('../', import.meta.url);
const loadText = path => readFile(new URL(path, root), 'utf8');
const context = params => createContext({params, loadText, random: () => 0});
const fields = html => Object.fromEntries([...html.matchAll(/type="hidden" name="([^"]+)" value="([^"]*)"/g)].map(m => [m[1], m[2]]));
const routes = JSON.parse(await loadText('integration/routes.json'));
const manifest = JSON.parse(await loadText('conversion-map.json'));

test('45 one-to-one modules and every named Perl subroutine retained', async () => {
  assert.equal(manifest.length, 45);
  for (const item of manifest) {
    const module = await import(new URL(item.target, root));
    const actual = Object.keys(module).filter(name => name !== 'default' && typeof module[name] === 'function').sort();
    assert.deepEqual(actual, item.functions.sort(), item.target);
    if (item.kind === 'template') assert.equal(typeof module.default, 'string');
  }
  for (const section of ['school', 'museum']) assert.equal((await readdir(new URL(`script/${section}/`, root))).length, section === 'school' ? 31 : 14);
});

test('all 37 section routes render; no unresolved Perl config or CGI links', async () => {
  assert.equal(Object.keys(routes).length, 37);
  for (const [KEY, entries] of Object.entries(routes)) {
    const html = await renderSection(entries, context({KEY}));
    assert.ok(html.length > 50, KEY);
    assert.doesNotMatch(html, /\$ktini|\$ktvars|kt\.cgi|\{\{\w+\}\}/, KEY);
  }
});

test('record parsing preserves multiline fields and source counts', async () => {
  assert.deepEqual({...parseRecords('comments\r\n.\r\nWORD\tword\r\nSENTENCE\tone\r\ntwo\r\n.\r\n')[0]}, {WORD:'word', SENTENCE:'one two'});
  for (let i = 1; i <= 3; i++) {
    const ctx = context({});
    const path = `data/school/e_data${i}.txt`;
    const count = [15, 16, 8][i - 1];
    assert.equal(await files.CountRecords(path, ctx), count);
    assert.ok((await files.GetRecord(path, count, ctx)).WORD);
  }
});

test('file helper reads, wraps search, writes/removes in browser memory only', async () => {
  const ctx = context({}); const file = 'data/school/e_data1.txt';
  assert.equal((await files.GetFileNames('data/school',ctx)).length, 3);
  assert.equal(await files.FindRecord(file, 14, ['sock'], ctx), 1);
  assert.equal(await files.FindRecord(file, 0, ['impossible'], ctx), 0);
  await files.WriteRecord(file, {WORD:'test', SENTENCE:'Test word.', GRAPHIC:'test.gif'},ctx);
  assert.equal(await files.CountRecords(file,ctx),16);
  await files.RemoveRecord(file,16,ctx);
  assert.equal(await files.CountRecords(file,ctx),15);
  await assert.rejects(files.GetRecord('../other.txt',1,ctx));
  await assert.rejects(files.RemoveRecord(file,0,ctx));
});

test('CGI parsing handles encoded equals, duplicates, zero, and escaped output', () => {
  const target = Object.create(null);
  assert.equal(schoolCGI.ReadParse('a=x%3Dy&a=z;zero=0&space=hello+world',target),4);
  assert.equal(target.a,'x=y\0z'); assert.equal(target.zero,'0'); assert.equal(target.space,'hello world');
  const museum = {}; museumCGI.ReadParse({'select1.x':0}, museum); assert.equal(museum['select1.x'],'0');
  assert.deepEqual(museumCGI.SplitParam('a\0b'),['a','b']);
  assert.ok(schoolCGI.PrintVariablesShort({x:'<script>'}).includes('&lt;script&gt;'));
  assert.equal(museumCGI.PrintHeader(),'');
  assert.equal(schoolCGI.MyURL('https://example.test/path?p=1#x'),'https://example.test/path');
});

test('scramble: three levels, invalid input, wrong guess, win, replay, change level', async () => {
  for (let level = 1; level <= 3; level++) {
    const file = `data/school/e_data${level}.txt`;
    const record = await files.GetRecord(file,1,context({}));
    const start = await scramble(context({file}));
    const p = fields(start); const word = record.WORD.toUpperCase();
    assert.notEqual(p.scrambled,word); assert.equal([...p.scrambled].sort().join(''),[...word].sort().join(''));
    const invalid = await scramble(context({...p,guess:'1'.repeat(word.length)}));
    assert.match(invalid,/Only use letters/); assert.equal(fields(invalid).count,'0');
    const wrong = await scramble(context({...p,guess:'Z'.repeat(word.length)}));
    assert.equal(fields(wrong).count,'1');
    const win = await scramble(context({...fields(wrong),guess:word.toLowerCase()}));
    assert.match(win,/That's correct/); assert.match(win,/2 tries/);
    const replay = await scramble(context({...fields(win),play_again:'1'}));
    assert.equal(fields(replay).count,'0');
    assert.match(await scramble(context({file,START_OVER:'1'})),/Choose a difficulty/);
    const injection = await scramble(context({...p,guess:'<img onerror=x>'}));
    assert.doesNotMatch(injection,/<img onerror/);
  }
});

test('Word Fun: repeated letter is not double-counted; win and replay', async () => {
  for (let level = 1; level <= 3; level++) {
    const file = `data/school/e_data${level}.txt`;
    let html = await wordfun(context({file}));
    const word = (await files.GetRecord(file,1,context({}))).WORD.toUpperCase();
    html = await wordfun(context({...fields(html),choice:word[0]}));
    html = await wordfun(context({...fields(html),choice:word[0]}));
    assert.equal(fields(html).deadlet,word[0]);
    for (const choice of [...new Set(word)].slice(1)) html = await wordfun(context({...fields(html),choice}));
    assert.match(html,/That's correct/);
    assert.match(await wordfun(context({...fields(html),play_again:'1'})),/Select a letter/);
    assert.match(await wordfun(context({file,START_OVER:'1'})),/Choose a difficulty/);
  }
});

test('quiz: all answer positions in BOTH source datasets match their feedback', async () => {
  for (const data of ['ss1.dat','ss2.dat']) {
    const records = parseRecords(await loadText(`data/museum/${data}`));
    for (let index = 0; index < records.length; index++) {
      const answers = Object.entries(records[index]).filter(([key]) => /^(CORRECT_ANS|INCORRECT_ANS\d+)$/.test(key));
      assert.equal(answers.length,4);
      for (let selection = 1; selection <= 4; selection++) {
        const game = quiz.InitFormVars(context({}));
        Object.assign(game,{dataFileName:data, prevGames:quiz.Encode(index+1), selection});
        const status = await quiz.GetAnswerFormData(game);
        assert.equal(status,answers[selection-1][0] === 'CORRECT_ANS' ? 'CORRECT_ANSWER':'INCORRECT_ANSWER');
        assert.equal(game.answer,answers[selection-1][1]);
        assert.equal(game.answerImage,records[index][`IMG${selection}`]);
      }
    }
  }
});

test('quiz: incorrect selection, retry, image x=0, help return, skip, exhaustion', async () => {
  let html = await wizard(context({data:'ss1.dat'}));
  let p = fields(html); // The last form is the skip form; supply explicit mode below.
  const answer = await wizard(context({...p,data:'ANSWER',PREVSELECT:'0000','select1.x':'0'}));
  assert.match(answer,/Earth is one/);
  const retry = await wizard(context({...p,data:'QUESTION',PREVSELECT:'1000'}));
  assert.match(retry,/value="1" disabled/);
  const help = await wizard(context({...p,data:'RET_FROM_HELP',PREVSELECT:'0000'}));
  assert.match(help,/only star/);
  const skip = await wizard(context({...p,data:'QUESTION',PREVSELECT:'SKIP_QUESTION'}));
  assert.notEqual(fields(skip).PREVGAMES, p.PREVGAMES);
  const correct = await wizard(context({...p,data:'ANSWER',PREVSELECT:'0000',selection:'3'}));
  assert.match(correct,/The Sun is the only star/); assert.equal(fields(correct).PREVSELECT,'0000');
  const count = parseRecords(await loadText('data/museum/ss1.dat')).length;
  let history = ''; for(let n=1;n<=count;n++) history += quiz.Encode(n);
  const end = await wizard(context({data:'QUESTION',FILENAME:'ss1.dat',PREVGAMES:history,PREVSELECT:'0000'}));
  assert.match(end,/end of this category/);
  for(let n=1;n<=52;n++) assert.equal(quiz.Decode(quiz.Encode(n)),n);
  await assert.rejects(wizard(context({...p,data:'ANSWER',PREVSELECT:'0000'})));
});

test('all referenced template and dataset images exist with matching filename case', async () => {
  for (const item of manifest.filter(item => item.kind === 'template')) {
    const module = await import(new URL(item.target, root));
    const html = renderTemplate(module.default, context({}));
    for (const match of html.matchAll(/src\s*=\s*"([^"]+)"/gi)) await access(new URL(match[1].replaceAll('//','/'), root));
  }
  for (const file of ['school/e_data1.txt','school/e_data2.txt','school/e_data3.txt','museum/ss1.dat','museum/ss2.dat']) {
    for (const record of parseRecords(await loadText('data/' + file))) {
      for (const [key,value] of Object.entries(record)) {
        if (key === 'GRAPHIC' || /^IMG\d+$/.test(key)) await access(new URL('graphics/' + file.split('/')[0] + '/' + value, root));
      }
    }
  }
});
