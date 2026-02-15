import { useState } from "react";
import Ejercicio0 from "./ejercicios/Ejercicio0";
import Ejercicio1 from "./ejercicios/Ejercicio1";
import Ejercicio2 from "./ejercicios/Ejercicio2";
import Ejercicio3 from "./ejercicios/Ejercicio3";
import Ejercicio4 from "./ejercicios/Ejercicio4";
import Ejercicio5 from "./ejercicios/Ejercicio5";
import Ejercicio6 from "./ejercicios/Ejercicio6";
import Ejercicio7 from "./ejercicios/Ejercicio7";
import Ejercicio8 from "./ejercicios/Ejercicio8";
import Ejercicio9 from "./ejercicios/Ejercicio9";

function App() {
  const [index, setIndex] = useState(0);

  return (
    <main className="min-h-screen bg-base-200 text-base-content">
      {/* Barra de navegación superior (Sticky) */}
      {index !== 0 && (
        <nav className="sticky top-0 z-50 flex justify-center gap-2 p-4 bg-base-100/70 backdrop-blur-md shadow-sm mb-8">
          <button
            className="btn btn-primary btn-sm md:btn-md"
            onClick={() => setIndex(index - 1)}
            disabled={index === 1}
          >
            ← Anterior
          </button>
          
          <button
            className="btn btn-ghost btn-sm md:btn-md border-base-300"
            onClick={() => setIndex(0)}
          >
            🏠 Menú
          </button>
          
          <button
            className="btn btn-primary btn-sm md:btn-md"
            onClick={() => setIndex(index + 1)}
            disabled={index === 9}
          >
            Siguiente →
          </button>
        </nav>
      )}

      {/* Área de contenido del ejercicio */}
      <div className="w-full px-4 pb-20">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full flex flex-col items-center">
          {index === 0 && <Ejercicio0 setIndex={setIndex} />}
          {index === 1 && <Ejercicio1 />}
          {index === 2 && <Ejercicio2 />}
          {index === 3 && <Ejercicio3 />}
          {index === 4 && <Ejercicio4 />}
          {index === 5 && <Ejercicio5 />}
          {index === 6 && <Ejercicio6 />}
          {index === 7 && <Ejercicio7 />}
          {index === 8 && <Ejercicio8 />}
          {index === 9 && <Ejercicio9 />}
        </div>
      </div>
    </main>
  );
}

export default App;