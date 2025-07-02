import Header from './header';
import Footer from './footer';
import CTASection from './cta';
import PricingSection from './pricingsection';
import DemoSection from './demosection';
import TestimonialsSection from './Testimonials';
import FeaturesSection from './features';
import HeroSection from './herosection';


const Landingpage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <FeaturesSection />
            <DemoSection />
            <TestimonialsSection />
            <CTASection />
            <PricingSection />
            <Footer />
        </div>
    )
}
export default Landingpage