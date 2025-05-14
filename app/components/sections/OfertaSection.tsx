'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const MotionImage = motion(Image)

const OfertaSection = () => {
    const sectionRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    })

    // Rozszerzanie od rozmiaru laptopa do pełnego ekranu
    const width = useTransform(scrollYProgress, [0, 1], [251, window.innerWidth])
    const height = useTransform(scrollYProgress, [0, 1], [140, window.innerHeight])
    const x = useTransform(scrollYProgress, [0, 1], [495, 0])
    const y = useTransform(scrollYProgress, [0, 1], [86, 0])
    const borderRadius = useTransform(scrollYProgress, [0, 0.7], [16, 0])
    const opacity = useTransform(scrollYProgress, [0.2, 1], [0.4, 1])

    return (
        <section className="relative mt-40">
            <div ref={sectionRef} className="flex flex-col justify-center items-center gap-20">
                <h2 className="text-6xl leading-16 font-light text-center">
                    Poznaj pełną ofertę 😍
                </h2>

                <div className="relative">
                    <MotionImage
                        width={600}
                        height={600}
                        quality={100}
                        src="/assets/emojis/paula-with-laptop.png"
                        alt="Emoji dietetyka trzymającego laptopa"
                    />

                    {/* Rozszerzająca się sekcja */}
                    <motion.div
                        style={{
                            position: 'fixed',
                            top: y,
                            left: x,
                            width,
                            height,
                            opacity,
                            borderRadius,
                            backgroundColor: 'white',
                            zIndex: 50,
                        }}
                        className="overflow-hidden shadow-xl"
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            <h2 className="text-3xl">To jest pełnoekranowa sekcja 🎉</h2>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default OfertaSection
