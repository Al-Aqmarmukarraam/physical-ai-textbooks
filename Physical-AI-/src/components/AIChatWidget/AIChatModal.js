import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './AIChatWidget.module.css';

const AIChatModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, type: 'assistant', content: 'Hello! I\'m your AI assistant for the Physical AI & Humanoid Robotics textbook. Ask me anything about the content!' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Call the RAG API with the user's query
      const response = await fetch('/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: inputValue.trim(),
          context: {
            userId: 'anonymous',
            sessionId: 'session-' + Date.now(),
          },
          options: {
            maxResults: 5,
            includeMetadata: true
          }
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();

      // Check if the question is outside the scope of the textbook
      // The backend should handle this logic and return the specific message
      let responseContent;
      if (data.answer && data.answer.includes('outside the scope of this textbook')) {
        responseContent = 'This question is outside the scope of this textbook. Please ask something related to the book content.';
      } else if (data.error && data.error.message && data.error.message.includes('outside the scope')) {
        responseContent = 'This question is outside the scope of this textbook. Please ask something related to the book content.';
      } else if (data.answer) {
        responseContent = data.answer;
      } else {
        responseContent = 'Sorry, I couldn\'t find relevant information in the textbook to answer your question.';
      }

      const aiResponse = {
        id: Date.now() + 1,
        type: 'assistant',
        content: responseContent
      };

      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      // Handle network errors or API issues
      const aiResponse = {
        id: Date.now() + 1,
        type: 'assistant',
        content: 'Sorry, I encountered an issue processing your request. Please try again.'
      };
      setMessages(prev => [...prev, aiResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3>🤖 AI Assistant</h3>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close chat">
            ×
          </button>
        </div>

        <div className={styles.chatContainer}>
          <div className={styles.messagesContainer}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={clsx(
                  styles.message,
                  message.type === 'user' ? styles.userMessage : styles.assistantMessage
                )}
              >
                <div className={styles.messageContent}>
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className={clsx(styles.message, styles.assistantMessage)}>
                <div className={styles.messageContent}>
                  <div className={styles.typingIndicator}>
                    <div className={styles.typingDot}></div>
                    <div className={styles.typingDot}></div>
                    <div className={styles.typingDot}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <form className={styles.inputForm} onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask a question about the textbook content..."
            className={styles.inputField}
            disabled={isLoading}
            aria-label="Type your question"
          />
          <button
            type="submit"
            className={clsx(styles.submitButton, isLoading ? styles.submitButtonDisabled : '')}
            disabled={!inputValue.trim() || isLoading}
            aria-label="Send message"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIChatModal;