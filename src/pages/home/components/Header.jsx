import React from "react";
import { Link } from "react-router-dom";

// ASSETS
import { MdArrowOutward } from "react-icons/md";

function Header({ headerHeight }) {
  return (
    <header ref={headerHeight} className="px-10 bg-[#363062] flex items-center justify-between text-white py-3">
      <div className="flex items-center gap-x-24">
        <Link to={"/"} className="text-2xl font-semibold font-sans">Neo Vortex</Link>

        <ul className="flex items-center gap-x-7 text-lg">
          <li className="flex gap-1 items-center">
            <Link to={"/about"} className="hover:border-b-[1.5px]">
              Sobre nosotros
            </Link>
          </li>
          <li className="hover:border-b-[1.5px]">
            <Link to={"/contact"}>Contacto</Link>
          </li>
          {/* <li><Link to={"/about"}></Link></li> */}
        </ul>
      </div>

      <div className="flex items-center gap-x-5 text-lg">
        <div className="flex items-center gap-x-1">
          <Link to={"/login"} className="hover:border-b-[1.5px] border-b-white">
            Iniciar Sesión
          </Link>
          <MdArrowOutward />
        </div>

        <Link to={"/signup"} className="bg-[#4D4C7D] py-1 px-4 rounded-md flex items-center gap-x-1">
          Empezar
          <MdArrowOutward />
        </Link>
      </div>
    </header>
  );
}

export default Header;
