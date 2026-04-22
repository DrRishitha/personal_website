"use client";

import Screener from './Screener';
import { pss10 } from '@/data/screenerQuestions';

const getResult = (score) => {
    for (const level of pss10.interpretation) {
        if (score <= level.max) return level;
    }
    return pss10.interpretation[pss10.interpretation.length - 1];
};

export default function StressScreener() {
    return (
        <Screener
            title="Perceived Stress"
            questions={pss10.questions}
            options={pss10.options}
            reverseScored={pss10.reverseScored}
            hint="In the last month..."
            getResult={getResult}
        />
    );
}
