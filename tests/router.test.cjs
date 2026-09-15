const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
function setup() {
  const handlers = {}, windowHandlers = {}, pushes = [];
  const app = {style:{}, innerHTML:'', replaceChildren(){this.innerHTML='';}, append(p){this.innerHTML=p.textContent;}};
  const nav = {innerHTML:''};
  const scope = {URLSearchParams, console, FormData:class {constructor(form){return new Map(form.fields);}},
    document:{getElementById:id=>id==='app'?app:nav, addEventListener:(n,f)=>{(handlers[n] ||= []).push(f);},createElement:()=>({setAttribute(){}})},
    window:{scrollTo(){},addEventListener:(n,f)=>{windowHandlers[n]=f;}},history:{pushState:(...args)=>pushes.push(args)},location:{hash:'#?KEY=1000'},
    DOMParser:class {parseFromString(html){return {title:'',body:{innerHTML:html,getAttribute:()=>null}};}}};
  vm.createContext(scope);
  for (const f of ['integration/config.js','integration/router.js','script/home/nav.js','script/cityhall/cityhall.js','script/toystore/toystore.js','data/citypark/citypark-pages.js','script/citypark/citypark.js']) vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),scope,{filename:f});
  scope.registerRoute(1000, () => 'Welcome to KidsTown');
  return {scope,handlers,windowHandlers,pushes,app,nav};
}
test('moved teammate routes render and their image references exist',async()=>{
 const {scope,app}=setup();
 const keys=vm.runInContext('Object.keys(routes)',scope);
 for(const key of keys){
  await scope.navigate(key,{},false);
  assert.ok(app.innerHTML.length>10,key);
  for(const m of app.innerHTML.matchAll(/src=["']([^"']+)["']/g)) assert.ok(fs.existsSync(path.join(root,m[1])),m[1]);
 }
});
test('both hash styles, history restore and async navigation races',async()=>{
 const {scope,app,pushes,windowHandlers}=setup();
 assert.equal(scope.parseHrefParams('#KEY=4000').key,4000);
 assert.equal(scope.parseHrefParams('#?KEY=8000').key,8000);
 let resolve;
 scope.registerRoute(4000,()=>new Promise(r=>{resolve=r;}));
 const pending=scope.navigate(4000);
 await scope.navigate(1000);
 resolve('stale School page');await pending;
 assert.match(app.innerHTML,/Welcome to KidsTown/);
 const count=pushes.length;windowHandlers.popstate();await Promise.resolve();
 assert.equal(pushes.length,count);
});
test('shared form handler leaves City Park forms to their own handler',async()=>{
 const {handlers}=setup();let prevented=false;
 handlers.submit[0]({target:{closest:()=>true,fields:[]},preventDefault(){prevented=true;}});
 assert.equal(prevented,false);
});
test('School forms include the clicked answer button',async()=>{
 const {scope,handlers}=setup();let received;
 scope.registerRoute(4001,p=>{received=p;return 'answer';});
 handlers.submit[0]({target:{closest:()=>true,fields:[['KEY','4001'],['index','1']]},submitter:{name:'choice',value:'A'},preventDefault(){}});
 await Promise.resolve();assert.equal(received.choice,'A');assert.equal(received.index,'1');
});
