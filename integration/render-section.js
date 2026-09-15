import {renderTemplate} from './context.js';

// Only section-owned modules are allowed. Call this from the team's dispatcher.
export async function renderSection(entries, ctx) {
  let html = '';
  for (const entry of entries) {
    if (!/^script\/(school|museum)\/[\w-]+\.js$/.test(entry.module)) throw new Error('Not a School/Museum module.');
    for (const [key, value] of Object.entries(entry.defaults || {})) {
      if (!Object.hasOwn(ctx.params, key)) ctx.params[key] = value;
    }
    const module = await import(new URL('../' + entry.module, import.meta.url));
    html += typeof module.default === 'string' ? renderTemplate(module.default, ctx) : await module.default(ctx);
  }
  return html;
}
