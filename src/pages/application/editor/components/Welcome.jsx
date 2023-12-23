import React from 'react'

function Welcome() {


  return (
    <article className='text-center w-full'>
      <section>
        <div className='px-10'>
          <h3 className='text-5xl px-5 text-[#363062] mx-auto py-[6px]' style={{ fontFamily: "'Farsan', cursive" }}>Vortex</h3>
          <hr className='border-[1.5px] border-[#363062] w-[200px] mx-auto' />
        </div>
        <p className='mt-5 text-lg text-[#363062] mb-1'>¿Qué necesitas redactar?</p>
        <p className='text-[#363062] text-sm mb-10'>Estoy aqui para ayudarte</p>
      </section>

      <section className='flex flex-col w-full'>
        <p className='text-lg mb-1 text-[#363062] text-start'>Sugerencia de hoy:</p>
        <button
          type='button'
          className='bg-[#4D4C7D] bg-opacity-30 py-2 px-5 rounded-md text-sm text-left'
        >
          Dime las 3 técnicas de estudio más efectivas
        </button>
      </section>
    </article>
  )
}

export default Welcome