import { LoadingBar } from '@/components/LoadingBar'
import React from 'react'

const loading = () => {
    return (
        <div className=' h-screen flex-col w-screen flex justify-center items-center'>

            <LoadingBar />
            <p>Loading ...</p>
        </div>
    )
}

export default loading