'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const OfertaCTA = () => {
    return (
        <section
            className="relative flex flex-col items-center justify-center text-center px-4 py-20"
            style={{
                backgroundImage: 'url(http://localhost:3000/assets/ofertaCTA-image.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="backdrop-blur-lg flex justify-center items-center flex-col bg-white/30 rounded-2xl p-8 md:p-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-6xl font-medium md:font-bold mb-6 text-pink-600"
                >
                    Gotowa/y, aby zacząć swoją przemianę?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="text-lg md:text-2xl max-w-2xl mb-8 text-black"
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
                        className="inline-block hover:scale-105 bg-pink-600 hover:bg-pink-500 text-white font-bold  md:py-4 py-4 px-12 md:px-24 rounded-full transition-all"
                    >
                        Skontaktuj się ze mną
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default OfertaCTA
