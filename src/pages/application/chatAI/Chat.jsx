import React, { useState } from 'react'
import Sidebar from './components/Sidebar';
import ChatAi from './components/ChatAi';

function Chat() {
  const [showSidebar, setShowSidebar] = useState(false)

  const handleShowSidebar = () => {
    setShowSidebar(true)
  }

  const handleHiddenSidebar = () => {
    setShowSidebar(false)
  }

  return (
    <div className='bg-[#343541] h-screen flex'>

      <div className=' z-40 fixed h-full left-0 w-1/4'>
        <Sidebar
          showSidebar={showSidebar}
          handleHiddenSidebar={handleHiddenSidebar}
          handleShowSidebar={handleShowSidebar}
        />
      </div>

      <div className='z-30 sm:ml-[20%] sm:w-[75%]'>
        <ChatAi
          showSidebar={showSidebar}
          handleHiddenSidebar={handleHiddenSidebar}
          handleShowSidebar={handleShowSidebar}


        />
      </div>




    </div>
  );
}

export default Chat;
