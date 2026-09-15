// Hand-converted from library/witale.pl (KidsTown CGI/Perl -> SPA content module)
// A "Wacky Web Tale" madlib: plugs the 3 words chosen on b_wi_tale.pl's form
// (favorite/native/name) into a fixed story about Wisconsin. No data file,
// no scoring -- pure string interpolation (see ctale.js for why this was
// classified "complex" despite having no real logic).
//
// PRE-EXISTING BUG (kept faithfully, not fixed): the original Perl reads
// "$in{'name'}" in one spot instead of "$ktvars{'name'}" -- %in is a
// leftover from Steve Brenner's cgi-lib.pl convention and is never
// populated by kt.cgi's actual %ktvars-based flow, so that spot always
// rendered as empty in the original site. Reproduced here as "" rather than
// silently "fixing" it to ktvars.name -- flagged for the team to decide.
export function render(ktini, ktvars) {
  const inName = ""; // faithful reproduction of the $in{'name'} bug above
  return `<HTML>
<HEAD>
<TITLE>KidsTown Geography:Wacky Web Tale: Answers Wisconsin</TITLE>
<BODY BGCOLOR="A2F9CD" TEXT=BLACK VLINK="PURPLE" ALINK="RED" LINK="BLUE">
</HEAD>
<BODY>
<!-- BEGIN OPENING PHRASE -->
<CENTER>
<TABLE BORDER=0 WIDTH=100%>
 <TR>
   <TD> <IMG SRC="${ktini.librarygraphics}/b_wi_map.gif"
            ALIGN="MIDDLE"
   <TD> <EM> <FONT SIZE=+5 COLOR=#00bb01>
\t\tWisconsin  </FONT> </EM>
</TABLE>
</CENTER>
<BR><BR>
<center>
<IMG width=100%   SRC="${ktini.librarygraphics}/bead-line.gif"
        ALT="Line">
</center>
<BR> <BR>
<H3>The following are brief paragraphs that will tell you a little more
       about the choices you made.  Read through them and try to
       imagine how the sentences would have sounded with the other selections,
       or just go back and try a different word.</H3>
<P><BR>When <B>${ktvars.name}</B> and other children visit
Wisconsin, they
can learn all about the glaciers that once covered most of the state.
Because
of the glaciers, most of Wisconsin is flat and has very fertile soil.
Many
crops like <B>${ktvars.favorite}</B>, corn, and cranberries are grown on these
lands today.  But Wisconsin is most famous for its dairy farming.
Wisconsin produces more milk and dairy products than any other state.</P>
<HR>
<P><BR>The very first people to live in Wisconsin were the Native
Indians.  Tribes like the <B>${ktvars.native}</B>, Fox, Sauk, and Kickapoo
settled in Wisconsin after the Ice Age.  Some Native Americans built large
burial mounds shaped like animals.  When Europeans first came to
Wisconsin,
they were friends with the Native people. They traded furs and other goods
with them.  Through wars and diseases many Native people have died.  Today,
most Native Americans live on reservations.</P>
<HR>
<P><BR>Many famous indivduals were born in Wisconsin.  One name that
<B>${inName}</B> might be familiar with is Oshkosh.  Oshkosh was a famous
Menominee Indian leader who successfully kept his tribal lands.  There is a
city named after him, Oshkosh.  Are you still unfamiliar with his name?
Well, have you heard
of Oshkosh clothes for kids?  <B>${ktvars.name}</B> might have read some books,
or seen a television show about another famous Wisconsinite, Laura
Ingalls
Wilder, who was born in Pepin, Wisconsin. She wrote the <i>Little House
on the
Prairie </i>books, which later became a television series.</P>
<BR><BR>
<center>
<IMG width=100%   SRC="${ktini.librarygraphics}/bead-line.gif"
        ALT="Line">
</center>
<BR> <BR>
<CENTER>
<H2><A
HREF="${ktini.engine}?KEY=6300&statename=Wisconsin&state=49"<B>Back To Web
Tale</B></A></H2>
</CENTER>
</TD>
</TR>
</TABLE>
</CENTER>
</BODY>
</HTML>
`;
}
