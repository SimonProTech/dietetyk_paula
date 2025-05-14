'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useCurrentTheme from '@/app/hooks/useCurrentTheme'

const HeaderLogo = () => {
    const { currentTheme } = useCurrentTheme()

    const logoSrc = currentTheme === 'light' ? '/assets/logo.png' : '/assets/logo-dark.png'

    return (
        <Link
            href="/"
            className="cursor-pointer relative hover:-translate-y-0.5 transition-transform"
        >
            <Image
                src={logoSrc}
                width={180}
                height={180}
                priority
                alt="Dietetyk Paula logo strony internetowej"
            />
        </Link>
    )
}

export default HeaderLogo
