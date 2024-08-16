export default function GameInfo({
  winnerSequence,
  currentStep,
  count,
  getSymbolClassName,
}) {
  return (
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
  );
}
