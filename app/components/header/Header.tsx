'use client'

import HeaderLogo from '@/app/components/header/HeaderLogo'
import HeaderDesktop from '@/app/components/header/HeaderDesktop'
import HeaderMobile from '@/app/components/header/HeaderMobile'

const Header = () => {
    return (
        <div className="absolute top-0 z-50 w-full">
            <div className={`lg:container mx-auto pl-5 pr-5 w-full`}>
                <div className="flex justify-between items-center py-5">
                    <HeaderLogo />
                    <HeaderDesktop />
                    <HeaderMobile />
                </div>
            </div>
        </div>
    )
}

export default Header
