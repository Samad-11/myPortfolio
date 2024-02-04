'use client'
import { Sheet, SheetClose } from '@/components/ui/sheet'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { SheetContent, SheetDescription, SheetHeader, SheetTrigger } from './ui/sheet'
import links from './links'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()
    console.log(pathname)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuHandler = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <nav className='flex justify-around items-center p-2 z-40 bg-black' style={{ height: "5vh" }}>
            <div className="logo brandName navLeft flex-1">
                <Link href="/">

                    <Image
                        src={'/logo.png'}
                        // src={'/logoWithBG.png'}
                        alt='logo'
                        width={100} height={200}
                        className='absolute z-50'
                    />
                </Link>
            </div>
            <div className="links navRight ">
                <div className='md:hidden '>

                    <Sheet onOpenChange={menuHandler}>
                        <SheetTrigger hidden={isMenuOpen}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </SheetTrigger>
                        <SheetContent className='bg-transparent h-screen ' style={{ width: '30vw' }}>
                            <SheetHeader>
                                <SheetDescription >
                                    <ul className='flex flex-col justify-around border border-r-amber-50 h-screen items-end border-none text-slate-100 '>
                                        {links.map((link) => {
                                            return <li key={link.path}><Link href={link.path} className={`${pathname == link.path && 'text-stone-400'} hover:text-stone-400 font-semibold font-mono`}>{link.name}</Link></li>
                                        })}
                                    </ul>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
                <ul className='flex justify-around items-center max-md:hidden gap-7 p-'>
                    {links.map((link) => {
                        return <li key={link.path}><Link href={link.path} className={`${pathname == link.path && 'text-stone-400'} hover:text-stone-400`}>{link.name}</Link></li>
                    })}

                </ul>

            </div>
        </nav>
    )
}

export default Navbar