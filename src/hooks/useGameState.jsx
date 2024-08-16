import { useState } from "react";
export default function useGameState() {
    const [currentStep, setCurrentStep] = useState('O');
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
    const [count, setCount] = useState(0);
    const [winnerSequence, setWinnerSequence] = useState(null);
  
    return { currentStep,setCurrentStep, symbols,setSymbol, count,setCount, winnerSequence,setWinnerSequence };
  }