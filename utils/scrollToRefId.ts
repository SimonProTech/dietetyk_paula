import { useRouter } from 'next/navigation'

export const scrollToElement = (targetName: string, router: ReturnType<typeof useRouter>) => {
    if (targetName === 'kontakt') {
        return router.push('/kontakt')
    }

    const target = document.getElementById(targetName)
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
    }

    return router.push(`/#${targetName.toLowerCase()}`)
}
