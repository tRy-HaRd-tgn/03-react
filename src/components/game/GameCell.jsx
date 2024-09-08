import classes from "./GameField.module.css";
export default function GameCell({ onClick, isWinner, children, ...props }) {
  console.log(isWinner);
  return (
    <button
      onClick={onClick}
      className={isWinner ? classes.buttonWinner : classes.button}
    >
      {children}
    </button>
  );
}
