import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '../types';
import { MessageSquare, Send, Sparkles, User, RefreshCw, AlertCircle } from 'lucide-react';

export const AiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hello! I am Abhishek's custom Gemini-powered assistant. Ask me anything about his skills in Angular, Java, Spring Boot, system design, or his work at Mindgate Solutions!"
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [errorState, setErrorState] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, messages]);

  const handleSend = async () => {
    if (!inputText.trim() || isTyping) return;

    setErrorState(null);
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText
    };

    const currentHistory = [...messages];
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    const aiMsgId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: aiMsgId, role: 'model', text: '', isLoading: true }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMsg.text,
          history: currentHistory.map(m => ({ role: m.role, text: m.text })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to query Gemini assistant');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let fullText = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          fullText += chunk;
          setMessages(prev =>
            prev.map(msg =>
              msg.id === aiMsgId
                ? { ...msg, text: fullText, isLoading: false }
                : msg
            )
          );
        }
      }
    } catch (error) {
       console.error("AI Error:", error);
       setErrorState("Connection Error");
       setMessages(prev => 
        prev.map(msg => 
          msg.id === aiMsgId 
            ? { ...msg, text: "I apologize, I encountered a temporary connection issue. Please make sure the GEMINI_API_KEY is configured correctly in Settings.", isLoading: false } 
            : msg
        )
      );
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Dynamic Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 px-5 py-3 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-300 transform flex items-center justify-center gap-2 group ${
          isOpen 
            ? 'bg-zinc-900 border border-zinc-800 text-zinc-100 hover:bg-zinc-800' 
            : 'bg-gradient-to-tr from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 hover:scale-105 text-white'
        }`}
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? (
          <div className="flex items-center gap-2 whitespace-nowrap">
            <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="text-xs font-semibold font-mono uppercase tracking-wider">Close</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-semibold uppercase font-mono tracking-wider hidden sm:inline">Ask Resume AI</span>
          </div>
        )}
      </button>

      {/* Classy Chat Container */}
      <div 
        className={`fixed bottom-24 right-6 w-92 md:w-100 bg-zinc-950 rounded-2xl shadow-2xl border border-zinc-900 z-50 overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
        }`}
        style={{ height: '520px', maxHeight: '82vh' }}
      >
        {/* Dynamic Header */}
        <div className="bg-zinc-900 p-4 border-b border-zinc-850 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
             <div>
                <h3 className="font-bold text-sm text-white flex items-center gap-1.5 font-mono">
                  abhishek_ai.sh
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                </h3>
                <p className="text-[10px] text-zinc-500 font-mono">Gemini Full-Stack Assistant</p>
             </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1.5 hover:bg-zinc-800 rounded-lg text-zinc-500 hover:text-white transition-all"
          >
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-650">ESC</span>
          </button>
        </div>

        {/* Messaging Logs */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin bg-zinc-950/40">
          {messages.map((msg) => {
            const isUser = msg.role === 'user';
            return (
              <div 
                key={msg.id} 
                className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div className={`flex items-start gap-2.5 max-w-[85%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                  {/* Icon badge */}
                  <div className={`p-1.5 rounded-lg border text-xs shrink-0 ${
                    isUser 
                      ? 'bg-zinc-900 border-zinc-800 text-zinc-300' 
                      : 'bg-emerald-950/20 border-emerald-900/30 text-emerald-400'
                  }`}>
                    {isUser ? <User className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
                  </div>

                  <div 
                    className={`rounded-2xl px-4 py-3 text-xs leading-relaxed border ${
                      isUser 
                        ? 'bg-zinc-900 border-zinc-805 text-zinc-200 rounded-tr-none' 
                        : 'bg-zinc-950 border-zinc-900 text-zinc-300 rounded-tl-none'
                    }`}
                  >
                    {msg.isLoading ? (
                       <div className="flex items-center gap-2.5">
                         <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider animate-pulse">Processing Stream</span>
                         <div className="flex space-x-1 items-center">
                           <div className="w-1 h-1 bg-emerald-400 rounded-full animate-typing-dot"></div>
                           <div className="w-1 h-1 bg-emerald-400 rounded-full animate-typing-dot [animation-delay:0.2s]"></div>
                           <div className="w-1 h-1 bg-emerald-400 rounded-full animate-typing-dot [animation-delay:0.4s]"></div>
                         </div>
                       </div>
                    ) : (
                      <span className="whitespace-pre-wrap">{msg.text}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form Fields */}
        <div className="p-4 bg-zinc-900/40 border-t border-zinc-900">
          <div className="flex gap-2 relative">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about payments, Angular versions..."
              className="flex-1 bg-zinc-950 border border-zinc-850 rounded-full px-4 .5 py-2.5 text-xs focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 outline-none text-zinc-200 placeholder:text-zinc-650 transition-all font-mono"
              disabled={isTyping}
            />
            <button
              onClick={handleSend}
              disabled={!inputText.trim() || isTyping}
              className="bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed text-zinc-950 rounded-full p-2.5 transition-colors shadow-md shrink-0 flex items-center justify-center"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
          
          <div className="flex items-center justify-between text-[9px] text-zinc-600 font-mono mt-2.5 px-1 uppercase tracking-wider">
            <span>Secure SSL Handshake</span>
            <span>v1.0.3</span>
          </div>
        </div>
      </div>
    </>
  );
};
