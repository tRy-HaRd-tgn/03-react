import X from "../../img/icons/X.svg";
import O from "../../img/icons/O.svg";
import square from "../../img/icons/square.svg";
import triangle from "../../img/icons/triangle.svg";
import { gameSymbols } from "./constants";
export default function GameSymbol({ currentMove }) {
  const icon =
    {
      [gameSymbols.Cross]: X,
      [gameSymbols.Zero]: O,
      [gameSymbols.Square]: square,
      [gameSymbols.Triangle]: triangle,
    }[currentMove] ?? X;

  return <img src={icon} alt=""/>;
}
