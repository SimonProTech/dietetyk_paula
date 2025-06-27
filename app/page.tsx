import LandingPage from '@/app/components/landingpage/LandingPage'
import MoreInfoAboutMe from '@/app/components/sections/MoreInfoAboutMe'
import AboutMeGridComponent from '@/app/components/sections/AboutMeGridComponent'
import OfertaSection from '@/app/components/sections/OfertaSection'
import LookingForSomethingSpecial from './components/sections/LookingForSomethingSpecial'
import OfertaCTA from '@/app/components/sections/OfertaCTA'
import SectionFaq from '@/app/components/sections/FAQ'

export default function Home() {
    return (
        <>
            <LandingPage />
            <MoreInfoAboutMe />
            <AboutMeGridComponent />
            <OfertaSection />
            <LookingForSomethingSpecial />
            <OfertaCTA />
            <SectionFaq />
        </>
    )
}
