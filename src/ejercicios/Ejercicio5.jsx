import { useState } from "react";

function Ejercicio5() {
  const [number01, setNumber01] = useState(0);
  const [number02, setNumber02] = useState(0);
  const [result, setResult] = useState("");

  const arrCalculo = ["+", "-", "×", "÷"]; 

  const handelClick = (e) => {
    if (isNaN(number01) || isNaN(number02)) {
      setResult("Introduce números válidos");
      return;
    }
    
    let id = e.target.id;
    switch (id) {
      case "0":
        setResult(number01 + number02);
        break;
      case "1":
        setResult(number01 - number02);
        break;
      case "2":
        setResult(number01 * number02);
        break;
      case "3":
        if (number02 === 0) {
          setResult("Error: Div / 0");
          return;
        }
        setResult((number01 / number02).toFixed(2));
        break;
      default:
        console.log(`Operación no reconocida`);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 p-10 bg-base-100 rounded-3xl shadow-2xl border border-base-300 max-w-md w-full">
      <div className="text-center">
        <h1 className="text-4xl font-black text-primary mb-2">Calculadora</h1>
        <p className="text-base-content/50 text-sm italic">Ejercicio - 05</p>
      </div>
      <div className="w-full bg-base-300 rounded-2xl p-6 text-right shadow-inner min-h-\[100px\]flex flex-col justify-center">
        <span className="text-xs font-bold uppercase tracking-widest opacity-40">Resultado</span>
        <div className={`text-3xl font-mono font-bold truncate ${typeof result === 'string' && result.includes('Error') ? 'text-error' : 'text-success'}`}>
          {result !== "" ? result : "0"}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="form-control">
          <label className="label"><span className="label-text font-bold">Valor A</span></label>
          <input 
            type="number" 
            placeholder="0"
            className="input input-bordered input-primary text-center text-xl font-bold focus:scale-105 transition-transform"
            onChange={(e) => setNumber01(parseFloat(e.target.value))} 
          />
        </div>
        <div className="form-control">
          <label className="label"><span className="label-text font-bold">Valor B</span></label>
          <input 
            type="number" 
            placeholder="0"
            className="input input-bordered input-primary text-center text-xl font-bold focus:scale-105 transition-transform"
            onChange={(e) => setNumber02(parseFloat(e.target.value))} 
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 w-full">
        {arrCalculo.map((element, index) => (
          <button 
            key={index} 
            id={index} 
            onClick={handelClick} 
            className="btn btn-secondary text-2xl font-bold shadow-md hover:scale-110 active:scale-95 transition-all"
          >
            {element}
          </button>
        ))}
      </div>

      <button 
        className="btn btn-ghost btn-xs opacity-30 hover:opacity-100"
        onClick={() => {setNumber01(0); setNumber02(0); setResult("")}}
      >
        Borrar todo
      </button>
    </div>
  );
}

export default Ejercicio5;