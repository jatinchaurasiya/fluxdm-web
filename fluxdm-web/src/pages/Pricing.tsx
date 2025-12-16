import Navbar from "@/components/Navbar";
import Footer from "@/components/Legal";
import { PricingSection } from "@/components/PricingSection";
import { Pricing as PricingComparison } from "@/components/ui/pricing-section-with-comparison";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Pricing = () => {
    return (
        <AuroraBackground className="min-h-screen selection:bg-blue-500/30">
            <Navbar />
            <PricingSection />
            <PricingComparison />
            <Footer />
        </AuroraBackground>
    );
};

export default Pricing;
