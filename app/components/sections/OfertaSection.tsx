'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useMotionTemplate, useScroll, useSpring, useTransform } from 'framer-motion'
import { HandHeart } from 'lucide-react'
import { ofertaStaticDb } from '@/utils/oferta-static-db'
import Link from 'next/link'
import ScrollBottomMarqComponent from '@/app/components/global/common/ScrollBottomMarqComponent'

const MotionLink = motion(Link)

const OfertaSection = () => {
    const sectionRef = useRef(null)
    const bottomRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    })

    const { scrollYProgress: bottomScroll } = useScroll({
        target: bottomRef,
        offset: ['start end', 'start start'],
    })

    const opacity = useTransform(scrollYProgress, [0.1, 0.8], [0, 1], { clamp: true })
    const clip1 = useTransform(scrollYProgress, [0.1, 0.8], [35, 0])
    const clip2 = useTransform(scrollYProgress, [0.1, 0.8], [65, 100])
    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`

    const smoothScroll = useSpring(bottomScroll, {
        stiffness: 80,
        damping: 20,
        mass: 1,
    })

    const box = useTransform(smoothScroll, [0, 1], [0, -1000])

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

    const transforms = ofertaStaticDb.map((item) =>
        useTransform(smoothScroll, [0, 1], isMobile ? [0, 0] : [item.startY, item.endY])
    )

    return (
        <section className="relative mt-20">
            <ScrollBottomMarqComponent textToMarquee="Przewiń w dół" />

            {/* Kontener z wysokością na scroll */}
            <div ref={sectionRef} className="relative w-full" style={{ height: `400vh` }}>
                {/* Pierwszy div - sticky */}
                <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center">
                    {/* Obrazek */}
                    <div
                        style={{
                            backgroundImage: `url(${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/emojis/paula-with-laptop.png)`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                        className={`w-full h-[80vh] relative flex justify-center items-center`} />

                    {/* Clip-path animowana warstwa */}
                    <motion.div
                        style={{
                            clipPath,
                            opacity,
                        }}
                        className="absolute dark:bg-black bg-[#efefef] top-0 left-0 w-full h-full z-40 flex items-center justify-center px-6"
                    >
                        <motion.h2
                            style={{
                                scale: useTransform(scrollYProgress, [0.1, 0.9], [1.2, 1.4]),
                                opacity: useTransform(scrollYProgress, [0.2, 0.9], [0, 1]),
                            }}
                            className="text-3xl md:text-6xl lg:text-7xl p-4 font-thin italic text-center"
                        >
                            Poznaj pełną ofertę
                        </motion.h2>
                        <span className="absolute bounce-down right-10 bottom-60 rotate-90 font-thin">
                            Przewiń w dół
                        </span>
                        <span className="absolute left-10 bounce-down bottom-60 rotate-90 font-thin">
                            Przewiń w dół
                        </span>
                    </motion.div>
                </div>
            </div>
            <motion.div
                id="oferta"
                style={{ y: box }}
                className="absolute scroll-m-[100px] bg-gradient-to-b dark:from-black/0 dark:to-black from-[#efefef]/0 z-50 to-[#efefef] w-full h-[200vh]"
            ></motion.div>
            <div className="w-full mx-auto z-[99999] pl-5 pr-5 relative">
                <div
                    ref={bottomRef}
                    className="grid min-[850px]:grid-cols-2 grid-cols-1 xl:container lg:pl-10 lg:pr-10 mx-auto gap-10"
                >
                    {ofertaStaticDb
                        .filter((x) => x.show)
                        .map((offer, index) => {
                            return (
                                <motion.div
                                    key={offer.id}
                                    style={{ y: transforms[index] }}
                                    className='bg-white p-2 relative dark:bg-neutral-900 border cursor-pointer duration-500 hover:border-pink-400 transition-border border-neutral-300 dark:border-neutral-700 rounded-2xl overflow-hidden shadow-xl w-full' >
                                    <MotionLink
                                        href={`/oferta/${offer.title.toLowerCase()}`}
                                    >
                                        <div className="relative overflow-hidden rounded-md">
                                            <Image
                                                src={offer.url}
                                                alt={offer.alt}
                                                width={800}
                                                height={200}
                                                className="pointer-events-none rounded-md object-contain"
                                            />
                                            <div className="absolute inset-0 bg-pink-500 transition-all duration-500 origin-left scale-x-0 hover:scale-x-100 opacity-50"></div>
                                        </div>

                                        <div className="lg:p-6 p-4 min-[500px]:gap-0 gap-5 flex min-[500px]:flex-row flex-col justify-between items-center w-full">
                                            <h2 className="xl:text-2xl min-[500px]:text-left text-center text-[1.5rem] dark:text-white text-black font-bold text-textColor">
                                                {offer.title}
                                            </h2>
                                            <span className="font-extrabold text-right text-2xl w-max dark:text-pink-400 text-pink-600">
                                                {offer.currentPrice + ' PLN'}
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-5 text-sm sm:mb-0 mb-8 lg:p-6 min-[450px]:p-4 p-2  dark:text-whitetext-black">
                                            {offer.whatYouGet.length === 0 ||
                                            offer.whatYouGet[0] === '' ? (
                                                <small>Brak danych do wyświetlenia!</small>
                                            ) : (
                                                offer.whatYouGet.map((item, index) => {
                                                    return (
                                                        <div
                                                            key={index + '_' + 1}
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
                                                })
                                            )}
                                        </div>
                                        <span className="dark:bg-zinc-700 bg-[#EAE9E3] absolute right-0  min-[450px]:right-1 text-sm text-pink-600 dark:text-pink-300 font-bold rounded-md min-[450px]:px-2 px-1 py-1 min-[450px]:py-1 bottom-0 min-[450px]:bottom-1">
                                            Czytaj więcej
                                        </span>
                                    </MotionLink>
                                </motion.div>
                            )
                        })}
                </div>
            </div>
        </section>
    )
}

export default OfertaSection
