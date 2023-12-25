import React from 'react';
import Siebar from './components/Siebar';
import ChatAi from './components/ChatAi';

function Chat() {
  return (
    <div className='bg-[#51508c] h-screen flex'>

      <div className='fixed h-full left-0 w-1/4'>
        <Siebar />
      </div>

      <div className='ml-[20%] w-[75%]'>
        <ChatAi />
      </div>




    </div>
  );
}

export default Chat;
