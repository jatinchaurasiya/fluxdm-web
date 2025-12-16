import Navbar from "@/components/Navbar";
import Footer from "@/components/Legal";
import { PricingSection } from "@/components/PricingSection";
import { Pricing as PricingComparison } from "@/components/ui/pricing-section-with-comparison";

const Pricing = () => {
    return (
        <div className="bg-background min-h-screen">
            <Navbar />
            <PricingSection />
            <PricingComparison />
            <Footer />
        </div>
    );
};

export default Pricing;
