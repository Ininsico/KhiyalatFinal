import { useState } from 'react';
import { motion } from 'framer-motion';

const DemoSection = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        { text: "Hello! I'm Dr. Khiyalat. I'm here to listen and help you process your thoughts. What's on your mind today?", sender: "bot" },
        { text: "I've been feeling really anxious about work lately.", sender: "user" },
        { text: "I hear you. Work anxiety is very common. Can you tell me more about what specifically is causing these feelings?", sender: "bot" }
    ]);

    const handleSendMessage = () => {
        if (message.trim()) {
            setMessages([...messages, { text: message, sender: "user" }]);
            setMessage("");

            // Simulate bot response after delay
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    text: "I appreciate you sharing that. Let's explore this together. What emotions come up when you think about this situation?",
                    sender: "bot"
                }]);
            }, 1500);
        }
    };

    return (
        <section className="relative py-28 bg-gradient-to-b from-gray-900 via-black to-gray-800 overflow-hidden">
            {/* Animated floating bubbles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-red-500/20 rounded-full"
                        style={{
                            width: `${Math.random() * 15 + 5}px`,
                            height: `${Math.random() * 15 + 5}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, -200],
                            x: [0, Math.random() * 40 - 20, 0],
                            opacity: [0.1, 0.8, 0]
                        }}
                        transition={{
                            duration: Math.random() * 15 + 15,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Content - Premium Edition */}
                    <motion.div
                        className="lg:w-1/2 relative z-10"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="relative">
                            {/* Decorative accent */}
                            <div className="absolute -left-8 -top-4 w-24 h-24 bg-red-600/10 rounded-full blur-xl"></div>

                            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                                Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">AI That Cares</span>
                            </h2>
                            <p className="text-xl text-red-200 mb-10 max-w-lg">
                                Khiyalat's AI has been trained with psychological principles to provide supportive, non-judgmental
                                conversations that help you explore your thoughts safely.
                            </p>

                            <div className="space-y-5 mb-12">
                                {[
                                    "Available 24/7 whenever you need to talk",
                                    "Completely confidential and private",
                                    "Adapts to your unique communication style"
                                ].map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-start space-x-4 group"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="relative mt-1">
                                            <div className="absolute inset-0 bg-red-600 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-all duration-300"></div>
                                            <svg
                                                className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform duration-200"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="text-lg text-white font-medium group-hover:text-red-300 transition-colors duration-200">
                                            {feature}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.button
                                className="relative overflow-hidden group"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onHoverStart={() => setIsHovered(true)}
                                onHoverEnd={() => setIsHovered(false)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10 flex items-center justify-center space-x-3 bg-red-700 text-white px-8 py-4 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                                    <svg
                                        className="w-6 h-6 group-hover:animate-wiggle"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                    <span className="text-lg font-semibold">Try Live Demo</span>
                                </div>

                                {/* Glow effect */}
                                {isHovered && (
                                    <motion.div
                                        className="absolute -inset-1 bg-red-600 rounded-xl blur-md opacity-0 group-hover:opacity-40"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.4 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                )}
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Chat Demo - Premium Edition */}
                    <motion.div
                        className="lg:w-1/2 relative"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="relative max-w-lg mx-auto lg:mx-0 lg:ml-auto">
                            {/* Floating animation container */}
                            <motion.div
                                className="relative"
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                {/* Glow effect */}
                                <motion.div
                                    className="absolute -inset-4 bg-red-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
                                    whileInView={{ opacity: 0.1 }}
                                />

                                {/* Chat container */}
                                <div className="relative bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-red-500/30 z-10 transform transition-all duration-500 hover:shadow-3xl hover:-translate-y-2">
                                    {/* Chat header */}
                                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-5 flex items-center space-x-4">
                                        <motion.div
                                            className="relative"
                                            whileHover={{ rotate: 10 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <div className="absolute inset-0 bg-red-600/30 rounded-full blur-sm"></div>
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white relative z-10 shadow-md">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                </svg>
                                            </div>
                                        </motion.div>
                                        <div>
                                            <h3 className="text-white font-bold text-xl">Dr. Khiyalat</h3>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                                                <p className="text-xs text-red-300">AI Therapist • Online</p>
                                            </div>
                                        </div>
                                        <div className="ml-auto flex space-x-2">
                                            <button className="p-1 text-red-300/70 hover:text-white transition-colors">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Chat messages */}
                                    <div className="p-5 space-y-4 h-80 overflow-y-auto bg-gray-800">
                                        {messages.map((msg, i) => (
                                            <motion.div
                                                key={i}
                                                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className={`max-w-xs lg:max-w-md px-5 py-3 rounded-2xl ${msg.sender === "user"
                                                    ? "bg-gradient-to-r from-red-600 to-red-800 text-white rounded-br-none"
                                                    : "bg-gray-700 text-white shadow-sm rounded-bl-none border border-red-500/30"}`}>
                                                    {msg.text}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Chat input */}
                                    <div className="border-t border-gray-700 p-4 bg-gray-900">
                                        <div className="flex items-center bg-gray-800 rounded-xl overflow-hidden border border-red-500/30 focus-within:ring-2 focus-within:ring-red-500/30 focus-within:border-red-500/50 transition-all duration-200">
                                            <input
                                                type="text"
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                                placeholder="Type your message..."
                                                className="flex-grow px-4 py-3 bg-transparent focus:outline-none text-white placeholder-red-300/40"
                                            />
                                            <button
                                                onClick={handleSendMessage}
                                                className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 transition-colors duration-200 m-1 rounded-lg flex items-center justify-center"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Animated typing indicator */}
                            <motion.div
                                className="absolute -bottom-6 left-8 flex space-x-1.5"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 0 }}
                                animate={{ opacity: [0, 0.8, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <motion.div
                                    className="w-2.5 h-2.5 bg-red-500 rounded-full"
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                                />
                                <motion.div
                                    className="w-2.5 h-2.5 bg-red-500 rounded-full"
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                                />
                                <motion.div
                                    className="w-2.5 h-2.5 bg-red-500 rounded-full"
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default DemoSection;