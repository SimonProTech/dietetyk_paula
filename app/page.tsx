import LandingPage from '@/app/components/landingpage/LandingPage'
import MoreInfoAboutMe from '@/app/components/sections/MoreInfoAboutMe'
import AboutMeGridComponent from '@/app/components/sections/AboutMeGridComponent'
import OfertaSection from '@/app/components/sections/OfertaSection'
import LookingForSomethingSpecial from './components/sections/LookingForSomethingSpecial'
import OfertaCTA from '@/app/components/sections/OfertaCTA'
import SectionFaq from '@/app/components/sections/FAQ'
import Script from 'next/script'
import ScrollTop from '@/app/components/global/common/ScrollTop'

export default function Home() {
    return (
        <>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: 'Dietetyk Paula',
                        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
                        logo: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/logo.png`,
                        description:
                            'Specjalistka od żywienia oferująca jadłospisy i konsultacje online.',
                    }),
                }}
            />
            <LandingPage />
            <MoreInfoAboutMe />
            <AboutMeGridComponent />
            <OfertaSection />
            <LookingForSomethingSpecial />
            <OfertaCTA />
            <SectionFaq />
            <ScrollTop />
        </>
    )
}
