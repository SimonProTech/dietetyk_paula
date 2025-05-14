import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const useCurrentTheme = () => {
    const { theme, setTheme, resolvedTheme } = useTheme()

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const currentTheme = mounted ? resolvedTheme : undefined

    const handleChangeColor = () => {
        setTheme(currentTheme === 'light' ? 'dark' : 'light')
    }

    return {
        currentTheme,
        handleChangeColor,
    }
}

export default useCurrentTheme
