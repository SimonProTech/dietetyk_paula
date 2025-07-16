import { useEffect, useState } from 'react'

export const useHash = () => {
    const [hash, setHash] = useState('')

    useEffect(() => {
        const updateHash = () => {
            setHash(window.location.hash)
        }

        updateHash() // ustaw hash przy pierwszym renderze
        window.addEventListener('hashchange', updateHash)

        return () => window.removeEventListener('hashchange', updateHash)
    }, [])

    return hash
}
