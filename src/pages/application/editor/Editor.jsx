import { useState, useRef, useEffect } from 'react'

// COMPONENTS
import Header from './components/Header'
import Assistant from './components/Assistant'
import Doc from './components/Doc'

function Editor() {
  const [heightClass, setHeightClass] = useState({})


  // GET WINDOW DIMENTIONS
  const windowHeight = window.innerHeight
  const headerHeight = useRef(null)

  useEffect(() => {
    if(headerHeight.current) {
      const heigth = headerHeight.current.clientHeight
      const toSet = windowHeight -  heigth
      setHeightClass({height: `${toSet}px`})
    }
  }, [windowHeight])

  return (
    <main className='bg-[#f5f5f5] min-h-screen'>
      <Header headerHeight={headerHeight} />

      <div className='flex px-5 py-7 gap-x-10' style={heightClass}>
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