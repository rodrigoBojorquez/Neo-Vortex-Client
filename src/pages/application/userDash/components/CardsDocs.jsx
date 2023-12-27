import React from 'react'

function CardDocs({ name, imagen }) {
  return (
      <div className='h-[150px] md:h-[210px] border duration-700 cursor-pointer border-black rounded-lg mt-4 bg-[#363062] overflow-hidden'
              style={{
                backgroundImage: `url(${imagen})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <div className='w-full h-[50px] rounded-b-lg glass-effect text-center align-end '>
                <h3 className='text-[#424242] mt-3 font-semibold text-lg'>{name}</h3>
              </div>
            </div>
  )
}

export default CardDocs