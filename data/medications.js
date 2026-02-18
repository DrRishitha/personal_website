export const medicationDisclaimer = "This information is for educational purposes only. Never start, stop, or change any medication without consulting your psychiatrist. Self-medication can be dangerous.";

export const medicationCategories = [
  {
    category: 'Antidepressants',
    description: 'Medications used to treat depression, anxiety disorders, and certain other conditions.',
    commonMedications: [
      { name: 'SSRIs (Selective Serotonin Reuptake Inhibitors)', examples: 'Fluoxetine, Sertraline, Escitalopram', commonUses: 'Depression, anxiety, OCD, PTSD', importantNotes: 'May take 2-4 weeks to show full effect. Do not stop abruptly.' },
      { name: 'SNRIs (Serotonin-Norepinephrine Reuptake Inhibitors)', examples: 'Venlafaxine, Duloxetine', commonUses: 'Depression, anxiety, chronic pain', importantNotes: 'Monitor blood pressure. Gradual dose reduction recommended when stopping.' },
      { name: 'Tricyclic Antidepressants (TCAs)', examples: 'Amitriptyline, Imipramine', commonUses: 'Depression, neuropathic pain, insomnia', importantNotes: 'Older class with more side effects. Requires careful dosing.' },
      { name: 'Mirtazapine', examples: 'Mirtazapine', commonUses: 'Depression, insomnia, appetite stimulation', importantNotes: 'May cause weight gain and sedation.' }
    ]
  },
  {
    category: 'Anxiolytics (Anti-Anxiety)',
    description: 'Medications prescribed to reduce symptoms of anxiety.',
    commonMedications: [
      { name: 'Benzodiazepines', examples: 'Clonazepam, Lorazepam, Alprazolam', commonUses: 'Acute anxiety, panic disorder, insomnia', importantNotes: 'Risk of dependence with prolonged use. Typically prescribed short-term.' },
      { name: 'Buspirone', examples: 'Buspirone', commonUses: 'Generalized anxiety disorder', importantNotes: 'Non-addictive. Takes 2-4 weeks for full effect.' },
      { name: 'Beta-Blockers', examples: 'Propranolol', commonUses: 'Performance anxiety, physical symptoms of anxiety', importantNotes: 'Addresses physical symptoms like racing heart. Not for all types of anxiety.' }
    ]
  },
  {
    category: 'Mood Stabilizers',
    description: 'Medications used to manage mood swings, particularly in bipolar disorder.',
    commonMedications: [
      { name: 'Lithium', examples: 'Lithium Carbonate', commonUses: 'Bipolar disorder, mood stabilization', importantNotes: 'Requires regular blood level monitoring. Stay well hydrated.' },
      { name: 'Anticonvulsants', examples: 'Valproate, Carbamazepine, Lamotrigine', commonUses: 'Bipolar disorder, seizure disorders', importantNotes: 'Some require liver function monitoring. Lamotrigine requires slow dose titration.' }
    ]
  },
  {
    category: 'Antipsychotics',
    description: 'Medications used to manage psychotic symptoms and as adjuncts for mood disorders.',
    commonMedications: [
      { name: 'Atypical Antipsychotics', examples: 'Olanzapine, Risperidone, Quetiapine, Aripiprazole', commonUses: 'Schizophrenia, bipolar disorder, treatment-resistant depression', importantNotes: 'Monitor for metabolic changes (weight, blood sugar, cholesterol).' },
      { name: 'Typical Antipsychotics', examples: 'Haloperidol, Chlorpromazine', commonUses: 'Acute psychosis, schizophrenia', importantNotes: 'Higher risk of movement-related side effects.' }
    ]
  },
  {
    category: 'Sleep Aids',
    description: 'Medications prescribed for insomnia and sleep-related difficulties.',
    commonMedications: [
      { name: 'Non-Benzodiazepine Hypnotics', examples: 'Zolpidem, Eszopiclone', commonUses: 'Short-term insomnia treatment', importantNotes: 'Use lowest effective dose. Not for long-term use.' },
      { name: 'Melatonin Agonists', examples: 'Ramelteon, Melatonin', commonUses: 'Sleep onset difficulties, circadian rhythm disorders', importantNotes: 'Generally well-tolerated. Melatonin is available OTC.' },
      { name: 'Antihistamines', examples: 'Hydroxyzine, Diphenhydramine', commonUses: 'Mild insomnia, anxiety-related sleep issues', importantNotes: 'May cause daytime drowsiness. Tolerance can develop.' }
    ]
  },
  {
    category: 'ADHD Medications',
    description: 'Medications used to improve focus and reduce hyperactivity and impulsivity.',
    commonMedications: [
      { name: 'Stimulants', examples: 'Methylphenidate, Amphetamine salts', commonUses: 'ADHD in children and adults', importantNotes: 'Controlled substances. Monitor heart rate and appetite.' },
      { name: 'Non-Stimulants', examples: 'Atomoxetine, Guanfacine', commonUses: 'ADHD (when stimulants are not suitable)', importantNotes: 'Takes longer to show effect. Lower abuse potential.' }
    ]
  }
];
