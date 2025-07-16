'use client'

import React from 'react'
import { ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ScrollTop = () => {
    const scrollTopFN = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <div className="relative flex justify-center pt-20">
            <Button
                onClick={scrollTopFN}
                aria-label="Przewiń do góry"
                size="icon"
                className="bg-pink-500 dark:bg-pink-600 hover:bg-pink-600 dark:hover:bg-pink-700 text-white rounded-full shadow-xl transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
                <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
        </div>
    )
}

export default ScrollTop
