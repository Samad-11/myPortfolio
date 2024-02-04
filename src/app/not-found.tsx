import Link from 'next/link'
import React from 'react'
import { LuConstruction } from 'react-icons/lu'

const NotFoundPage = () => {
    return (
        <div className=' h-screen flex-col w-screen text-justify flex justify-center items-center text-3xl p-16'>
            <i ><LuConstruction size={120} /></i>
            <h1>Sam is Constructing this section</h1>
            <p>Please return to the <Link href={'/'} className="btn text-blue-500 underline hover:text-stone-200 hover:no-underline">Home Page</Link> </p>
        </div>
    )
}

export default NotFoundPage