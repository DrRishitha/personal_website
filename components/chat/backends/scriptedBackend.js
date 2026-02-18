import { chatIntents, fallbackResponse } from '@/data/chatResponses';

export async function processMessage(userMessage, conversationHistory = []) {
    const lowerMsg = userMessage.toLowerCase().trim();

    // Check for urgent/crisis keywords first
    const urgentIntent = chatIntents.find(i => i.priority === 'urgent' && i.patterns.some(p => lowerMsg.includes(p)));
    if (urgentIntent) {
        return { text: urgentIntent.response, quickReplies: [], priority: 'urgent' };
    }

    // Find best matching intent
    let bestMatch = null;
    let bestScore = 0;

    for (const intent of chatIntents) {
        if (intent.priority === 'urgent') continue;
        const matchCount = intent.patterns.filter(p => lowerMsg.includes(p)).length;
        if (matchCount > bestScore) {
            bestScore = matchCount;
            bestMatch = intent;
        }
    }

    if (bestMatch) {
        return {
            text: bestMatch.response,
            quickReplies: bestMatch.quickReplies || []
        };
    }

    return {
        text: fallbackResponse.text,
        quickReplies: fallbackResponse.quickReplies || []
    };
}
