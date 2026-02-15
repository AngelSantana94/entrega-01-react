const Card = ({ title, desc, onClick }) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-base-300 hover:border-primary transition-all duration-300">
      <div className="card-body items-start text-left gap-4">
        {/* Título alineado a la izquierda */}
        <h2 className="card-title text-xl font-bold text-primary">
          {title}
        </h2>
        
        {/* Descripción sin márgenes extraños */}
        <p className="text-base-content/80 text-sm leading-relaxed">
          {desc}
        </p>
        
        {/* Contenedor del botón alineado al inicio */}
        <div className="card-actions justify-start w-full mt-2">
          <button 
            className="btn btn-primary btn-sm md:btn-md shadow-md hover:scale-105"
            onClick={onClick}
          >
            Ver Ejercicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
