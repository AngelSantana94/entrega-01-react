import { useState } from "react";
import { useEffect } from "react";
function Ejercicio1() {
  const [color, setColor] = useState(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "#242424"
      : "#ffffff";
  });

  useEffect(() =>{
    document.querySelector("main").style.backgroundColor = color;
    return () => document.querySelector("main").style.backgroundColor = ""
  })

  

  const handleClick = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };
  return (
    <>
      <h1 className="text-4xl font-extrabold text-primary mb-2">Ejercicio - 01</h1>
      <p className="mb-4 font-mono font-bold bg-white/50 p-2 rounded">
        {color}
      </p>

      <button className="btn btn-primary" onClick={handleClick}>
        Cambiar Fondo
      </button>
    </>
  );
}

export default Ejercicio1;
