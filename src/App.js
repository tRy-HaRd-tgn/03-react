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
  const getSymbolClassName = (currentStep) => {
    if(currentStep === SYMBOL_O) return 'symbol--o';
    if(currentStep === SYMBOL_X) return 'symbol--x';
    return '';
  } 
  return (
    <div className="game">
      <div className="game-info">Ход: {<span className={getSymbolClassName(currentStep)}>{currentStep}</span>}</div>
      <div className="game-field">
        {symbols.map((symbol, index) => {
          return <Mycell setCurrentStep={setCurrentStep} currentStep={currentStep} index={index} symbols={symbols} setSymbol={setSymbol} ></Mycell>;
        })}
      </div>
    </div>
  );
}

export default App;
