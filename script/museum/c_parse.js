// Converted from scripts/museum/c_parse.pl; same two named functions.
import {parseRecords} from '../../integration/context.js';

export async function GetRecord(file, number, ctx) {
  if (![`${ctx.config.museumdata}/ss1.dat`, `${ctx.config.museumdata}/ss2.dat`].includes(file)) throw new Error('Unknown museum dataset.');
  const records = parseRecords(await ctx.text(file));
  if (!Number.isInteger(Number(number)) || number < 1 || number > records.length) throw new Error('Invalid question number.');
  return {...records[Number(number) - 1]};
}

export async function CountRecords(file, ctx) {
  if (![`${ctx.config.museumdata}/ss1.dat`, `${ctx.config.museumdata}/ss2.dat`].includes(file)) throw new Error('Unknown museum dataset.');
  return parseRecords(await ctx.text(file)).length;
}
