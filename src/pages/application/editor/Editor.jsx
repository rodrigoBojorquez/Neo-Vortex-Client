import React from 'react'

// COMPONENTS
import Header from './components/Header'
import Assistant from './components/Assistant'
import Doc from './components/Doc'

function Editor() {
  return (
    <main className='bg-[#f5f5f5] min-h-screen'>
      <Header />

      <div className='flex px-5 my-7 gap-x-10'>
        <div className='w-[35%]'>
          <Assistant />
        </div>
        <div className='w-[60%]'>
          <Doc />
        </div>
      </div>
    </main>
  )
}

export default Editor