import { readFileSync } from "fs";
import { readdirSync } from "fs";
import { ktini } from "./src/data/config.js";
import { render as navbar } from "./src/components/Navbar.js";
import { render as wondersRender } from "./src/content/township/wonders.js";

// mock fetch() to read local public/data files, like a browser would over http
global.fetch = async (url) => {
  const path = "./public" + url;
  const data = JSON.parse(readFileSync(path, "utf8"));
  return { json: async () => data };
};

let failures = [];

// 1. Smoke-test every auto-converted content module
for (const section of ["home", "township"]) {
  const dir = `./src/content/${section}`;
  for (const fn of readdirSync(dir)) {
    if (!fn.endsWith(".js") || fn === "wonders.js") continue; // wonders.js is async + needs answers; tested separately below
    const mod = await import(`${dir}/${fn}`);
    if (typeof mod.render !== "function") { failures.push(`${dir}/${fn}: no render() export`); continue; }
    try {
      const html = mod.render(ktini, { HelpState: 5900, KEY: "1000" });
      if (typeof html !== "string" || html.length === 0) failures.push(`${dir}/${fn}: render() returned empty/non-string`);
    } catch (e) {
      failures.push(`${dir}/${fn}: threw ${e}`);
    }
  }
}

// 2. Navbar with default HelpState
const navHtml = navbar(ktini, {});
if (!navHtml.includes("KEY=1010")) failures.push("Navbar: default HelpState should fall back to 1010");
const navHtml2 = navbar(ktini, { HelpState: 5900 });
if (!navHtml2.includes("KEY=5900")) failures.push("Navbar: should use supplied HelpState");

// 3. wonders.js scoring -- all-correct case (india.json / Taj Mahal)
// Q3 is built from Q31..Q3<STRLEN> concatenated, matching how the original
// read $ktvars{Q31}..$ktvars{Q3N} directly (see wonders.js header comment).
const allCorrect = await wondersRender(ktini,
  { file: "india.txt", RETURN: 3005, Q1: "India", Q2: "on", STRLEN: "4", Q31: "L", Q32: "O", Q33: "V", Q34: "E" });
if (!allCorrect.includes("Good Job")) failures.push("wonders.js: all-correct answers should show 'Good Job'");
if (!allCorrect.includes("taj1.jpg")) failures.push("wonders.js: all-correct should reveal image3 (taj1.jpg)");
if (!allCorrect.includes("<title>KidsTown Township: Wonders - Results</title>")) failures.push("wonders.js: missing its own <head><title> (it's the first entry in its KEY=3007 chain, no separate header script)");

// 4. wonders.js scoring -- partially correct (2/3, zeus.json)
const partial = await wondersRender(ktini,
  { file: "zeus.txt", RETURN: 3001, Q1: "420 BC", Q2: "off", STRLEN: "5", Q31: "W", Q32: "R", Q33: "O", Q34: "N", Q35: "G" });
if (!partial.includes("Almost there")) failures.push("wonders.js: 2/3 correct should show 'Almost there'");
if (!partial.includes("missed 1 question")) failures.push("wonders.js: should report missed count correctly");
if (!partial.includes("zeus1.jpg")) failures.push("wonders.js: 2/3 correct should reveal image2 (zeus1.jpg)");

// 5. wonders.js scoring -- all wrong (0/3, wall.json)
const allWrong = await wondersRender(ktini,
  { file: "wall.txt", RETURN: 3004, Q1: "nope", Q2: "off", STRLEN: "4", Q31: "n", Q32: "o", Q33: "p", Q34: "e" });
if (!allWrong.includes("missed 3 question")) failures.push("wonders.js: 0/3 correct should report missed 3");
if (!allWrong.includes("answer0.jpg")) failures.push("wonders.js: 0/3 correct should reveal image0 (answer0.jpg)");

console.log(`Tested all home+township content modules + Navbar + wonders.js scoring (3 scenarios)`);
if (failures.length) {
  console.log(`\n${failures.length} FAILURES:`);
  failures.forEach(f => console.log(" -", f));
  process.exit(1);
} else {
  console.log("ALL PASSED");
}
