'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import { ChevronsDown } from 'lucide-react'
import { useTheme } from 'next-themes'

const MotionImage = motion(Image)

const INITIAL_HEIGHT = 2000

const OfertaSection = () => {
    const sectionRef = useRef(null)
    const { theme } = useTheme()

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    })

    // ANIMACJE POCZĄTKOWE
    const opacity = useTransform(scrollYProgress, [0.1, 0.8], [0, 1], { clamp: true })
    const clip1 = useTransform(scrollYProgress, [0.1, 0.8], [35, 0])
    const clip2 = useTransform(scrollYProgress, [0.1, 0.8], [65, 100])

    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`


    const titleScale = useTransform(scrollYProgress, [0.1, 0.9], [1.2, 0.8])
    const titleTranslateY = useTransform(scrollYProgress, [0.1, 0.9], [0, -150])
    const titleOpacity = useTransform(scrollYProgress, [0.0, 0.15], [0, 1])

    const tableOpacity = useTransform(scrollYProgress, [0.95, 1], [0, 1])
    const tableTranslateY = useTransform(scrollYProgress, [0.95, 1], [50, 0])

    return (
        <section className="relative mt-20">
            <span className="absolute right-10 rotate-90 font-thin">Przewiń w dół</span>
            <div className="flex justify-center items-center">
                <ChevronsDown className="animate-bounce" size={50} />
            </div>

            <div
                ref={sectionRef}
                className="relative w-full"
                style={{ height: `calc(${INITIAL_HEIGHT}px + 200vh)` }}
            >
                <div className="sticky top-0 pt-1 h-screen w-full">
                    <div className="flex justify-center items-center relative mt-10">
                        <MotionImage
                            src="/assets/emojis/paula-with-laptop.png"
                            width={650}
                            height={650}
                            alt="Paula with laptop"
                        />
                    </div>
                    <motion.div
                        style={{
                            opacity: scrollYProgress,
                            clipPath,
                            backgroundColor: theme === 'dark' ? '#0A0A0A' : '#f5eeee',
                        }}
                        className="absolute min-h-screen w-full top-0 z-50 px-6 flex flex-col"
                    >
                        <motion.h2
                            style={{
                                scale: titleScale,
                                translateY: titleTranslateY,
                                marginBottom: '1rem',
                                marginTop: 'auto',  // na początku na środku
                            }}
                            className="text-7xl md:text-8xl text-center font-thin italic"
                        >
                            Poznaj pełną ofertę
                        </motion.h2>

                        <motion.div
                            style={{
                                opacity: tableOpacity,
                                translateY: tableTranslateY,
                            }}
                            className="max-w-3xl mx-auto"
                        >
                            <table
                                className="w-full border-collapse border border-gray-300 dark:border-gray-700 text-left">
                                <thead>
                                <tr>
                                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Usługa</th>
                                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Cena</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Projektowanie
                                        stron
                                    </td>
                                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">2000 PLN</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Optymalizacja
                                        SEO
                                    </td>
                                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">800 PLN</td>
                                </tr>
                                {/* Dodaj więcej wierszy według potrzeby */}
                                </tbody>
                            </table>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default OfertaSection
