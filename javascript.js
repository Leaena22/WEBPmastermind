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

/*function anSpeicher (versuch) {
  document.getElementById("1").style.background = versuch;
} ; */

// Tabelle für frühere Eingaben wird automatisch erstellt
function erstelleTabelleFruehereEingaben (){
  var rows =5;
  var cols=4;
  var table = document.getElementById("fruehereEingaben"); // leere Tabelle in html
  for (var r = 0; r<rows; r++){
    var row = table.insertRow(-1);
    for (var c = 0; c<cols; c++){
      var cell = row.insertCell(-1);
      cell.setAttribute('id', 'abcd'.charAt(c) + (rows-r)); //vergibt ids selbstständig
      //cell.setAttribute('class', 'cell ' + ((c+r) % 2 ? 'odd' : 'even'));
    }
  }
};  

erstelleTabelleFruehereEingaben () ;
gameSetup(); // Run the game

// Inspiration: https://masteringjs.io/tutorials/fundamentals/compare-arrays
//nächstes Mal: Funktion Vergleich richtig abrufen und Resultat in Speicher übergeben
