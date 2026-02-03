"use client";

import { useState } from 'react';
import DepressionScreener from '@/components/tools/DepressionScreener';
import AnxietyScreener from '@/components/tools/AnxietyScreener';
import BreathingExercise from '@/components/tools/BreathingExercise';

export default function Tools() {
    const [activeTool, setActiveTool] = useState(null);

    const renderTool = () => {
        switch (activeTool) {
            case 'depression': return <DepressionScreener />;
            case 'anxiety': return <AnxietyScreener />;
            case 'breathing': return <BreathingExercise />;
            default: return null;
        }
    };

    return (
        <div className="container mt-lg mb-lg">
            <header className="text-center mb-lg">
                <h1>Self-Help Tools</h1>
                <p>Free, confidential resources to support your mental well-being.</p>
            </header>

            {activeTool ? (
                <div>
                    <button
                        onClick={() => setActiveTool(null)}
                        className="btn btn-outline"
                        style={{ marginBottom: '2rem' }}
                    >
                        ← Back to Tools
                    </button>
                    {renderTool()}
                </div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                        <h2>Depression Screener</h2>
                        <p style={{ margin: '1rem 0 2rem' }}>A simple PHQ-9 test to assess the severity of depressive symptoms.</p>
                        <button onClick={() => setActiveTool('depression')} className="btn btn-primary">Start Assessment</button>
                    </div>

                    <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                        <h2>Anxiety Screener</h2>
                        <p style={{ margin: '1rem 0 2rem' }}>GAD-7 questionnaire helps you understand your anxiety levels.</p>
                        <button onClick={() => setActiveTool('anxiety')} className="btn btn-primary">Start Assessment</button>
                    </div>

                    <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                        <h2>Guided Breathing</h2>
                        <p style={{ margin: '1rem 0 2rem' }}>A calm visual guide for box breathing to reduce stress instantly.</p>
                        <button onClick={() => setActiveTool('breathing')} className="btn btn-primary">Start Breathing</button>
                    </div>

                </div>
            )}
        </div>
    );
}
