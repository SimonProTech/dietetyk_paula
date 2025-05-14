import React from 'react'
import HeaderLink from '@/app/components/header/HeaderLink'
import DarkModeToggle from '@/app/components/header/DarkModelToggle'
import HeaderLogo from '@/app/components/header/HeaderLogo'


const Header = () => {
    return (
        <div className="absolute top-0 z-50 w-full">
            <div className="container mx-auto pl-5 pr-5 w-full">
                <div className="flex justify-between items-center py-5">
                    <HeaderLogo />
                    <div className="flex justify-end w-full">
                        <div className="flex items-center gap-8">
                            <HeaderLink text={'Oferta'} path="/oferta" />
                            <HeaderLink text={'Kontakt'} path="/kontakt" />
                            <DarkModeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
