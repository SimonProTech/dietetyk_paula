'use client'

import React from 'react'
import { LoaderCircle, Moon, Sun } from 'lucide-react'
import useCurrentTheme from '@/app/hooks/useCurrentTheme'

interface DarkModeToggleI {
    size?: number
}

const DarkModeToggle = ({ size = 25 }: DarkModeToggleI) => {
    const { theme, toggleTheme, isMounted } = useCurrentTheme()

    if (!isMounted || !theme) {
        return <LoaderCircle className="animate-spin" />
    }

    return (
        <button
            title={`${theme === 'dark' ? 'Tryb jasny' : 'Tryb ciemny'}`}
            className={`cursor-pointer
            ${theme === 'light' ? 'hover:text-blue-600' : 'hover:text-yellow-400'} hover:scale-110 dark:bg-zinc-800 bg-white p-2 rounded-md transition-all`}
            onClick={toggleTheme}
        >
            {theme === 'light' ? <Moon size={size} /> : <Sun size={size} />}
        </button>
    )
}

export default DarkModeToggle
