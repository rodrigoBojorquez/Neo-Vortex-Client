import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa";

export default function NavbarUsers() {
  return (
    <div className=' bg-[#363062] p-4'>
      <nav className='flex justify-between font-bold   text-white text-2xl'>
        <div className='flex gap-5 items-center'>
          <RxHamburgerMenu/>
          <p>Vortex</p>
        </div>
        <div className='flex items-center gap-2'>
          Bienvenido Usuario!
          <FaUser/>
        </div>
      </nav>

    </div>
  )
}
