var versuch = []; // Array für die Eingabezeile
var magicCode = []; // Array für den zu erratenden Farbcode
var p = 1 ; // ID der Zelle aus der Tabelle "frühere Eingaben"
var pp = 33; // ID der Zelle aus der Tabelle "Feedback"
var n = 0 ; // Variable für die vier Stellen der Eingabe
var farben = ['#1D70B7', '#E30513', '#F9B233', '#008D36', '#A2195B', '#44B8B3'];

// Funktion neues Spiel
function gameSetup () {
    erstellenMagicCode(0, 6);
};


// funktionierende Funktion für Auswahl der Farbe für Dot a
function farbwahl(clr) {
    var u = "abcd".charAt(n); // Variable erhält von n die aktuelle ID a,b,c oder d der Steckplätze 
    document.getElementById(u).style.background = clr;
    versuch.push(clr); //übertragen der angewählten Farbe in Array versuch
    if (n <= 4) {
      n++ ;
    }
    else {}
};


// Funktion für den Löschen-Button
function loeschen() {
  var xu = "abcd".charAt(versuch.length -1); // xu sagt, welche Steckplatz ID angesprochen werden soll
  document.getElementById(xu).style.background = '#6D4B52'; // Hintergrundfarbe von Steckplatz wird in Default-Farbe gefärbt
  versuch.splice(versuch.length -1); // letzter Index in Array "versuch" wird gelöscht
  n --; // Variable aus function "farbwahl" -> sagt dass an der wieder frei gewordenen Stelle weitergemacht wird
};  


// Funktion zum erstellen des zu erratenden Farbcodes
function erstellenMagicCode (min, max) {
    for (var i = 0; i < 4; i++)
      magicCode[i] = farben[Math.floor(Math.random() * (max - min)) + min]; //+min ändert Ergebnis nicht, weil unser min = 0, muss drinbleiben weil sonst Fehler
};


// Funktion Vergleich Eingabe und magicCode
//stringify prüft, ob Array "versuch" und "magicCode" exakt gleich sind
function vergleich () {
  if (JSON.stringify(versuch) === JSON.stringify(magicCode)) {
      alert ('Hurra! Du hast es geschafft und den Code geknackt! :D') ;
      location.reload() ;
  }
    
  //prüfen, ob richtige Farbe am richtigen Ort
  else { 
    for (var x = 3; x >= 0; x--) {
      if (versuch[x] === magicCode[x]) {
        document.getElementById(pp).style.background = "#000000" 
        pp++ ;
      }
        
     //prüfen, ob richtige Farbe am falschen Ort
      else if (magicCode.includes(versuch[x])) {
        document.getElementById(pp).style.background = "#ffffff"
        pp++ ;
      }
      else {pp++ ;}
    }
  }
};

//i++ beim klick auf okay Button
function anSpeicher(versuch) { 
  var k = 3 ; // Index im Array Versuch
  for (var y = 0; y < 4; y++) {
  document.getElementById(p).style.background = versuch[k] ;
  p++ ; 
  k-- ;
  } 
  
  if (p >= 32) {
    alert ('Schade, das war wohl nichts. :( Vielleicht klappts beim nächsten Mal.') ;
    location.reload() ;
  }
    
  // Eingabesteckplätze werden "geleert", sie erhalten wieder die Default-Farbe
  document.getElementById("a").style.background = '#6D4B52';
  document.getElementById("b").style.background = '#6D4B52';
  document.getElementById("c").style.background = '#6D4B52';
  document.getElementById("d").style.background = '#6D4B52';
  n = 0 ; // Springt wieder auf Steckplatz "a" für einen neuen Versuch 
  versuch.length = 0; // Array Versuch wird zurückgesetzt
};


function runTime () {
  vergleich () ;
  anSpeicher(versuch) ;
};


gameSetup(); // Run the game
