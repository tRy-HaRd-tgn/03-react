import classes from "./GameTitle.module.css";
import arrow from "../../img/arrow.svg";
import star from "../../img/star.svg";
import man from "../../img/man.svg";
import time from "../../img/time.svg";
export default function GameTitle(props) {
  return (
    <div className={classes.block}>
      <button className={classes.btn}>
        <img src={arrow} alt="" style={{ marginRight: "5px" }} />
        На главную
      </button>
      <h2 className={classes.h2}>Крестики нолики</h2>
      <div className={classes.info}>
        <img src={star} style={{ marginRight: "10px" }} />

        <div className={classes.man_info}>
          <img src={man} style={{ marginRight: "5px" }} />2
        </div>
        <div className={classes.time_info}>
          <img src={time} style={{ marginRight: "5px" }} />1 мин на ход
        </div>
      </div>
    </div>
  );
}
