"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import styles from './DepressionScreener.module.css';

export default function Screener({
    title,
    questions,
    options,
    hint,
    reverseScored = [],
    getResult,
    disclaimer,
    preamble,
    negativeResult,
}) {
    const { t } = useLanguage();
    const effectiveDisclaimer = disclaimer || t('screener.disclaimer');
    const [hasAnsweredPreamble, setHasAnsweredPreamble] = useState(!preamble);
    const [preambleAnswer, setPreambleAnswer] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState(Array(questions.length).fill(null));
    const [showResult, setShowResult] = useState(false);

    const handleOptionSelect = (value) => {
        const newScores = [...scores];
        newScores[currentQuestion] = reverseScored.includes(currentQuestion)
            ? (options[options.length - 1].value - value)
            : value;
        setScores(newScores);

        if (currentQuestion < questions.length - 1) {
            setTimeout(() => setCurrentQuestion(currentQuestion + 1), 280);
        } else {
            setTimeout(() => setShowResult(true), 280);
        }
    };

    const reset = () => {
        setScores(Array(questions.length).fill(null));
        setCurrentQuestion(0);
        setShowResult(false);
        setPreambleAnswer(null);
        setHasAnsweredPreamble(!preamble);
    };

    const goBack = () => {
        if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
    };

    const totalScore = scores.reduce((a, b) => a + (b || 0), 0);
    const result = showResult ? getResult(totalScore) : null;

    if (preamble && !hasAnsweredPreamble) {
        return (
            <div className={styles.container}>
                <h3 className={styles.question} style={{ marginTop: '1rem', marginBottom: '2rem' }}>
                    {preamble.prompt}
                </h3>
                <div className={styles.options}>
                    <button
                        className={styles.optionBtn}
                        onClick={() => { setPreambleAnswer(true); setHasAnsweredPreamble(true); }}
                    >
                        {t('screener.yes')}
                    </button>
                    <button
                        className={styles.optionBtn}
                        onClick={() => { setPreambleAnswer(false); setHasAnsweredPreamble(true); }}
                    >
                        {t('screener.no')}
                    </button>
                </div>
            </div>
        );
    }

    if (preamble && preambleAnswer === false) {
        const r = negativeResult;
        return <ResultCard title={title} total={0} max={0} result={r} disclaimer={effectiveDisclaimer} onReset={reset} />;
    }

    if (showResult && result) {
        const max = questions.length * options[options.length - 1].value;
        return <ResultCard title={title} total={totalScore} max={max} result={result} disclaimer={effectiveDisclaimer} onReset={reset} />;
    }

    const progress = (currentQuestion / questions.length) * 100;
    const selectedValue = scores[currentQuestion];

    return (
        <div className={styles.container}>
            <div className={styles.progressHeader}>
                <span>{t('screener.questionOf').replace('{{current}}', currentQuestion + 1).replace('{{total}}', questions.length)}</span>
                <span>{Math.round(progress)}%</span>
            </div>
            <div className={styles.progress}>
                <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
            </div>

            <div className={styles.questionBlock} key={currentQuestion}>
                {hint && <span className={styles.questionHint}>{hint}</span>}
                <h3 className={styles.question}>
                    <span className={styles.number}>{currentQuestion + 1}.</span>
                    {questions[currentQuestion]}
                </h3>

                <div className={styles.options}>
                    {options.map((option) => {
                        const storedValue = reverseScored.includes(currentQuestion)
                            ? options[options.length - 1].value - selectedValue
                            : selectedValue;
                        const isSelected = storedValue === option.value;
                        return (
                            <button
                                key={option.value}
                                className={`${styles.optionBtn} ${isSelected ? styles.selected : ''}`}
                                onClick={() => handleOptionSelect(option.value)}
                            >
                                {option.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className={styles.controls}>
                <button
                    onClick={goBack}
                    disabled={currentQuestion === 0}
                    className={styles.backBtn}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {t('screener.back')}
                </button>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)' }}>
                    {t('screener.tapOption')}
                </span>
            </div>
        </div>
    );
}

function ResultCard({ title, total, max, result, disclaimer, onReset }) {
    const { t } = useLanguage();
    const radius = 75;
    const circumference = 2 * Math.PI * radius;
    const ratio = max > 0 ? Math.min(1, total / max) : 0;
    const dash = circumference * ratio;

    return (
        <div className={styles.container}>
            <div className={styles.resultHeader}>
                <h3>{t('screener.yourResult').replace('{{title}}', title)}</h3>
                <span>{t('screener.thanks')}</span>
            </div>

            <div className={styles.resultCircle}>
                <svg className={styles.resultSvg} viewBox="0 0 180 180">
                    <circle cx="90" cy="90" r={radius} fill="none" stroke="hsla(210, 30%, 50%, 0.12)" strokeWidth="10" />
                    <circle
                        cx="90" cy="90" r={radius}
                        fill="none"
                        stroke={result.color}
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeDasharray={`${dash} ${circumference - dash}`}
                        style={{ transition: 'stroke-dasharray 1s var(--ease-smooth)' }}
                    />
                </svg>
                <div className={styles.resultCircleInner}>
                    <span className={styles.score}>{total}</span>
                    <span className={styles.scoreLabel}>{max ? t('screener.scoreOf').replace('{{max}}', max) : t('screener.score')}</span>
                </div>
            </div>

            <div style={{ textAlign: 'center' }}>
                <span
                    className={styles.level}
                    style={{ color: result.color, background: `color-mix(in srgb, ${result.color} 15%, transparent)` }}
                >
                    {result.level}
                </span>
            </div>

            <p className={styles.resultDescription}>
                {result.description || result.level}
            </p>

            <div className={styles.resultDisclaimer}>
                ⚠️ {disclaimer}
            </div>

            <div className={styles.resultActions}>
                <button onClick={onReset} className="btn btn-outline">
                    {t('screener.retake')}
                </button>
                <Link href="/contact" className="btn btn-primary">
                    {t('screener.bookConsultation')}
                </Link>
            </div>
        </div>
    );
}
