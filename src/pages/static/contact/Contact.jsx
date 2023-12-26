import React, { useState } from 'react'

// COMPONENTS
import Header from '../../home/components/Header'
import SideBar from '../../../components/SideBar'
import Contactform from './components/Contactform'
import Footer from "../../../components/Footer"

// ASSETS
import ContactImg from "../../../assets/img/contact.jpg"

function Contact() {

  const [openSideBar, setOpenSideBar] = useState(false)

  return (
    <main className='bg-white min-h-screen'>
      <Header
        setOpenSideBar={setOpenSideBar}
      />

      {/* THE IMAGE HERO */}
      <article className='h-[400px] relative flex items-center justify-center'>
        <section className='z-10 relative flex flex-col items-center text-[#f5f5f5]'>
          <h2 className='text-5xl font-medium text-center'>Nos encantaría escucharte</h2>
          <p className='mt-2 w-[65%] text-center font-medium'>Si tienes alguna duda sobre características, funcionamiento, precios, o necesitas algo más, nuestro equipo está listo para responder todas tus preguntas</p>
        </section>
        <section className='absolute z-0 inset-0'>
          <img
            src={ContactImg}
            alt="Contact image"
            className='object-cover h-[400px] min-w-full object-center brightness-50'
          />
        </section>
      </article>

      <article className='flex justify-center my-10 px-5'>
        <Contactform/>
      </article>

      <Footer />

      {openSideBar && (
        <SideBar
          setOpenSideBar={setOpenSideBar}
        />
      )}
    </main>
  )
}

export default Contact