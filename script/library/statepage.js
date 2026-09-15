// Hand-converted from library/statepage.pl (KidsTown CGI/Perl -> SPA content module)
//
// Original used file-lib.pl's GetRecord() to pull a numbered record out of
// data/library/b_state_datafile.txt (record index == the "state" query param,
// 1-51). That file has been pre-parsed into public/data/library/states.json
// (see /root/kidstown/parse_library_data.py) as an array where states[i]
// corresponds to GetRecord's record (i+1) -- so ktvars.state (1-based) maps
// to states[ktvars.state - 1].
//
// NOTE: only fields statepage.pl actually prints are used here (MAP, NAME,
// FLAG, CAPITAL, FLOWER, ADMITTED, BIRD, ORDER, TREE, NICKNAME, SONG,
// ACTIVITY, LOCATION, RETURN, RECORD). FLAG_IMG and TEXTCOLOR exist in the
// source data but were never read by the original template either, so they
// are dropped entirely by the data-file parse and are not needed here.

async function getState(ktini, stateNum) {
  const res = await fetch(`${ktini.librarydata}/states.json`);
  const states = await res.json();
  return states[stateNum - 1];
}

export async function render(ktini, ktvars) {
  const stateNum = parseInt(ktvars.state, 10);

  if (!(stateNum >= 1 && stateNum <= 51)) {
    return `<!-- IF HERE, THEN THERE IS INVALID INPUT -->
<HTML>
<HEAD>
<TITLE>ERROR PAGE</TITLE>
</HEAD>
<BODY BGCOLOR="A2F9CD" TEXT=#FF0023>
<H4> You have entered an invalid state number! </H4>
<H4> A valid state number has to be in the range from 1 to 51.</H4>
<BR><HR><BR>
<A HREF="${ktini.engine}?KEY=6000"> Please click here to
return to the US Map Page </A>
</BODY>
</HTML>`;
  }

  const record = await getState(ktini, stateNum);
  const name = (record.NAME || "").toUpperCase();

  let html = "";
  html += `<!-- START OF MAIN -->\n`;
  html += `<HEAD>\n<TITLE>KidsTown Geography: State Information Page</TITLE>\n</HEAD>\n`;
  html += `<BODY BGCOLOR="#A2F9CD" TEXT=BLACK VLINK="PURPLE" ALINK="RED"\nLINK="BLUE">\n`;
  html += `<BR><BR>\n`;
  html += `<!-- BEGIN OPENING PHRASE -->\n`;
  html += `<CENTER>\n<TABLE  BORDER=0  WIDTH=100% >\n<TR>\n  <TD>\n`;
  html += `  \t<IMG SRC = "${ktini.librarygraphics}/${record.MAP}"\nALT="US Map" ALIGN=middle>\n\t </TD>\n`;
  html += `  <TD ALIGN=CENTER>\n  \t<FONT SIZE = +4><B><I>${name}</I></B></font>\n\t </TD>`;
  html += `  <TD ALIGN=RIGHT>\n   \t<IMG SRC = "${ktini.librarygraphics}/${record.FLAG}"\nALT="US Flag"BORDER=1 ALIGN=middle>\n\t </TD>\n</TR>\n</TABLE>\n</CENTER>\n`;
  html += `<!-- END OF OPENING PHRASE -->\n<!-- BEGIN CONTENT -->\n<BR>\n<CENTER>\n<TABLE WIDTH=100%  BORDER=5  cellspacing=5  cellpadding=4>\n`;

  if (record.RECORD === "51") {
    html += `<CENTER><H2> Here are some interesting facts about </H2></CENTER>\n<CENTER><H2> the Capital of the United States: </H2></CENTER></CAPTION>\n`;
  } else {
    html += `<H2>Here are some interesting facts about ${record.NAME}</H2></CAPTION>\n`;
  }

  html += `<TR>\n\t<TD>\n \t<IMG SRC="${ktini.librarygraphics}/building-i.gif"\nALIGN=bottom WIDTH=40 HEIGHT=30 ALT="Building">\n  \t<FONT SIZE=+0> <B> Capital:  </B> ${record.CAPITAL} </FONT>\n\t</TD>\n`;
  html += ` <TD>\n   <IMG SRC="${ktini.librarygraphics}/flower-i.gif"\nALIGN=bottom WIDTH=40 HEIGHT=30\nALT="Flower"><FONT SIZE=+> <B> Flower:  </B> ${record.FLOWER} </FONT>\n\t</TD>\n</TR>\n`;
  html += `<TR>\n\t<TD>\n\t\t<IMG SRC="${ktini.librarygraphics}/date-i.gif"\nALIGN=bottom WIDTH=40\nHEIGHT=30  ALT="Paper"><FONT SIZE=+> <B> Induction Date:  </B> ${record.ADMITTED} </FONT>\n\t</TD>\n`;
  html += `\t<TD>\n\t\t<IMG SRC="${ktini.librarygraphics}/bird-i.gif"\nALIGN=bottom WIDTH=40\nHEIGHT=30  ALT="Bird"><FONT SIZE=+> <B> Bird:  </B> ${record.BIRD} </FONT>\n\t</TD>\n</TR>\n`;
  html += `<TR>\n\t<TD>\n\t\t<IMG SRC="${ktini.librarygraphics}/order-i.gif"\nALIGN=bottom WIDTH=40\nHEIGHT=30  ALT="Numbers"><FONT SIZE=+> <B> Order of Induction:  </B> ${record.ORDER} </FONT>\n\t</TD>\n`;
  html += `\t<TD>\n\t\t<IMG SRC="${ktini.librarygraphics}/tree-i.gif"\nALIGN=bottom WIDTH=40\nHEIGHT=30  ALT="Tree"><FONT SIZE=+> <B> Tree:  </B> ${record.TREE} </FONT>\n\t</TD>\n</TR>\n`;
  html += `<TR>\n\t<TD>\n\t\t<IMG SRC="${ktini.librarygraphics}/redball-i.gif"\nALIGN=bottom WIDTH=40\nHEIGHT=30  ALT="Red Ball"><FONT SIZE=+> <B> Nickname:  </B> ${record.NICKNAME} </FONT>\n\t</TD>\n`;
  html += ` <TD>\n\t\t<IMG SRC="${ktini.librarygraphics}/music-i.gif"\nALIGN=bottom WIDTH=40\nHEIGHT=30  ALT="Music Notes"><FONT SIZE=+> <B> Song:  </B> <I> ${record.SONG} </I> </FONT>\n`;
  html += `</TABLE>\n</CENTER>\n`;

  html += `<CENTER>\n<TABLE  BORDER=0  WIDTH=600  CELLPADDING=10 >\n<TR>\n\t<TD   COLSPAN=3  ALIGN=CENTER>\n`;
  if (record.ACTIVITY) {
    html += `\t\t<A HREF="${ktini.engine}?KEY=${record.ACTIVITY}">\n`;
    html += `\t\t<IMG SRC="${ktini.librarygraphics}/school-i.gif"\nALIGN=middle WIDTH=70 HEIGHT=70  ALT="Children">\n`;
    html += `\t\t<FONT SIZE=+2> Click here to play a game! </FONT></A>\n\t</TD>\n\t</TR>\n`;
  }
  html += `</TABLE>\n</CENTER>\n`;

  html += `<CENTER>\n<TABLE BORDER=0 WIDTH=600 >\n<TR>\n<TD>\n<A HREF="${ktini.engine}?KEY=6000">Return to USA map</A>\n</TD>\n`;
  if (record.LOCATION) {
    html += `<TD>\n<A HREF="${ktini.engine}?KEY=${record.RETURN}">Return to\n${record.LOCATION} states map</A>\n`;
  }
  html += `</TABLE>\n</CENTER>\n<!-- END OF CONTENT -->\n</TD>\n</TR>\n</TABLE>\n</CENTER>\n<!-- END OF MAIN -->\n`;

  return html;
}
