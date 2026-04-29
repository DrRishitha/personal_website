export const disordersByLang = {
  en: [
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
  ],

  hi: [
    {
      id: 'depression',
      title: 'मेजर डिप्रेसिव डिसऑर्डर (अवसाद)',
      category: 'मनोदशा संबंधी विकार',
      icon: '🌧️',
      briefDescription: 'उदासी और रुचि की हानि की लगातार बनी रहने वाली भावना जो दैनिक जीवन को प्रभावित करती है।',
      symptoms: [
        'लगातार उदास या खाली मन की स्थिति',
        'पहले पसंद आने वाली गतिविधियों में रुचि कम होना',
        'भूख या वजन में बदलाव',
        'नींद में गड़बड़ी',
        'थकान या ऊर्जा की कमी',
        'स्वयं को बेकार समझने या अपराधबोध की भावना',
        'ध्यान केंद्रित करने में कठिनाई',
        'मृत्यु या आत्महत्या के विचार'
      ],
      treatmentApproaches: ['CBT', 'दवाइयाँ (SSRIs, SNRIs)', 'मनोचिकित्सा', 'जीवनशैली में बदलाव'],
      whenToSeekHelp: 'यदि लक्षण दो सप्ताह से अधिक बने रहें और दैनिक जीवन में बाधा डालें।'
    },
    {
      id: 'gad',
      title: 'सामान्यीकृत चिंता विकार',
      category: 'चिंता विकार',
      icon: '😰',
      briefDescription: 'रोज़मर्रा की बातों को लेकर अत्यधिक, बेकाबू चिंता जो वास्तविक स्थिति के अनुपात से बाहर होती है।',
      symptoms: [
        'अत्यधिक चिंता और घबराहट',
        'बेचैनी या तनाव में रहना',
        'जल्दी थक जाना',
        'ध्यान केंद्रित करने में कठिनाई',
        'चिड़चिड़ापन',
        'मांसपेशियों में तनाव',
        'नींद की समस्याएँ'
      ],
      treatmentApproaches: ['CBT', 'दवाइयाँ (SSRIs, बस्पिरोन)', 'विश्राम तकनीकें', 'माइंडफुलनेस'],
      whenToSeekHelp: 'जब चिंता लगातार बनी रहे, उसे नियंत्रित करना मुश्किल हो और वह आपके दैनिक जीवन को प्रभावित करे।'
    },
    {
      id: 'ptsd',
      title: 'PTSD (अभिघातज पश्चात तनाव विकार)',
      category: 'आघात-संबंधी विकार',
      icon: '⚡',
      briefDescription: 'किसी भयावह घटना का अनुभव करने या उसे देखने के कारण उत्पन्न होने वाली स्थिति, जिसमें फ्लैशबैक और गंभीर चिंता होती है।',
      symptoms: [
        'अनचाही यादें या फ्लैशबैक',
        'आघातकारी घटना से जुड़े दुःस्वप्न',
        'गंभीर भावनात्मक पीड़ा',
        'याद दिलाने वाली चीज़ों से बचना',
        'सोच और मनोदशा में नकारात्मक बदलाव',
        'अत्यधिक सतर्कता और आसानी से चौंक जाना',
        'सोने में कठिनाई'
      ],
      treatmentApproaches: ['EMDR', 'ट्रॉमा-केंद्रित CBT', 'दवाइयाँ', 'एक्सपोज़र थेरेपी'],
      whenToSeekHelp: 'यदि लक्षण एक महीने से अधिक रहें और आपके दैनिक जीवन को काफ़ी प्रभावित करें।'
    },
    {
      id: 'ocd',
      title: 'OCD (अनियंत्रित-बाध्यकारी विकार)',
      category: 'चिंता विकार',
      icon: '🔄',
      briefDescription: 'अतार्किक विचारों और भय (ऑब्सेशन) के कारण दोहराव वाले व्यवहार (कम्पल्शन) उत्पन्न होने वाली स्थिति।',
      symptoms: [
        'अनचाहे, घुसपैठ करने वाले विचार',
        'दोहराव वाले व्यवहार या मानसिक क्रियाएँ',
        'संक्रमण का डर',
        'समरूपता या व्यवस्था की आवश्यकता',
        'आक्रामक या परेशान करने वाले विचार',
        'अत्यधिक जाँच करना या गिनना',
        'अनुष्ठान बाधित होने पर गंभीर पीड़ा'
      ],
      treatmentApproaches: ['ERP (एक्सपोज़र एंड रिस्पॉन्स प्रिवेंशन)', 'CBT', 'दवाइयाँ (SSRIs)', 'डीप ब्रेन स्टिम्युलेशन (गंभीर मामलों में)'],
      whenToSeekHelp: 'जब ऑब्सेशन और कम्पल्शन काफ़ी समय ले लें और पीड़ा का कारण बनें।'
    },
    {
      id: 'bipolar',
      title: 'बाइपोलर डिसऑर्डर',
      category: 'मनोदशा संबंधी विकार',
      icon: '🎭',
      briefDescription: 'एक ऐसी स्थिति जिसमें भावनात्मक उतार-चढ़ाव की चरम स्थितियाँ होती हैं — उन्माद (मेनिया) और अवसाद (डिप्रेशन)।',
      symptoms: [
        'मेनिक एपिसोड: बढ़ी हुई मनोदशा, ऊर्जा, नींद की कम आवश्यकता',
        'डिप्रेसिव एपिसोड: उदासी, निराशा, थकान',
        'मेनिया के दौरान आवेगी या जोखिम भरा व्यवहार',
        'दौड़ते विचार और तेज़ बोलना',
        'रिश्ते निभाने में कठिनाई',
        'गतिविधि स्तर में बदलाव',
        'संभावित मनोविकृति लक्षण'
      ],
      treatmentApproaches: ['मूड स्टेबलाइज़र (लिथियम)', 'एटिपिकल एंटीसाइकोटिक्स', 'मनोचिकित्सा', 'जीवनशैली प्रबंधन'],
      whenToSeekHelp: 'यदि आप अत्यधिक मनोदशा परिवर्तन का अनुभव करते हैं जो आपके रिश्तों और दैनिक जीवन को प्रभावित करते हैं।'
    },
    {
      id: 'schizophrenia',
      title: 'सिज़ोफ्रेनिया',
      category: 'मनोविकारात्मक विकार',
      icon: '🌀',
      briefDescription: 'एक गंभीर मानसिक विकार जो व्यक्ति की सोच, भावनाओं और व्यवहार को प्रभावित करता है, और प्रायः मनोविकृति से जुड़ा होता है।',
      symptoms: [
        'विभ्रम (चीज़ों का सुनाई या दिखाई देना)',
        'भ्रम (झूठे विश्वास)',
        'अव्यवस्थित सोच और बोलचाल',
        'अत्यंत अव्यवस्थित व्यवहार',
        'भावनात्मक अभिव्यक्ति में कमी',
        'सामाजिक रूप से अलग-थलग रहना',
        'याददाश्त और ध्यान में कठिनाई'
      ],
      treatmentApproaches: ['एंटीसाइकोटिक दवाइयाँ', 'मनोसामाजिक चिकित्सा', 'समन्वित विशेषज्ञ देखभाल', 'पारिवारिक सहयोग'],
      whenToSeekHelp: 'यदि विभ्रम, भ्रम या अव्यवस्थित सोच का अनुभव हो तो तुरंत मदद लें।'
    },
    {
      id: 'adhd',
      title: 'ADHD',
      category: 'तंत्रिका विकासात्मक विकार',
      icon: '⚡',
      briefDescription: 'एक तंत्रिका विकासात्मक विकार जिसमें असावधानी, अति-सक्रियता और आवेगशीलता होती है और जो वयस्कता तक बना रह सकता है।',
      symptoms: [
        'ध्यान बनाए रखने में कठिनाई',
        'आसानी से ध्यान भटकना',
        'दैनिक कार्यों में भुलक्कड़पन',
        'बेचैनी या स्थिर न रह पाना',
        'इंतज़ार करने या बारी लेने में कठिनाई',
        'अत्यधिक बोलना',
        'कार्यों को व्यवस्थित करने में कठिनाई'
      ],
      treatmentApproaches: ['स्टिमुलेंट दवाइयाँ', 'व्यवहार चिकित्सा', 'CBT', 'संगठनात्मक कौशल प्रशिक्षण'],
      whenToSeekHelp: 'जब ध्यान और व्यवहार की कठिनाइयाँ स्कूल, कार्य या रिश्तों को काफ़ी प्रभावित करें।'
    },
    {
      id: 'eating-disorders',
      title: 'भोजन संबंधी विकार',
      category: 'भोजन संबंधी विकार',
      icon: '🍽️',
      briefDescription: 'खाने के लगातार बने रहने वाले व्यवहार से जुड़ी गंभीर स्थितियाँ जो स्वास्थ्य और दैनिक जीवन को नकारात्मक रूप से प्रभावित करती हैं।',
      symptoms: [
        'भोजन के सेवन पर अत्यधिक प्रतिबंध',
        'अत्यधिक खाने के दौरे (बिंज ईटिंग)',
        'पर्जिंग व्यवहार (उल्टी कराना आदि)',
        'शरीर के वजन या आकार को लेकर ज़्यादा सोचना',
        'विकृत शारीरिक छवि',
        'सामाजिक गतिविधियों से दूरी',
        'शारीरिक संकेत: थकान, चक्कर, बाल झड़ना'
      ],
      treatmentApproaches: ['पोषण परामर्श', 'CBT', 'पारिवारिक चिकित्सा', 'सह-स्थितियों के लिए दवाइयाँ'],
      whenToSeekHelp: 'यदि भोजन संबंधी व्यवहार शारीरिक स्वास्थ्य समस्याओं या भावनात्मक पीड़ा का कारण बन रहे हों।'
    },
    {
      id: 'substance-use',
      title: 'मादक पदार्थ उपयोग विकार',
      category: 'व्यसन संबंधी विकार',
      icon: '🚫',
      briefDescription: 'एक स्थिति जिसमें मादक पदार्थों का उपयोग चिकित्सीय रूप से महत्वपूर्ण क्षति या पीड़ा का कारण बनता है।',
      symptoms: [
        'मादक पदार्थ के उपयोग पर नियंत्रण न होना',
        'हानिकारक परिणामों के बावजूद उपयोग जारी रखना',
        'सहनशीलता (समान प्रभाव के लिए अधिक मात्रा की आवश्यकता)',
        'बंद करने पर वापसी (विदड्रॉल) के लक्षण',
        'ज़िम्मेदारियों की उपेक्षा',
        'सामाजिक और रिश्तों की समस्याएँ',
        'उपयोग के दौरान जोखिम भरा व्यवहार'
      ],
      treatmentApproaches: ['डिटॉक्सिफिकेशन', 'MAT (दवाइयों द्वारा सहायता प्राप्त उपचार)', 'CBT', '12-स्टेप कार्यक्रम', 'समूह चिकित्सा'],
      whenToSeekHelp: 'जब मादक पदार्थ का उपयोग आपके स्वास्थ्य, कार्य या रिश्तों में बाधा डाले।'
    },
    {
      id: 'panic-disorder',
      title: 'पैनिक डिसऑर्डर',
      category: 'चिंता विकार',
      icon: '💓',
      briefDescription: 'अचानक, बार-बार होने वाले तीव्र भय के दौरे जो शारीरिक लक्षणों के साथ आते हैं।',
      symptoms: [
        'अचानक तीव्र भय या असुविधा',
        'धड़कन तेज़ होना या दिल का तेज़ धड़कना',
        'पसीना आना और कांपना',
        'सांस लेने में कठिनाई',
        'दम घुटने जैसा एहसास',
        'सीने में दर्द',
        'नियंत्रण खोने या मरने का डर'
      ],
      treatmentApproaches: ['CBT', 'दवाइयाँ (SSRIs, अल्पकालिक बेंज़ोडायज़ेपीन्स)', 'श्वास तकनीकें', 'एक्सपोज़र थेरेपी'],
      whenToSeekHelp: 'यदि पैनिक अटैक बार-बार हों और आपको दूसरे अटैक का डर लगने लगे।'
    },
    {
      id: 'insomnia',
      title: 'अनिद्रा विकार',
      category: 'नींद संबंधी विकार',
      icon: '🌙',
      briefDescription: 'पर्याप्त अवसर होने के बावजूद नींद आने, बनी रहने या उसकी गुणवत्ता में लगातार कठिनाई।',
      symptoms: [
        'सोने में कठिनाई',
        'रात में बार-बार जाग जाना',
        'बहुत जल्दी जाग जाना',
        'दिन में थकान और नींद आना',
        'चिड़चिड़ापन और मनोदशा में गड़बड़ी',
        'ध्यान केंद्रित करने में कठिनाई',
        'नींद को लेकर चिंता'
      ],
      treatmentApproaches: ['CBT-I (अनिद्रा के लिए CBT)', 'नींद की स्वच्छता संबंधी शिक्षा', 'विश्राम तकनीकें', 'दवाइयाँ (अल्पकालिक)'],
      whenToSeekHelp: 'यदि नींद की समस्याएँ तीन महीने से अधिक रहें और दिन के कामकाज को प्रभावित करें।'
    },
    {
      id: 'personality-disorders',
      title: 'व्यक्तित्व विकार',
      category: 'व्यक्तित्व विकार',
      icon: '🪞',
      briefDescription: 'आंतरिक अनुभव और व्यवहार के स्थायी पैटर्न जो सांस्कृतिक अपेक्षाओं से भिन्न होते हैं और पीड़ा का कारण बनते हैं।',
      symptoms: [
        'सोचने और व्यवहार के लगातार बने रहने वाले पैटर्न',
        'रिश्ते निभाने में कठिनाई',
        'तीव्र या अस्थिर भावनाएँ',
        'आवेगी व्यवहार',
        'पहचान संबंधी अस्थिरता',
        'त्याग दिए जाने का डर',
        'दीर्घकालिक खालीपन की भावना'
      ],
      treatmentApproaches: ['DBT (डायलेक्टिकल बिहेवियर थेरेपी)', 'स्कीमा थेरेपी', 'मेंटलाइज़ेशन-आधारित थेरेपी', 'समूह चिकित्सा'],
      whenToSeekHelp: 'जब व्यवहार के पैटर्न लगातार रिश्तों और दैनिक जीवन में समस्याएँ पैदा करें।'
    }
  ],

  te: [
    {
      id: 'depression',
      title: 'మేజర్ డిప్రెసివ్ డిజార్డర్ (తీవ్ర కుంగుబాటు)',
      category: 'మూడ్ డిజార్డర్స్',
      icon: '🌧️',
      briefDescription: 'రోజువారీ జీవితానికి అడ్డంకిగా మారే నిరంతర దుఃఖం మరియు ఆసక్తి కోల్పోవడం యొక్క స్థితి.',
      symptoms: [
        'నిరంతర దుఃఖం లేదా ఖాళీ భావన',
        'ఇంతకు ముందు ఇష్టమైన పనుల్లో ఆసక్తి కోల్పోవడం',
        'ఆకలి లేదా బరువులో మార్పులు',
        'నిద్ర సంబంధిత ఇబ్బందులు',
        'అలసట లేదా శక్తి లోపం',
        'తాను పనికిరానివాడని లేదా అపరాధభావం',
        'ఏకాగ్రత చేయడంలో కష్టం',
        'మరణం లేదా ఆత్మహత్య గురించి ఆలోచనలు'
      ],
      treatmentApproaches: ['CBT', 'మందులు (SSRIs, SNRIs)', 'సైకోథెరపీ', 'జీవనశైలిలో మార్పులు'],
      whenToSeekHelp: 'లక్షణాలు రెండు వారాలకు మించి కొనసాగితే మరియు రోజువారీ జీవితంలో అడ్డంకిగా మారితే.'
    },
    {
      id: 'gad',
      title: 'జనరలైజ్డ్ యాంగ్జైటీ డిజార్డర్',
      category: 'ఆందోళన విక్రుతులు',
      icon: '😰',
      briefDescription: 'వాస్తవ పరిస్థితికి అనుపాతంలో లేని విధంగా, రోజువారీ విషయాలపై అతిగా, నియంత్రించలేని ఆందోళన.',
      symptoms: [
        'అతిగా ఆందోళన మరియు భయం',
        'అశాంతి లేదా ఉత్కంఠ స్థితిలో ఉండడం',
        'తేలికగా అలసిపోవడం',
        'ఏకాగ్రత చేయడంలో కష్టం',
        'చిరాకు',
        'కండరాల ఒత్తిడి',
        'నిద్ర సమస్యలు'
      ],
      treatmentApproaches: ['CBT', 'మందులు (SSRIs, బస్పిరోన్)', 'రిలాక్సేషన్ టెక్నిక్స్', 'మైండ్‌ఫుల్‌నెస్'],
      whenToSeekHelp: 'ఆందోళన నిరంతరంగా ఉండి, నియంత్రించడం కష్టమై, రోజువారీ జీవితాన్ని ప్రభావితం చేసినప్పుడు.'
    },
    {
      id: 'ptsd',
      title: 'PTSD (అఘాతం తర్వాత ఒత్తిడి విక్రుతి)',
      category: 'అఘాత సంబంధ విక్రుతులు',
      icon: '⚡',
      briefDescription: 'భయానక సంఘటనను అనుభవించడం లేదా చూడటం వల్ల ఏర్పడే పరిస్థితి, ఇది ఫ్లాష్‌బ్యాక్‌లు మరియు తీవ్రమైన ఆందోళనలను కలిగిస్తుంది.',
      symptoms: [
        'అనుచిత జ్ఞాపకాలు లేదా ఫ్లాష్‌బ్యాక్‌లు',
        'అఘాత సంఘటన గురించి దుస్వప్నాలు',
        'తీవ్రమైన మానసిక బాధ',
        'గుర్తు చేసే విషయాలను తప్పించుకోవడం',
        'ఆలోచన మరియు మూడ్‌లో ప్రతికూల మార్పులు',
        'అతి జాగ్రత్త మరియు తేలికగా ఉలికిపడటం',
        'నిద్రపోవడంలో కష్టం'
      ],
      treatmentApproaches: ['EMDR', 'ట్రామా-కేంద్రిత CBT', 'మందులు', 'ఎక్స్‌పోజర్ థెరపీ'],
      whenToSeekHelp: 'లక్షణాలు ఒక నెలకు మించి కొనసాగితే మరియు రోజువారీ జీవితాన్ని గణనీయంగా దెబ్బతీస్తే.'
    },
    {
      id: 'ocd',
      title: 'OCD (అబ్సెసివ్-కంపల్సివ్ డిజార్డర్)',
      category: 'ఆందోళన విక్రుతులు',
      icon: '🔄',
      briefDescription: 'అనుచిత ఆలోచనలు మరియు భయాలు (అబ్సెషన్‌లు) పునరావృత ప్రవర్తనలకు (కంపల్షన్‌లు) దారితీసే స్థితి.',
      symptoms: [
        'అవాంఛిత, చొరబడే ఆలోచనలు',
        'పునరావృత ప్రవర్తనలు లేదా మానసిక చర్యలు',
        'కలుషిత భయం',
        'సమతుల్యత లేదా క్రమం యొక్క అవసరం',
        'దురాక్రమక లేదా కలతపెట్టే ఆలోచనలు',
        'అతిగా తనిఖీ చేయడం లేదా లెక్కించడం',
        'ఆచారాలు అడ్డుపడినప్పుడు తీవ్రమైన బాధ'
      ],
      treatmentApproaches: ['ERP (ఎక్స్‌పోజర్ అండ్ రెస్పాన్స్ ప్రివెన్షన్)', 'CBT', 'మందులు (SSRIs)', 'డీప్ బ్రెయిన్ స్టిమ్యులేషన్ (తీవ్రమైన కేసుల్లో)'],
      whenToSeekHelp: 'అబ్సెషన్‌లు మరియు కంపల్షన్‌లు గణనీయమైన సమయాన్ని తీసుకుని, బాధ కలిగించినప్పుడు.'
    },
    {
      id: 'bipolar',
      title: 'బైపోలార్ డిజార్డర్',
      category: 'మూడ్ డిజార్డర్స్',
      icon: '🎭',
      briefDescription: 'మానసిక ఎత్తులు (మేనియా) మరియు లోతులు (డిప్రెషన్)తో సహా తీవ్రమైన మూడ్ మార్పులను కలిగించే స్థితి.',
      symptoms: [
        'మేనిక్ ఎపిసోడ్‌లు: పెరిగిన మూడ్, శక్తి, తగ్గిన నిద్ర అవసరం',
        'డిప్రెసివ్ ఎపిసోడ్‌లు: దుఃఖం, నిరాశ, అలసట',
        'మేనియా సమయంలో ఆవేశపూరిత లేదా ప్రమాదకర ప్రవర్తన',
        'వేగవంతమైన ఆలోచనలు మరియు వేగవంతమైన మాట',
        'సంబంధాలను నిర్వహించడంలో కష్టం',
        'కార్యకలాపాల స్థాయిల్లో మార్పులు',
        'సాధ్యమైన సైకోటిక్ లక్షణాలు'
      ],
      treatmentApproaches: ['మూడ్ స్టెబిలైజర్‌లు (లిథియం)', 'ఎటిపికల్ యాంటిసైకోటిక్‌లు', 'సైకోథెరపీ', 'జీవనశైలి నిర్వహణ'],
      whenToSeekHelp: 'మీ సంబంధాలు మరియు రోజువారీ జీవితాన్ని ప్రభావితం చేసే తీవ్రమైన మూడ్ మార్పులను అనుభవిస్తే.'
    },
    {
      id: 'schizophrenia',
      title: 'సిజోఫ్రెనియా',
      category: 'మనోవ్యాధి విక్రుతులు',
      icon: '🌀',
      briefDescription: 'వ్యక్తి ఆలోచించే, అనుభవించే మరియు ప్రవర్తించే తీరును ప్రభావితం చేసే తీవ్రమైన మానసిక విక్రుతి, తరచుగా సైకోసిస్‌తో సంబంధం కలిగి ఉంటుంది.',
      symptoms: [
        'భ్రాంతులు (లేని వాటిని వినడం లేదా చూడటం)',
        'భ్రమలు (తప్పుడు నమ్మకాలు)',
        'అస్తవ్యస్త ఆలోచన మరియు మాట',
        'అత్యంత అస్తవ్యస్త ప్రవర్తన',
        'భావోద్వేగ వ్యక్తీకరణలో తగ్గుదల',
        'సామాజిక ఏకాంతం',
        'జ్ఞాపకశక్తి మరియు ఏకాగ్రతలో కష్టం'
      ],
      treatmentApproaches: ['యాంటిసైకోటిక్ మందులు', 'మనోసామాజిక చికిత్స', 'సమన్వయ ప్రత్యేక సంరక్షణ', 'కుటుంబ మద్దతు'],
      whenToSeekHelp: 'భ్రాంతులు, భ్రమలు లేదా అస్తవ్యస్త ఆలోచనలు అనుభవిస్తే వెంటనే సహాయం తీసుకోండి.'
    },
    {
      id: 'adhd',
      title: 'ADHD',
      category: 'నాడీ వికాస విక్రుతులు',
      icon: '⚡',
      briefDescription: 'అశ్రద్ధ, అతి-క్రియాశీలత మరియు ఆవేశశీలతతో కూడిన నాడీ వికాస విక్రుతి, ఇది యవ్వనం వరకు కొనసాగుతుంది.',
      symptoms: [
        'శ్రద్ధను నిలుపుకోవడంలో కష్టం',
        'తేలికగా చిత్తచాంచల్యం',
        'రోజువారీ పనుల్లో మరుపు',
        'కదలికలు లేదా అశాంతి',
        'వేచి ఉండడంలో లేదా వంతు తీసుకోవడంలో కష్టం',
        'అతిగా మాట్లాడటం',
        'పనులను క్రమబద్ధీకరించడంలో కష్టం'
      ],
      treatmentApproaches: ['స్టిమ్యులెంట్ మందులు', 'ప్రవర్తన చికిత్స', 'CBT', 'వ్యవస్థాపక నైపుణ్యాల శిక్షణ'],
      whenToSeekHelp: 'శ్రద్ధ మరియు ప్రవర్తన ఇబ్బందులు పాఠశాల, పని లేదా సంబంధాలను గణనీయంగా ప్రభావితం చేసినప్పుడు.'
    },
    {
      id: 'eating-disorders',
      title: 'భోజన విక్రుతులు',
      category: 'భోజన విక్రుతులు',
      icon: '🍽️',
      briefDescription: 'ఆరోగ్యం మరియు రోజువారీ జీవితాన్ని ప్రతికూలంగా ప్రభావితం చేసే నిరంతర భోజన ప్రవర్తనలతో కూడిన తీవ్రమైన పరిస్థితులు.',
      symptoms: [
        'ఆహార సేవనపై తీవ్ర నియంత్రణ',
        'అతిగా తినే ఎపిసోడ్‌లు (బింజ్ ఈటింగ్)',
        'పర్జింగ్ ప్రవర్తనలు (వాంతులు చేయించుకోవడం వంటివి)',
        'శరీర బరువు లేదా ఆకారంపై విపరీతమైన ఆలోచన',
        'వక్రీకృత శరీర చిత్రణ',
        'సామాజిక కార్యకలాపాల నుండి దూరంగా ఉండడం',
        'శారీరక సంకేతాలు: అలసట, తల తిరగడం, వెంట్రుకలు రాలడం'
      ],
      treatmentApproaches: ['పోషణ సలహా', 'CBT', 'కుటుంబ-ఆధారిత చికిత్స', 'సహ-సంబంధ పరిస్థితుల కోసం మందులు'],
      whenToSeekHelp: 'భోజన ప్రవర్తనలు శారీరక ఆరోగ్య సమస్యలు లేదా మానసిక బాధను కలిగిస్తుంటే.'
    },
    {
      id: 'substance-use',
      title: 'మాదక ద్రవ్య వినియోగ విక్రుతి',
      category: 'వ్యసన విక్రుతులు',
      icon: '🚫',
      briefDescription: 'మాదక ద్రవ్యాల వినియోగం వైద్యపరంగా గణనీయమైన బాధ లేదా పనితీరు లోపానికి దారితీసే స్థితి.',
      symptoms: [
        'మాదక ద్రవ్యాల వినియోగాన్ని నియంత్రించలేకపోవడం',
        'హానికరమైన పరిణామాలు ఉన్నప్పటికీ వాడకం కొనసాగించడం',
        'సహనశీలత (అదే ప్రభావానికి ఎక్కువ మోతాదు అవసరం)',
        'మానేస్తే వెనుదిరిగే లక్షణాలు (విత్‌డ్రాల్)',
        'బాధ్యతలను నిర్లక్ష్యం చేయడం',
        'సామాజిక మరియు సంబంధ సమస్యలు',
        'వాడుతున్నప్పుడు ప్రమాదకర ప్రవర్తన'
      ],
      treatmentApproaches: ['డిటాక్సిఫికేషన్', 'MAT (మందుల-సహాయక చికిత్స)', 'CBT', '12-స్టెప్ కార్యక్రమాలు', 'గ్రూప్ థెరపీ'],
      whenToSeekHelp: 'మాదక ద్రవ్యాల వినియోగం మీ ఆరోగ్యం, పని లేదా సంబంధాలకు అడ్డంకిగా మారినప్పుడు.'
    },
    {
      id: 'panic-disorder',
      title: 'పానిక్ డిజార్డర్',
      category: 'ఆందోళన విక్రుతులు',
      icon: '💓',
      briefDescription: 'శారీరక లక్షణాలతో కూడిన ఆకస్మిక, పునరావృత తీవ్ర భయం యొక్క ఎపిసోడ్‌లు.',
      symptoms: [
        'ఆకస్మిక తీవ్ర భయం లేదా అసౌకర్యం',
        'గుండె దడ లేదా వేగంగా కొట్టుకోవడం',
        'చెమట పట్టడం మరియు వణుకు',
        'శ్వాస తీసుకోవడంలో ఇబ్బంది',
        'ఊపిరి ఆడనట్లు అనిపించడం',
        'ఛాతీ నొప్పి',
        'నియంత్రణ కోల్పోవడం లేదా మరణిస్తాననే భయం'
      ],
      treatmentApproaches: ['CBT', 'మందులు (SSRIs, స్వల్పకాలిక బెంజోడయాజెపిన్‌లు)', 'శ్వాస పద్ధతులు', 'ఎక్స్‌పోజర్ థెరపీ'],
      whenToSeekHelp: 'పానిక్ అటాక్‌లు తరచుగా సంభవిస్తే మరియు మరో అటాక్ వస్తుందనే భయం పెరిగితే.'
    },
    {
      id: 'insomnia',
      title: 'నిద్రలేమి విక్రుతి',
      category: 'నిద్ర విక్రుతులు',
      icon: '🌙',
      briefDescription: 'తగినంత అవకాశం ఉన్నప్పటికీ నిద్ర పట్టడంలో, నిలబెట్టుకోవడంలో లేదా నాణ్యతలో నిరంతర కష్టం.',
      symptoms: [
        'నిద్రపోవడంలో కష్టం',
        'రాత్రి సమయంలో తరచుగా మేల్కొనడం',
        'చాలా తొందరగా మేల్కొనడం',
        'పగటిపూట అలసట మరియు నిద్రమత్తు',
        'చిరాకు మరియు మూడ్ ఇబ్బందులు',
        'ఏకాగ్రత చేయడంలో కష్టం',
        'నిద్ర గురించి ఆందోళన'
      ],
      treatmentApproaches: ['CBT-I (నిద్రలేమి కోసం CBT)', 'నిద్ర పరిశుభ్రత విద్య', 'రిలాక్సేషన్ టెక్నిక్స్', 'మందులు (స్వల్పకాలికం)'],
      whenToSeekHelp: 'నిద్ర సమస్యలు మూడు నెలలకు మించి కొనసాగితే మరియు పగటిపూట పనితీరును ప్రభావితం చేస్తే.'
    },
    {
      id: 'personality-disorders',
      title: 'వ్యక్తిత్వ విక్రుతులు',
      category: 'వ్యక్తిత్వ విక్రుతులు',
      icon: '🪞',
      briefDescription: 'సాంస్కృతిక అంచనాల నుండి వేరుపడి, బాధ కలిగించే అంతర్గత అనుభవం మరియు ప్రవర్తన యొక్క శాశ్వత నమూనాలు.',
      symptoms: [
        'ఆలోచన మరియు ప్రవర్తన యొక్క నిరంతర నమూనాలు',
        'సంబంధాలను నిర్వహించడంలో కష్టం',
        'తీవ్రమైన లేదా అస్థిర భావోద్వేగాలు',
        'ఆవేశపూరిత ప్రవర్తన',
        'గుర్తింపు సంబంధ అస్థిరత',
        'వదిలివేయబడతామనే భయం',
        'దీర్ఘకాలిక శూన్యత భావన'
      ],
      treatmentApproaches: ['DBT (డయలెక్టికల్ బిహేవియర్ థెరపీ)', 'స్కీమా థెరపీ', 'మెంటలైజేషన్-ఆధారిత థెరపీ', 'గ్రూప్ థెరపీ'],
      whenToSeekHelp: 'ప్రవర్తన నమూనాలు సంబంధాలు మరియు రోజువారీ జీవితంలో నిరంతర సమస్యలను కలిగిస్తుంటే.'
    }
  ]
};

export const faqsByLang = {
  en: [
    {
      question: "What should I expect during my first visit?",
      answer: "Your first appointment is a comprehensive 60-90 minute evaluation. Dr. Kotla will discuss your medical history, current symptoms, lifestyle, and goals. Together, you will develop a personalized treatment plan. Please bring any prior medical records or medication lists."
    },
    {
      question: "Do you offer telepsychiatry / online consultations?",
      answer: "Yes, we offer secure video consultations for patients who prefer remote sessions. Online consultations are available for follow-ups and certain initial evaluations. You can book an online appointment through our Contact page."
    },
    {
      question: "How long does treatment usually take?",
      answer: "Treatment duration varies depending on the condition, its severity, and individual response. Some patients see improvement within weeks, while others may benefit from longer-term care. Dr. Kotla will discuss expected timelines during your evaluation."
    },
    {
      question: "Are the self-help tools on this website a substitute for treatment?",
      answer: "No. Our self-help tools are screening instruments and relaxation aids designed to support your well-being. They are not diagnostic tools and cannot replace a professional evaluation. If your scores suggest concern, please schedule a consultation."
    },
    {
      question: "What is the difference between a psychiatrist and a psychologist?",
      answer: "A psychiatrist is a medical doctor (MD) who can prescribe medications and provide therapy. A psychologist typically holds a PhD or PsyD and provides therapy and psychological testing but cannot prescribe medication in most regions. Both play important roles in mental health care."
    },
    {
      question: "Will I need to take medication?",
      answer: "Not necessarily. Treatment plans are individualized. Some conditions respond well to therapy alone, while others benefit from a combination of medication and therapy. Dr. Kotla will discuss all options and help you make an informed decision."
    },
    {
      question: "Is everything I share confidential?",
      answer: "Yes, strict confidentiality is maintained for all patient information. Information is only shared with your written consent, except in situations where there is imminent risk to yourself or others, as required by law."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept UPI payments, bank transfers, and cash payments at the clinic. For online consultations, UPI payment details are provided during the booking process."
    },
    {
      question: "Can I bring a family member to my appointment?",
      answer: "Absolutely. Having a trusted family member or friend can be helpful, especially during the initial evaluation. Family involvement can also be an important part of certain treatment plans."
    },
    {
      question: "What should I do in a mental health emergency?",
      answer: "If you or someone you know is in immediate danger, please call emergency services (112) or the KIRAN Mental Health Helpline at 1800-599-0019 (toll-free, 24/7). Do not wait for a scheduled appointment in an emergency."
    }
  ],

  hi: [
    {
      question: "मेरी पहली मुलाकात के दौरान मुझे क्या उम्मीद करनी चाहिए?",
      answer: "आपकी पहली अपॉइंटमेंट 60-90 मिनट का एक व्यापक मूल्यांकन होती है। डॉ. कोटला आपके चिकित्सा इतिहास, वर्तमान लक्षणों, जीवनशैली और लक्ष्यों पर चर्चा करेंगी। एक साथ मिलकर, आप एक व्यक्तिगत उपचार योजना तैयार करेंगे। कृपया कोई भी पिछले चिकित्सा रिकॉर्ड या दवाओं की सूची साथ लाएँ।"
    },
    {
      question: "क्या आप टेलीसाइकाइट्री / ऑनलाइन परामर्श प्रदान करते हैं?",
      answer: "हाँ, हम उन रोगियों के लिए सुरक्षित वीडियो परामर्श प्रदान करते हैं जो दूरस्थ सत्र पसंद करते हैं। ऑनलाइन परामर्श फॉलो-अप और कुछ प्रारंभिक मूल्यांकन के लिए उपलब्ध हैं। आप हमारे कॉन्टैक्ट पेज के माध्यम से ऑनलाइन अपॉइंटमेंट बुक कर सकते हैं।"
    },
    {
      question: "उपचार में आमतौर पर कितना समय लगता है?",
      answer: "उपचार की अवधि स्थिति, उसकी गंभीरता और व्यक्तिगत प्रतिक्रिया पर निर्भर करती है। कुछ रोगियों को कुछ हफ्तों में सुधार दिखाई देता है, जबकि अन्य को दीर्घकालिक देखभाल से लाभ हो सकता है। डॉ. कोटला आपके मूल्यांकन के दौरान अपेक्षित समय-सीमा पर चर्चा करेंगी।"
    },
    {
      question: "क्या इस वेबसाइट पर उपलब्ध स्व-सहायता उपकरण उपचार का विकल्प हैं?",
      answer: "नहीं। हमारे स्व-सहायता उपकरण स्क्रीनिंग साधन और विश्राम सहायक हैं जो आपकी भलाई का समर्थन करने के लिए बनाए गए हैं। ये निदान उपकरण नहीं हैं और किसी पेशेवर मूल्यांकन का स्थान नहीं ले सकते। यदि आपके स्कोर चिंता का संकेत देते हैं, तो कृपया परामर्श का समय निर्धारित करें।"
    },
    {
      question: "मनोचिकित्सक और मनोवैज्ञानिक में क्या अंतर है?",
      answer: "मनोचिकित्सक एक चिकित्सा डॉक्टर (MD) होता है जो दवाइयाँ लिख सकता है और चिकित्सा प्रदान कर सकता है। मनोवैज्ञानिक के पास आमतौर पर PhD या PsyD होती है और वह चिकित्सा और मनोवैज्ञानिक परीक्षण प्रदान करता है लेकिन अधिकांश क्षेत्रों में दवाइयाँ नहीं लिख सकता। दोनों मानसिक स्वास्थ्य देखभाल में महत्वपूर्ण भूमिका निभाते हैं।"
    },
    {
      question: "क्या मुझे दवाइयाँ लेनी पड़ेंगी?",
      answer: "ज़रूरी नहीं। उपचार योजनाएँ व्यक्तिगत रूप से तैयार की जाती हैं। कुछ स्थितियाँ केवल चिकित्सा से ही ठीक हो जाती हैं, जबकि अन्य को दवा और चिकित्सा के संयोजन से लाभ होता है। डॉ. कोटला सभी विकल्पों पर चर्चा करेंगी और आपको एक सूचित निर्णय लेने में मदद करेंगी।"
    },
    {
      question: "क्या मेरी साझा की गई सब बातें गोपनीय रहेंगी?",
      answer: "हाँ, सभी रोगी जानकारी के लिए सख्त गोपनीयता बनाए रखी जाती है। जानकारी केवल आपकी लिखित सहमति से ही साझा की जाती है, सिवाय उन स्थितियों के जहाँ आपके या दूसरों के लिए तत्काल खतरा हो, जैसा कि कानून द्वारा आवश्यक है।"
    },
    {
      question: "आप कौन-कौन से भुगतान के तरीके स्वीकार करते हैं?",
      answer: "हम क्लिनिक में UPI भुगतान, बैंक ट्रांसफर और नकद भुगतान स्वीकार करते हैं। ऑनलाइन परामर्श के लिए, बुकिंग प्रक्रिया के दौरान UPI भुगतान विवरण प्रदान किए जाते हैं।"
    },
    {
      question: "क्या मैं अपनी अपॉइंटमेंट पर परिवार के किसी सदस्य को ला सकता हूँ?",
      answer: "बिल्कुल। एक विश्वसनीय पारिवारिक सदस्य या मित्र का साथ होना सहायक हो सकता है, विशेष रूप से प्रारंभिक मूल्यांकन के दौरान। कुछ उपचार योजनाओं में परिवार की भागीदारी एक महत्वपूर्ण हिस्सा भी हो सकती है।"
    },
    {
      question: "मानसिक स्वास्थ्य आपात स्थिति में मुझे क्या करना चाहिए?",
      answer: "यदि आप या आपका कोई परिचित तत्काल खतरे में है, तो कृपया आपातकालीन सेवाओं (112) या किरण मानसिक स्वास्थ्य हेल्पलाइन को 1800-599-0019 (टोल-फ्री, 24/7) पर कॉल करें। आपात स्थिति में निर्धारित अपॉइंटमेंट का इंतज़ार न करें।"
    }
  ],

  te: [
    {
      question: "నా మొదటి విజిట్‌లో నేను ఏమి అంచనా వేయాలి?",
      answer: "మీ మొదటి అపాయింట్‌మెంట్ 60-90 నిమిషాల సమగ్ర మూల్యాంకనం. డా. కోట్ల మీ వైద్య చరిత్ర, ప్రస్తుత లక్షణాలు, జీవనశైలి మరియు లక్ష్యాల గురించి చర్చిస్తారు. కలిసి, మీరు వ్యక్తిగతీకరించిన చికిత్స ప్రణాళికను అభివృద్ధి చేస్తారు. దయచేసి ఏవైనా గత వైద్య రికార్డులు లేదా మందుల జాబితాలను తీసుకురండి."
    },
    {
      question: "మీరు టెలీసైకియాట్రీ / ఆన్‌లైన్ సంప్రదింపులు అందిస్తారా?",
      answer: "అవును, దూరస్థ సెషన్‌లను ఇష్టపడే రోగుల కోసం మేము సురక్షితమైన వీడియో సంప్రదింపులను అందిస్తాము. ఆన్‌లైన్ సంప్రదింపులు ఫాలో-అప్‌లకు మరియు కొన్ని ప్రారంభ మూల్యాంకనాలకు అందుబాటులో ఉన్నాయి. మీరు మా కాంటాక్ట్ పేజీ ద్వారా ఆన్‌లైన్ అపాయింట్‌మెంట్ బుక్ చేయవచ్చు."
    },
    {
      question: "సాధారణంగా చికిత్సకు ఎంత సమయం పడుతుంది?",
      answer: "చికిత్స వ్యవధి స్థితి, దాని తీవ్రత మరియు వ్యక్తిగత ప్రతిస్పందనపై ఆధారపడి ఉంటుంది. కొంతమంది రోగులు కొద్ది వారాల్లో మెరుగుదలను చూస్తారు, మరికొందరు దీర్ఘకాలిక సంరక్షణ నుండి ప్రయోజనం పొందవచ్చు. డా. కోట్ల మీ మూల్యాంకనం సమయంలో ఆశించిన కాల వ్యవధులపై చర్చిస్తారు."
    },
    {
      question: "ఈ వెబ్‌సైట్‌లోని స్వయం-సహాయ సాధనాలు చికిత్సకు ప్రత్యామ్నాయమా?",
      answer: "కాదు. మా స్వయం-సహాయ సాధనాలు మీ శ్రేయస్సుకు మద్దతు ఇవ్వడానికి రూపొందించిన స్క్రీనింగ్ సాధనాలు మరియు రిలాక్సేషన్ సహాయకులు. ఇవి రోగనిర్ధారణ సాధనాలు కావు మరియు వృత్తిపరమైన మూల్యాంకనానికి ప్రత్యామ్నాయం కావు. మీ స్కోర్‌లు ఆందోళనను సూచిస్తే, దయచేసి సంప్రదింపు షెడ్యూల్ చేయండి."
    },
    {
      question: "సైకియాట్రిస్ట్ మరియు సైకాలజిస్ట్ మధ్య తేడా ఏమిటి?",
      answer: "సైకియాట్రిస్ట్ అనేది మందులు సూచించగలిగే మరియు చికిత్సను అందించగల వైద్య డాక్టర్ (MD). సైకాలజిస్ట్‌కు సాధారణంగా PhD లేదా PsyD ఉంటుంది మరియు చికిత్స మరియు మానసిక పరీక్షలను అందిస్తారు, కానీ చాలా ప్రాంతాల్లో మందులు సూచించలేరు. మానసిక ఆరోగ్య సంరక్షణలో ఇద్దరూ ముఖ్యమైన పాత్రలు పోషిస్తారు."
    },
    {
      question: "నేను మందులు తీసుకోవాల్సి ఉంటుందా?",
      answer: "తప్పనిసరి కాదు. చికిత్స ప్రణాళికలు వ్యక్తిగతీకరించబడతాయి. కొన్ని పరిస్థితులు చికిత్స మాత్రమే తీసుకుంటే బాగా స్పందిస్తాయి, మరికొన్ని మందులు మరియు చికిత్స కలయిక నుండి ప్రయోజనం పొందుతాయి. డా. కోట్ల అన్ని ఎంపికలను చర్చిస్తారు మరియు సమాచారయుతమైన నిర్ణయం తీసుకోవడంలో మీకు సహాయం చేస్తారు."
    },
    {
      question: "నేను పంచుకునే ప్రతిదీ గోప్యంగా ఉంటుందా?",
      answer: "అవును, రోగుల సమాచారం మొత్తానికి కఠినమైన గోప్యత పాటించబడుతుంది. మీకు లేదా ఇతరులకు తక్షణ ప్రమాదం ఉన్న పరిస్థితులను మినహాయించి, చట్టం ద్వారా అవసరమైన విధంగా, మీ లిఖిత సమ్మతితోనే సమాచారం పంచుకోబడుతుంది."
    },
    {
      question: "మీరు ఏ చెల్లింపు పద్ధతులను అంగీకరిస్తారు?",
      answer: "మేము క్లినిక్‌లో UPI చెల్లింపులు, బ్యాంక్ బదిలీలు మరియు నగదు చెల్లింపులను అంగీకరిస్తాము. ఆన్‌లైన్ సంప్రదింపుల కోసం, బుకింగ్ ప్రక్రియలో UPI చెల్లింపు వివరాలు అందించబడతాయి."
    },
    {
      question: "నేను నా అపాయింట్‌మెంట్‌కు కుటుంబ సభ్యులను తీసుకురావచ్చా?",
      answer: "ఖచ్చితంగా. నమ్మకమైన కుటుంబ సభ్యుడు లేదా స్నేహితుడు తోడుండడం, ముఖ్యంగా ప్రారంభ మూల్యాంకన సమయంలో, సహాయకరంగా ఉంటుంది. కొన్ని చికిత్స ప్రణాళికల్లో కుటుంబ ప్రమేయం కూడా ముఖ్యమైన భాగంగా ఉండవచ్చు."
    },
    {
      question: "మానసిక ఆరోగ్య అత్యవసర పరిస్థితిలో నేను ఏమి చేయాలి?",
      answer: "మీరు లేదా మీకు తెలిసిన ఎవరైనా తక్షణ ప్రమాదంలో ఉన్నట్లయితే, దయచేసి అత్యవసర సేవలకు (112) లేదా KIRAN మానసిక ఆరోగ్య హెల్ప్‌లైన్ 1800-599-0019 (టోల్-ఫ్రీ, 24/7) కు కాల్ చేయండి. అత్యవసర పరిస్థితిలో నిర్ణయించిన అపాయింట్‌మెంట్ కోసం వేచి ఉండకండి."
    }
  ]
};
