"use client";

import { useState } from 'react';
import styles from './DepressionScreener.module.css';

const questions = [
    "Little interest or pleasure in doing things",
    "Feeling down, depressed, or hopeless",
    "Trouble falling or staying asleep, or sleeping too much",
    "Feeling tired or having little energy",
    "Poor appetite or overeating",
    "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
    "Trouble concentrating on things, such as reading the newspaper or watching television",
    "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
    "Thoughts that you would be better off dead or of hurting yourself in some way"
];

const options = [
    { label: "Not at all", value: 0 },
    { label: "Several days", value: 1 },
    { label: "More than half the days", value: 2 },
    { label: "Nearly every day", value: 3 }
];

export default function DepressionScreener() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState(Array(questions.length).fill(null));
    const [showResult, setShowResult] = useState(false);

    const handleOptionSelect = (value) => {
        const newScores = [...scores];
        newScores[currentQuestion] = value;
        setScores(newScores);

        if (currentQuestion < questions.length - 1) {
            setTimeout(() => setCurrentQuestion(currentQuestion + 1), 250);
        } else {
            setShowResult(true);
        }
    };

    const reset = () => {
        setScores(Array(questions.length).fill(null));
        setCurrentQuestion(0);
        setShowResult(false);
    };

    const totalScore = scores.reduce((a, b) => a + (b || 0), 0);

    const getInterpretation = (score) => {
        if (score <= 4) return { level: "Minimal", color: "var(--color-primary)" };
        if (score <= 9) return { level: "Mild", color: "#eab308" };
        if (score <= 14) return { level: "Moderate", color: "#f97316" };
        if (score <= 19) return { level: "Moderately Severe", color: "#ef4444" };
        return { level: "Severe", color: "#dc2626" };
    };

    const result = getInterpretation(totalScore);

    if (showResult) {
        return (
            <div className={styles.container}>
                <h3 className="text-center">Results</h3>
                <div className={styles.resultCircle} style={{ borderColor: result.color }}>
                    <span className={styles.score}>{totalScore}</span>
                    <span className={styles.level} style={{ color: result.color }}>{result.level} Depression</span>
                </div>
                <p className="text-center" style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
                    Based on your answers, you may be experiencing symptoms of {result.level.toLowerCase()} depression.
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
                    style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                ></div>
            </div>

            <h3 className={styles.question}>
                <span className={styles.number}>{currentQuestion + 1}.</span> {questions[currentQuestion]}
            </h3>

            <div className={styles.options}>
                {options.map((option) => (
                    <button
                        key={option.value}
                        className={`${styles.optionBtn} ${scores[currentQuestion] === option.value ? styles.selected : ''}`}
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
