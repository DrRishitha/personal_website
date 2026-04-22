"use client";

import Screener from './Screener';
import { cage } from '@/data/screenerQuestions';

const getResult = (score) => {
    for (const level of cage.interpretation) {
        if (score <= level.max) return level;
    }
    return cage.interpretation[cage.interpretation.length - 1];
};

export default function AddictionScreener() {
    return (
        <Screener
            title="Alcohol Use"
            questions={cage.questions}
            options={cage.options}
            getResult={getResult}
        />
    );
}
