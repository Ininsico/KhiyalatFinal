import { motion } from 'framer-motion';
import Header from "../Homepage/header";
import Footer from "../Homepage/footer";
const CookiePolicy = () => {
    return (
        <section className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4 h-full flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20"
                >
                    <h2 className="text-4xl font-bold text-white mb-8 text-center">
                        Cookie <span className="text-red-500">Policy</span>
                    </h2>

                    <div className="space-y-6 text-red-200">
                        <p className="text-center mb-8">
                            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>

                        <h3 className="text-xl font-semibold text-white">1. What Are Cookies</h3>
                        <p>
                            Cookies are small text files stored on your device when you visit websites. They help the site remember information about your visit, which can make it easier to visit again and make the site more useful.
                        </p>

                        <h3 className="text-xl font-semibold text-white">2. How We Use Cookies</h3>
                        <p>
                            Khiyalat uses cookies to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Enable essential website functionality</li>
                            <li>Remember your preferences and settings</li>
                            <li>Analyze site usage to improve our services</li>
                            <li>Personalize your experience with relevant content</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white">3. Types of Cookies We Use</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium text-white">Essential Cookies</h4>
                                <p>Necessary for the website to function and cannot be switched off.</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-white">Performance Cookies</h4>
                                <p>Help us understand how visitors interact with our website.</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-white">Functionality Cookies</h4>
                                <p>Remember your preferences to provide enhanced features.</p>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-white">4. Managing Cookies</h3>
                        <p>
                            You can control and/or delete cookies through your browser settings. However, disabling essential cookies may affect website functionality.
                        </p>

                        <h3 className="text-xl font-semibold text-white">5. Third-Party Cookies</h3>
                        <p>
                            We may use services like Google Analytics that set their own cookies to provide analytics and other services. These are subject to the respective privacy policies.
                        </p>

                        <h3 className="text-xl font-semibold text-white">6. Changes to This Policy</h3>
                        <p>
                            We may update this Cookie Policy occasionally. We'll notify you of significant changes by posting the new policy on our site.
                        </p>

                        <div className="pt-8 border-t border-red-500/20">
                            <p className="text-white">
                                For questions about our Cookie Policy, contact us at <span className="text-red-400">privacy@khiyalat.com</span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
const Cookie = () => {
    return (
        <div>
            <Header />
            <CookiePolicy />
            <Footer />
        </div>
    )
}
export default Cookie;