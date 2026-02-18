export const emdrPhases = [
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
];

export const audioConfig = {
  frequency: 480,
  beepDuration: 150,
  volume: 0.3
};

export const dotDirections = [
  { id: 'horizontal', label: 'Horizontal', icon: '↔️' },
  { id: 'vertical', label: 'Vertical', icon: '↕️' },
  { id: 'diagonal', label: 'Diagonal', icon: '↗️' }
];
