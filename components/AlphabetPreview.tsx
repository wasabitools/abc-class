import { alphabetSoundPairs } from "@/constants/alphabet";
import LetterButton from "./LetterButton";


export default function AlphabetPreview() {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4 flex-wrap justify-center">
                {alphabetSoundPairs.map((item, index) => (
                    <LetterButton
                        key={index}
                        image={item.image}
                        letter={item.letter}
                        sound={item.sound}
                    />
                ))}
            </div>
        </div>
    )
}