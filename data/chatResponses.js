export const chatIntents = [
  {
    patterns: ['appointment', 'book', 'schedule', 'consultation', 'visit'],
    response: "To book a consultation, please visit our Contact page. You can book online (with UPI payment) or schedule an in-clinic visit.",
    quickReplies: ['Go to Contact Page', 'Clinic Hours']
  },
  {
    patterns: ['emergency', 'crisis', 'suicid', 'kill myself', 'end my life', 'help now', 'dying'],
    response: "If you are in immediate danger, please call emergency services at 112 or the KIRAN Mental Health Helpline at 1800-599-0019 (toll-free, 24/7). You are not alone, and help is available right now.",
    priority: 'urgent'
  },
  {
    patterns: ['hours', 'timing', 'open', 'when', 'available'],
    response: "Our clinic hours are Monday to Friday, 9:00 AM to 5:00 PM. For online consultations, flexible timings may be available.",
    quickReplies: ['Book Appointment', 'Contact Info']
  },
  {
    patterns: ['location', 'address', 'where', 'clinic', 'directions', 'map'],
    response: "Our clinic is located at Himayathnagar, Hyderabad. You can reach us at (+91) 7569200837 for directions.",
    quickReplies: ['Book Appointment', 'Call Clinic']
  },
  {
    patterns: ['service', 'treatment', 'therapy', 'what do you', 'offer'],
    response: "We offer comprehensive psychiatric services including: Psychiatric Evaluation, Medication Management, Psychotherapy (CBT, ACT, EMDR), and Second Opinion Consultations. Visit our Services page for details.",
    quickReplies: ['View Services', 'Book Consultation']
  },
  {
    patterns: ['cost', 'fee', 'price', 'charge', 'payment', 'upi', 'pay'],
    response: "We accept UPI payments, bank transfers, and cash. For specific fee information, please contact our clinic at (+91) 7569200837 or visit the Contact page.",
    quickReplies: ['Contact Page', 'Call Clinic']
  },
  {
    patterns: ['depression', 'sad', 'hopeless', 'depressed'],
    response: "Depression is a treatable condition. You can try our free Depression Screener tool for an initial self-assessment, and consider scheduling a consultation for professional evaluation.",
    quickReplies: ['Depression Screener', 'Book Consultation']
  },
  {
    patterns: ['anxiety', 'anxious', 'worry', 'nervous', 'panic'],
    response: "Anxiety disorders are very common and highly treatable. Try our Anxiety Screener for an initial check, or our Guided Breathing exercise for immediate relief.",
    quickReplies: ['Anxiety Screener', 'Breathing Exercise']
  },
  {
    patterns: ['sleep', 'insomnia', 'cant sleep', "can't sleep"],
    response: "Sleep difficulties are often linked to mental health conditions. We offer a Sleep Quality screener and relaxation tools including guided breathing exercises that may help.",
    quickReplies: ['Sleep Screener', 'Relaxation Tools']
  },
  {
    patterns: ['medication', 'medicine', 'drug', 'pill', 'prescription'],
    response: "Medication management is one of our core services. Dr. Kotla carefully evaluates each patient before recommending any medication and monitors progress closely. Visit our Services page for more information.",
    quickReplies: ['Medication Guide', 'Book Consultation']
  },
  {
    patterns: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'namaste'],
    response: "Hello! Welcome to Dr. Rishitha Kotla's practice. How can I help you today? You can ask about appointments, services, or our self-help tools.",
    quickReplies: ['Book Appointment', 'View Services', 'Self-Help Tools']
  },
  {
    patterns: ['thank', 'thanks', 'helpful'],
    response: "You're welcome! If you have any other questions, feel free to ask. Take care of yourself!",
    quickReplies: ['Book Appointment', 'Close Chat']
  },
  {
    patterns: ['emdr', 'eye movement', 'trauma therapy'],
    response: "EMDR (Eye Movement Desensitization and Reprocessing) is an effective therapy for trauma and PTSD. We offer both in-session EMDR and a virtual EMDR practice tool on our website.",
    quickReplies: ['Try Virtual EMDR', 'Book EMDR Session']
  }
];

export const fallbackResponse = {
  text: "I'm a basic assistant and may not have the answer to that. For specific medical questions, please schedule a consultation with Dr. Kotla. Is there anything else I can help with?",
  quickReplies: ['Book Appointment', 'View Services', 'Self-Help Tools']
};
