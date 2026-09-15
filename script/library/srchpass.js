// Hand-converted from library/srchpass.pl (KidsTown CGI/Perl -> SPA router module)
//
// The original read a raw HTML file named by ktvars.page_passed out of the
// libraryscripts directory, substituted 4 placeholder tokens into it, printed
// it, then appended a "Back to US Map" link. Those 6 raw HTML files (word
// search puzzles + their answer pages) are ported as-is in
// src/content/library/wordsearch/*.js (see that folder for why they aren't
// Perl at all -- they're just data files that happen to live in
// scripts/library/ and get passed through this substitution step).
//
// This module is the client-side stand-in for that substitution + dispatch,
// invoked by the router whenever kt.db routes to library/srchpass.pl
// (KEY=6200).

import { template as b_ak_wrdsrch } from "./wordsearch/b_ak_wrdsrch.js";
import { template as b_ak_wrdsrch_ans } from "./wordsearch/b_ak_wrdsrch_ans.js";
import { template as b_az_wrdsrch } from "./wordsearch/b_az_wrdsrch.js";
import { template as b_az_wrdsrch_ans } from "./wordsearch/b_az_wrdsrch_ans.js";
import { template as b_ne_wdsrch } from "./wordsearch/b_ne_wdsrch.js";
import { template as b_ne_wdsrchans } from "./wordsearch/b_ne_wdsrchans.js";

const PAGES = {
  "b_ak_wrdsrch.pl": b_ak_wrdsrch,
  "b_ak_wrdsrch_ans.pl": b_ak_wrdsrch_ans,
  "b_az_wrdsrch.pl": b_az_wrdsrch,
  "b_az_wrdsrch_ans.pl": b_az_wrdsrch_ans,
  "b_ne_wdsrch.pl": b_ne_wdsrch,
  "b_ne_wdsrchans.pl": b_ne_wdsrchans,
};

export function render(ktini, ktvars) {
  const page = PAGES[ktvars.page_passed];
  if (!page) {
    // original: open() would fail and Perl's "die" would abort the whole
    // request with a raw error -- there's no graceful original behavior to
    // preserve, so this just reports the bad reference instead of throwing.
    return `<!-- srchpass: unknown page_passed "${ktvars.page_passed}" -->`;
  }

  let out = page;
  out = out.split("#graphic#").join(ktini.librarygraphics);
  out = out.split("#engine#").join(ktini.engine);
  out = out.split("#statename#").join(ktvars.statename ?? "");
  out = out.split("#state#").join(ktvars.state ?? "");

  out += `<A\nHREF="${ktini.engine}?KEY=6000"><CENTER><B>Back To\nU.S. Map</CENTER></B></A>\n`;
  return out;
}
