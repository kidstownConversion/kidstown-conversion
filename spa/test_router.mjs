import { readFileSync } from "fs";
import { renderPage, string2hash } from "./src/router.js";

global.fetch = async (url) => {
  const path = "./public" + url;
  const data = JSON.parse(readFileSync(path, "utf8"));
  return { json: async () => data };
};

let failures = [];
const check = (cond, msg) => { if (!cond) failures.push(msg); };

// 1. string2hash: first-wins semantics + +/%XX decoding (port of kt.cgi's
// String2hash, verified against its actual doc-comment example)
{
  const h = {};
  string2hash("KEY=101&score=30", h);
  check(h.KEY === "101" && h.score === "30", "string2hash: basic example from kt.cgi's own doc comment failed");

  const h2 = { KEY: "existing" };
  string2hash("KEY=101", h2);
  check(h2.KEY === "existing", "string2hash: first-wins -- existing key must not be overwritten");

  const h3 = {};
  string2hash("name=Big+Bird&note=100%25done", h3);
  check(h3.name === "Big Bird", "string2hash: + should decode to space");
  check(h3.note === "100%done", "string2hash: %XX should decode to the literal character");
}

// 2. KEY=1000 (the default/home page) renders and is HTML-wrapped
const home = await renderPage("KEY=1000");
check(home.startsWith("<HTML>") && home.trim().endsWith("</HTML>"), "KEY=1000: page should be wrapped in <HTML>...</HTML>");
check(home.includes("KidsTown"), "KEY=1000: expected home page content missing");

// 3. Unknown KEY falls back to KEY=1000 (matches kt.cgi's own fallback)
const unknownKey = await renderPage("KEY=999999");
check(unknownKey === home, "unknown KEY should fall back to KEY=1000 and render identically");

// 4. Missing KEY entirely also falls back to 1000 (ktvars.KEY is undefined -> no match)
const noKey = await renderPage("");
check(noKey === home, "missing KEY should also fall back to KEY=1000");

// 5. KEY=6000 -- library main page (chained with home navbar)
const libMain = await renderPage("KEY=6000");
check(libMain.includes("KidsTown Library"), "KEY=6000: library main page content missing");
check(libMain.includes("Northwest"), "KEY=6000: expected region links missing");

// 6. KEY=6100&state=2 -- Alaska state page, exercises library/statepage.js
// through the real router (async render + real chain-arg merge)
const alaska = await renderPage("KEY=6100&state=2");
check(alaska.includes("Alaska"), "KEY=6100&state=2: Alaska state page content missing");
check(alaska.includes("Click here to play a game"), "KEY=6100&state=2: Alaska's word-search activity link missing");

// 7. KEY=9000 -- zoo main page, exercises the ZooBody/ZooNavbar shared
// components. Faithfully-reproduced pre-existing bug (found while wiring up
// the real chain order): zoo/body.pl always runs BEFORE zoo/header.pl in
// every zoo KEY, so ZooHeader is never actually set yet when the <TITLE> is
// built -- every zoo page's title is really just "KidsTown Zoo: " (blank).
// See ZooBody.js for the full writeup.
const zooMain = await renderPage("KEY=9000");
check(zooMain.includes("<TITLE>KidsTown Zoo: </TITLE>"), "KEY=9000: ZooBody title should faithfully reproduce the ZooHeader-not-set-yet bug");
check(!zooMain.includes("undefined"), "KEY=9000: must not leak the JS word 'undefined' into the page (Perl would have interpolated undef as empty string)");
check(zooMain.includes("Ocean</A>"), "KEY=9000: ZooNavbar region links missing");

// 8. KEY=9210 -- a zoo quiz question page. Same pre-existing bug applies:
// title is "KidsTown Zoo: " regardless of which quiz it is.
const quiz = await renderPage("KEY=9210");
check(quiz.includes("<TITLE>KidsTown Zoo: </TITLE>"), "KEY=9210: quiz page title should show the same faithfully-reproduced bug, not the intended ZooHeader");
check(!quiz.includes("undefined"), "KEY=9210: must not leak the JS word 'undefined' into the page");
check(quiz.includes("tallest land animal"), "KEY=9210: expected quiz question content missing");

// 9. KEY=3007 -- wonders.js results page through the real router, exercising
// the async render + query-string-supplied Q1/Q2/Q3<n>/STRLEN args together
const wondersResult = await renderPage("KEY=3007&file=india.txt&RETURN=3005&Q1=India&Q2=on&STRLEN=4&Q31=L&Q32=O&Q33=V&Q34=E");
check(wondersResult.includes("Good Job"), "KEY=3007: all-correct wonders answer should show 'Good Job' through the real router");
check(wondersResult.includes("taj1.jpg"), "KEY=3007: expected prize image missing");

// 10. KEY=6020 -- the known kt.db typo ("homescritps" instead of
// "homescripts"). Router should render a visible placeholder for the
// broken navbar entry instead of crashing the whole page.
const key6020 = await renderPage("KEY=6020");
check(key6020.includes("router:") && key6020.includes("known kt.db typo"), "KEY=6020: should render a placeholder for the known homescritps typo, not crash");
check(key6020.includes("Southwest") || key6020.length > 100, "KEY=6020: page content besides the broken navbar should still render");

// 11. A KEY belonging to a not-yet-converted section (cityhall) should
// render placeholders for its entries rather than throwing
const cityhall = await renderPage("KEY=8000");
check(typeof cityhall === "string" && cityhall.length > 0, "not-yet-converted section should not throw");

console.log("Tested router.js end-to-end: string2hash semantics, KEY fallback, chain-arg merging, async dispatch, the known kt.db typo, and not-yet-converted sections");
if (failures.length) {
  console.log(`\n${failures.length} FAILURES:`);
  failures.forEach(f => console.log(" -", f));
  process.exit(1);
} else {
  console.log("ALL PASSED");
}
