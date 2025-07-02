import { motion } from "framer-motion";
import Header from "../Homepage/header";
import Footer from "../Homepage/footer";

const About = () => {
    return (
        <div className="bg-black text-rose-200">
            <Header />
            <AboutPage />
            <Footer />
        </div>
    )
}

const AboutPage = () => {
    return (
        <div className="w-full">
            {/* --- Hero Section (Full Width) --- */}
            <motion.section 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full py-24 px-4 bg-gradient-to-br from-black to-gray-900"
            >
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1 
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-8"
                    >
                        <span className="block">Khiyalat AI:</span>
                        <span className="bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text text-transparent">
                            Beyond Algorithms
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed"
                    >
                        We engineer understanding at the intersection of precision and creativity. 
                        Where 1.2 × 0.5 = 0.6 meets poetic interpretation.
                    </motion.p>
                </div>
            </motion.section>

            {/* --- Stats Section --- */}
            <section className="w-full py-16 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="p-6 rounded-xl bg-black/50"
                        >
                            <h3 className="text-4xl font-bold text-rose-400 mb-2">0.2s</h3>
                            <p className="opacity-80">Avg Response Time</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="p-6 rounded-xl bg-black/50"
                        >
                            <h3 className="text-4xl font-bold text-rose-500 mb-2">99.7%</h3>
                            <p className="opacity-80">Uptime</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="p-6 rounded-xl bg-black/50"
                        >
                            <h3 className="text-4xl font-bold text-rose-400 mb-2">42B+</h3>
                            <p className="opacity-80">Parameters</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="p-6 rounded-xl bg-black/50"
                        >
                            <h3 className="text-4xl font-bold text-rose-500 mb-2">128K</h3>
                            <p className="opacity-80">Context Window</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Core Technology --- */}
            <section className="w-full py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-12 text-rose-400"
                    >
                        Our Technical Edge
                    </motion.h2>
                    
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl border border-rose-200/20 bg-gray-900/50"
                        >
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                                <span className="w-3 h-3 rounded-full bg-rose-400 mr-3"></span>
                                Adaptive Context Processing
                            </h3>
                            <p className="opacity-90 leading-relaxed mb-6">
                                Our proprietary context window management maintains coherence across 128K tokens while dynamically prioritizing relevant information based on conversation flow.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-rose-400 mr-2">✓</span>
                                    <span>Real-time relevance scoring</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-rose-400 mr-2">✓</span>
                                    <span>Conversation memory compression</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-rose-400 mr-2">✓</span>
                                    <span>Multi-document reference tracking</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-8 rounded-2xl border border-rose-200/20 bg-gray-900/50"
                        >
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                                <span className="w-3 h-3 rounded-full bg-rose-500 mr-3"></span>
                                Hybrid Inference Engine
                            </h3>
                            <p className="opacity-90 leading-relaxed mb-6">
                                Combines the precision of symbolic AI with the creativity of neural networks through our patent-pending fusion architecture.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-rose-500 mr-2">✓</span>
                                    <span>Mathematical exactitude module</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-rose-500 mr-2">✓</span>
                                    <span>Creative narrative generation</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-rose-500 mr-2">✓</span>
                                    <span>Dynamic style adaptation</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Team Section --- */}
            <section className="w-full py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-4 text-center text-rose-500"
                    >
                        The Minds Behind Khiyalat
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xl max-w-3xl mx-auto text-center mb-16 opacity-90"
                    >
                        A multidisciplinary team pushing the boundaries of what conversational AI can achieve
                    </motion.p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="rounded-xl overflow-hidden border border-rose-200/20 bg-black/50"
                            >
                                <div className="h-48 bg-gradient-to-r from-rose-400/10 to-rose-600/10"></div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-rose-400">{member.name}</h3>
                                    <p className="text-rose-500 mb-4">{member.role}</p>
                                    <p className="opacity-90 mb-4">{member.bio}</p>
                                    <div className="flex space-x-4">
                                        {member.expertise.map((skill, i) => (
                                            <span key={i} className="text-xs px-3 py-1 rounded-full bg-rose-200/10">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Timeline --- */}
            <section className="w-full py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-16 text-center text-rose-400"
                    >
                        Our Journey
                    </motion.h2>
                    
                    <div className="relative">
                        <div className="absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-rose-400/20 via-rose-500/50 to-rose-400/20"></div>
                        
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                            >
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                                    <h3 className="text-2xl font-bold text-rose-500 mb-2">{milestone.date}</h3>
                                    <p className="text-xl font-semibold mb-2">{milestone.title}</p>
                                    <p className="opacity-90">{milestone.description}</p>
                                </div>
                                <div className="w-1/2 flex justify-center">
                                    <div className="w-6 h-6 rounded-full bg-rose-400 border-4 border-black"></div>
                                </div>
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                                    {milestone.image && (
                                        <div className="h-40 rounded-lg overflow-hidden border border-rose-200/20">
                                            <div className="w-full h-full bg-gradient-to-r from-rose-400/10 to-rose-600/10"></div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA --- */}
            <section className="w-full py-32 bg-gradient-to-br from-gray-900 to-black">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-8"
                    >
                        <span className="block mb-4">Ready to experience</span>
                        <span className="bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text text-transparent">
                            AI done right?
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xl mb-12 max-w-2xl mx-auto opacity-90"
                    >
                        No hallucinations. No corporate fluff. Just precise, creative, context-aware responses.
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-400 to-rose-600 text-black font-bold text-lg"
                    >
                        Start Chatting Now
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

// Data
const teamMembers = [
    {
        name: "Hanzla",
        role: "Backend Architect",
        bio: "Designed the distributed inference engine that processes 10,000+ requests per second with sub-200ms latency.",
        expertise: ["Distributed Systems", "Rust", "CUDA Optimization"]
    },
    {
        name: "Mahnoor",
        role: "UI/UX Designer",
        bio: "Crafted the minimalist interface that makes complex AI interactions feel intuitive and natural.",
        expertise: ["Figma", "Motion Design", "User Research"]
    },
    {
        name: "Abdur Rehman",
        role: "API Engineer",
        bio: "Built the integration layer that connects Khiyalat with enterprise systems and third-party apps.",
        expertise: ["GraphQL", "WebSockets", "OAuth 2.0"]
    }
];

const milestones = [
    {
        date: "Apr 2025",
        title: "Concept Born",
        description: "Initial research into hybrid AI architectures began in a university lab.",
        image: true
    },
    {
        date: "May 2025",
        title: "First Prototype",
        description: "Proof-of-concept demonstrated 40% better accuracy than pure LLM approaches.",
        image: false
    },
    {
        date: "June 2025",
        title: "Seed Funding",
        description: "$1000 raised to build the core engineering team.",
        image: true
    },
    {
        date: "June 2025",
        title: "Beta Launch",
        description: "First public release with 10+ active users in first month.",
        image: false
    },
    {
        date: "Now",
        title: "Version 2.0",
        description: "Introducing 128K context window and real-time collaboration features.",
        image: true
    }
];

export default About;