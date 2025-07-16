'use client'

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { motion } from 'motion/react'

interface OfferTabI {
    shortDescription: string
    longDescription: string
}

const Tab = motion(Tabs)

const OfferTab = ({ longDescription, shortDescription }: OfferTabI) => {
    return (
        <Tab
            initial={{
                y: 50,
                opacity: 0,
            }}
            whileInView={{
                y: 0,
                opacity: 1,
            }}
            viewport={{
                margin: '-100px',
                once: true,
            }}
            transition={{ duration: 0.4 }}
            defaultValue="forWho"
            className="flex flex-col items-center pt-20 w-full"
        >
            <TabsList className="flex md:w-[50vw] w-full lg:w-[30vw] justify-center gap-2 rounded-md bg-gray-200 dark:bg-zinc-900 p-1">
                <TabsTrigger
                    className="font-bold px-4 cursor-pointer py-2 rounded-md transition-colors duration-200 dark:data-[state=active]:bg-pink-600 data-[state=active]:bg-pink-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700 dark:data-[state=inactive]:text-gray-300"
                    value="forWho"
                >
                    Dla kogo?
                </TabsTrigger>
                <TabsTrigger
                    className="font-bold px-4 py-2 cursor-pointer rounded-md transition-colors duration-200 dark:data-[state=active]:bg-pink-600 data-[state=active]:bg-pink-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700 dark:data-[state=inactive]:text-gray-300"
                    value="description"
                >
                    Opis oferty
                </TabsTrigger>
            </TabsList>

            <TabsContent value="forWho" className="w-full">
                <div className="flex justify-center lg:max-w-[50vw] mx-auto text-center leading-12 text-xl w-full items-center pt-5">
                    <p className="prose dark:prose-invert mx-auto max-w-3xl text-center dark:text-white text-gray-700 text-lg leading-relaxed">
                        {shortDescription}
                    </p>
                </div>
            </TabsContent>

            <TabsContent value="description" className="w-full">
                <div className="flex justify-center lg:max-w-[50vw] mx-auto text-center leading-12 text-xl w-full items-center pt-5">
                    <p className="prose dark:prose-invert mx-auto max-w-3xl text-center dark:text-white text-gray-700 text-lg leading-relaxed">
                        {longDescription}
                    </p>
                </div>
            </TabsContent>
        </Tab>
    )
}

export default OfferTab
