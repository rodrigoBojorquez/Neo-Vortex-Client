import React from 'react'
import Header from './components/Header'
import Footer from '../../../components/Footer'

import { FaPlus } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa";
import Table from './components/Tabla_Docs';
import doc from '../../../assets/img/doc.png'



function UserDash() {
  const data = [
    { id: 1, name: 'Titulo del doc 1', date: '26/12/2023', imagen: doc},
    { id: 2, name: 'Titulo del doc 2', date: '26/12/2023', imagen: doc},
    { id: 3, name: 'Titulo del doc 3', date: '26/12/2023', imagen: doc},
  ];

  return (
    <div>
      <Header />
      <section className='w-full bg-[#4D4C7D] mt-11  flex justify-center items-center'>
        <div className='grid grid-cols-2  lg:grid-cols-4 gap-8 md:gap-12 lg:gap-20 max-w-[1000px] mx-auto my-10'>
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

      <section className='w-full mb-6 flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-20'>
          {data.map((doc, index) => (
            <div
              key={index}
              className='w-[350px] h-[210px] border border-black rounded-lg mt-4 bg-[#363062] glass-effect'
              style={{
                backgroundImage: `url(${doc.imagen})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'flex-end',
              }}
            >
              <div className='w-full h-[50px] rounded-b-lg bg-black text-center align-end '>
                <h3 className='text-white mt-3 font-semibold text-xl'>{doc.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <h1 className=' text-3xl font-semibold mt-6 mb-4 ml-4 '>Documentos</h1>

      <Table data={data} />

      <Footer />
    </div >
  )
}

export default UserDash