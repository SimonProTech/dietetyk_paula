import React from 'react'
import HeaderTopSection from '@/app/components/global/common/HeaderTopSection'
import ContactForm from '@/app/kontakt/components/ContactForm'

const Contact = () => {
    return (
        <section className="relative">
            <div className="pt-[16vh] flex flex-col md:gap-32 gap-20 items-center w-full relative">
                <HeaderTopSection paragraphTopText="Skontaktuj się ze mną">
                    <h1 className="md:text-6xl text-5xl leading-18 font-light">
                        Bo zdrowe jedzenie <br /> to nie musi być rewolucja.
                    </h1>
                </HeaderTopSection>
                <div className="md:w-[50%] w-[90%] relative z-[9999]">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default Contact
