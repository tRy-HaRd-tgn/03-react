import { useState } from "react";

export default function Mycell({
  index,
  symbols,
  currentStep,
  setCurrentStep,
  setSymbol,
  computerWinner,
  setWinnerSequence,
  className,
  winnerSequence,
  count,
  setCount,
}) {
  const SYMBOL_X = "X";
  const SYMBOL_O = "O";
  const render = (e) => {
    let mass = symbols;
    if (mass[index] === null) {
      mass[index] = currentStep;
      setSymbol(mass);
      if (currentStep == "X") {
        setCurrentStep(SYMBOL_O);
        setCount(count+1)
      } else {
        setCurrentStep(SYMBOL_X);
        setCount(count+1)
      }
    }
    const winner = computerWinner(symbols);
    setWinnerSequence(winner);
  };

  return (
    <button
      disabled={winnerSequence ? true : false}
      onClick={render}
      key={index}
      className={
        winnerSequence &&
        (winnerSequence[0] === index ||
          winnerSequence[1] === index ||
          winnerSequence[2] === index)
          ? className
          : "cell"
      }
    >
      <span className={symbols[index] === "X" ? "symbol--x" : "symbol--o"}>
        {symbols[index]}
      </span>
    </button>
  );
}
