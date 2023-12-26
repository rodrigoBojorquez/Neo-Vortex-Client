import React from 'react'
import Header from './components/Header'
import Footer from '../../../components/Footer'

import { FaPlus } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa";
import Table from './components/Tabla_Docs';
import doc from '../../../assets/img/doc.png'
import CardsDash from './components/CardsDash';
import CardDocs from './components/CardsDocs';



function UserDash() {
  const data = [
    { id: 1, name: 'Titulo del doc 1', date: '24/12/2023', imagen: doc },
    { id: 2, name: 'Titulo del doc 2', date: '25/12/2023', imagen: doc },
    { id: 3, name: 'Titulo del doc 3', date: '26/12/2023', imagen: doc },
  ];

  return (
    <div>
      <Header />
      <section className='w-full bg-[#4D4C7D] mt-11  flex justify-center items-center'>
        <div className='grid grid-cols-2  lg:grid-cols-4 gap-8 md:gap-12 lg:gap-20 max-w-[1000px] mx-auto my-10'>
        <CardsDash
            initColor={"#342f54"}
            finColor={"#68679e"}
            icon={<FaPlus size={120} color="white" />}
            title={"Nuevo"}
          />
          <CardsDash
            initColor={"#342f54"}
            finColor={"#68679e"}
            icon={<FaUpload size={100} color="white" />}
            title={"Importar"}
          />
          <CardsDash
            initColor={"#342f54"}
            finColor={"#68679e"}
            icon={<FaRobot size={100} color="white" />}
            title={"Asistente"}
          />
          <CardsDash
            initColor={"#342f54"}
            finColor={"#68679e"}
            icon={<FaDropbox size={100} color="white" />}
            title={"Dropbox"}
          />
        </div>
      </section>

      <h1 className=' text-3xl font-semibold my-4 ml-4 '>Recientes</h1>

      <section className='w-full mb-6 flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-20 '>
          {data.map((doc, index) => (
            <CardDocs key={index} name={doc.name} imagen={doc.imagen} />
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