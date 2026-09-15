// Regarding home/passer.pl (KidsTown CGI/Perl) -- this one does not convert.
//
// The original just read whatever file `passer_file_name` pointed to (in
// practice always ../htdocs/index.html) and dumped its raw bytes into the
// response -- a hack that let KEY=101 "serve" the static homepage through the
// same CGI URL contract kt.cgi used for everything else.
//
// There's no meaningful browser equivalent to "read an arbitrary file off
// disk", and it doesn't need one: KEY=101 and KEY=102 (the only kt.db entries
// that reference passer.pl / this HelpState=15000 navbar variant) are not
// linked from anywhere else in kt.db -- no page, button, or nav link in the
// whole site points at them. They appear to be unused/vestigial.
//
// If your router needs an explicit "default/home" route, that's just the
// router's own default-KEY fallback (kt.cgi itself fell back to KEY=1000 when
// no match was found -- see src/router.js), not something passer.pl-specific
// needs to be reimplemented for. Flagging this for the team rather than
// silently dropping it: worth a 30-second confirmation that nothing else
// depends on KEY=101/102 before we treat this as fully resolved.
//
// Still exported as a real no-op render() (rather than leaving this module
// with no render at all) so router.js's registry/dispatch stays uniform --
// if KEY=101/102 ever do get requested, the page just renders nothing from
// this step instead of the router needing special-case code for one dead
// route.
export function render(ktini, ktvars) {
  return "";
}
