import React from 'react'

function CardDocs({ name, imagen }) {
  return (
    <div>
      <div className='w-[350px] h-[210px] border border-black rounded-lg mt-4 bg-[#363062] '
              style={{
                backgroundImage: `url(${imagen})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <div className='w-full h-[50px] rounded-b-lg bg-black text-center align-end '>
                <h3 className='text-white mt-3 font-semibold text-xl'>{name}</h3>
              </div>
            </div>
    </div>
  )
}

export default CardDocs