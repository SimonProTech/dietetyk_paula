'use client'

import React from 'react'

interface StepI {
    number: number
    title: string
    description: string
    icon: string
}

const Step = ({ description, number, title, icon }: StepI) => {
    return (
        <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-rose-200 dark:bg-pink-600 dark:text-white text-pink-500 flex items-center justify-center rounded-full text-lg font-bold">
                {number}
            </div>
            <div>
                <h4 className="text-lg font-semibold dark:text-gray-50 text-gray-900">{title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{description}</p>
            </div>
        </div>
    )
}

export default Step
