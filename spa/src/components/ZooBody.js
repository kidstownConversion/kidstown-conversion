// Hand-converted from zoo/body.pl (KidsTown CGI/Perl -> SPA component module)
// Used in all 23 zoo-section KEY chains (same shared-component role as
// zoo/zoonavbar.pl -> src/components/ZooNavbar.js and home/navbar.pl ->
// src/components/Navbar.js). Only real logic in the whole zoo section:
// picks the <TITLE> based on whether this is the zoo's own top-level page
// (ZooHeader === "KidsTown Zoo") or a sub-page (any other ZooHeader text).
//
// PRE-EXISTING BUG, newly found while wiring up router.js (kept faithfully,
// not fixed): in EVERY zoo KEY's chain, zoo/body.pl runs BEFORE
// zoo/header.pl, which is the entry that actually sets ktvars.ZooHeader
// (confirmed against kt.db for all 23 zoo KEYs -- body.pl is always first).
// So at the moment body.pl's <TITLE> logic runs, ZooHeader has never been
// set, and the original Perl interpolated the undef $ktvars{ZooHeader} as
// an empty string -- meaning every single zoo page's real <TITLE> has
// always rendered as the literal "KidsTown Zoo: " (blank, with a trailing
// space), never "KidsTown Zoo: Animals of Africa" etc. as presumably
// intended. Reproduced here with `?? ""` (JS would otherwise stringify a
// missing property as the word "undefined", which is a JS artifact, not
// what 1998 Perl actually did) -- flagged for the team to decide whether to
// fix now that it's visible (e.g. by having header.pl's chain entry run
// before body.pl's).
export function render(ktini, ktvars) {
  const zooHeader = ktvars.ZooHeader ?? "";
  const title = zooHeader === "KidsTown Zoo" ? "KidsTown Zoo" : `KidsTown Zoo: ${zooHeader}`;

  return `<HEAD>
<!-- ***NOTE, the brackets starting with a '!' are comments -->
<TITLE>${title}</TITLE>
</HEAD>
<BODY BGCOLOR=#FFFFC0 TEXT=BLACK VLINK=PURPLE ALINK=RED LINK=BLUE>
`;
}
