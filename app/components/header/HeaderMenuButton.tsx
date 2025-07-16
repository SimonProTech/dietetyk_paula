import React from 'react'
import { Salad } from 'lucide-react'
import { Button } from '@/components/ui/button'

const HeaderMenuButton = ({openModal}: {openModal: (x: boolean) => void}) => {
    return (
        <Button
            size='icon'
            aria-label="Otwórz menu"
            onClick={() => openModal(true)}
            className="cursor-pointer bg-pink-600 hover:bg-pink-700 transition-all duration-500 rounded-md"
        >
            <Salad className="text-white" size={21} />
        </Button>
    )
}

export default HeaderMenuButton
