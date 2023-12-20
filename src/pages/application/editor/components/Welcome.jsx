import React from 'react'

function Welcome() {


  return (
    <article className='text-center w-auto'>
        <section>
        <h3 className='text-5xl px-5 text-[#363062] mx-auto py-1 w-[140px] border-b-[3px] border-[#363062]' style={{fontFamily: "'Farsan', cursive"}}>Vortex</h3>
        <p className='mt-3 text-lg text-[#363062]'>¿Qué necesitas redactar?</p>
        <p className='text-[#363062] text-sm'>Estoy aqui para ayudarte</p>
        </section>

        <section className='flex flex-col'>
            <p className='text-lg text-[#363062] text-start'>Sugerencia de hoy:</p>
            <button 
                type='button'
                className='bg-[#4D4C7D] bg-opacity-30 p-2 rounded-md text-sm'
            >
                Dime las 3 técnicas de estudio más efectivas
            </button>
        </section>
    </article>
  )
}

export default Welcome