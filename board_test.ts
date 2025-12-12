import { assertEquals, assertNotEquals } from "@std/assert";
import { Board, Player } from "./board.ts";

Deno.test("kein Sieger beim abwechselenden füllen der Spalten", () => {
  const board = new Board()

  const moves = [
    0,1,2,3,4,5,6,
    0,1,2,3,4,5,6,
    0,1,2,3,4,5,6
  ]

  let currentPlayer = Player.PlayerX

  for (const col of moves) {
    const row = board.makeMove(currentPlayer, col)
    assertNotEquals(row, -1)

    const winner = board.winner(currentPlayer, row, col)
    assertEquals(winner, Player.Nobody)

    currentPlayer =
      currentPlayer === Player.PlayerX
        ? Player.PlayerO
        : Player.PlayerX
  }
})