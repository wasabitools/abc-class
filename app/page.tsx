'use client'
import { useEffect, useState } from 'react';

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const alphabetSoundPairs = [
    { letter: 'A', image: '/letters/Aa.png', sound: '/sounds/a.mp3' },
    { letter: 'B', image: '/letters/Bb.png', sound: '/sounds/b.mp3' },
    { letter: 'C', image: '/letters/Cc.png', sound: '/sounds/c.mp3' },
    { letter: 'D', image: '/letters/Dd.png', sound: '/sounds/d.mp3' },
    // Add more letters here...
  ];

  const playSound = (sound: string) => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-pink-100 p-4">
      <h1 className="text-4xl font-bold text-center text-purple-600 mb-8 font-comic">
        Click on a letter to hear its sound!
      </h1>
      <div className="flex flex-col items-center gap-4">
        {/* Row 1 */}
        <div className="flex gap-4">
          {alphabetSoundPairs.slice(0, 4).map((l, i) => (
            <div
              key={i}
              className="w-20 h-20 rounded-full border-4 border-purple-400 flex items-center justify-center bg-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105 ripple"
              onClick={() => isClient && playSound(l.sound)}
            >
              <img src={l.image} alt={l.letter} className="w-12 h-12" />
            </div>
          ))}
        </div>
        {/* Add more rows as needed */}
      </div>
    </div>
  );
}
