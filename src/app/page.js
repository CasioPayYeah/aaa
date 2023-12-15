'use client'
import { useState } from 'react';
import styles from './styles/Home.module.css';

export default function Home() {
    const [inputText, setInputText] = useState('');
    const [displayText, setDisplayText] = useState('');
    const [showInput, setShowInput] = useState(true);

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmit = () => {
        setDisplayText(inputText);
        setShowInput(false);
    };

    return (
        <div className="flex justify-center align-middle mt-48">
            {showInput && (
                <div className="flex flex-col gap-2">
                    ПОЖАЛУЙСТА ВВЕДИТЕ СВОЕ ИМЯ
                    <input type="text" value={inputText} onChange={handleInputChange} className="text-black"/>
                    <button className="border-2" onClick={handleSubmit}>Send</button>
                </div>
            )}
            {displayText && (
                <p className={styles.jumpingText}>{displayText} ИДИ НАХУЙ</p>
            )}
        </div>
    );
}

