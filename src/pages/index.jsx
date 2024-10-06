import "../index.css";
import MyHeader from "../components/header/MyHeader";
import GameTitle from "../components/game/GameTitle";
import GameInfo from "../components/game/GameInfo";
import GameField from "../components/game/GameField";
import useGameState from "../components/game/useGameState";
import { useState } from "react";
import GameSymbol from "../components/game/GameSymbol";
export default function HomePage() {
  const [playersCount] = useState(4);
  const {
    cells,
    currentMove,
    nextMove,
    makeTurn,
    handleTimeOver,
    computeWinner,
    winnerSequnce,
    winnerSymbol,
  } = useGameState({ playersCount });
  return (
    <div className="page">
      <MyHeader />
      <main className="menu">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          currentMove={currentMove}
          playersCount={playersCount}
          isWinner={!!winnerSymbol}
          onTimeover={handleTimeOver}
        />
        {winnerSymbol ? (
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "0px",
            }}
          >
            <p style={{ alignItems: "center", margin: "0px",marginRight: "5px" }}>победитель </p>
            <GameSymbol
              styles={{ transform: "translateY(55px)" }}
              currentMove={winnerSymbol}
            ></GameSymbol>
          </h2>
        ) : null}
        <GameField
          currentMove={currentMove}
          nextMove={nextMove}
          cells={cells}
          makeTurn={makeTurn}
          playersCount={playersCount}
          computeWinner={computeWinner}
          winnerSequnce={winnerSequnce}
          winnerSymbol={winnerSymbol}
        />
      </main>
    </div>
  );
}
