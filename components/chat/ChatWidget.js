"use client";

import { useState, useRef, useEffect } from 'react';
import { useChatContext } from './ChatProvider';
import ChatMessage from './ChatMessage';
import styles from './ChatWidget.module.css';

export default function ChatWidget() {
    const { messages, sendMessage, isLoading, clearChat } = useChatContext();
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = () => {
        const text = input.trim();
        if (!text || isLoading) return;
        setInput('');
        sendMessage(text);
    };

    const handleQuickReply = (reply) => {
        sendMessage(reply);
    };

    const lastBotMsg = [...messages].reverse().find(m => m.role === 'bot');

    return (
        <>
            {/* Floating Button */}
            <button
                className={styles.floatingBtn}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close chat' : 'Open chat assistant'}
            >
                {isOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ) : (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className={styles.chatWindow}>
                    {/* Header */}
                    <div className={styles.chatHeader}>
                        <div>
                            <h4 className={styles.chatTitle}>Dr. Kotla&apos;s Assistant</h4>
                            <span className={styles.chatStatus}>Online</span>
                        </div>
                        <button onClick={clearChat} className={styles.clearBtn} title="Clear chat">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className={styles.messagesArea}>
                        {messages.map(msg => (
                            <ChatMessage key={msg.id} message={msg} />
                        ))}
                        {isLoading && (
                            <div className={`${styles.message} ${styles.botMessage}`}>
                                <div className={styles.messageBubble}>
                                    <div className={styles.typing}>
                                        <span></span><span></span><span></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Replies */}
                    {lastBotMsg?.quickReplies?.length > 0 && (
                        <div className={styles.quickReplies}>
                            {lastBotMsg.quickReplies.map((reply, i) => (
                                <button key={i} className={styles.quickReplyBtn} onClick={() => handleQuickReply(reply)}>
                                    {reply}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input */}
                    <div className={styles.inputArea}>
                        <input
                            type="text"
                            className={styles.input}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type a message..."
                            disabled={isLoading}
                        />
                        <button className={styles.sendBtn} onClick={handleSend} disabled={isLoading || !input.trim()}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
