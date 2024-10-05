import classes from "./GameField.module.css";
export default function GameCell({
  onClick,
  isWinner,
  children,
  disable,
  ...props
}) {
  return (
    <button
      disabled={disable}
      onClick={onClick}
      className={isWinner ? classes.buttonWinner : classes.button}
    >
      {children}
    </button>
  );
}
