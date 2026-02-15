import { useState, useEffect } from "react";

function Ejercicio6() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleClick = () => setIsRunning(!isRunning);
  const handleReset = () => {
    setCounter(0);
    setIsRunning(false);
  };

  const minutes = Math.floor(counter / 60000);
  const seconds = Math.floor((counter / 1000) % 60);
  const milliseconds = Math.floor((counter % 1000) / 10);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setCounter((c) => c + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="flex flex-col items-center gap-10 p-10 bg-base-100 rounded-3xl shadow-2xl border border-base-300 max-w-lg w-full">
      <div className="text-center">
        <h1 className="text-4xl font-black text-primary mb-2">Cronómetro</h1>
        <p className="text-base-content/50 text-sm italic">Ejercicio - 06</p>
      </div>

      <div className="flex justify-center items-center bg-neutral text-neutral-content p-8 rounded-2xl shadow-inner w-full">
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max font-mono">
          <div className="flex flex-col p-2 bg-neutral-focus rounded-box">
            <span className="text-6xl">{minutes.toString().padStart(2, "0")}</span>
            <span className="text-xs uppercase opacity-50">Min</span>
          </div>
          <div className="text-6xl self-center mb-6">:</div>
          <div className="flex flex-col p-2 bg-neutral-focus rounded-box">
            <span className="text-6xl">{seconds.toString().padStart(2, "0")}</span>
            <span className="text-xs uppercase opacity-50">Sec</span>
          </div>
          <div className="text-6xl self-center mb-6 text-primary">:</div>
          <div className="flex flex-col p-2 bg-neutral-focus rounded-box text-primary">
            <span className="text-6xl">{milliseconds.toString().padStart(2, "0")}</span>
            <span className="text-xs uppercase opacity-50">Ms</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4 w-full">
        <button
          onClick={handleClick}
          className={`flex-1 btn btn-lg shadow-lg transition-all duration-300 ${
            isRunning 
            ? "btn-error hover:scale-105" 
            : "btn-success hover:scale-105 text-white"
          }`}
        >
          {isRunning ? (
            <span className="flex items-center gap-2">⏸ Pausar</span>
          ) : (
            <span className="flex items-center gap-2">▶ Iniciar</span>
          )}
        </button>

        <button
          onClick={handleReset}
          className="btn btn-outline btn-lg px-8 hover:bg-base-300 transition-colors"
        >
          🔄 Reiniciar
        </button>
      </div>
      <div className="flex items-center gap-2">
        <span className={`relative flex h-3 w-3 ${isRunning ? "block" : "hidden"}`}>
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
        </span>
        <p className="text-xs font-bold uppercase tracking-widest opacity-40">
          {isRunning ? "Contando..." : "En espera"}
        </p>
      </div>
    </div>
  );
}

export default Ejercicio6;