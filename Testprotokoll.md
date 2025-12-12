Fehler: Falscher Sieg wenn besondere Eingabe

Beschreibung
Wenn beide Spieler abwechselnd die Spalten 0,1,2,3,4,5,6 spielen, meldet das Spiel einen Sieger, obwohl keine vier Steine in einer Reihe liegen.

Eingabefolge

0 1 2 3 4 5 6
0 1 2 3 4 5 6
0 1 2 3 


Beobachteter Zustand 

X O X O _ _ _
O X O X O X O
X O X O X O X


Erwartetes Verhalten:

Kein Spieler hat vier gleiche Steine nebeneineander oder diagonal

Das Spiel darf keinen Sieger melden

Tatsaechliches Verhalten:

Das Programm gibt aus:

Player O: A winner is you!


Bewertung:

Fehler beim Prüfen des gewinners