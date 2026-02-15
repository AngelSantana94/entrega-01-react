import { useState } from "react"

function Ejercicio3() {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([])

  const eliminarTarea = (indiceABorrar) => {
    const nuevaLista = listaTareas.filter((_, index) => index !== indiceABorrar);
    setListaTareas(nuevaLista)
  }

  const handleClick = () => {
    if (tarea.trim() === "") return;
    setListaTareas([...listaTareas, tarea]);
    setTarea("")
  }

  return (
    <main className="min-h-screen w-full bg-[#1a1a1a] text-white flex flex-col items-center pt-10">
      <h1 className="text-4xl font-extrabold text-primary mb-2">Ejercicio - 03</h1>
      
      <div className="flex gap-2 mb-6">
        <input 
          className="px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-500" 
          value={tarea} 
          type="text" 
          placeholder="Nueva tarea..."
          onChange={(e) => setTarea(e.target.value)} 
        />
        <button 
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold transition-colors"
          onClick={handleClick} 
        >
          Agregar
        </button>
      </div>

      <ul className="w-full max-w-md space-y-2 px-4">
        {listaTareas.map((element, index) => (
          <li 
            key={index} 
            className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700"
          >
            <span className="text-lg">{element}</span>
            <button 
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors text-sm"
              onClick={() => eliminarTarea(index)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Ejercicio3