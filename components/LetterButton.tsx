'use client'

import { useState, useEffect } from 'react';

interface LetterButtonProps {
    image: string
    letter: string
    sound: string
}

export default function LetterButton({ image, letter, sound }: LetterButtonProps) {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const playSound = () => {
        const audio = new Audio(sound)
        audio.play()
    }

    return (
        <button
            aria-label={`Play sound for letter ${letter}`}
            onClick={() => isClient && playSound()}
            className="w-8 h-8 rounded-full border-4 border-purple-400 flex items-center justify-center bg-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105 ripple"
        >
            <img src={image} alt={letter}  className="w-8 h-8 object-cover rounded-full" />
        </button>

    )
}
