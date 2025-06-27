import React from 'react'
import { InstagramIcon, Salad } from 'lucide-react'
import DarkModeToggle from '@/app/components/header/DarkModelToggle'
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'
import Link from 'next/link'
import HeaderLogo from '@/app/components/header/HeaderLogo'

const HeaderMobile = () => {
    return (
        <div className="flex md:hidden items-center gap-4">
            <Drawer direction="bottom">
                <DrawerTrigger asChild>
                    <button
                        aria-label="Otwórz menu"
                        className="cursor-pointer bg-pink-600 hover:bg-pink-700 transition-all duration-500 p-2 rounded-md"
                    >
                        <Salad className="text-white" size={25} />
                    </button>
                </DrawerTrigger>
                <DrawerContent
                    className={`sm:min-h-[50vh] min-h-[70vh] flex flex-col items-center gap-8 p-10`}
                >
                    <DrawerHeader>
                        <DrawerTitle>
                            <HeaderLogo />
                        </DrawerTitle>
                    </DrawerHeader>
                    <nav className="flex flex-col sm:flex-row items-center gap-5">
                        <Link
                            className="opacity-80 hover:opacity-100 transition-all hover:-translate-y-1 duration-300"
                            href="/"
                        >
                            Strona główna
                        </Link>
                        <span className="w-full sm:rotate-90 sm:w-12 h-[1px] bg-gray-200" />
                        <Link
                            className="opacity-80 hover:opacity-100 transition-all hover:-translate-y-1 duration-300"
                            href="/oferta"
                        >
                            Oferta
                        </Link>
                        <span className="w-full sm:rotate-90 sm:w-12 h-[1px] bg-gray-200" />
                        <Link
                            className="opacity-80 hover:opacity-100 transition-all hover:-translate-y-1 duration-300"
                            href="/kontakt"
                        >
                            Kontakt
                        </Link>
                    </nav>
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="transition-all duration-500 hover:text-white rounded-md hover:bg-pink-500 hover:dark:bg-pink-600 hover:rounded-md p-2"
                    >
                        <InstagramIcon size={25} className="cursor-pointer" />
                    </a>
                    <small className="text-center text-sm text-gray-500">
                        Strona stworzona przez: <span className="underline">Szymon Jocek</span>
                        <br />© {new Date().getFullYear()} — Wszelkie prawa zastrzeżone.
                    </small>
                </DrawerContent>
            </Drawer>
            <DarkModeToggle />
        </div>
    )
}

export default HeaderMobile
