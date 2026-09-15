// Hand-converted from library/ortale.pl (KidsTown CGI/Perl -> SPA content module)
// A "Wacky Web Tale" madlib: plugs the 3 words chosen on b_or_tale.pl's form
// (recycle/forest/trees) into a fixed story about Oregon. No data file, no
// scoring -- pure string interpolation (see ctale.js for why this was
// classified "complex" despite having no real logic).
export function render(ktini, ktvars) {
  return `<HTML>
<HEAD>
<TITLE>KidsTown Geography: Wacky Web Tale: Answers Oregon</TITLE>
<BODY BGCOLOR="A2F9CD" TEXT=BLACK VLINK="PURPLE" ALINK="RED" LINK="BLUE">
</HEAD>
<BODY>
<CENTER>
<TABLE BORDER=0 WIDTH=100%>
 <TR>
   <TD> <IMG SRC="${ktini.librarygraphics}/b_or_map.gif"
            ALIGN="MIDDLE"
   <TD> <EM> <FONT SIZE=+5 COLOR=#8812A4>
\t\tOregon  </FONT> </EM>
</TABLE>
</CENTER>
<BR><BR>
<center>
<IMG width=100%   SRC="${ktini.librarygraphics}/sun-line.gif"
        ALT="Line">
</center>
<BR> <BR>
<H3>The following are brief paragraphs that will tell you a little more
       about the choices you made.  Read through them and try to
       imagine how the sentences would have sounded with the other selections,
       or just go back and try a different word.</H3>
<HR>
<P>Oregon is bordered on three side by Washington, Idaho, Nevada and
       California.  The very <B> ${ktvars.trees} </B> Pacific Ocean borders
Oregon on the west side of the state.  The Columbia River is 7 miles
       wide where it empties into the Pacific Ocean.  It is so
<B>${ktvars.trees}</B>,
       in fact, that <B> ${ktvars.trees} </B> oceangoing ships can travel
up the river for 200 miles.  The <B> ${ktvars.trees} </B> Crater Lake is
the deepest lake in the United States.  It's located in an extinct
volcano,Mount Mazama.</P>
<HR>
<P>In 1971 Oregon became the first state to require that beverage cans
       and bottles be returnable.  Now all of Oregon's <B> ${ktvars.recycle}
</B>        participate in the recycling program.</P>
<HR>
<P>In a process called clear-cutting, many of Oregon's
       <B> ${ktvars.forest} </B> forests have disappeared.  Many
       <B> ${ktvars.forest} </B> trees were between 200 and 1,200 years old.
Many animals and birds are endangered by the removal of these trees.
       Oregon is now requiring smarter ways to remove trees.  In the
future
       Oregon hopes to have many <B> ${ktvars.forest} </B> forests again.
       </P>
<BR><BR>
<center>
<IMG width=100%   SRC="${ktini.librarygraphics}/sun-line.gif"
        ALT="Line">
</center>
<BR> <BR>
<CENTER>
<H2><A
HREF="${ktini.engine}?KEY=6500&statename=Oregon&state=37"<B>Back To
Web
Tale</B></A></H2>
</CENTER>
<!-- END OF CONTENT -->
</TD>
</TR>
</TABLE
</BODY>
</HTML>
`;
}
