"use client";

import { useState } from 'react';
import styles from './DepressionScreener.module.css';
import { pss10 } from '@/data/screenerQuestions';

export default function StressScreener() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState(Array(pss10.questions.length).fill(null));
    const [showResult, setShowResult] = useState(false);

    const handleOptionSelect = (value) => {
        const newScores = [...scores];
        // Reverse score items 4, 5, 7, 8 (0-indexed: 3, 4, 6, 7)
        if (pss10.reverseScored.includes(currentQuestion)) {
            newScores[currentQuestion] = 4 - value;
        } else {
            newScores[currentQuestion] = value;
        }
        setScores(newScores);

        if (currentQuestion < pss10.questions.length - 1) {
            setTimeout(() => setCurrentQuestion(currentQuestion + 1), 250);
        } else {
            setShowResult(true);
        }
    };

    const reset = () => {
        setScores(Array(pss10.questions.length).fill(null));
        setCurrentQuestion(0);
        setShowResult(false);
    };

    const totalScore = scores.reduce((a, b) => a + (b || 0), 0);

    const getInterpretation = (score) => {
        for (const level of pss10.interpretation) {
            if (score <= level.max) return level;
        }
        return pss10.interpretation[pss10.interpretation.length - 1];
    };

    const result = getInterpretation(totalScore);

    if (showResult) {
        return (
            <div className={styles.container}>
                <h3 className="text-center">Results</h3>
                <div className={styles.resultCircle} style={{ borderColor: result.color }}>
                    <span className={styles.score}>{totalScore}</span>
                    <span className={styles.level} style={{ color: result.color }}>{result.level}</span>
                </div>
                <p className="text-center" style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
                    Your perceived stress level is: {result.level.toLowerCase()}.
                </p>
                <div className="text-center">
                    <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                        *This screening tool is not a medical diagnosis. Please consult with a professional.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button onClick={reset} className="btn btn-outline">Retake</button>
                        <a href="/contact" className="btn btn-primary">Book Consultation</a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.progress}>
                <div
                    className={styles.progressBar}
                    style={{ width: `${((currentQuestion) / pss10.questions.length) * 100}%` }}
                ></div>
            </div>

            <h3 className={styles.question}>
                <span className={styles.number}>{currentQuestion + 1}.</span> {pss10.questions[currentQuestion]}
            </h3>

            <div className={styles.options}>
                {pss10.options.map((option) => (
                    <button
                        key={option.value}
                        className={styles.optionBtn}
                        onClick={() => handleOptionSelect(option.value)}
                    >
                        {option.label}
                    </button>
                ))}
            </div>

            <div className={styles.controls}>
                <button
                    onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                    disabled={currentQuestion === 0}
                    className={styles.backBtn}
                >
                    Back
                </button>
            </div>
        </div>
    );
}
