import React from 'react'
import { Dot } from 'lucide-react'
import Marquee from 'react-fast-marquee'
import HeaderTopSection from '@/app/components/global/common/HeaderTopSection'

const LandingPage = () => {
    return (
        <section className="block">
            <div className="pt-[16vh] flex flex-col h-screen justify-between items-center w-full relative">
                <HeaderTopSection
                    paragraphTopText="dietetyk"
                    headingMainText="Pomogę Ci dobrać dietę, która nie tylko wspiera Twoje zdrowie, ale także
                            smakuje i cieszy. Razem stworzymy plan żywieniowy, który będzie
                            dopasowany do Twoich potrzeb i stylu życia."
                >
                    <h1 className="text-6xl leading-16 font-light">
                        Twoje zdrowie zaczyna się na talerzu <br /> – ułóżmy je razem.
                    </h1>
                </HeaderTopSection>
                <div className="pt-20 h-full z-50 w-full relative flex flex-col justify-end items-center">
                    <div className="flex w-full pb-3 items-center px-22 justify-between">
                        <p className="underline underline-offset-6 decoration-pink-400 dark:decoration-pink-600">
                            Małe kroki dziś,
                            <br /> wielkie zmiany jutro.
                        </p>
                        <a
                            className="
                            font-medium
                            opacity-75
                            dark:opacity-90
                            relative
                            transition-all
                            after:content-['']
                            after:w-20
                            hover:after:w-full
                            after:transition-all
                            after:h-[1.5px]
                            after:absolute
                            after:-bottom-2
                            after:left-0
                            after:ease-out
                            after:delay-100
                            after:dark:bg-pink-600
                            after:bg-pink-400
                            hover:opacity-100
                            before:content-['']
                            before:absolute
                            before:-bottom-2
                            before:left-0
                            before:w-full
                            before:bg-pink-100
                            after:duration-500
                            before:h-[1.5px]
                            "
                            href="mailto:dietetykpaulaantoniak@gmail.com"
                        >
                            dietetykpaulaantoniak@gmail.com
                        </a>
                    </div>
                    <Marquee className="text-[20vh] pointer-events-none uppercase font-light italic">
                        <div className="flex items-center space-x-10">
                            <div />
                            <Dot size={15} className="dark:decoration-pink-600 text-pink-400" />
                            <span className="tracking-wider">TWOJA DIETA</span>
                            <Dot size={15} className="dark:decoration-pink-600 text-pink-400" />
                            <span className="tracking-wider">TWOJE ZASADY</span>
                            <Dot size={15} className="dark:decoration-pink-600 text-pink-400" />
                            <span className="tracking-wider">TWOJE SMAKI</span>
                        </div>
                    </Marquee>
                </div>
                <div className="grid grid-background custom-grid z-10 grid-cols-2 grid-rows-2 relative" />
            </div>
        </section>
    )
}

export default LandingPage
