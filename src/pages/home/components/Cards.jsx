import React from 'react'

function Cards({ initColor, finColor, icon, title, text }) {

  return (
    <div className='bg-white rounded-[20px] border-[5px] border-white shadow-lg transform duration-700 hover:scale-[1.01] overflow-hidden'>
        <div 
            className={`w-full bg-gradient-to-bl h-[220px] grid place-content-center`}
            style={{
                borderRadius: "100% 0% 100% 0% / 0% 50% 50% 100%",
                background: `linear-gradient(to bottom left, ${initColor}, ${finColor})`
            }}
        >
        {icon}
        </div>

        <div className='text-[#616161] flex flex-col items-center w-[60%] mx-auto'>
            <h1 className='text-center uppercase text-[16px] font-semibold mt-3 mb-5'>{title}</h1>
            <p className='text-center mb-5'>{text}</p>
        </div>
    </div>
  )
}

export default Cards