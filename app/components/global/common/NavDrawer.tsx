'use client'

import React, { useContext } from 'react'
import { ModalContext } from '../modal-nav-provider'
import { AnimatePresence, motion } from 'framer-motion'
import HeaderLogo from '@/app/components/header/HeaderLogo'
import { InstagramIcon, XIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import DarkModeToggle from '@/app/components/header/DarkModelToggle'

const NavDrawer = () => {
    const context = useContext(ModalContext)
    const isOpen = context?.open
    const router = useRouter()
    const changePath = (path: string) => {
        context?.closeModal();
        router.push(path)
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* BACKDROP */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={context?.closeModal}
                        className="fixed top-0 left-0 cursor-pointer w-full h-full bg-[#0a0a0a]/60 z-[99999999999999]"
                    />

                    {/* DRAWER */}
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-0 border-t-zinc-600 border-t-[1px] left-0 w-full h-[75vh] min-[800px]:h-[55vh] bg-[#efefef] dark:bg-[#0a0a0a] z-[9999999999999999999] p-4"
                    >
                        <div className='p-4 h-full relative flex justify-between items-center flex-col gap-5'>
                            <div className='absolute right-0 flex gap-4 items-center'>
                                <DarkModeToggle/>
                                <XIcon onClick={context?.closeModal} className='hover:scale-125 transition-all cursor-pointer'/>
                            </div>

                            <div className='flex justify-center items-center'>
                                <HeaderLogo  />
                            </div>
                            <nav className="flex flex-col min-[800px]:flex-row items-center gap-5">
                                <Button
                                    variant='default_empty'
                                    className="opacity-80 font-normal text-md hover:opacity-100 cursor-pointer transition-all hover:-translate-y-1 duration-300"
                                    onClick={() => changePath('/')}
                                >
                                    Strona główna
                                </Button>
                                <span className="w-full min-[800px]:rotate-90 sm:w-12 h-[1px] dark:bg-zinc-800 bg-gray-200" />
                                <Button
                                    variant='default_empty'
                                    className="opacity-80 font-normal text-md hover:opacity-100 cursor-pointer transition-all hover:-translate-y-1 duration-300"
                                    onClick={() => changePath('/#oferta')}
                                >
                                    Oferta
                                </Button>
                                <span className="w-full min-[800px]:rotate-90 sm:w-12 h-[1px] dark:bg-zinc-800 bg-gray-200" />
                                <Button
                                    variant='default_empty'
                                    className="opacity-80 font-normal text-md hover:opacity-100 cursor-pointer transition-all hover:-translate-y-1 duration-300"
                                    onClick={() => changePath('/kontakt')}
                                >
                                    Kontakt
                                </Button>
                                <span className="w-full min-[800px]:rotate-90 sm:w-12 h-[1px] dark:bg-zinc-800 bg-gray-200" />
                                <Button
                                    variant='default_empty'
                                    className="opacity-80 font-normal text-md hover:opacity-100 cursor-pointer transition-all hover:-translate-y-1 duration-300"
                                    onClick={() => changePath('/#faq')}
                                >
                                    FAQ
                                </Button>
                            </nav>
                            <div className='flex justify-center items-center flex-col space-y-5'>
                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    className="transition-all duration-500 hover:text-white rounded-md hover:bg-pink-500 hover:dark:bg-pink-600 hover:rounded-md p-2"
                                >
                                    <InstagramIcon size={25} className="cursor-pointer" />
                                </a>
                                <small className="text-center text-sm text-gray-500">
                                    Strona stworzona przez: <span className="underline">Szymon Jocek</span>
                                    <br />© {new Date().getFullYear()} — Wszelkie prawa zastrzeżone.
                                </small>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default NavDrawer
