'use client'

import { motion } from 'motion/react'
import React from 'react'

interface StepI {
    number: number
    title: string
    description: string
    icon: any
    delay: number
}

const Step = ({ description, number, title, icon, delay = 0 }: StepI) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true
            }}
            transition={{ duration: 0.5, delay }}
            className="flex items-start space-x-4"
        >
            <div className="flex flex-col items-center gap-2">
                <div className="flex-shrink-0 w-10 h-10 bg-rose-200 dark:bg-pink-600 dark:text-white text-pink-500 flex items-center justify-center rounded-full text-lg font-bold">
                    {number}
                </div>
                {icon}
            </div>

            <div className="flex flex-col w-full items-center">
                <h4 className="text-lg font-semibold dark:text-gray-50 text-gray-900">
                    {title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default Step
