// Converted from scripts/school/file-lib.pl.
// Copyright (c) 1996 Paramount Consulting. UNPUBLISHED WORK. ALL RIGHTS RESERVED.
// Original notice: distribution/modification requires prior expressed written consent.
// Browser adaptation: reads use static assets; writes affect only the supplied
// browser state Map (not the server, repository, or other users).
import {parseRecords, schoolFile} from '../../integration/context.js';

export async function GetFileNames(directory, ctx) {
  if (directory.replace(/\/$/, '') !== ctx.config.schooldata.replace(/\/$/, '')) throw new Error('Unknown data directory.');
  const files = [];
  for (let i = 1; i <= 3; i++) {
    const name = `e_data${i}.txt`;
    const text = await ctx.text(`${ctx.config.schooldata}/${name}`);
    files.push(name + '\t' + text.split(/\r?\n/)[0]);
  }
  return files;
}

export async function GetRecord(file, number, ctx) {
  schoolFile(ctx, file);
  const records = ctx.state.get('records:' + file) ?? parseRecords(await ctx.text(file));
  if (!Number.isInteger(Number(number)) || Number(number) < 1 || Number(number) > records.length) throw new Error('Invalid record number.');
  return {...records[Number(number) - 1]};
}

export async function CountRecords(file, ctx) {
  schoolFile(ctx, file);
  return (ctx.state.get('records:' + file) ?? parseRecords(await ctx.text(file))).length;
}

export async function WriteRecord(file, record, ctx) {
  schoolFile(ctx, file);
  const records = ctx.state.get('records:' + file) ?? parseRecords(await ctx.text(file));
  const value = Array.isArray(record) ? parseRecords('.\n' + record.join('\n') + '\n.')[0] : {...record};
  if (!value || !Object.keys(value).length) throw new Error('Empty record.');
  ctx.state.set('records:' + file, [...records, value]);
  return 1;
}

export async function FindRecord(file, index, criteria, ctx) {
  const count = await CountRecords(file, ctx);
  if (!count) return 0;
  if (!Number.isInteger(Number(index)) || index < 0 || index > count) throw new Error('Invalid search index.');
  for (let offset = 0; offset < count; offset++) {
    const number = (Number(index) + offset) % count + 1;
    const record = await GetRecord(file, number, ctx);
    const values = Object.values(record);
    let matches = true;
    for (let i = 0; i < criteria.length; i++) {
      // Literal matching replaces the unsafe user-supplied regex in Perl.
      const term = String(criteria[i] ?? '').replace(/[.)(?*^]/g, ' ');
      if (term && !String(values[i] ?? '').replace(/[.)(?*^]/g, ' ').includes(term)) matches = false;
    }
    if (matches) return number;
  }
  return 0;
}

export async function RemoveRecord(file, number, ctx) {
  await GetRecord(file, number, ctx); // Validate before modifying browser state.
  const records = ctx.state.get('records:' + file) ?? parseRecords(await ctx.text(file));
  ctx.state.set('records:' + file, records.filter((_, index) => index !== Number(number) - 1));
  return 1;
}
