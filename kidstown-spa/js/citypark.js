// Port of scripts/citypark/main.pl and scripts/citypark/page.pl.
//
// Original behavior (page.pl):
//   - loads data/citypark/page<N>
//   - does 6 substitutions: #name#, #xname#, #page#, #from#, #ktini{engine}#, #ktini{cityparkgraphics}#
//   - wraps the result in a fixed HTML shell
// This file reproduces that exactly, minus the two tokens that no longer make sense once
// there's no server round-trip (#ktini{engine}# and #xname#'s +-encoding are handled by the
// router itself -- see js/router.js's handling of href="#?KEY=..." links).

let cityParkName = "My friend"; // matches page.pl's default: if ($ktvars{name} eq "") { "My friend" }

function renderCityParkPage(pageNum, fromPage) {
  const raw = cityParkPages[pageNum];
  if (!raw) {
    return `<p>City Park page ${pageNum} does not exist.</p>`;
  }

  const xname = cityParkName.replace(/ /g, "+"); // mirrors page.pl's $xname substitution

  const theText = raw
    .replaceAll("#name#", cityParkName)
    .replaceAll("#xname#", xname)
    .replaceAll("#page#", String(pageNum))
    .replaceAll("#from#", String(fromPage));

  return `
    <center><h1>${cityParkName}'s Big Journey</h1></center>
    <hr>
    <blockquote><font size="+2">${theText}</font></blockquote>
    <hr>
  `;
}

// KEY 2000 <- scripts/citypark/main.pl (name entry form)
registerRoute(2000, () => `
  <center><h1>KidsTown City Park - Your Big Journey</h1></center>
  <hr>
  <font size="+2">
  <p>
  Hello, and welcome to the KidsTown City Park. You are about to go on a
  big journey through the park. To get started, click in the box below this
  paragraph and type in your first name. Then, put your mouse over the
  "Let's Go" button and click.
  </p>
  <form id="citypark-start-form">
    <input type="text" id="citypark-name-input" size="10" value="">
    <button type="submit">Let's Go !!</button>
  </form>
  </font>
  <hr>
`);

// KEY 2010 <- scripts/citypark/page.pl (renders whichever page= was requested)
registerRoute(2010, (params) => {
  const pageNum = Number(params.page) || 1;
  const fromPage = params.from !== undefined ? params.from : 0;
  if (params.name) cityParkName = decodeURIComponent(String(params.name).replace(/\+/g, " "));
  return renderCityParkPage(pageNum, fromPage);
});

// Wire up the name-entry form. Runs once per render of KEY 2000, right after
// the router injects that route's HTML into #app (see js/router.js).
document.addEventListener("submit", (e) => {
  if (e.target && e.target.id === "citypark-start-form") {
    e.preventDefault();
    const input = document.getElementById("citypark-name-input");
    cityParkName = input.value.trim() || "My friend";
    navigate(2010, { page: 1, from: 0 });
  }
});
