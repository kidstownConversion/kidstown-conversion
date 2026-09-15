// Hand-converted from library/b_fillin_db.pl (KidsTown CGI/Perl -> SPA content module)
//
// Generates the "Answers" page for the Fill-In-The-Blank activities
// (New York = game 1, Washington D.C. = game 2), scored against
// data/library/b_fillin_datafile.txt, pre-parsed into
// public/data/library/fillin.json (see /root/kidstown/parse_library_data.py).
// ktvars.game is the 1-based record index, matching GetRecord's semantics.
//
// NOTE ON A PRE-EXISTING SITE BUG: the original data file has several
// PARAGRAPH*/ITEM* facts that span multiple lines in the .txt source, but
// file-lib.pl's GetRecord only associates the FIRST line of each field with
// its tag (confirmed against the real 1998 code) -- every line after that is
// silently dropped. So e.g. PARAGRAPH2 for New York renders as just
// "<B>Madison Square Garden</B> is the most famous of New" with the rest of
// the sentence missing. This conversion intentionally reproduces that exact
// truncation (public/data/library/fillin.json only contains what GetRecord
// would have actually returned) rather than silently fixing it, consistent
// with how other pre-existing bugs were handled elsewhere in this port --
// flagged here for the team to decide whether to fix now that it's visible.

async function getFillinRecord(ktini, gameNum) {
  const res = await fetch(`${ktini.librarydata}/fillin.json`);
  const records = await res.json();
  return records[gameNum - 1];
}

function answerBlock(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    return `<P><BR> <FONT SIZE=+2> You're right! </FONT> <P>\n`;
  }
  return `<P><BR> <FONT SIZE=+2> Your answer was: </FONT>\n<FONT SIZE=+1> ${userAnswer} </FONT>\n<P> <FONT SIZE=+2> The correct answer is: </FONT>\n`;
}

export async function render(ktini, ktvars) {
  const record = await getFillinRecord(ktini, parseInt(ktvars.game, 10));

  const answers = [ktvars.TOPIC1, ktvars.TOPIC2, ktvars.TOPIC3, ktvars.TOPIC4, ktvars.TOPIC5];

  let html = "";
  html += `<HTML>\n<HEAD><TITLE>Answers</TITLE></HEAD>\n`;
  html += `<BODY BGCOLOR="A2F9CD" TEXT=BLACK VLINK="PURPLE" ALINK="RED" LINK="BLUE" >\n`;
  html += `<!-- BEGIN OPENING PHRASE -->\n<CENTER>\n<TABLE BORDER=0 WIDTH=100%>\n <TR>\n   <TD>\n`;
  html += `\t\t <IMG SRC="${ktini.librarygraphics}/${record.PICTURE}"\nALIGN="MIDDLE">\n   </TD>\n </TR>\n\t  <TD>\n`;
  html += `\t\t <EM> <FONT SIZE=+5 COLOR=#ff2222>\n\t${record.HEADING}  </FONT> </EM>\n   </TD>\n</TR>\n</TABLE>\n</CENTER>\n`;
  html += `<H3>Here are the answers to the selections you made.  The answers are\n       in <EM>bold</EM> type.  Included with the answers are more\n       information about the topic and information about the other choices.\n       </H3>\n<HR>\n`;
  html += `<!-- END OPENING PHRASE -->\n<!-- START OF CONTENT -->\n`;

  for (let i = 1; i <= 5; i++) {
    html += answerBlock(answers[i - 1], record[`SOL${i}`]);
    html += `<BR> ${record[`PARAGRAPH${i}`]}  \n`;
    html += i === 1 || i >= 3 ? `<UL COMPACT="COMPACT">\n` : `<UL>\n`;
    html += `<LI> ${record[`ITEM${i}A`]} </LI>\n`;
    html += `<LI> ${record[`ITEM${i}B`]} </LI>\n`;
    if (record[`ITEM${i}C`]) {
      html += `<LI> ${record[`ITEM${i}C`]} </LI>\n`;
    }
    html += `</UL>${i === 1 ? " <HR>\n" : "\n<HR>\n"}`;
  }

  html += `<CENTER>\n<H2>\n<A HREF="${ktini.engine}?KEY=6060"<B>Back To\nMid Atlantic States</B></A></H2></CENTER>\n<!-- END OF CONTENT -->\n`;
  html += `</TD>\n</TR>\n</TABLE>\n</CENTER>\n</BODY>\n</HTML>\n`;

  return html;
}
