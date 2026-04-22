"use client";

import Screener from './Screener';

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

const getResult = (score) => {
    if (score <= 4) return {
        level: "Minimal Depression",
        color: "hsl(150, 55%, 45%)",
        description: "Your score suggests minimal or no depression. Keep taking care of yourself and maintaining healthy routines."
    };
    if (score <= 9) return {
        level: "Mild Depression",
        color: "hsl(50, 85%, 50%)",
        description: "Your responses suggest mild depression. Self-care, journaling, and connecting with others may help — consider a consultation if symptoms persist."
    };
    if (score <= 14) return {
        level: "Moderate Depression",
        color: "hsl(25, 90%, 55%)",
        description: "Your score indicates moderate depression. Professional support can help you feel better and learn effective coping strategies."
    };
    if (score <= 19) return {
        level: "Moderately Severe Depression",
        color: "hsl(5, 75%, 55%)",
        description: "Your score suggests moderately severe depression. We strongly encourage you to reach out to a mental health professional soon."
    };
    return {
        level: "Severe Depression",
        color: "hsl(0, 72%, 50%)",
        description: "Your score indicates severe depression. Please consider seeking professional help promptly. If you have thoughts of self-harm, call 1800-599-0019 (KIRAN) or 112."
    };
};

export default function DepressionScreener() {
    return (
        <Screener
            title="Depression"
            questions={questions}
            options={options}
            hint="Over the last 2 weeks, how often have you been bothered by..."
            getResult={getResult}
        />
    );
}
