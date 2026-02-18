"use client";

import { useState } from 'react';
import styles from './DepressionScreener.module.css';
import { cage } from '@/data/screenerQuestions';

export default function AddictionScreener() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState(Array(cage.questions.length).fill(null));
    const [showResult, setShowResult] = useState(false);

    const handleOptionSelect = (value) => {
        const newScores = [...scores];
        newScores[currentQuestion] = value;
        setScores(newScores);

        if (currentQuestion < cage.questions.length - 1) {
            setTimeout(() => setCurrentQuestion(currentQuestion + 1), 250);
        } else {
            setShowResult(true);
        }
    };

    const reset = () => {
        setScores(Array(cage.questions.length).fill(null));
        setCurrentQuestion(0);
        setShowResult(false);
    };

    const totalScore = scores.reduce((a, b) => a + (b || 0), 0);

    const getInterpretation = (score) => {
        for (const level of cage.interpretation) {
            if (score <= level.max) return level;
        }
        return cage.interpretation[cage.interpretation.length - 1];
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
                    {totalScore >= cage.cutoff
                        ? 'Your responses suggest professional evaluation may be beneficial.'
                        : 'Your responses indicate low concern at this time.'}
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
                    style={{ width: `${((currentQuestion) / cage.questions.length) * 100}%` }}
                ></div>
            </div>

            <h3 className={styles.question}>
                <span className={styles.number}>{currentQuestion + 1}.</span> {cage.questions[currentQuestion]}
            </h3>

            <div className={styles.options}>
                {cage.options.map((option) => (
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
