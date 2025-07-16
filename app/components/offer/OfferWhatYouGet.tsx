'use client'

import React from 'react'
import { HandHeart } from 'lucide-react'
import { motion } from 'motion/react'

interface OfferWhatYouGetI {
    whatYouGet: string[]
}

const OfferWhatYouGet = ({ whatYouGet }: OfferWhatYouGetI) => {
    return (
        <>
            {whatYouGet.map((item, index) => (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.4 }}
                    key={index}
                    className="flex min-[450px]:items-center items-center min-[450px]:flex-row flex-col gap-2 md:gap-5"
                >
                    <HandHeart
                        className="text-pink-600 dark:text-pink-400 min-w-[25px]"
                        size={25}
                    />
                    <span className="sm:text-[1rem] text-center min-[450px]:text-left">{item}</span>
                </motion.div>
            ))}
        </>
    )
}

export default OfferWhatYouGet
