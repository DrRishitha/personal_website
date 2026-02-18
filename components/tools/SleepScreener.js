"use client";

import { useState } from 'react';
import styles from './DepressionScreener.module.css';
import { isi } from '@/data/screenerQuestions';

export default function SleepScreener() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState(Array(isi.questions.length).fill(null));
    const [showResult, setShowResult] = useState(false);

    const handleOptionSelect = (value) => {
        const newScores = [...scores];
        newScores[currentQuestion] = value;
        setScores(newScores);

        if (currentQuestion < isi.questions.length - 1) {
            setTimeout(() => setCurrentQuestion(currentQuestion + 1), 250);
        } else {
            setShowResult(true);
        }
    };

    const reset = () => {
        setScores(Array(isi.questions.length).fill(null));
        setCurrentQuestion(0);
        setShowResult(false);
    };

    const totalScore = scores.reduce((a, b) => a + (b || 0), 0);

    const getInterpretation = (score) => {
        for (const level of isi.interpretation) {
            if (score <= level.max) return level;
        }
        return isi.interpretation[isi.interpretation.length - 1];
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
                    Your insomnia severity level: {result.level.toLowerCase()}.
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
                    style={{ width: `${((currentQuestion) / isi.questions.length) * 100}%` }}
                ></div>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1rem', textAlign: 'center' }}>
                Rate the severity over the last two weeks:
            </p>

            <h3 className={styles.question}>
                <span className={styles.number}>{currentQuestion + 1}.</span> {isi.questions[currentQuestion]}
            </h3>

            <div className={styles.options}>
                {isi.options.map((option) => (
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
