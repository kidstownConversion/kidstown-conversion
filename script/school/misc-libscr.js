// Converted from scripts/school/misc-libscr.pl; same three functions.
// Copyright (c) 1996 Paramount Consulting. UNPUBLISHED WORK. ALL RIGHTS RESERVED.
// Original notice: distribution/modification requires prior expressed written consent.
import {escapeHTML} from '../../integration/context.js';
import {MyURL} from './cgi-lib.js';

export function Top(title, backgroundImage, backgroundColor, textColor, url) {
  return `<html><head><title>${escapeHTML(title)}</title></head><body bgcolor="${escapeHTML(backgroundColor)}" background="${escapeHTML(backgroundImage)}" text="${escapeHTML(textColor)}"><form method="post" action="${escapeHTML(MyURL(url))}">`;
}
export function Botm() { return '</form></body></html>'; }
export function Die(message) { throw new Error(String(message)); }
