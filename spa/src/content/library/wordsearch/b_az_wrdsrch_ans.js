// Raw content from library/b_az_wrdsrch_ans.pl (KidsTown CGI/Perl -> SPA content module)
// NOT actually executed as Perl -- the original file has no shebang and no
// print statements. It is raw HTML with #graphic#/#engine# placeholder
// tokens, read and substituted at request time by library/srchpass.pl (see
// src/router/srchpass.js), which is how kt.db's KEY=6200 entry serves it
// (via the ktvars.page_passed query parameter naming this exact filename).
export const template = `<HTML>
<HEAD>
   <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=iso-8859-1">
   <META NAME="GENERATOR" CONTENT="Mozilla/4.01 [en] (Win95; I) [Netscape]">
   <TITLE>KidsTown Library Geography: Arizona, word roundup.</TITLE>
</HEAD>
<BODY TEXT="#000000" BGCOLOR="#A2F9CD" LINK="#0000FF" VLINK="#800080" ALINK="#FF0000">
&nbsp;
<TR>
<TD><!--this makes nearly the entire document a single cell table-->


<CENTER>
<H2>
Let's see how well you did.&nbsp;</H2></CENTER>
<P>The words to be found are circled in the solution below.
<BR><BR>
<CENTER>
<IMG SRC=#graphic#/ws_az_ans.gif WIDTH=470 HEIGHT=219 ALT="Puzzle
Solution">
</CENTER>
<CENTER>
<H2>
<A HREF="#engine#?KEY=6200&page_passed=b_az_wrdsrch.pl">Return to Puzzle</A></H2></CENTER>
</H2></CENTER>

</TD>
</TR>
</CENTER>


</BODY>
</HTML>
`;
