import "../index.css";
import MyHeader from "../components/header/MyHeader";
import GameTitle from "../components/game/GameTitle";
import GameInfo from "../components/game/GameInfo";
import GameField from "../components/game/GameField";
import useGameState from "../components/game/useGameState";
import { useState } from "react";
export default function HomePage() {
  const [playersCount] = useState(4);
  const {
    cells,
    setCells,
    currentMove,
    setCurrentMove,
    nextMove,
    makeTurn,
    getNextMove,
    computeWinner,
    winnerSequnce,
  } = useGameState({ playersCount });
  return (
    <div className="page">
      <MyHeader />
      <main className="menu">
        <GameTitle playersCount={playersCount} />
        <GameInfo currentMove={currentMove} playersCount={playersCount} />
        <GameField
          currentMove={currentMove}
          nextMove={nextMove}
          cells={cells}
          makeTurn={makeTurn}
          playersCount={playersCount}
          computeWinner={computeWinner}
          winnerSequnce={winnerSequnce}
        />
      </main>
    </div>
  );
}
