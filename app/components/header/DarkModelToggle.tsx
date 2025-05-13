'use client'

import React from 'react'
import { Moon, Sun } from 'lucide-react'
import useCurrentTheme from '@/app/hooks/useCurrentTheme'

const DarkModeToggle = () => {
    const { handleChangeColor, currentTheme } = useCurrentTheme()
    return (
        <button
            title={`${currentTheme === 'dark' ? 'Tryb jasny' : 'Tryb ciemny'}`}
            className={`cursor-pointer
            ${currentTheme === 'light' ? 'hover:text-blue-600' : 'hover:text-yellow-400'} hover:scale-110 transition-all`}
            onClick={handleChangeColor}
        >
            {currentTheme === 'light' ? <Moon /> : <Sun />}
        </button>
    )
}

export default DarkModeToggle
