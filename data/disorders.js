export const disorders = [
  {
    id: 'depression',
    title: 'Major Depressive Disorder',
    category: 'Mood Disorders',
    icon: '🌧️',
    briefDescription: 'A persistent feeling of sadness and loss of interest that interferes with daily functioning.',
    symptoms: [
      'Persistent sad or empty mood',
      'Loss of interest in activities once enjoyed',
      'Changes in appetite or weight',
      'Sleep disturbances',
      'Fatigue or loss of energy',
      'Feelings of worthlessness or guilt',
      'Difficulty concentrating',
      'Thoughts of death or suicide'
    ],
    treatmentApproaches: ['CBT', 'Medication (SSRIs, SNRIs)', 'Psychotherapy', 'Lifestyle changes'],
    whenToSeekHelp: 'If symptoms persist for more than two weeks and interfere with daily life.'
  },
  {
    id: 'gad',
    title: 'Generalized Anxiety Disorder',
    category: 'Anxiety Disorders',
    icon: '😰',
    briefDescription: 'Excessive, uncontrollable worry about everyday matters that is disproportionate to the actual situation.',
    symptoms: [
      'Excessive worry and anxiety',
      'Restlessness or feeling on edge',
      'Easily fatigued',
      'Difficulty concentrating',
      'Irritability',
      'Muscle tension',
      'Sleep problems'
    ],
    treatmentApproaches: ['CBT', 'Medication (SSRIs, Buspirone)', 'Relaxation techniques', 'Mindfulness'],
    whenToSeekHelp: 'When worry is persistent, hard to control, and affects your daily functioning.'
  },
  {
    id: 'ptsd',
    title: 'Post-Traumatic Stress Disorder',
    category: 'Trauma-Related Disorders',
    icon: '⚡',
    briefDescription: 'A condition triggered by experiencing or witnessing a terrifying event, causing flashbacks and severe anxiety.',
    symptoms: [
      'Intrusive memories or flashbacks',
      'Nightmares about the traumatic event',
      'Severe emotional distress',
      'Avoidance of reminders',
      'Negative changes in thinking and mood',
      'Hypervigilance and being easily startled',
      'Difficulty sleeping'
    ],
    treatmentApproaches: ['EMDR', 'Trauma-focused CBT', 'Medication', 'Exposure therapy'],
    whenToSeekHelp: 'If symptoms last more than a month and significantly impair your daily life.'
  },
  {
    id: 'ocd',
    title: 'Obsessive-Compulsive Disorder',
    category: 'Anxiety Disorders',
    icon: '🔄',
    briefDescription: 'Characterized by unreasonable thoughts and fears (obsessions) that lead to repetitive behaviors (compulsions).',
    symptoms: [
      'Unwanted, intrusive thoughts',
      'Repetitive behaviors or mental acts',
      'Fear of contamination',
      'Need for symmetry or order',
      'Aggressive or disturbing thoughts',
      'Excessive checking or counting',
      'Significant distress when rituals are interrupted'
    ],
    treatmentApproaches: ['ERP (Exposure and Response Prevention)', 'CBT', 'Medication (SSRIs)', 'Deep brain stimulation (severe cases)'],
    whenToSeekHelp: 'When obsessions and compulsions consume significant time and cause distress.'
  },
  {
    id: 'bipolar',
    title: 'Bipolar Disorder',
    category: 'Mood Disorders',
    icon: '🎭',
    briefDescription: 'A condition that causes extreme mood swings including emotional highs (mania) and lows (depression).',
    symptoms: [
      'Manic episodes: elevated mood, energy, reduced sleep need',
      'Depressive episodes: sadness, hopelessness, fatigue',
      'Impulsive or risky behavior during mania',
      'Racing thoughts and rapid speech',
      'Difficulty maintaining relationships',
      'Changes in activity levels',
      'Possible psychotic features'
    ],
    treatmentApproaches: ['Mood stabilizers (Lithium)', 'Atypical antipsychotics', 'Psychotherapy', 'Lifestyle management'],
    whenToSeekHelp: 'If you experience extreme mood swings that affect your relationships and daily functioning.'
  },
  {
    id: 'schizophrenia',
    title: 'Schizophrenia',
    category: 'Psychotic Disorders',
    icon: '🌀',
    briefDescription: 'A serious mental disorder affecting how a person thinks, feels, and behaves, often involving psychosis.',
    symptoms: [
      'Hallucinations (hearing or seeing things)',
      'Delusions (false beliefs)',
      'Disorganized thinking and speech',
      'Extremely disorganized behavior',
      'Reduced emotional expression',
      'Social withdrawal',
      'Difficulty with memory and attention'
    ],
    treatmentApproaches: ['Antipsychotic medications', 'Psychosocial therapy', 'Coordinated specialty care', 'Family support'],
    whenToSeekHelp: 'Immediately if experiencing hallucinations, delusions, or disorganized thinking.'
  },
  {
    id: 'adhd',
    title: 'ADHD',
    category: 'Neurodevelopmental Disorders',
    icon: '⚡',
    briefDescription: 'A neurodevelopmental disorder characterized by inattention, hyperactivity, and impulsivity that persists into adulthood.',
    symptoms: [
      'Difficulty sustaining attention',
      'Easily distracted',
      'Forgetfulness in daily activities',
      'Fidgeting or restlessness',
      'Difficulty waiting or taking turns',
      'Talking excessively',
      'Difficulty organizing tasks'
    ],
    treatmentApproaches: ['Stimulant medications', 'Behavioral therapy', 'CBT', 'Organizational skills training'],
    whenToSeekHelp: 'When attention and behavior difficulties significantly impact school, work, or relationships.'
  },
  {
    id: 'eating-disorders',
    title: 'Eating Disorders',
    category: 'Eating Disorders',
    icon: '🍽️',
    briefDescription: 'Serious conditions related to persistent eating behaviors that negatively impact health and daily functioning.',
    symptoms: [
      'Extreme restriction of food intake',
      'Binge eating episodes',
      'Purging behaviors',
      'Obsession with body weight or shape',
      'Distorted body image',
      'Withdrawal from social activities',
      'Physical signs: fatigue, dizziness, hair loss'
    ],
    treatmentApproaches: ['Nutritional counseling', 'CBT', 'Family-based therapy', 'Medication for co-occurring conditions'],
    whenToSeekHelp: 'If eating behaviors are causing physical health problems or emotional distress.'
  },
  {
    id: 'substance-use',
    title: 'Substance Use Disorder',
    category: 'Addiction Disorders',
    icon: '🚫',
    briefDescription: 'A condition in which the use of substances leads to clinically significant impairment or distress.',
    symptoms: [
      'Inability to control substance use',
      'Continued use despite harmful consequences',
      'Tolerance (needing more for same effect)',
      'Withdrawal symptoms when stopping',
      'Neglecting responsibilities',
      'Social and relationship problems',
      'Risky behavior while using'
    ],
    treatmentApproaches: ['Detoxification', 'MAT (Medication-Assisted Treatment)', 'CBT', '12-Step programs', 'Group therapy'],
    whenToSeekHelp: 'When substance use interferes with your health, work, or relationships.'
  },
  {
    id: 'panic-disorder',
    title: 'Panic Disorder',
    category: 'Anxiety Disorders',
    icon: '💓',
    briefDescription: 'Characterized by sudden, repeated episodes of intense fear accompanied by physical symptoms.',
    symptoms: [
      'Sudden intense fear or discomfort',
      'Heart palpitations or racing heart',
      'Sweating and trembling',
      'Shortness of breath',
      'Feeling of choking',
      'Chest pain',
      'Fear of losing control or dying'
    ],
    treatmentApproaches: ['CBT', 'Medication (SSRIs, Benzodiazepines short-term)', 'Breathing techniques', 'Exposure therapy'],
    whenToSeekHelp: 'If panic attacks are frequent and you develop fear of having another attack.'
  },
  {
    id: 'insomnia',
    title: 'Insomnia Disorder',
    category: 'Sleep Disorders',
    icon: '🌙',
    briefDescription: 'Persistent difficulty with sleep initiation, maintenance, or quality despite adequate opportunity for sleep.',
    symptoms: [
      'Difficulty falling asleep',
      'Waking up frequently during the night',
      'Waking up too early',
      'Daytime fatigue and sleepiness',
      'Irritability and mood disturbances',
      'Difficulty concentrating',
      'Worry about sleep'
    ],
    treatmentApproaches: ['CBT-I (CBT for Insomnia)', 'Sleep hygiene education', 'Relaxation techniques', 'Medication (short-term)'],
    whenToSeekHelp: 'If sleep problems persist for more than three months and affect daytime functioning.'
  },
  {
    id: 'personality-disorders',
    title: 'Personality Disorders',
    category: 'Personality Disorders',
    icon: '🪞',
    briefDescription: 'Enduring patterns of inner experience and behavior that deviate from cultural expectations and cause distress.',
    symptoms: [
      'Persistent patterns of thinking and behavior',
      'Difficulty maintaining relationships',
      'Intense or unstable emotions',
      'Impulsive behavior',
      'Identity disturbance',
      'Fear of abandonment',
      'Chronic feelings of emptiness'
    ],
    treatmentApproaches: ['DBT (Dialectical Behavior Therapy)', 'Schema therapy', 'Mentalization-based therapy', 'Group therapy'],
    whenToSeekHelp: 'When behavior patterns consistently cause problems in relationships and daily life.'
  }
];
