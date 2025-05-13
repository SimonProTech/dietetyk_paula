'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useCurrentTheme from '@/app/hooks/useCurrentTheme'

const HeaderLogo = () => {
    const { currentTheme } = useCurrentTheme()

    return (
        <>
            {currentTheme === 'light' ? (
                <Link
                    href={'/'}
                    className="cursor-pointer relative hover:-translate-y-0.5 transition-transform"
                >
                    <Image
                        src={'/assets/logo.png'}
                        width={180}
                        height={180}
                        loading="lazy"
                        alt="Dietetyk Paula logo strony internetowej"
                    />
                </Link>
            ) : (
                <Link
                    href={'/'}
                    className="cursor-pointer relative hover:-translate-y-0.5 transition-transform"
                >
                    <Image
                        src={'/assets/logo-dark.png'}
                        width={180}
                        height={180}
                        objectFit="cover"
                        loading="lazy"
                        alt="Dietetyk Paula logo strony internetowej"
                    />
                </Link>
            )}
        </>
    )
}

export default HeaderLogo
