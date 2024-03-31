'use client'
import Link from 'next/link'
import { useRef } from 'react';
const Buttons = () => {
    const date = new Date();
    const ref1 = useRef<HTMLAnchorElement>(null)
    const ref2 = useRef<HTMLAnchorElement>(null)

    return (
        <div className="buttons w-[100%] pb-4">
            <button
                onClick={() => {
                    ref1.current?.click();
                }}
                className=' bg-blue-400 p-9  hover:bg-blue-800 transition-colors delay-100 duration-500 ease-linear text-center' style={{ borderBottomLeftRadius: "20px", width: "50%" }}>
                <a
                    target='_black'
                    title='Resume'
                    ref={ref1} href={`/files/resume.pdf`}
                    download="Resume-Abdus-Samad"
                    className=''>Resume {date.getFullYear()} </a>
            </button>
            <button
                onClick={() => {
                    ref2.current?.click()
                }}
                className=' bg-green-400 p-9  text-center hover:bg-green-800 transition-colors delay-100 duration-500 ease-linear' style={{ borderBottomRightRadius: "20px", width: "50%" }}>
                <Link rel='external' title='Lets Connect' target='_blank' ref={ref2} href={'https://wa.me/918010512106'} >Get In Touch</Link>
            </button>
        </div>
    )
}

export default Buttons