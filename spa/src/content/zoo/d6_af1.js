// Auto-converted from d6_af1.pl (KidsTown CGI/Perl -> SPA content module)
// (source had an RCS revision-log comment block before the print statement,
// which is why classify.py originally flagged it "complex" -- verified by
// hand that it's a pure heredoc template with no real logic)
export function render(ktini, ktvars) {
  return `<br>
<BR>
<CENTER>
<FONT SIZE=5>

<P>What is the tallest land animal living in the world today?</P>
<A HREF="${ktini.engine}?KEY=9240">Elephant</A><BR>
<A HREF="${ktini.engine}?KEY=9230">Giraffe</A><BR>
<A HREF="${ktini.engine}?KEY=9220">Hippopotamus</A><BR> <BR>
<P>
Instructions:  Please choose the answer you think is correct.
</P><BR CLEAR="ALL">

<br>
<br>

</CENTER>
</BODY>`;
}
