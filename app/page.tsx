import Image from "next/image";

export default function Home() {
  const alphabetSoundPairs = [
    { letter: 'A', image: '/letters/Aa.png', sound: '/sounds/a.mp3' },
    { letter: 'B', image: '/letters/Bb.png', sound: '/sounds/b.mp3' },
    { letter: 'C', image: '/letters/Cc.png', sound: '/sounds/c.mp3' },
    { letter: 'D', image: '/letters/Dd.png', sound: '/sounds/d.mp3' },
  ];

  const playSound = (sound: string) => {
    const audio = new Audio(sound);
    audio.play();

    return (
      <div>
        <h1>Click on a letter to hear its sound!</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {alphabetSoundPairs.map((l, i) => (
            <div
              key={i}
              onClick={() => playSound(l.sound)}
              style={{ cursor: 'pointer', textAlign: 'center' }}
            >
              <img
                src={l.image}
                alt={l.letter}
                width="100"
                height="100"
              />
              <p>{l.letter}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}