'use client'

import React from 'react'
import { Gem } from 'lucide-react'
import { motion } from 'motion/react'

interface OfferPriceTagI {
    price: number
}

const OfferPriceTag = ({ price }: OfferPriceTagI) => {
    return (
        <motion.div className="flex flex-col relative mt-5 items-center mb-10 min-[450px]:w-max w-full min-[450px]:items-start">
            <span className="text-2xl flex items-center gap-3 font-bold bg-pink-50 dark:bg-zinc-900 py-3 px-6 rounded-r-2xl text-pink-600 dark:text-pink-300">
                <Gem /> {price} PLN
            </span>
            <motion.div
                initial={{
                    width: '100%',
                }}
                animate={{
                    width: 0,
                }}
                transition={{
                    delay: 0.4,
                    duration: 0.5,
                }}
                className="absolute top-0 left-0 z-50 dark:bg-pink-300 bg-pink-500 w-full rounded-r-2xl h-full"
            />
        </motion.div>
    )
}

export default OfferPriceTag
