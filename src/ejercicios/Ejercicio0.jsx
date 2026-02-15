import Card from "../components/Card";

function Ejercicio0({ setIndex }) {
  const ejercicios = [
    { id: 1, title: "Ejercicio-01", desc: "Cambiador de Color de Fondo" },
    { id: 2, title: "Ejercicio-02", desc: "Contador de Clics" },
    { id: 3, title: "Ejercicio-03", desc: "Lista Dinámica" },
    {
      id: 4,
      title: "Ejercicio-04",
      desc: " Filtro de Búsqueda en Tiempo Real",
    },
    { id: 5, title: "Ejercicio-05", desc: "Calculadora Sencilla" },
    {
      id: 6,
      title: "Ejercicio-06",
      desc: "Temporizador con Inicio, Pausa y Reinicio",
    },
    {
      id: 7,
      title: "Ejercicio-07",
      desc: "Generador de Contraseñas Aleatorias",
    },
    { id: 8, title: "Ejercicio-08", desc: "Contador de Palabras y Caracteres" },
    { id: 9, title: "Ejercicio-09", desc: "Lista de Tareas con LocalStorage" },
  ];
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Entrega de Ejercicios 1 - React</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ejercicios.map((element) => (
          <Card
            key={element.id}
            id={element.id}
            title={element.title}
            desc={element.desc}
            onClick={() => setIndex(element.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Ejercicio0;
