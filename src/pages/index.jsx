import "../index.css";
import MyHeader from "../components/header/MyHeader";
import GameTitle from "../components/game/GameTitle";
import GameInfo from "../components/game/GameInfo";
import GameField from "../components/game/GameField";
import useGameState from "../components/game/useGameState";
import GameSymbol from "../components/game/GameSymbol";
import { moveOrder, moveOrderSec } from "../components/game/constants";
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
    winnerSymbol,
    computeWinner,
  } = useGameState({ playersCount });
  return (
    <div className="page">
      <MyHeader></MyHeader>
      <main className="menu">
        {!winnerSymbol ? (<><GameTitle playersCount={playersCount} />
        <GameInfo currentMove={currentMove} playersCount={playersCount} />
        <GameField
          currentMove={currentMove}
          nextMove={nextMove}
          cells={cells}
          makeTurn={makeTurn}
          playersCount={playersCount}
          computeWinner={computeWinner}
        /></>):<h2 className='winnerState' >Победил: <GameSymbol currentMove={currentMove=='cross' ? moveOrder[moveOrder.indexOf(currentMove) +3 ]: moveOrder[moveOrder.indexOf(currentMove) -1]} style={{position:'relative',top:'2px'}}></GameSymbol></h2>}
      </main>
    </div>
  );
}
