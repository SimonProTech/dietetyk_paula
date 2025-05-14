import LandingPage from '@/app/components/landingpage/LandingPage'
import MoreInfoAboutMe from '@/app/components/sections/MoreInfoAboutMe'
import AboutMeGridComponent from '@/app/components/sections/AboutMeGridComponent'
import OfertaSection from '@/app/components/sections/OfertaSection'

export default function Home() {
    return (
        <>
            <LandingPage />
            <MoreInfoAboutMe />
            <AboutMeGridComponent />
            <OfertaSection />
        </>
    )
}
