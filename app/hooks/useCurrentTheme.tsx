import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const useCurrentTheme = () => {
    const { setTheme, theme } = useTheme()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const toggleTheme = () => {
        if (!theme) return // zapobiega błędom, gdy theme nie jest jeszcze dostępne
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return {
        toggleTheme,
        isMounted,
        theme: isMounted ? theme : null, // kontroluj dostęp do theme
    }
}

export default useCurrentTheme
