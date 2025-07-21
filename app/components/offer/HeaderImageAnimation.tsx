'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface HeaderImageAnimationP {
    url: string
    alt: string
}

const HeaderImageAnimation = ({ url, alt }: HeaderImageAnimationP) => {
    return (
        <div className="relative rounded-md w-full max-w-[600px] aspect-[3/2] overflow-hidden">
            {/* Animowana zasłona */}
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: '-100%' }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute top-0 left-0 w-full h-full z-50 dark:bg-pink-300 bg-pink-500 rounded-md"
            />

            {/* Obrazek */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="relative"
            >
                <Image
                    src={url}
                    alt={alt}
                    width={600}
                    height={400}
                    className="rounded-md w-full h-auto"
                />
            </motion.div>
        </div>
    )
}

export default HeaderImageAnimation
