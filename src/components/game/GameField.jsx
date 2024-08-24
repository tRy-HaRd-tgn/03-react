import classes from "./GameField.module.css";
import X from "../../img/icons/X.svg";
import O from "../../img/icons/O.svg";
import square from "../../img/icons/square.svg";
import triangle from "../../img/icons/triangle.svg";
import MyButton from "../ui/MyButton";
const cells = new Array(19 * 19).fill(null); // массив с нашими клетками
export default function GameField(props) {
  return (
    <div className={classes.field}>
      <div className={classes.fieldHeader}>
        <div className={classes.fieldInfo}>
          <div className={classes.wrap}>
            <h2 className={classes.h2}>Ход: </h2>
            <img src={O} alt="" />
          </div>

          <div className={classes.wrap}>
            <p className={classes.p}>Следующий: </p>
            <img src={X} alt="" />
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
            <img src={""}></img>
          </button>
        ))}
      </div>
    </div>
  );
}
