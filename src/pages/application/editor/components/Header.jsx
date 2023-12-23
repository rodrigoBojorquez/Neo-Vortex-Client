import React from 'react'
import { Link } from 'react-router-dom';

// ASSETS
import { PiExport } from "react-icons/pi";
import { LiaSaveSolid } from "react-icons/lia";
import { RiHome6Line } from "react-icons/ri";


function Header({ headerHeight }) {

    const username = "Rodrigo"

    const iconSize = "2rem"
    const iconStyles = {
        strokeWeight: "1.2"
    }

    return (
        <header ref={headerHeight} className='bg-[#363062] px-10 py-3 flex justify-between items-center'>
            <div className='flex items-center gap-x-3 text-white'>
                <button type='button'>
                    <PiExport size={iconSize} color='white' style={iconStyles}/>
                </button>
                <button type='button'>
                    <LiaSaveSolid size={iconSize} color='white' style={iconStyles}/>
                </button>

                <p className='text-lg font-medium ml-7'>Nombre del documento</p>
            </div>

            <div>
                <Link to={`/me/${username}`}>
                    <RiHome6Line size={iconSize} color='white' style={iconStyles} />
                </Link>
            </div>
        </header>
    )
}

export default Header