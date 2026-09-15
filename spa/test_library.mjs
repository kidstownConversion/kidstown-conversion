import { readFileSync, readdirSync } from "fs";
import { ktini } from "./src/data/config.js";
import { render as statepageRender } from "./src/content/library/statepage.js";
import { render as fillinRender } from "./src/content/library/b_fillin_db.js";
import { render as ctaleRender } from "./src/content/library/ctale.js";
import { render as ortaleRender } from "./src/content/library/ortale.js";
import { render as witaleRender } from "./src/content/library/witale.js";
import { render as srchpassRender } from "./src/router/srchpass.js";

global.fetch = async (url) => {
  const path = "./public" + url;
  const data = JSON.parse(readFileSync(path, "utf8"));
  return { json: async () => data };
};

let failures = [];

// 1. Smoke-test every plain content module in library/ (skip the data-driven
// async ones, which get dedicated scenario tests below)
const dir = "./src/content/library";
for (const fn of readdirSync(dir)) {
  if (!fn.endsWith(".js")) continue;
  if (["statepage.js", "b_fillin_db.js", "ctale.js", "ortale.js", "witale.js"].includes(fn)) continue;
  const mod = await import(`${dir}/${fn}`);
  if (typeof mod.render !== "function") { failures.push(`${dir}/${fn}: no render() export`); continue; }
  try {
    const html = mod.render(ktini, { KEY: "6000", state: "2", statename: "Test", tribes: "x", animals: "y", pollution: "z" });
    if (typeof html !== "string" || html.length === 0) failures.push(`${dir}/${fn}: render() returned empty/non-string`);
  } catch (e) {
    failures.push(`${dir}/${fn}: threw ${e}`);
  }
}

// 2. statepage.js -- Alabama (state=1, no ACTIVITY -> no "play a game" block)
const alabama = await statepageRender(ktini, { state: "1" });
if (!alabama.includes("Alabama")) failures.push("statepage: Alabama name missing");
if (!alabama.includes("Montgomery")) failures.push("statepage: Alabama capital missing");
if (alabama.includes("Click here to play a game")) failures.push("statepage: Alabama should NOT show an activity link (ACTIVITY is empty)");
if (!alabama.includes("KEY=6050")) failures.push("statepage: Alabama RETURN link (Southeastern states, 6050) missing");

// 3. statepage.js -- Alaska (state=2, HAS an ACTIVITY -> word search link)
const alaska = await statepageRender(ktini, { state: "2" });
if (!alaska.includes("Alaska")) failures.push("statepage: Alaska name missing");
if (!alaska.includes("Click here to play a game")) failures.push("statepage: Alaska SHOULD show an activity link");
if (!alaska.includes("KEY=6200&page_passed=b_ak_wrdsrch.pl")) failures.push("statepage: Alaska activity link should point at the word search");

// 4. statepage.js -- invalid state number -> error page
const badState = await statepageRender(ktini, { state: "999" });
if (!badState.includes("invalid state number")) failures.push("statepage: out-of-range state should show the error page");

// 5. statepage.js -- Washington D.C. (record 51) uses the special capital wording
const dc = await statepageRender(ktini, { state: "51" });
if (!dc.includes("Capital of the United States")) failures.push("statepage: record 51 (D.C.) should use the special capital wording");

// 6. b_fillin_db.js -- NY (game=1): answer 1 right, answer 2 wrong
const nyAnswers = await fillinRender(ktini, {
  game: "1",
  TOPIC1: "World Trade Center Buildings", // correct (SOL1)
  TOPIC2: "wrong answer",                  // incorrect (SOL2 = Madison Square Garden)
  TOPIC3: "Giovanni da Verrazano",
  TOPIC4: "Manhattan",
  TOPIC5: "One out of every 2",
});
if (!nyAnswers.includes("You're right!")) failures.push("b_fillin_db: NY should have at least one correct answer");
if (!nyAnswers.includes("Your answer was:")) failures.push("b_fillin_db: NY should show the wrong-answer branch for TOPIC2");
if (!nyAnswers.includes("New York City Facts")) failures.push("b_fillin_db: NY heading missing");
// faithfully-reproduced original bug: multi-line PARAGRAPH2 truncated to its first line
if (!nyAnswers.includes("is the most famous of New") || nyAnswers.includes("York City's sports centers")) {
  failures.push("b_fillin_db: PARAGRAPH2 truncation bug not reproduced faithfully");
}

// 7. b_fillin_db.js -- DC (game=2)
const dcAnswers = await fillinRender(ktini, { game: "2", TOPIC1: "x", TOPIC2: "x", TOPIC3: "x", TOPIC4: "x", TOPIC5: "x" });
if (!dcAnswers.includes("Washington")) failures.push("b_fillin_db: DC heading missing");

// 8. ctale/ortale/witale madlib interpolation
const ct = ctaleRender(ktini, { tribes: "TESTTRIBE", animals: "TESTANIMAL", pollution: "TESTPOLLUTION" });
if (!ct.includes("TESTTRIBE") || !ct.includes("TESTANIMAL") || !ct.includes("TESTPOLLUTION")) failures.push("ctale: madlib substitution missing a value");

const or_ = ortaleRender(ktini, { recycle: "TESTRECYCLE", forest: "TESTFOREST", trees: "TESTTREES" });
if (!or_.includes("TESTRECYCLE") || !or_.includes("TESTFOREST") || !or_.includes("TESTTREES")) failures.push("ortale: madlib substitution missing a value");

const wi = witaleRender(ktini, { name: "TESTNAME", favorite: "TESTFAV", native: "TESTNATIVE" });
if (!wi.includes("TESTFAV") || !wi.includes("TESTNATIVE")) failures.push("witale: madlib substitution missing a value");
if (!wi.includes("<B>TESTNAME</B> and other children")) failures.push("witale: ktvars.name substitution missing in the main spot");
if (wi.includes("<B>TESTNAME</B> might be familiar with is Oshkosh")) failures.push("witale: the $in{'name'} bug spot should stay empty, not substitute ktvars.name");

// 9. srchpass.js -- placeholder substitution + back-link
const puzzle = srchpassRender(ktini, { page_passed: "b_ak_wrdsrch.pl" });
if (puzzle.includes("#graphic#") || puzzle.includes("#engine#")) failures.push("srchpass: placeholders not fully substituted");
if (!puzzle.includes(`${ktini.librarygraphics}/ws_ak.gif`)) failures.push("srchpass: #graphic# substitution incorrect");
if (!puzzle.includes("Back To\nU.S. Map")) failures.push("srchpass: missing back-to-map link");

const unknown = srchpassRender(ktini, { page_passed: "nonexistent.pl" });
if (!unknown.includes("unknown page_passed")) failures.push("srchpass: unknown page_passed should be reported, not throw");

console.log("Tested all library content modules + statepage/b_fillin_db/tales/srchpass scenarios");
if (failures.length) {
  console.log(`\n${failures.length} FAILURES:`);
  failures.forEach(f => console.log(" -", f));
  process.exit(1);
} else {
  console.log("ALL PASSED");
}
