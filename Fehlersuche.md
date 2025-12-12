# Fehlersuche

## Ausgangslage:
- Das Spiel meldet bei einer abwechselnder Eingabefolge (0,1,2,3,4,5,6,0,1,...) einen Sieger, obwohl keine Vierer Reihe existiert.
- Ein Test reproduziert den Fehler zuverlässig und scheitert.

## Debugging-Techniken:
- Test-Driven Debugging: reproduzierbarer Testfall als Ausgangspunkt
- Zusätzliche Ausgaben (console.log) in relevanten Methoden
- Code-Review im Kopf: Index-Rechnung und Laufwege der Diagonal-Suche

## Vorgehen und Beobachtungen:

### 1) Fehler reproduzieren
- test ausgefuehrt
- Der Test scheitert, weil `board.winner(...)` nicht `Player.Nobody` liefert.

### 2) Eingrenzen der Fehlerquelle
- In `winner(...)` werden horizontal, vertikal, diagonal geprüft.
- Horizontal und vertikal nutzen `getRow` und `getCol` und suchen nach `player.repeat(4)`.
- Verdacht: Fehler in `diagonalWinner` oder `getDiagonals`.

### 3) Ursache und beheben
- In `getDiagonals` ist im letzten Loop ein falscher Index verwendet:

  falling.push(this.fields[i][i])

- Korrekt ist:

  falling.push(this.fields[i][j])

- Dadurch werden Werte aus der falschen Spalte gelesen, was zu falschen Treffern beim `includes(win)` führt.

### 4) Weitere Beobachtung/ Nebenfehler
- Die aktuelle Implementierung fügt den Startpunkt (r,c) teilweise doppelt in rising und falling ein.
- Das kann Strings künstlich verlaägern und die `includes`-Suche verfälschen.
- Deshalb habe ich `getDiagonals` angepasst, sodass:
  - keine doppelten Felder gesammelt werden
  - die Laufwege eindeutig von Rand zu Rand gehen

## Ergebnis
- Nach der Korrektur:
  - Der Test ist grün
  - Es kommt kein falscher Sieger mehr
