import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dietetyk Paula',
    description:
        'Jestem dietetykiem oferującym spersonalizowane jadłospisy i konsultacje online. Pomagam w osiągnięciu celów żywieniowych i zdrowego stylu życia.',
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    metadataBase: new URL('https://dietetykpaula.pl'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'pl_PL',
        url: 'https://dietetykpaula.pl',
        title: 'Dietetyk Paula',
        siteName: 'Dietetyk Paula',
        description:
            'Jestem dietetykiem oferującym spersonalizowane jadłospisy i konsultacje online. Pomagam w osiągnięciu celów żywieniowych i zdrowego stylu życia.',
        images: [
            {
                url: 'https://dietetykpaula.pl/assets/og_default_image.png',
                alt: 'Zachęcający obraz przedstawiający zdrowe i kolorowe danie, idealne dla każdego, kto dąży do lepszego żywienia. Przygotowane z najświeższych składników, z miłością do smaku i dobroci.',
                type: 'image/jpg',
                width: 1200,
                height: 630,
                secureUrl: 'https://dietetykpaula.pl/assets/og_default_image.png',
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
