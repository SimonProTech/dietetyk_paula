'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

interface HeaderImageAnimationP {
    url: string
    alt: string
}
const HeaderImageAnimation = ({ url, alt }: HeaderImageAnimationP) => {
    return (
        <motion.div className="relative rounded-md w-full bg-red-400 max-h-max max-w-[600px]">
            <motion.div
                initial={{
                    height: '100%',
                }}
                animate={{
                    height: 0,
                }}
                transition={{
                    delay: 0.3,
                    duration: 0.6,
                }}
                className="absolute left-0 bottom-0 z-50 w-full h-full dark:bg-pink-300 bg-pink-500 rounded-md"
            />
            <div className="dark:bg-pink-300 bg-pink-500 overflow-hidden rounded-md">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <Image
                        src={url}
                        alt={alt}
                        width={600}
                        height={600}
                        className="rounded-md w-full max-h-[400px]"
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default HeaderImageAnimation
