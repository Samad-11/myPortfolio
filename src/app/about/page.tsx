import React from 'react'
import myImage from '../../../public/myImg2.png'
import Image from 'next/image'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
import { MdOutlineSchool } from 'react-icons/md'
import { LiaProjectDiagramSolid } from 'react-icons/lia'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: "About",
    description: "About Page of the Dev Sam Website"
}
const AboutPage = () => {

    return (
        <>
            <div className="flex justify-center-items-center mt-16" style={{ overflowY: "visible" }}>

                <section className=" about  w-[70%] m-auto">
                    <div className='flex flex-col border-2 border-stone-400 px-4 pt-4 ' style={{ borderRadius: "25px", height: "40%" }}>
                        <div className='grid  lg:grid-cols-2 '>
                            <figure className='relative '>
                                <Image src={myImage} alt='Image' className='bg-red-400 max-h-[100%]' style={{ borderTopLeftRadius: "20px" }} />
                                <div className='text-stone-200 p-5 absolute z-50 bottom-0 right-0 flex text-2xl gap-2'>
                                    <i><Link href={''} className='hover:text-yellow-300 '><FaFacebook /></Link></i>
                                    <i><Link href={''} className='hover:text-yellow-300 '><FaGithub /></Link></i>
                                    <i><Link href={''} className='hover:text-yellow-300 '><FaLinkedin /></Link></i>
                                    <i><Link href={''} className='hover:text-yellow-300 '><FaInstagram /></Link></i>
                                </div>
                            </figure>
                            <div className="content bg-stone-600 p-3 md:p-10 rounded">
                                <h1 className="text-3xl text-stone-200 font-semibold font-mono">About Me</h1>
                                <p className="py-10 font-light text-slate-300 leading-7 text-lg md:text-justify">
                                    As a BCA (Bachelor of Computer Applications) student with a passion for web development and design, I am committed to leveraging my academic foundation and practical skills to contribute effectively in the dynamic field of technology. Currently immersed in my BCA program, I have proactively initiated my journey into web development and design, acquiring hands-on experience and cultivating a strong understanding of the latest industry trends.
                                </p>
                                <div>
                                    <p className="btn border ghost my-2 p-4"><i><MdOutlineSchool /></i> Pursuing Graduation from jIMS VK, IPU Delhi</p>
                                    <p className="btn border ghost my-2 p-4"><i><LiaProjectDiagramSolid /></i>Completed many projects</p>
                                </div>
                            </div>
                        </div>
                        <div className="buttons flex pb-4 flex-wrap text-red-950 font-semibold " >
                            <Link href={''} className='flex-1  p-9 bg-blue-400  text-center' style={{ borderBottomLeftRadius: "20px" }}>Resume</Link>
                            <Link href={''} className='flex-1 text-nowrap p-9 bg-green-400 text-center' style={{ borderBottomRightRadius: "20px" }}>Get In Touch</Link>
                        </div>
                    </div>
                </section>

                {/* <div className={style.background} style={{ zIndex: "-2" }}>
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
            </div> */}



            </div>
        </>
    )
}

export default AboutPage