// Replaces cgi-bin/kt.ini. Once everything is static, the *scripts and *data paths from
// kt.ini are gone (their content is now baked directly into cityhall.js / toystore.js /
// citypark-pages.js) -- only the graphics paths are still needed, since <img> tags still
// need somewhere to point.
const config = {
  homeGraphics: "assets/home",
  cityhallGraphics: "assets/cityhall",
  toystoreGraphics: "assets/toystore",
  cityparkGraphics: "assets/citypark",
};
