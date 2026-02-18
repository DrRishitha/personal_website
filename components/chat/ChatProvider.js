"use client";

import { createContext, useContext, useState, useCallback } from 'react';
import { processMessage } from './backends/scriptedBackend';

const ChatContext = createContext(null);

export function useChatContext() {
    return useContext(ChatContext);
}

export default function ChatProvider({ children }) {
    const [messages, setMessages] = useState([
        {
            id: 0,
            role: 'bot',
            text: "Hello! I'm the assistant for Dr. Rishitha Kotla's practice. How can I help you today?",
            quickReplies: ['Book Appointment', 'View Services', 'Self-Help Tools']
        }
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = useCallback(async (text) => {
        const userMsg = { id: Date.now(), role: 'user', text };
        setMessages(prev => [...prev, userMsg]);
        setIsLoading(true);

        try {
            const response = await processMessage(text, messages);
            const botMsg = {
                id: Date.now() + 1,
                role: 'bot',
                text: response.text,
                quickReplies: response.quickReplies,
                priority: response.priority
            };
            setMessages(prev => [...prev, botMsg]);
        } catch {
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                role: 'bot',
                text: "I'm sorry, I encountered an error. Please try again or contact us directly at (+91) 7569200837.",
                quickReplies: ['Try Again']
            }]);
        } finally {
            setIsLoading(false);
        }
    }, [messages]);

    const clearChat = useCallback(() => {
        setMessages([{
            id: 0,
            role: 'bot',
            text: "Hello! How can I help you today?",
            quickReplies: ['Book Appointment', 'View Services', 'Self-Help Tools']
        }]);
    }, []);

    return (
        <ChatContext.Provider value={{ messages, sendMessage, isLoading, clearChat }}>
            {children}
        </ChatContext.Provider>
    );
}
