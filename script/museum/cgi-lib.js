// Copyright (c) 1996 Steven E. Brenner. Unpublished work.
// Permission granted to use/modify with copyright, credit and documented changes.
// Converted from scripts/museum/cgi-lib.pl. The original copies ktvars rather
// than reading stdin. Browser adaptation uses an explicit object; no server ENV.
import {escapeHTML} from '../../integration/context.js';

export function ReadParse(params = {}, target = Object.create(null)) {
  let count = 0;
  for (const [key, value] of Object.entries(params)) {
    if (['__proto__', 'constructor', 'prototype'].includes(key)) continue;
    target[key] = String(value); count++;
  }
  return count;
}
export function PrintHeader() { return ''; }
export function HtmlTop(title) { return `<html><head><title>${escapeHTML(title)}</title></head><body><h1>${escapeHTML(title)}</h1>`; }
export function HtmlBot() { return '</body></html>'; }
export function SplitParam(param = '') { return String(param).split('\0'); }
export function MethGet(method = 'GET') { return String(method).toUpperCase() === 'GET'; }
export function MethPost(method = 'GET') { return String(method).toUpperCase() === 'POST'; }
export function MyBaseUrl(url = globalThis.location?.href || 'http://localhost/') {
  const parsed = new URL(url); parsed.search = ''; parsed.hash = ''; return parsed.href;
}
export function MyFullUrl(url = globalThis.location?.href || 'http://localhost/') { return new URL(url).href; }
export function MyURL(url) { return MyBaseUrl(url); }
export function CgiError(...messages) {
  if (!messages.length) messages = ['An activity error occurred.'];
  let html = `<h1>${escapeHTML(messages[0])}</h1>`;
  for (const message of messages.slice(1)) html += `<p>${escapeHTML(message)}</p>`;
  return html;
}
export function CgiDie(...messages) { throw new Error(messages.join(' ') || 'An activity error occurred.'); }
export function PrintVariables(values = {}) {
  let html = '<dl>';
  for (const key of Object.keys(values).sort()) {
    for (const value of SplitParam(values[key])) html += `<dt>${escapeHTML(key)}</dt><dd>${escapeHTML(value).replaceAll('\n', '<br>')}</dd>`;
  }
  return html + '</dl>';
}
export function PrintEnv(environment = {}) { return PrintVariables(environment); }
