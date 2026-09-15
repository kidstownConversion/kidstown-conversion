import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {renderPage} from '../integration/legacy-router.js';
import {routing} from '../integration/legacy-routing.js';
import {registry} from '../integration/registry.js';
const root = new URL('../',import.meta.url);
globalThis.fetch=async path=>{
 const text=await readFile(new URL(path,root),'utf8');
 return {ok:true,json:async()=>JSON.parse(text),text:async()=>text};
};
test('all 96 supported new route chains render with required activity parameters',async()=>{
 let count=0;
 for(const [key,chain] of Object.entries(routing)) {
  if(!chain.every(e=>registry[e.dir+'/'+e.file]))continue;
  const params=new URLSearchParams({KEY:key});
  if(key==='6100')params.set('state','1');
  if(key==='3007'){params.set('file','india.txt');params.set('RETURN','3000');}
  if(key==='6910')params.set('game','1');
  const html=await renderPage(params.toString());
  assert.ok(html.length>10,key);assert.ok(!html.includes('not converted yet'),key);count++;
 }
 assert.equal(count,96);
});
test('all Library states and fill-in datasets load',async()=>{
 for(let state=1;state<=51;state++)assert.ok((await renderPage(`KEY=6100&state=${state}`)).length>100);
 for(let game=1;game<=2;game++)assert.match(await renderPage(`KEY=6910&game=${game}`),/Answers/);
});
test('combined boot registers new and existing module sections before first navigation',async()=>{
 const registrations = new Map();let firstKey;
 globalThis.registerRoute=(key,render)=>{assert.ok(!registrations.has(key),`Duplicate ${key}`);registrations.set(key,render);};
 globalThis.parseHrefParams=()=>({key:8000,params:{}});
 globalThis.location={hash:'#?KEY=8000'};
 globalThis.navigate=async key=>{firstKey=key;assert.match(await registrations.get(key)({}),/KidsTown Museum/);};
 globalThis.document={getElementById:()=>({set textContent(value){throw new Error(value);}})};
 await import('../integration/boot.js');
 assert.equal(firstKey,8000);
 for(const key of [1000,3000,4000,6000,8000,9000])assert.ok(registrations.has(key));
});
