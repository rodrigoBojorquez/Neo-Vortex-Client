import React from 'react'
import Logo from '../../../../assets/Logo.png'
import { FaEdit } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


function Siebar() {
  const thisWeek = {
    title1: "Javascript form",
    title2: "Component React",
    title3: "Tailwind Blur Effect",
    title4: "Ensayo Mayra",
  }
  const latest30Days = {
    title1: "Javascript form",
    title2: "Component React",
    title3: "Tailwind Blur Effect",
    title4: "Ensayo Mayra",
  }
  return (
    <div className='bg-[#363062] h-screen  w-64 flex flex-col justify-between'>

      <section className='p-4'>
        <div className='flex gap-2 mb-10'>
          <img src={Logo} alt="logo" className=' w-12' />
          <div className='flex text-white  items-center gap-2 text-xl '>
            <p>Nuevo Chat</p>
            <button>
              <FaEdit />
            </button>
          </div>
        </div>

        {/* this week */}
        <div>
          <p className=' text-[#a97bc76b] text-sm '> This week </p>
          {Object.keys(thisWeek).map((key, index) => (
            <p className=' text-white text-lg' key={index}>{thisWeek[key]}</p>
          ))}
        </div>

        {/* lastest */}
        <div>
          <p className=' text-[#a97bc76b] text-sm mt-6 '> Latest 30 Days </p>
          {Object.keys(latest30Days).map((key, index) => (
            <p className=' text-white text-lg' key={index}>{latest30Days[key]}</p>
          ))}
        </div>
      </section>

      <section >
        <div className=' border-2 border-[#ffffff] '></div>

        <div className='flex flex-row text-white items-center gap-2 text-2xl'>
          <FaUser />
          <p className=' font-semibold '>User</p>
        </div>
      </section>
    </div>
  )
}

export default Siebar