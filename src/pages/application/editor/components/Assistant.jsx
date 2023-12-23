import { useEffect, useState, useRef } from 'react'

// COMPONENTS
import Welcome from './Welcome';

// ASSETS
import { AiOutlineReload } from "react-icons/ai";

function Assistant() {

    const chatHistory = []
    const [prompt, setPrompt] = useState("")

    // REFERENCES
    const inputHeight = useRef(null)
    const head = useRef(null)
    const assistant = useRef(null)
    const inputContainer = useRef(null)
    const chatHeight = useRef(null)

    // CHANGE THE HEIGHT
    useEffect(() => {
        inputHeight.current.style.height = "42px"
        const currentH = inputHeight.current.scrollHeight
        inputHeight.current.style.height = `${currentH}px`
    }, [prompt])

    // DEFAULT HEIGHT
    useEffect(() => {
        inputHeight.current.style.height = "42px"
    }, [])

    return (
        <article ref={assistant} className='bg-white h-full flex flex-col justify-between'>
            {/* HEAD */}
            <section ref={head} className='flex justify-center items-center h-[48px] relative bg-[#4D4C7D] bg-opacity-30 py-[10px]'>
                <h3 className='text-center text-[#363062] text-xl font-medium'>Asistente</h3>
                <button className='absolute right-5'>
                    <AiOutlineReload size={"1.5rem"} stroke='2' color='#F99417' />
                </button>
            </section>

            {/* CHAT */}
            <section ref={chatHeight} className='px-10 h-full w-full flex justify-center items-center'>
                {chatHistory.length === 0 && (
                        <Welcome/>
                )}
            </section>

            {/* PROMPTS */}
            <section className='flex bg-[#4d4c7d] bg-opacity-30 p-2 items-center' ref={inputContainer} >
                <textarea
                    className='bg-white resize-none h-[42px] max-h-[150px] w-full rounded-md outline-none p-2 vortex-scroll'
                    id='chat'
                    ref={inputHeight}
                    onChange={e => setPrompt(e.target.value)}
                />
            </section>
        </article>
    )
}

export default Assistant