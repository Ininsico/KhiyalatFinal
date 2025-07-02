import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Email is invalid";
        if (!formData.password) newErrors.password = "Password is required";
        else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords don't match";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);
        setApiError("");

        try {
            const response = await axios.post("http://localhost:5000/api/auth/signup", {
                name: formData.name,
                email: formData.email,
                password: formData.password
            });

            console.log("Signup successful:", response.data);
            // You might want to automatically log the user in here
            navigate("/login", { state: { signupSuccess: true } });

        } catch (err) {
            console.error("Signup error:", err);
            setApiError(err.response?.data?.message || "Signup failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-rose-200">
            <div className="container mx-auto px-4 py-16">
                {/* --- Hero Section --- */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full py-12 px-4 relative overflow-hidden"
                >
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-rose-300 filter blur-3xl"></div>
                        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-pink-400 filter blur-3xl"></div>
                    </div>

                    <div className="max-w-md mx-auto text-center relative z-10 mb-12">
                        <motion.h1
                            initial={{ y: -20 }}
                            animate={{ y: 0 }}
                            className="text-4xl md:text-5xl font-bold mb-6"
                        >
                            <span className="bg-gradient-to-r from-rose-300 to-pink-400 bg-clip-text text-transparent">
                                Create Account
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg opacity-90 leading-relaxed"
                        >
                            Join us to start your journey with our platform.
                        </motion.p>
                    </div>

                    {/* --- Signup Form --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-md mx-auto bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-rose-200/20 p-8"
                    >
                        {apiError && (
                            <div className="mb-4 p-3 bg-rose-900/50 text-rose-100 rounded-lg text-sm">
                                {apiError}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-gray-800/50 border ${errors.name ? 'border-rose-400' : 'border-rose-200/30'} rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent text-white placeholder-rose-200/50`}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-rose-400">{errors.name}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-gray-800/50 border ${errors.email ? 'border-rose-400' : 'border-rose-200/30'} rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent text-white placeholder-rose-200/50`}
                                        placeholder="you@example.com"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-rose-400">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-gray-800/50 border ${errors.password ? 'border-rose-400' : 'border-rose-200/30'} rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent text-white placeholder-rose-200/50`}
                                        placeholder="••••••••"
                                    />
                                    {errors.password && (
                                        <p className="mt-1 text-sm text-rose-400">{errors.password}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-gray-800/50 border ${errors.confirmPassword ? 'border-rose-400' : 'border-rose-200/30'} rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent text-white placeholder-rose-200/50`}
                                        placeholder="••••••••"
                                    />
                                    {errors.confirmPassword && (
                                        <p className="mt-1 text-sm text-rose-400">{errors.confirmPassword}</p>
                                    )}
                                </div>
                            </div>

                            <div className="pt-2">
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isLoading}
                                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-black bg-gradient-to-r from-rose-300 to-pink-400 hover:from-rose-400 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-300 ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
                                >
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Creating account...
                                        </>
                                    ) : (
                                        'Sign up'
                                    )}
                                </motion.button>
                            </div>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-rose-200/20"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-gray-900 text-rose-200">
                                        Or sign up with
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <motion.button
                                    type="button"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full inline-flex justify-center py-2 px-4 border border-rose-200/20 rounded-lg shadow-sm bg-gray-800/50 text-sm font-medium text-rose-200 hover:bg-gray-800/70"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                                    </svg>
                                </motion.button>

                                <motion.button
                                    type="button"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full inline-flex justify-center py-2 px-4 border border-rose-200/20 rounded-lg shadow-sm bg-gray-800/50 text-sm font-medium text-rose-200 hover:bg-gray-800/70"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>

                        <div className="mt-8 text-center text-sm">
                            <p className="text-rose-200">
                                Already have an account?{' '}
                                <Link to="/login" className="font-medium text-rose-300 hover:text-rose-200">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </motion.div>
                </motion.section>
            </div>
        </div>
    );
};

export default Signup;