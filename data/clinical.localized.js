// Localized clinical data for English (en), Hindi (hi), and Telugu (te).
// Medication names and clinical abbreviations (SSRI, SNRI, TCA, MAT, CBT, EMDR,
// PHQ, GAD, PSS, ISI, CAGE, PC-PTSD) are intentionally retained in English
// across all locales. Numeric scoring fields, identifiers, durations, and
// color tokens are preserved verbatim per spec.

export const medicationDisclaimerByLang = {
  en: "This information is for educational purposes only. Never start, stop, or change any medication without consulting your psychiatrist. Self-medication can be dangerous.",
  hi: "यह जानकारी केवल शैक्षिक उद्देश्यों के लिए है। अपने मनोचिकित्सक से परामर्श किए बिना कभी भी कोई दवा शुरू, बंद या परिवर्तित न करें। स्व-चिकित्सा खतरनाक हो सकती है।",
  te: "ఈ సమాచారం కేవలం విద్యా ప్రయోజనాల కోసం మాత్రమే. మీ మనోవైద్యుడిని సంప్రదించకుండా ఏ మందునూ ప్రారంభించడం, నిలిపివేయడం లేదా మార్చడం చేయవద్దు. స్వీయ-చికిత్స ప్రమాదకరం కావచ్చు."
};

export const medicationCategoriesByLang = {
  en: [
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
  ],
  hi: [
    {
      category: 'अवसादरोधी (Antidepressants)',
      description: 'अवसाद, चिंता विकारों और कुछ अन्य स्थितियों के उपचार के लिए उपयोग की जाने वाली दवाइयाँ।',
      commonMedications: [
        { name: 'SSRIs (चयनात्मक सेरोटोनिन पुनर्ग्रहण अवरोधक)', examples: 'Fluoxetine, Sertraline, Escitalopram', commonUses: 'अवसाद, चिंता, OCD, PTSD', importantNotes: 'पूर्ण प्रभाव दिखाने में 2-4 सप्ताह लग सकते हैं। दवा अचानक बंद न करें।' },
        { name: 'SNRIs (सेरोटोनिन-नोरएपिनेफ्रिन पुनर्ग्रहण अवरोधक)', examples: 'Venlafaxine, Duloxetine', commonUses: 'अवसाद, चिंता, दीर्घकालिक दर्द', importantNotes: 'रक्तचाप पर निगरानी रखें। बंद करते समय धीरे-धीरे खुराक कम करने की सलाह दी जाती है।' },
        { name: 'ट्राईसाइक्लिक अवसादरोधी (TCAs)', examples: 'Amitriptyline, Imipramine', commonUses: 'अवसाद, तंत्रिका संबंधी दर्द, अनिद्रा', importantNotes: 'पुरानी श्रेणी की दवा जिसमें अधिक दुष्प्रभाव हो सकते हैं। सावधानीपूर्वक खुराक आवश्यक है।' },
        { name: 'Mirtazapine', examples: 'Mirtazapine', commonUses: 'अवसाद, अनिद्रा, भूख बढ़ाना', importantNotes: 'वजन बढ़ने और तंद्रा का कारण बन सकती है।' }
      ]
    },
    {
      category: 'चिंतानाशक (Anxiolytics — चिंता-विरोधी)',
      description: 'चिंता के लक्षणों को कम करने के लिए निर्धारित दवाइयाँ।',
      commonMedications: [
        { name: 'Benzodiazepines', examples: 'Clonazepam, Lorazepam, Alprazolam', commonUses: 'तीव्र चिंता, पैनिक डिसऑर्डर, अनिद्रा', importantNotes: 'लंबे समय तक उपयोग से निर्भरता का जोखिम। आम तौर पर अल्पकालिक रूप से दी जाती है।' },
        { name: 'Buspirone', examples: 'Buspirone', commonUses: 'सामान्यीकृत चिंता विकार (GAD)', importantNotes: 'व्यसनकारी नहीं। पूर्ण प्रभाव में 2-4 सप्ताह लगते हैं।' },
        { name: 'Beta-Blockers (बीटा-ब्लॉकर्स)', examples: 'Propranolol', commonUses: 'प्रदर्शन-संबंधी चिंता, चिंता के शारीरिक लक्षण', importantNotes: 'दिल की धड़कन तेज होने जैसे शारीरिक लक्षणों पर असर करती है। हर प्रकार की चिंता के लिए नहीं।' }
      ]
    },
    {
      category: 'मूड स्थिरीकारक (Mood Stabilizers)',
      description: 'मूड में उतार-चढ़ाव के प्रबंधन के लिए, विशेष रूप से बाइपोलर डिसऑर्डर में उपयोग की जाने वाली दवाइयाँ।',
      commonMedications: [
        { name: 'Lithium', examples: 'Lithium Carbonate', commonUses: 'बाइपोलर डिसऑर्डर, मूड स्थिरीकरण', importantNotes: 'नियमित रूप से रक्त-स्तर की जाँच आवश्यक। पर्याप्त पानी पीते रहें।' },
        { name: 'मिर्गीरोधी दवाइयाँ (Anticonvulsants)', examples: 'Valproate, Carbamazepine, Lamotrigine', commonUses: 'बाइपोलर डिसऑर्डर, मिर्गी विकार', importantNotes: 'कुछ दवाओं में यकृत-कार्य की निगरानी आवश्यक होती है। Lamotrigine की खुराक धीरे-धीरे बढ़ानी पड़ती है।' }
      ]
    },
    {
      category: 'मनोविकाररोधी (Antipsychotics)',
      description: 'मनोविक्षिप्त लक्षणों के प्रबंधन तथा मूड विकारों में सहायक के रूप में उपयोग की जाने वाली दवाइयाँ।',
      commonMedications: [
        { name: 'असामान्य (Atypical) मनोविकाररोधी', examples: 'Olanzapine, Risperidone, Quetiapine, Aripiprazole', commonUses: 'सिज़ोफ्रेनिया, बाइपोलर डिसऑर्डर, उपचार-प्रतिरोधी अवसाद', importantNotes: 'चयापचय संबंधी परिवर्तनों (वजन, रक्त-शर्करा, कोलेस्ट्रॉल) पर निगरानी रखें।' },
        { name: 'सामान्य (Typical) मनोविकाररोधी', examples: 'Haloperidol, Chlorpromazine', commonUses: 'तीव्र मनोविकृति, सिज़ोफ्रेनिया', importantNotes: 'गति-संबंधी दुष्प्रभावों का अधिक जोखिम।' }
      ]
    },
    {
      category: 'नींद की दवाइयाँ (Sleep Aids)',
      description: 'अनिद्रा और नींद से संबंधित कठिनाइयों के लिए निर्धारित दवाइयाँ।',
      commonMedications: [
        { name: 'गैर-Benzodiazepine सम्मोहक (Hypnotics)', examples: 'Zolpidem, Eszopiclone', commonUses: 'अल्पकालिक अनिद्रा का उपचार', importantNotes: 'सबसे कम प्रभावी खुराक का उपयोग करें। दीर्घकालिक उपयोग के लिए नहीं।' },
        { name: 'Melatonin उत्प्रेरक (Agonists)', examples: 'Ramelteon, Melatonin', commonUses: 'नींद आने में कठिनाई, सर्केडियन लय विकार', importantNotes: 'आम तौर पर अच्छी तरह सहन होती है। Melatonin बिना पर्ची (OTC) उपलब्ध है।' },
        { name: 'एंटीहिस्टामाइन्स (Antihistamines)', examples: 'Hydroxyzine, Diphenhydramine', commonUses: 'हल्की अनिद्रा, चिंता-संबंधी नींद की समस्याएँ', importantNotes: 'दिन में तंद्रा हो सकती है। सहनशीलता विकसित हो सकती है।' }
      ]
    },
    {
      category: 'ADHD की दवाइयाँ',
      description: 'ध्यान केंद्रित करने में सुधार और अति-सक्रियता तथा आवेगशीलता को कम करने के लिए उपयोग की जाने वाली दवाइयाँ।',
      commonMedications: [
        { name: 'उत्तेजक (Stimulants)', examples: 'Methylphenidate, Amphetamine लवण', commonUses: 'बच्चों और वयस्कों में ADHD', importantNotes: 'नियंत्रित पदार्थ। हृदय-गति और भूख की निगरानी रखें।' },
        { name: 'गैर-उत्तेजक (Non-Stimulants)', examples: 'Atomoxetine, Guanfacine', commonUses: 'ADHD (जब उत्तेजक उपयुक्त न हों)', importantNotes: 'प्रभाव दिखने में अधिक समय लगता है। दुरुपयोग की संभावना कम।' }
      ]
    }
  ],
  te: [
    {
      category: 'మాంద్యంనిరోధకాలు (Antidepressants)',
      description: 'డిప్రెషన్, యాంగ్జైటీ రుగ్మతలు మరియు కొన్ని ఇతర పరిస్థితుల చికిత్సకు ఉపయోగించే మందులు.',
      commonMedications: [
        { name: 'SSRIs (సెలెక్టివ్ సెరోటోనిన్ రీఅప్‌టేక్ ఇన్‌హిబిటర్స్)', examples: 'Fluoxetine, Sertraline, Escitalopram', commonUses: 'డిప్రెషన్, యాంగ్జైటీ, OCD, PTSD', importantNotes: 'పూర్తి ప్రభావం చూపడానికి 2-4 వారాలు పట్టవచ్చు. అకస్మాత్తుగా ఆపవద్దు.' },
        { name: 'SNRIs (సెరోటోనిన్-నోరెపినెఫ్రిన్ రీఅప్‌టేక్ ఇన్‌హిబిటర్స్)', examples: 'Venlafaxine, Duloxetine', commonUses: 'డిప్రెషన్, యాంగ్జైటీ, దీర్ఘకాలిక నొప్పి', importantNotes: 'రక్తపోటును పర్యవేక్షించండి. ఆపేటప్పుడు క్రమంగా మోతాదు తగ్గించడం సూచించబడింది.' },
        { name: 'ట్రైసైక్లిక్ యాంటిడిప్రెసెంట్స్ (TCAs)', examples: 'Amitriptyline, Imipramine', commonUses: 'డిప్రెషన్, నాడీ సంబంధ నొప్పి, నిద్రలేమి', importantNotes: 'పాత తరగతి, ఎక్కువ దుష్ప్రభావాలు ఉండవచ్చు. జాగ్రత్తగా మోతాదు అవసరం.' },
        { name: 'Mirtazapine', examples: 'Mirtazapine', commonUses: 'డిప్రెషన్, నిద్రలేమి, ఆకలి పెంచడం', importantNotes: 'బరువు పెరగడం మరియు మగతను కలిగించవచ్చు.' }
      ]
    },
    {
      category: 'యాంగ్జియోలైటిక్స్ (యాంగ్జైటీ-నిరోధకాలు)',
      description: 'యాంగ్జైటీ లక్షణాలను తగ్గించడానికి సూచించే మందులు.',
      commonMedications: [
        { name: 'Benzodiazepines', examples: 'Clonazepam, Lorazepam, Alprazolam', commonUses: 'తీవ్ర యాంగ్జైటీ, పానిక్ డిసార్డర్, నిద్రలేమి', importantNotes: 'దీర్ఘకాలం వాడితే ఆధారపడే ప్రమాదం. సాధారణంగా స్వల్పకాలికంగా సూచిస్తారు.' },
        { name: 'Buspirone', examples: 'Buspirone', commonUses: 'జనరలైజ్డ్ యాంగ్జైటీ డిసార్డర్ (GAD)', importantNotes: 'వ్యసనకారి కాదు. పూర్తి ప్రభావానికి 2-4 వారాలు పడుతుంది.' },
        { name: 'Beta-Blockers (బీటా-బ్లాకర్స్)', examples: 'Propranolol', commonUses: 'ప్రదర్శన-సంబంధ యాంగ్జైటీ, యాంగ్జైటీ యొక్క శారీరక లక్షణాలు', importantNotes: 'గుండె వేగంగా కొట్టుకోవడం వంటి శారీరక లక్షణాలను తగ్గిస్తుంది. అన్ని రకాల యాంగ్జైటీలకు కాదు.' }
      ]
    },
    {
      category: 'మూడ్ స్థిరీకారకాలు (Mood Stabilizers)',
      description: 'మూడ్‌లో మార్పులను, ముఖ్యంగా బైపోలార్ డిసార్డర్‌లో, నిర్వహించడానికి ఉపయోగించే మందులు.',
      commonMedications: [
        { name: 'Lithium', examples: 'Lithium Carbonate', commonUses: 'బైపోలార్ డిసార్డర్, మూడ్ స్థిరీకరణ', importantNotes: 'క్రమం తప్పకుండా రక్త-స్థాయి పర్యవేక్షణ అవసరం. తగినంత నీరు తాగండి.' },
        { name: 'యాంటీకన్వల్సెంట్స్ (Anticonvulsants)', examples: 'Valproate, Carbamazepine, Lamotrigine', commonUses: 'బైపోలార్ డిసార్డర్, ఫిట్స్ రుగ్మతలు', importantNotes: 'కొన్నింటికి కాలేయ పనితీరు పర్యవేక్షణ అవసరం. Lamotrigine నెమ్మదిగా మోతాదు పెంచాలి.' }
      ]
    },
    {
      category: 'యాంటిసైకోటిక్స్ (Antipsychotics)',
      description: 'మనోవికార లక్షణాలను నిర్వహించడానికి మరియు మూడ్ రుగ్మతలకు సహాయక మందులుగా ఉపయోగిస్తారు.',
      commonMedications: [
        { name: 'అటిపికల్ యాంటిసైకోటిక్స్', examples: 'Olanzapine, Risperidone, Quetiapine, Aripiprazole', commonUses: 'స్కిజోఫ్రెనియా, బైపోలార్ డిసార్డర్, చికిత్స-నిరోధక డిప్రెషన్', importantNotes: 'జీవక్రియ మార్పుల (బరువు, రక్త-చక్కెర, కొలెస్ట్రాల్) గురించి పర్యవేక్షించండి.' },
        { name: 'టిపికల్ యాంటిసైకోటిక్స్', examples: 'Haloperidol, Chlorpromazine', commonUses: 'తీవ్ర మనోవికారం, స్కిజోఫ్రెనియా', importantNotes: 'కదలికలకు సంబంధించిన దుష్ప్రభావాల ఎక్కువ ప్రమాదం.' }
      ]
    },
    {
      category: 'నిద్ర సహాయకాలు (Sleep Aids)',
      description: 'నిద్రలేమి మరియు నిద్ర-సంబంధ సమస్యలకు సూచించే మందులు.',
      commonMedications: [
        { name: 'నాన్-Benzodiazepine హిప్నోటిక్స్', examples: 'Zolpidem, Eszopiclone', commonUses: 'స్వల్పకాలిక నిద్రలేమి చికిత్స', importantNotes: 'అతి తక్కువ ప్రభావవంతమైన మోతాదు వాడండి. దీర్ఘకాలికంగా వాడకూడదు.' },
        { name: 'Melatonin అగోనిస్ట్‌లు', examples: 'Ramelteon, Melatonin', commonUses: 'నిద్రపట్టే కష్టాలు, సర్కేడియన్ లయ రుగ్మతలు', importantNotes: 'సాధారణంగా బాగా సహించబడుతుంది. Melatonin OTC (ప్రిస్క్రిప్షన్ లేకుండా) లభిస్తుంది.' },
        { name: 'యాంటీహిస్టమైన్‌లు (Antihistamines)', examples: 'Hydroxyzine, Diphenhydramine', commonUses: 'తేలికపాటి నిద్రలేమి, యాంగ్జైటీ-సంబంధ నిద్ర సమస్యలు', importantNotes: 'పగటివేళ మగత కలిగించవచ్చు. సహనశీలత అభివృద్ధి కావచ్చు.' }
      ]
    },
    {
      category: 'ADHD మందులు',
      description: 'ఏకాగ్రతను మెరుగుపరచడానికి మరియు అతి-చురుకుదనం, ఆవేశశీలతను తగ్గించడానికి ఉపయోగించే మందులు.',
      commonMedications: [
        { name: 'ఉత్తేజకాలు (Stimulants)', examples: 'Methylphenidate, Amphetamine లవణాలు', commonUses: 'పిల్లలు మరియు పెద్దలలో ADHD', importantNotes: 'నియంత్రిత పదార్థాలు. గుండె వేగం మరియు ఆకలిని పర్యవేక్షించండి.' },
        { name: 'నాన్-ఉత్తేజకాలు (Non-Stimulants)', examples: 'Atomoxetine, Guanfacine', commonUses: 'ADHD (ఉత్తేజకాలు సరిపోనప్పుడు)', importantNotes: 'ప్రభావం చూపించడానికి ఎక్కువ సమయం పడుతుంది. దుర్వినియోగ ప్రమాదం తక్కువ.' }
      ]
    }
  ]
};

// PSS-10 stress scale
export const pss10ByLang = {
  en: {
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
  },
  hi: {
    title: 'अनुभूत तनाव पैमाना (PSS-10)',
    description: 'पिछले महीने में आपने अपने जीवन की स्थितियों को कितना तनावपूर्ण माना, यह मापता है।',
    questions: [
      "पिछले महीने में, अप्रत्याशित रूप से कुछ घटित होने के कारण आप कितनी बार परेशान हुए हैं?",
      "पिछले महीने में, आपको कितनी बार ऐसा महसूस हुआ कि आप अपने जीवन की महत्वपूर्ण बातों को नियंत्रित नहीं कर पा रहे हैं?",
      "पिछले महीने में, आप कितनी बार घबराहट और तनाव महसूस करते रहे हैं?",
      "पिछले महीने में, आप अपनी व्यक्तिगत समस्याओं को संभालने की अपनी क्षमता के बारे में कितनी बार आत्मविश्वासी महसूस करते रहे हैं?",
      "पिछले महीने में, आपको कितनी बार ऐसा लगा कि चीज़ें आपके पक्ष में जा रही हैं?",
      "पिछले महीने में, आपको कितनी बार ऐसा लगा कि आप उन सभी कामों को नहीं निभा पा रहे हैं जो आपको करने थे?",
      "पिछले महीने में, आप अपने जीवन की चिड़चिड़ाहटों को कितनी बार नियंत्रित कर पाए हैं?",
      "पिछले महीने में, आपको कितनी बार ऐसा लगा कि सब कुछ आपके वश में है?",
      "पिछले महीने में, आप अपने नियंत्रण से बाहर की बातों के कारण कितनी बार क्रोधित हुए हैं?",
      "पिछले महीने में, आपको कितनी बार ऐसा लगा कि कठिनाइयाँ इतनी अधिक बढ़ गई हैं कि आप उन पर पार नहीं पा सकते?"
    ],
    options: [
      { label: 'कभी नहीं', value: 0 },
      { label: 'लगभग कभी नहीं', value: 1 },
      { label: 'कभी-कभी', value: 2 },
      { label: 'अक्सर', value: 3 },
      { label: 'बहुत बार', value: 4 }
    ],
    reverseScored: [3, 4, 6, 7],
    interpretation: [
      { max: 13, level: 'कम तनाव', color: 'var(--color-primary)' },
      { max: 26, level: 'मध्यम तनाव', color: '#eab308' },
      { max: 40, level: 'अधिक तनाव', color: '#ef4444' }
    ],
    maxScore: 40
  },
  te: {
    title: 'గుర్తింపు ఒత్తిడి స్కేల్ (PSS-10)',
    description: 'గత నెలలో మీ జీవితంలోని పరిస్థితులను మీరు ఎంత ఒత్తిడిగా అనుభవించారో కొలుస్తుంది.',
    questions: [
      "గత నెలలో, ఊహించని విధంగా జరిగిన దానివల్ల మీరు ఎంత తరచుగా బాధపడ్డారు?",
      "గత నెలలో, మీ జీవితంలోని ముఖ్యమైన విషయాలను నియంత్రించలేకపోతున్నాననిపించడం ఎంత తరచుగా అనిపించింది?",
      "గత నెలలో, మీరు ఎంత తరచుగా ఆందోళన మరియు ఒత్తిడిని అనుభవించారు?",
      "గత నెలలో, మీ వ్యక్తిగత సమస్యలను నిర్వహించగల మీ సామర్థ్యం గురించి ఎంత తరచుగా ఆత్మవిశ్వాసంగా అనిపించింది?",
      "గత నెలలో, విషయాలు మీ ఇష్టప్రకారం జరుగుతున్నాయని ఎంత తరచుగా అనిపించింది?",
      "గత నెలలో, మీరు చేయవలసిన పనులన్నింటినీ నిర్వహించలేకపోతున్నారని ఎంత తరచుగా గుర్తించారు?",
      "గత నెలలో, మీ జీవితంలోని చిరాకులను ఎంత తరచుగా నియంత్రించగలిగారు?",
      "గత నెలలో, మీరు అన్నీ చక్కగా నిర్వహిస్తున్నారని ఎంత తరచుగా అనిపించింది?",
      "గత నెలలో, మీ నియంత్రణకు అతీతమైన విషయాలవల్ల ఎంత తరచుగా కోపం వచ్చింది?",
      "గత నెలలో, కష్టాలు ఎంతగా పేరుకుపోయాయంటే వాటిని అధిగమించలేమని ఎంత తరచుగా అనిపించింది?"
    ],
    options: [
      { label: 'ఎప్పుడూ లేదు', value: 0 },
      { label: 'దాదాపు ఎప్పుడూ లేదు', value: 1 },
      { label: 'కొన్నిసార్లు', value: 2 },
      { label: 'తరచుగా', value: 3 },
      { label: 'చాలా తరచుగా', value: 4 }
    ],
    reverseScored: [3, 4, 6, 7],
    interpretation: [
      { max: 13, level: 'తక్కువ ఒత్తిడి', color: 'var(--color-primary)' },
      { max: 26, level: 'మధ్యస్థ ఒత్తిడి', color: '#eab308' },
      { max: 40, level: 'అధిక ఒత్తిడి', color: '#ef4444' }
    ],
    maxScore: 40
  }
};

// PC-PTSD-5
export const pcPtsd5ByLang = {
  en: {
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
  },
  hi: {
    title: 'PC-PTSD-5 स्क्रीन',
    description: 'अभिघातजन्य तनाव विकार (PTSD) के लिए एक संक्षिप्त स्क्रीनिंग। पिछले महीने में किसी तनावपूर्ण अनुभव से संबंधित अपने अनुभवों के बारे में उत्तर दें।',
    preamble: 'कभी-कभी लोगों के साथ ऐसी घटनाएँ होती हैं जो असामान्य रूप से या विशेष रूप से भयानक, भयावह या आघातजनक होती हैं। क्या आपने कभी इस प्रकार की घटना का अनुभव किया है?',
    questions: [
      "उन घटना(ओं) के बारे में बुरे सपने आए या न चाहते हुए भी आपने उन घटना(ओं) के बारे में सोचा?",
      "उन घटना(ओं) के बारे में न सोचने का बहुत प्रयास किया या उन परिस्थितियों से बचने के लिए विशेष कोशिश की जो आपको उन घटना(ओं) की याद दिलाती हैं?",
      "लगातार सतर्क, चौकस या आसानी से चौंकते रहे हैं?",
      "लोगों, गतिविधियों या अपने परिवेश से सुन्न या कटा हुआ महसूस किया?",
      "घटना(ओं) के लिए या उनसे उत्पन्न समस्याओं के लिए स्वयं को या दूसरों को दोष देना बंद नहीं कर पाए, या अपराध-बोध महसूस किया?"
    ],
    options: [
      { label: 'नहीं', value: 0 },
      { label: 'हाँ', value: 1 }
    ],
    interpretation: [
      { max: 2, level: 'नकारात्मक स्क्रीन', color: 'var(--color-primary)' },
      { max: 5, level: 'सकारात्मक स्क्रीन — आगे के मूल्यांकन की सलाह दी जाती है', color: '#ef4444' }
    ],
    cutoff: 3,
    maxScore: 5
  },
  te: {
    title: 'PC-PTSD-5 స్క్రీన్',
    description: 'పోస్ట్-ట్రామాటిక్ స్ట్రెస్ డిసార్డర్ (PTSD) కోసం ఒక సంక్షిప్త స్క్రీనింగ్. గత నెలలో ఒత్తిడితో కూడిన అనుభవానికి సంబంధించిన మీ అనుభవాల గురించి సమాధానం ఇవ్వండి.',
    preamble: 'కొన్నిసార్లు ప్రజలకు అసాధారణంగా లేదా ప్రత్యేకంగా భయంకరమైన, దారుణమైన లేదా ట్రామాటిక్ సంఘటనలు జరుగుతాయి. మీరు ఎప్పుడైనా ఈ రకమైన సంఘటనను అనుభవించారా?',
    questions: [
      "ఆ సంఘటన(ల) గురించి పీడకలలు వచ్చాయా లేదా మీరు ఇష్టపడకపోయినా వాటి గురించి ఆలోచన వచ్చిందా?",
      "ఆ సంఘటన(ల) గురించి ఆలోచించకుండా ఉండటానికి చాలా ప్రయత్నించారా లేదా వాటిని గుర్తు చేసే పరిస్థితుల నుండి తప్పించుకోవడానికి ప్రత్యేక ప్రయత్నం చేశారా?",
      "నిరంతరం అప్రమత్తంగా, జాగ్రత్తగా లేదా సులభంగా ఉలిక్కిపడుతూ ఉన్నారా?",
      "ప్రజలు, కార్యకలాపాలు లేదా మీ పరిసరాల నుండి స్తబ్ధంగా లేదా దూరంగా ఉన్నట్లు అనిపించిందా?",
      "ఆ సంఘటన(ల)కు లేదా వాటివల్ల ఏర్పడిన సమస్యలకు మిమ్మల్ని లేదా ఇతరులను నిందించడం ఆపలేక లేదా అపరాధభావాన్ని అనుభవించారా?"
    ],
    options: [
      { label: 'లేదు', value: 0 },
      { label: 'అవును', value: 1 }
    ],
    interpretation: [
      { max: 2, level: 'నెగటివ్ స్క్రీన్', color: 'var(--color-primary)' },
      { max: 5, level: 'పాజిటివ్ స్క్రీన్ — తదుపరి అంచనా సిఫార్సు చేయబడింది', color: '#ef4444' }
    ],
    cutoff: 3,
    maxScore: 5
  }
};

// ISI insomnia
export const isiByLang = {
  en: {
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
  },
  hi: {
    title: 'अनिद्रा गंभीरता सूचकांक (ISI)',
    description: 'पिछले दो सप्ताह में अनिद्रा की प्रकृति, गंभीरता और प्रभाव का आकलन करता है।',
    questions: [
      "नींद आने में कठिनाई",
      "नींद बनाए रखने में कठिनाई",
      "बहुत जल्दी जाग जाने की समस्या",
      "आप अपने वर्तमान नींद के पैटर्न से कितने संतुष्ट/असंतुष्ट हैं?",
      "आपको लगता है कि आपकी जीवन की गुणवत्ता को प्रभावित करने के संदर्भ में आपकी नींद की समस्या दूसरों को कितनी ध्यान देने योग्य लगती है?",
      "आप अपनी वर्तमान नींद की समस्या के बारे में कितने चिंतित/परेशान हैं?",
      "आप अपनी नींद की समस्या को अपनी दैनिक गतिविधियों में कितना बाधक मानते हैं?"
    ],
    options: [
      { label: 'कोई नहीं / बहुत संतुष्ट', value: 0 },
      { label: 'हल्का / संतुष्ट', value: 1 },
      { label: 'मध्यम / तटस्थ', value: 2 },
      { label: 'गंभीर / असंतुष्ट', value: 3 },
      { label: 'बहुत गंभीर / बहुत असंतुष्ट', value: 4 }
    ],
    interpretation: [
      { max: 7, level: 'कोई चिकित्सकीय रूप से महत्वपूर्ण अनिद्रा नहीं', color: 'var(--color-primary)' },
      { max: 14, level: 'सीमारेखीय अनिद्रा', color: '#eab308' },
      { max: 21, level: 'मध्यम अनिद्रा', color: '#f97316' },
      { max: 28, level: 'गंभीर अनिद्रा', color: '#ef4444' }
    ],
    maxScore: 28
  },
  te: {
    title: 'నిద్రలేమి తీవ్రత సూచిక (ISI)',
    description: 'గత రెండు వారాలలో నిద్రలేమి యొక్క స్వభావం, తీవ్రత మరియు ప్రభావాన్ని అంచనా వేస్తుంది.',
    questions: [
      "నిద్రపట్టడంలో ఇబ్బంది",
      "నిద్రలో ఉండటంలో ఇబ్బంది",
      "చాలా త్వరగా మెలకువ వచ్చే సమస్య",
      "మీ ప్రస్తుత నిద్ర విధానంతో మీరు ఎంత సంతృప్తి/అసంతృప్తి చెందుతున్నారు?",
      "మీ జీవిత నాణ్యతను దెబ్బతీసే కోణంలో మీ నిద్ర సమస్య ఇతరులకు ఎంత స్పష్టంగా కనిపిస్తుందని మీరు భావిస్తున్నారు?",
      "మీ ప్రస్తుత నిద్ర సమస్య గురించి మీరు ఎంత ఆందోళన/వేదన చెందుతున్నారు?",
      "మీ నిద్ర సమస్య మీ రోజువారీ పనితీరుకు ఎంత అడ్డంకిగా ఉందని మీరు భావిస్తున్నారు?"
    ],
    options: [
      { label: 'ఏమీ లేదు / చాలా సంతృప్తి', value: 0 },
      { label: 'తేలికపాటి / సంతృప్తి', value: 1 },
      { label: 'మధ్యస్థ / తటస్థం', value: 2 },
      { label: 'తీవ్రమైన / అసంతృప్తి', value: 3 },
      { label: 'అతి తీవ్రమైన / చాలా అసంతృప్తి', value: 4 }
    ],
    interpretation: [
      { max: 7, level: 'వైద్యపరంగా గణనీయమైన నిద్రలేమి లేదు', color: 'var(--color-primary)' },
      { max: 14, level: 'సబ్‌థ్రెషోల్డ్ నిద్రలేమి', color: '#eab308' },
      { max: 21, level: 'మధ్యస్థ నిద్రలేమి', color: '#f97316' },
      { max: 28, level: 'తీవ్రమైన నిద్రలేమి', color: '#ef4444' }
    ],
    maxScore: 28
  }
};

// CAGE alcohol
export const cageByLang = {
  en: {
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
  },
  hi: {
    title: 'CAGE प्रश्नावली',
    description: 'शराब-संबंधी समस्याओं के लिए एक संक्षिप्त स्क्रीनिंग उपकरण।',
    questions: [
      "क्या आपको कभी ऐसा लगा है कि आपको अपनी शराब की मात्रा कम करनी (Cut down) चाहिए?",
      "क्या लोगों ने आपकी शराब पीने की आलोचना करके आपको नाराज़ (Annoyed) किया है?",
      "क्या आपने कभी अपनी शराब पीने के बारे में बुरा या अपराध-बोध (Guilty) महसूस किया है?",
      "क्या आपने कभी सुबह उठते ही नसों को शांत करने या हैंगओवर मिटाने के लिए शराब (Eye-opener) पी है?"
    ],
    options: [
      { label: 'नहीं', value: 0 },
      { label: 'हाँ', value: 1 }
    ],
    interpretation: [
      { max: 1, level: 'कम चिंता', color: 'var(--color-primary)' },
      { max: 4, level: 'चिकित्सकीय रूप से महत्वपूर्ण — पेशेवर मूल्यांकन की सलाह दी जाती है', color: '#ef4444' }
    ],
    cutoff: 2,
    maxScore: 4
  },
  te: {
    title: 'CAGE ప్రశ్నావళి',
    description: 'మద్యపానానికి సంబంధించిన సమస్యల కోసం ఒక సంక్షిప్త స్క్రీనింగ్ సాధనం.',
    questions: [
      "మీరు మద్యం తాగడం తగ్గించుకోవాలి (Cut down) అని ఎప్పుడైనా అనిపించిందా?",
      "మీ మద్యపానాన్ని విమర్శిస్తూ ప్రజలు మిమ్మల్ని విసిగించారా (Annoyed)?",
      "మీ మద్యపానం గురించి మీరు ఎప్పుడైనా బాధగా లేదా అపరాధభావంతో (Guilty) అనిపించిందా?",
      "నరాలను శాంతపరచడానికి లేదా హ్యాంగోవర్ పోగొట్టుకోవడానికి ఉదయాన్నే మొదటి పనిగా మద్యం (Eye-opener) సేవించారా?"
    ],
    options: [
      { label: 'లేదు', value: 0 },
      { label: 'అవును', value: 1 }
    ],
    interpretation: [
      { max: 1, level: 'తక్కువ ఆందోళన', color: 'var(--color-primary)' },
      { max: 4, level: 'వైద్యపరంగా గణనీయమైనది — వృత్తిపరమైన అంచనా సిఫార్సు చేయబడింది', color: '#ef4444' }
    ],
    cutoff: 2,
    maxScore: 4
  }
};

// JPMR
export const jpmrIntroByLang = {
  en: "Jacobson's Progressive Muscle Relaxation (JPMR) involves systematically tensing and then releasing different muscle groups. This helps you recognize the difference between tension and relaxation in your body.",
  hi: "जैकबसन की प्रगतिशील मांसपेशी विश्राम तकनीक (JPMR) में अलग-अलग मांसपेशी समूहों को व्यवस्थित रूप से तनावग्रस्त करके फिर ढीला छोड़ा जाता है। इससे आप अपने शरीर में तनाव और विश्राम के बीच के अंतर को पहचानना सीखते हैं।",
  te: "జాకబ్‌సన్ ప్రోగ్రెసివ్ మజిల్ రిలాక్సేషన్ (JPMR) అనేది వివిధ కండరాల సమూహాలను క్రమపద్ధతిలో బిగించి ఆపై వదలి విడుదల చేయడాన్ని కలిగి ఉంటుంది. ఇది మీ శరీరంలో ఉద్రిక్తత మరియు విశ్రాంతి మధ్య తేడాను గుర్తించడంలో మీకు సహాయపడుతుంది."
};

export const jpmrInstructionsByLang = {
  en: [
    "Find a comfortable position — sitting or lying down.",
    "Close your eyes and take a few deep breaths.",
    "For each muscle group, tense the muscles for about 5 seconds.",
    "Then release and relax for about 10 seconds.",
    "Focus on the contrast between tension and relaxation.",
    "If any area is injured or painful, skip that muscle group."
  ],
  hi: [
    "एक आरामदायक स्थिति में बैठें या लेट जाएँ।",
    "अपनी आँखें बंद करें और कुछ गहरी साँसें लें।",
    "प्रत्येक मांसपेशी समूह के लिए मांसपेशियों को लगभग 5 सेकंड तक तनावग्रस्त रखें।",
    "फिर ढीला छोड़ें और लगभग 10 सेकंड तक आराम करें।",
    "तनाव और विश्राम के बीच के अंतर पर ध्यान केंद्रित करें।",
    "यदि किसी हिस्से में चोट है या दर्द है, तो उस मांसपेशी समूह को छोड़ दें।"
  ],
  te: [
    "ఒక సౌకర్యవంతమైన భంగిమను ఎంచుకోండి — కూర్చోండి లేదా పడుకోండి.",
    "మీ కళ్ళు మూసుకుని కొన్ని లోతైన శ్వాసలు తీసుకోండి.",
    "ప్రతి కండరాల సమూహానికి, కండరాలను సుమారు 5 సెకన్ల పాటు బిగించండి.",
    "ఆపై వదలి సుమారు 10 సెకన్ల పాటు విశ్రాంతి తీసుకోండి.",
    "ఉద్రిక్తత మరియు విశ్రాంతి మధ్య వ్యత్యాసంపై దృష్టి పెట్టండి.",
    "ఏదైనా ప్రాంతంలో గాయం ఉన్నా లేదా నొప్పిగా ఉంటే, ఆ కండరాల సమూహాన్ని వదిలివేయండి."
  ]
};

export const jpmrCompletionByLang = {
  en: "Take a moment to scan your entire body. Notice the deep relaxation from head to toe. Take a few more deep breaths. When you are ready, slowly open your eyes and return to your surroundings.",
  hi: "अपने पूरे शरीर को धीरे-धीरे महसूस करने के लिए एक क्षण रुकें। सिर से पाँव तक गहरी शिथिलता को अनुभव करें। कुछ और गहरी साँसें लें। जब आप तैयार हों, धीरे-धीरे अपनी आँखें खोलें और अपने परिवेश में वापस लौट आएँ।",
  te: "మీ మొత్తం శరీరాన్ని పరిశీలించడానికి ఒక క్షణం తీసుకోండి. తలనుండి కాలి వరకు లోతైన విశ్రాంతిని గమనించండి. మరికొన్ని లోతైన శ్వాసలు తీసుకోండి. మీరు సిద్ధంగా ఉన్నప్పుడు, నెమ్మదిగా మీ కళ్ళు తెరిచి మీ పరిసరాలకు తిరిగి రండి."
};

export const jpmrMuscleGroupsByLang = {
  en: [
    {
      name: 'Right Hand & Forearm',
      tensionInstruction: 'Make a tight fist with your right hand. Squeeze firmly.',
      relaxInstruction: 'Release your fist. Let your hand go completely limp. Feel the warmth and relaxation.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'Left Hand & Forearm',
      tensionInstruction: 'Make a tight fist with your left hand. Squeeze firmly.',
      relaxInstruction: 'Release your fist. Let your hand go completely limp. Notice the difference.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'Right Upper Arm (Biceps)',
      tensionInstruction: 'Bend your right arm and flex your bicep. Tense the upper arm.',
      relaxInstruction: 'Straighten your arm and let it rest. Feel the tension melting away.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'Left Upper Arm (Biceps)',
      tensionInstruction: 'Bend your left arm and flex your bicep. Tense the upper arm.',
      relaxInstruction: 'Straighten your arm and let it rest. Let all the tension drain out.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'Forehead',
      tensionInstruction: 'Raise your eyebrows as high as you can. Wrinkle your forehead.',
      relaxInstruction: 'Let your forehead become smooth and relaxed. Feel the tension releasing.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'Eyes & Cheeks',
      tensionInstruction: 'Squeeze your eyes shut tightly. Scrunch up your face.',
      relaxInstruction: 'Relax your face completely. Let your eyelids rest gently. Smooth out all tension.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'Jaw & Mouth',
      tensionInstruction: 'Clench your jaw and press your tongue against the roof of your mouth.',
      relaxInstruction: 'Let your jaw drop open slightly. Relax your tongue. Feel the release.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'Neck & Shoulders',
      tensionInstruction: 'Raise your shoulders up toward your ears. Hold them tight.',
      relaxInstruction: 'Drop your shoulders down. Let them fall heavy and loose. Feel the warmth spreading.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'Chest & Upper Back',
      tensionInstruction: 'Take a deep breath and hold it. Tighten your chest muscles.',
      relaxInstruction: 'Exhale slowly and completely. Let your chest and back relax fully.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'Abdomen',
      tensionInstruction: 'Tighten your stomach muscles. Pull your belly button toward your spine.',
      relaxInstruction: 'Release your stomach muscles. Let your abdomen become soft and relaxed.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'Right Thigh',
      tensionInstruction: 'Tighten the muscles in your right thigh by pressing down with your leg.',
      relaxInstruction: 'Release the tension. Let your right leg become heavy and relaxed.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'Left Thigh',
      tensionInstruction: 'Tighten the muscles in your left thigh by pressing down with your leg.',
      relaxInstruction: 'Release the tension. Let your left leg become heavy and relaxed.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'Right Calf & Foot',
      tensionInstruction: 'Point your right toes upward toward your shin. Tighten your calf.',
      relaxInstruction: 'Let your foot drop. Relax your entire lower right leg.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'Left Calf & Foot',
      tensionInstruction: 'Point your left toes upward toward your shin. Tighten your calf.',
      relaxInstruction: 'Let your foot drop. Relax your entire lower left leg. Feel the relaxation spreading throughout your body.',
      tensionDuration: 5,
      relaxDuration: 10
    }
  ],
  hi: [
    {
      name: 'दायाँ हाथ और बाँह का अग्र भाग',
      tensionInstruction: 'अपने दाहिने हाथ की कसकर मुट्ठी बनाएँ। मज़बूती से दबाएँ।',
      relaxInstruction: 'अपनी मुट्ठी खोलें। हाथ को पूरी तरह ढीला छोड़ दें। गर्माहट और विश्राम को महसूस करें।',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'बायाँ हाथ और बाँह का अग्र भाग',
      tensionInstruction: 'अपने बाएँ हाथ की कसकर मुट्ठी बनाएँ। मज़बूती से दबाएँ।',
      relaxInstruction: 'अपनी मुट्ठी खोलें। हाथ को पूरी तरह ढीला छोड़ दें। अंतर को महसूस करें।',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'दायाँ ऊपरी बाँह (बाइसेप्स)',
      tensionInstruction: 'अपनी दाहिनी बाँह को मोड़ें और बाइसेप को कसें। ऊपरी बाँह को तनावग्रस्त करें।',
      relaxInstruction: 'अपनी बाँह सीधी करें और उसे विश्राम दें। तनाव को पिघलते हुए महसूस करें।',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'बायाँ ऊपरी बाँह (बाइसेप्स)',
      tensionInstruction: 'अपनी बाईं बाँह को मोड़ें और बाइसेप को कसें। ऊपरी बाँह को तनावग्रस्त करें।',
      relaxInstruction: 'अपनी बाँह सीधी करें और उसे विश्राम दें। सारा तनाव बाहर निकलने दें।',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'माथा',
      tensionInstruction: 'अपनी भौंहों को जितना हो सके ऊपर उठाएँ। माथे पर सिलवटें डालें।',
      relaxInstruction: 'अपने माथे को सहज और शिथिल होने दें। तनाव को मुक्त होते हुए महसूस करें।',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'आँखें और गाल',
      tensionInstruction: 'अपनी आँखों को कसकर बंद करें। चेहरे को सिकोड़ें।',
      relaxInstruction: 'अपने चेहरे को पूरी तरह से शिथिल होने दें। पलकों को कोमलता से विश्राम दें। सारा तनाव दूर करें।',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'जबड़ा और मुँह',
      tensionInstruction: 'अपने जबड़े को कसें और जीभ को मुँह की ऊपरी सतह से दबाएँ।',
      relaxInstruction: 'अपने जबड़े को थोड़ा खुला छोड़ दें। जीभ को विश्राम दें। मुक्ति को महसूस करें।',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'गर्दन और कंधे',
      tensionInstruction: 'अपने कंधों को कानों की ओर ऊपर उठाएँ। उन्हें कसकर रखें।',
      relaxInstruction: 'अपने कंधों को नीचे गिरने दें। उन्हें भारी और ढीला होने दें। फैलती हुई गर्माहट को महसूस करें।',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'छाती और ऊपरी पीठ',
      tensionInstruction: 'गहरी साँस लें और रोकें। अपनी छाती की मांसपेशियों को कसें।',
      relaxInstruction: 'धीरे-धीरे और पूरी तरह से साँस छोड़ें। अपनी छाती और पीठ को पूरी तरह शिथिल होने दें।',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'पेट',
      tensionInstruction: 'अपने पेट की मांसपेशियों को कसें। नाभि को रीढ़ की ओर खींचें।',
      relaxInstruction: 'अपनी पेट की मांसपेशियों को ढीला छोड़ें। पेट को नरम और शिथिल होने दें।',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'दायाँ जाँघ',
      tensionInstruction: 'अपने पैर से दबाते हुए दाहिनी जाँघ की मांसपेशियों को कसें।',
      relaxInstruction: 'तनाव को छोड़ें। अपने दाहिने पैर को भारी और शिथिल होने दें।',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'बायाँ जाँघ',
      tensionInstruction: 'अपने पैर से दबाते हुए बाईं जाँघ की मांसपेशियों को कसें।',
      relaxInstruction: 'तनाव को छोड़ें। अपने बाएँ पैर को भारी और शिथिल होने दें।',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'दायाँ पिंडली और पैर',
      tensionInstruction: 'अपने दाहिने पैर की उँगलियों को पिंडली की ओर ऊपर की ओर इंगित करें। पिंडली को कसें।',
      relaxInstruction: 'अपने पैर को ढीला छोड़ें। अपने पूरे दाहिने निचले पैर को विश्राम दें।',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'बायाँ पिंडली और पैर',
      tensionInstruction: 'अपने बाएँ पैर की उँगलियों को पिंडली की ओर ऊपर की ओर इंगित करें। पिंडली को कसें।',
      relaxInstruction: 'अपने पैर को ढीला छोड़ें। अपने पूरे बाएँ निचले पैर को विश्राम दें। पूरे शरीर में फैलती शिथिलता को महसूस करें।',
      tensionDuration: 5,
      relaxDuration: 10
    }
  ],
  te: [
    {
      name: 'కుడి చెయ్యి & ముంజేయి',
      tensionInstruction: 'మీ కుడి చేతితో గట్టిగా పిడికిలి బిగించండి. దృఢంగా పిసకండి.',
      relaxInstruction: 'మీ పిడికిలిని వదలండి. మీ చెయ్యి పూర్తిగా సడలి పోనివ్వండి. వెచ్చదనాన్ని మరియు విశ్రాంతిని అనుభవించండి.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'ఎడమ చెయ్యి & ముంజేయి',
      tensionInstruction: 'మీ ఎడమ చేతితో గట్టిగా పిడికిలి బిగించండి. దృఢంగా పిసకండి.',
      relaxInstruction: 'మీ పిడికిలిని వదలండి. మీ చెయ్యి పూర్తిగా సడలి పోనివ్వండి. తేడాను గమనించండి.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'కుడి పైచెయ్యి (బైసెప్స్)',
      tensionInstruction: 'మీ కుడి చేతిని వంచి బైసెప్‌ను బిగించండి. పైచేతిని ఉద్రిక్తంగా చేయండి.',
      relaxInstruction: 'మీ చేతిని నిటారుగా చేసి విశ్రాంతినివ్వండి. ఉద్రిక్తత కరిగిపోతున్నట్లు అనుభవించండి.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'ఎడమ పైచెయ్యి (బైసెప్స్)',
      tensionInstruction: 'మీ ఎడమ చేతిని వంచి బైసెప్‌ను బిగించండి. పైచేతిని ఉద్రిక్తంగా చేయండి.',
      relaxInstruction: 'మీ చేతిని నిటారుగా చేసి విశ్రాంతినివ్వండి. ఉద్రిక్తత అంతా బయటకు పోనివ్వండి.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'నుదురు',
      tensionInstruction: 'మీ కనుబొమ్మలను సాధ్యమైనంత ఎత్తుకు ఎత్తండి. నుదురును ముడతలు పడేలా చేయండి.',
      relaxInstruction: 'మీ నుదురును మృదువుగా, ప్రశాంతంగా ఉండనివ్వండి. ఉద్రిక్తత విడుదలవుతున్నట్లు అనుభవించండి.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'కళ్ళు & చెంపలు',
      tensionInstruction: 'మీ కళ్ళను గట్టిగా మూసుకోండి. మీ ముఖాన్ని ముడుచుకోండి.',
      relaxInstruction: 'మీ ముఖాన్ని పూర్తిగా విశ్రాంతినివ్వండి. మీ కనురెప్పలు మృదువుగా ఉండనివ్వండి. ఉద్రిక్తతంతా తొలగించండి.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'దవడ & నోరు',
      tensionInstruction: 'మీ దవడను బిగించండి మరియు మీ నాలుకను నోటి పైభాగానికి నొక్కండి.',
      relaxInstruction: 'మీ దవడను కొంచెం తెరిచి ఉండనివ్వండి. మీ నాలుకను విశ్రాంతినివ్వండి. విడుదలను అనుభవించండి.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'మెడ & భుజాలు',
      tensionInstruction: 'మీ భుజాలను చెవుల వైపు పైకి ఎత్తండి. వాటిని గట్టిగా పట్టుకోండి.',
      relaxInstruction: 'మీ భుజాలను కిందకు దింపండి. వాటిని భారంగా, వదులుగా పడనివ్వండి. వ్యాపిస్తున్న వెచ్చదనాన్ని అనుభవించండి.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'ఛాతీ & పైవీపు',
      tensionInstruction: 'లోతైన శ్వాస తీసుకుని పట్టుకోండి. మీ ఛాతీ కండరాలను బిగించండి.',
      relaxInstruction: 'నెమ్మదిగా మరియు పూర్తిగా శ్వాస వదలండి. మీ ఛాతీ మరియు వీపును పూర్తిగా విశ్రాంతినివ్వండి.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'ఉదరం',
      tensionInstruction: 'మీ కడుపు కండరాలను బిగించండి. మీ నాభిని వెన్నెముక వైపు లాగండి.',
      relaxInstruction: 'మీ కడుపు కండరాలను వదలండి. మీ ఉదరం మృదువుగా, ప్రశాంతంగా ఉండనివ్వండి.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'కుడి తొడ',
      tensionInstruction: 'మీ కాలితో కిందకు నొక్కడం ద్వారా మీ కుడి తొడ కండరాలను బిగించండి.',
      relaxInstruction: 'ఉద్రిక్తతను వదలండి. మీ కుడి కాలును భారంగా, ప్రశాంతంగా ఉండనివ్వండి.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'ఎడమ తొడ',
      tensionInstruction: 'మీ కాలితో కిందకు నొక్కడం ద్వారా మీ ఎడమ తొడ కండరాలను బిగించండి.',
      relaxInstruction: 'ఉద్రిక్తతను వదలండి. మీ ఎడమ కాలును భారంగా, ప్రశాంతంగా ఉండనివ్వండి.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'కుడి పిక్క & పాదం',
      tensionInstruction: 'మీ కుడి కాలి వేళ్ళను మీ పిక్క వైపు పైకి చూపించండి. మీ పిక్కను బిగించండి.',
      relaxInstruction: 'మీ పాదాన్ని వదలండి. మీ కుడి దిగువ కాలంతా విశ్రాంతినివ్వండి.',
      tensionDuration: 5,
      relaxDuration: 10
    },
    {
      name: 'ఎడమ పిక్క & పాదం',
      tensionInstruction: 'మీ ఎడమ కాలి వేళ్ళను మీ పిక్క వైపు పైకి చూపించండి. మీ పిక్కను బిగించండి.',
      relaxInstruction: 'మీ పాదాన్ని వదలండి. మీ ఎడమ దిగువ కాలంతా విశ్రాంతినివ్వండి. మీ శరీరమంతటా వ్యాపిస్తున్న విశ్రాంతిని అనుభవించండి.',
      tensionDuration: 5,
      relaxDuration: 10
    }
  ]
};

// EMDR phases (data/emdrConfig.js emdrPhases export)
export const emdrPhasesByLang = {
  en: [
    {
      id: 'intro',
      name: 'Introduction',
      description: 'Learn about EMDR and prepare for the session.',
      instructions: [
        'Welcome to the virtual EMDR practice session.',
        'EMDR (Eye Movement Desensitization and Reprocessing) uses bilateral stimulation to help your brain process difficult memories.',
        'During this session, you will follow a moving dot with your eyes while listening to alternating audio tones.',
        'Find a comfortable, quiet space where you will not be disturbed.',
        'You can pause or stop the session at any time.',
        'When you are ready, press "Begin Session" to start.'
      ]
    },
    {
      id: 'preparation',
      name: 'Safe Place Visualization',
      duration: 90,
      instructions: [
        'Close your eyes and take a few deep breaths.',
        'Think of a place where you feel completely safe and at peace.',
        'It can be a real place or an imaginary one.',
        'Notice the colors around you in this safe place.',
        'Notice any sounds — perhaps gentle water, birds, or silence.',
        'Feel the temperature on your skin. Notice any pleasant sensations.',
        'Let this feeling of safety and calm fill your entire body.',
        'Remember: you can return to this safe place at any time during the session.',
        'Take one more deep breath. When you are ready, open your eyes.'
      ]
    },
    {
      id: 'desensitization',
      name: 'Desensitization',
      duration: 180,
      description: 'Follow the moving dot with your eyes. Let your mind process freely.',
      dotSpeed: { min: 0.5, max: 3, default: 1.2 },
      setLength: 30,
      restBetweenSets: 10,
      instructions: [
        'Keep your head still and follow the dot with your eyes only.',
        'Let whatever comes to mind flow naturally — thoughts, images, emotions.',
        'Do not try to force anything. Just notice what comes up.',
        'After each set, take a brief rest and notice how you feel.'
      ]
    },
    {
      id: 'installation',
      name: 'Positive Installation',
      duration: 60,
      description: 'Strengthen a positive belief while following the dot.',
      instructions: [
        'Think of a positive belief about yourself.',
        'Something like "I am safe," "I am strong," or "I can cope."',
        'Hold this positive thought as you follow the dot.',
        'Let the positive belief grow stronger with each movement.'
      ]
    },
    {
      id: 'closure',
      name: 'Closure & Grounding',
      duration: 60,
      instructions: [
        'The active processing part of the session is now complete.',
        'Return to your safe place visualization.',
        'Take slow, deep breaths.',
        'Feel your feet on the ground. Notice the chair beneath you.',
        'Wiggle your fingers and toes.',
        'When you are ready, gently open your eyes.',
        'Take a moment to notice how you feel.',
        'It is normal to continue processing after the session. Be gentle with yourself.'
      ]
    }
  ],
  hi: [
    {
      id: 'intro',
      name: 'परिचय',
      description: 'EMDR के बारे में जानें और सत्र के लिए तैयार हों।',
      instructions: [
        'वर्चुअल EMDR अभ्यास सत्र में आपका स्वागत है।',
        'EMDR (आई मूवमेंट डिसेन्सिटाइज़ेशन एंड रीप्रोसेसिंग) आपके मस्तिष्क को कठिन यादों को संसाधित करने में मदद देने के लिए द्विपक्षीय उत्तेजना का उपयोग करता है।',
        'इस सत्र के दौरान, आप अपनी आँखों से एक चलते हुए बिंदु का अनुसरण करेंगे और साथ ही बारी-बारी से ध्वनि-स्वर सुनेंगे।',
        'एक आरामदायक, शांत स्थान चुनें जहाँ आपको कोई बाधा न हो।',
        'आप कभी भी सत्र को रोक या समाप्त कर सकते हैं।',
        'जब आप तैयार हों, शुरू करने के लिए "सत्र शुरू करें" दबाएँ।'
      ]
    },
    {
      id: 'preparation',
      name: 'सुरक्षित स्थान दृश्यांकन',
      duration: 90,
      instructions: [
        'अपनी आँखें बंद करें और कुछ गहरी साँसें लें।',
        'किसी ऐसे स्थान के बारे में सोचें जहाँ आप पूरी तरह सुरक्षित और शांत महसूस करते हों।',
        'यह कोई वास्तविक स्थान हो सकता है या काल्पनिक भी।',
        'इस सुरक्षित स्थान पर अपने आसपास के रंगों पर ध्यान दें।',
        'किसी भी ध्वनि पर ध्यान दें — शायद कोमल पानी की आवाज़, पक्षी, या मौन।',
        'अपनी त्वचा पर तापमान को महसूस करें। किसी भी सुखद अनुभूति पर ध्यान दें।',
        'सुरक्षा और शांति की इस अनुभूति को अपने पूरे शरीर में भर जाने दें।',
        'याद रखें: आप सत्र के दौरान कभी भी इस सुरक्षित स्थान पर लौट सकते हैं।',
        'एक और गहरी साँस लें। जब आप तैयार हों, अपनी आँखें खोलें।'
      ]
    },
    {
      id: 'desensitization',
      name: 'असंवेदीकरण',
      duration: 180,
      description: 'चलते हुए बिंदु को अपनी आँखों से देखें। अपने मन को स्वतंत्र रूप से संसाधित करने दें।',
      dotSpeed: { min: 0.5, max: 3, default: 1.2 },
      setLength: 30,
      restBetweenSets: 10,
      instructions: [
        'अपना सिर स्थिर रखें और केवल आँखों से बिंदु का अनुसरण करें।',
        'जो भी मन में आए — विचार, छवियाँ, भावनाएँ — उन्हें स्वाभाविक रूप से बहने दें।',
        'किसी चीज़ को मजबूर करने की कोशिश न करें। बस ध्यान दें कि क्या उभरकर आता है।',
        'प्रत्येक सेट के बाद थोड़ा विश्राम करें और देखें कि आप कैसा महसूस कर रहे हैं।'
      ]
    },
    {
      id: 'installation',
      name: 'सकारात्मक स्थापना',
      duration: 60,
      description: 'बिंदु का अनुसरण करते हुए एक सकारात्मक विश्वास को मज़बूत करें।',
      instructions: [
        'अपने बारे में एक सकारात्मक विश्वास सोचें।',
        'जैसे "मैं सुरक्षित हूँ," "मैं मज़बूत हूँ," या "मैं इसका सामना कर सकता/सकती हूँ।"',
        'जब आप बिंदु का अनुसरण करें, तब इस सकारात्मक विचार को मन में रखें।',
        'प्रत्येक गति के साथ इस सकारात्मक विश्वास को और मज़बूत होने दें।'
      ]
    },
    {
      id: 'closure',
      name: 'समापन और आधार-स्थापना (Grounding)',
      duration: 60,
      instructions: [
        'सत्र का सक्रिय प्रसंस्करण भाग अब पूरा हो गया है।',
        'अपने सुरक्षित स्थान के दृश्यांकन पर वापस लौटें।',
        'धीमी, गहरी साँसें लें।',
        'अपने पैरों को ज़मीन पर महसूस करें। अपने नीचे की कुर्सी को महसूस करें।',
        'अपनी उँगलियों और पैर की उँगलियों को हिलाएँ।',
        'जब आप तैयार हों, धीरे से अपनी आँखें खोलें।',
        'एक क्षण रुककर देखें कि आप कैसा महसूस कर रहे हैं।',
        'सत्र के बाद भी प्रक्रिया जारी रहना सामान्य है। स्वयं के प्रति कोमल बनें।'
      ]
    }
  ],
  te: [
    {
      id: 'intro',
      name: 'పరిచయం',
      description: 'EMDR గురించి తెలుసుకోండి మరియు సెషన్ కోసం సిద్ధం అవ్వండి.',
      instructions: [
        'వర్చువల్ EMDR అభ్యాస సెషన్‌కు స్వాగతం.',
        'EMDR (ఐ మూవ్‌మెంట్ డిసెన్సిటైజేషన్ అండ్ రీప్రాసెసింగ్) కష్టమైన జ్ఞాపకాలను ప్రాసెస్ చేయడంలో మీ మెదడుకు సహాయపడటానికి ద్విపార్శ్వ ఉద్దీపనను ఉపయోగిస్తుంది.',
        'ఈ సెషన్ సమయంలో, మీరు మారుతున్న ఆడియో శబ్దాలను వింటూ మీ కళ్ళతో కదులుతున్న చుక్కను అనుసరిస్తారు.',
        'మీకు ఆటంకం లేని సౌకర్యవంతమైన, నిశ్శబ్ద ప్రదేశాన్ని ఎంచుకోండి.',
        'మీరు ఎప్పుడైనా సెషన్‌ను విరామం లేదా ఆపివేయవచ్చు.',
        'మీరు సిద్ధంగా ఉన్నప్పుడు, ప్రారంభించడానికి "సెషన్ ప్రారంభించండి" నొక్కండి.'
      ]
    },
    {
      id: 'preparation',
      name: 'సురక్షిత ప్రదేశం దృశ్యీకరణ',
      duration: 90,
      instructions: [
        'మీ కళ్ళు మూసుకుని కొన్ని లోతైన శ్వాసలు తీసుకోండి.',
        'మీరు పూర్తిగా సురక్షితంగా మరియు ప్రశాంతంగా అనిపించే ప్రదేశాన్ని ఆలోచించండి.',
        'ఇది నిజమైన ప్రదేశం కావచ్చు లేదా ఊహించుకున్నది కావచ్చు.',
        'ఈ సురక్షిత ప్రదేశంలో మీ చుట్టూ ఉన్న రంగులను గమనించండి.',
        'ఏవైనా శబ్దాలను గమనించండి — బహుశా మృదువైన నీటి శబ్దం, పక్షులు లేదా నిశ్శబ్దం.',
        'మీ చర్మంపై ఉష్ణోగ్రతను అనుభవించండి. ఏదైనా ఆహ్లాదకరమైన అనుభూతులను గమనించండి.',
        'ఈ భద్రత మరియు ప్రశాంతత భావనను మీ శరీరమంతా నింపనివ్వండి.',
        'గుర్తుంచుకోండి: సెషన్ సమయంలో మీరు ఎప్పుడైనా ఈ సురక్షిత ప్రదేశానికి తిరిగి రావచ్చు.',
        'మరో లోతైన శ్వాస తీసుకోండి. మీరు సిద్ధంగా ఉన్నప్పుడు, మీ కళ్ళు తెరవండి.'
      ]
    },
    {
      id: 'desensitization',
      name: 'డిసెన్సిటైజేషన్',
      duration: 180,
      description: 'కదులుతున్న చుక్కను మీ కళ్ళతో అనుసరించండి. మీ మనస్సును స్వేచ్ఛగా ప్రాసెస్ చేయనివ్వండి.',
      dotSpeed: { min: 0.5, max: 3, default: 1.2 },
      setLength: 30,
      restBetweenSets: 10,
      instructions: [
        'మీ తలను నిశ్చలంగా ఉంచి, కేవలం మీ కళ్ళతో మాత్రమే చుక్కను అనుసరించండి.',
        'మనస్సుకు ఏది వచ్చినా — ఆలోచనలు, చిత్రాలు, భావోద్వేగాలు — సహజంగా ప్రవహించనివ్వండి.',
        'దేనినీ బలవంతంగా చేయడానికి ప్రయత్నించవద్దు. ఏది ఉద్భవిస్తుందో గమనించండి.',
        'ప్రతి సెట్ తర్వాత, కొంచెం విశ్రాంతి తీసుకుని, మీరు ఎలా అనిపిస్తున్నారో గమనించండి.'
      ]
    },
    {
      id: 'installation',
      name: 'పాజిటివ్ ఇన్‌స్టాలేషన్',
      duration: 60,
      description: 'చుక్కను అనుసరిస్తూ ఒక సానుకూల నమ్మకాన్ని బలోపేతం చేయండి.',
      instructions: [
        'మీ గురించి ఒక సానుకూల నమ్మకాన్ని ఆలోచించండి.',
        '"నేను సురక్షితంగా ఉన్నాను," "నేను బలంగా ఉన్నాను," లేదా "నేను తట్టుకోగలను" వంటిది.',
        'మీరు చుక్కను అనుసరిస్తున్నప్పుడు ఈ సానుకూల ఆలోచనను మనస్సులో ఉంచండి.',
        'ప్రతి కదలికతో సానుకూల నమ్మకం మరింత బలపడనివ్వండి.'
      ]
    },
    {
      id: 'closure',
      name: 'ముగింపు & గ్రౌండింగ్',
      duration: 60,
      instructions: [
        'సెషన్ యొక్క క్రియాశీల ప్రాసెసింగ్ భాగం ఇప్పుడు పూర్తయింది.',
        'మీ సురక్షిత ప్రదేశం దృశ్యీకరణకు తిరిగి రండి.',
        'నెమ్మదిగా, లోతైన శ్వాసలు తీసుకోండి.',
        'మీ పాదాలను నేలపై అనుభవించండి. మీ కింద ఉన్న కుర్చీని గమనించండి.',
        'మీ వేళ్ళను మరియు కాలి వేళ్ళను కదిలించండి.',
        'మీరు సిద్ధంగా ఉన్నప్పుడు, మృదువుగా మీ కళ్ళు తెరవండి.',
        'మీరు ఎలా అనిపిస్తున్నారో గమనించడానికి ఒక క్షణం తీసుకోండి.',
        'సెషన్ తర్వాత కూడా ప్రాసెసింగ్ కొనసాగడం సాధారణం. మీ పట్ల మృదువుగా ఉండండి.'
      ]
    }
  ]
};

// Direction labels
export const dotDirectionsByLang = {
  en: [
    { id: 'horizontal', label: 'Horizontal', icon: '↔️' },
    { id: 'vertical', label: 'Vertical', icon: '↕️' },
    { id: 'diagonal', label: 'Diagonal', icon: '↗️' }
  ],
  hi: [
    { id: 'horizontal', label: 'क्षैतिज', icon: '↔️' },
    { id: 'vertical', label: 'ऊर्ध्वाधर', icon: '↕️' },
    { id: 'diagonal', label: 'विकर्ण', icon: '↗️' }
  ],
  te: [
    { id: 'horizontal', label: 'క్షితిజ సమాంతరం', icon: '↔️' },
    { id: 'vertical', label: 'నిలువు', icon: '↕️' },
    { id: 'diagonal', label: 'వికర్ణం', icon: '↗️' }
  ]
};
