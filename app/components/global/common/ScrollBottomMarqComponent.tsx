'use client'

import React from 'react'
import Marquee from 'react-fast-marquee'
import { Dot } from 'lucide-react'
import useCurrentTheme from '@/app/hooks/useCurrentTheme'

interface ScrollBottomMarqComponentI {
    textToMarquee: string
}

const ScrollBottomMarqComponent = ({ textToMarquee }: ScrollBottomMarqComponentI) => {
    const { theme } = useCurrentTheme()
    return (
        <div className="flex pt-0 md:pt-20 items-center justify-center mx-auto w-[400px]">
            <Marquee
                gradient={true}
                gradientColor={`${theme === 'light' ? '#EFEFEF' : '#0a0a0a'}`}
                loop={0}
                play={true}
                pauseOnHover={false}
                pauseOnClick={false}
            >
                <div className="flex items-center space-x-2 min-w-[400px]">
                    <Dot size={30} className="dark:text-pink-600 text-pink-400" />
                    <span className="tracking-wider uppercase">{textToMarquee}</span>
                    <Dot size={30} className="dark:text-pink-600 text-pink-400" />
                    <span className="tracking-wider uppercase">{textToMarquee}</span>
                    <Dot size={30} className="dark:text-pink-600 text-pink-400" />
                    <span className="tracking-wider uppercase">{textToMarquee}</span>
                </div>
            </Marquee>
        </div>
    )
}

export default ScrollBottomMarqComponent
