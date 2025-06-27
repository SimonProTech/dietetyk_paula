'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

interface HeaderLinkProps {
    text: string
    path: string
}

const HeaderLink = ({ text, path }: HeaderLinkProps) => {
    const pathName = usePathname()
    const router = useRouter()
    const scrollToElement = async () => {
        if (path === '/kontakt') return router.push('/kontakt')
        const offer = document.getElementById('oferta')
        if (offer) return offer.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    return (
        <Button
            onClick={scrollToElement}
            variant="header"
            className={`text-lg
            cursor-pointer
            font-normal
             opacity-75
             transition-opacity
             hover:opacity-100
             dark:opacity-90
             relative
             after:transition-all
             after:bg-pink-400
             after:dark:bg-pink-600
             after:h-[1.5px]
             after:duration-500
             after:rounded-full
             after:-translate-y-1/2
             after:text-2xl
             ${pathName === '/' && 'after:w-[2px]'}
             ${pathName === path ? 'after:w-full' : 'after:w-[2px]'}
             hover:after:w-full
             after:absolute
             after:left-1/2
             after:-translate-x-1/2
             after:-bottom-0.5
             py-2
             px-4`}
        >
            {text}
        </Button>
    )
}

export default HeaderLink
