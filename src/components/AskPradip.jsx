import { useState, useRef, useEffect } from 'react';
import { useGroqChat } from '../chatbot/useGroqChat';

/* ─── Quick question chips ─────────────────────────────────────── */
const QUICK_QUESTIONS = [
  { emoji: '', text: 'Who is Pradip Kumar?' },
  { emoji: '', text: 'What technologies do you use?' },
  { emoji: '', text: 'Which project are you most proud of?' },
  { emoji: '', text: "What's your educational background?" },
  { emoji: '', text: "What's your work experience?" },
  // { emoji: '🌍', text: 'Is he open to relocation?' },
  // { emoji: '💼', text: 'Is he currently looking for a job?' },
  // { emoji: '🔗', text: "What's his GitHub profile?" },
  // { emoji: '🚀', text: "What's his most impressive project?" },
  // { emoji: '💻', text: "What's his full tech stack?" },
];

/* ─── Typing indicator ─────────────────────────────────────────── */
const TypingDots = () => (
  <div className="flex items-center gap-1 px-1 py-1">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#0072ff',
          display: 'inline-block',
          animation: `askTypingBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
        }}
      />
    ))}
  </div>
);

/* ─── Single message bubble ────────────────────────────────────── */
/* ─── Link & Text parser helper ─────────────────────────────────── */
const cleanUrlDisplay = (url) => {
  try {
    const urlObj = new URL(url);
    let display = urlObj.hostname.replace('www.', '') + urlObj.pathname;
    if (display.endsWith('/')) {
      display = display.slice(0, -1);
    }
    if (display.length > 30) {
      display = display.substring(0, 27) + '...';
    }
    return display;
  } catch (e) {
    return url;
  }
};

const parseInlineElements = (text) => {
  if (!text) return '';

  // Regex to match bold text **text** OR markdown link [text](url) OR raw url http(s)://...
  const regex = /(\*\*([^*]+)\*\*)|(\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\))|(https?:\/\/[^\s\)]+)/g;
  const elements = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      elements.push(text.substring(lastIndex, match.index));
    }

    if (match[1]) {
      // Bold text: **text**
      elements.push(<strong key={`bold-${match.index}`} style={{ fontWeight: '700', color: '#0f172a' }}>{match[2]}</strong>);
    } else if (match[3]) {
      // Markdown link: [text](url)
      const linkText = match[4];
      const linkUrl = match[5];
      elements.push(
        <a
          key={`md-link-${match.index}`}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(0, 114, 255, 0.06)',
            color: '#0072ff',
            border: '1px solid rgba(0, 114, 255, 0.12)',
            padding: '2px 8px',
            borderRadius: '6px',
            fontSize: '0.78rem',
            textDecoration: 'none',
            fontWeight: '600',
            margin: '2px 4px',
            transition: 'all 0.2s ease',
            verticalAlign: 'middle',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0, 114, 255, 0.12)';
            e.currentTarget.style.borderColor = 'rgba(0, 114, 255, 0.25)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0, 114, 255, 0.06)';
            e.currentTarget.style.borderColor = 'rgba(0, 114, 255, 0.12)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          {linkText}
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px', flexShrink: 0 }}>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      );
    } else if (match[6]) {
      // Raw URL: https://...
      let rawUrl = match[6];
      let trailingPunctuation = '';
      const punctuationMatch = rawUrl.match(/[.,;\?!]+$/);
      if (punctuationMatch) {
        trailingPunctuation = punctuationMatch[0];
        rawUrl = rawUrl.substring(0, rawUrl.length - trailingPunctuation.length);
      }

      elements.push(
        <a
          key={`raw-link-${match.index}`}
          href={rawUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(0, 114, 255, 0.06)',
            color: '#0072ff',
            border: '1px solid rgba(0, 114, 255, 0.12)',
            padding: '2px 8px',
            borderRadius: '6px',
            fontSize: '0.78rem',
            textDecoration: 'none',
            fontWeight: '600',
            margin: '2px 4px',
            transition: 'all 0.2s ease',
            verticalAlign: 'middle',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0, 114, 255, 0.12)';
            e.currentTarget.style.borderColor = 'rgba(0, 114, 255, 0.25)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0, 114, 255, 0.06)';
            e.currentTarget.style.borderColor = 'rgba(0, 114, 255, 0.12)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          {cleanUrlDisplay(rawUrl)}
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px', flexShrink: 0 }}>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      );

      if (trailingPunctuation) {
        elements.push(trailingPunctuation);
      }
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return elements;
};

const parseMessageContent = (text) => {
  if (!text) return '';

  const lines = text.split('\n');
  const resultBlocks = [];
  let currentListItems = [];
  let currentListType = null; // 'bullet' or 'number'

  const pushListIfAny = (key) => {
    if (currentListItems.length > 0) {
      if (currentListType === 'bullet') {
        resultBlocks.push(
          <ul key={`list-${key}`} style={{
            margin: '8px 0 12px 6px',
            padding: 0,
            listStyleType: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            {currentListItems}
          </ul>
        );
      } else if (currentListType === 'number') {
        resultBlocks.push(
          <ol key={`list-${key}`} style={{
            margin: '8px 0 12px 6px',
            padding: 0,
            listStyleType: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            {currentListItems}
          </ol>
        );
      }
      currentListItems = [];
      currentListType = null;
    }
  };

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();

    // Check if line is a bullet item (starts with * or - followed by space)
    const bulletMatch = /^[*-]\s+(.+)/.exec(trimmedLine);
    // Check if line is a numbered item (starts with digits followed by . and space)
    const numberMatch = /^(\d+)\.\s+(.+)/.exec(trimmedLine);

    if (bulletMatch) {
      if (currentListType !== 'bullet') {
        pushListIfAny(index);
        currentListType = 'bullet';
      }
      const content = bulletMatch[1];
      currentListItems.push(
        <li key={`li-${index}`} style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '8px',
          fontSize: '0.875rem',
          lineHeight: '1.5',
          color: '#334155',
        }}>
          <span style={{
            color: '#0072ff',
            fontSize: '1.1rem',
            lineHeight: '1',
            userSelect: 'none',
            marginTop: '-1px'
          }}>•</span>
          <div style={{ flex: 1 }}>{parseInlineElements(content)}</div>
        </li>
      );
    } else if (numberMatch) {
      if (currentListType !== 'number') {
        pushListIfAny(index);
        currentListType = 'number';
      }
      const num = numberMatch[1];
      const content = numberMatch[2];
      currentListItems.push(
        <li key={`li-${index}`} style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '8px',
          fontSize: '0.875rem',
          lineHeight: '1.5',
          color: '#334155',
        }}>
          <span style={{
            color: '#0072ff',
            fontWeight: '700',
            fontSize: '0.85rem',
            minWidth: '18px',
            userSelect: 'none',
          }}>{num}.</span>
          <div style={{ flex: 1 }}>{parseInlineElements(content)}</div>
        </li>
      );
    } else {
      pushListIfAny(index);

      if (trimmedLine) {
        resultBlocks.push(
          <p key={`p-${index}`} style={{
            margin: '0 0 10px 0',
            fontSize: '0.875rem',
            lineHeight: '1.6',
            color: '#334155',
          }}>
            {parseInlineElements(trimmedLine)}
          </p>
        );
      } else {
        resultBlocks.push(<div key={`space-${index}`} style={{ height: '8px' }} />);
      }
    }
  });

  pushListIfAny('final');

  return resultBlocks;
};
/* ─── Single message bubble ────────────────────────────────────── */
const MessageBubble = ({ msg }) => {
  const isUser = msg.role === 'user';
  return (
    <div className={`flex items-end gap-2 mb-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-md"
          style={{ background: '#0072ff' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C12 2 12.5 7.5 14 9C15.5 10.5 21 11 21 11C21 11 15.5 11.5 14 13C12.5 14.5 12 20 12 20C12 20 11.5 14.5 10 13C8.5 11.5 3 11 3 11C3 11 8.5 10.5 10 9C11.5 7.5 12 2 12 2Z" fill="#ffffff" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
      <div
        style={{
          maxWidth: '82%',
          padding: '10px 14px',
          borderRadius: isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
          background: isUser ? '#0072ff' : '#ffffff',
          color: isUser ? '#ffffff' : '#1e293b',
          fontSize: '0.875rem',
          lineHeight: '1.6',
          border: isUser ? 'none' : '1px solid #e2e8f0',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          boxShadow: isUser
            ? '0 4px 15px rgba(0, 114, 255, 0.25)'
            : '0 2px 8px rgba(0,0,0,0.05)',
          fontFamily: '"Work Sans", sans-serif',
        }}
      >
        {msg.content ? parseMessageContent(msg.content) : <TypingDots />}
      </div>
      {isUser && (
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-white border border-gray-200 shadow-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0072ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      )}
    </div>
  );
};

/* ─── Main AskPradip component ─────────────────────────────────── */
const AskPradip = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLarge, setIsLarge] = useState(false);
  const [input, setInput] = useState('');
  const { messages, isLoading, error, sendMessage, clearChat } = useGroqChat();
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  /* auto-scroll to latest message */
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  /* focus input when chat opens */
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    setInput('');
    await sendMessage(trimmed);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleChipClick = (question) => {
    if (isLoading) return;
    sendMessage(question);
  };

  const isEmpty = messages.length === 0;

  return (
    <>
      {/* ── Keyframe styles ── */}
      <style>{`
        @keyframes askTypingBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes askPulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(0,114,255,0.4); }
          50% { box-shadow: 0 4px 30px rgba(0,198,255,0.7), 0 0 0 8px rgba(0,114,255,0.08); }
        }
        @keyframes askSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes askFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ask-chip:hover {
          background: rgba(0, 114, 255, 0.08) !important;
          border-color: #0072ff !important;
          color: #0072ff !important;
          transform: translateY(-1px);
        }
        .ask-send-btn:hover:not(:disabled) {
          opacity: 0.88;
          transform: scale(1.05);
        }
        .ask-scrollbar::-webkit-scrollbar { width: 4px; }
        .ask-scrollbar::-webkit-scrollbar-track { background: #f1f5f9; }
        .ask-scrollbar::-webkit-scrollbar-thumb {
          background: #0072ff;
          border-radius: 4px;
        }
      `}</style>

      {/* ── Chat window ── */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '88px',
            right: '24px',
            width: isLarge ? 'min(800px, calc(100vw - 32px))' : 'min(410px, calc(100vw - 32px))',
            height: isLarge ? 'min(700px, calc(100vh - 120px))' : 'min(560px, calc(100vh - 120px))',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '20px',
            overflow: 'hidden',
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 4px 16px rgba(0,114,255,0.1)',
            animation: 'askSlideUp 0.28s cubic-bezier(0.34,1.56,0.64,1)',
            fontFamily: '"Work Sans", sans-serif',
            transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1), height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* ── Header ── */}
          <div
            style={{
              padding: '14px 16px',
              background: '#222222ff',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              flexShrink: 0,
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem' }}>
                Ask Pradip
              </div>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: 5 }}>
                <span
                  style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: '#86efac',
                    display: 'inline-block',
                    boxShadow: '0 0 5px #86efac',
                  }}
                />
                AI Assistant · Powered by Groq
              </div>
            </div>

            {/* Clear button */}
            {messages.length > 0 && (
              <button
                onClick={clearChat}
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: '1px solid rgba(255,255,255,0.4)',
                  color: '#ffffff',
                  borderRadius: '8px',
                  padding: '4px 10px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                  fontFamily: '"Work Sans", sans-serif',
                }}
                onMouseEnter={e => (e.target.style.background = 'rgba(255,255,255,0.35)')}
                onMouseLeave={e => (e.target.style.background = 'rgba(255,255,255,0.2)')}
              >
                Clear
              </button>
            )}

            {/* Expand / Minimize toggle */}
            <button
              onClick={() => setIsLarge(prev => !prev)}
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                width: 30,
                height: 30,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s, transform 0.2s',
                flexShrink: 0,
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.35)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
              title={isLarge ? "Minimize Chat" : "Expand Chat"}
            >
              {isLarge ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 14h6v6" />
                  <path d="M20 10h-6V4" />
                  <path d="M14 10l7-7" />
                  <path d="M10 14l-7 7" />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6" />
                  <path d="M9 21H3v-6" />
                  <path d="M21 3l-7 7" />
                  <path d="M3 21l7-7" />
                </svg>
              )}
            </button>

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                fontSize: '16px',
                width: 30,
                height: 30,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s',
                flexShrink: 0,
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.35)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
              title="Close"
            >
              ✕
            </button>
          </div>

          {/* ── Messages area ── */}
          <div
            className="ask-scrollbar"
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              background: '#f8fafc',
            }}
          >
            {/* Empty state */}
            {isEmpty && (
              <div style={{ animation: 'askFadeIn 0.4s ease' }}>
                {/* Greeting card */}
                <div
                  className="neo-brutalism-white"
                  style={{
                    textAlign: 'center',
                    marginBottom: '20px',
                    padding: '20px 16px',
                    borderRadius: '16px',
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <div style={{ fontSize: '2.2rem', marginBottom: '8px' }}>👋</div>
                  <p style={{
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: '#1e293b',
                    marginBottom: '4px',
                    fontFamily: '"Poppins", sans-serif',
                  }}>
                    Hi! I'm Pradip's AI assistant
                  </p>
                  <p style={{ color: '#64748b', fontSize: '0.8rem' }}>
                    Ask me anything about his skills,<br />projects, or background
                  </p>
                </div>

                {/* Chips label */}
                <p style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#0072ff',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.07em',
                }}>
                  ✦ Quick questions
                </p>

                {/* Chips */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {QUICK_QUESTIONS.map((q, i) => (
                    <button
                      key={i}
                      className="ask-chip"
                      onClick={() => handleChipClick(q.text)}
                      style={{
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '10px',
                        padding: '9px 12px',
                        color: '#475569',
                        fontSize: '0.82rem',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontFamily: '"Work Sans", sans-serif',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                      }}
                    >
                      <span style={{ fontSize: '1rem' }}>{q.emoji}</span>
                      {q.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Message bubbles */}
            {messages.map((msg, i) => (
              <MessageBubble key={i} msg={msg} />
            ))}

            {/* Error */}
            {error && (
              <div
                style={{
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  color: '#dc2626',
                  fontSize: '0.82rem',
                  marginTop: '8px',
                }}
              >
                {error}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ── Input area ── */}
          <div
            style={{
              padding: '12px',
              borderTop: '1px solid #e2e8f0',
              background: '#ffffff',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'flex-end',
                background: '#f8fafc',
                border: '1.5px solid #e2e8f0',
                borderRadius: '14px',
                padding: '8px 8px 8px 14px',
                transition: 'border-color 0.2s',
              }}
              onFocusCapture={e => (e.currentTarget.style.borderColor = '#0072ff')}
              onBlurCapture={e => (e.currentTarget.style.borderColor = '#e2e8f0')}
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  e.target.style.height = 'auto';
                  e.target.style.height = Math.min(e.target.scrollHeight, 100) + 'px';
                }}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Pradip…"
                rows={1}
                disabled={isLoading}
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#1e293b',
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                  resize: 'none',
                  maxHeight: '100px',
                  overflowY: 'auto',
                  caretColor: '#0072ff',
                  fontFamily: '"Work Sans", sans-serif',
                }}
              />
              <button
                className="ask-send-btn"
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '10px',
                  border: 'none',
                  background:
                    isLoading || !input.trim()
                      ? '#e2e8f0'
                      : '#0072ff',
                  color: isLoading || !input.trim() ? '#94a3b8' : '#ffffff',
                  cursor: isLoading || !input.trim() ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '15px',
                  transition: 'all 0.2s',
                  flexShrink: 0,
                  boxShadow:
                    !isLoading && input.trim()
                      ? '0 4px 12px rgba(0,114,255,0.3)'
                      : 'none',
                }}
              >
                {isLoading ? '⏳' : '➤'}
              </button>
            </div>
            <p style={{
              color: '#94a3b8',
              fontSize: '0.65rem',
              textAlign: 'center',
              marginTop: '6px',
              fontFamily: '"Work Sans", sans-serif',
            }}>
              Enter to send · Shift+Enter for new line
            </p>
          </div>
        </div>
      )}

      {/* ── Floating trigger button ── */}
      <button
        id="ask-pradip-btn"
        onClick={() => setIsOpen((o) => !o)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '76px',
          zIndex: 9998,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 20px',
          borderRadius: '50px',
          border: isOpen ? '2px solid #e2e8f0' : 'none',
          background: isOpen
            ? '#ffffff'
            : '#0c0c0cff',
          color: isOpen ? '#333333ff' : '#ffffff',
          fontWeight: 700,
          fontSize: '0.9rem',
          cursor: 'pointer',
          boxShadow: isOpen
            ? '0 4px 20px rgba(0,0,0,0.12)'
            : undefined,
          animation: isOpen ? 'none' : 'askPulse 2.5s ease-in-out infinite',
          transition: 'background 0.3s, color 0.3s, transform 0.2s',
          outline: 'none',
          fontFamily: '"Work Sans", sans-serif',
          letterSpacing: '0.01em',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
        title={isOpen ? 'Close chat' : 'Ask about Pradip'}
      >
        <span style={{ fontSize: '1.1rem' }}>{isOpen ? '✕' : ''}</span>
        {!isOpen && <span>Ask Pradip</span>}
      </button>
    </>
  );
};

export default AskPradip;
