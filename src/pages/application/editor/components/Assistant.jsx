import { useEffect, useState, useRef } from 'react'

// COMPONENTS
import Welcome from './Welcome';

// ASSETS
import { AiOutlineReload } from "react-icons/ai";

function Assistant() {
    const [ fieldHeight, setFieldHeight ] = useState(null)

    const chatHistory = []
    const inputHeight = useRef(null)
    const head = useRef(null)
    const assistant = useRef(null)

    useEffect(() => {
        const chatInput = document.getElementById("chat")
        chatInput.addEventListener('keyup', e => {
            chatInput.style.height = "42px"
            let height = e.target.scrollHeight
            chatInput.style.height = `${height}px`
        })
    }, [])

    useEffect(() => {
        if (inputHeight.current && assistant.current && head.current) {
            const inputH = inputHeight.current.clientHeight
            const assistantH = assistant.current.clientHeight
            const headH = head.current.clientHeight
            const toSet = assistantH - inputH - headH
            
            setFieldHeight(`${toSet}px`)
        }
    }, [])

    return (
        <article ref={assistant} className='bg-white h-full '>
            {/* HEAD */}
            <section ref={head} className='flex justify-center items-center relative bg-[#4D4C7D] bg-opacity-30 py-[10px]'>
                <h3 className='text-center text-[#363062] text-xl font-medium'>Asistente</h3>
                <button className='absolute right-5'>
                    <AiOutlineReload size={"1.5rem"} stroke='2' color='#F99417' />
                </button>
            </section>

            {/* CHAT */}
            <section className='px-5' style={{height: fieldHeight}}>
                {chatHistory.length === 0 && (
                    <Welcome/>
                )}
            </section>

            {/* PROMPTS */}
            <section className='flex bg-[#4d4c7d] bg-opacity-30 p-2 items-center' ref={inputHeight}>
                <textarea
                    className='bg-white resize-none h-[42px] max-h-[212px] w-full rounded-md outline-none p-2 vortex-scroll'
                    id='chat'
                />
            </section>
        </article>
    )
}

export default Assistant