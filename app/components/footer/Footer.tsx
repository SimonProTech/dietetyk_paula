import React from 'react'
import HeaderLogo from '@/app/components/header/HeaderLogo'
import { InstagramIcon } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="pt-40 pb-20 flex flex-col justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center gap-10">
                <HeaderLogo />
                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="transition-all duration-500 hover:text-white rounded-md hover:bg-pink-400 hover:dark:bg-pink-600 hover:rounded-md p-2"
                >
                    <InstagramIcon size={35} className="cursor-pointer" />
                </a>
            </div>
            <div className="flex flex-col justify-center items-center gap-10">
                <div className="flex items-start gap-5">
                    <Link
                        className="opacity-80 hover:opacity-100 transition-all hover:-translate-y-1 duration-300"
                        href="/"
                    >
                        Strona główna
                    </Link>
                    <span>|</span>
                    <Link
                        className="opacity-80 hover:opacity-100 transition-all hover:-translate-y-1 duration-300"
                        href="/oferta"
                    >
                        Oferta
                    </Link>
                    <span>|</span>
                    <Link
                        className="opacity-80 hover:opacity-100 transition-all hover:-translate-y-1 duration-300"
                        href="/kontakt"
                    >
                        Kontakt
                    </Link>
                </div>
                <small>© {new Date().getFullYear()}</small>
                <small>
                    Strona stworzona przez: <span className="underline">Szymon Jocek</span>
                </small>
            </div>
        </footer>
    )
}

export default Footer
