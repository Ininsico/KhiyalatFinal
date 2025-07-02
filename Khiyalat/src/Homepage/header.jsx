import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Header = () => {
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleTryNow = () => {
        navigate('/signup');
    };

    return (
        <header className="sticky top-0 z-50 bg-black shadow-md">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo/Brand */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 rounded-lg bg-rose-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                        <span className="text-2xl font-bold text-white">
                            Khiyalat
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link
                            to="/features"
                            className="text-white hover:text-rose-400 transition-colors duration-200 font-medium"
                        >
                            Features
                        </Link>
                        <Link
                            to="/about"
                            className="text-white hover:text-rose-400 transition-colors duration-200 font-medium"
                        >
                            About
                        </Link>
                        <Link
                            to="/pricing"
                            className="text-white hover:text-rose-400 transition-colors duration-200 font-medium"
                        >
                            Pricing
                        </Link>
                        <Link
                            to="/developers"
                            className="text-white hover:text-rose-400 transition-colors duration-200 font-medium"
                        >
                            Developers
                        </Link>
                    </nav>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            to="/login"
                            className="text-white hover:text-rose-400 font-medium px-4 py-2 rounded-lg transition-colors duration-200"
                        >
                            Login
                        </Link>
                        <Link to="/dashboard">
                            <button className="bg-rose-600 hover:bg-rose-700 text-white font-medium px-6 py-2 rounded-lg shadow hover:shadow-md transition-all duration-300">
                                Try Now
                            </button>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-white focus:outline-none p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-black shadow-lg">
                    <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
                        <Link
                            to="/features"
                            className="text-white hover:text-rose-400 py-2 px-4 rounded-lg transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            to="/about"
                            className="text-white hover:text-rose-400 py-2 px-4 rounded-lg transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            to="/pricing"
                            className="text-white hover:text-rose-400 py-2 px-4 rounded-lg transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Pricing
                        </Link>
                        <Link
                            to="/developers"
                            className="text-white hover:text-rose-400 py-2 px-4 rounded-lg transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Developers
                        </Link>
                        <div className="pt-2 border-t border-white/20 space-y-2">
                            <Link
                                to="/login"
                                className="block text-center text-white hover:text-rose-400 py-2 px-4 rounded-lg transition-colors duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Login
                            </Link>
                            <button
                                onClick={() => {
                                    handleTryNow();
                                    setMobileMenuOpen(false);
                                }}
                                className="w-full bg-rose-600 hover:bg-rose-700 text-white font-medium py-2 px-4 rounded-lg shadow hover:shadow-md transition-all duration-300"
                            >
                                Try Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};
export default Header;