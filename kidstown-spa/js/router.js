// Replaces cgi-bin/kt.cgi + cgi-bin/kt.db.
//
// The old engine: read KEY from the query string, look up every kt.db line for that KEY,
// eval each matching Perl fragment in order, concatenate the printed HTML.
//
// This router: look up KEY in the `routes` object (populated by cityhall.js / toystore.js /
// citypark.js calling registerRoute()), call its render function, inject the HTML.
//
// Two link styles are supported, matching the two styles the original .pl files used:
//   1. <a href="#" data-key="5210">...</a>          (cityhall/toystore - a fixed numeric KEY)
//   2. <a href="#?KEY=2010&page=3&from=2">...</a>   (citypark - KEY plus dynamic params,
//                                                     ported straight from page.pl's own
//                                                     generated links)

const routes = {}; // KEY (number) -> function(params) -> HTML string

function registerRoute(key, renderFn) {
  routes[key] = renderFn;
}

function navigate(key, params = {}) {
  const render = routes[key];
  const app = document.getElementById("app");
  if (!render) {
    app.innerHTML = `<p>Unknown page: KEY=${key}</p>`;
    return;
  }
  app.innerHTML = render(params);
  document.getElementById("nav").innerHTML = renderNavbar(params.HelpState || 1010);

  const query = new URLSearchParams();
  query.set("KEY", key);
  for (const [k, v] of Object.entries(params)) query.set(k, v);
  history.pushState({ key, params }, "", "#" + query.toString());
  window.scrollTo(0, 0);
}

function parseHrefParams(href) {
  // href looks like "#?KEY=2010&page=3&name=Sam&from=2" (or just "#" with no query at all)
  const qIndex = href.indexOf("?");
  const queryString = qIndex === -1 ? "" : href.slice(qIndex + 1);
  const search = new URLSearchParams(queryString);
  const key = Number(search.get("KEY"));
  const params = {};
  for (const [k, v] of search.entries()) {
    if (k === "KEY") continue;
    params[k] = v;
  }
  return { key, params };
}

document.addEventListener("click", (e) => {
  const a = e.target.closest("a");
  if (!a) return;

  // Style 1: data-key attribute (cityhall / toystore)
  if (a.dataset.key) {
    e.preventDefault();
    const params = a.dataset.params ? JSON.parse(a.dataset.params) : {};
    navigate(Number(a.dataset.key), params);
    return;
  }

  // Style 2: href="#?KEY=...&..." (citypark, ported directly from page.pl's own links)
  const href = a.getAttribute("href") || "";
  if (href.startsWith("#") && href.includes("KEY=")) {
    e.preventDefault();
    const { key, params } = parseHrefParams(href);
    if (!Number.isNaN(key)) navigate(key, params);
  }
});

window.addEventListener("popstate", (e) => {
  if (e.state) {
    navigate(e.state.key, e.state.params);
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const hash = location.hash.startsWith("#") ? location.hash.slice(1) : "";
  const search = new URLSearchParams(hash);
  const startKey = Number(search.get("KEY")) || 1000;
  const params = {};
  for (const [k, v] of search.entries()) {
    if (k === "KEY") continue;
    params[k] = v;
  }
  navigate(startKey, params);
});
