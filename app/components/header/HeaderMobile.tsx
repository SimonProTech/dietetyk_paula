    'use client'

    import React, { useContext } from 'react'
    import DarkModeToggle from '@/app/components/header/DarkModelToggle'
    import { ModalContext } from '@/app/components/global/modal-nav-provider'
    import HeaderMenuButton from '@/app/components/header/HeaderMenuButton'

    const HeaderMobile = () => {
        const context = useContext(ModalContext)
        return (
            <>
                <div className="flex md:hidden items-center gap-4">
                    <HeaderMenuButton openModal={context?.openModal!}/>
                    <DarkModeToggle />
                </div>
            </>
        )
    }

    export default HeaderMobile
