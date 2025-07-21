import React from 'react'
import HeaderTopSection from '@/app/components/global/common/HeaderTopSection'
import { ContactForm } from '@/app/kontakt/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Kontakt | Dietetyk Paula',
    description: 'Skontaktuj się ze mną — zdrowe odżywianie, jadłospisy, konsultacje. Napisz i zacznij swoją zmianę już dziś!',
    openGraph: {
        type: 'website',
        locale: 'pl_PL',
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
        title: 'Kontakt | Dietetyk Paula',
        siteName: 'Dietetyk Paula',
        description: 'Skontaktuj się ze mną — zdrowe odżywianie, jadłospisy, konsultacje. Napisz i zacznij swoją zmianę już dziś!',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/og/kontakt.png`,
                alt: 'Zachęcający obraz przedstawiający zdrowe i kolorowe danie, idealne dla każdego, kto dąży do lepszego żywienia. Przygotowane z najświeższych składników, z miłością do smaku i dobroci.',
                type: 'image/jpg',
                width: 1200,
                height: 630,
                secureUrl: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/og/og-default.png`,
            },
        ],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/kontakt`,
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kontakt | Dietetyk Paula',
        description: 'Skontaktuj się ze mną — zdrowe odżywianie, jadłospisy, konsultacje. Napisz i zacznij swoją zmianę już dziś!',
        images: [`${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/og/kontakt.png`],
    },
    authors: [{ name: 'Dietetyk Paula' }],
    robots: {
        index: true,
        follow: true,
    },
}

const Contact = () => {
    return (
        <section className="relative">
            <div className="pt-[16vh] flex flex-col md:gap-32 gap-14 sm:gap-20 items-center w-full relative">
                <HeaderTopSection paragraphTopText="Skontaktuj się ze mną">
                    <h1 className="md:text-6xl text-5xl leading-18 font-light">
                        Bo zdrowe jedzenie <br /> to nie musi być rewolucja.
                    </h1>
                </HeaderTopSection>
                <div className="md:w-[70%] lg:w-[50%] w-[90%] relative z-[9999]">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default Contact
