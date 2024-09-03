import classes from "./GameField.module.css";
import MyButton from "../ui/MyButton";
import GameSymbol from "./GameSymbol";
import useGameState from "../game/useGameState";

export default function GameField({
  playersCount,
  currentMove,
  nextMove,
  cells,
  makeTurn,
  ...props
}) {
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
        {cells.map((symbol, index) => (
          <button
            className={classes.button}
            onClick={() => makeTurn(index)}
            key={index}
          >
            {symbol}
          </button>
        ))}
      </div>
    </div>
  );
}
