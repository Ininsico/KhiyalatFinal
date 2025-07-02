import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const testimonials = [
        {
            name: "Syed Hanzala",
            role: "Backend Engineer",
            avatar: "",
            content: "Khiyalat has been a game-changer for my mental health. As someone who struggles with anxiety, having an AI that actually understands my thought patterns has been incredible. It's like having a therapist available 24/7.",
            rating: 5
        },
        {
            name: "Mahnoor Sardar",
            role: "Machine Learning Expert",
            avatar: "",
            content: "I was skeptical at first, but after using Khiyalat for just two weeks, I noticed a significant improvement in my mood and self-awareness. The cognitive reframing exercises are particularly helpful when I'm feeling stuck.",
            rating: 4
        },
        {
            name: "Abdurrehman",
            role: "University Student",
            avatar: "",
            content: "The emotional support from Khiyalat feels surprisingly human. It's helped me through some tough times when I didn't have anyone to talk to. The progress tracking feature shows me how far I've come.",
            rating: 5
        }
    ];

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection) => {
        setActiveIndex((prev) => {
            const newIndex = prev + newDirection;
            if (newIndex < 0) return testimonials.length - 1;
            if (newIndex >= testimonials.length) return 0;
            return newIndex;
        });
    };

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            paginate(1);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative py-28 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
            {/* Floating particles background */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-rose-500 rounded-full"
                        style={{
                            width: `${Math.random() * 8 + 2}px`,
                            height: `${Math.random() * 8 + 2}px`,
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

            <div className="container mx-auto px-4 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-rose-100 mb-6">
                        Trusted by <span className="text-rose-400">Thousands</span>
                    </h2>
                    <p className="text-xl text-rose-100/80 max-w-2xl mx-auto">
                        Hear from people who've transformed their mental wellbeing with Khiyalat
                    </p>
                </motion.div>

                {/* Testimonials carousel */}
                <div className="relative max-w-4xl mx-auto h-[400px] md:h-[350px]">
                    {/* Main testimonial */}
                    <motion.div
                        key={activeIndex}
                        custom={1}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.4 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, info) => {
                            const swipe = swipePower(info.offset.x, info.velocity.x);
                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        className="absolute inset-0 bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-2xl border border-rose-500/30 overflow-hidden"
                    >
                        <div className="h-full flex flex-col md:flex-row">
                            {/* Avatar image */}
                            <div className="md:w-1/3 p-8 flex items-center justify-center relative">
                                <motion.div
                                    className="relative"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-rose-700 rounded-full blur-md opacity-60"></div>
                                    <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-rose-500">
                                        <img
                                            src={testimonials[activeIndex].avatar}
                                            alt={testimonials[activeIndex].name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </motion.div>

                                {/* Decorative elements */}
                                <motion.div
                                    className="absolute -bottom-10 -left-10 w-20 h-20 bg-rose-500/10 rounded-full blur-xl"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.1, 0.3, 0.1]
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </div>

                            {/* Testimonial content */}
                            <div className="md:w-2/3 p-8 md:p-10 flex flex-col justify-center">
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    {/* Rating stars */}
                                    <div className="flex mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-6 h-6 ${i < testimonials[activeIndex].rating ? 'text-yellow-400' : 'text-gray-500'}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Testimonial text */}
                                    <p className="text-lg md:text-xl text-rose-50 mb-6 italic relative">
                                        <span className="absolute -top-6 -left-6 text-6xl text-rose-500/30 font-serif">"</span>
                                        {testimonials[activeIndex].content}
                                        <span className="absolute -bottom-6 -right-6 text-6xl text-rose-500/30 font-serif">"</span>
                                    </p>

                                    {/* Author info */}
                                    <div>
                                        <h4 className="text-2xl font-bold text-rose-100">
                                            {testimonials[activeIndex].name}
                                        </h4>
                                        <p className="text-rose-100/70">
                                            {testimonials[activeIndex].role}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Navigation arrows */}
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shadow-lg border border-rose-500/30 hover:bg-rose-500/30 transition-colors duration-300"
                    >
                        <svg className="w-6 h-6 text-rose-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shadow-lg border border-rose-500/30 hover:bg-rose-500/30 transition-colors duration-300"
                    >
                        <svg className="w-6 h-6 text-rose-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Pagination dots */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-rose-500 w-6' : 'bg-rose-100/30'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Floating decorative elements */}
                <motion.div
                    className="absolute -bottom-20 left-0 right-0 h-40 overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bottom-0 h-1 bg-rose-500 rounded-full"
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
                </motion.div>
            </div>
        </section>
    );
};
export default TestimonialsSection;