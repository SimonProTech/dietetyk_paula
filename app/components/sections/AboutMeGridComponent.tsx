'use client'

import React from 'react'
import DisableAnimationOnMobile from '@/app/components/global/DisableAnimationOnMobile'
import { motion as m } from 'framer-motion'
import Link from 'next/link'
import { CircleUser, GraduationCapIcon, MessageSquareHeart, Smile } from 'lucide-react'

const iconVariants = {
    initial: {
        opacity: 0,
        rotateX: 160,
    },
    whileInView: {
        opacity: 1,
        rotateX: 360,
    },
}

const pVariants = {
    initial: {
        opacity: 0,
        y: -20,
    },
    whileInView: {
        opacity: 1,
        y: 0,
    },
}

const hVariants = {
    initial: {
        opacity: 0,
    },
    whileInView: {
        opacity: 1,
    },
}
const AboutMeGridComponent = () => {
    return (
        <section className="mt-40 relative">
            <div className="container w-full mx-auto pl-5 pr-5 relative">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
                    <div className="xl:col-span-2 col-span-1 row-span-1">
                        <div className="flex flex-col justify-center dark:hover:shadow-md dark:shadow-pink-400 hover:shadow-xl transition-all duration-500 border-white dark:border-pink-300 dark:bg-black bg-white border-[1px] rounded-md md:p-12 p-8 h-full">
                            <DisableAnimationOnMobile>
                                <m.h2
                                    initial={{
                                        opacity: 0,
                                        y: 120,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        delay: 0.2,
                                        duration: 0.3,
                                    }}
                                    className="text-[40px] mb-6 font-bold"
                                >
                                    Wartości kierujące moją pracą!
                                </m.h2>
                                <m.p
                                    initial={{
                                        opacity: 0,
                                        y: 120,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        delay: 0.3,
                                    }}
                                    className="leading-10 text-lg mb-10"
                                >
                                    Prawdziwa wartość w pracy polega na pasji, zaangażowaniu i
                                    dążeniu do doskonałości.
                                    <br /> Moja praca w dziedzinie dietetyki motywuje mnie do
                                    pomagania ludziom osiągać zdrowie i dobre samopoczucie poprzez
                                    właściwe nawyki żywieniowe i styl życia.
                                </m.p>
                                <m.div
                                    initial={{
                                        y: 30,
                                        opacity: 0,
                                    }}
                                    whileInView={{
                                        y: 0,
                                        opacity: 1,
                                    }}
                                    transition={{
                                        delay: 0.3,
                                        duration: 0.5,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                >
                                    <Link
                                        href="/#oferta"
                                        className="dark:bg-pink-500 bg-black py-4 mb-8 sm:mb-0 px-20 hover:bg-pink-500 dark:hover:bg-pink-600 transition-all duration-500 z-50 relative hover:rounded-sm text-white text-xl text-center"
                                    >
                                        Oferta
                                    </Link>
                                </m.div>
                            </DisableAnimationOnMobile>
                        </div>
                    </div>
                    <div className="md:p-12 p-8 h-max m-auto border-white dark:hover:shadow-md dark:shadow-pink-400 hover:shadow-xl transition-all duration-500 dark:border-pink-300 border-[1px] dark:bg-black dark:border[1px] bg-white rounded-md">
                        <DisableAnimationOnMobile>
                            <m.div
                                initial="initial"
                                whileInView="whileInView"
                                variants={iconVariants}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: 0.2,
                                    duration: 0.6,
                                }}
                                className="dark:bg-pink-500 bg-pink-500 rounded-xl w-max p-3 mb-8"
                            >
                                <GraduationCapIcon className="text-white" width={40} height={40} />
                            </m.div>
                            <m.h2
                                className="font-bold text-3xl mb-5"
                                initial="initial"
                                whileInView="whileInView"
                                variants={hVariants}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: 0.2,
                                    duration: 0.5,
                                }}
                            >
                                Doświadczenie
                            </m.h2>
                            <m.p
                                initial="initial"
                                whileInView="whileInView"
                                variants={pVariants}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.6,
                                }}
                                className="text-left text-lg font-light leading-8"
                            >
                                Moje doświadczenie kliniczne oraz praktyczne umiejętności pozwalają
                                mi skutecznie wspierać zarówno kobiety jak i mężczyzn w drodze do
                                zdrowszego stylu życia i lepszych nawyków żywieniowych.
                            </m.p>
                        </DisableAnimationOnMobile>
                    </div>
                    <div className="md:p-12 p-8 h-max m-auto border-white dark:hover:shadow-md dark:shadow-pink-400 hover:shadow-xl transition-all duration-500  dark:border-pink-300 border-[1px] dark:bg-black dark:border[1px] bg-white rounded-md">
                        <DisableAnimationOnMobile>
                            <m.div
                                initial="initial"
                                whileInView="whileInView"
                                variants={iconVariants}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.6,
                                }}
                                className="dark:bg-pink-500 bg-pink-500 rounded-xl w-max p-3 mb-8"
                            >
                                <MessageSquareHeart className="text-white" width={40} height={40} />
                            </m.div>
                            <m.h2
                                initial="initial"
                                className="font-bold text-3xl mb-5"
                                whileInView="whileInView"
                                variants={hVariants}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: 0.2,
                                    duration: 0.5,
                                }}
                            >
                                Komunikacja
                            </m.h2>
                            <m.p
                                initial="initial"
                                whileInView="whileInView"
                                variants={pVariants}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.6,
                                }}
                                className="text-left text-lg font-light leading-8"
                            >
                                Jestem osobą bardzo komunikatywną, która potrafi efektywnie
                                nawiązywać kontakt z innymi. Moja umiejętność jasnego i skutecznego
                                przekazywania informacji oraz słuchania potrzeb innych pozwala mi
                                skutecznie budować relacje z klientami i kolegami zespołu. Zawsze
                                staram się tworzyć otwartą i przyjazną atmosferę, co sprzyja
                                efektywnej współpracy i rozwiązywaniu problemów.
                            </m.p>
                        </DisableAnimationOnMobile>
                    </div>
                    <div className="md:p-12 p-8 h-max m-auto dark:hover:shadow-md dark:shadow-pink-400 hover:shadow-xl transition-all duration-500  border-white dark:border-pink-300 border-[1px] dark:bg-black dark:border[1px] bg-white rounded-md">
                        <DisableAnimationOnMobile>
                            <m.div
                                initial="initial"
                                whileInView="whileInView"
                                variants={iconVariants}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: 0.4,
                                    duration: 0.6,
                                }}
                                className="dark:bg-pink-500 text-white bg-pink-500 rounded-xl w-max p-3 mb-8"
                            >
                                <Smile className="text-white" width={40} height={40} />
                            </m.div>
                            <m.h2
                                className="font-bold text-3xl mb-5"
                                initial="initial"
                                whileInView="whileInView"
                                variants={hVariants}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: 0.2,
                                    duration: 0.5,
                                }}
                            >
                                Empatia
                            </m.h2>
                            <m.p
                                initial="initial"
                                whileInView="whileInView"
                                variants={pVariants}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.6,
                                }}
                                className="text-left text-lg font-light leading-8"
                            >
                                Empatia jest jedną z moich największych sił. Zawsze staram się
                                zrozumieć perspektywę innych osób i ich potrzeby, co pomaga mi w
                                budowaniu zaufania i tworzeniu trwałych relacji z moimi klientami.
                                Moja zdolność do współczucia oraz gotowość do wsparcia innych w
                                trudnych sytuacjach stanowią fundament mojej pracy i podejścia do
                                każdej osoby indywidualnie.
                            </m.p>
                        </DisableAnimationOnMobile>
                    </div>
                    <div className="md:p-12 p-8 h-max m-auto dark:hover:shadow-md dark:shadow-pink-400 hover:shadow-xl transition-all duration-500  border-white dark:border-pink-300 border-[1px] dark:bg-black dark:border[1px] bg-white rounded-md">
                        <DisableAnimationOnMobile>
                            <m.div
                                initial="initial"
                                whileInView="whileInView"
                                variants={iconVariants}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: 0.5,
                                    duration: 0.6,
                                }}
                                className="dark:bg-pink-500 text-white bg-pink-500 rounded-xl w-max p-3 mb-8"
                            >
                                <CircleUser className="text-textColor" width={40} height={40} />
                            </m.div>
                            <m.h2
                                className="font-bold text-3xl mb-5"
                                initial="initial"
                                whileInView="whileInView"
                                variants={hVariants}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: 0.2,
                                    duration: 0.5,
                                }}
                            >
                                Potrzeby klienta
                            </m.h2>
                            <m.p
                                initial="initial"
                                whileInView="whileInView"
                                variants={pVariants}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.6,
                                }}
                                className="text-left text-lg font-light leading-8"
                            >
                                Rozumiem i priorytetuję potrzeby moich klientów, aby dostarczać im
                                spersonalizowane rozwiązania dietetyczne i wspierać ich drogę do
                                zdrowia i dobrej kondycji fizycznej.
                            </m.p>
                        </DisableAnimationOnMobile>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMeGridComponent
