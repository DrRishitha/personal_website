"use client";

import Screener from './Screener';

const questions = [
    "Feeling nervous, anxious, or on edge",
    "Not being able to stop or control worrying",
    "Worrying too much about different things",
    "Trouble relaxing",
    "Being so restless that it is hard to sit still",
    "Becoming easily annoyed or irritable",
    "Feeling afraid as if something awful might happen"
];

const options = [
    { label: "Not at all", value: 0 },
    { label: "Several days", value: 1 },
    { label: "More than half the days", value: 2 },
    { label: "Nearly every day", value: 3 }
];

const getResult = (score) => {
    if (score <= 4) return {
        level: "Minimal Anxiety",
        color: "hsl(150, 55%, 45%)",
        description: "Your score suggests minimal anxiety. Keep nurturing the practices that work for you."
    };
    if (score <= 9) return {
        level: "Mild Anxiety",
        color: "hsl(50, 85%, 50%)",
        description: "Your responses suggest mild anxiety. Try a guided breathing exercise — and consider a consultation if it interferes with daily life."
    };
    if (score <= 14) return {
        level: "Moderate Anxiety",
        color: "hsl(25, 90%, 55%)",
        description: "Your score indicates moderate anxiety. Evidence-based treatments like CBT can be highly effective."
    };
    return {
        level: "Severe Anxiety",
        color: "hsl(0, 72%, 50%)",
        description: "Your score suggests severe anxiety. Professional support can help you find meaningful relief — please consider reaching out."
    };
};

export default function AnxietyScreener() {
    return (
        <Screener
            title="Anxiety"
            questions={questions}
            options={options}
            hint="Over the last 2 weeks, how often have you been bothered by..."
            getResult={getResult}
        />
    );
}
