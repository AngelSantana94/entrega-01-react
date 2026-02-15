import { useState } from "react";

function Ejercicio2() {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };

  const handleReset = () => setContador(0);

  return (
    <div className="flex flex-col items-center gap-8 p-8 bg-base-100 rounded-3xl shadow-2xl border border-base-300">
      <h1 className="text-4xl font-extrabold tracking-tight text-primary">
        Ejercicio - 02
      </h1>

      <div className="stats shadow-lg bg-secondary text-secondary-content">
        <div className="stat place-items-center px-12">
          <div className="stat-title text-secondary-content/70">
            Total de Clicks
          </div>
          <div className="stat-value text-6xl font-mono">{contador}</div>
          <div className="stat-desc text-secondary-content/70">
            ¡Sigue sumando!
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleClick}
          className="btn btn-primary btn-lg shadow-md hover:scale-105 active:scale-95 transition-all"
        >
          🚀 Sumar Clicks
        </button>

        <button
          onClick={handleReset}
          className="btn btn-outline btn-error btn-lg"
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
}

export default Ejercicio2;
