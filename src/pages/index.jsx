import "../index.css";
import MyHeader from "../components/header/MyHeader";
import GameTitle from "../components/game/GameTitle";
import GameInfo from "../components/game/GameInfo";
import GameField from "../components/game/GameField";
import { useState } from "react";
export default function HomePage() {
  const [playersCount] = useState(4);
  return (
    <div className="page">
      <MyHeader></MyHeader>
      <main className="menu">
        <GameTitle playersCount={playersCount} />
        <GameInfo playersCount={playersCount} />
        <GameField playersCount={playersCount} />
      </main>
    </div>
  );
}
