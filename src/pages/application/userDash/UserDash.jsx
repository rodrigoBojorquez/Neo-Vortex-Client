import React from 'react'
import Header from './components/Header'
import Footer from '../../../components/Footer'

import { FaPlus } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa";
import Table from './components/Tabla_Docs';


function UserDash() {
  const data = [
    { id: 1, name: 'Juan Pérez', age: 25, email: 'juan@example.com' },
    // Agrega más datos según sea necesario
  ];
  return (
    <div>
      <Header />
      <section className='w-full bg-[#4D4C7D] mt-11 h-[300px] flex justify-center items-center'>
        <div className='grid grid-cols-4 gap-20 max-w-[1000px] mx-auto'>
          <div className='w-[150px] h-[220px] rounded-lg mt-4 bg-[#363062] flex flex-col items-center'>
            <FaPlus size={120} color="white" className='rounded-md text-center pb-2 pt-10' />
            <h2 className='text-2xl font-semibold text-white text-center'>Nuevo</h2>
          </div>
          <div className='w-[150px] h-[220px] rounded-lg mt-4 bg-[#363062] flex flex-col items-center'>
            <FaUpload size={120} color="white" className='rounded-md text-center pb-2 pt-10' />
            <h2 className='text-2xl font-semibold text-white text-center'>Importar</h2>
          </div>
          <div className='w-[150px] h-[220px] rounded-lg mt-4 bg-[#363062] flex flex-col items-center'>
            <FaRobot size={120} color="white" className='rounded-md text-center pb-2 pt-10' />
            <h2 className='text-2xl font-semibold text-white text-center'>Asistente</h2>
          </div>
          <div className='w-[150px] h-[220px] rounded-lg mt-4 bg-[#363062] flex flex-col items-center'>
            <FaDropbox size={120} color="white" className='rounded-md text-center pb-2 pt-10' />
            <h2 className='text-2xl font-semibold text-white text-center'>Dropbox</h2>
          </div>
        </div>
      </section>

      <h1 className=' text-3xl font-semibold my-4 ml-4 '>Recientes</h1>

      <section className='w-full h-[230px] mb-4 flex justify-center items-center'>
        <div className='grid grid-cols-3 gap-20'>
          <div className='w-[350px] h-[210px] rounded-lg mt-4 bg-[#363062] flex flex-col items-center'>
            <div className='w-full h-[50px] rounded-lg bg-black text-center align-baseline '>
              <h3 className='text-white mt-3 text-xl'>Titulo del doc</h3>
            </div>
          </div>
          <div className='w-[350px] h-[210px] rounded-lg mt-4 bg-[#363062] flex flex-col items-center'>
            <div className='w-full h-[50px] rounded-lg bg-black text-center align-baseline '>
              <h3 className='text-white mt-3 text-xl'>Titulo del doc</h3>
            </div>
          </div>
          <div className='w-[350px] h-[210px] rounded-lg mt-4 bg-[#363062] flex flex-col items-center'>
            <div className='w-full h-[50px] rounded-lg bg-black text-center align-baseline '>
              <h3 className='text-white mt-3 text-xl'>Titulo del doc</h3>
            </div>
          </div>
        </div>
      </section>

      <h1 className=' text-3xl font-semibold my-4 ml-4 '>Documentos</h1>

      <Table  data={data} />

      <Footer />
    </div>
  )
}

export default UserDash