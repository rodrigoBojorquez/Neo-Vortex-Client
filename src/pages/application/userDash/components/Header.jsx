import React from "react";
import { Link } from "react-router-dom";

import { FaUser } from "react-icons/fa";

function Header({ headerHeight, setOpenSideBar }) {
  return (
    <header ref={headerHeight} className="px-10 bg-[#363062] flex items-center justify-between text-white py-3">
      <div className="flex items-center gap-x-24">
        <Link to={"/"} className="text-2xl font-semibold font-sans">Neo Vortex</Link>
      </div>

      <div className="hidden lg:flex items-center gap-x-5 text-lg">
        <div className="flex items-center gap-x-1">
          <Link to={"/login"} className=" mr-2">
            ¡Bienvenido, usuario!
          </Link>
          <FaUser />
        </div>
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
