// Whole-site smoke scan: render every KEY in routing.json through the real
// router and flag anything that looks like a conversion artifact rather
// than real 1998 content -- the literal word "undefined" (JS's
// undef-stringification, which Perl would never have produced), an
// unhandled exception, or an empty page. This won't catch every possible
// bug, but it's a cheap whole-site pass that catches the exact class of
// mistake found in ZooBody.js (JS "undefined" leaking into markup) anywhere
// else it might be lurking, across every KEY, not just the ones with
// dedicated tests.
import { readFileSync } from "fs";
import { renderPage } from "./src/router.js";
import { routing } from "./src/data/routing.js";

global.fetch = async (url) => {
  const path = "./public" + url;
  const data = JSON.parse(readFileSync(path, "utf8"));
  return { json: async () => data };
};

// A handful of KEYs are "second step" targets that only make sense with
// form data attached -- in the original site they're never linked to
// directly, only ever reached by submitting a specific form (or, for
// statepage.pl's activity links / srchpass.pl, by clicking a link that
// embeds these query params itself). Visiting them bare is not a real user
// path, so the scan supplies the same minimal args a real visit would carry
// rather than flagging the expected "no form data" blanks as bugs:
//   KEY=6300 -(b_wi_tale.pl form)->     KEY=6400 (witale.pl)   needs name/favorite/native
//   KEY=6500 -(b_or_tale.pl form)->     KEY=6600 (ortale.pl)   needs recycle/forest/trees
//   KEY=6700 -(b_ct_tale.pl form)->     KEY=6800 (ctale.pl)    needs tribes/animals/pollution/state
//   KEY=6900/6920 -(fillin forms)->     KEY=6910 (b_fillin_db.pl) needs game
//   KEY=6100&state=N's ACTIVITY link -> KEY=6200 (srchpass.pl) needs page_passed
//   Zeus/pyramid/wall/tajmahal quiz pages -> KEY=3007 (wonders.pl) needs file/Q1/Q2/STRLEN/Q3n
const EXTRA_ARGS = {
  "6400": "&name=Test&favorite=peas&native=Dakota",
  "6600": "&recycle=children&forest=new&trees=large",
  "6700": "&state=7&statename=Connecticut",
  "6800": "&tribes=Many&animals=small&pollution=problem&state=7",
  "6910": "&game=1&TOPIC1=x&TOPIC2=x&TOPIC3=x&TOPIC4=x&TOPIC5=x",
  "6200": "&page_passed=b_ak_wrdsrch.pl",
  "3007": "&file=india.txt&RETURN=3005&Q1=India&Q2=on&STRLEN=1&Q31=X",
};

let failures = [];
let rendered = 0;

for (const key of Object.keys(routing)) {
  try {
    const html = await renderPage(`KEY=${key}${EXTRA_ARGS[key] || ""}`);
    rendered++;
    if (!html || html.trim().length === 0) {
      failures.push(`KEY=${key}: rendered empty`);
      continue;
    }
    if (/\bundefined\b/.test(html)) {
      const idx = html.indexOf("undefined");
      failures.push(`KEY=${key}: contains the literal word "undefined" (context: ...${html.slice(Math.max(0, idx - 40), idx + 20)}...)`);
    }
  } catch (e) {
    failures.push(`KEY=${key}: threw ${e}`);
  }
}

console.log(`Rendered ${rendered} of ${Object.keys(routing).length} KEYs through the real router`);
if (failures.length) {
  console.log(`\n${failures.length} FLAGGED:`);
  failures.forEach(f => console.log(" -", f));
  process.exit(1);
} else {
  console.log("NO ISSUES FOUND");
}
