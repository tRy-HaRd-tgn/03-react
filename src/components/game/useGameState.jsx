import { useState } from "react";
import { gameSymbols } from "./constants";
import { moveOrder, moveOrderSec } from "./constants";
import GameSymbol from "./GameSymbol";
export default function UseGameState({ playersCount, ...props }) {
  const [cells, setCells] = useState(() => new Array(19 * 19).fill(null));
  const [currentMove, setCurrentMove] = useState(gameSymbols.Cross);
  const nextMove = getNextMove();
  function makeTurn(index) {
    let mas = cells;
    if (mas[index] === null) {
      mas[index] = <GameSymbol currentMove={currentMove} />;
      setCells(mas);
      setCurrentMove(nextMove);
    }
  }
  function getNextMove() {
    if (playersCount === 4) {
      const nextMoveIndex = moveOrder.indexOf(currentMove) + 1;
      return moveOrder[nextMoveIndex] ?? moveOrder[0];
    }
    if (playersCount === 2) {
      const nextMoveIndex = moveOrderSec.indexOf(currentMove) + 1;
      return moveOrderSec[nextMoveIndex] ?? moveOrderSec[0];
    }
  }
  return {
    cells,
    setCells,
    currentMove,
    setCurrentMove,
    nextMove,
    makeTurn,
    getNextMove,
  };
}
