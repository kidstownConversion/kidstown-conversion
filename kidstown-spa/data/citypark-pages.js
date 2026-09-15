// Auto-converted from data/citypark/page1 .. page18
// These keep the ORIGINAL page.pl placeholder tokens (#name#, #xname#, #page#, #from#)
// verbatim -- renderCityParkPage() in citypark.js substitutes them at render time,
// exactly mirroring the s/// substitutions page.pl used to do in Perl.
const cityParkPages = {
  1: `
Your big adventure starts out just like any other lazy summer day.  The birds are chirping outside, and you can just tell from the smell of the air that this day is going to be really hot.  

<P>Your friend calls out from the street, "#name#, why don't you come outside and play?  It looks like its going to be a great day!"  You decide that yes, you will go out and play today.  You pull on your favorite blue shirt and head outside.  

<P>As you step out onto the porch, you feel that something is not quite
right.  The birds are no longer chirping.  The light seems too bright.
All of a sudden, you can't see anything at all.  You fall into a deep
sleep. <A HREF="#?KEY=2010&page=2&name=#xname#&
&from=#page#">You wake up</A> in a strange place.<P>

<A HREF="#?KEY=2000">Back</A>
`,
  2: `
<IMG SRC="${config.cityparkGraphics}/park.gif" ALT="The Park" WIDTH=90
HEIGHT=100 HSPACE=10
VSPACE=10 ALIGN=left>Bright sunlight streams into your eyes, making it hard to see.  Your eyes finally adjust and you see that you are no longer on your front 
porch.  You look around and see that you seem to be in a very large park.
There are big trees around the edge of the park, and lots of grass.  There are other people in the park, but for some reason, they don't look right.  The air feels much cooler than it












 did on your porch.<P>

You see a girl and her dog.  Do you want to walk up to them? 
<A
HREF="#?KEY=2010&page=3&name=#xname#&from=#page#">Yes</A>&nbsp;
<A
HREF="#?KEY=2010&page=4&name=#xname#&from=2">No</A>


 

<P>

<A HREF="#?KEY=2010&page=1&name=#xname#&from=#page#">Back</A>
`,
  3: `
<IMG SRC="${config.cityparkGraphics}/girl.gif" ALT="Girl and Dog" WIDTH=90
HEIGHT=100 HSPACE=10 VSPACE=10 ALIGN=right>
As you begin to get closer to the girl, you notice what is wrong with her.
You can see right through her!  She looks like any other girl,
but she also kind of looks like ghosts do in the movies.
You can even see through her dog!  You finally say "Hello,
my name is #name#.  What is your name?"<P>

She doesn't even notice you.  You reach out to touch her,
and your hand goes right through her!<P>

You think to yourself, "Well, these people aren't going to be much help."<P>

<IMG SRC="${config.cityparkGraphics}/book.gif" ALT="Old Book" WIDTH=55
HEIGHT=72 HSPACE=10
VSPACE=10 ALIGN=right>You walk back to the place where you first woke up and
you see a book.  "That wasn't there before," you think to yourself.
You reach down and grab it.<P>

The book has a leather cover and looks very old.
The writing on the cover is in a language you have never seen before.
You open the book and see that the first page says,
"#name#, FIND THE COMPASS."  The rest of the pages are strangely blank.<P>

So, you are supposed to find the compass.
A compass is a thing that helps you find your way,
and since you are very lost, finding your way sounds like a great idea.
You look around and see a stand about 50 feet away that looks like it
has something on it.  You <A
HREF="#?KEY=2010&page=5&name=#xname#&from=3">walk</A>
towards the stand.

<P>

<A HREF="#?KEY=2010&page=2&name=#xname#&from=#page#">Back</A>
`,
  4: `
<IMG SRC="${config.cityparkGraphics}/book.gif" ALT="Old Book" WIDTH=55
HEIGHT=72 HSPACE=10
VSPACE=10 ALIGN=right>You walk back to the place where you first woke up and
you see a book.  "That wasn't there before," you think to yourself.
You reach down and grab it.<P>

The book has a leather cover and looks very old.  The writing on the cover is
in a language you have never seen before.  You open the book and see that the
first page says, "#name#, FIND THE COMPASS."<P>

So, you are supposed to find the compass.  A compass is a thing that helps you
find your way, and since you are very lost, finding your way sounds like a
great idea.  You look around and see a stand about 50 feet away that looks
like it has something on it.  You <A
HREF="#?KEY=2010&name=#xname#&page=5&from=#page#">walk</A>
towards the stand.<P>

<A HREF="#?KEY=2010&page=2&name=#xname#&from=#page#">Back</A>
`,
  5: `
<IMG SRC="${config.cityparkGraphics}/compass.gif"
ALT="Compass" WIDTH=60 HEIGHT=60 HSPACE=10 VSPACE=10 ALIGN=right>As you approach the stand, you notice two things.
First, you see that there is a compass on the stand.  That is interesting.
Second, you see a small reddish bird next to the compass.  Unlike the 
people still with you here in the park, you can't see through the bird.
It looks kind of like a parakeet.<P>

You get to the stand.  As you reach for the compass, you feel the leather book in your hand getting warm.  At that same moment the bird says, "Hey #name#, you should probably look in the book."<P>

<IMG SRC="${config.cityparkGraphics}/bird.gif" WIDTH=84 HEIGHT=95
ALIGN=left ALT="bird" HSPACE=10
VSPACE=10>The bird startles you.  As far as you know, only parrots talk, and this certainly doesn't look like a parrot.<P>

<IMG SRC="${config.cityparkGraphics}/directions.gif" ALT="Directions"
WIDTH=100 HEIGHT=111
HSPACE=10 VSPACE=10 ALIGN=right>You decide to do what it says.  You look
in the book.  The first page still says, "#name#, FIND THE COMPASS," but
now, there is 

writing on the second page.  It says, "#name#, GO WEST AND FIND THE
DOME."<P>

You take the compass and find that you are facing North.  Using the
directions of North, South, East and West from the picture, which way do
you have to turn in order to be facing West?  

<A HREF="#?KEY=2010&page=6&name=#xname#&from=#page#">Left</A>
or <A
HREF="#?KEY=2010&page=7&name=#xname#&from=5">Right</A>?


<P>
<A HREF="#?KEY=2010&page=4&name=#xname#&from=#page#">Back</A>
`,
  6: `
<IMG SRC="${config.cityparkGraphics}/directionl.gif" ALT="Directions"
WIDTH=100 HEIGHT=111
HSPACE=10 VSPACE=10 ALIGN=right>You did it #name#!  If you are facing North, and you take a little turn to your left, you will then be facing West.<P>
Let's <A
HREF="#?KEY=2010&page=8&name=#xname#&from=#page#">continue</A>.
Way to go!

<P>
<A HREF="#?KEY=2010&page=5&name=#xname#&from=#page#">Back</A>
`,
  7: `
<IMG SRC="${config.cityparkGraphics}/directionr.gif" ALT="Compass"
WIDTH=100 HEIGHT=111 HSPACE=10
VSPACE=10 ALIGN=right>#name#, this is kind of a tricky question.  Looking again at the picture that has N, S, E and W on it, you will see that if you turn 

to your right when you are facing North, you will then be facing East.
<P>

<P>
<A
HREF="#?KEY=2010&page=5&name=#xname#&from=7">Back</A>
`,
  8: `
<IMG SRC="${config.cityparkGraphics}/mountains.gif"
ALT="Compass" WIDTH=100 HEIGHT=90 HSPACE=10 VSPACE=10 ALIGN=right>
You leave the park and start walking West on a paved street.  After you have gone a little way you notice that way off in the distance, you can see snow capped mountains.  
<IMG SRC="${config.cityparkGraphics}/bird.gif" WIDTH=84 HEIGHT=95
ALIGN=left ALT="bird" HSPACE=10
VSPACE=10>You look over your shoulder and see that the bird is following you.  It says, "Hey, #name#, don't mind me.  I'm just here to help you out if you 


get in any trouble."<P>


You decide to <A
HREF="#?KEY=2010&page=9&name=#xname#&from=#page#">Continue</A>.


<P>
<A
HREF="#?KEY=2010&page=7&name=#xname#&from=#page#">Back</A>
`,
  9: `
<IMG SRC="${config.cityparkGraphics}/mountains.gif"
ALT="Mountains" WIDTH=100 HEIGHT=90 HSPACE=10 VSPACE=10 ALIGN=right>
The first street you pass is called Apple Street.  The next street you pass is called Birch Street.  

<P>

Which street do you think would come next, <A
HREF="#?KEY=2010&page=10&name=#xname#&from=#page#">Willow
Street</A>
or <A
HREF="#?KEY=2010&page=11&name=#xname#&from=#page#">Cherry
Street</A>?

<P>
<A
HREF="#?KEY=2010&page=#from#&name=#xname#&from=9">Back</A>
`,
  10: `
<IMG SRC="${config.cityparkGraphics}/mountains.gif"
ALT="Mountains" WIDTH=100 HEIGHT=90 HSPACE=10 VSPACE=10 ALIGN=right>
If you were thinking that all of these streets had the names of trees,
then Willow Street might come next.  But Cherry is also the name of a tree.
There must be another way to choose.

<P>
<A
HREF="#?KEY=2010&page=9&name=#xname#&from=#page#">Back</A>
`,
  11: `
<IMG SRC="${config.cityparkGraphics}/mountains.gif"
ALT="Mountains" WIDTH=100 HEIGHT=90 HSPACE=10 VSPACE=10 ALIGN=right>
#name#, you sure are good at figuring things out!
You noticed that Apple Street started with the letter A,
and Birch Street started with the letter B.
So it would make sense to think that the next street would start with a C,
and it does!  Cherry Street is the next street.
<P>
Now that you have that figured out, you <A
HREF="#?KEY=2010&page=12&name=#xname#&from=#page#">continue</A>
down the street, looking
for the dome.<P> <A
HREF="#?KEY=2010&page=9&name=#xname#&from=#page#">Back</A>
`,
  12: `
<IMG SRC="${config.cityparkGraphics}/dome.gif"
ALT="Dome" WIDTH=100 HEIGHT=90 HSPACE=10 VSPACE=10 ALIGN=right>
After walking several blocks you finally see the glint of the dome up
ahead of you.<P>  <IMG SRC="${config.cityparkGraphics}/bird.gif" WIDTH=84
HEIGHT=95 ALIGN=left
ALT="bird" HSPACE=10 VSPACE=10>Out of nowhere, the bird says, "Hey, #name#.
I've got a little riddle for you. 

<P>

I happen to know that the address of the dome is 1369 Kids Town Lane.
It is also on the right side of the street.
I'll give you a clue as to how to get home if you can tell me what side
of the street my house is on.
<P>
All I'll tell you is that the address of my house is even,
meaning that the last number of the address ends with an even number.
<P>
<P>
What side of the street do you suppose my house is on? <A
HREF="#?KEY=2010&page=14&name=#xname#&from=#page#">Left</A>&nbsp;or&nbsp;<A
HREF="#?KEY=2010&page=13&name=#xname#&from=#page#">Right</A>?"
<P>

<A
HREF="#?KEY=2010&page=11&name=#xname#&from=#page#">Back</A>
`,
  13: `
<IMG SRC="${config.cityparkGraphics}/dome.gif"
ALT="Mountains" WIDTH=100 HEIGHT=90 HSPACE=10 VSPACE=10 ALIGN=right>
Wow #name#, that was a hard riddle.  The dome has an odd address.
Odd addresses end with 1, 3, 5, 7, or 9.
The dome is on the right side of the street.
<P>  <IMG SRC="${config.cityparkGraphics}/bird.gif" WIDTH=84 HEIGHT=95
ALIGN=left ALT="bird"
HSPACE=10 VSPACE=10>  That makes you think odd addresses are on one side
of the street and even addresses are on the other side of the street.
The bird's house 
has an even address (it ends with 2, 4, 6, or 8)
so it is on the opposite side of the house as the dome.
Therefore it is on the left side of the street.

<P>
<A
HREF="#?KEY=2010&page=12&name=#xname#&from=#page#">Back</A>
<P>
`,
  14: `
<IMG SRC="${config.cityparkGraphics}/dome.gif"
ALT="Mountains" WIDTH=100 HEIGHT=90 HSPACE=10 VSPACE=10 ALIGN=right>
Nice work #name#. That riddle was especially hard.
This is how you solved the puzzle:<P>
The dome has an odd address and is on the right side of the street.
Odd addresses end with 1, 3, 5, 7, or 9.
<P>
<IMG SRC="${config.cityparkGraphics}/bird.gif" WIDTH=84 HEIGHT=95
ALIGN=left ALT="bird"
HSPACE=10 VSPACE=10>  That makes you think odd addresses are on one
side of the street and even addresses are on the other side of the street.
And that is exactly the way it is.
The bird's house has an even address (it ends with 2, 4, 6, 8 or 0)
so it is on the opposite side of the house as the dome.
Therefore it is on the left side of the street.

<P>
Here is your <A
HREF="#?KEY=2010&page=15&name=#xname#&from=#page#">clue</A>.
<P>
<A
HREF="#?KEY=2010&page=12&name=#xname#&from=#page#">Back</A>
`,
  15: `
<IMG SRC="${config.cityparkGraphics}/dome.gif"
ALT="Dome" WIDTH=100 HEIGHT=90 HSPACE=10 VSPACE=10 ALIGN=right>The bird
says to you, "#name#, the answer has been in your hands the whole time."
You realize that the book in your hands is getting warm again.
You open it up.  You see that the first two pages say the same thing,
but now there is a third page.
<P>

<IMG SRC="${config.cityparkGraphics}/bird.gif"
ALT="Bird" WIDTH=84 HEIGHT=95 HSPACE=10 VSPACE=10 ALIGN=left>The page says,
"#name#, this journey is over.
There will be more to come, but now it is time to go home.
Close your eyes, count backwards from 10 to 1 and you will be back to
where you began." <P>

Which way do you decide to count? <P>

<A HREF="#?KEY=2010&page=16&name=#xname#&from=#page#">1,
2, 3, 4, 5, 6, 7, 8, 9, 10</A> <P>

<A HREF="#?KEY=2010&page=17&name=#xname#&from=#page#">10,
9, 8, 7, 6, 5, 4, 3, 2, 1 </A><P>

<A HREF="#?KEY=2010&page=18&name=#xname#&from=#page#">2,
4, 6, 8, 10</A> <P>
`,
  16: `
<IMG SRC="${config.cityparkGraphics}/dome.gif"
ALT="Mountains" WIDTH=100 HEIGHT=90 HSPACE=10 VSPACE=10 ALIGN=right>You
close your eyes and count from 1 to 10.
<P>
1, 2, 3, 4, 5, 6, 7, 8, 9, 10<P>
You open your eyes and see that nothing has changed.
You are still in the same spot by the dome!
<P>
Then you realize that you were supposed to count backwards,
starting at 10 and ending at 1.<P>
You decide to <A
HREF="#?KEY=2010&page=15&name=#xname#&from=#page#">try</A>
again.<P> <A
HREF="#?KEY=2010&page=15&name=#xname#&from=#page#">Back</A>
`,
  17: `
You close your eyes and count from 10 down to 1.<P>
10, 9, 8, 7, 6, 5, 4, 3, 2, 1<P>
You try to open your eyes, but you can't.
Suddenly, the air is hot again, and you hear the birds chirping.
<P>
You are finally able to open your eyes.
When you do, you realize that you are once again on your front porch.
You see your friend standing in the street.
<P>
She says, "#name#, come on!  Let's go play!"<P>
Well, she doesn't seem to have noticed that you were gone for a little while.
You decide not to bring it up.
<BR><BR>
It's time for another journey... let's go explore the rest of KidsTown!

<P>
<A HREF="#?KEY=1000">Back to Kids Town</A><P>
<A
HREF="#?KEY=2010&page=15&name=#xname#&from=#page#">Back</A>
`,
  18: `
You close your eyes and count from 2 to 10 by even numbers.<P>
<IMG SRC="${config.cityparkGraphics}/dome.gif"
ALT="Dome" WIDTH=100 HEIGHT=90 HSPACE=10 VSPACE=10 ALIGN=right>
You open your eyes and see that nothing has changed.
You are still in the same spot by the dome!
<P>
Then you realize that you were supposed to count backwards,
starting at 10 and ending at 1.
Instead, you counted by evens, from 2 to 10.<P>
You decide to <A
HREF="#?KEY=2010&page=15&name=#xname#&from=#page#">try</A>
again.<P> <A
HREF="#?KEY=2010&page=15&name=#xname#&from=#page#">Back</A>
`,
};