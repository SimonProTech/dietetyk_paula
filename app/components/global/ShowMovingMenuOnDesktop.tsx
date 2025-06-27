'use client'

import React, { useEffect, useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Handshake, Home, Mail, Salad } from 'lucide-react'
import HeaderLogo from '@/app/components/header/HeaderLogo'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import DarkModeToggle from '@/app/components/header/DarkModelToggle'

const ShowMovingMenuOnDesktop = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)
    const { scrollY } = useScroll()

    const changePath = (path: string) => {
        setOpen(false)
        router.push(path)
    }

    useMotionValueEvent(scrollY, 'change', (latest) => {
        if (latest > 200) {
            setShow(true)
        } else {
            setShow(false)
        }
    })

    useEffect(() => {
        if (!show && open) {
            setOpen(false)
        }
    }, [show, open])

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    key="moving-menu"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-10 right-10 z-[99999]"
                >
                    <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
                        <DropdownMenuTrigger className="cursor-pointer">
                            <div className="bg-pink-600 p-2 rounded-md">
                                <Salad className="text-white" />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mr-2 min-w-[14rem] rounded-xl shadow-lg border border-gray-200 relative z-[999999999] dark:border-zinc-800 dark:bg-[#0a0a0a] bg-[#efefef] p-4 space-y-3">
                            <div className="mb-4 flex justify-between items-center">
                                <HeaderLogo width={120} height={120} />
                                <DarkModeToggle size={15} />
                            </div>

                            <DropdownMenuItem className="p-0">
                                <Button
                                    variant="outline"
                                    className="w-full justify-start px-4 py-2 cursor-pointer rounded-md border border-gray-300 dark:border-zinc-700 text-gray-800 dark:text-gray-100 duration-500 hover:border-pink-600  transition-all"
                                    onClick={() => changePath('/')}
                                >
                                    <Home className="text-black dark:text-white" />
                                    Start
                                </Button>
                            </DropdownMenuItem>

                            <DropdownMenuItem className="p-0">
                                <Button
                                    variant="outline"
                                    className="w-full justify-start px-4 py-2 cursor-pointer rounded-md border border-gray-300 dark:border-zinc-700 text-gray-800 dark:text-gray-100 duration-500 hover:border-pink-600  transition-all"
                                    onClick={() => {
                                        const offer = document.getElementById('oferta')
                                        if (offer)
                                            return offer.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start',
                                            })
                                    }}
                                >
                                    <Handshake className="text-black dark:text-white" />
                                    Oferta
                                </Button>
                            </DropdownMenuItem>

                            <DropdownMenuItem className="p-0">
                                <Button
                                    variant="outline"
                                    className="w-full justify-start px-4 py-2 cursor-pointer rounded-md border border-gray-300 dark:border-zinc-700 text-gray-800 dark:text-gray-100 duration-500 hover:border-pink-600  transition-all"
                                    onClick={() => changePath('/kontakt')}
                                >
                                    <Mail className="text-black dark:text-white" />
                                    Kontakt
                                </Button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ShowMovingMenuOnDesktop
