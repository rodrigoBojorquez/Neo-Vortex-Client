import React from 'react'
import { Link } from 'react-router-dom'

function SideBar({ setOpenSideBar }) {

  // IN THE FUTURE IMPLEMENT: haveChild
  const pageLinks = [
    { name: "Home", url: "/" },
    { name: "Sobre nosotros", url: "/about" },
    { name: "Contacto", url: "/contact" }
  ]

  return (
    <div className='h-screen bg-black bg-opacity-25 inset-0 fixed flex justify-end z-20'>
        <nav className='w-[400px] bg-[#363062] py-7 px-5 flex flex-col justify-between'>
            <div>
            <div className='flex justify-end'>
              <button 
                  type='buttom' 
                  className='text-white mb-12 hover border-b-[1.5px] border-transparent hover:border-white'
                  onClick={e => setOpenSideBar(false)}
              >
                  Cerrar
              </button>
            </div>
            <ul>
                {pageLinks.map((page, index) => (
                    <li key={index} className="py-2 border-b-[1.5px] border-white text-white">
                      <Link to={page.url} className="flex">{page.name}</Link>
                    </li>
                ))}
            </ul>
            </div>

            {/* AUTH BUTTONS */}
            <div className='flex flex-col w-full text-white'>
                  <p className='text-end text-lg'>¡Únete!</p>

                  <Link to={"/login"} className='py-2 border-b-[1.5px] border-white'>
                    Iniciar Sesión
                  </Link>
                  <Link to={"/signup"} className='py-2 border-b-[1.5px] border-white'>
                    Empezar
                  </Link>
            </div>
        </nav>
    </div>
  )
}

export default SideBar