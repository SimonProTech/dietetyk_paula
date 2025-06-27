import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useCurrentTheme from '@/app/hooks/useCurrentTheme'

interface HeaderLogoI {
    width?: number
    height?: number
}

const HeaderLogo = ({ height = 180, width = 180 }: HeaderLogoI) => {
    return (
        <Link
            href="/"
            className="cursor-pointer relative hover:-translate-y-0.5 transition-transform"
        >
            <Image
                src="/assets/logo.png"
                width={width}
                height={height}
                priority
                alt="Logo light"
                className="block dark:hidden"
            />
            <Image
                src="/assets/logo-dark.png"
                width={width}
                height={height}
                priority
                alt="Logo dark"
                className="hidden dark:block"
            />
        </Link>
    )
}

export default HeaderLogo
