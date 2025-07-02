import { motion } from "framer-motion";
import Header from "../Homepage/header";
import Footer from "../Homepage/footer";

const Developers = () => {
    return (
        <div className="bg-black text-[#FFD6E8]">
            <Header />
            <DevelopersPage />
            <Footer />
        </div>
    )
}

const DevelopersPage = () => {
    return (
        <div className="w-full">
            {/* --- Hero Section --- */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full py-32 px-4 bg-gradient-to-br from-black to-[#1A0B0F] relative overflow-hidden"
            >
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-rose-300 filter blur-3xl"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-pink-400 filter blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-8"
                    >
                        <span className="block">The Minds Behind</span>
                        <span className="bg-gradient-to-r from-rose-300 to-pink-400 bg-clip-text text-transparent">
                            Khiyalat AI
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed"
                    >
                        Meet the brilliant engineers who turn complex algorithms into seamless experiences.
                    </motion.p>
                </div>
            </motion.section>

            {/* --- Core Team --- */}
            <section className="w-full py-20 bg-[#1A0B0F]">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-16 text-center text-pink-400"
                    >
                        Core Development Team
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Hanzala - Backend */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ y: -10 }}
                            className="rounded-2xl overflow-hidden border border-[#FFD6E8]/20 bg-black/50"
                        >
                            <div className="h-64 bg-gradient-to-br from-rose-300/10 to-pink-400/10 flex items-center justify-center">
                                <div className="relative w-32 h-32">
                                    <div className="absolute inset-0 bg-gradient-to-br from-rose-300 to-pink-400 rounded-full"></div>
                                    <div className="absolute inset-1 bg-[#1A0B0F] rounded-full flex items-center justify-center">
                                        <svg width="60" height="60" viewBox="0 0 24 24" className="text-rose-300">
                                            <path fill="currentColor" d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-rose-300 mb-2">Syed Hanzala</h3>
                                <p className="text-pink-400 mb-4">Backend Architect</p>
                                <p className="opacity-90 mb-6">Built the distributed inference engine that processes 10,000+ requests per second with sub-200ms latency.</p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-bold mb-2">Key Contributions:</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start">
                                                <span className="text-rose-300 mr-2">•</span>
                                                <span>Optimized CUDA kernels for 3x throughput</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-rose-300 mr-2">•</span>
                                                <span>Designed auto-scaling cluster architecture</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-rose-300 mr-2">•</span>
                                                <span>Implemented zero-downtime deployment</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-bold mb-2">Tech Stack:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {['Rust', 'Kubernetes', 'NVIDIA CUDA', 'PostgreSQL', 'Redis'].map((tech, i) => (
                                                <span key={i} className="text-xs px-3 py-1 rounded-full bg-[#FFD6E8]/10">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mahnoor - Frontend */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ y: -10 }}
                            className="rounded-2xl overflow-hidden border border-[#FFD6E8]/20 bg-black/50"
                        >
                            <div className="h-64 bg-gradient-to-br from-pink-400/10 to-rose-300/10 flex items-center justify-center">
                                <div className="relative w-32 h-32">
                                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-300 rounded-full"></div>
                                    <div className="absolute inset-1 bg-[#1A0B0F] rounded-full flex items-center justify-center">
                                        <svg width="60" height="60" viewBox="0 0 24 24" className="text-pink-400">
                                            <path fill="currentColor" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,12.5A1.5,1.5 0 0,1 10.5,11A1.5,1.5 0 0,1 12,9.5A1.5,1.5 0 0,1 13.5,11A1.5,1.5 0 0,1 12,12.5M12,7.2C9.9,7.2 8.2,8.9 8.2,11C8.2,14 12,17.5 12,17.5C12,17.5 15.8,14 15.8,11C15.8,8.9 14.1,7.2 12,7.2Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-pink-400 mb-2">Mahnoor</h3>
                                <p className="text-rose-300 mb-4">Frontend & UI/UX Designer</p>
                                <p className="opacity-90 mb-6">Crafted the minimalist interface that makes complex AI interactions feel intuitive and natural.</p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-bold mb-2">Key Contributions:</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start">
                                                <span className="text-pink-400 mr-2">•</span>
                                                <span>Designed the conversation flow system</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-pink-400 mr-2">•</span>
                                                <span>Implemented dark/light mode theming</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-pink-400 mr-2">•</span>
                                                <span>Optimized for 60fps animations</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-bold mb-2">Tech Stack:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {['React', 'Framer Motion', 'Tailwind CSS', 'Figma', 'Three.js'].map((tech, i) => (
                                                <span key={i} className="text-xs px-3 py-1 rounded-full bg-[#FFD6E8]/10">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Abdur Rehman - API */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ y: -10 }}
                            className="rounded-2xl overflow-hidden border border-[#FFD6E8]/20 bg-black/50"
                        >
                            <div className="h-64 bg-gradient-to-br from-rose-300/10 to-pink-400/10 flex items-center justify-center">
                                <div className="relative w-32 h-32">
                                    <div className="absolute inset-0 bg-gradient-to-br from-rose-300 to-pink-400 rounded-full"></div>
                                    <div className="absolute inset-1 bg-[#1A0B0F] rounded-full flex items-center justify-center">
                                        <svg width="60" height="60" viewBox="0 0 24 24" className="text-pink-400">
                                            <path fill="currentColor" d="M5,3H7V5H5V10A2,2 0 0,1 3,12A2,2 0 0,1 5,14V19H7V21H5C3.93,20.73 3,20.1 3,19V15A2,2 0 0,0 1,13H0V11H1A2,2 0 0,0 3,9V5A2,2 0 0,1 5,3M19,3A2,2 0 0,1 21,5V9A2,2 0 0,0 23,11H24V13H23A2,2 0 0,0 21,15V19A2,2 0 0,1 19,21H17V19H19V14A2,2 0 0,1 21,12A2,2 0 0,1 19,10V5H17V3H19M12,15A1,1 0 0,1 13,16A1,1 0 0,1 12,17A1,1 0 0,1 11,16A1,1 0 0,1 12,15M8,15A1,1 0 0,1 9,16A1,1 0 0,1 8,17A1,1 0 0,1 7,16A1,1 0 0,1 8,15M16,15A1,1 
                                            0 0,1 17,16A1,1 0 0,1 16,17A1,1 0 0,1 15,16A1,1 0 0,1 16,15Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-rose-300 mb-2">Abdur Rehman</h3>
                                <p className="text-pink-400 mb-4">API & Integration Specialist</p>
                                <p className="opacity-90 mb-6">Engineered the robust API layer that handles authentication, rate limiting, and third-party integrations.</p>                            <div className="space-y-4">
                                    <div>
                                        <h4 className="font-bold mb-2">Key Contributions:</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start">
                                                <span className="text-rose-300 mr-2">•</span>
                                                <span>Developed OAuth 2.0 implementation</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-rose-300 mr-2">•</span>
                                                <span>Built webhook notification system</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-rose-300 mr-2">•</span>
                                                <span>Created API documentation portal</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-bold mb-2">Tech Stack:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {['Node.js', 'GraphQL', 'FastAPI', 'OAuth', 'Swagger'].map((tech, i) => (
                                                <span key={i} className="text-xs px-3 py-1 rounded-full bg-[#FFD6E8]/10">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Research Team --- */}
            <section className="w-full py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-16 text-center text-rose-300"
                    >
                        Research & NLP Team
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Ayesha - NLP */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="rounded-2xl overflow-hidden border border-[#FFD6E8]/20 bg-[#1A0B0F]/50 p-8 flex items-start"
                        >
                            <div className="mr-6">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-300 to-pink-400 flex items-center justify-center">
                                    <svg width="36" height="36" viewBox="0 0 24 24" className="text-[#1A0B0F]">
                                        <path fill="currentColor" d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-rose-300 mb-2">Mahnoor</h3>
                                <p className="text-pink-400 mb-4">NLP Research Scientist</p>
                                <p className="opacity-90 mb-4">Developed the core language understanding models that power Khiyalat's contextual responses.</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {['Transformers', 'PyTorch', 'NLTK', 'spaCy'].map((tech, i) => (
                                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-[#FFD6E8]/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="text-sm opacity-80">
                                    <p>Published papers on few-shot learning for low-resource languages.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bilal - ML Engineer */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="rounded-2xl overflow-hidden border border-[#FFD6E8]/20 bg-[#1A0B0F]/50 p-8 flex items-start"
                        >
                            <div className="mr-6">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-rose-300 flex items-center justify-center">
                                    <svg width="36" height="36" viewBox="0 0 24 24" className="text-[#1A0B0F]">
                                        <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M17,15V13H7V15H17M17,11V9H7V11H17Z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-pink-400 mb-2">Hanzala</h3>
                                <p className="text-rose-300 mb-4">Machine Learning Engineer</p>
                                <p className="opacity-90 mb-4">Optimized model training pipelines and deployed efficient inference solutions.</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {['TensorFlow', 'ONNX', 'Docker', 'Kubeflow'].map((tech, i) => (
                                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-[#FFD6E8]/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="text-sm opacity-80">
                                    <p>Reduced model latency by 60% through quantization and pruning techniques.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Join Us --- */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="w-full py-32 bg-gradient-to-br from-[#1A0B0F] to-black"
            >
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                        Want to Join Our Team?
                    </h2>
                    <p className="text-xl opacity-90 mb-12 leading-relaxed">
                        We're always looking for passionate engineers and researchers to push the boundaries of AI.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 text-black font-bold text-lg"
                    >
                        View Open Positions
                    </motion.button>
                </div>
            </motion.section>
        </div>
    )
}

export default Developers;