/*function farbwahl(clr) {
  document.getElementById("a").setBackground(Color.clr);
}
*/

/* WORKED
function farbwahl() {
  document.getElementById("a").style.background = "blue";
}
*/

/* WORKED
function farbwahl() {
  document.getElementById("a").style.background = '#1D70B7';
}
*/


var versuch [] // Array für die Eingabezeile
var magicCode [] // Array für den zu erratenden Farbcode
var farben = ['#1D70B7', '#E30513', '#F9B233', '#008D36', '#A2195B', '#44B8B3']

// Funktion neues Spiel
function gameSetup () {
    erstellenMagicCode(0, 6);

/* funktionierende Funktion für Auswahl der Farbe für Dot a */
function farbwahl(clr) {
  document.getElementById("a").style.background = clr;
}

 // Funktion zum erstellen des zu erratenden Farbcodes
function erstellenMagicCode (min, max) {
    for (var i = 0; i < 4; i++)
      code[i] = Math.floor(Math.random() * (max - min)) + min;
  }
