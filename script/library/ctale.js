// Hand-converted from library/ctale.pl (KidsTown CGI/Perl -> SPA content module)
// A "Wacky Web Tale" madlib: plugs the 3 words chosen on b_ct_tale.pl's form
// (tribes/animals/pollution) into a fixed story. No data file, no scoring --
// pure string interpolation, so this converts directly (originally written as
// a sequence of print "..."; statements rather than one heredoc, which is why
// classify.py flagged it "complex" even though there's no real logic here).
export function render(ktini, ktvars) {
  return `<HTML>
<HEAD>
<TITLE>KidsTown Geography: Wacky Web Tale: Answers Connecticut</TITLE>
</HEAD>
<BODY BGCOLOR="A2F9CD" TEXT=BLACK VLINK=PURPLE ALINK=RED LINK=BLUE>
<!-- BEGIN OPENING PHRASE -->
<CENTER>
<TABLE BORDER=0 WIDTH=100%>
 <TR>
   <TD> <IMG SRC="${ktini.librarygraphics}/b_ct_map.gif"
            ALIGN="MIDDLE"
   <TD> <EM> <FONT SIZE=+5 COLOR=#ff3600>
\t\tConnecticut  </FONT> </EM>
</TABLE>
</CENTER>
<BR><BR>
<center>
<IMG width=100%   SRC="${ktini.librarygraphics}/forest-line.gif"
        ALT="Line">
</center>
<BR> <BR>
<!-- END OPENING PHRASE -->
<!-- BEGIN CONTENT -->
<H3>The following are brief paragraphs that will tell you a little more
       about the choices you made.  Read through them and try to
       imagine how the sentences would have sounded with the other selections,
       or just go back and try a different word.</H3>
<HR>
<P>
<B>${ktvars.tribes}</B> Native Indian tribes such as the Niantic, Podunk,
       Qunnipiac, and Pequot are native to the area of Connecticut.
       As in most regions of our country, Native Americans were killed to
       provide land and resources for the European settlers.
       <B>${ktvars.tribes}</B> Indians were killed by the diseases they caught
       from the Europeans.  Today, the remaining tribes live on reservations
       established by the European settlers and American government.</P>
<HR>
<P>Connecticut is so <B>${ktvars.animals}</B> that it could fit within
       Alasaka more than 117 times.  Even though Connecticut is a
       <B>${ktvars.animals}</B> state compared to other states, it has a large
       population.  With so many people living in such a <B>${ktvars.animals}</B>
       area most large animals such as bears and panthers have been pushed out
       of the state.  Many <B>${ktvars.animals}</B>  animals still live in
       Connecticut, like rabbits, minks, and squirrels.</P>
<HR>
<P>In the 1800s Connecticut had a <B>${ktvars.pollution}</B>.
There
       was a shortage of fertile land and an abundance of water.  So,
Connecticut
       became a very industrialized state with lots of textile mills and
       factories.  All of these industries dumped many pollutants into the
       waters of Connecticut.  This caused a new <B>${ktvars.pollution}</B>
       of water pollution.  Pollution from chemicals, sewage and spills has
       caused many fish and other creatures to die.  To fix the
       <B>${ktvars.pollution}</B>, Connecticut has written many laws concerning
       what can be put into its rivers.  There are many things that you
can
       do to help solve the <B>${ktvars.pollution}</B> of water pollution.
       Turning the water off while brushing your teeth saves precious water.
       You can also save water by taking quick showers instead of bathing.
With
       everyone working together, we can save one of our most precious
       resources, <B>water!</B></P>
<BR><BR>
<center>
<IMG width=100%   SRC="${ktini.librarygraphics}/forest-line.gif"
        ALT="Line">
</center>
<BR> <BR>
<!-- END OF CONTENT -->
<CENTER>
<H2><A
HREF="${ktini.engine}?KEY=6700&statename=Connecticut&state=7"<B>Back To
Web
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
