import React from 'react'
import { Dot } from 'lucide-react'
import Marquee from 'react-fast-marquee'
import HeaderTopSection from '@/app/components/global/common/HeaderTopSection'

const LandingPage = () => {
    return (
        <section className="block">
            <div className="pt-[16vh] flex flex-col min-h-screen justify-between items-center w-full relative">
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
                <div className="md:pt-20 pt-16 h-full z-50 w-full relative flex flex-col justify-end items-center">
                    <div className="flex md:flex-row flex-col w-full md:gap-0 gap-10 pb-3 items-center px-12 lg:px-22 justify-between">
                        <p className="md:underline uppercase md:text-left font-thin md:font-normal text-lg md:text-current text-center md:underline-offset-6 md:decoration-pink-400 md:dark:decoration-pink-600">
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
                            dark:after:bg-pink-600
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
                            uppercase
                            "
                            href="mailto:dietetykpaulaantoniak@gmail.com"
                        >
                            dietetykpaulaantoniak@gmail.com
                        </a>
                    </div>
                    <Marquee className="text-[20vh] md:mt-0 mt-10 pointer-events-none uppercase font-light italic">
                        <div className="flex items-center space-x-10">
                            <div />
                            <Dot size={100} className="dark:text-pink-600 text-pink-400" />
                            <span className="tracking-wider">TWOJA DIETA</span>
                            <Dot size={100} className="dark:text-pink-600 text-pink-400" />
                            <span className="tracking-wider">TWOJE ZASADY</span>
                            <Dot size={100} className="dark:text-pink-600 text-pink-400" />
                            <span className="tracking-wider">TWOJE SMAKI</span>
                        </div>
                    </Marquee>
                </div>
                <div className="grid grid-background custom-grid-sm md:custom-grid z-10 grid-cols-2 grid-rows-2 relative" />
            </div>
        </section>
    )
}

export default LandingPage
