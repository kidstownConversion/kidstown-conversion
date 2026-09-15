// Auto-converted from scripts/cityhall/*.pl (see kt.db for original KEY routing table)
// Each registerRoute() call = one original .pl file's heredoc, ported to a JS template literal.

const cityhallHeaderHtml = `<!--  CHANGE AND FILL IN, THESE MAY BE OVERRIDDEN -->


<CENTER>
<TABLE BORDER=0 WIDTH="600" >
<TR>
<TD>`;

registerRoute(5000, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE CELLSPACING=10><TR><TD VALIGN = "top">
<IMG ALIGN = "LEFT"  SRC="${config.cityhallGraphics}/main.gif" ALT = "Casebook Interactive Stories"><BR></TD><TD VALIGN = "top" ALIGN = "CENTER"><hr>
<FONT SIZE=6>W</FONT><FONT SIZE="4">elcome to City Hall!
Today you will be assisting the famous crime stopper Detective Anders.
You have two new cases to solve.
<P>
In each one, we need you to decide what to do next. Just click on
the underlined words at the end of each page and watch how the story unfolds!
</FONT>
<BR CLEAR=ALL>
<P>
Which case would you like to solve:
<P>
       <CENTER> <A href="#" data-key="5250">The Case of the Alien Photo</A><P>

or
<P>
        <A href="#" data-key="5010">The Bungled Bank Burglary</A><BR><P> 

<FONT SIZE=+1 COLOR="#cf0000">Good Luck!</FONT>
<P>
<HR>

<FONT SIZE="2"><B>Casebook Interactive Stories</B></FONT>
<BR>
</CENTER>
</TD></TR></TABLE>

<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5000 <- scripts/cityhall/cityhall.pl (City Hall - choose a case)

registerRoute(5010, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="22ac2f">
"Thank you both for coming," the bank manager says as he escorts you toward his office. "Last night we 
were nearly robbed."

</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/bbb1.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">

"Nearly?" questions Detective Anders.
<br><br>
"Well, thanks to quick action by our night security guard, Willy Sparks, nothing was stolen.  I figured 
you may be able to find some clues that will lead us to the culprit so he won't strike again.  Feel free to 
examine the vault and interview Willy."

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<HR>
Do you want to<A href="#" data-key="5210"> examine the vault</A> or<A href="#" data-key="5020"> question Willy?</A> 
 
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5010 <- scripts/cityhall/bbb1.pl

registerRoute(5020, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="a00000">
"I'm not one to brag," asserts Willy Sparks, the security guard, "but without my help, the thief  would 
have gotten away with everything."

</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/bbb2.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">

"Tell us exactly what happened," Detective Anders says as he looks closely at Willy.
<br><br>
"At about 4:30 in the morning I was doing my rounds near the teller's windows when I heard 
something back by the vault.  I rushed back and surprised a masked man stuffing a bag full of money 
and <i>this</i>," explains Willy as he holds up a piece of paper.

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<HR>
Do you want to<A href="#" data-key="5060"> examine the paper</A> or<A href="#" data-key="5120"> continue questioning Willy?</A> 
 
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5020 <- scripts/cityhall/bbb2a.pl

registerRoute(5030, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="a00000">
"I'm not one to brag," asserts Willy Sparks, the security guard, "but without my help, the thief  would 
have gotten away with everything."

</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/bbb2.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">

"Tell us exactly what happened," Detective Anders says as he looks closely at Willy.
<br><br>
"At about 4:30 in the morning I was doing my rounds near the teller's windows when I heard 
something back by the vault.  I rushed back and surprised a masked man stuffing a bag full of money 
and <i>this</i>," explains Willy as he holds up a piece of paper.

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<HR>
Do you want to<A href="#" data-key="5070"> examine the paper</A> or<A href="#" data-key="5090"> continue questioning Willy?</A> 
 
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5030 <- scripts/cityhall/bbb2b.pl

registerRoute(5040, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="af4c00">
"Whenever the vault is opened at night a silent alarm notifies the police," explains Willy. 

</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/bbb4.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">

"So I told the robber to put his 
hands in the air until they arrived, but he dropped the bag and fled out the back of the bank."
<br><br>
You and Detective Anders examine the door at the rear of the bank.  The lock has been blown apart, 
probably by a small explosive.
<br><br>
"I figured that I shouldn't chase him out of the bank.  So while I was waiting for the police, I counted the 
money by hand to make sure none was missing.  Within a half an hour the police arrived and the robber 
had not returned."

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<HR>
"We're missing a key element to this crime," you declare. "We need to <A href="#" data-key="5050">examine the Woodrow Wilson diary entry</A>."  
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5040 <- scripts/cityhall/bbb3-3.pl

registerRoute(5050, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="0000a0">
"It is a page from former U.S. President Woodrow Wilson's diary," Willy continues. "It is one of the 
bank's most prized possessions.

</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/bbb3.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">
"It was recently appraised at \\$500,000.  I had never seen it before, but the 
bank manager talks about it so often that I immediately knew what it was when I approached the thief."
<br><br>
You and Detective Anders read the page:
<TT>
<br><br>
April 16, 1917
<br><br>
Today we declared war on Germany and the other Central Powers.  I have lived through many bloody 
conflicts in my life, but World War I is indeed the most terrible I have ever witnessed.
<br><br>
Thomas Woodrow Wilson</TT>

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<HR>
With a puzzled look Detective Anders says, "I think we must <A href="#" data-key="5180">speak with an historian</A> about that diary entry." 
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5050 <- scripts/cityhall/bbb3-5.pl

registerRoute(5060, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="0000a0">
"It is a page from former U.S. President Woodrow Wilson's diary," Willy continues. "It is one of the 
bank's most prized possessions.

</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/bbb3.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">
"It was recently appraised at \\$500,000.  I had never seen it before, but the 
bank manager talks about it so often that I immediately knew what it was when I approached the thief."
<br><br>
You and Detective Anders read the page:
<TT>
<br><br>
April 16, 1917
<br><br>
Today we declared war on Germany and the other Central Powers.  I have lived through many bloody 
conflicts in my life, but World War I is indeed the most terrible I have ever witnessed.
<br><br>
Thomas Woodrow Wilson</TT>

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<HR>
Do you want to<A href="#" data-key="5170"> speak with an historian about the diary entry</A> or<A href="#" data-key="5130"> continue questioning Willy?</A> 
 
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5060 <- scripts/cityhall/bbb3a.pl

registerRoute(5070, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="0000a0">
"It is a page from former U.S. President Woodrow Wilson's diary," Willy continues. "It is one of the 
bank's most prized possessions.

</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/bbb3.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">
"It was recently appraised at \\$500,000.  I had never seen it before, but the 
bank manager talks about it so often that I immediately knew what it was when I approached the thief."
<br><br>
You and Detective Anders read the page:
<TT>
<br><br>
April 16, 1917
<br><br>
Today we declared war on Germany and the other Central Powers.  I have lived through many bloody 
conflicts in my life, but World War I is indeed the most terrible I have ever witnessed.
<br><br>
Thomas Woodrow Wilson</TT>

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<HR>
Do you want to<A href="#" data-key="5150"> speak with an historian about the diary entry</A> or<A href="#" data-key="5100"> continue questioning Willy?</A> 
 
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5070 <- scripts/cityhall/bbb3b.pl

registerRoute(5080, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="0000a0">
"It is a page from former U.S. President Woodrow Wilson's diary," Willy continues. "It is one of the 
bank's most prized possessions.

</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/bbb3.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">
"It was recently appraised at \\$500,000.  I had never seen it before, but the 
bank manager talks about it so often that I immediately knew what it was when I approached the thief."
<br><br>
You and Detective Anders read the page:
<TT>
<br><br>
April 16, 1917
<br><br>
Today we declared war on Germany and the other Central Powers.  I have lived through many bloody 
conflicts in my life, but World War I is indeed the most terrible I have ever witnessed.
<br><br>
Thomas Woodrow Wilson</TT>

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<HR>
Do you want to<A href="#" data-key="5160"> speak with an historian about the diary entry</A> or<A href="#" data-key="5200"> examine the vault?</A> 
 
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5080 <- scripts/cityhall/bbb3c.pl

registerRoute(5090, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="af4c00">
"Whenever the vault is opened at night a silent alarm notifies the police," explains Willy, 

</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/bbb4.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">

"So I told the robber to put his 
hands in the air until they arrived, but he dropped the bag and fled out the back of the bank."
<br><br>
You and Detective Anders examine the door at the rear of the bank.  The lock has been blown apart, 
probably by a small explosive.
<br><br>
"I figured that I shouldn't chase him out of the bank.  So while I was waiting for the police, I counted the 
money by hand to make sure none was missing.  Within a half an hour the police arrived and the robber 
had not returned."

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<HR>
"We're missing a key element to this crime," you declare, "We need to <A href="#" data-key="5050">examine the Woodrow Wilson diary entry</A>."  
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5090 <- scripts/cityhall/bbb4-3.pl

registerRoute(5100, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="af4c00">
"Whenever the vault is opened at night a silent alarm notifies the police," explains Willy. 

</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/bbb4.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">

"So I told the robber to put his 
hands in the air until they arrived, but he dropped the bag and fled out the back of the bank."
<br><br>
You and Detective Anders examine the door at the rear of the bank.  The lock has been blown apart, 
probably by a small explosive.
<br><br>
"I figured that I shouldn't chase him out of the bank.  So while I was waiting for the police, I counted the 
money by hand to make sure none was missing.  Within a half an hour the police arrived and the robber 
had not returned."

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<HR>
With a puzzled look Detective Anders says, "I think we must <A href="#" data-key="5180">speak with an historian</A> about that diary entry." 
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5100 <- scripts/cityhall/bbb4-5.pl

registerRoute(5110, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="af4c00">
"Whenever the vault is opened at night a silent alarm notifies the police," explains Willy. 

</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/bbb4.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">

"So I told the robber to put his 
hands in the air until they arrived, but he dropped the bag and fled out the back of the bank."
<br><br>
You and Detective Anders examine the door at the rear of the bank.  The lock has been blown apart, 
probably by a small explosive.
<br><br>
"I figured that I shouldn't chase him out of the bank.  So while I was waiting for the police, I counted the 
money by hand to make sure none was missing.  Within a half an hour the police arrived and the robber 
had not returned."

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<HR>
With a puzzled look Detective Anders says, "I think we must <A href="#" data-key="5230">examine that vault</A>."
 
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5110 <- scripts/cityhall/bbb4-6.pl

registerRoute(5120, () => cityhallHeaderHtml + `
<CENTER>
<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="af4c00">
"Whenever the vault is opened at night a silent alarm notifies the
police," explains Willy. 

</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/bbb4.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">

"So I told the robber to put his 
hands in the air until they arrived,
but he dropped the bag and fled out the back of the bank."
<BR><BR>
You and Detective Anders examine the door at the rear of the bank.
The lock has been blown apart, 
probably by a small explosive.
<BR><BR>
"I figured that I shouldn't chase him out of the bank.
So while I was waiting for the police, I counted the 
money by hand to make sure none was missing.
Within a half an hour the police arrived and the robber 
had not returned."

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100">
<IMG  SRC="${config.cityhallGraphics}/same.gif"></TD>
<TD WIDTH = "360"><FONT SIZE = "4">
<HR>
Do you want to <A href="#" data-key="5080">look more closely at the
scrap of paper</A> or <A href="#" data-key="5220">examine the vault?</A> 
 
<HR></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5120 <- scripts/cityhall/bbb4a.pl

registerRoute(5130, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="af4c00">
"Whenever the vault is opened at night a silent alarm notifies the police," explains Willy. 

</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/bbb4.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">

"So I told the robber to put his 
hands in the air until they arrived, but he dropped the bag and fled out the back of the bank."
<br><br>
You and Detective Anders examine the door at the rear of the bank.  The lock has been blown apart, 
probably by a small explosive.
<br><br>
"I figured that I shouldn't chase him out of the bank.  So while I was waiting for the police, I counted the 
money by hand to make sure none was missing.  Within a half an hour the police arrived and the robber 
had not returned."

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<HR>
Do you want to<A href="#" data-key="5160"> speak with an historian about the diary entry</A> or<A href="#" data-key="5200"> examine the vault?</A> 
 
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5130 <- scripts/cityhall/bbb4c.pl

registerRoute(5140, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="af4c00">
"Whenever the vault is opened at night a silent alarm notifies the police," explains Willy. 

</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/bbb4.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">

"So I told the robber to put his 
hands in the air until they arrived, but he dropped the bag and fled out the back of the bank."
<br><br>
You and Detective Anders examine the door at the rear of the bank.  The lock has been blown apart, 
probably by a small explosive.
<br><br>
"I figured that I shouldn't chase him out of the bank.  So while I was waiting for the police, I counted the 
money by hand to make sure none was missing.  Within a half an hour the police arrived and the robber 
had not returned."

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<HR>
"That's all I needed to know," you exclaim.  It is time to solve <A href="#" data-key="5240"> The Bungled Bank Burglary.</A>  
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5140 <- scripts/cityhall/bbb4s.pl

registerRoute(5150, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="9400d3">
"World War I, or the Great War, was the largest and most brutal conflict of its time," explains the 
historian from a nearby library.

</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/bbb5.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">

"It spanned the years from 1914 though 1918 but the United States 
wasn't actively involved until 1917.  It was the first war to introduce large-scale use of machine guns, 
aircraft, and deadly poison gas."
<br><br>
"Could President Wilson have written a note about the Great War in April of 1917?" You ask the historian.
<br><br>
"Definitely," explains the historian. "In fact, April 16, 1917 was the day that the United States began fighting.  Until then, the U.S. had been considered a neutral country."

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<HR>
With a puzzled look Detective Anders says, "I think we must <A href="#" data-key="5140">question Willy again</A>." 
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5150 <- scripts/cityhall/bbb5-4.pl

registerRoute(5160, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="9400d3">
"World War I, or the Great War, was the largest and most brutal conflict of its time," explains the 
historian from a nearby library.

</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/bbb5.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">

"It spanned the years from 1914 though 1918 but the United States 
wasn't actively involved until 1917.  It was the first war to introduce large-scale use of machine guns, 
aircraft, and deadly poison gas."
<br><br>
"Could President Wilson have written a note about the Great War in April of 1917?" You ask the historian.
<br><br>
"Definitely," explains the historian. "In fact, April 16, 1917 was the day that the United States began fighting.  Until then, the U.S. had been considered a neutral country."

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<HR>
With a puzzled look Detective Anders says, "I think we must <A href="#" data-key="5230">examine that vault</A>." 
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5160 <- scripts/cityhall/bbb5-6.pl

registerRoute(5170, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="9400d3">
"World War I, or the Great War, was the largest and most brutal conflict of its time," explains the 
historian from a nearby Library. 

</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/bbb5.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">

"It spanned the years from 1914 though 1918 but the United States 
wasn't actively involved until 1917.  It was the first war to introduce large-scale use of machine guns, 
aircraft, and deadly poison gas."
<br><br>
"Could President Wilson have written a note about the Great War in April of 1917?" You ask the historian.
<br><br>
"Definitely," explains the historian. "In fact, April 16, 1917 was the day that the United States began fighting.  Until then, the U.S. had been considered a neutral country."

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<HR>
Do you want to<A href="#" data-key="5110"> continue questioning Willy</A> or<A href="#" data-key="5190"> examine the vault?</A> 
 
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5170 <- scripts/cityhall/bbb5a.pl

registerRoute(5180, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="9400d3">
"World War I, or the Great War, was the largest and most brutal conflict of its time," explains the 
historian from a nearby Library. 

</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/bbb5.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">

"It spanned the years from 1914 though 1918 but the United States 
wasn't actively involved until 1917.  It was the first war to introduce large-scale use of machine guns, 
aircraft, and deadly poison gas."
<br><br>
"Could President Wilson have written a note about the Great War in April of 1917?" You ask the historian.
<br><br>
"Definitely," explains the historian. "In fact, April 16, 1917 was the day that the United States began fighting.  Until then, the U.S. had been considered a neutral country."

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<HR>
"That's all I needed to know," you exclaim.  It is time to solve <A href="#" data-key="5240"> The Bungled Bank Burglary.</A>
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5180 <- scripts/cityhall/bbb5s.pl

registerRoute(5190, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="226b22">
"We keep \\$1,000,000 in cash in the vault along with other documents," began the bank manager.

</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/bbb6.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">

"The bills are all in denominations of \\$20 or lower so it would have been easy for the robber to spend the money 
anywhere."
<br><br>
"And what about the other documents?" You ask.
<br><br>
"Most of them would have no value to a thief, they are just copies of deeds and loans.  However, the 
Woodrow Wilson diary entry is quite valuable, indeed.  Thankfully, Willy was able to recover it with the 
cash."

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<HR>
With a puzzled look Detective Anders says, "I think we must <A href="#" data-key="5140">question Willy again</A>." 
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5190 <- scripts/cityhall/bbb6-4.pl

registerRoute(5200, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="226b22">
"We keep \\$1,000,000 in cash in the vault along with other documents," began the bank manager.

</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/bbb6.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">

"The bills are all in denominations of \\$20 or lower so it would have been easy for the robber to spend the money 
anywhere."
<br><br>
"And what about the other documents?" You ask.
<br><br>
"Most of them would have no value to a thief, they are just copies of deeds and loans.  However, the 
Woodrow Wilson diary entry is quite valuable, indeed.  Thankfully, Willy was able to recover it with the 
cash."

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<HR>
With a puzzled look Detective Anders says, "I think we must <A href="#" data-key="5180">speak with an historian</A> about that diary entry." 
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5200 <- scripts/cityhall/bbb6-5.pl

registerRoute(5210, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="226b22">
"We keep \\$1,000,000 in cash in the vault along with other documents," began the bank manager.

</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/bbb6.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">

"The bills are all in denominations of \\$20 or lower so it would have been easy for the robber to spend the money 
anywhere."
<br><br>
"And what about the other documents?" you ask.
<br><br>
"Most of them would have no value to a thief, they are just copies of deeds and loans.  However, the 
Woodrow Wilson diary entry is quite valuable, indeed.  Thankfully, Willy was able to recover it with the 
cash."

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<HR>
You decide <A href="#" data-key="5030"> Willy needs to be questioned immediately.</A>
 
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5210 <- scripts/cityhall/bbb6a.pl

registerRoute(5220, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="226b22">
"We keep \\$1,000,000 in cash in the vault along with other documents," began the bank manager.

</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/bbb6.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">

"The bills are all in denominations of \\$20 or lower so it would have been easy for the robber to spend the money 
anywhere."
<br><br>
"And what about the other documents?" you ask.
<br><br>
"Most of them would have no value to a thief, they are just copies of deeds and loans.  However, the 
Woodrow Wilson diary entry is quite valuable, indeed.  Thankfully, Willy was able to recover it with the 
cash."

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<HR>
"We're missing a key element to this crime," you declare. "We need to <A href="#" data-key="5050">examine that diary entry</A>."   
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5220 <- scripts/cityhall/bbb6b.pl

registerRoute(5230, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="226b22">
"We keep \\$1,000,000 in cash in the vault along with other documents," began the bank manager.

</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/bbb6.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">

"The bills are all in denominations of \\$20 or lower so it would have been easy for the robber to spend the money 
anywhere."
<br><br>
"And what about the other documents?" you ask.
<br><br>
"Most of them would have no value to a thief, they are just copies of deeds and loans.  However, the 
Woodrow Wilson diary entry is quite valuable, indeed.  Thankfully, Willy was able to recover it with the 
cash."

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<HR>
"That's all I needed to know," you exclaim.  It is time to solve <A href="#" data-key="5240"> The Bungled Bank Burglary.</A>
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5230 <- scripts/cityhall/bbb6s.pl

registerRoute(5240, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="22ac2f">
"I think we have enough information to assist your search for the culprit," Detective Anders explains to 
the bank manager. 

</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/end.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">

"Your security guard, Willy Sparks, is lying about his actions last night.  That would 
suggest he has some involvement in the incident."
<br><br>
"Also, the diary page Willy gave you is a forgery," you add.
<br><br>
"I don't understand.  How could Willy be involved?  And where is the real diary page?" cries the bank 
manager.
<br><br>
"We knew Willy was lying when he said that he counted all the cash before the police arrived.  He said 
the police arrived within half an hour, but it would have taken more than five hours to count \\$1,000,000 
in small bills by hand.  And the diary page is obviously bogus because it refers to 'World War I'.  In 1917, 
the first World War was known as the Great War.  It wouldn't have made sense to call it World War I 
when there hadn't been a World War II, yet."
<br><br>
Upon hearing this evidence, Willy admits to stealing the diary page and replacing it with a fake.  Since he 
couldn't get into the vault without setting off the silent alarm, he made up the story about the robber.  
While the police were on their way he forged the diary page, but he was in such a hurry he wrote <i>World 
War I</i> instead of <i>The Great War</i>. 

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<HR>
Do you want to try <A href="#" data-key="5250"> <i>The Case of the Alien Photo</i></A> or<A href="#" data-key="5000"> return to the main Casebook Interactive Stories page?</A> 
 
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5240 <- scripts/cityhall/bbbend.pl (Bank Burglary - The End)

registerRoute(5250, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="22ac2f">
"I have proof that there is life on Venus!" shouts Maurice Mole from across the police station.
</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/cap1.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">
"I'm going to make millions when I sell this to the tabloids," he giggles devilishly and waves a photograph in the air.
<br><br>

Maurice Mole is well known in the county as a con artist.  He is clever, but you and Detective Anders have managed to foil all his previous attempts to fool the public.  You decide to carefully examine the glossy photograph.  It shows a barren landscape dotted with tiny figures that look like aliens.

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<HR>
Do you want to <A href="#" data-key="5260"> question Maurice Mole about the photo </A>or <A href="#" data-key="5270"> send the photo to the crime lab for testing?</A> 
<hr></FONT></TD></TR>
</TABLE>

<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5250 <- scripts/cityhall/cap1.pl

registerRoute(5260, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="a00000">
"Actually, I'm amazed that nobody discovered this before," explains Maurice.
</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/cap2.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">
"When I pointed my telescope at Venus last night I saw these little figures jumping around.  I thought I should take a picture of them."
<br><br>

You and Detective Anders exchange looks of skepticism.  Maurice Mole seems like the least likely person to spend his nights looking at the stars.  

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<hr>
Do you want to <A href="#" data-key="5280"> continue questioning Maurice</A> or<A href="#" data-key="5270"> send the photo to the crime lab?</A> 
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5260 <- scripts/cityhall/cap2.pl

registerRoute(5270, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="0000a0">
Rather than spend more time listening to Maurice, you decide that the crime lab may provide you with some answers.
</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/cap3.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">
"I think the photograph is a fake," states the scientist at the crime lab,
"but I can't prove it.  It looks like  'aliens' were put in the background
by a computer.Unfortunately, you will probably need more evidence to
prove that Maurice Mole's claims are untrue."

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<hr>
You decide you need to<A href="#" data-key="5280"> question Maurice face to face.</A> 
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5270 <- scripts/cityhall/cap3.pl

registerRoute(5280, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="af4c00">
"I'm an astronomer at heart," claims Maurice. "Ever since I saw my first shooting star I fell in love with the night sky.
</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/cap4.jpg">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">

"Of course, my favorite planet is Venus."  Maurice Mole's ears twitch a little bit as he explains his nightly routine. "When the sky is its darkest, usually around midnight, I turn my telescope toward Venus to admire its rocky surface.  In fact, there hasn't been one night in the last six months that I haven't spent at least fifteen minutes looking at the beautiful planet."
<br><br>

You see Detective Anders smile slightly.  That can only mean one thing: he has found a problem with Maurice Mole's story.

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<hr>
Do you think you're ready to<A href="#" data-key="5300"> solve the mystery</A> or do you want to<A href="#" data-key="5290"> look for more evidence at Maurice Mole's apartment?</A> 
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5280 <- scripts/cityhall/cap4.pl

registerRoute(5290, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="9400d3">
"I have absolutely nothing to hide," exclaims Maurice. "You may examine my apartment inside and out."
</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/cap5.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">
Maurice Mole's apartment is dark and messy.  His clothes are scattered about the floor and dirty dishes are piled up on the counters.  You notice a computer with a scanner in a back room.  Maurice guides you to his balcony and points to a shiny white telescope.  "There it is," he says.  "If the sky were darker, I would let you look at the aliens for yourselves."
<br><br>
You and Detective Anders look at the telescope.  It appears to be remarkably clean compared to everything else in the apartment.  Something dangling from the eyepiece of the telescope catches your eye; it is a price tag.
<br><br>

"I, uh," stammers Maurice, "I just forgot to take the price tag off."
<br><br>

Detective Anders looks at you with a wink, "I think you can also forget about getting any money from the tabloids, Maurice.  Your photo is a fake."

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<hr>
You decide it's time to confront Maurice Mole with<A href="#" data-key="5300"> the solution to the <i>Case of the Alien Photo</i>.</A > 
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5290 <- scripts/cityhall/cap5.pl

registerRoute(5300, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "10">
<TR><TD WIDTH = "268" ALIGN = "LEFT" VALIGN = "MIDDLE">
<font size = 6 font color="226b22">
"Maurice, your story is so full of holes some people might mistake it for swiss cheese!" you exclaim.
</FONT></TD><TD WIDTH = "200" ALIGN = "CENTER" VALIGN = "TOP">

<img src = "${config.cityhallGraphics}/end.gif">

<p></TD></TR>

<TR><TD COLSPAN = "2" WIDTH = "460"><FONT SIZE = "5">
"First, it would be impossible for you to photograph aliens on the surface of Venus.  Venus is covered with a thick blanket of clouds which prevents anyone from seeing the surface.  Second, you claim to have looked at Venus every night for the last six months.  That, too, is impossible.  Due to the motion of the planets, Venus is not visible from Earth for six consecutive months.  Finally, you said that you looked at Venus at midnight.  As every astronomer knows, Venus is visible only near sunrise or sunset."
<br><br>

Confronted with your facts, Maurice decides to confess to the forgery.  "When I heard how much money the tabloids offered for alien photographs, I decided to fake one on my computer.  I guess I should have spent more time in the library learning about Venus, first.  I just bought the telescope yesterday to fool you two."

</FONT></TD></TR></TABLE><p>
<TABLE BORDER ="0" WIDTH = "460" CELLSPACING = "2">
<TR><TD WIDTH = "100"><IMG  SRC="${config.cityhallGraphics}/same.gif"></TD><TD WIDTH = "360"><FONT SIZE = "4">
<hr>
Do you want to try<A href="#" data-key="5010"> <i>The Bungled Bank Burglary</i></A> or do you want to<A href="#" data-key="5000"> return to the main Casebook Interactive Stories page?</A> 
<hr></FONT></TD></TR>
</TABLE>
<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5300 <- scripts/cityhall/capend.pl (Alien Photo - The End)

registerRoute(5900, () => cityhallHeaderHtml + `
<H2><CENTER>
<P>
<!-- FILL IN: OPENING PHRASE HERE IF NEEDED -->
<H2></H2>

<!--END OPENING PHRASE-->

<!--BEGIN CONTENT-->
<TABLE CELLSPACING=10><TR><TD VALIGN = "top">
<IMG ALIGN = "LEFT"  SRC="${config.cityhallGraphics}/help.gif" ALT = "Casebook Interactive Stories Help"><BR></TD><TD VALIGN = "top" ALIGN = "CENTER"><hr>
<FONT SIZE=6>T</FONT><FONT SIZE="4">o view, and hopefully solve, a Casebook story, select one of the cases from the main Casebook page in KidsTown CityHall.  Then read each page of the story.  At the bottom of every page you will be presented with one or two links.  Choose which of these paths you wish to follow.  When the entire case has been presented, you will be offered a link to SOLVE THE CASE.  Once you select this final link, the solution to the case will be presented.
<br><br>
Within the text of each story, clues will be revealed to assist you in solving the case.  Don't be discouraged if the solution to the case is presented before you have solved it - you will get better at finding the solutions as you read more cases.
<br><br>
Have Fun!
</FONT>
<BR CLEAR=ALL><hr>
<FONT SIZE=+1 COLOR="#cf0000">NOTE:  To return to the page you were last viewing, press the 'BACK' button on your browser.</FONT>
</CENTER>
</TD></TR></TABLE>

<!--END CONTENT-->

<P></P>
</CENTER>
</TD>
</TR>

</TABLE>
</CENTER>
`);  // KEY 5900 <- scripts/cityhall/help.pl (Help)
