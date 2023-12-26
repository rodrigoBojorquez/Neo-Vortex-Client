import React from "react";
import { Link } from "react-router-dom";

// ASSETS
import { FaGooglePlusG } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { AiOutlineDropbox } from "react-icons/ai";

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("log in");
  };

  return (
    <main className="h-screen max-h-screen flex justify-center items-center bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff]">
      <article className="grid grid-cols-2 shadow-[0_5px_15px_rgba(0,0,0,0.35)] bg-white rounded-[30px] overflow-hidden h-[450px] w-[750px]">
        <form
          onSubmit={handleLogin}
          className="px-10 py-7 flex flex-col justify-center"
        >
          <h2 className="text-3xl text-center font-bold font-['Monserrat',sans-serif] mb-4">
            Iniciar Sesión
          </h2>

          {/* 3RD PARTY LOGINS */}
          <section className="flex gap-x-2 justify-center mb-4">
            <button
              type="button"
              className="border-[1px] border-[#ccc] rounded-lg p-2 flex items-center text-[#444444] group hover:bg-[#444444]"
            >
              <FaGooglePlusG size={"1rem"} className="text-[#444444] group-hover:text-white" />
            </button>
            <button
              type="button"
              className="border border-[#ccc] rounded-lg p-2 flex items-center group hover:bg-[#444444]"
            >
              <IoLogoGithub className="text-[#444444] group-hover:text-white" />
            </button>
            <button
              type="button"
              className="border border-[#ccc] rounded-lg p-2 flex items-center group hover:bg-[#444444]"
            >
              <AiOutlineDropbox className="text-[#444444] group-hover:text-white" />
            </button>
          </section>

          <p className="text-sm text-center text-[#525252] mb-1">
            o inicia con tu correo y contraseña
          </p>

          <div className="flex flex-col gap-3">
            <input type="text" className="input-auth" placeholder="Email" autoComplete="off" />
          </div>
          <div className="input-container">
            <input
              type="password"
              className="input-auth"
              placeholder="Contraseña"
              autoComplete="off"
            />
          </div>

          <Link className="text-sm text-center text-[#525252] mb-4">
            ¿Olvidaste tu contraseña?
          </Link>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#512da8] rounded-md text-white py-2 px-11 text-[13px] uppercase font-medium"
            >
              Iniciar
            </button>
          </div>
        </form>
        <section className=" rounded-[150px_0_0_100px] bg-gradient-to-r from-[#5c6bc0] from-[5%] to-[#512da8] flex items-center px-7 text-['Montserrat',serif]">
          <div className="flex flex-col items-center">
            <h3 className="text-white text-3xl font-bold mb-4">¡Hola, Bienvenido!</h3>
            <p className="text-white text-sm text-center mb-5 font-normal">Registrate de forma gratuita con tus datos para tener acceso a todas las funcionalidades</p>

            <Link 
              className="bg-transparent py-2 px-11 rounded-md border-[1.5px] border-white text-[13px] uppercase font-medium text-white"
              to="/signup"
            >
              Crea tu cuenta
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}

export default Login;
