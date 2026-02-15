import { useState } from "react";

function Ejercicio7() {
  const [number, setNumber] = useState(0);
  const [password, setPassword] = useState("");

  const handleClick = () => {
    if (number <= 4 || number >= 14 || isNaN(number)) {
      setPassword("Introduce un número entre 5 y 13");
      return;
    }

    const generatePassword = (length) => {
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
      let result = "";
      for (let i = 0; i < length; i++) {
        result += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return result;
    };

    setPassword(generatePassword(number));
  };

  const copyToClipboard = () => {
    if (password && !password.includes("Introduce")) {
      navigator.clipboard.writeText(password);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 p-10 bg-base-100 rounded-3xl shadow-2xl border border-base-300 max-w-md w-full">
      <div className="text-center">
        <h1 className="text-4xl font-black text-primary mb-2">Seguridad</h1>
        <p className="text-base-content/50 text-sm italic">Ejercicio - 07</p>
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-bold text-lg">Longitud (5-13)</span>
        </label>
        <div className="join w-full">
          <input
            type="number"
            className="input input-bordered input-primary join-item w-full text-xl font-bold"
            placeholder="Ej. 10"
            onChange={(e) => setNumber(parseInt(e.target.value))}
          />
          <button 
            className="btn btn-primary join-item px-6"
            onClick={handleClick}
          >
            Generar
          </button>
        </div>
      </div>

      {password && (
        <div className={`w-full p-6 rounded-2xl shadow-inner text-center break-all transition-all border-2 ${
          password.includes("Introduce") 
          ? "bg-error/10 border-error/20 text-error" 
          : "bg-base-200 border-primary/20 text-base-content"
        }`}>
          <p className={`${password.includes("Introduce") ? "text-sm" : "text-2xl font-mono font-bold tracking-wider text-primary"}`}>
            {password}
          </p>
          
          {!password.includes("Introduce") && (
            <button 
              className="btn btn-ghost btn-xs mt-4 gap-2 opacity-50 hover:opacity-100"
              onClick={copyToClipboard}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
              </svg>
              Copiar al portapapeles
            </button>
          )}
        </div>
      )}

      <div className="flex flex-col gap-2 w-full mt-2">
        <div className="h-2 w-full bg-base-200 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-500 ${number < 8 ? 'bg-warning' : 'bg-success'}`}
            style={{ width: `${(number / 13) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-[10px] uppercase font-bold opacity-40 tracking-widest">
          <span>Débil</span>
          <span>Fuerte</span>
        </div>
      </div>
    </div>
  );
}

export default Ejercicio7;