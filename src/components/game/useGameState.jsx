import { useState } from "react";
import { gameSymbols, moveOrder, moveOrderSec } from "./constants";
import computeWinner from "./model";
import GameSymbol from "./GameSymbol";
// sequenceSize = 5 - количество символов для победы

export default function UseGameState({ playersCount, ...props }) {
  const [cells, setCells] = useState(() => new Array(19 * 19).fill(null));
  const [currentMove, setCurrentMove] = useState(gameSymbols.Cross);
  const nextMove = getNextMove();
  const [playersTimeOver,setPLayerTimeOver] = useState([])
  function makeTurn(index) {
    let mas = cells;
    if (mas[index] === null) {
      mas[index] = <GameSymbol currentMove={currentMove} />;
      setCells(mas);
      setCurrentMove(nextMove);
    }
  }
  const handleTimeOver= () => {
    
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
  const winnerSequnce = computeWinner(cells);
  return {
    cells,
    setCells,
    currentMove,
    setCurrentMove,
    nextMove,
    makeTurn,
    getNextMove,
    winnerSequnce,
    computeWinner,
  };
}
