import React from "react";
import { Link } from "react-router-dom";

// ASSETS
import { FaGooglePlusG } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { AiOutlineDropbox } from "react-icons/ai";

function Signup() {
  const handleSignup = (e) => {
    e.preventDefault();
    console.log("crear cuenta");
  };

  return (
    <main className="h-screen max-h-screen flex justify-center items-center bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] px-10">
      <article className="grid grid-cols-1 md:grid-cols-2 shadow-[0_5px_15px_rgba(0,0,0,0.35)] bg-white rounded-[30px] overflow-hidden h-[470px] w-[750px]">
        <section className="hidden md:flex rounded-[0_150px_100px_0] bg-gradient-to-r from-[#5c6bc0] from-[10%] to-[#512da8] items-center px-7 text-['Montserrat',serif]">
          <div className="flex flex-col items-center">
            <h3 className="text-white text-3xl font-bold mb-4">
              ¡Bienvenido de nuevo!
            </h3>
            <p className="text-white text-sm text-center mb-5 font-normal">
              Ingresa tus credenciales para acceder a tu cuenta
            </p>

            <Link
              className="bg-transparent py-2 px-11 rounded-md border-[1.5px] border-white text-[13px] uppercase font-medium text-white"
              to="/login"
            >
              Iniciar Sesión
            </Link>
          </div>
        </section>
        <form
          onSubmit={handleSignup}
          className="px-10 py-7 flex flex-col justify-center"
        >
          <h2 className="text-3xl text-center font-bold font-['Monserrat',sans-serif] mb-4">
            Crear cuenta
          </h2>

          {/* 3RD PARTY LOGINS */}
          <section className="flex gap-x-2 justify-center mb-4">
            <button
              type="button"
              className="border-[1px] border-[#ccc] rounded-lg p-2 flex items-center text-[#444444] group hover:bg-[#444444]"
            >
              <FaGooglePlusG
                size={"1rem"}
                className="text-[#444444] group-hover:text-white"
              />
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
            o registrate con nosotros
          </p>

          <div className="flex flex-col">
            <input type="text" className="input-auth" placeholder="Nombre" />
          </div>
          <div className="flex flex-col">
            <input type="text" className="input-auth" placeholder="Apellidos" />
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              className="input-auth"
              placeholder="Email"
              autoComplete="off"
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              className="input-auth"
              placeholder="Contraseña"
              autoComplete="off"
            />
          </div>
          <div className="text-[#525252] flex md:hidden gap-x-1 mb-4 justify-center">
            <p className="text-sm">¿Ya tienes cuenta?</p>
            <Link to={"/login"} className="border-b-[1.5px] text-sm pb-0 border-transparent hover:border-[#525252]">
              Inicia Sesión
            </Link>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#512da8] rounded-md text-white py-2 px-11 text-[13px] uppercase font-medium"
            >
              Crear
            </button>
          </div>
        </form>
      </article>
    </main>
  );
}

export default Signup;
