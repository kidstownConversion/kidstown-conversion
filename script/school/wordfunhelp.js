// Converted from scripts/school/wordfunhelp.pl; original top-level HTML output.
// No Perl subroutines: this module exports template data, not added functions.
export const template = `<HEAD>
<TITLE>KidsTown: School: Word Fun: Help</TITLE>
</HEAD>
<BODY BGCOLOR="#FFFFFF" TEXT="#000000" LINK="ff0000" ALINK="990000" VLINK="990000">
<CENTER>
<H1>Welcome to the Word Fun Activity Help Page</H1>
<FORM METHOD="POST" ACTION="{{engine}}">
<INPUT TYPE=HIDDEN NAME=KEY VALUE=4001>
<TABLE WIDTH=600 BORDER=0>
<TR><TD WIDTH=100></TD><TD WIDTH=400></TD><TD WIDTH=100></TD></TR>
<TR>
<TD COLSPAN=3>
<BR>
<HR>
<H2>
<UL>
<LI>This is a spelling activity with the word difficulty based on the level you chose.</LI>
<BR>
<LI>The object is to try and guess the correct word given the number of letters in it.</LI>
<BR>
<LI>Click on a letter button; if the letter you clicked on is in the word, it will appear in one or more of the blanks.</LI><BR>
<LI>If the letter is not in the word, you are given another chance to guess a correct one.</LI>
</H2>
</UL>
</TD>
</TR>
</TABLE>
</FORM>
<A HREF="{{engine}}?KEY=4001">Play the word fun activity</A>
</CENTER>
</BODY>
`;
export default template;
