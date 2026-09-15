import { readdirSync } from "fs";
import { ktini } from "./src/data/config.js";
import { render as zooNavbar } from "./src/components/ZooNavbar.js";
import { render as zooBody } from "./src/components/ZooBody.js";

let failures = [];

// 1. Smoke-test every zoo content module
const dir = "./src/content/zoo";
for (const fn of readdirSync(dir)) {
  if (!fn.endsWith(".js")) continue;
  const mod = await import(`${dir}/${fn}`);
  if (typeof mod.render !== "function") { failures.push(`${dir}/${fn}: no render() export`); continue; }
  try {
    const html = mod.render(ktini, { KEY: "9000", ZooHeader: "KidsTown Zoo" });
    if (typeof html !== "string" || html.length === 0) failures.push(`${dir}/${fn}: render() returned empty/non-string`);
  } catch (e) {
    failures.push(`${dir}/${fn}: threw ${e}`);
  }
}

// 2. ZooNavbar -- static 4-region nav, same on every zoo page
const nav = zooNavbar(ktini, {});
for (const key of ["9100", "9200", "9300", "9400"]) {
  if (!nav.includes(`KEY=${key}`)) failures.push(`ZooNavbar: missing link to KEY=${key}`);
}

// 3. ZooBody -- title branches on ZooHeader
const topLevel = zooBody(ktini, { ZooHeader: "KidsTown Zoo" });
if (!topLevel.includes("<TITLE>KidsTown Zoo</TITLE>")) failures.push("ZooBody: top-level zoo page should use the plain title");

const subPage = zooBody(ktini, { ZooHeader: "Animals of Africa" });
if (!subPage.includes("<TITLE>KidsTown Zoo: Animals of Africa</TITLE>")) failures.push("ZooBody: sub-page should append ZooHeader to the title");

// 4. Spot-check a couple of the previously-misclassified "complex" heredocs
// converted for real content (not just non-empty)
const { render: d6af1 } = await import("./src/content/zoo/d6_af1.js");
const af1 = d6af1(ktini, {});
if (!af1.includes("tallest land animal")) failures.push("d6_af1: expected quiz question text missing");
if (!af1.includes(`${ktini.engine}?KEY=9240`)) failures.push("d6_af1: expected answer link missing");

const { render: oc13 } = await import("./src/content/zoo/d6_oc13.js");
const oc13html = oc13(ktini, {});
if (!oc13html.includes("water covers over two-thirds")) failures.push("d6_oc13: expected answer text missing");

console.log("Tested all 24 zoo content modules + ZooNavbar + ZooBody");
if (failures.length) {
  console.log(`\n${failures.length} FAILURES:`);
  failures.forEach(f => console.log(" -", f));
  process.exit(1);
} else {
  console.log("ALL PASSED");
}
