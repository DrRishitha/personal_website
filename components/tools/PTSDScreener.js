"use client";

import Screener from './Screener';
import { pcPtsd5 } from '@/data/screenerQuestions';

const getResult = (score) => {
    for (const level of pcPtsd5.interpretation) {
        if (score <= level.max) return level;
    }
    return pcPtsd5.interpretation[pcPtsd5.interpretation.length - 1];
};

export default function PTSDScreener() {
    return (
        <Screener
            title="PTSD Screen"
            questions={pcPtsd5.questions}
            options={pcPtsd5.options}
            hint="In the past month, have you..."
            getResult={getResult}
            preamble={{ prompt: pcPtsd5.preamble }}
            negativeResult={{
                level: "Negative Screen",
                color: "hsl(150, 55%, 45%)",
                description: "Based on your response, a PTSD screening is not indicated at this time."
            }}
        />
    );
}
