export default function Mycell({
  index,
  symbols,
  currentStep,
  setCurrentStep,
  setSymbol,
  setWinnerSequence,
  className,
  winnerSequence,
  count,
  setCount,
}) {
  const computerWinner = (cells) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; ++i) {
      const [a, b, c] = lines[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c])
        return [a, b, c];
    }
  };
  const SYMBOL_X = "X";
  const SYMBOL_O = "O";
  const render = (e) => {
    let mass = symbols;
    if (mass[index] === null) {
      mass[index] = currentStep;
      setSymbol(mass);
      if (currentStep === "X") {
        setCurrentStep(SYMBOL_O);
        setCount(count + 1);
      } else {
        setCurrentStep(SYMBOL_X);
        setCount(count + 1);
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
