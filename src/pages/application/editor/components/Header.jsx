import React from 'react'

// ASSETS
import { PiExport } from "react-icons/pi";
import { LiaSaveSolid } from "react-icons/lia";
import { RiHome6Line } from "react-icons/ri";


function Header() {

    const iconSize = "2rem"
    const iconStyles = {
        strokeWeight: "1.2"
    }

    return (
        <header className='bg-[#363062] px-10 py-3 flex justify-between items-center'>
            <div className='flex items-center gap-x-3 text-white'>
                <PiExport size={iconSize} color='white' style={iconStyles}/>
                <LiaSaveSolid size={iconSize} color='white' style={iconStyles}/>

                <p className='text-lg font-medium ml-7'>Nombre del documento</p>
            </div>

            <div>
                <RiHome6Line size={iconSize} color='white' style={iconStyles} />
            </div>
        </header>
    )
}

export default Header