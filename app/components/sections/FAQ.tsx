'use client'

import React, { useRef } from 'react'

import { domAnimation, LazyMotion, motion, useScroll, useTransform } from 'framer-motion'
import DisableAnimationOnMobile from '../global/DisableAnimationOnMobile'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import faqQuestion from '@/utils/FAQ'
import { BadgeHelp } from 'lucide-react'
import Image from 'next/image'

const fadeInAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
}

const SectionFaq = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end end'],
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1])
    return (
        <section className="relative container mx-auto px-4 py-2 pt-32">
            <div className="flex items-center w-max gap-2 mx-auto px-4 py-1 rounded-md bg-pink-600 mb-10">
                <BadgeHelp className="text-white" />
                <strong className="text-white">FAQ</strong>
            </div>
            <LazyMotion features={domAnimation}>
                <DisableAnimationOnMobile>
                    <motion.div
                        style={{
                            scale: scaleProgress,
                            opacity: scrollYProgress,
                            transition: '400ms ease-out',
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 2,
                        }}
                        ref={ref}
                        className="text-center"
                    >
                        <h2 className="mb-12 text-6xl">
                            Najczęstsze zadawane{' '}
                            <span className="md:whitespace-nowrap whitespace-normal">pytania</span>
                        </h2>
                        <p className="lg:mb-6 mb-6 font-normal leading-8 text-lg">
                            W sekcji <strong className="underline">FAQ</strong> znajdziesz
                            odpowiedzi na najczęściej zadawane pytania dotyczące zmiany diety.
                        </p>
                        <p className="lg:mb-6 mb-6 font-normal leading-8 text-lg">
                            Dowiesz się, jakie korzyści niesie zdrowe odżywianie, jakie są kluczowe
                            elementy dobrej diety i jak radzić sobie z wyzwaniami podczas
                            wprowadzania zmian w jadłospisie.
                        </p>
                        <p className="lg:mb-10 mb-10 font-normal leading-8 text-lg">
                            Niezależnie od tego, czy dopiero zaczynasz, czy chcesz poszerzyć swoją
                            wiedzę — sekcja FAQ będzie dla Ciebie cennym źródłem praktycznych
                            informacji i motywacji.
                        </p>
                    </motion.div>
                </DisableAnimationOnMobile>

                <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-10 p-4 md:p-8">
                    {/* Image section */}
                    <div className="relative flex-shrink-0 flex justify-center w-full lg:w-[40%] mb-6 lg:mb-0">
                        <Image
                            width={500}
                            height={500}
                            src="/assets/faq-img.svg"
                            alt="FAQ illustration"
                            className="w-full max-w-md h-auto object-contain"
                        />
                    </div>

                    {/* FAQ section */}
                    <div className="flex flex-col w-full lg:w-[60%]">
                        {faqQuestion.map((faq) => (
                            <motion.div
                                key={faq.id}
                                variants={fadeInAnimation}
                                initial="initial"
                                whileInView="animate"
                                transition={{ duration: 0.6 }}
                                className="w-full mb-4"
                            >
                                <Accordion type="single" collapsible>
                                    <AccordionItem
                                        value={faq.answer}
                                        className="
    rounded-2xl
    bg-white
    dark:bg-[#1a1a1a]
    border border-gray-200 dark:border-zinc-700
    shadow-lg
    overflow-hidden
    hover:scale-[1.02]
    transition-all duration-300
  "
                                    >
                                        <AccordionTrigger
                                            className="
                                                px-6 py-5
                                                text-lg font-semibold
                                                cursor-pointer
                                                text-[#E91E63]
                                                hover:no-underline
                                                dark:text-[#FF80AB]
                                                transition-colors duration-200
                                                                                "
                                        >
                                            {faq.id > 9 ? faq.id : `0${faq.id}`}) {faq.question}
                                        </AccordionTrigger>

                                        <AccordionContent className="px-8 py-6 bg-pink-50 dark:bg-[#2a2a2a] text-[#333] font-medium dark:text-[#ddd]">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </LazyMotion>
        </section>
    )
}

export default SectionFaq
