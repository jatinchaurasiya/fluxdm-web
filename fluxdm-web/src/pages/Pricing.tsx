import Navbar from "@/components/Navbar";
import Footer from "@/components/Legal";
import { PricingSection } from "@/components/PricingSection";
import { Pricing as PricingComparison } from "@/components/ui/pricing-section-with-comparison";
import { HeroBackground } from "@/components/ui/hero-background";

const Pricing = () => {
    return (
        <div className="bg-background min-h-screen relative overflow-hidden">
            <HeroBackground />
            <div className="relative z-10">
                <Navbar />
                <PricingSection />
                <PricingComparison />
                <Footer />
            </div>
        </div>
    );
};

export default Pricing;
