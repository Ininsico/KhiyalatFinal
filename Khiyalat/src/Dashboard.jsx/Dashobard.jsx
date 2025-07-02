import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    // Hidden API key (in a real app, this should be handled via backend)
    const HIDDEN_API_KEY = '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';

    // User state (simulated - in real app this would come from auth context/backend)
    const [user, setUser] = useState({
        isLoggedIn: false,
        isPremium: false,
        promptCount: 0,
        lastPromptDate: null, // Changed to track date instead of time
        name: 'Guest',
        avatar: 'https://avatars.dicebear.com/api/bottts/guest.svg'
    });
    const goToPremium = () => {
        navigate('/premium');
    };
    // UI states
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hello! I\'m Khiyalat AI. How can I help you today?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [currentlyTyping, setCurrentlyTyping] = useState(null);
    const [lockout, setLockout] = useState(false);
    const messagesEndRef = useRef(null);

    // Sexy black/rose pink theme
    const themes = {
        dark: {
            bg: '#0D0D15',
            headerBg: '#0D0D15',
            text: '#F2D9E6',
            accent: '#FF2D75',
            secondary: '#8A2BE2',
            inputBg: '#1A1A2E',
            border: '#FF2D75/30',
            cardUser: 'bg-[#FF2D75]/20 border-[#FF2D75]/40',
            cardAI: 'bg-[#8A2BE2]/20 border-[#8A2BE2]/40',
            gradient: 'from-[#FF2D75] to-[#8A2BE2]'
        },
        light: {
            bg: '#FAF5FF',
            headerBg: '#FFFFFF',
            text: '#3D0043',
            accent: '#FF2D75',
            secondary: '#8A2BE2',
            inputBg: '#FFFFFF',
            border: '#8A2BE2/30',
            cardUser: 'bg-[#FF2D75]/10 border-[#FF2D75]/30',
            cardAI: 'bg-[#8A2BE2]/10 border-[#8A2BE2]/30',
            gradient: 'from-[#FF2D75] to-[#8A2BE2]'
        }
    };

    const currentTheme = isDarkMode ? themes.dark : themes.light;

    useEffect(() => {
        const checkAuth = async () => {
            // Check both localStorage and sessionStorage
            const storedUser = localStorage.getItem('khiyalat-user') || sessionStorage.getItem('khiyalat-user');
            const authToken = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');

            if (storedUser && authToken) {
                // Verify token with backend in a real app
                const parsedUser = JSON.parse(storedUser);
                // Check if last prompt was on a different day
                const today = new Date().toDateString();
                if (parsedUser.lastPromptDate !== today) {
                    parsedUser.promptCount = 0;
                    parsedUser.lastPromptDate = today;
                }
                setUser(parsedUser);
            } else {
                // If no valid auth, clear any existing data
                localStorage.removeItem('khiyalat-user');
                sessionStorage.removeItem('khiyalat-user');
                setUser({
                    isLoggedIn: false,
                    isPremium: false,
                    promptCount: 0,
                    lastPromptDate: null,
                    name: 'Guest',
                    avatar: 'https://avatars.dicebear.com/api/bottts/guest.svg'
                });
            }
        };

        checkAuth();
    }, []);

    // Scroll to bottom of chat
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, currentlyTyping]);

    // Typewriter effect for AI messages
    useEffect(() => {
        if (currentlyTyping) {
            const { index, content } = currentlyTyping;
            if (content.length > 0) {
                const timer = setTimeout(() => {
                    setMessages(prev => {
                        const newMessages = [...prev];
                        newMessages[index].content = content.substring(0, newMessages[index].content.length + 1);
                        return newMessages;
                    });
                    setCurrentlyTyping({
                        index,
                        content
                    });
                }, 20);

                return () => clearTimeout(timer);
            } else {
                setCurrentlyTyping(null);
            }
        }
    }, [currentlyTyping]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check for empty input or if already loading
        if (!input.trim() || isLoading) return;

        // Redirect to login if not logged in
        if (!user.isLoggedIn) {
            navigate('/login');
            return;
        }

        // Check if user has exceeded daily limit
        const today = new Date().toDateString();
        const promptLimit = user.isPremium ? Infinity : 50;
        
        // Reset count if it's a new day
        if (user.lastPromptDate !== today) {
            const updatedUser = {
                ...user,
                promptCount: 0,
                lastPromptDate: today
            };
            setUser(updatedUser);
            localStorage.setItem('khiyalat-user', JSON.stringify(updatedUser));
        }

        // Check if user has exceeded their daily limit
        if (user.promptCount >= promptLimit) {
            setLockout(true);
            return;
        }

        // Add user message to chat
        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        // Update user state
        const updatedUser = {
            ...user,
            promptCount: user.promptCount + 1,
            lastPromptDate: today
        };
        setUser(updatedUser);
        localStorage.setItem('khiyalat-user', JSON.stringify(updatedUser));

        try {
            // Prepare messages for API call
            const apiMessages = [
                ...messages.map(msg => ({
                    role: msg.role,
                    content: msg.content
                })),
                userMessage
            ];

            // Call OpenAI API
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${HIDDEN_API_KEY}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: apiMessages,
                    temperature: 0.7,
                })
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const data = await response.json();

            if (data.choices && data.choices[0].message) {
                const aiMessage = {
                    role: 'assistant',
                    content: '' // Start with empty content for typing effect
                };

                setMessages(prev => [...prev, aiMessage]);
                setCurrentlyTyping({
                    index: messages.length + 1,
                    content: data.choices[0].message.content
                });
            } else {
                throw new Error('Invalid API response structure');
            }
        } catch (error) {
            console.error('Error calling OpenAI API:', error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'Sorry, I encountered an error. Please try again later.'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div
            className={`min-h-screen ${isDarkMode ? 'bg-[#0D0D15]' : 'bg-[#FAF5FF]'} ${isDarkMode ? 'text-[#F2D9E6]' : 'text-[#3D0043]'} flex flex-col transition-colors duration-300`}
        >
            {/* Header with user profile */}
            <header className={`${isDarkMode ? 'bg-[#0D0D15]' : 'bg-white'} py-4 px-6 border-b ${isDarkMode ? 'border-[#FF2D75]/20' : 'border-[#8A2BE2]/20'} flex justify-between items-center sticky top-0 z-10 shadow-md`}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-4"
                >
                    <motion.h1
                        whileHover={{ scale: 1.03 }}
                        className="text-2xl font-bold bg-gradient-to-r from-[#FF2D75] to-[#8A2BE2] bg-clip-text text-transparent"
                    >
                        Khiyalat AI
                    </motion.h1>
                </motion.div>

                <div className="flex items-center gap-4">
                    {user.isLoggedIn && (
                        <motion.div
                            className="flex items-center gap-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <div className="text-sm font-medium">
                                {user.promptCount}/{user.isPremium ? '∞' : '50'} prompts
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 cursor-pointer"
                                onClick={user.isPremium ? null : goToPremium}
                            >
                                <div className="relative">
                                    <img
                                        src={user.avatar}
                                        alt={user.name}
                                        className="w-8 h-8 rounded-full border-2 border-transparent bg-gradient-to-r from-[#FF2D75] to-[#8A2BE2] p-0.5"
                                    />
                                    {user.isPremium && (
                                        <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-[#0D0D15] rounded-full p-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                <span className="font-medium hidden md:inline">{user.name}</span>
                            </motion.div>
                        </motion.div>
                    )}

                    <motion.button
                        onClick={toggleTheme}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-2 rounded-full ${isDarkMode ? 'bg-[#FF2D75] text-white' : 'bg-[#8A2BE2] text-white'}`}
                        aria-label="Toggle dark mode"
                    >
                        {isDarkMode ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        )}
                    </motion.button>
                </div>
            </header>

            {/* Chat Container */}
            <div className="flex-1 overflow-y-auto p-4 relative">
                {!user.isLoggedIn && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center bg-black/50 z-20"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className={`p-6 rounded-2xl ${isDarkMode ? 'bg-[#1A1A2E]' : 'bg-white'} shadow-lg max-w-md w-full mx-4`}
                        >
                            <h2 className="text-xl font-bold mb-4 text-center">Login Required</h2>
                            <p className="mb-6 text-center">You need to login to access Khiyalat AI</p>
                            <div className="flex gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => navigate('/login')}
                                    className={`flex-1 py-2 rounded-lg bg-gradient-to-r from-[#FF2D75] to-[#8A2BE2] text-white font-medium`}
                                >
                                    Login
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => navigate('/premium')}
                                    className={`flex-1 py-2 rounded-lg border ${isDarkMode ? 'border-[#FF2D75] text-[#FF2D75]' : 'border-[#8A2BE2] text-[#8A2BE2]'} font-medium`}
                                >
                                    Go Premium
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}

                <div className="max-w-4xl mx-auto space-y-6">
                    <AnimatePresence>
                        {messages.map((message, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: message.role === 'user' ? 10 : -10 }}
                                animate={{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }}
                                exit={{ opacity: 0 }}
                                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <motion.div
                                    whileHover={{ scale: message.role === 'user' ? 1.02 : 1.01 }}
                                    className={`max-w-3xl rounded-2xl px-4 py-3 ${message.role === 'user'
                                        ? isDarkMode ? 'bg-[#FF2D75]/20 border-[#FF2D75]/40' : 'bg-[#FF2D75]/10 border-[#FF2D75]/30'
                                        : isDarkMode ? 'bg-[#8A2BE2]/20 border-[#8A2BE2]/40' : 'bg-[#8A2BE2]/10 border-[#8A2BE2]/30'} border backdrop-blur-sm`}
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${message.role === 'user'
                                            ? 'bg-gradient-to-br from-[#FF2D75] to-[#FF6B95] text-white'
                                            : 'bg-gradient-to-br from-[#8A2BE2] to-[#A45AFF] text-white'}`}
                                        >
                                            {message.role === 'user' ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                        </div>
                                        <span className="font-medium">
                                            {message.role === 'user' ? user.name : 'Khiyalat AI'}
                                        </span>
                                    </div>
                                    <div className="whitespace-pre-wrap">
                                        {message.content}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {isLoading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex justify-start"
                        >
                            <div className={`max-w-3xl rounded-2xl px-4 py-3 ${isDarkMode ? 'bg-[#8A2BE2]/20 border-[#8A2BE2]/40' : 'bg-[#8A2BE2]/10 border-[#8A2BE2]/30'} border backdrop-blur-sm`}>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#8A2BE2] to-[#A45AFF] text-white flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="font-medium">Khiyalat AI</span>
                                </div>
                                <div className="flex gap-1 mt-2">
                                    <div className="w-2 h-2 rounded-full bg-[#8A2BE2] animate-bounce" style={{ animationDelay: '0ms' }} />
                                    <div className="w-2 h-2 rounded-full bg-[#8A2BE2] animate-bounce" style={{ animationDelay: '150ms' }} />
                                    <div className="w-2 h-2 rounded-full bg-[#8A2BE2] animate-bounce" style={{ animationDelay: '300ms' }} />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {lockout && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-center"
                        >
                            <div className={`max-w-3xl rounded-2xl px-4 py-3 ${isDarkMode ? 'bg-[#FF2D75]/20 border-[#FF2D75]/40' : 'bg-[#FF2D75]/10 border-[#FF2D75]/30'} text-center border backdrop-blur-sm`}>
                                <div className="flex items-center justify-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                    "Free tier daily limit reached (50 prompts/day). Upgrade to premium for unlimited access."
                                </div>
                            </div>
                        </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Input Area */}
            <div className={`p-4 border-t ${isDarkMode ? 'border-[#FF2D75]/10' : 'border-[#8A2BE2]/10'} ${isDarkMode ? 'bg-[#0D0D15]' : 'bg-white'} sticky bottom-0`}>
                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={!user.isLoggedIn ? 'Please login to chat' : lockout ? 'Daily limit reached - upgrade to premium' : 'Message Khiyalat AI...'}
                            className={`flex-1 px-4 py-3 ${isDarkMode ? 'bg-[#1A1A2E]' : 'bg-white'} border ${isDarkMode ? 'border-[#FF2D75]/30' : 'border-[#8A2BE2]/30'} rounded-lg focus:ring-2 ${isDarkMode ? 'focus:ring-[#FF2D75]' : 'focus:ring-[#8A2BE2]'} focus:border-transparent ${isDarkMode ? 'text-[#F2D9E6]' : 'text-[#3D0043]'} ${isDarkMode ? 'placeholder-[#F2D9E6]/50' : 'placeholder-[#3D0043]/50'} shadow-lg transition-all duration-200`}
                            disabled={isLoading || !user.isLoggedIn || lockout}
                        />
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            disabled={isLoading || !input.trim() || !user.isLoggedIn || lockout}
                            className={`px-6 py-3 rounded-lg bg-gradient-to-r from-[#FF2D75] to-[#8A2BE2] text-white font-medium shadow-lg ${(!input.trim() || isLoading || !user.isLoggedIn || lockout) ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? (
                                <svg className="animate-spin h-5 w-5 mx-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                </svg>
                            )}
                        </motion.button>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <p className={`text-xs ${isDarkMode ? 'text-[#F2D9E6]/70' : 'text-[#3D0043]/70'}`}>
                            {!user.isLoggedIn ? 'Login or go premium to start chatting' :
                                lockout ? 'Free users get 50 prompts per day. Upgrade for unlimited access.' :
                                    user.isPremium ? 'Premium member - unlimited access' :
                                        `Free tier - ${50 - user.promptCount} prompts remaining today`}
                        </p>
                        {!user.isPremium && user.isLoggedIn && (
                            <motion.button
                                onClick={goToPremium}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="text-xs font-medium bg-gradient-to-r from-[#FF2D75] to-[#8A2BE2] bg-clip-text text-transparent"
                            >
                                Upgrade to Premium →
                            </motion.button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Dashboard;