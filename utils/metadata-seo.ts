import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dietetyk Paula',
    description:
        'Jestem dietetykiem oferującym spersonalizowane jadłospisy i konsultacje online. Pomagam w osiągnięciu celów żywieniowych i zdrowego stylu życia.',
    icons: {
        icon: [{ url: '/favicon.ico' }],
        apple: [{ url: '/apple-touch-icon.png' }],
    },
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_WEBSITE_URL}`),
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
    },
    openGraph: {
        type: 'website',
        locale: 'pl_PL',
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
        title: 'Dietetyk Paula',
        siteName: 'Dietetyk Paula',
        description:
            'Jestem dietetykiem oferującym spersonalizowane jadłospisy i konsultacje online. Pomagam w osiągnięciu celów żywieniowych i zdrowego stylu życia.',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/og_default_image.png`,
                alt: 'Zachęcający obraz przedstawiający zdrowe i kolorowe danie, idealne dla każdego, kto dąży do lepszego żywienia. Przygotowane z najświeższych składników, z miłością do smaku i dobroci.',
                type: 'image/jpg',
                width: 1200,
                height: 630,
                secureUrl: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/og_default_image.png`,
            },
        ],
    },
    keywords: [
        'dietetyk',
        'żywienie',
        'jadłospisy',
        'zdrowy styl życia',
        'konsultacje',
        'dieta',
        'zdrowo',
        'smacznie',
    ],
    authors: [{ name: 'Dietetyk Paula' }],
    robots: {
        index: true,
        follow: true,
    },
}
