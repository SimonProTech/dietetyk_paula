import React from 'react'
import { Loader } from 'lucide-react'

const Loading = () => {
    return <div className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='flex flex-col justify-center items-center gap-10'>
            <Loader className='animate-pulse' size={80}/>
            <span>Trwa ładowanie strony...</span>
        </div>

    </div>
}

export default Loading
