'use client'

import React, { ReactNode } from 'react'
import { Dot } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
interface HeaderTopSectionProps {
    paragraphTopText: string
    headingMainText?: string
    children?: ReactNode
}

const HeaderTopSection = ({
    headingMainText,
    paragraphTopText,
    children,
}: HeaderTopSectionProps) => {
    const pathname = usePathname()
    return (
        <div className="container md:pt-0 pt-5 mx-auto px-5 relative z-[9999]">
            <div className="flex justify-between z-50 relative text-center items-center gap-5 flex-col">
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.9 }}
                    className="flex items-center space-x-2"
                >
                    <Dot size={25} className="text-pink-400" />
                    <p className="uppercase text-xl tracking-wider md:font-normal font-thin">
                        {paragraphTopText}
                    </p>
                    <Dot size={25} className="text-pink-400" />
                </motion.div>
                {children}
                {pathname === '/' ? (
                    <motion.h4
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.9, delay: 0.9 }}
                        className="text-xl mt-5 leading-10 md:max-w-[65%] w-full"
                    >
                        {headingMainText}
                    </motion.h4>
                ) : null}
            </div>
        </div>
    )
}

export default HeaderTopSection
