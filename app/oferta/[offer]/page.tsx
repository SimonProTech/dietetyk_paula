import { ofertaStaticDb } from '@/utils/oferta-static-db'
import { notFound } from 'next/navigation'
import HeaderTopSection from '@/app/components/global/common/HeaderTopSection'
import Image from 'next/image'
import { CalendarClock, CheckCircle, FileText, HandHeart, Mail, MessageSquare } from 'lucide-react'
import React from 'react'
import ContactMe from '@/app/components/offer/ContactMe'
import { USER_MANUAL } from '@/utils/how-to-buy'
import Step from '@/app/components/offer/Step'
import HeaderOfferInfo from '@/app/components/offer/HeaderOfferInfo'
import HeaderOfferInfoSection from '@/app/components/offer/HeaderOfferInfo'

export async function generateStaticParams() {
    return ofertaStaticDb.map((o) => ({
        offer: encodeURIComponent(o.title),
    }))
}

export default async function Page({ params }: { params: { offer: string } }) {
    const title = decodeURIComponent(params.offer)
    const offer = ofertaStaticDb.find((o) => o.title.toLowerCase() === title)

    if (!offer) notFound()

    return (
        <main className="mx-auto container px-8 pt-32 w-full">
            <HeaderTopSection paragraphTopText="Zdrowy start" />
            <div className="w-full flex mt-5 mb-10 justify-center items-center relative">
                <h1 className="text-4xl lg:text-5xl font-bold text-center dark:text-gray-50 text-gray-900 mb-8">
                    {offer.title}
                </h1>
            </div>
            <div className="grid min-[1100px]:grid-cols-2  grid-cols-1">
                <div className="flex justify-start md:justify-center min-[1100px]:mb-0 mb-10">
                    <Image
                        src={offer.url}
                        className="rounded-md pointer-events-none"
                        alt={offer.alt}
                        width={600}
                        height={600}
                    />
                </div>

                <div className="flex flex-col justify-center gap-5 text-sm lg:p-6 min-[450px]:p-4 p-2  dark:text-whitetext-black">
                    {offer.whatYouGet.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="flex min-[450px]:items-center items-start min-[450px]:flex-row flex-col gap-2 md:gap-5"
                            >
                                <HandHeart className="text-pink-600 min-w-[25px]" size={25} />
                                <span className="sm:text-[1rem] dark:text-white text-black text-sm min-[450px]:text-left">
                                    {item}
                                </span>
                            </div>
                        )
                    })}
                    {/*<ContactMe />*/}
                </div>
            </div>
            <div className="flex justify-center max-w-[50vw] mx-auto text-center leading-12 text-xl w-full items-center pt-20">
                <p className="prose dark:prose-invert mx-auto max-w-2xl text-center text-gray-700 text-lg leading-relaxed">
                    {offer.description}
                </p>
            </div>
            <div className="my-10 h-[1px] w-[30vw] mx-auto dark:bg-white bg-black"></div>
            <div className="flex flex-col lg:flex-row justify-center items-start gap-10 mt-16 max-w-6xl mx-auto">
                <section className="pb-20 px-4">
                    <HeaderOfferInfoSection offerTitle={offer.title} />
                </section>

                {/* Jak wygląda konsultacja */}
            </div>
            {/*<div className="flex justify-center items-center flex-col mt-10 space-y-8 bg-pink-50 dark:bg-pink-900 p-8 rounded-xl shadow-lg max-w-3xl mx-auto">*/}
            {/*    <h2 className="text-2xl font-semibold text-center text-pink-600">*/}
            {/*        Jak dokonać zakupu?*/}
            {/*    </h2>*/}
            {/*    <ol className="list-none space-y-5 text-left text-gray-700 dark:text-pink-200">*/}
            {/*        <li className="flex items-start space-x-3">*/}
            {/*            <Mail className="text-pink-600 mt-1" size={24} />*/}
            {/*            <span>*/}
            {/*                Skontaktuj się ze mną za pośrednictwem formularza lub bezpośrednio na*/}
            {/*                adres mailowy:{' '}*/}
            {/*                <a*/}
            {/*                    href="mailto:dietetykpaulaantoniak@gmail.com"*/}
            {/*                    className="font-medium underline underline-offset-2 hover:text-pink-700 dark:hover:text-pink-400"*/}
            {/*                >*/}
            {/*                    dietetykpaulaantoniak@gmail.com*/}
            {/*                </a>*/}
            {/*            </span>*/}
            {/*        </li>*/}
            {/*        {USER_MANUAL.map((step, index) => (*/}
            {/*            <li key={index} className="flex items-start space-x-3">*/}
            {/*                <CheckCircle className="text-pink-600 mt-1 min-w-[25px]" size={25} />*/}
            {/*                <span>{step}</span>*/}
            {/*            </li>*/}
            {/*        ))}*/}
            {/*    </ol>*/}
            {/*</div>*/}
            {/*<div className="flex justify-center items-center flex-col mt-16 space-y-6 bg-pink-50 dark:bg-pink-900 p-8 rounded-xl shadow-lg max-w-3xl mx-auto">*/}
            {/*    <h2 className="text-2xl font-semibold text-center text-pink-600">*/}
            {/*        Jak wygląda konsultacja?*/}
            {/*    </h2>*/}
            {/*    <div className="space-y-5 text-black dark:text-pink-100 text-left">*/}
            {/*        <p className="flex items-center space-x-3">*/}
            {/*            <MessageSquare className="text-pink-600" size={24} />*/}
            {/*            <span>*/}
            {/*                Konsultacja odbywa się w formie spotkania online (Google Meet / Zoom),*/}
            {/*                dzięki czemu możesz uczestniczyć z dowolnego miejsca.*/}
            {/*            </span>*/}
            {/*        </p>*/}
            {/*        <p className="flex items-center space-x-3">*/}
            {/*            <FileText className="text-pink-600" size={24} />*/}
            {/*            <span>*/}
            {/*                Na początku omawiamy Twoje potrzeby, cele zdrowotne oraz analizujemy*/}
            {/*                przesłane wcześniej dokumenty (kwestionariusz i dzienniczek).*/}
            {/*            </span>*/}
            {/*        </p>*/}
            {/*        <p className="flex items-center space-x-3">*/}
            {/*            <CalendarClock className="text-pink-600" size={24} />*/}
            {/*            <span>*/}
            {/*                Konsultacja trwa około <strong>{offer.howLongConsultationTime}</strong>{' '}*/}
            {/*                minut i w tym czasie odpowiadam na Twoje pytania, wyjaśniam zalecenia i*/}
            {/*                wspólnie ustalamy dalsze kroki.*/}
            {/*            </span>*/}
            {/*        </p>*/}
            {/*        <p className="flex items-center space-x-3">*/}
            {/*            <HandHeart className="text-pink-600" size={24} />*/}
            {/*            <span>*/}
            {/*                Po konsultacji otrzymasz dodatkowe materiały, jeśli będą potrzebne, oraz*/}
            {/*                możliwość kontaktu mailowego w razie dalszych pytań.*/}
            {/*            </span>*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="flex justify-center items-center w-full">
                <ContactMe />
            </div>
        </main>
    )
}
