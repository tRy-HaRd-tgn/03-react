import { render } from "@testing-library/react";
import { useState } from "react";
import "./App.css";
import Mycell from "./components/Mycell";

function App() {
  const SYMBOL_X = "X";
  const SYMBOL_O = "O";
  const [currentStep, setCurrentStep] = useState(SYMBOL_O);
  const [symbols, setSymbol] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [count, setCount] = useState(0);
  const [winnerSequence, setWinnerSequence] = useState(null);
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

  const getSymbolClassName = (currentStep) => {
    if (currentStep === SYMBOL_O) return "symbol--o";
    if (currentStep === SYMBOL_X) return "symbol--x";
    return "";
  };
  return (
    <div className="game">
      <div className="game-info">
        {winnerSequence ? (
          <div>
            Победа{" "}
            <span className={currentStep == "X" ? "symbol--o" : "symbol--x"}>
              {currentStep == "X" ? "O" : "X"}
            </span>{" "}
          </div>
        ) : (
          <></>
        )}
        {count != 9 && !winnerSequence ? (
          <div>
            Ход:{" "}
            {
              <span className={getSymbolClassName(currentStep)}>
                {currentStep}
              </span>
            }
          </div>
        ) : (
          <></>
        )}
        {count == 9 && !winnerSequence ? <div>Ничья</div> : <></>}
      </div>
      <div className="game-field">
        {symbols.map((symbol, index) => {
          return (
            <Mycell
              setCurrentStep={setCurrentStep}
              currentStep={currentStep}
              index={index}
              symbols={symbols}
              setSymbol={setSymbol}
              computerWinner={computerWinner}
              winnerSequence={winnerSequence}
              setWinnerSequence={setWinnerSequence}
              className={winnerSequence ? "cell--win" : ""}
              setCount={setCount}
              count={count}
            ></Mycell>
          );
        })}
      </div>
      {winnerSequence ? (
        <button
          onClick={() => {
            window.location.reload();
          }}
          style={{ marginTop: "15px" }}
        >
          reload
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
