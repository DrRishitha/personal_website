"use client";

import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { processMessage } from './backends/scriptedBackend';
import { useLanguage } from '@/components/i18n/LanguageProvider';

const ChatContext = createContext(null);

export function useChatContext() {
    return useContext(ChatContext);
}

export default function ChatProvider({ children }) {
    const { t } = useLanguage();

    const initialQuickReplies = () => [
        t('chat.qrBookAppointment'),
        t('chat.qrViewServices'),
        t('chat.qrSelfHelpTools'),
    ];

    const [messages, setMessages] = useState(() => [
        { id: 0, role: 'bot', text: t('chat.greeting'), quickReplies: initialQuickReplies() },
    ]);
    const [isLoading, setIsLoading] = useState(false);

    // Refresh greeting when language changes, but only if user hasn't sent any messages
    useEffect(() => {
        setMessages(prev => {
            if (prev.length === 1 && prev[0].role === 'bot') {
                return [{ id: 0, role: 'bot', text: t('chat.greeting'), quickReplies: initialQuickReplies() }];
            }
            return prev;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [t]);

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
                priority: response.priority,
            };
            setMessages(prev => [...prev, botMsg]);
        } catch {
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                role: 'bot',
                text: t('chat.error'),
                quickReplies: [t('chat.qrTryAgain')],
            }]);
        } finally {
            setIsLoading(false);
        }
    }, [messages, t]);

    const clearChat = useCallback(() => {
        setMessages([{ id: 0, role: 'bot', text: t('chat.shortGreeting'), quickReplies: initialQuickReplies() }]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [t]);

    return (
        <ChatContext.Provider value={{ messages, sendMessage, isLoading, clearChat }}>
            {children}
        </ChatContext.Provider>
    );
}
