import { motion } from "framer-motion";
import Header from "../Homepage/header";
import Footer from "../Homepage/footer";

const Features = () => {
    return (
        <div className="bg-black text-[#FFD6E8]">
            <Header />
            <FeaturesPage />
            <Footer />
        </div>
    )
}

const FeaturesPage = () => {
    return (
        <div className="w-full">
            {/* --- Hero Section --- */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full py-32 px-4 bg-gradient-to-br from-black to-[#1A1A1A] relative overflow-hidden"
            >
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-rose-400 filter blur-3xl"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-pink-500 filter blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-8"
                    >
                        <span className="block">Powerful Features of</span>
                        <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
                            Khiyalat AI
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed"
                    >
                        Discover the cutting-edge capabilities that make our AI platform stand out from the rest.
                    </motion.p>
                </div>
            </motion.section>

            {/* --- Core Features --- */}
            <section className="w-full py-20 bg-[#1A1A1A]">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-16 text-center text-pink-500"
                    >
                        Core Features
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Natural Language Understanding */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ y: -10 }}
                            className="rounded-2xl overflow-hidden border border-[#FFD6E8]/20 bg-black/50"
                        >
                            <div className="h-64 bg-gradient-to-br from-rose-400/10 to-pink-500/10 flex items-center justify-center">
                                <div className="relative w-32 h-32">
                                    <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full"></div>
                                    <div className="absolute inset-1 bg-[#1A1A1A] rounded-full flex items-center justify-center">
                                        <svg width="60" height="60" viewBox="0 0 24 24" className="text-rose-400">
                                            <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-rose-400 mb-4">Advanced NLP</h3>
                                <p className="opacity-90 mb-6">Our AI understands context, nuance, and intent with human-like comprehension across multiple languages.</p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-bold mb-2">Capabilities:</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start">
                                                <span className="text-rose-400 mr-2">•</span>
                                                <span>Contextual conversation memory</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-rose-400 mr-2">•</span>
                                                <span>Sentiment and tone analysis</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-rose-400 mr-2">•</span>
                                                <span>Multilingual support</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Real-time Processing */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ y: -10 }}
                            className="rounded-2xl overflow-hidden border border-[#FFD6E8]/20 bg-black/50"
                        >
                            <div className="h-64 bg-gradient-to-br from-pink-500/10 to-rose-400/10 flex items-center justify-center">
                                <div className="relative w-32 h-32">
                                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-400 rounded-full"></div>
                                    <div className="absolute inset-1 bg-[#1A1A1A] rounded-full flex items-center justify-center">
                                        <svg width="60" height="60" viewBox="0 0 24 24" className="text-pink-500">
                                            <path fill="currentColor" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-pink-500 mb-4">Real-time Processing</h3>
                                <p className="opacity-90 mb-6">Experience lightning-fast responses with sub-200ms latency, even for complex queries.</p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-bold mb-2">Performance:</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start">
                                                <span className="text-pink-500 mr-2">•</span>
                                                <span>200ms average response time</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-pink-500 mr-2">•</span>
                                                <span>99.9% uptime SLA</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-pink-500 mr-2">•</span>
                                                <span>Auto-scaling infrastructure</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Customizable Models */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ y: -10 }}
                            className="rounded-2xl overflow-hidden border border-[#FFD6E8]/20 bg-black/50"
                        >
                            <div className="h-64 bg-gradient-to-br from-rose-400/10 to-pink-500/10 flex items-center justify-center">
                                <div className="relative w-32 h-32">
                                    <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full"></div>
                                    <div className="absolute inset-1 bg-[#1A1A1A] rounded-full flex items-center justify-center">
                                        <svg width="60" height="60" viewBox="0 0 24 24" className="text-pink-500">
                                            <path fill="currentColor" d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-rose-400 mb-4">Custom AI Models</h3>
                                <p className="opacity-90 mb-6">Tailor our AI to your specific needs with fine-tuned models for your industry and use case.</p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-bold mb-2">Options:</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start">
                                                <span className="text-rose-400 mr-2">•</span>
                                                <span>Domain-specific fine-tuning</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-rose-400 mr-2">•</span>
                                                <span>Custom knowledge base integration</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-rose-400 mr-2">•</span>
                                                <span>Brand personality customization</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Advanced Features --- */}
            <section className="w-full py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-16 text-center text-rose-400"
                    >
                        Advanced Capabilities
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Multimodal AI */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="rounded-2xl overflow-hidden border border-[#FFD6E8]/20 bg-[#1A1A1A]/50 p-8 flex items-start"
                        >
                            <div className="mr-6">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
                                    <svg width="36" height="36" viewBox="0 0 24 24" className="text-[#1A1A1A]">
                                        <path fill="currentColor" d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-rose-400 mb-2">Multimodal AI</h3>
                                <p className="text-pink-500 mb-4">Text, image, and voice understanding in one platform</p>
                                <p className="opacity-90 mb-4">Process and generate content across multiple modalities with seamless integration.</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {['Image Recognition', 'Speech-to-Text', 'Text-to-Speech', 'Document Parsing'].map((tech, i) => (
                                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-[#FFD6E8]/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Privacy Focused */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="rounded-2xl overflow-hidden border border-[#FFD6E8]/20 bg-[#1A1A1A]/50 p-8 flex items-start"
                        >
                            <div className="mr-6">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center">
                                    <svg width="36" height="36" viewBox="0 0 24 24" className="text-[#1A1A1A]">
                                        <path fill="currentColor" d="M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M12,4.5C14.17,4.5 16.18,5.23 17.8,6.5L12,12.25V7.5A1.75,1.75 0 0,0 10.25,5.75A1.75,1.75 0 0,0 8.5,7.5V7.75L6.12,10.13C5.86,9.19 5.5,8.31 5.5,7.5A6.5,6.5 0 0,1 12,4.5M12,6.5A5.5,5.5 0 0,0 6.5,12C6.5,12.68 6.63,13.31 6.85,13.9L9.5,11.25V9.5A1.75,1.75 0 0,1 11.25,7.75A1.75,1.75 0 0,1 13,9.5V11.5L17.4,7.1C16.35,6.42 15.2,6 14,6H12V6.5M12,19.5C9.83,19.5 7.82,18.77 6.2,17.5L12,11.75V16.5A1.75,1.75 0 0,0 13.75,18.25A1.75,1.75 0 0,0 15.5,16.5V16.25L17.88,13.87C18.14,14.81 18.5,15.69 18.5,16.5A6.5,6.5 0 0,1 12,19.5M12,17.5A5.5,5.5 0 0,0 17.5,12C17.5,11.32 17.37,10.69 17.15,10.1L14.5,12.75V14.5A1.75,1.75 0 0,1 12.75,16.25A1.75,1.75 0 0,1 11,14.5V12.5L6.6,16.9C7.65,17.58 8.8,18 10,18H12V17.5Z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-pink-500 mb-2">Privacy First</h3>
                                <p className="text-rose-400 mb-4">Enterprise-grade data protection</p>
                                <p className="opacity-90 mb-4">Your data remains yours with our zero-retention policy and on-premise deployment options.</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {['GDPR Compliant', 'End-to-End Encryption', 'Data Localization', 'Zero Retention'].map((tech, i) => (
                                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-[#FFD6E8]/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- CTA --- */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="w-full py-32 bg-gradient-to-br from-[#1A1A1A] to-black"
            >
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                        Ready to Experience Khiyalat AI?
                    </h2>
                    <p className="text-xl opacity-90 mb-12 leading-relaxed">
                        Join thousands of businesses already transforming their operations with our AI platform.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold text-lg"
                        >
                            Get Started for Free
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full border-2 border-rose-400 text-rose-400 font-bold text-lg"
                        >
                            Request Demo
                        </motion.button>
                    </div>
                </div>
            </motion.section>
        </div>
    )
}

export default Features;