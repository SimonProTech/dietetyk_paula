'use client'

import React, { useContext, useEffect, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import {  useScroll } from 'framer-motion'
import { useThrottle } from '@/app/hooks/useThrottle'
import { ModalContext } from '@/app/components/global/modal-nav-provider'
import HeaderMenuButton from '@/app/components/header/HeaderMenuButton'

const ShowMovingMenuOnDesktop = () => {
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)
    const { scrollY } = useScroll()
    const context = useContext(ModalContext)

    const [scrollYValue, setScrollYValue] = useState(scrollY.get())

    useEffect(() => {
        return scrollY.on('change', (latest) => {
            setScrollYValue(latest)
        })
    }, [scrollY])

    const throttledScrollY = useThrottle(scrollYValue, 200)

    useEffect(() => {
        if (throttledScrollY > 200) {
            setShow(true)
        } else {
            setShow(false)
        }
    }, [throttledScrollY])

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
                    className="fixed md:bottom-10 md:right-10 bottom-4 right-4 z-[99999]"
                >
                    <HeaderMenuButton openModal={context?.openModal!}/>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ShowMovingMenuOnDesktop
