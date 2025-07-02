import { Link, useNavigate } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-rose-200">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand column */}
                    <div className="md:col-span-1">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-rose-600 flex items-center justify-center">
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
                        </div>
                        <p className="text-rose-300 mb-6">
                            Your compassionate AI companion for mental wellbeing.
                            Available whenever you need support.
                        </p>
                        <div className="flex space-x-4">
                            {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-rose-600 transition-colors duration-300 flex items-center justify-center"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={`M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z`} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links column */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Company</h3>
                        <ul className="space-y-2">
                            {['About', 'Careers', 'Blog', 'Press'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-rose-300 hover:text-rose-400 transition-colors duration-300"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal column */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/privacy" className="text-rose-300 hover:text-rose-400 transition-colors duration-300">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-rose-300 hover:text-rose-400 transition-colors duration-300">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link to="/cookies" className="text-rose-300 hover:text-rose-400 transition-colors duration-300">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact column */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-rose-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:hello@khiyalat.com" className="text-rose-300 hover:text-rose-400 transition-colors duration-300">
                                    hello@khiyalat.com
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-rose-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:+1234567890" className="text-rose-300 hover:text-rose-400 transition-colors duration-300">
                                    +92 (331) 5821144
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-rose-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-rose-300">
                                    comsat abbobtabad
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom copyright */}
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-rose-400/70 mb-4 md:mb-0">
                        © {new Date().getFullYear()} Khiyalat. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-rose-400/70 hover:text-rose-400 transition-colors duration-300 text-sm">
                            Accessibility
                        </a>
                        <a href="#" className="text-rose-400/70 hover:text-rose-400 transition-colors duration-300 text-sm">
                            Working of Khiylat
                        </a>
                        <a href="#" className="text-rose-400/70 hover:text-rose-400 transition-colors duration-300 text-sm">
                            Pricing
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;