import { motion } from 'framer-motion';
import Header from "../Homepage/header";
import Footer from "../Homepage/footer";
const TermsPage = () => {
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
                        Terms of <span className="text-red-500">Service</span>
                    </h2>

                    <div className="space-y-6 text-red-200">
                        <p className="text-center mb-8">
                            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>

                        <h3 className="text-xl font-semibold text-white">1. Acceptance of Terms</h3>
                        <p>
                            By accessing or using Khiyalat ("the Service"), you agree to be bound by these Terms of Service. If you disagree with any part, you may not use the Service.
                        </p>

                        <h3 className="text-xl font-semibold text-white">2. Description of Service</h3>
                        <p>
                            Khiyalat provides AI-powered mental wellbeing support, including thought analysis, emotional support tools, and progress tracking. We do not provide medical advice or emergency services.
                        </p>

                        <h3 className="text-xl font-semibold text-white">3. User Responsibilities</h3>
                        <p>
                            You agree to use the Service responsibly and not for any unlawful purpose. You are responsible for maintaining the confidentiality of your account information.
                        </p>

                        <h3 className="text-xl font-semibold text-white">4. Intellectual Property</h3>
                        <p>
                            All content and technology associated with the Service are owned by Khiyalat or its licensors. You may not reproduce, modify, or distribute our content without permission.
                        </p>

                        <h3 className="text-xl font-semibold text-white">5. Limitation of Liability</h3>
                        <p>
                            Khiyalat shall not be liable for any indirect, incidental, or consequential damages resulting from use of the Service. The Service is provided "as is" without warranties of any kind.
                        </p>

                        <h3 className="text-xl font-semibold text-white">6. Termination</h3>
                        <p>
                            We may terminate or suspend access to the Service immediately, without prior notice, for any breach of these Terms. All provisions which should survive termination will do so.
                        </p>

                        <h3 className="text-xl font-semibold text-white">7. Changes to Terms</h3>
                        <p>
                            We reserve the right to modify these Terms at any time. Your continued use after changes constitutes acceptance of the new Terms.
                        </p>

                        <h3 className="text-xl font-semibold text-white">8. Governing Law</h3>
                        <p>
                            These Terms shall be governed by the laws of [Your Country/State] without regard to its conflict of law provisions.
                        </p>

                        <div className="pt-8 border-t border-red-500/20">
                            <p className="text-white">
                                For questions about these Terms, please contact us at <span className="text-red-400">legal@khiyalat.com</span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const Terms = () => {
    return (
        <div>
            <Header />
            <TermsPage />
            <Footer />
        </div>
    )
}
export default Terms;