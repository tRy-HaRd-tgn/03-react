import { useState } from "react";
import { gameSymbols } from "./constants";
import { moveOrder, moveOrderSec } from "./constants";
import GameSymbol from "./GameSymbol";
// sequenceSize = 5 - количество символов для победы
function computeWinner(cells, sequenceSize = 5, fieldSize = 19) {
  const gap = Math.floor(sequenceSize / 2);

  function compareElements(indexes) {
    let result = true;

    for (let i = 1; i < indexes.length; i++) {
      if (cells[indexes[i]] != null && cells[indexes[i - 1]] != null) {
        result &&=
          cells[indexes[i]].props.currentMove ===
          cells[indexes[i - 1]].props.currentMove;
      } else {
        result = false;
      }
    }

    return result;
  }

  function getSequnceIndexes(index) {
    const res = [[], [], [], []];
    for (let j = 0; j < sequenceSize; j++) {
      res[0].push(j - gap + index);
      res[1].push(fieldSize * (j - gap) + (j - gap) + index);
      res[2].push(-fieldSize * (j - gap) + (j - gap) + index);
      res[3].push(fieldSize * (j - gap) + index);
    }
    return res;
  }
  for (let i = 0; i < cells.length; i++) {
    if (cells[i]) {
      const indexRows = getSequnceIndexes(i);
      const winnerIndexes = indexRows.find((row) => compareElements(row));
      if (winnerIndexes) {
        
        console.log(cells[winnerIndexes[0]].props.currentMove)
        return winnerIndexes;
      }
    }
  }
  return undefined;
}
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
  console.log(computeWinner(cells));
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
