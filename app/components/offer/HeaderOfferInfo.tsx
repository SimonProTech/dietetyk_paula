'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Consulting from '@/app/components/offer/Consulting'
import FoodPlan from '@/app/components/offer/FoodPlan'
import { FullPlan } from '@/app/components/offer/FullPlan'

const HeaderOfferInfoSection = ({ offerTitle }: { offerTitle: string }) => {
    const path = usePathname()
    const lower = path.toLowerCase()

    const getTitle = () => {
        const uriTitle = decodeURIComponent(lower)
        if (uriTitle.includes('konsultacja')) return 'konsultacja'
        if (uriTitle.includes('jadłospis')) return 'jadłospis'
        if (uriTitle.includes('pakiet')) return 'pakiet'
        return offerTitle
    }

    const title = getTitle()

    return (
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl break-after-column font-bold dark:text-gray-50 text-gray-900 mb-6">
                Jak wygląda {offerTitle.toLowerCase()}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-12">
                Wszystko odbywa się online. Poniżej zobaczysz, jak wygląda cały proces.
            </p>
            {title === 'konsultacja' ? <Consulting title={offerTitle} /> : null}
            {title === 'jadłospis' ? <FoodPlan title={offerTitle} /> : null}
            {title === 'pakiet' ? <FullPlan /> : null}
        </div>
    )
}

export default HeaderOfferInfoSection
