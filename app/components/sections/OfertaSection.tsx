'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import {
    motion,
    useMotionTemplate,
    useMotionValueEvent,
    useScroll,
    useSpring,
    useTransform,
} from 'framer-motion'

const MotionImage = motion(Image)

const INITIAL_HEIGHT = 1000

const OfertaSection = () => {
    const sectionRef = useRef(null)

    const { scrollYProgress, scrollY } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    })

    const opacity = useTransform(scrollYProgress, [INITIAL_HEIGHT, INITIAL_HEIGHT + 500], [1, 0])
    const inset = useTransform(scrollYProgress, [0, INITIAL_HEIGHT + 500], ['0%', '100%'])

    const clipPath = useTransform(
        scrollYProgress,
        [0, 1],
        ['circle(20% at 50% 50%)', 'circle(150% at 50% 50%)']
    )

    const smoothClipPath = useSpring(clipPath, {
        stiffness: 100,
        damping: 20,
        mass: 0.5,
    })

    return (
        <section className="relative mt-40">
            <div ref={sectionRef} className="flex flex-col justify-center items-center gap-20">
                <h2 className="text-6xl leading-16 font-light text-center">
                    Poznaj pełną ofertę 😍
                </h2>
            </div>

            <div
                className="relative w-full"
                style={{
                    height: `calc(${INITIAL_HEIGHT}px + 100vh)`,
                }}
            >
                <div ref={sectionRef} className="sticky top-0 h-screen w-full">
                    <div className="flex justify-center items-center relative mt-20">
                        <MotionImage
                            src="/assets/emojis/paula-with-laptop.png"
                            width={600}
                            height={600}
                        />
                    </div>
                    <motion.section
                        style={{
                            clipPath: smoothClipPath,
                            WebkitClipPath: smoothClipPath,
                            backgroundColor: '#0d0d12',
                            color: 'white',
                            position: 'absolute',
                            height: '100vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '5rem',
                            fontWeight: 'bold',
                            fontFamily: 'serif',
                        }}
                    >
                        About
                    </motion.section>
                </div>
            </div>
        </section>
    )
}

export default OfertaSection
