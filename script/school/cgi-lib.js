// Copyright (c) 1995 Steven E. Brenner.
// Permission granted to use/modify with copyright, credit and documented changes.
// Converted from scripts/school/cgi-lib.pl: browser parameters replace stdin/ENV;
// HTTP header output is empty in an SPA. All eight active subroutines retained.
import {escapeHTML} from '../../integration/context.js';
import {PrintVariables} from '../museum/cgi-lib.js';

export function ReadParse(source = globalThis.location?.search || '', target = Object.create(null)) {
  const pairs = typeof source === 'string' ? new URLSearchParams(source.replace(/^\?/, '').replaceAll(';', '&'))
    : source instanceof URLSearchParams || (typeof FormData !== 'undefined' && source instanceof FormData) ? source : Object.entries(source);
  let count = 0;
  for (const [key, value] of pairs) {
    if (['__proto__', 'constructor', 'prototype'].includes(key)) continue;
    target[key] = Object.hasOwn(target, key) ? target[key] + '\0' + String(value) : String(value);
    count++;
  }
  return count;
}
export function PrintHeader() { return ''; }
export function HtmlTop(title) { return `<html><head><title>${escapeHTML(title)}</title></head><body><h1>${escapeHTML(title)}</h1>`; }
export function HtmlBot() { return '</body></html>'; }
export function MethGet(method = 'GET') { return String(method).toUpperCase() === 'GET'; }
export function MethPost(method = 'GET') { return String(method).toUpperCase() === 'POST'; }
export function MyURL(url = globalThis.location?.href || 'http://localhost/') {
  const parsed = new URL(url); parsed.search = ''; parsed.hash = ''; return parsed.href;
}
// Perl called an undefined PrintVariables; use the existing Museum counterpart.
export function PrintVariablesShort(values = {}) { return PrintVariables(values); }
