import { useState } from "react";
import { gameSymbols, moveOrder, moveOrderSec } from "./constants";
import computeWinner from "./model";
import GameSymbol from "./GameSymbol";
// sequenceSize = 5 - количество символов для победы

export default function UseGameState({ playersCount, ...props }) {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: gameSymbols.Cross,
    playersTimeOver: [],
  }));

  const nextMove = getNextMove();

  function makeTurn(index) {
    let mas = cells;
    if (mas[index] === null) {
      mas[index] = <GameSymbol currentMove={currentMove} />;
      setGameState((lastGameState) => {
        return {
          ...lastGameState,
          cells: mas,
          currentMove: getNextMove(),
        };
      });
    }
  }
  const handleTimeOver = (symbol) => {
    setGameState((lastGameState) => {
      return {
        ...lastGameState,
        playersTimeOver: [...lastGameState.playersTimeOver, symbol],
        currentMove: getNextMove(),
      };
    });
  };

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
  const winnerSymbol = winnerSequnce?.[0];
  console.log(winnerSymbol)

  return {
    cells,
    currentMove,
    nextMove,
    makeTurn,
    getNextMove,
    winnerSequnce,
    computeWinner,
    handleTimeOver,
    winnerSymbol,
  };
}
