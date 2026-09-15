import {createContext} from './context.js';
import {renderSection} from './render-section.js';
import {renderPage} from './legacy-router.js';
import {routing} from './legacy-routing.js';
import {registry} from './registry.js';

// Shared navigation is already rendered outside #app.
registry['homescripts/navbar.pl'] = {render: () => ''};
for (const [key, chain] of Object.entries(routing)) {
  if (chain.length && chain.every(entry => registry[`${entry.dir}/${entry.file}`])) {
    registerRoute(Number(key), params => {
      if (key === '3007' && !params.file) return '<p>Choose a Wonders quiz first.</p><a href="#?KEY=3000">Township</a>';
      if (key === '6910' && !params.game) return '<p>Choose a Library activity first.</p><a href="#?KEY=6000">Library</a>';
      if (key === '101') return renderPage('KEY=1000');
      return renderPage(new URLSearchParams({...params, KEY: key}).toString());
    });
  }
}


try {
  const response = await fetch(new URL('./routes.json', import.meta.url));
  if (!response.ok) throw new Error(`Cannot load routes.json (${response.status})`);
  const map = await response.json();
  const state = new Map();
  for (const [key, entries] of Object.entries(map)) {
    registerRoute(Number(key), params => renderSection(entries, createContext({
      params: {...params, KEY: key}, state
    })));
  }
  const {key, params} = parseHrefParams(location.hash);
  await navigate(key, params, false);
} catch (error) {
  document.getElementById('app').textContent = `Could not start KidsTown: ${error.message}`;
}
