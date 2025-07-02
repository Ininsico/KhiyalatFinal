import { motion } from 'framer-motion';
import { FaComments, FaHeartbeat, FaLightbulb, FaChartLine, FaMoon, FaUsers } from 'react-icons/fa';

const FeaturesSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9]
            }
        },
        hover: {
            y: -15,
            scale: 1.03,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const features = [
        {
            icon: <FaComments className="w-10 h-10" />,
            title: "Thought Analysis",
            description: "Gain insights into recurring thought patterns and understand their underlying meanings with our advanced AI analysis.",
            color: "from-red-600 to-red-700",
            bgGlow: "rgba(220, 38, 38, 0.15)"
        },
        {
            icon: <FaHeartbeat className="w-10 h-10" />,
            title: "Emotional Support",
            description: "Receive compassionate responses that validate your feelings and help you process difficult emotions.",
            color: "from-red-700 to-red-800",
            bgGlow: "rgba(185, 28, 28, 0.15)"
        },
        {
            icon: <FaLightbulb className="w-10 h-10" />,
            title: "Cognitive Reframing",
            description: "Learn to reframe negative thoughts and develop healthier perspectives on challenging situations.",
            color: "from-red-800 to-red-900",
            bgGlow: "rgba(153, 27, 27, 0.15)"
        },
        {
            icon: <FaChartLine className="w-10 h-10" />,
            title: "Progress Tracking",
            description: "Visualize your mental health journey with detailed analytics and personalized insights over time.",
            color: "from-red-600 to-red-800",
            bgGlow: "rgba(220, 38, 38, 0.15)"
        },
        {
            icon: <FaMoon className="w-10 h-10" />,
            title: "Sleep Patterns",
            description: "Understand how your thoughts affect your sleep and get recommendations for better rest.",
            color: "from-red-700 to-red-900",
            bgGlow: "rgba(185, 28, 28, 0.15)"
        },
        {
            icon: <FaUsers className="w-10 h-10" />,
            title: "Community Support",
            description: "Connect with others who share similar experiences in our moderated support spaces.",
            color: "from-red-800 to-red-600",
            bgGlow: "rgba(153, 27, 27, 0.15)"
        }
    ];

    return (
        <section className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4 h-full flex flex-col justify-center">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        How <span className="text-red-500">Khiyalat</span> Helps You
                    </h2>
                    <p className="text-xl md:text-2xl text-red-200 max-w-3xl mx-auto">
                        Our AI companion provides personalized support tailored to your mental wellbeing needs
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover="hover"
                            className="relative group"
                        >
                            {/* Glow effect */}
                            <div
                                className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500`}
                                style={{
                                    boxShadow: `0 0 20px 10px ${feature.bgGlow}`
                                }}
                            ></div>

                            {/* Feature Card */}
                            <div className="relative h-full bg-gray-900/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-red-500/20 transition-all duration-300 group-hover:shadow-2xl">
                                {/* Gradient top border */}
                                <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>

                                <div className="p-8 h-full flex flex-col">
                                    {/* Icon with floating animation */}
                                    <motion.div
                                        animate={{
                                            y: [0, -8, 0],
                                            rotate: [0, 5, -5, 0]
                                        }}
                                        transition={{
                                            duration: 6,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className={`w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center mx-auto shadow-lg`}
                                    >
                                        {feature.icon}
                                    </motion.div>

                                    <h3 className="text-2xl font-bold text-center text-white mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-lg text-center text-red-200 mb-6 flex-grow">
                                        {feature.description}
                                    </p>

                                    {/* Learn more button */}
                                    <div className="text-center">
                                        <button className="px-6 py-2 rounded-full border-2 border-transparent bg-gradient-to-r from-transparent to-transparent group-hover:border-red-500/30 group-hover:bg-red-500/10 text-white transition-all duration-300">
                                            Learn more
                                        </button>
                                    </div>
                                </div>

                                {/* Floating dots decoration */}
                                <div className="absolute bottom-4 left-4 w-16 h-16 opacity-10 group-hover:opacity-30 transition-opacity duration-300">
                                    <div className="absolute top-0 left-0 w-2 h-2 bg-red-400 rounded-full"></div>
                                    <div className="absolute top-0 right-0 w-2 h-2 bg-red-400 rounded-full"></div>
                                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-red-400 rounded-full"></div>
                                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-red-400 rounded-full"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Animated decorative elements */}
                <div className="absolute left-0 right-0 -bottom-20 h-40 overflow-hidden hidden md:block">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bottom-0 h-1 bg-red-600 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                width: `${Math.random() * 200 + 100}px`,
                                opacity: Math.random() * 0.2 + 0.1,
                            }}
                            animate={{
                                y: [0, -100, -200],
                                opacity: [0.3, 0.1, 0]
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                                ease: "linear"
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default FeaturesSection;