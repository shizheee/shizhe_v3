import React, { useState, useEffect, useRef } from 'react';

const models = [
    { label: 'GPT-3.5 Turbo', value: 'gpt-3.5-turbo' },
    { label: 'GPT-4', value: 'gpt-4' },
    { label: 'GPT-4o', value: 'gpt-4o' },
];

export default function TryGPT() {
    const [model, setModel] = useState(models[0].value);
    const [input, setInput] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [loading, setLoading] = useState(false);
    const [showApiPopup, setShowApiPopup] = useState(false);
    const [conversation, setConversation] = useState([]);
    const messagesEndRef = useRef(null);

    // Load API key from cookie on mount
    useEffect(() => {
        const match = document.cookie.match(/gpt_api_key=([^;]+)/);
        if (match) setApiKey(match[1]);
        else setShowApiPopup(true);
    }, []);

    // Scroll to bottom when conversation updates
    useEffect(() => {
        if (messagesEndRef.current) messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [conversation]);

    const handleSend = async () => {
        if (!apiKey.trim() || !input.trim()) return;
        setLoading(true);
        const newConversation = [
            ...conversation,
            { role: 'user', content: input }
        ];
        try {
            const res = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model,
                    messages: newConversation,
                }),
            });
            const data = await res.json();
            if (data.error && data.error.code === 'invalid_api_key') {
                // Clear cookie and ask for new API key
                document.cookie = 'gpt_api_key=;path=/;max-age=0';
                setApiKey('');
                setShowApiPopup(true);
                setConversation([...newConversation, { role: 'assistant', content: '❌ Invalid API key. Please enter a valid key.' }]);
            } else {
                const reply = data.choices?.[0]?.message?.content || 'No response';
                setConversation([...newConversation, { role: 'assistant', content: reply.trim() }]);
            }
            setInput('');
        } catch (err) {
            setConversation([...newConversation, { role: 'assistant', content: '❌ Error: ' + err.message }]);
        }
        setLoading(false);
    };

    // Save API key to cookie and close popup
    const handleApiSubmit = (e) => {
        e.preventDefault();
        document.cookie = `gpt_api_key=${apiKey};path=/;max-age=31536000`;
        setShowApiPopup(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            {/* API Key Popup */}
            {showApiPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <form className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col gap-4" onSubmit={handleApiSubmit}>
                        <h2 className="text-xl font-bold text-purple-700 mb-2">Enter your OpenAI API Key</h2>
                        <input
                            type="password"
                            className="w-full p-3 border-2 border-purple-200 rounded-xl focus:border-purple-400 focus:outline-none"
                            value={apiKey}
                            onChange={e => setApiKey(e.target.value)}
                            placeholder="sk-..."
                            required
                        />
                        <button type="submit" className="bg-purple-600 text-white py-2 rounded font-bold hover:bg-purple-700 transition">
                            Save & Continue
                        </button>
                    </form>
                </div>
            )}
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
                {/* LEFT COLUMN – SETTINGS SECTION */}
                {/* RIGHT COLUMN – CONVERSATION SECTION WITH INPUT AT BOTTOM */}
                <div className="p-8 bg-gray-50 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-700">Conversation</h3>
                        <select
                            className="p-2 border rounded min-w-[140px]"
                            value={model}
                            onChange={e => setModel(e.target.value)}
                        >
                            {models.map((m) => (
                                <option key={m.value} value={m.value}>
                                    {m.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex-1 overflow-auto bg-white border border-gray-300 rounded-lg p-4 whitespace-pre-wrap text-sm font-mono max-h-[60vh]" style={{ scrollBehavior: 'smooth' }}>
                        {conversation.length === 0 && <div className="text-gray-400">Start a conversation with GPT!</div>}
                        {conversation.map((msg, idx) => (
                            <div key={idx} className={msg.role === 'user' ? 'text-blue-700 mb-4' : 'text-purple-700 mb-4'}>
                                <span className="font-bold">{msg.role === 'user' ? 'You' : 'GPT'}:</span> {msg.content}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    {/* INPUT AT BOTTOM, FULL WIDTH, BUTTON OVERLAY */}
                    <form
                        className="mt-4 relative"
                        onSubmit={e => {
                            e.preventDefault();
                            handleSend();
                        }}
                    >
                        <textarea
                        
                            className="w-full px-4 py-3 pr-20 border rounded-md resize-none h-14 leading-none align-middle focus:outline-none focus:ring-2 focus:ring-purple-300 text-base"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            placeholder="Type your prompt here..."
                            disabled={loading}
                            rows={2}
                            style={{ minHeight: '3.5rem', maxHeight: '8rem', width: '100%' }}
                        />
                        <button
                            type="submit"
                            className="absolute bottom-2 right-2 h-10 px-5 bg-purple-600 text-white rounded-md font-bold hover:bg-purple-700 transition disabled:opacity-50 shadow"
                            disabled={loading || !input.trim()}
                        >
                            {loading ? '...' : 'Send'}
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}
