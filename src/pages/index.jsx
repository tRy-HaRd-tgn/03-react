import "../index.css";
import MyHeader from "../components/header/MyHeader";
import GameTitle from "../components/game/GameTitle";
import GameInfo from "../components/game/GameInfo";
import GameField from "../components/game/GameField";
export default function HomePage() {
  return (
    <div className="page">
      <MyHeader></MyHeader>
      <main className="menu">
        <GameTitle />
        <GameInfo />
        <GameField />
      </main>
    </div>
  );
}
