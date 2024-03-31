'use client'
import { Button } from './ui/button'
import { redirect, useRouter } from 'next/navigation'

const ConnectButton = () => {
    const router = useRouter();
    return (
        <Button
            onClick={() => {
                router.push("https://wa.me/918010512106")
            }}
            className="btn vibrate-1 appointmentBtn z-20 sm:z-0 absolute hover:bg-stone-500 font-bold hover:bg-opacity-50 border border-stone-500" >

            Lets Connect
        </Button>
    )
}

export default ConnectButton