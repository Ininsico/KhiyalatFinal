import { motion } from 'framer-motion';

const CTASection = () => {
    return (
        <section className="relative py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">

            {/* Subtle floating particles (optional, remove if too much) */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-rose-500 rounded-full"
                        style={{
                            width: `${Math.random() * 6 + 2}px`,
                            height: `${Math.random() * 6 + 2}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">

                    {/* Headline with Impact */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-rose-100 mb-6"
                    >
                        Get <span className="text-rose-400">Instant Access</span> Today
                    </motion.h2>

                    {/* Straight-to-the-point description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-xl text-rose-100/80 mb-10"
                    >
                        Join thousands who've transformed their mental health. No credit card needed.
                    </motion.p>

                    {/* MAIN CTA BUTTON (Simple but Effective) */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-block"
                    >
                        <a
                            href="/signup"
                            className="
                                inline-flex items-center 
                                px-10 py-4 
                                bg-gradient-to-r from-rose-500 to-rose-600 
                                text-white font-bold 
                                rounded-lg 
                                shadow-lg 
                                transition-all duration-200 
                                hover:from-rose-600 hover:to-rose-500 
                                hover:shadow-xl
                            "
                        >
                            Try Now for Free
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </motion.div>

                    {/* Trust Badges (Optional but Effective) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-8 flex flex-wrap justify-center gap-4 text-rose-100/70 text-sm"
                    >
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            No commitment
                        </div>
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Cancel anytime
                        </div>
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            30,000+ users
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default CTASection