// Auto-converted from africa.pl (KidsTown CGI/Perl -> SPA content module)
// (source had an RCS revision-log comment block before the print statement,
// which is why classify.py originally flagged it "complex" -- verified by
// hand that it's a pure heredoc template with no real logic)
export function render(ktini, ktvars) {
  return `<BR>
<center>
<img src="${ktini.zoographics}/africa.jpg" height=400 width=500
  ALT="Animals of Africa" border=0>
</center>

<FONT SIZE=5>
<P ALIGN=LEFT>
In central Africa, many kinds of animals live on large, grass-covered 
plains.  Animals that eat plants are herbivores.  Some African herbivores 
are <A HREF="#elephant">elephants,</A> <A HREF="#giraffe">giraffes</A> and <A 
HREF="#hippo"> hippos.</A> Animals that eat only meat are carnivores.
<A
HREF="#lion">Lions</A> are carnivores that live in Africa.
</P><BR CLEAR="ALL">


<A NAME="elephant"><H2 ALIGN=CENTER>ELEPHANTS</H2></A>
<P ALIGN=LEFT>
<IMG ALIGN=LEFT HSPACE=10 SRC="${ktini.zoographics}/d6elep.gif" HEIGHT=154 WIDTH=154>
The most amazing feature on an elephant is its long nose, called a trunk.
The elephant uses its trunk to eat and drink.  An elephant eats grass, 
leaves, twigs and fruits by wrapping its trunk around the food and 
bringing it up to its mouth. It drinks by sucking water up into its trunk,
putting the trunk into its mouth, and then spraying the water down its
throat.

</P><BR CLEAR="ALL">

<A NAME="giraffe"><H2 ALIGN=CENTER>GIRAFFES</H2></A>
<P ALIGN=LEFT>
<IMG ALIGN=LEFT HSPACE=10 SRC="${ktini.zoographics}/d6giraff.gif" WIDTH=154 HEIGHT=154> 
Giraffes are the tallest land animals living in the world today.  Because 
giraffes need to eat a lot of food in order to live, they spend about 
half of their lives eating.  Giraffes eat leaves and twigs by curling
their strong tongues around the food to pull it free.
 </P> <BR CLEAR="ALL">

<A NAME="hippo"><H2 ALIGN=CENTER>HIPPOPOTAMUS</H2></A> <P ALIGN=LEFT> <IMG
ALIGN=LEFT
HSPACE=10 SRC="${ktini.zoographics}/d6hippo.gif" WIDTH=154 HEIGHT=154> The
word "hippo" is short for "hippopotamus," which means "horse of
the river."  Although hippos are very big, they do not eat as much food as
you might think.  They spend a few hours each day eating different kinds
of grasses on land.  To protect themselves from predators, hippos spend
most of their time in water. 
  </P> <BR CLEAR="ALL">

<A NAME="lion"><H2 ALIGN=CENTER>LIONS</H2></A> <P ALIGN=LEFT> <IMG
ALIGN=LEFT
HSPACE=10 SRC="${ktini.zoographics}/d6lion.gif" WIDTH=154 HEIGHT=154> Lions
spend most of their time resting and sleeping.  Lions sleep during the day
when it is very hot.  When they hunt, lions must sneak up on prey in order
to catch it.  Female lions do the hunting for their prides (family groups).
  </P> <BR CLEAR="ALL"><BR>

<CENTER><A HREF="${ktini.engine}?KEY=9210">Try taking the Zoo Keeper's Challenge!<A></CENTER><BR>
<BR>
<BR>


<!--End Content-->
</BODY>`;
}
