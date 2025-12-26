
import React, { useState, useEffect, useRef } from 'react';

interface Message {
    id: string;
    type: 'bot' | 'user';
    text: string;
    timestamp: Date;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            type: 'bot',
            text: "Hello! I'm your EstateFlow AI assistant. How can I help you today? I'm an expert in Cambodian real estate.",
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const responses: Record<string, string> = {
        'sell': "To sell your house effectively in Cambodia: 1. Ensure you have a 'Hard Title' (LMAP), 2. Take high-quality professional photos, 3. Price it based on recent Borey or Condo market benchmarks, and 4. List it on EstateFlow to reach verified buyers!",
        'selling': "To sell your house effectively in Cambodia: 1. Ensure you have a 'Hard Title' (LMAP), 2. Take high-quality professional photos, 3. Price it based on recent Borey or Condo market benchmarks, and 4. List it on EstateFlow to reach verified buyers!",
        'customer': "Getting customers is about visibility. On EstateFlow, we use targeted advertising to reached qualified investors. You should also ensure your property description highlights amenities like 'Rooftop Pool' or '24h Security' which are highly searched in Phnom Penh.",
        'buyer': "Getting customers is about visibility. On EstateFlow, we use targeted advertising to reached qualified investors. You should also ensure your property description highlights amenities like 'Rooftop Pool' or '24h Security' which are highly searched in Phnom Penh.",
        'legal': "Key legal documents include the Hard Title (LMAP), ID card of the owner, and Marriage/Single certificate. Transferring title usually incurs a 4% stamp duty tax in Cambodia.",
        'hi': "Hello! I can help you with selling your house, finding buyers, or understanding legal title transfers in Cambodia. What would you like to know?",
        'hello': "Hello! I can help you with selling your house, finding buyers, or understanding legal title transfers in Cambodia. What would you like to know?",
    };

    const handleSend = (text: string = inputValue) => {
        if (!text.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            type: 'user',
            text,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI thinking
        setTimeout(() => {
            let botResponse = "That's a great question. For specific advice on the Cambodian market, I recommend contacting one of our verified Senior Agents. Is there something specific about title deeds or pricing you need help with?";

            const lowerText = text.toLowerCase();
            for (const key in responses) {
                if (lowerText.includes(key)) {
                    botResponse = responses[key];
                    break;
                }
            }

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                type: 'bot',
                text: botResponse,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1000);
    };

    const QuickAction = ({ label, query }: { label: string; query: string }) => (
        <button
            onClick={() => handleSend(query)}
            className="bg-gray-50 border border-gray-100 hover:border-black text-[10px] font-bold uppercase tracking-widest text-black px-3 py-2 rounded-sm transition-all"
        >
            {label}
        </button>
    );

    return (
        <>
            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-8 right-8 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 z-[100] shadow-2xl ${isOpen ? 'bg-black rotate-90' : 'bg-black hover:scale-110'}`}
            >
                {isOpen ? (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <div className="relative">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-black"></span>
                    </div>
                )}
            </button>

            {/* Chat Window */}
            <div className={`fixed bottom-28 right-8 w-[380px] h-[550px] bg-white rounded-sm border border-gray-100 shadow-2xl z-[100] flex flex-col transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none'}`}>

                {/* Header */}
                <div className="bg-black p-6 flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs">EstateFlow AI</h3>
                        <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Online & Local Expert</span>
                        </div>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-grow overflow-y-auto p-6 space-y-6">
                    {messages.map((m) => (
                        <div key={m.id} className={`flex ${m.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[85%] p-4 rounded-sm text-sm ${m.type === 'user' ? 'bg-black text-white' : 'bg-gray-50 border border-gray-100 text-gray-800'}`}>
                                {m.text}
                                <p className={`text-[8px] mt-2 font-bold uppercase tracking-widest ${m.type === 'user' ? 'text-gray-400' : 'text-gray-300'}`}>
                                    {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </p>
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-gray-50 p-4 rounded-sm flex space-x-1">
                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Quick Actions */}
                <div className="px-6 pb-4 flex flex-wrap gap-2">
                    <QuickAction label="Selling Tips" query="How to sell my house?" />
                    <QuickAction label="Find Buyers" query="How to get more customers?" />
                    <QuickAction label="Legal Help" query="What are the legal requirements?" />
                </div>

                {/* Input */}
                <div className="p-6 border-t border-gray-50 bg-gray-50/30">
                    <form
                        onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                        className="flex items-center space-x-4"
                    >
                        <input
                            type="text"
                            placeholder="Ask anything about properties..."
                            className="flex-grow bg-transparent border-none outline-none text-sm font-medium text-black placeholder:text-gray-400"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="text-black hover:scale-110 transition-transform disabled:opacity-30"
                            disabled={!inputValue.trim()}
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Chatbot;
