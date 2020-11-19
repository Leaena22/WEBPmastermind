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

// Tabelle für frühere Eingaben wird automatisch erstellt
  

var versuch = []; // Array für die Eingabezeile
var magicCode = []; // Array für den zu erratenden Farbcode
var farben = ['#1D70B7', '#E30513', '#F9B233', '#008D36', '#A2195B', '#44B8B3'];

// Funktion neues Spiel
function gameSetup () {
    erstellenMagicCode(0, 6);
};

// funktionierende Funktion für Auswahl der Farbe für Dot a
function farbwahl(clr) {
  document.getElementById("a").style.background = clr;
  versuch.push(clr); //übertragen der angewählten Farbe in Array versuch
};

// Funktion zum erstellen des zu erratenden Farbcodes *worked*
function erstellenMagicCode (min, max) {
    for (var i = 0; i < 4; i++)
      magicCode[i] = farben[Math.floor(Math.random() * (max - min)) + min]; //+min ändert Ergebnis nicht, weil unser min = 0, muss drinbleiben weil sonst Fehler
  };


// Funktion Vergleich Eingabe und magicCode
function vergleich () {
  if (versuch === magicCode [0]) {
     alert ('ja');
  }
  else {
    alert ('nein');
  }
};

//not working
/*function anSpeicher (versuch) {
  document.getElementById("1").style.background = versuch;
} ; */

function anSpeicher() { //wird noch nirgends abegerufen
  var versuchLaenge = versuch.length;
  for (var i = 0; i < versuchLaenge; i++)
    // Befehl um Farben aus array in Punkte zu packen ... wie?
}
  


gameSetup(); // Run the game


//nächstes Mal: Resultat in Speicher übergeben
