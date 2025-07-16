'use client'

import { motion } from 'motion/react'
import React from 'react'

const OfferSeparator = () => {
    return (
        <motion.div
            initial={{
                width: '5vw',
            }}
            whileInView={{
                width: '30vw',
            }}
            transition={{
                duration: 1.1,
            }}
            className="my-10 h-[1px] w-[30vw] mx-auto dark:bg-white bg-black"
        ></motion.div>
    )
}

export default OfferSeparator
