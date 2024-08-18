import "../App.css";
import Mycell from "../components/Mycell";
import GameInfo from "../components/GameInfo";
import useGameState from "../hooks/useGameState";
function App() {
  const SYMBOL_X = "X";
  const SYMBOL_O = "O";
  const {
    currentStep,
    setCurrentStep,
    symbols,
    setSymbol,
    count,
    setCount,
    winnerSequence,
    setWinnerSequence,
  } = useGameState();

  const getSymbolClassName = (currentStep) => {
    if (currentStep === SYMBOL_O) return "symbol--o";
    if (currentStep === SYMBOL_X) return "symbol--x";
    return "";
  };
  return (
    <div className="game">
      <GameInfo
        winnerSequence={winnerSequence}
        currentStep={currentStep}
        count={count}
        getSymbolClassName={getSymbolClassName}
      />
      <div className="game-field">
        {symbols.map((symbol, index) => {
          return (
            <Mycell
              setCurrentStep={setCurrentStep}
              currentStep={currentStep}
              index={index}
              symbols={symbols}
              setSymbol={setSymbol}
              winnerSequence={winnerSequence}
              setWinnerSequence={setWinnerSequence}
              className={winnerSequence ? "cell--win" : ""}
              setCount={setCount}
              count={count}
            />
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
