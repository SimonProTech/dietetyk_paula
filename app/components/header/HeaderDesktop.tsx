import React from 'react'
import HeaderLink from '@/app/components/header/HeaderLink'
import DarkModeToggle from '@/app/components/header/DarkModelToggle'

const HeaderDesktop = () => {
    return (
        <div className={`md:flex hidden justify-end w-full`}>
            <div className="flex items-center gap-8">
                <HeaderLink text={'Oferta'} path="oferta" />
                <HeaderLink text={'Kontakt'} path="kontakt" />
                <HeaderLink text={'FAQ'} path="faq" />
                <DarkModeToggle />
            </div>
        </div>
    )
}

export default HeaderDesktop
