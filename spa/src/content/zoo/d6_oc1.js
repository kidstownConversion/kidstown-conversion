// Auto-converted from d6_oc1.pl (KidsTown CGI/Perl -> SPA content module)
// (source had an RCS revision-log comment block before the print statement,
// which is why classify.py originally flagged it "complex" -- verified by
// hand that it's a pure heredoc template with no real logic)
export function render(ktini, ktvars) {
  return `<CENTER>
<FONT SIZE=5>
<P>
What covers two-thirds of the surface of the Earth?
</P>

<A HREF="${ktini.engine}?KEY=9120">Land</A><BR>
<A HREF="${ktini.engine}?KEY=9130">Trees</A><BR> 
<A HREF="${ktini.engine}?KEY=9140">Water</A><BR> 

<br>
Instructions:  Please choose the answer you think is correct. 
</P><BR CLEAR="ALL">
</FONT>
<br>
<br>


</CENTER>
<!--END CONTENT-->

<P></P>

</BODY>`;
}
