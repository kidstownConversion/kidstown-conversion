// Auto-converted from d6_au11.pl (KidsTown CGI/Perl -> SPA content module)
// (source had an RCS revision-log comment block before the print statement,
// which is why classify.py originally flagged it "complex" -- verified by
// hand that it's a pure heredoc template with no real logic)
export function render(ktini, ktvars) {
  return `<br>
<br>

<CENTER>
<FONT SIZE=5>
<P>
<IMG SRC="${ktini.zoographics}/d6kanga.gif" ALIGN=LEFT HSPACE=10 VSPACE=10>
Animals that have pouches <B>are</B> called <B>marsupials.</B>
<BR><BR>
Both kangaroos and koalas are marsupials.
</P>

<BR CLEAR="ALL">

<br>
<br>

<CENTER>
<A HREF="${ktini.engine}?KEY=9300">
Go back to the Animals of Australia.
<BR>
<BR>
</CENTER>

<!--END CONTENT-->

</CENTER>

</BODY>`;
}
