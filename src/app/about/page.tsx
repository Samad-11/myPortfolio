import React from 'react'
import style from './styles.module.css'
import AboutContentScroll from '@/components/AboutContentScroll'
const AboutPage = () => {
    return (
        <>
            <div className={style.background} style={{ zIndex: "-2" }}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <section className="about flex flex-col justify-evenly items-center mt-14 p-2" style={{ height: "100%" }}>
                <div className="intro">
                    <h1 className='font-bold text-3xl underline p-3 mb-3' style={{ fontSize: "3rem" }}>Hello, I&apos;m <span className='text-stone-400' > Sam Malik</span></h1>
                    <h2 className="font-semibold text-lg">Passionate Developer | Transforming Ideas into Digital Experiences</h2>
                </div>
                <div className="content text-lg gap-24 grid  " style={{ lineHeight: "" }}>
                    {/* <div className="content text-lg gap-24 grid grid-cols-2" style={{ lineHeight: "" }}> */}
                    <div className='grid md:grid-cols-2 max-md:hidden'>

                        <div className='overview text-yellow-200'>
                            <h2 className='font-bold text-3xl text-stone-200 underline'> Personal Overview</h2>
                            I am a Delhi-based web developer with a deep passion for crafting innovative and user-friendly websites. With 2 years of experience in the industry, I have honed my skills in NextJs, C++, PHP, Python. My journey into web development started My journey into the world of web development began during my graduation. Fascinated by the limitless possibilities of the digital realm, I found myself drawn to the art and science of crafting websites that seamlessly blend form and function..
                        </div>
                        <div className='text-green-200'>
                            <h2 className='font-bold text-3xl text-stone-200 underline'> Mission Statement</h2>
                            At the core of my work is a commitment to the core of my web development philosophy: a commitment to creativity, user-centric design, and accessibility. I believe in transforming ideas into visually innovative, intuitive, and inclusive digital experiences that resonate with users. I thrive on turning complex problems into elegant solutions and enjoy collaborating with clients and colleagues to bring ideas to life.
                        </div>
                    </div>
                    <div className='md:hidden'>

                        <AboutContentScroll />
                    </div>
                </div>

            </section>


        </>
    )
}

export default AboutPage