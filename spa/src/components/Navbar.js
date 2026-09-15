// Auto-converted from home/navbar.pl (KidsTown CGI/Perl -> SPA shared component)
//
// Rendered on nearly every page in the original site (chained after each page's
// content in kt.db, usually as `homescripts/navbar.pl HelpState=NNNN`). All the
// section buttons are hardcoded KEYs; only the Help button's target depends on
// the calling page via ktvars.HelpState (defaults to 1010, same as the original).
//
// Links use the same `${ktini.engine}?KEY=...` convention as every other content
// module -- the router should intercept clicks on these globally (e.g. a single
// document-level click listener checking the href) rather than each page having
// to special-case navigation.

export function render(ktini, ktvars) {
  const helpState = ktvars.HelpState !== undefined ? ktvars.HelpState : 1010;
  return `<CENTER>
<TABLE BORDER=0 CELLSPACING=0 CELLPADDING=0>
<TR>
<!--BEGIN NAV BUTTONS-->
<TD><A HREF="${ktini.engine}?KEY=1000">
  <IMG
SRC="${ktini.homegraphics}/navbtn_town.gif"
BORDER=0><CENTER>KidsTown<CENTER></A>
</TD>
<TD><A HREF="${ktini.engine}?KEY=5000">
  <IMG
SRC="${ktini.homegraphics}/navbtn_cityhall.gif"
BORDER=0><CENTER>CityHall</CENTER></A>
</TD>
<TD><A HREF="${ktini.engine}?KEY=4000">
  <IMG
SRC="${ktini.homegraphics}/navbtn_school.gif"
BORDER=0><CENTER>School</CENTER></A>
</TD>
<TD><A HREF="${ktini.engine}?KEY=6000">
  <IMG
SRC="${ktini.homegraphics}/navbtn_library.gif"
BORDER=0><CENTER>Library</CENTER></A>
</TD>
<TD><A HREF="${ktini.engine}?KEY=9000">
  <IMG
SRC="${ktini.homegraphics}/navbtn_zoo.gif"
BORDER=0><CENTER>Zoo</CENTER></A>
</TD>
<TD><A HREF="${ktini.engine}?KEY=7000">
  <IMG
SRC="${ktini.homegraphics}/navbtn_toystore.gif"
BORDER=0><CENTER>ToyStore</CENTER></A>
</TD>
<TD><A HREF="${ktini.engine}?KEY=2000">
  <IMG
SRC="${ktini.homegraphics}/navbtn_citypark.gif"
BORDER=0><CENTER>CityPark</CENTER></A>
</TD>
<TD><A HREF="${ktini.engine}?KEY=3000">
  <IMG
SRC="${ktini.homegraphics}/navbtn_township.gif"
BORDER=0><CENTER>TownShip</CENTER></A>
</TD>
<TD><A HREF="${ktini.engine}?KEY=8000">
  <IMG
SRC="${ktini.homegraphics}/navbtn_museum.gif"
BORDER=0><CENTER>Museum</CENTER></A>
</TD>
<TD><A HREF="${ktini.engine}?KEY=${helpState}">
  <IMG
SRC="${ktini.homegraphics}/navbtn_help.gif"
BORDER=0><CENTER>Help</CENTER></A>
</TD>
<!--END NAV BUTTONS-->
</TR>
</TABLE>
</CENTER>
`;
}
