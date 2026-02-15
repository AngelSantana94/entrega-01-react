import { useState } from "react";

function Ejercicio4() {
  const arrTexto = [
    "Perro", "Gato", "Pez", "Serpiente", 
    "Elefante", "Tigre", "Loro", "Leopardo", 
    "Cebra", "Caballo", "Vaca", "Conejo", 
    "Zorro", "Rana"
  ];

  const [characters, setCharacters] = useState("");
  
  const filtrado = arrTexto.filter((text) => 
    text.toLowerCase().includes(characters.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center gap-8 p-8 bg-base-100 rounded-3xl shadow-2xl border border-base-300 w-full max-w-2xl">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-primary mb-2">Ejercicio - 04</h1>
        <p className="text-base-content/60 italic">Filtro de Búsqueda en Tiempo Real</p>
      </div>

      <div className="form-control w-full">
        <label className="input input-bordered flex items-center gap-2 input-lg shadow-inner focus-within:input-primary transition-all">
          <input 
            type="text" 
            className="grow" 
            placeholder="Escribe para buscar un animal..." 
            value={characters}
            onChange={(e) => setCharacters(e.target.value)} 
          />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70">
            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
          </svg>
        </label>
      </div>
      <div className="flex flex-wrap justify-center gap-3 min-h-\[100px\] p-4 bg-base-200/50 rounded-2xl w-full">
        {filtrado.length > 0 ? (
          filtrado.map((animal, index) => (
            <span 
              key={index} 
              className="badge badge-primary badge-lg py-4 px-6 font-bold shadow-sm animate-in zoom-in duration-200"
            >
              {animal}
            </span>
          ))
        ) : (
          <div className="flex flex-col items-center opacity-40 mt-4">
            <span className="text-5xl">❌</span>
            <p className="font-bold">No se encontró ningún animal</p>
          </div>
        )}
      </div>

      <div className="text-xs text-base-content/40">
        Mostrando {filtrado.length} de {arrTexto.length} animales
      </div>
    </div>
  );
}

export default Ejercicio4;