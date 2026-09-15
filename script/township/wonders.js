// Hand-converted from township/wonders.pl (KidsTown CGI/Perl -> SPA content module)
//
// Shared results/scoring handler for all four "Wonders of the World" quizzes
// (Zeus, Pyramids, Great Wall, Taj Mahal). Each question page (zeus.pl /
// pyramid.pl / wall.pl / tajmahal.pl) posts Q1 (a <select>), Q2 (a radio
// button, "on"/"off"), and Q3 built from several letter-picker <select>s
// named Q31..Q3<STRLEN> concatenated together -- read straight out of
// %ktvars in the original, same as every other query/form param, so this
// module keeps the same render(ktini, ktvars) signature as every other
// content module rather than taking a separate "answers" argument.
//
// The answer-key data files (data/township/<name>.txt, one semicolon-
// delimited line: title;image0;image1;image2;image3;answerQ1;answerQ2;
// answerQ3;text) were converted to JSON (public/data/township/*.json) since
// that format is nicer to parse in JS; fetched at runtime via ktvars.file
// (e.g. "india.txt" -> "india.json"). Because fetch() is async, this
// module's render() is async and returns a Promise<string>, unlike the
// plain synchronous render(ktini, ktvars) used by purely-templated modules.

export async function score(ktini, dataFile) {
  const res = await fetch(`${ktini.townshipdata}/${dataFile}`);
  const answerKey = await res.json();
  return answerKey;
}

export async function render(ktini, ktvars) {
  const q1 = ktvars.Q1;
  const q2 = ktvars.Q2;
  let q3 = "";
  const strlen = parseInt(ktvars.STRLEN, 10) || 0;
  for (let i = 1; i <= strlen; i++) {
    q3 += ktvars[`Q3${i}`] ?? "";
  }

  const dataFile = ktvars.file.replace(/\.txt$/, ".json");
  const key = await score(ktini, dataFile);

  let correct = 0;
  if (q1 === key.answerQ1) correct++;
  if (q2 === key.answerQ2) correct++;
  if (q3 === key.answerQ3) correct++;

  let body;
  if (correct === 3) {
    body = `<center>
<table border=0 cellspacing=0 cellpadding=0>
<tr>
<td bgcolor=lightgreen align=center><font size=+4><b>Good Job</b></font></td>
</tr>
<tr>
<td bgcolor=lightgreen><font size=+2><b> You answered all ${correct} questions correctly.
This view of the ${key.title} is your prize</b></font>
</td>
</tr>
<tr><td><br><br></td></tr>
<tr>
<td align=center><img src="${ktini.townshipgraphics}/${key.image3}"></td>
</tr>
<tr><td><br><br></td></tr>
<tr><td bgcolor=lightgreen><font size=+1><b>${key.text}</b></font></td></tr>
<tr><td><br><br></td></tr>
</table>
<table border=0>
<td width=25></td>
<td align=center><a href="${ktini.engine}?KEY=3000"><img src="${ktini.townshipgraphics}/wwm.jpg" width=50 height=50></a></td></tr>
<td width=25></td>
<td align=center><b>Main Page</b></td></tr>
</table>
</center>`;
  } else {
    const missed = 3 - correct;
    const revealImage = [key.image0, key.image1, key.image2][correct];
    body = `<center>
<table border=0 cellspacing=0 cellpadding=0>
<tr>
<td bgcolor=lightgreen align=center><font size=+4><b>Almost there...</b></font></td>
</tr>
<tr>
<td bgcolor=lightgreen><font face=arial size=+2><b>Nice try, but you missed ${missed} question(s).
 With your effort, you have earned this glimpse of the ${key.title}.</b></font>
</td>
</tr>
<tr><td><br><br></td></tr>
<tr>
<td align=center><img src="${ktini.townshipgraphics}/${revealImage}"></td>
</tr>
<tr><td><br><br></td></tr>
</table>
<table border=0>
<tr><td align=center><a href="${ktini.engine}?KEY=${ktvars.RETURN}"><img src="${ktini.townshipgraphics}/quest.jpg" width=50 height=50></a></td>
<td width=25></td>
<td align=center><a href="${ktini.engine}?KEY=3000"><img src="${ktini.townshipgraphics}/wwm.jpg" width=50 height=50></a></td></tr>
<tr><td align=center><b>Try Again</b></td>
<td width=25></td>
<td align=center><b>Main Page</b></td></tr>
</table>
</center>`;
  }

  return `<head><title>KidsTown Township: Wonders - Results</title></head><body bgcolor=white>
<CENTER><TABLE WIDTH=600 BORDER=0><TR><TD>
${body}
</TD></TR></TABLE></CENTER>
<BR><BR>
`;
}
