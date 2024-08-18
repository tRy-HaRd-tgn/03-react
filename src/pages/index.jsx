import "../index.css";
import MyHeader from "../components/header/MyHeader";
import GameTitle from "../components/game/GameTitle";
export default function HomePage() {
  return (
    <div className="page">
      <MyHeader></MyHeader>
      <main className="menu">
        <GameTitle></GameTitle>
      </main>
    </div>
  );
}
