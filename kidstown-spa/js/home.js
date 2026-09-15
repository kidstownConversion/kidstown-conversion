// Minimal stand-in for KEY 1000 (scripts/home/mainPgHdr.pl + ktmap.pl + mainPgTxt.pl + mainPgFtr.pl)
// and KEY 1010 (the default help page). Not part of this conversion pass (only City Hall, Toy
// Store, and City Park were in scope) -- replace with the real converted home page once that's
// done, following the same registerRoute() pattern used in cityhall.js / toystore.js / citypark.js.

registerRoute(1000, () => `
  <center>
    <h1>Welcome to KidsTown</h1>
    <p>Pick a place to visit from the nav bar above.</p>
    <p>Converted so far: <a href="#" data-key="5000">City Hall</a>,
       <a href="#" data-key="7000">Toy Store</a>,
       <a href="#" data-key="2000">City Park</a>.</p>
  </center>
`);

registerRoute(1010, () => `
  <center>
    <h2>Help</h2>
    <p>Click any underlined link to move to the next page. Use the nav bar at the
       top to jump between sections, or your browser's Back button to go back.</p>
  </center>
`);
