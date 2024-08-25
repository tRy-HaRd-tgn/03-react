import classes from "./GameField.module.css";

import MyButton from "../ui/MyButton";
import { useState } from "react";
import GameSymbol from "./GameSymbol";
import { gameSymbols } from "./constants";

const moveOrder = [
  gameSymbols.Cross,
  gameSymbols.Zero,
  gameSymbols.Triangle,
  gameSymbols.Square,
];

export default function GameField() {
  const [cells, setCells] = useState(() => new Array(19 * 19).fill(null));
  const [currentMove, setCurrentMove] = useState(gameSymbols.Cross);
  const nextMove = getNextMove();
  return (
    <div className={classes.field}>
      <div className={classes.fieldHeader}>
        <div className={classes.fieldInfo}>
          <div className={classes.wrap}>
            <h2 className={classes.h2}>Ход: </h2>
            <GameSymbol currentMove={currentMove} />
          </div>

          <div className={classes.wrap}>
            <p className={classes.p}>Следующий: </p>
            <GameSymbol currentMove={nextMove} />
          </div>
        </div>

        <div className={classes.fieldMenu}>
          <MyButton color={"green"} size={"small"}>
            Ничья
          </MyButton>
          <MyButton color={"white"} size={"small"}>
            Сдаться
          </MyButton>
        </div>
      </div>

      <div className={classes.fieldGame}>
        {cells.map((_, i) => (
          <button className={classes.button} key={i}>
            <img src={""} alt=""></img>
          </button>
        ))}
      </div>
    </div>
  );
  function getNextMove() {
    const nextMoveIndex = moveOrder.indexOf(currentMove) + 1;
    return moveOrder[nextMoveIndex] ?? moveOrder[0];
  }
}
