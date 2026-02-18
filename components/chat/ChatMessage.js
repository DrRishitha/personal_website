import styles from './ChatWidget.module.css';

export default function ChatMessage({ message }) {
    const isBot = message.role === 'bot';

    return (
        <div className={`${styles.message} ${isBot ? styles.botMessage : styles.userMessage}`}>
            <div className={styles.messageBubble}>
                <p className={styles.messageText}>{message.text}</p>
            </div>
            {isBot && message.priority === 'urgent' && (
                <div className={styles.urgentBanner}>
                    If you are in crisis, call <a href="tel:18005990019">1800-599-0019</a> or <a href="tel:112">112</a>
                </div>
            )}
        </div>
    );
}
