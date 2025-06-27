import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export const metadata = {
    title: 'Ups! Strona nie znaleziona | DietetykPaula',
    description:
        'Nie możemy znaleźć strony, której szukasz. Sprawdź adres lub wróć na stronę główną.',
    robots: 'noindex, nofollow',
}

const NotFound = () => {
    return (
        <main className="h-screen flex md:flex-row md:gap-0 gap-20 flex-col items-center justify-center text-center p-8">
            <div className="relative">
                <Image src="/assets/404.svg" width={500} height={300} alt="404 - nie znaleziono" />
            </div>
            <div className="relative">
                <h1 className="text-4xl font-medium mb-4">😢 Ups! Taka oferta nie istnieje</h1>
                <p className="mb-6 text-lg text-gray-600">
                    Sprawdź adres lub wróć na stronę główną.
                </p>
                <Link
                    href="/"
                    className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
                >
                    Wróć do strony głównej
                </Link>
            </div>
        </main>
    )
}

export default NotFound
