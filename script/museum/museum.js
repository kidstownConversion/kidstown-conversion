// Converted from scripts/museum/museum.pl; original top-level HTML output.
// No Perl subroutines: this module exports template data, not added functions.
export const template = `<HEAD>
  <TITLE>KidsTown Museum</TITLE>
</HEAD>

<BODY BGCOLOR="#EEE2B4" TEXT="BLACK" ALINK="RED" LINK="BLUE" VLINK="PURPLE">

<DIV ALIGN="CENTER">
<B>
<FONT SIZE=+4>KidsTown Museum</FONT><BR>
<FONT SIZE=+2>Open to the Public</FONT>
</B>
</DIV>

<Center><IMG SRC="{{museumgraphics}}/museum.gif"></center>

<BR CLEAR="ALL">

<BLOCKQUOTE>
<CENTER>
<B><FONT FACE="arial,helvetica" SIZE=+2>
<P>Welcome to the museum!</P>
<P>The current exhibit: 
<A HREF="{{engine}}?KEY=8010">The Color Exhibition</A>
</P>
<P>The Planetarium show:
<A HREF="{{engine}}?KEY=8550">Our Solar System</A></P>
<BR><BR>
<P><I>Or visit other KidsTown activities</P></I>
</CENTER>
</BLOCKQUOTE>`;
export default template;
