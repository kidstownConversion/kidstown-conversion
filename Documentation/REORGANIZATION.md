# Integrated repository layout

Based on kidstown-conversion-main (2).zip. The two nested applications are combined into one root index.html. This ZIP is a prepared repository update; it has not been pushed to GitHub.

## Layout

- script/home, script/cityhall, script/citypark, script/toystore, script/school, script/museum, script/library, script/township, script/zoo: section implementations
- integration: shared browser routing, adapters, KEY maps and configuration
- data: activity data by section
- graphics: images by section
- css: site styling
- Documentation: retained team documents and this guide
- tests: automated validation
- .github/workflows/pages.yml: existing Pages workflow updated to stage the root website

The original 45 School/Museum files are byte-for-byte identical to the latest uploaded ZIP. Other section files were moved and their relative imports adjusted where necessary. Shared configuration now uses relative paths for GitHub project Pages. The real converted Home page replaces the previous stand-in, whose text is archived in Documentation/previous-home-standin.js.txt. Both original nested application directories are superseded.

## Run locally

In PowerShell, open the folder containing index.html:

```powershell
py -m http.server 8000
```

Open http://localhost:8000/ . No npm build or Perl server is needed to preview. Use Ctrl+C to stop the server.

## Updating the existing Git checkout

Pull the latest main branch before applying this package. Keep .git and the updated .github directory. Copy this package's contents into the checkout. Remove the old spa/ and kidstown-spa/ directories from the checkout only after confirming there are no newer teammate changes inside them; their supplied code is already reorganized in this package. Copying the ZIP alone does not remove old tracked folders. Review git status and git diff --stat before committing. Do not overwrite newer teammate work with an older snapshot.

The included Pages workflow retains its existing actions, permissions and main-branch trigger. It stages index.html, script/, integration/, data/, graphics/ and css/ in _site before deployment. Tests and documentation are not deployed. GitHub deployment itself has not been executed here.

## Integration behavior

Home, Library, Township and Zoo use the new teammate's registry/render(ktini, ktvars) interface. City Hall, City Park and Toy Store retain registerRoute(KEY, renderer). School/Museum retain their default-export modules and ordered fragment routes. Shared adapters join these interfaces without combining the individual activity files.

The shared router handles links, clickable image-map areas, hidden KEY form fields, button values, async rendering, refresh and browser Back/Forward. Navigation waits for route registration before showing the initial page. Existing classic scripts load from index.html. New arbitrary uploaded scripts are NOT automatically discovered; each new activity still needs registration using one of the documented existing interfaces.

## Validation and limitations

17 automated tests passed, including all 37 School/Museum routes, the 96 supported new teammate route chains (with necessary form inputs), all 51 state records, both Library fill-in records, games, classic section route rendering, image paths, form handling, history restoration and combined startup. All JS passes syntax checks; relocated ES module imports resolve. Browser visual testing and actual GitHub deployment were not performed.

The supplied Library references graphics/library/pzl2.gif, which is missing from the uploaded files and original template. That image may appear broken until the team supplies it. A case mismatch in the Turkey image reference is normalized by the shared router for Linux/GitHub Pages. The teammate's documented truncated Library text and legacy content behavior remain as supplied.

Run tests with Node.js installed:

```powershell
node --test tests/conversion.test.js tests/router.test.cjs tests/new-sections.test.js
```
