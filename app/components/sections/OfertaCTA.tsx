'use client'

import Link from 'next/link'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

const OfertaCTA = () => {
    const ref = useRef(null)

    // Hook: scroll progress od 0 do 1 w obrębie kontenera
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"], // start elementu dotyka dołu ekranu -> koniec elementu dotyka góry
    })

    // Animacja: fade + slide in
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
    const y = useTransform(scrollYProgress, [0, 1], [200, -230])
    const smoothY = useSpring(y, { stiffness: 50, damping: 20 })
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
    const smoothRotate = useSpring(rotate, { stiffness: 40, damping: 20 })
    const smoothRotate2 = useSpring(rotate, { stiffness: 40, damping: 10 })


    return (
        <div className="relative w-full h-[150vh]">
            {/* Sticky background */}
            <div
                className="sticky top-0 w-full h-[100vh] bg-cover bg-center"
                style={{
                    backgroundImage: `url(${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/ofertaCTA-image.jpg)`,
                }}
            ></div>

            {/* Foreground content */}
            <section  className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-4 py-20">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: -140, scale: 1.05 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 1.5,
                        ease: [0.25, 0.1, 0.25, 1] // ease-in-out
                    }}
                    viewport={{
                        margin: '-10px 0px', // górny offset (negative = trigger wcześniej)
                    }}
                    className="backdrop-blur-lg b border-2 border-pink-600 flex justify-center items-center flex-col bg-white/20 rounded-2xl p-8 md:p-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-[45px] font-medium md:font-bold mb-6 text-pink-500"
                    >
                        Gotowa/y, aby zacząć swoją przemianę?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        className="text-lg tracking-tight md:text-xl max-w-2xl mb-8 text-black"
                    >
                        Skontaktuj się ze mną już dziś i razem osiągniemy Twoje cele!
                    </motion.p>

                    <motion.div
                        initial={{ scale: 1.1, opacity: 0, y: 60 }}
                        whileInView={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            href="/kontakt"
                            className="inline-block hover:scale-105 bg-pink-500 hover:bg-pink-600 text-white font-bold md:py-4 py-4 px-12 md:px-24 rounded-full transition-all"
                        >
                            Skontaktuj się ze mną
                        </Link>
                    </motion.div>
                </motion.div>
                {/* Scroll-triggered element */}
            </section>
            <motion.div
                className="absolute hidden sm:block bottom-30 right-20 mt-40"
            >
                <motion.svg
                    viewBox="0 0 200 200"
                    className="w-40 h-40"
                    style={{ rotate: smoothRotate }}
                >
                    <defs>
                        <path
                            id="circlePath"
                            d="M 100, 100
           m -75, 0
           a 75,75 0 1,1 150,0
           a 75,75 0 1,1 -150,0"
                        />
                    </defs>
                    <text fill="#ec4899" fontSize="18" fontWeight="bold">
                        <textPath
                            href="#circlePath"
                            startOffset="0"
                        >
                            Zasługujesz na to, co najlepsze — zacznij dziś! 🚀
                        </textPath>
                    </text>
                </motion.svg>
            </motion.div>
            <motion.div
                className="absolute mt-40 left-30 sm:left-20 bottom-30"
            >
                <motion.svg
                    viewBox="0 0 200 200"
                    className="w-40 h-40"
                    style={{ rotate: smoothRotate2 }}
                >
                    <defs>
                        <path
                            id="circlePath"
                            d="M 100, 100
           m -75, 0
           a 75,75 0 1,1 150,0
           a 75,75 0 1,1 -150,0"
                        />
                    </defs>
                    <text fill="#ec4899" fontSize="18" fontWeight="bold">
                        <textPath
                            href="#circlePath"
                            startOffset="0"
                        >
                            Zasługujesz na to, co najlepsze — zacznij dziś! 🚀
                        </textPath>
                    </text>
                </motion.svg>
            </motion.div>
        </div>

    )
}

export default OfertaCTA
