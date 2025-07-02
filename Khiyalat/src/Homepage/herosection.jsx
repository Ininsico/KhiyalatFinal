import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="relative bg-black overflow-hidden h-screen min-h-[800px] max-h-[1200px]" style={{
            backgroundImage: `
                radial-gradient(at 20% 30%, hsla(0,100%,20%,0.6) 0px, transparent 50%),
                radial-gradient(at 80% 10%, hsla(0,100%,30%,0.4) 0px, transparent 50%),
                radial-gradient(at 10% 80%, hsla(0,100%,15%,0.3) 0px, transparent 50%)
            `,
            backgroundSize: '200% 200%',
            animation: 'gradientPulse 15s ease infinite alternate'
        }}>
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-red-600 rounded-full"
                        style={{
                            width: `${Math.random() * 8 + 2}px`,
                            height: `${Math.random() * 8 + 2}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.2 + 0.05
                        }}
                        animate={{
                            y: [0, -100, -200, -300],
                            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
                            opacity: [0.1, 0.3, 0.2, 0]
                        }}
                        transition={{
                            duration: Math.random() * 20 + 20,
                            repeat: Infinity,
                            delay: Math.random() * 10,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            {/* Hero Content */}
            <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 w-full">
                    {/* Text Content */}
                    <motion.div
                        className="lg:w-1/2 space-y-10 text-center lg:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="overflow-hidden">
                            <motion.h1
                                className="text-5xl md:text-7xl font-bold text-white leading-tight"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Your <span className="text-red-400">AI Companion</span>
                            </motion.h1>
                        </div>

                        <div className="overflow-hidden">
                            <motion.p
                                className="text-xl md:text-2xl text-red-300/90 max-w-2xl mx-auto lg:mx-0"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                Khiyalat helps you understand and navigate your thoughts with compassionate AI that's available whenever you need support.
                            </motion.p>
                        </div>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <Link
                                to="/try-now"
                                className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-5 px-10 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 group"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                                    <motion.svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            rotate: [0, 10, -10, 0]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                    </motion.svg>
                                    Start Talking
                                </span>
                                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
                                <span className="absolute inset-0 border-2 border-white/20 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                            </Link>

                            <Link
                                to="/features"
                                className="relative border-2 border-red-600 text-white hover:bg-red-600/20 font-medium py-5 px-10 rounded-full transition-all duration-500 hover:shadow-xl group"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                                    Learn More
                                </span>
                                <span className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* AI Bot Illustration */}
                    <motion.div
                        className="lg:w-1/2 relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    >
                        <div className="relative w-full max-w-lg mx-auto">
                            {/* Glow effect */}
                            <div className="absolute -inset-4 bg-red-600 rounded-full opacity-0 group-hover:opacity-20 blur-xl animate-pulse"></div>

                            {/* Main bot container */}
                            <motion.div
                                className="relative z-10 w-80 h-80 bg-gradient-to-br from-gray-900 to-black rounded-full shadow-2xl border-2 border-red-600/30 overflow-hidden mx-auto"
                                animate={{
                                    y: [0, -15, 0],
                                    rotate: [0, 2, -2, 0]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                {/* Bot face */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4">
                                    {/* Eyes */}
                                    <motion.div
                                        className="absolute top-1/3 left-1/4 w-6 h-6 bg-red-400 rounded-full"
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            y: [0, -5, 0]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    ></motion.div>
                                    <motion.div
                                        className="absolute top-1/3 right-1/4 w-6 h-6 bg-red-400 rounded-full"
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            y: [0, -5, 0]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 0.5
                                        }}
                                    ></motion.div>

                                    {/* Mouth */}
                                    <motion.div
                                        className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-red-400 rounded-full"
                                        animate={{
                                            width: ["64px", "80px", "64px"],
                                            height: ["12px", "6px", "12px"]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    ></motion.div>
                                </div>

                                {/* Pulsing rings */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        className="absolute w-1/2 h-1/2 border-2 border-red-600/30 rounded-full"
                                        animate={{
                                            scale: [0.8, 1.4],
                                            opacity: [0.5, 0]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                    ></motion.div>
                                    <motion.div
                                        className="absolute w-3/5 h-3/5 border-2 border-red-600/20 rounded-full"
                                        animate={{
                                            scale: [0.8, 1.6],
                                            opacity: [0.3, 0]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: 0.5
                                        }}
                                    ></motion.div>
                                    <motion.div
                                        className="absolute w-4/5 h-4/5 border-2 border-red-600/10 rounded-full"
                                        animate={{
                                            scale: [0.8, 1.8],
                                            opacity: [0.1, 0]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: 1
                                        }}
                                    ></motion.div>
                                </div>

                                {/* Floating particles */}
                                <div className="absolute inset-0 overflow-hidden">
                                    {[...Array(20)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute bg-red-400 rounded-full"
                                            style={{
                                                width: `${Math.random() * 8 + 2}px`,
                                                height: `${Math.random() * 8 + 2}px`,
                                                top: `${Math.random() * 100}%`,
                                                left: `${Math.random() * 100}%`,
                                                opacity: Math.random() * 0.4 + 0.1
                                            }}
                                            animate={{
                                                y: [0, -100, -200, -300],
                                                x: [0, Math.random() * 40 - 20, Math.random() * 40 - 20, 0],
                                                opacity: [0, 0.4, 0.3, 0]
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
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{
                    y: [0, 10, 0]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <div className="w-8 h-12 border-2 border-red-400 rounded-full flex justify-center">
                    <motion.div
                        className="w-1 h-2 bg-red-400 rounded-full mt-2"
                        animate={{
                            y: [0, 6, 0],
                            opacity: [1, 0.5, 1]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>
            </motion.div>

            {/* Inline styles for animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes gradientPulse {
                        0% { background-position: 0% 0%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 100%; }
                    }
                `
            }} />
        </section>
    );
};
export default HeroSection;