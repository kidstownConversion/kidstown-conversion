// Hand-converted from cgi-bin/kt.cgi (KidsTown CGI/Perl -> SPA router)
//
// This is the client-side replacement for kt.cgi's whole dispatch engine.
// It preserves the original's URL contract exactly (?KEY=NNNN, with the
// same fallback-to-1000 behavior), so bookmarks and links written against
// the original CGI keep working against this SPA.
//
// What the original did (see cgi-bin/kt.cgi, and String2hash's doc comment):
//   1. Parse the request's query string (String2hash) into %ktvars.
//   2. Look up %ktvars{KEY} in kt.db; if no line matches, fall back to
//      KEY=1000. (kt.db line 489 has a confirmed typo -- see registry.js's
//      KNOWN_BROKEN_DIR comment -- unrelated to this fallback.)
//   3. For each matched "script args" line, in file order:
//        - String2hash(args) merges more values into %ktvars, but ONLY for
//          keys not already set (`unless $$hash{$paramname}`) -- so the
//          query string always wins over kt.db's per-entry args, and an
//          earlier chain entry's args win over a later one's.
//        - The script is run (EvalFile) and its printed HTML is appended.
//   4. Everything is wrapped in <HTML>...</HTML>.
//
// This module reproduces all four steps against routing.json (kt.db,
// pre-parsed) and the registry of converted JS modules (registry.js),
// calling each module's render(ktini, ktvars) in place of EvalFile.

import { ktini } from "./legacy-config.js";
import { routing } from "./legacy-routing.js";
import { registry, KNOWN_BROKEN_DIR } from "./registry.js";

const DEFAULT_KEY = "1000";

// Port of kt.cgi's String2hash(): splits "key1=value1&key2=value2" (or
// space-delimited, same as the original) and decodes +/%XX the same way a
// browser's application/x-www-form-urlencoded body would. Mutates `target`
// in place, first-wins (mirrors `unless $$hash{$paramname}` exactly).
export function string2hash(str, target) {
  if (!str) return;
  const parts = str.split(/[& ]/).filter((p) => p.length > 0);
  for (const part of parts) {
    const separator = part.indexOf("=");
    let name = separator < 0 ? part : part.slice(0, separator);
    let value = separator < 0 ? "" : part.slice(separator + 1);
    if (name === undefined) continue;
    if (value === undefined) value = "";
    name = decodeKtField(name);
    value = decodeKtField(value);
    if (!target[name]) {
      target[name] = value;
    }
  }
}

// +  -> space, then %XX -> character, in that order (matches String2hash's
// two separate s///g passes rather than a single decodeURIComponent call --
// decodeURIComponent would choke on a bare "%" that isn't valid percent-
// encoding, which 1998-era query strings and kt.db args occasionally have).
function decodeKtField(s) {
  return s.replace(/\+/g, " ").replace(/%([0-9A-Fa-f]{2})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

function lookupChain(key) {
  const chain = routing[key];
  if (chain && chain.length > 0) return chain;
  return routing[DEFAULT_KEY] || [];
}

function placeholder(dir, file, reason) {
  return `<!-- router: could not render ${dir}/${file} (${reason}) -->`;
}

async function runEntry(entry, ktvars) {
  // kt.cgi: String2hash($Args2load, \%ktvars) -- merge this entry's own
  // args into ktvars, first-wins, BEFORE running the script (so the script
  // sees its own args merged in, same as the original).
  const argString = Object.entries(entry.args || {})
    .map(([k, v]) => `${k}=${v}`)
    .join("&");
  string2hash(argString, ktvars);

  if (entry.dir === KNOWN_BROKEN_DIR) {
    return placeholder(entry.dir, entry.file, "known kt.db typo -- see registry.js");
  }

  const mod = registry[`${entry.dir}/${entry.file}`];
  if (!mod || typeof mod.render !== "function") {
    return placeholder(entry.dir, entry.file, "not converted yet");
  }

  // render() is sync for plain templates and async for data-driven ones
  // (statepage.js, b_fillin_db.js, wonders.js) -- awaiting a non-Promise
  // value is a no-op, so one code path handles both uniformly.
  return await mod.render(ktini, ktvars);
}

// queryString: the part after "?" in the current URL (no leading "?").
// Returns the full assembled page as an HTML string, matching kt.cgi's
// <HTML>...</HTML>-wrapped output.
export async function renderPage(queryString) {
  const ktvars = {};
  string2hash(queryString, ktvars);

  const chain = lookupChain(ktvars.KEY);

  let body = "";
  for (const entry of chain) {
    body += await runEntry(entry, ktvars);
  }

  return `<HTML>\n${body}</HTML>\n`;
}

// Convenience wrapper for real browser use: reads window.location.search.
export async function renderCurrentPage() {
  const search = typeof window !== "undefined" ? window.location.search.replace(/^\?/, "") : "";
  return renderPage(search);
}
