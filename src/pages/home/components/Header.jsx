import React from "react";
import { Link } from "react-router-dom";

// ASSETS
import { MdArrowOutward } from "react-icons/md";

function Header({ headerHeight, setOpenSideBar }) {
  return (
    <header ref={headerHeight} className="px-10 bg-[#363062] flex items-center justify-between text-white py-3">
      <div className="flex items-center gap-x-24">
        <Link to={"/"} className="text-2xl font-semibold font-sans">Neo Vortex</Link>

        <ul className="hidden lg:flex items-center gap-x-7 text-lg">
          <li className="flex gap-1 items-center">
            <Link to={"/about"} className="border-b-[1.5px] border-transparent hover:border-white">
              Sobre nosotros
            </Link>
          </li>
          <li className="border-b-[1.5px] border-transparent hover:border-white">
            <Link to={"/contact"}>Contacto</Link>
          </li>
          {/* <li><Link to={"/about"}></Link></li> */}
        </ul>
      </div>

      <div className="hidden lg:flex items-center gap-x-5 text-lg">
        <div className="flex items-center gap-x-1">
          <Link to={"/login"} className="border-b-[1.5px] border-transparent hover:border-b-white">
            Iniciar Sesión
          </Link>
          <MdArrowOutward />
        </div>

        <Link to={"/signup"} className="bg-[#4D4C7D] py-1 px-4 rounded-md flex items-center gap-x-1">
          Empezar
          <MdArrowOutward />
        </Link>
      </div>

      {/* THE SIDEBAR BUTTON */}
      <button 
        type="button" 
        className="block lg:hidden border-b-[1.5px] border-transparent hover:border-white"
        onClick={e => setOpenSideBar(true)}
      >
        Menú
      </button>
    </header>
  );
}

export default Header;
