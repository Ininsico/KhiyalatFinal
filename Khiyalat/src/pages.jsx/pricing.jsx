import { motion } from "framer-motion";
import Header from "../Homepage/header";
import Footer from "../Homepage/footer";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
    return (
        <div className="bg-black text-rose-100">
            <Header />
            <PricingPage />
            <Footer />
        </div>
    )
}

const PricingPage = () => {
    const navigate = useNavigate();

    const navigateToPricing = (plan) => {
        navigate(`/pricing/${plan.toLowerCase()}`);
    };

    return (
        <div className="w-full overflow-hidden">
            {/* --- Hero Section --- */}
            <motion.section 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full py-32 px-4 bg-gradient-to-br from-black to-rose-900/50 relative"
            >
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                x: [0, 100, 0],
                                y: [0, 50, 0],
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 20 + Math.random() * 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute opacity-10"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                        >
                            <svg width="40" height="40" viewBox="0 0 24 24" className="text-rose-400">
                                <path fill="currentColor" d="M12,2L4,12L12,22L20,12L12,2Z" />
                            </svg>
                        </motion.div>
                    ))}
                </div>
                
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.h1 
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-8"
                    >
                        <span className="block">Khiyalat AI</span>
                        <span className="bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text text-transparent">
                            Pricing That Scales With You
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed"
                    >
                        Pay only for what you need. Enterprise-grade AI without the enterprise-grade complexity.
                    </motion.p>
                </div>
            </motion.section>

            {/* --- Pricing Toggle --- */}
            <motion.section 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="w-full py-16 bg-rose-900/20"
            >
                <div className="max-w-md mx-auto px-4">
                    <div className="flex items-center justify-center">
                        <span className="mr-4 font-medium">Monthly</span>
                        <div className="relative">
                            <div className="w-16 h-8 bg-black rounded-full shadow-inner"></div>
                            <motion.div 
                                className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-r from-rose-400 to-rose-600 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
                                initial={{ x: 0 }}
                                animate={{ x: 0 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" className="text-black">
                                    <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                                </svg>
                            </motion.div>
                        </div>
                        <span className="ml-4 font-medium text-rose-400">Annual (Save 20%)</span>
                    </div>
                </div>
            </motion.section>

            {/* --- Pricing Cards --- */}
            <section className="w-full py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {/* Free Tier */}
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="rounded-2xl border border-rose-100/20 bg-rose-900/10 overflow-hidden"
                        >
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-2">Explorer</h3>
                                <p className="opacity-80 mb-6">For hobbyists and curious minds</p>
                                
                                <div className="mb-8">
                                    <span className="text-5xl font-bold">$0</span>
                                    <span className="opacity-80">/forever</span>
                                </div>
                                
                                <button 
                                    onClick={() => navigateToPricing("explorer")}
                                    className="w-full py-3 rounded-lg border border-rose-100/20 mb-8 hover:bg-rose-900/30 transition-colors"
                                >
                                    Get Started
                                </button>
                                
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-rose-400 mr-2">✓</span>
                                        <span>20 messages/day</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-400 mr-2">✓</span>
                                        <span>4K context window</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-400 mr-2">✓</span>
                                        <span>Basic model access</span>
                                    </li>
                                    <li className="flex items-start opacity-50">
                                        <span className="mr-2">✗</span>
                                        <span>No file uploads</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                        
                        {/* Pro Tier (Featured) */}
                        <motion.div 
                            initial={{ scale: 0.95 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="rounded-2xl border-2 border-rose-400/50 bg-gradient-to-b from-rose-900/30 to-black overflow-hidden relative"
                        >
                            <div className="absolute top-4 right-4 bg-rose-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                                MOST POPULAR
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-2">Creator</h3>
                                <p className="opacity-80 mb-6">For professionals and power users</p>
                                
                                <div className="mb-8">
                                    <span className="text-5xl font-bold">$20</span>
                                    <span className="opacity-80">/month</span>
                                </div>
                                
                                <button 
                                    onClick={() => navigateToPricing("creator")}
                                    className="w-full py-3 rounded-lg bg-gradient-to-r from-rose-400 to-rose-600 text-black font-bold mb-8 hover:opacity-90 transition-opacity"
                                >
                                    Start Free Trial
                                </button>
                                
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-rose-400 mr-2">✓</span>
                                        <span>500 messages/month</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-400 mr-2">✓</span>
                                        <span>32K context window</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-400 mr-2">✓</span>
                                        <span>Advanced model access</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-400 mr-2">✓</span>
                                        <span>5 file uploads/month</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-400 mr-2">✓</span>
                                        <span>API access</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                        
                        {/* Enterprise Tier */}
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="rounded-2xl border border-rose-100/20 bg-rose-900/10 overflow-hidden"
                        >
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                                <p className="opacity-80 mb-6">For teams and organizations</p>
                                
                                <div className="mb-8">
                                    <span className="text-5xl font-bold">Custom</span>
                                </div>
                                
                                <button 
                                    onClick={() => navigateToPricing("enterprise")}
                                    className="w-full py-3 rounded-lg border border-rose-100/20 mb-8 hover:bg-rose-900/30 transition-colors"
                                >
                                    Contact Sales
                                </button>
                                
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-rose-400 mr-2">✓</span>
                                        <span>Unlimited messages</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-400 mr-2">✓</span>
                                        <span>128K context window</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-400 mr-2">✓</span>
                                        <span>Priority model access</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-400 mr-2">✓</span>
                                        <span>Unlimited file uploads</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-400 mr-2">✓</span>
                                        <span>Dedicated support</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-400 mr-2">✓</span>
                                        <span>Team collaboration</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-400 mr-2">✓</span>
                                        <span>SSO & custom domains</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* --- Feature Comparison --- */}
            <section className="w-full py-20 bg-rose-900/20">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-16 text-center text-rose-400"
                    >
                        Detailed Feature Breakdown
                    </motion.h2>
                    
                    <div className="overflow-x-auto">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="min-w-[800px]"
                        >
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-rose-100/20">
                                        <th className="pb-6 text-left">Feature</th>
                                        <th className="pb-6 text-center">Explorer</th>
                                        <th className="pb-6 text-center">Creator</th>
                                        <th className="pb-6 text-center">Enterprise</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-rose-100/10">
                                    {features.map((feature, i) => (
                                        <motion.tr
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                            className="hover:bg-black/50"
                                        >
                                            <td className="py-4 pr-4">{feature.name}</td>
                                            <td className="py-4 px-4 text-center">
                                                {feature.levels[0] === true ? (
                                                    <span className="text-rose-400">✓</span>
                                                ) : feature.levels[0] === false ? (
                                                    <span className="opacity-50">✗</span>
                                                ) : (
                                                    feature.levels[0]
                                                )}
                                            </td>
                                            <td className="py-4 px-4 text-center">
                                                {feature.levels[1] === true ? (
                                                    <span className="text-rose-400">✓</span>
                                                ) : feature.levels[1] === false ? (
                                                    <span className="opacity-50">✗</span>
                                                ) : (
                                                    feature.levels[1]
                                                )}
                                            </td>
                                            <td className="py-4 px-4 text-center">
                                                {feature.levels[2] === true ? (
                                                    <span className="text-rose-400">✓</span>
                                                ) : feature.levels[2] === false ? (
                                                    <span className="opacity-50">✗</span>
                                                ) : (
                                                    feature.levels[2]
                                                )}
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Testimonials --- */}
            <section className="w-full py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-16 text-center text-rose-400"
                    >
                        Trusted by Innovators
                    </motion.h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="p-8 rounded-2xl border border-rose-100/20 bg-rose-900/10"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-rose-400 to-rose-600 mr-4"></div>
                                    <div>
                                        <h4 className="font-bold">{testimonial.name}</h4>
                                        <p className="text-sm opacity-80">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="opacity-90 mb-6 italic">"{testimonial.quote}"</p>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} width="20" height="20" viewBox="0 0 24 24" className="text-rose-400">
                                            <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                                        </svg>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FAQ --- */}
            <section className="w-full py-20 bg-rose-900/20">
                <div className="max-w-4xl mx-auto px-4">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-16 text-center text-rose-400"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="border-b border-rose-100/20 pb-6"
                            >
                                <h3 className="text-xl font-bold mb-3 flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-rose-400 mr-3"></span>
                                    {faq.question}
                                </h3>
                                <p className="opacity-90 pl-5">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Final CTA --- */}
            <section className="w-full py-32 bg-gradient-to-br from-black to-rose-900/50">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-8"
                    >
                        <span className="block mb-4">Still have questions?</span>
                        <span className="bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text text-transparent">
                            We've got answers
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xl mb-12 max-w-2xl mx-auto opacity-90"
                    >
                        Our team is ready to help you find the perfect plan for your needs.
                    </motion.p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <motion.button
                            onClick={() => navigateToPricing("creator")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-400 to-rose-600 text-black font-bold text-lg"
                        >
                            Start Free Trial
                        </motion.button>
                        <motion.button
                            onClick={() => navigateToPricing("enterprise")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full border-2 border-rose-400 text-rose-400 font-bold text-lg"
                        >
                            Contact Sales
                        </motion.button>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Data (same as before)
const features = [
    { name: "Daily Message Limit", levels: ["20", "500", "Unlimited"] },
    { name: "Context Window", levels: ["4K", "32K", "128K"] },
    { name: "Model Access", levels: ["Basic", "Advanced", "Priority"] },
    { name: "File Uploads", levels: [false, "5/month", "Unlimited"] },
    { name: "API Access", levels: [false, true, true] },
    { name: "Response Speed", levels: ["Standard", "Priority", "Ultra"] },
    { name: "Support", levels: ["Community", "Email", "Dedicated"] },
    { name: "Team Collaboration", levels: [false, false, true] },
    { name: "SSO Integration", levels: [false, false, true] },
    { name: "Custom Domains", levels: [false, false, true] },
];

const testimonials = [
    {
        name: "Sarah Chen",
        role: "CTO at NeuroTech",
        quote: "Khiyalat's API has reduced our development time by 40%. The quality of responses is unmatched in the industry."
    },
    {
        name: "James Rodriguez",
        role: "Lead Data Scientist",
        quote: "The 128K context window has been a game-changer for our research team. We can now process entire technical papers in one go."
    },
    {
        name: "Priya Patel",
        role: "Product Manager",
        quote: "From prototyping to production, Khiyalat scaled seamlessly with our needs. The pricing is transparent and fair."
    }
];

const faqs = [
    {
        question: "How does the free tier work?",
        answer: "Our free tier gives you access to 20 messages per day with basic model capabilities. No credit card required - just sign up and start using immediately."
    },
    {
        question: "Can I upgrade or downgrade my plan?",
        answer: "Yes, you can change your plan at any time. Upgrades take effect immediately with a prorated charge. Downgrades apply at your next billing cycle."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and bank transfers for enterprise plans."
    },
    {
        question: "Is there a team discount?",
        answer: "Yes! Teams of 5+ members receive 15% off. Contact our sales team for larger organizations to discuss custom pricing."
    },
    {
        question: "How do I contact support?",
        answer: "All paid plans include email support with 24-hour response times. Enterprise plans include priority support with dedicated Slack channels and <4 hour response times."
    }
];

export default Pricing;