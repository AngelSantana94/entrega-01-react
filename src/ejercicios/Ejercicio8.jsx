import { useState } from "react";

function Ejercicio8() {
  const [texto, setTexto] = useState("");
  const [characters, setCharacters] = useState(0);
  const [wordsCount, setWordsCount] = useState(0);

  const handleChange = (e) => {
    const nuevoTexto = e.target.value; 
    
    setTexto(nuevoTexto); 
    
    
    setWordsCount(nuevoTexto.split(/\s+/).filter((word) => word !== "").length);
    setCharacters(nuevoTexto.trim().length);
  };

  const handleClear = () => {
    setTexto("");
    setCharacters(0);
    setWordsCount(0);
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8 bg-base-100 rounded-3xl shadow-2xl border border-base-300 max-w-2xl w-full">
      <div className="text-center">
        <h1 className="text-4xl font-black text-primary mb-2">Analizador de Texto</h1>
        <p className="text-base-content/50 text-sm italic">Ejercicio - 08</p>
      </div>

      <div className="w-full relative">
        <textarea
          className="textarea textarea-bordered textarea-primary w-full h-64 text-lg leading-relaxed focus:ring-2 focus:ring-primary/20 transition-all resize-none shadow-inner p-6 bg-base-200/30"
          placeholder="Escribe o pega tu texto aquí..."
          value={texto} 
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="stats shadow-md bg-secondary text-secondary-content">
          <div className="stat place-items-center">
            <div className="stat-title text-secondary-content/70">Palabras</div>
            <div className="stat-value">{wordsCount}</div>
          </div>
        </div>

        <div className="stats shadow-md bg-accent text-accent-content">
          <div className="stat place-items-center">
            <div className="stat-title text-accent-content/70">Caracteres</div>
            <div className="stat-value">{characters}</div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between px-2">
        <div className="flex gap-2">
          <div className="badge badge-outline opacity-50 uppercase text-[10px] font-bold tracking-tighter">
            Tiempo de lectura: {Math.ceil(wordsCount / 200)} min
          </div>
        </div>
        <button 
          className="btn btn-ghost btn-xs opacity-30 hover:opacity-100 text-error"
          onClick={handleClear} 
        >
          Limpiar lienzo
        </button>
      </div>
    </div>
  );
}

export default Ejercicio8;