// Converted from scripts/museum/planet.pl; original top-level HTML output.
// No Perl subroutines: this module exports template data, not added functions.
export const template = `<HEAD>
  <TITLE>KidsTown Museum - Planetarium</TITLE>
</HEAD>

<BODY BGCOLOR="#000000" TEXT="WHITE" ALINK="RED" LINK="YELLOW" VLINK="YELLOW">

<DIV ALIGN="CENTER">
<FONT SIZE=+2>Thank you for deciding to visit the Planetarium.</FONT>
<BR><BR><BR>
<IMG BORDER=0 SRC="{{museumgraphics}}/overpg.gif">
<BR><BR><BR>
</DIV>

<DIV ALIGN="CENTER">
<TABLE WIDTH=400>
<TR>
<TD COLSPAN=2 ALIGN=CENTER>
<FONT SIZE=+2>Please select a tour of our Solar System:</FONT>
</TD>
</TR>
<TR>
<TD WIDTH=200 ALIGN=CENTER>
<FONT SIZE=+2><A HREF="{{engine}}?KEY=8510">Basic Tour</A></FONT>
</TD>
<TD WIDTH=200 ALIGN=CENTER>
<FONT SIZE=+2><A HREF="{{engine}}?KEY=8520">Advanced Tour</A></FONT>
</TD>
</TR>
</TABLE>
</DIV>

<BR CLEAR="ALL">

<BR><BR><BR>
`;
export default template;
