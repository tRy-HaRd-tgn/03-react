export default function Mycell({
  index,
  symbols,
  currentStep,
  setCurrentStep,
  setSymbol,
}) {
  const SYMBOL_X = "X";
  const SYMBOL_O = "O";
  const render = (e) => {
    let mass = symbols;
    if (mass[index] === null) {
      mass[index] = currentStep;
      setSymbol(mass);
      if (currentStep == "X") {
        setCurrentStep(SYMBOL_O);
      } else {
        setCurrentStep(SYMBOL_X);
      }
    }
  };
  
  return (
    <button onClick={render} key={index} className="cell">
      <span className={symbols[index] === 'X' ? 'symbol--o' : 'symbol--x'}>{symbols[index]}</span>
    </button>
  );
}
