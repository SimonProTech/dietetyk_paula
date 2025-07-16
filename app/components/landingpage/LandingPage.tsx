'use client'

import React from 'react'
import HeaderTopSection from '@/app/components/global/common/HeaderTopSection'
import LandingPageBottomAnimationComponent from '@/app/components/landingpage/LandingPageBottomAnimationComponent'
import { motion } from 'motion/react'
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
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.7,
                            duration: 0.9,
                        }}
                        className="text-6xl leading-16 font-light"
                    >
                        Twoje zdrowie zaczyna się na talerzu <br /> – ułóżmy je razem.
                    </motion.h1>
                </HeaderTopSection>
                <LandingPageBottomAnimationComponent />
                <div className="absolute w-[70vw]  mt-[-3vw] z-0 pointer-events-none h-full">
                    <div className="bg-[url(/assets/transparent_grid.svg)] h-full w-full object-cover inline-block " />
                </div>
            </div>
        </section>
    )
}

export default LandingPage
