import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PricingSection = () => {
    const tiers = [
        {
            name: "Basic",
            price: "Free",
            description: "Get started with essential mental health support",
            features: [
                "5 AI conversations per month",
                "Basic thought analysis",
                "Community support access",
                "Limited progress tracking"
            ],
            color: "from-red-600 to-red-700",
            buttonText: "Get Started",
            popular: false,
            glowColor: "rgba(220, 38, 38, 0.2)"
        },
        {
            name: "Pro",
            price: "$9.99",
            period: "/month",
            description: "Enhanced support for your mental wellbeing",
            features: [
                "Unlimited AI conversations",
                "Advanced thought analysis",
                "Emotional support tools",
                "Full progress tracking",
                "Cognitive reframing exercises"
            ],
            color: "from-red-700 to-red-800",
            buttonText: "Start Free Trial",
            popular: true,
            glowColor: "rgba(185, 28, 28, 0.2)"
        },
        {
            name: "Premium",
            price: "$24.99",
            period: "/month",
            description: "Complete mental health companion",
            features: [
                "Everything in Pro",
                "Priority support",
                "Sleep pattern analysis",
                "Weekly insights report",
                "Personalized coping strategies",
                "Exclusive community groups"
            ],
            color: "from-red-800 to-red-900",
            buttonText: "Choose Premium",
            popular: false,
            glowColor: "rgba(153, 27, 27, 0.2)"
        }
    ];

    return (
        <section className="relative py-28 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
            {/* Enhanced floating decorative elements with lighting effects */}
            <div className="absolute inset-0 overflow-hidden opacity-40">
                {[...Array(30)].map((_, i) => {
                    const size = Math.random() * 15 + 5;
                    const delay = Math.random() * 5;
                    const duration = Math.random() * 15 + 15;
                    const colors = ["#dc2626", "#b91c1c", "#991b1b"];
                    const color = colors[i % 3];

                    return (
                        <motion.div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                backgroundColor: color,
                                boxShadow: `0 0 ${size * 2}px ${size}px ${color}`
                            }}
                            animate={{
                                y: [0, -100, -200],
                                x: [0, Math.random() * 40 - 20, 0],
                                opacity: [0.1, 0.8, 0]
                            }}
                            transition={{
                                duration: duration,
                                repeat: Infinity,
                                delay: delay,
                                ease: "linear"
                            }}
                        />
                    );
                })}
            </div>

            {/* Background gradient lighting */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-red-600 rounded-full opacity-10 blur-[100px]"></div>
                <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-red-900 rounded-full opacity-10 blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section header with enhanced animation */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Transparent</span> Pricing
                    </h2>
                    <p className="text-xl text-red-200 max-w-2xl mx-auto">
                        Choose the plan that fits your journey
                    </p>
                </motion.div>

                {/* Pricing tiers with enhanced hover effects */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative group"
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Popular badge with glow */}
                            {tier.popular && (
                                <motion.div
                                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-bold px-4 py-1 rounded-full shadow-md z-10"
                                    animate={{
                                        boxShadow: ["0 0 10px 0 rgba(220,38,38,0.5)", "0 0 20px 5px rgba(220,38,38,0.8)", "0 0 10px 0 rgba(220,38,38,0.5)"]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity
                                    }}
                                >
                                    Most Popular
                                </motion.div>
                            )}

                            {/* Pricing card container */}
                            <div className={`relative h-full rounded-xl overflow-hidden transition-all duration-500 ${tier.popular ? 'mt-4' : ''}`}>
                                {/* Glow effect on hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r ${tier.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                                    style={{
                                        boxShadow: `0 0 40px 20px ${tier.glowColor}`
                                    }}
                                ></div>

                                {/* Main card */}
                                <div className={`h-full bg-gray-900/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-red-500/20 transition-all duration-300 group-hover:shadow-2xl ${tier.popular ? 'ring-2 ring-red-600/50' : ''}`}>
                                    {/* Gradient header with shine effect */}
                                    <div className={`relative bg-gradient-to-r ${tier.color} p-6 overflow-hidden`}>
                                        <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/20 rounded-full transform rotate-45 group-hover:opacity-50 transition-opacity duration-500"></div>
                                        <h3 className="text-2xl font-bold text-white text-center relative z-10">{tier.name}</h3>
                                    </div>

                                    {/* Price section */}
                                    <div className="p-6 text-center border-b border-red-500/10 relative">
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent group-hover:from-white/10 group-hover:to-white/20 transition-all duration-500"></div>
                                        <div className="text-5xl font-bold text-white mb-1 relative z-10">
                                            {tier.price}
                                            {tier.period && (
                                                <span className="text-lg font-normal text-red-300">{tier.period}</span>
                                            )}
                                        </div>
                                        <p className="text-red-200 relative z-10">{tier.description}</p>
                                    </div>

                                    {/* Features list */}
                                    <div className="p-6 relative">
                                        <ul className="space-y-3 mb-8">
                                            {tier.features.map((feature, i) => (
                                                <motion.li
                                                    key={i}
                                                    className="flex items-start group/feature"
                                                    whileHover={{
                                                        x: 5,
                                                        transition: { duration: 0.2 }
                                                    }}
                                                >
                                                    <svg className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0 group-hover/feature:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-red-100 group-hover/feature:text-white transition-colors">{feature}</span>
                                                </motion.li>
                                            ))}
                                        </ul>

                                        {/* CTA button with enhanced hover */}
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="relative"
                                        >
                                            <Link
                                                to="/signup"
                                                className={`block text-center bg-gradient-to-r ${tier.color} hover:opacity-90 text-white font-bold py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden`}
                                            >
                                                <span className="relative z-10 flex items-center justify-center">
                                                    {tier.buttonText}
                                                    <svg
                                                        className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </span>
                                                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                            </Link>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Enterprise/Team option with enhanced animation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="mt-16 bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg p-8 max-w-4xl mx-auto border border-red-500/30 relative overflow-hidden"
                >
                    {/* Floating particles */}
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-red-600 rounded-full"
                            style={{
                                width: `${Math.random() * 6 + 2}px`,
                                height: `${Math.random() * 6 + 2}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                opacity: 0.1
                            }}
                            animate={{
                                y: [0, -50, -100],
                                x: [0, Math.random() * 20 - 10, 0],
                                opacity: [0.1, 0.3, 0]
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                                ease: "linear"
                            }}
                        />
                    ))}

                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Need something custom?</h3>
                            <p className="text-red-200">We offer team plans and enterprise solutions for organizations.</p>
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/contact"
                                className="bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-800 text-white font-bold py-3 px-6 rounded-lg shadow hover:shadow-md transition-all duration-300 whitespace-nowrap flex items-center"
                            >
                                Contact Sales
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default PricingSection;