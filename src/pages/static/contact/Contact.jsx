import React, { useState } from 'react'

// COMPONENTS
import Header from '../../home/components/Header'
import SideBar from '../../../components/SideBar'
import Contactform from './components/Contactform'

// ASSETS
import ContactImg from "../../../assets/img/home-big.jpg"

function Contact() {

  const [openSideBar, setOpenSideBar] = useState(false)

  return (
    <main className='bg-[#f5f5f5] min-h-screen'>
      <Header
        setOpenSideBar={setOpenSideBar}
      />

      {/* THE IMAGE HERO */}
      <article className='h-[300px] relative flex items-center justify-center'>
        <section className='z-10 relative flex flex-col items-center text-[#f5f5f5]'>
          <h2 className='text-4xl font-medium'>Nos encantaría escucharte</h2>
          <p className='mt-2 w-[65%] text-center font-medium'>Si tienes alguna duda sobre características, funcionamiento, precios, o necesitas algo más, nuestro equipo está listo para responder todas tus preguntas</p>
        </section>
        <section className='absolute z-0 inset-0'>
          <img
            src={ContactImg}
            alt="Contact image"
            className='object-cover h-[300px] min-w-full object-bottom'
          />
        </section>
      </article>

      <article className='flex justify-center mt-10'>
        <Contactform/>
      </article>

      {openSideBar && (
        <SideBar
          setOpenSideBar={setOpenSideBar}
        />
      )}
    </main>
  )
}

export default Contact