import { motion } from 'framer-motion';
import Header from "../Homepage/header";
import Footer from "../Homepage/footer";
const PrivacyPolicy = () => {
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
                        Privacy <span className="text-red-500">Policy</span>
                    </h2>

                    <div className="space-y-6 text-red-200">
                        <p>
                            At Khiyalat, we take your privacy seriously. This policy outlines how we handle your personal information.
                        </p>

                        <h3 className="text-xl font-semibold text-white">Information Collection</h3>
                        <p>
                            We only collect information necessary to provide our services, including thoughts and emotions you choose to share with our AI companion.
                        </p>

                        <h3 className="text-xl font-semibold text-white">Data Usage</h3>
                        <p>
                            Your data is used solely to provide personalized mental wellbeing support. We never sell your information to third parties.
                        </p>

                        <h3 className="text-xl font-semibold text-white">Security</h3>
                        <p>
                            We implement industry-standard security measures to protect your data. All information is encrypted and stored securely.
                        </p>

                        <h3 className="text-xl font-semibold text-white">Your Rights</h3>
                        <p>
                            You can request access to your data or ask us to delete it at any time by contacting our support team.
                        </p>

                        <h3 className="text-xl font-semibold text-white">Changes</h3>
                        <p>
                            We may update this policy occasionally. Continued use of our services constitutes acceptance of these changes.
                        </p>

                        <p className="pt-6 text-white">
                            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
const Privacy = () => {
    return (
        <div>
            <Header />
            <PrivacyPolicy />
            <Footer />
        </div>
    )
}
export default Privacy;