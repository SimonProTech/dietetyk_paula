'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Consulting from '@/app/components/offer/Consulting'
import FoodPlan from './FoodPlan'

const HeaderOfferInfoSection = ({ offerTitle }: { offerTitle: string }) => {
    const path = usePathname()
    const lower = path.toLowerCase()

    const getTitle = () => {
        const uriTitle = decodeURIComponent(lower)
        if (uriTitle.includes('konsultacja')) return 'konsultacja'
        if (uriTitle.includes('jadłospis')) return 'jadłospis'
        if (uriTitle.includes('plan')) return 'plan'
        return offerTitle
    }

    const title = getTitle()

    return (
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold dark:text-gray-50 text-gray-900 mb-6">
                Jak wygląda {title}?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-12">
                Wszystko odbywa się online. Poniżej zobaczysz, jak wygląda cały proces.
            </p>
            {title === 'konsultacja' ? <Consulting /> : null}
            {title === 'jadłospis' ? <FoodPlan /> : null}
        </div>
    )
}

export default HeaderOfferInfoSection
