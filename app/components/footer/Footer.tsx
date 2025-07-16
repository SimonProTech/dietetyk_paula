'use client'

import React from 'react'
import HeaderLogo from '@/app/components/header/HeaderLogo'
import { InstagramIcon } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'motion/react'

const Footer = () => {
    return (
        <footer className="md:pt-40 pt-20 pb-20 flex flex-col justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center gap-10">
                <motion.div
                    initial={{
                        y: -50,
                        opacity: 0,
                        scale: 1.1,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    viewport={{
                        margin: '20px',
                        once: true,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                >
                    <HeaderLogo />
                </motion.div>
                <motion.a
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="transition-all duration-500 hover:text-white rounded-md hover:bg-pink-500 hover:dark:bg-pink-600 hover:rounded-md p-2"
                >
                    <InstagramIcon size={35} className="cursor-pointer" />
                </motion.a>
            </div>
            <motion.div
                initial={{
                    y: 100,
                    opacity: 0,
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 0.5,
                }}
                className="flex flex-col justify-center items-center gap-10"
            >
                <div className="flex sm:flex-row flex-col items-center sm:items-start gap-5">
                    <Link
                        className="opacity-80 hover:opacity-100 transition-all hover:-translate-y-1 duration-300"
                        href="/"
                    >
                        Strona główna
                    </Link>
                    <span className="block bg-gray-500 sm:h-6 sm:w-[1px] w-full h-[1px]" />
                    <Link
                        className="opacity-80 hover:opacity-100 transition-all hover:-translate-y-1 duration-300"
                        href="/#oferta"
                    >
                        Oferta
                    </Link>
                    <span className="block bg-gray-500 sm:h-6 sm:w-[1px] w-full h-[1px]" />
                    <Link
                        className="opacity-80 hover:opacity-100 transition-all hover:-translate-y-1 duration-300"
                        href="/kontakt"
                    >
                        Kontakt
                    </Link>
                    <span className="block bg-gray-500 sm:h-6 sm:w-[1px] w-full h-[1px]" />
                    <Link
                        className="opacity-80 hover:opacity-100 transition-all hover:-translate-y-1 duration-300"
                        href="/#faq"
                    >
                        FAQ
                    </Link>
                </div>
                <small className="text-center text-sm text-gray-500">
                    Strona stworzona przez: <span className="underline">Szymon Jocek</span>
                    <br />© {new Date().getFullYear()} — Wszelkie prawa zastrzeżone.
                </small>
            </motion.div>
        </footer>
    )
}

export default Footer
