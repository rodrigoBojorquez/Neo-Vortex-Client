import React from 'react';
import { FaUser } from 'react-icons/fa';
import Logo from '../../../../assets/Logo.png';

function ChatAi() {
    return (
        <>
            <h1 className='text-white font-semibold text-2xl mb-8 '>Vortex Ai</h1>
            <section className='flex flex-col'>

                <div className='flex flex-col text-white ml-32 mb-7 overflow-auto'>
                    <h2 className='flex items-center gap-2 font-semibold text-lg'>
                        <FaUser /> you
                    </h2>
                    <p>
                        necesito que la sidebar siempre este del lado izquierdo sin importar el scroll y el demas contenido se mantenga al lado con tailwind
                        import React from 'react';
                        import Siebar from './components/Siebar';
                        import ChatAi from './components/ChatAi';
                    </p>
                </div>
                <div className='flex flex-col text-white ml-32 mb-7 overflow-auto'>
                    <h2 className='flex items-center gap-2 font-semibold text-lg'>
                        <img src={Logo} alt='logo' className='w-7' /> VortexAi
                    </h2>
                    <p>

                        Para lograr que el input se mantenga en la parte inferior de la pantalla, puedes utilizar la propiedad CSS position: fixed para fijar el elemento en la posición deseada. Además, puedes ajustar otras propiedades como bottom y left para definir la posición exacta del input. Aquí hay una modificación de tu componente para lograr eso:


                    </p>
                </div>
                <div className='flex flex-col text-white ml-32 mb-7 overflow-auto'>
                    <h2 className='flex items-center gap-2 font-semibold text-lg'>
                        <FaUser /> you
                    </h2>
                    <p>
                        necesito que la sidebar siempre este del lado izquierdo sin importar el scroll y el demas contenido se mantenga al lado con tailwind
                        import React from 'react';
                        import Siebar from './components/Siebar';
                        import ChatAi from './components/ChatAi';
                    </p>
                </div>
                <div className='flex flex-col text-white ml-32 mb-7 overflow-auto'>
                    <h2 className='flex items-center gap-2 font-semibold text-lg'>
                        <img src={Logo} alt='logo' className='w-7' /> VortexAi
                    </h2>
                    <p>

                        Para lograr que el input se mantenga en la parte inferior de la pantalla, puedes utilizar la propiedad CSS position: fixed para fijar el elemento en la posición deseada. Además, puedes ajustar otras propiedades como bottom y left para definir la posición exacta del input. Aquí hay una modificación de tu componente para lograr eso:


                    </p>
                </div>



                <div className='fixed bottom-0 w-full bg-[#51508c]'>
                    <input
                        type='text'
                        placeholder='Escribe algo a Vortex'
                        className='w-[80%] bg-[#fff0] p-2 border-2 border-gray rounded-lg'
                    />
                </div>
            </section>
        </>
    );
}

export default ChatAi;
