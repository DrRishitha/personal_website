"use client";

import { useState } from 'react';
import Link from 'next/link';
import DepressionScreener from '@/components/tools/DepressionScreener';
import AnxietyScreener from '@/components/tools/AnxietyScreener';
import StressScreener from '@/components/tools/StressScreener';
import PTSDScreener from '@/components/tools/PTSDScreener';
import SleepScreener from '@/components/tools/SleepScreener';
import AddictionScreener from '@/components/tools/AddictionScreener';
import BreathingExercise from '@/components/tools/BreathingExercise';
import JPMRExercise from '@/components/tools/JPMRExercise';

const toolCards = [
    { id: 'depression', title: 'Depression Screener', icon: '🌧️', description: 'PHQ-9 test to assess the severity of depressive symptoms.', category: 'Screening' },
    { id: 'anxiety', title: 'Anxiety Screener', icon: '😰', description: 'GAD-7 questionnaire to understand your anxiety levels.', category: 'Screening' },
    { id: 'stress', title: 'Stress Scale', icon: '🔥', description: 'PSS-10 to measure your perceived stress over the last month.', category: 'Screening' },
    { id: 'ptsd', title: 'PTSD Screen', icon: '⚡', description: 'PC-PTSD-5 brief screen for post-traumatic stress disorder.', category: 'Screening' },
    { id: 'sleep', title: 'Sleep Quality', icon: '🌙', description: 'Insomnia Severity Index to assess your sleep difficulties.', category: 'Screening' },
    { id: 'addiction', title: 'Addiction Screen', icon: '🚫', description: 'CAGE questionnaire for alcohol-related concerns.', category: 'Screening' },
    { id: 'breathing-box', title: 'Box Breathing (4-4-4)', icon: '🫁', description: 'Guided 4-4-4 box breathing to reduce stress instantly.', category: 'Relaxation' },
    { id: 'breathing-426', title: 'Relaxing Breath (4-2-6)', icon: '🌊', description: 'The 4-2-6 breathing pattern for deep relaxation.', category: 'Relaxation' },
    { id: 'jpmr', title: 'Progressive Muscle Relaxation', icon: '💪', description: 'Guided JPMR session to systematically release body tension.', category: 'Relaxation' },
];

export default function Tools() {
    const [activeTool, setActiveTool] = useState(null);

    const renderTool = () => {
        switch (activeTool) {
            case 'depression': return <DepressionScreener />;
            case 'anxiety': return <AnxietyScreener />;
            case 'stress': return <StressScreener />;
            case 'ptsd': return <PTSDScreener />;
            case 'sleep': return <SleepScreener />;
            case 'addiction': return <AddictionScreener />;
            case 'breathing-box': return <BreathingExercise inhale={4} hold={4} exhale={4} title="Box Breathing" />;
            case 'breathing-426': return <BreathingExercise inhale={4} hold={2} exhale={6} title="Relaxing Breath" />;
            case 'jpmr': return <JPMRExercise />;
            default: return null;
        }
    };

    const screeningTools = toolCards.filter(t => t.category === 'Screening');
    const relaxationTools = toolCards.filter(t => t.category === 'Relaxation');

    return (
        <div className="container mt-lg mb-lg">
            <header className="text-center mb-lg">
                <h1>Self-Help Tools</h1>
                <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                    Free, confidential resources to support your mental well-being.
                </p>
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
                <>
                    {/* Screening Tools */}
                    <h2 className="text-center" style={{ marginBottom: '1.5rem' }}>Mental Health Screening</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                        {screeningTools.map(tool => (
                            <div key={tool.id} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{tool.icon}</div>
                                <h3 style={{ fontSize: '1.25rem' }}>{tool.title}</h3>
                                <p style={{ margin: '0.75rem auto 1.5rem', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{tool.description}</p>
                                <button onClick={() => setActiveTool(tool.id)} className="btn btn-primary">Start Assessment</button>
                            </div>
                        ))}
                    </div>

                    {/* Relaxation Tools */}
                    <h2 className="text-center" style={{ marginBottom: '1.5rem' }}>Relaxation &amp; Exercises</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                        {relaxationTools.map(tool => (
                            <div key={tool.id} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{tool.icon}</div>
                                <h3 style={{ fontSize: '1.25rem' }}>{tool.title}</h3>
                                <p style={{ margin: '0.75rem auto 1.5rem', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{tool.description}</p>
                                <button onClick={() => setActiveTool(tool.id)} className="btn btn-primary">Start Exercise</button>
                            </div>
                        ))}

                        {/* EMDR Link Card */}
                        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', border: '2px solid var(--color-accent)' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>👁️</div>
                            <h3 style={{ fontSize: '1.25rem' }}>Virtual EMDR Session</h3>
                            <p style={{ margin: '0.75rem auto 1.5rem', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Full guided EMDR session with bilateral stimulation for trauma processing.</p>
                            <Link href="/emdr" className="btn btn-primary" style={{ background: 'var(--color-accent)' }}>Open EMDR</Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
