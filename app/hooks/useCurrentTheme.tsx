import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const useCurrentTheme = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    useEffect(() => {
        if (!theme) {
            setTheme('light')
            return
        }
        setTheme(theme!)
    }, [theme])

    const handleChangeColor = () => {
        if (currentTheme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    const currentTheme = mounted ? theme : undefined

    return {
        currentTheme,
        handleChangeColor,
    }
}

export default useCurrentTheme
