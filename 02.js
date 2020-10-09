/*

Skriv en funktion som tar en sträng som parameter, gör om alla tecken som inte är a-z (stora eller små) till HTML-entiteter och returnerar resultatet.

Läs mer om HTML-entiteter här: https://dev.w3.org/html5/html-author/charref

Din funktion måste byta ut alla "osäkra" tecken mot "säkra". De tecken ni behöver byta ut är:
<
>
å
ä
ö
'

Alla tecken som inte är a-z eller någon av ovanstående (t ex kommatecken, punkter, bindestreck osv) ska tas bort.

*/

function safe_string(text) {
  return text.replace(/[^a-zA-Z0-9<>åäö'/\s]/g, '') // ta bort alla    utan a-z, A-Z, 0-9, <, >, å, ä, ö, ', och mellanslag \s"
  .replace(/</g,'&lt;')
  .replace(/>/g,'&gt;')
  .replace(/å/g,'&aring;')
  .replace(/ä/g,'&auml;')
  .replace(/ö/g,'&ouml;')
  .replace(/'/g,'&apos;');
}

console.log( safe_string( "<h1>Sjörövare, O'hoj</h1>" ) ); // Expected output: &lt;h1&gt;Sj&ouml;r&ouml;vare O&apos;hoj&lt;/h1&gt;

