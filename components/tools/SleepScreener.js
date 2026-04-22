"use client";

import Screener from './Screener';
import { isi } from '@/data/screenerQuestions';

const getResult = (score) => {
    for (const level of isi.interpretation) {
        if (score <= level.max) return level;
    }
    return isi.interpretation[isi.interpretation.length - 1];
};

export default function SleepScreener() {
    return (
        <Screener
            title="Sleep Quality"
            questions={isi.questions}
            options={isi.options}
            hint="Rate the severity over the last two weeks:"
            getResult={getResult}
        />
    );
}
