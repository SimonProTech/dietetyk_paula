import { ofertaStaticDb } from '@/utils/oferta-static-db'
import { notFound } from 'next/navigation'
import HeaderTopSection from '@/app/components/global/common/HeaderTopSection'
import React from 'react'
import ContactMe from '@/app/components/offer/ContactMe'
import HeaderOfferInfoSection from '@/app/components/offer/HeaderOfferInfo'
import ScrollBottomMarqComponent from '@/app/components/global/common/ScrollBottomMarqComponent'
import HeaderImageAnimation from '@/app/components/offer/HeaderImageAnimation'
import OfferWhatYouGet from '@/app/components/offer/OfferWhatYouGet'
import OfferPriceTag from '@/app/components/offer/OfferPriceTag'
import OfferTab from '@/app/components/offer/OfferTab'
import OfferSeparator from '@/app/components/offer/OfferSeparator'

interface BlogPostPageProps {
    params: Promise<{ offer: string }>
}

export async function generateStaticParams() {
    return ofertaStaticDb.map((o) => ({
        offer: encodeURIComponent(o.title),
    }))
}
export const generateMetadata = async ({ params }:BlogPostPageProps ) => {
    const { offer } = await params
    const title = decodeURIComponent(offer)
    const fetchOffer = ofertaStaticDb.find((o) => o.title.toLowerCase() === title)

    if (!fetchOffer) {
        return {
            title: 'Nie znaleziono oferty',
            description: 'Strona, której szukasz, nie istnieje.',
            openGraph: {
                title: 'Nie znaleziono oferty',
                description: 'Strona, której szukasz, nie istnieje.',
                type: 'website',
                url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/oferta/${title}`,
                images: [
                    {
                        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/not-found.svg`,
                        width: 1200,
                        height: 630,
                        alt: 'Brak oferty',
                    },
                ],
            },
            twitter: {
                card: 'summary_large_image',
                title: 'Nie znaleziono oferty',
                description: 'Strona, której szukasz, nie istnieje.',
                images: [`${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/not-found.svg`],
            },
        }
    }

    return {
        title: fetchOffer.title,
        description: fetchOffer.shortDescription,
        authors: [{ name: 'DietetykPaula', url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}` }],
        keywords: [
            'dietetyka',
            'dietetyk',
            'dietetyk kliniczny',
            'plan',
            'plan żywieniowy',
            'zdrowa dieta',
            'konsultacja',
            'jadłospis',
            'smacznie',
            'zdrowo',
        ],
        robots: {
            index: true,
            follow: true,
            nocache: false,
        },
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/oferta/${encodeURIComponent(fetchOffer.title.toLowerCase())}`,
        },
        openGraph: {
            title: fetchOffer.title,
            description: fetchOffer.shortDescription,
            type: 'article',
            url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/oferta/${encodeURIComponent(fetchOffer.title.toLowerCase())}`,
            images: [
                {
                    url:
                        fetchOffer.url ||
                        `${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/og_default_image.png`,
                    width: 1200,
                    height: 630,
                    alt: fetchOffer.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: fetchOffer.title,
            description: fetchOffer.shortDescription,
            images: [fetchOffer.url || `${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/og_default_image.png`],
        },
    }
}
export default async function Page({params}: BlogPostPageProps) {
    const { offer } = await params;
    const title = decodeURIComponent(offer)
    const fetchOffer = ofertaStaticDb.find((o) => o.title.toLowerCase() === title)

    if (!fetchOffer) notFound()

    return (
        <main className="mx-auto container px-8 md:pt-32 pt-28 w-full">
            <HeaderTopSection paragraphTopText="Zdrowy start" />
            <div className="w-full flex mt-5 mb-10 justify-center items-center relative">
                <h1 className="text-4xl lg:text-5xl font-bold text-center dark:text-gray-50 text-gray-900 mb-8">
                    {fetchOffer.title}
                </h1>
            </div>
            <div className="grid min-[1100px]:grid-cols-2 grid-cols-1">
                <HeaderImageAnimation alt={fetchOffer.alt} url={fetchOffer.url} />
                <div className="flex flex-col justify-center min-[450px]:mt-0 mt-7 gap-5 text-sm lg:p-6 min-[450px]:p-4 p-2 dark:text-white text-black">
                    <OfferWhatYouGet whatYouGet={fetchOffer.whatYouGet} />
                    <OfferPriceTag price={fetchOffer.currentPrice} />
                </div>
            </div>
            <ScrollBottomMarqComponent
                textToMarquee={fetchOffer.title.includes('plan') ? 'Najlepsza ofera' : 'Super oferta'}
            />
            <OfferTab
                shortDescription={fetchOffer.shortDescription}
                longDescription={fetchOffer.longDescription}
            />
            <OfferSeparator />
            <div className="flex flex-col lg:flex-row justify-center items-start gap-10 mt-16 max-w-6xl mx-auto">
                <section className="pb-20 px-4">
                    <HeaderOfferInfoSection offerTitle={fetchOffer.title} />
                </section>
            </div>
            <div className='sm:flex sm:justify-center sm:items-center sm:w-full'>
                <ContactMe width='w-full' />
            </div>
        </main>
    )
}
