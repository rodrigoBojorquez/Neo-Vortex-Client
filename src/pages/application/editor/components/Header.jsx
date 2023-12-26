import React from 'react'
import { Link } from 'react-router-dom';

// ASSETS
import { PiExportLight } from "react-icons/pi";
import { PiFloppyDiskLight } from "react-icons/pi";
import { PiHouseLight } from "react-icons/pi";

function Header({ headerHeight }) {

    const username = "Rodrigo"

    const iconSize = "2rem"
    const iconStyles = {
        strokeWeight: "1.2rem",
    }

    return (
        <header ref={headerHeight} className='bg-[#363062] px-10 py-3 flex justify-between items-center'>
            <div className='flex items-center gap-x-3 text-white'>
                <button type='button'>
                    <PiExportLight size={iconSize} style={iconStyles} />
                </button>
                <button type='button'>
                    <PiFloppyDiskLight size={iconSize} color='white'/>
                </button>

                <p className='text-lg font-normal ml-5'>Nombre del documento</p>
            </div>

            <div>
                <Link to={`/me/${username}`}>
                    <PiHouseLight size={iconSize} color='white' style={iconStyles} />
                </Link>
            </div>
        </header>
    )
}

export default Header