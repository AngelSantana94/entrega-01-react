import { useState, useEffect } from "react";

function Ejercicio9() {
  const [listaTarea, setListaTarea] = useState(() => {
    const guardado = localStorage.getItem("tareas_pendientes");
    return guardado ? JSON.parse(guardado) : [];
  });

  const [listaCompletadas, setListaCompletadas] = useState(() => {
    const guardado = localStorage.getItem("tareas_completadas");
    return guardado ? JSON.parse(guardado) : [];
  });

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    localStorage.setItem("tareas_pendientes", JSON.stringify(listaTarea));
  }, [listaTarea]);

  useEffect(() => {
    localStorage.setItem(
      "tareas_completadas",
      JSON.stringify(listaCompletadas),
    );
  }, [listaCompletadas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titulo.trim() === "") {
      alert("Alerta: El título es obligatorio");
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      titulo: titulo,
      descripcion: descripcion,
      completada: false,
      eliminar: false,
    };

    setListaTarea([...listaTarea, nuevaTarea]);
    setTitulo("");
    setDescripcion("");
  };

  const handleClickCompletada = () => {
    const seleccionadas = listaTarea.filter((t) => t.completada);
    const restantes = listaTarea.filter((t) => !t.completada);

    setListaCompletadas([...listaCompletadas, ...seleccionadas]);
    setListaTarea(restantes);
  };

  const handleToggle = (id) => {
    setListaTarea(
      listaTarea.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t,
      ),
    );
  };

  const handleCheckedDelete = (id) => {
    setListaCompletadas(
      listaCompletadas.map((c) =>
        c.id === id ? { ...c, eliminar: !c.eliminar } : c,
      ),
    );
  };

  const handleClickEliminar = () => {
    setListaCompletadas(listaCompletadas.filter((t) => !t.eliminar));
  };

  return (
    <main className="p-8 max-w-4xl mx-auto space-y-8 bg-base-200 min-h-screen rounded-xl shadow-2xl mt-4">
      <header className="text-center border-b pb-4">
        <h1 className="text-4xl font-black text-primary uppercase tracking-widest">
          To-DoList de Tareas
        </h1>
        <p>Ejercicio - 09</p>
      </header>

      {/* FORMULARIO */}
      <section className="card bg-base-100 shadow-xl p-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="¿Qué hay que hacer?"
            className="input input-bordered input-primary w-full"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <textarea
            className="textarea textarea-bordered textarea-primary w-full"
            placeholder="Añade una descripción (opcional)..."
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
          <button type="submit" className="btn btn-primary w-full shadow-lg">
            Agregar Tarea
          </button>
        </form>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 border-l-4 border-warning pl-2">
            Pendientes{" "}
            <div className="badge badge-warning">{listaTarea.length}</div>
          </h2>
          <div className="bg-base-100 rounded-box p-4 shadow-inner min-h-\[200px\] ">
            {listaTarea.map((tarea) => (
              <div
                key={tarea.id}
                className="flex items-center gap-3 p-3 border-b last:border-0 hover:bg-base-200 transition-colors"
              >
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  checked={tarea.completada}
                  onChange={() => handleToggle(tarea.id)}
                />
                <div className="flex-1">
                  <p
                    className={`font-semibold ${tarea.completada ? "line-through opacity-50" : ""}`}
                  >
                    {tarea.titulo}
                  </p>
                  <p className="text-xs opacity-60 italic">
                    {tarea.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            disabled={listaTarea.length === 0}
            onClick={handleClickCompletada}
            className="btn btn-warning btn-sm w-full"
          >
            Marcar como Completadas
          </button>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 border-l-4 border-success pl-2">
            Finalizadas{" "}
            <div className="badge badge-success">{listaCompletadas.length}</div>
          </h2>
          <div className="bg-base-100 rounded-box p-4 shadow-inner min-h-\[200px\]">
            {listaCompletadas.map((tarea) => (
              <div
                key={tarea.id}
                className="flex items-center gap-3 p-3 border-b last:border-0 opacity-70 italic"
              >
                <input
                  type="checkbox"
                  className="checkbox checkbox-error"
                  checked={tarea.eliminar}
                  onChange={() => handleCheckedDelete(tarea.id)}
                />
                <div className="flex-1">
                  <p className="font-semibold line-through text-success">
                    {tarea.titulo}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            disabled={listaCompletadas.length === 0}
            onClick={handleClickEliminar}
            className="btn btn-error btn-sm w-full"
          >
            Eliminar Seleccionadas
          </button>
        </section>
      </div>
    </main>
  );
}

export default Ejercicio9;
