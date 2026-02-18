export const pss10 = {
  title: 'Perceived Stress Scale (PSS-10)',
  description: 'Measures how stressful you perceive situations in your life over the last month.',
  questions: [
    "In the last month, how often have you been upset because of something that happened unexpectedly?",
    "In the last month, how often have you felt that you were unable to control the important things in your life?",
    "In the last month, how often have you felt nervous and stressed?",
    "In the last month, how often have you felt confident about your ability to handle your personal problems?",
    "In the last month, how often have you felt that things were going your way?",
    "In the last month, how often have you found that you could not cope with all the things that you had to do?",
    "In the last month, how often have you been able to control irritations in your life?",
    "In the last month, how often have you felt that you were on top of things?",
    "In the last month, how often have you been angered because of things that were outside of your control?",
    "In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?"
  ],
  options: [
    { label: 'Never', value: 0 },
    { label: 'Almost Never', value: 1 },
    { label: 'Sometimes', value: 2 },
    { label: 'Fairly Often', value: 3 },
    { label: 'Very Often', value: 4 }
  ],
  reverseScored: [3, 4, 6, 7],
  interpretation: [
    { max: 13, level: 'Low Stress', color: 'var(--color-primary)' },
    { max: 26, level: 'Moderate Stress', color: '#eab308' },
    { max: 40, level: 'High Stress', color: '#ef4444' }
  ],
  maxScore: 40
};

export const pcPtsd5 = {
  title: 'PC-PTSD-5 Screen',
  description: 'A brief screen for Post-Traumatic Stress Disorder. Answer about experiences in the past month related to a stressful experience.',
  preamble: 'Sometimes things happen to people that are unusually or especially frightening, horrible, or traumatic. Have you ever experienced this type of event?',
  questions: [
    "Had nightmares about the event(s) or thought about the event(s) when you did not want to?",
    "Tried hard not to think about the event(s) or went out of your way to avoid situations that reminded you of the event(s)?",
    "Been constantly on guard, watchful, or easily startled?",
    "Felt numb or detached from people, activities, or your surroundings?",
    "Felt guilty or unable to stop blaming yourself or others for the event(s) or any problems the event(s) may have caused?"
  ],
  options: [
    { label: 'No', value: 0 },
    { label: 'Yes', value: 1 }
  ],
  interpretation: [
    { max: 2, level: 'Negative Screen', color: 'var(--color-primary)' },
    { max: 5, level: 'Positive Screen — Further Assessment Recommended', color: '#ef4444' }
  ],
  cutoff: 3,
  maxScore: 5
};

export const isi = {
  title: 'Insomnia Severity Index (ISI)',
  description: 'Assesses the nature, severity, and impact of insomnia over the last two weeks.',
  questions: [
    "Difficulty falling asleep",
    "Difficulty staying asleep",
    "Problem waking up too early",
    "How satisfied/dissatisfied are you with your current sleep pattern?",
    "How noticeable to others do you think your sleep problem is in terms of impairing the quality of your life?",
    "How worried/distressed are you about your current sleep problem?",
    "To what extent do you consider your sleep problem to interfere with your daily functioning?"
  ],
  options: [
    { label: 'None / Very Satisfied', value: 0 },
    { label: 'Mild / Satisfied', value: 1 },
    { label: 'Moderate / Neutral', value: 2 },
    { label: 'Severe / Dissatisfied', value: 3 },
    { label: 'Very Severe / Very Dissatisfied', value: 4 }
  ],
  interpretation: [
    { max: 7, level: 'No Clinically Significant Insomnia', color: 'var(--color-primary)' },
    { max: 14, level: 'Subthreshold Insomnia', color: '#eab308' },
    { max: 21, level: 'Moderate Insomnia', color: '#f97316' },
    { max: 28, level: 'Severe Insomnia', color: '#ef4444' }
  ],
  maxScore: 28
};

export const cage = {
  title: 'CAGE Questionnaire',
  description: 'A brief screening tool for alcohol-related problems.',
  questions: [
    "Have you ever felt you should Cut down on your drinking?",
    "Have people Annoyed you by criticizing your drinking?",
    "Have you ever felt bad or Guilty about your drinking?",
    "Have you ever had a drink first thing in the morning to steady your nerves or get rid of a hangover (Eye-opener)?"
  ],
  options: [
    { label: 'No', value: 0 },
    { label: 'Yes', value: 1 }
  ],
  interpretation: [
    { max: 1, level: 'Low Concern', color: 'var(--color-primary)' },
    { max: 4, level: 'Clinically Significant — Professional Evaluation Recommended', color: '#ef4444' }
  ],
  cutoff: 2,
  maxScore: 4
};
