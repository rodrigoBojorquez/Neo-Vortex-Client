import { useEffect, useState } from 'react'

// ASSISTANT
import { AiOutlineReload } from "react-icons/ai";

function Assistant() {

    const [height, setHeight] = useState(42)
    const [chatStyle, setChatStyle] = useState({
        height: `${height}px`,
        // overflowY: "hidden"
    })

    const handleChange = (e) => {
        const currentHeight = e.target.scrollHeight;
        setHeight(Math.max(42, currentHeight));
    };
    

    const handleKeyDown = e => {
        if (e.key === "Enter" && e.shiftKey) {
            e.preventDefault()
            const newHeight = height + 26
            setHeight(newHeight)
        }
    }

    useEffect(() => {
        setChatStyle({ ...chatStyle, height: `${height}px` })
    }, [height])

    return (
        <article className='bg-white'>
            {/* HEAD */}
            <section className='flex justify-center items-center relative bg-[#4D4C7D] bg-opacity-30 py-[10px]'>
                <h3 className='text-center text-[#363062] text-xl font-medium'>Asistente</h3>
                <button className='absolute right-5'>
                    <AiOutlineReload size={"1.5rem"} stroke='2' color='#F99417' />
                </button>
            </section>

            {/* CHAT */}
            <section className=''>
                chat
            </section>

            {/* PROMPTS */}
            <section className='flex bg-[#4d4c7d] bg-opacity-30 p-2 items-center'>
                <textarea
                    className='bg-white resize-none max-h-[200px] w-full rounded-md outline-none p-2 overflow-auto'
                    style={chatStyle}
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                    minrows={3}
                    maxrows={10}
                />
            </section>
        </article>
    )
}

export default Assistant