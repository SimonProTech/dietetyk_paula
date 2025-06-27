'use client'
import NextTopLoader from 'nextjs-toploader'

import React from 'react'

const ProgressBarProvider = () => {
    return (
        <NextTopLoader
            color="#F6339A"
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            showAtBottom={false}
        />
    )
}

export default ProgressBarProvider
