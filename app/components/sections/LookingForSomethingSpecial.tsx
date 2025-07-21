'use client'

import React, { useRef } from 'react'
import { HandHeart } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ofertaStaticDb } from '@/utils/oferta-static-db'
import Link from 'next/link'
import ScrollBottomMarqComponent from '@/app/components/global/common/ScrollBottomMarqComponent'

const LookingForSomethingSpecial = () => {
    const sectionRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    })

    const saladX = useTransform(scrollYProgress, [0, 1], ['-45vw', '23vw'])
    const xbgPink = useTransform(scrollYProgress, [0, 1], ['-100vw', '0vw'])
    const opacityNewText = useTransform(scrollYProgress, [0.3, 1], [0, 1])
    const rotate = useTransform(scrollYProgress, [0, 1], ['0', '180deg'])

    return (
        <>
            <div className="sm:mt-0 mt-20">
                <ScrollBottomMarqComponent textToMarquee="Przewiń w dół" />
            </div>
            <section ref={sectionRef} style={{ height: '600vh' }} className="relative">
                <div className="sticky top-0 flex justify-center h-screen items-center">
                    <motion.div
                        style={{
                            x: saladX,
                            rotate,
                            backgroundImage: `url('${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/salad.png')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                        }}
                        className={`z-90 sm:absolute min-[930px]:h-[70vh] min-[880px]:right-40 min-[1200px]:right-auto w-0 h-0  min-[930px]:w-[40vw]`}
                    />
                    <div className="h-full flex z-10 justify-center items-center w-full">
                        <h2 className="pt-0 lg:leading-0 leading-16 text-5xl text-center md:text-left font-thin">
                            A może szukasz czegoś wyjątkowego?
                        </h2>
                    </div>
                    <motion.div
                        style={{
                            x: xbgPink,
                        }}
                        className="absolute top-0 left-0 bg-pink-200 w-full h-full z-30 flex items-center pl-5 pr-8 lg:pr-0 lg:pl-0 min-[930px]:justify-start justify-center"
                    >
                        {ofertaStaticDb
                            .filter((x) => !x.show)
                            .map((offer, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={`/oferta/${offer.title.toLowerCase()}`}
                                        className="flex items-center"
                                    >
                                        <motion.div
                                            style={{ opacity: opacityNewText }}
                                            className="text-white dark:bg-neutral-900 border cursor-pointer max-w-[600px] hover:border-pink-600 transition-border border-neutral-300 dark:border-neutral-700 rounded-2xl z-50 overflow-hidden shadow-xl relative lg:absolute bg-white left-0 lg:left-30 text-3xl p-2 font-thin"
                                        >
                                            <div key={offer.id}>
                                                <Image
                                                    src={offer.url}
                                                    alt={offer.alt}
                                                    className="rounded-md"
                                                    width={600}
                                                    height={400}
                                                />
                                                <div className="lg:pt-6 lg:px-6 lg:pb-2 min-[450px]:p-4 p-2 flex justify-between min-[450px]:flex-row gap-2 flex-col items-center w-full">
                                                    <h2 className="xl:text-2xl text-[1.5rem] dark:text-white text-black font-bold text-textColor text-left">
                                                        {offer.title}
                                                    </h2>
                                                    <span className="font-extrabold text-right text-2xl w-max dark:text-pink-400 text-pink-600">
                                                        {offer.currentPrice + ' PLN'}
                                                    </span>
                                                </div>
                                                <div className="flex flex-col sm:mb-0 mb-8 gap-5 text-sm lg:p-6 min-[450px]:p-4 p-2  dark:text-whitetext-black">
                                                    {offer.whatYouGet
                                                        .slice(0, 5)
                                                        .map((item, index) => {
                                                            return (
                                                                <div
                                                                    key={index}
                                                                    className="flex min-[450px]:items-center items-start flex-row gap-2 md:gap-5"
                                                                >
                                                                    <HandHeart
                                                                        className="text-pink-600 dark:text-pink-400 min-w-[25px]"
                                                                        size={23}
                                                                    />
                                                                    <span className="sm:text-[1rem] dark:text-white text-black font-normal text-sm min-[450px]:text-left">
                                                                        {item}
                                                                    </span>
                                                                </div>
                                                            )
                                                        })}
                                                </div>
                                            </div>
                                            <span className="dark:bg-zinc-700 bg-[#EAE9E3] absolute right-0  min-[450px]:right-1 text-sm text-pink-600 dark:text-pink-300 font-bold rounded-md min-[450px]:px-2 px-1 py-1 min-[450px]:py-1 bottom-0 min-[450px]:bottom-1">
                                                Czytaj więcej
                                            </span>
                                        </motion.div>
                                    </Link>
                                )
                            })}
                    </motion.div>
                </div>
            </section>
            <div className="w-full dark:h-30 h-60 bg-gradient-to-t dark:from-pink-200 from-pink-200/0  to-pink-200" />
        </>
    )
}

export default LookingForSomethingSpecial
