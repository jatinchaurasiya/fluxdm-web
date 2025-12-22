import Navbar from "@/components/Navbar";
import Footer from "@/components/Legal";
import { PricingSection } from "@/components/PricingSection";
import { Pricing as PricingComparison } from "@/components/ui/pricing-section-with-comparison";
import { AuroraBackground } from "@/components/ui/aurora-background";

import { SEO } from "@/lib/seo";

const Pricing = () => {
    return (
        <AuroraBackground className="min-h-screen selection:bg-blue-500/30">
            <SEO
                title="FluxDM Pricing - Start for Free"
                description="Flexible plans for Solo Creators and Agencies. Start automating your Instagram engagement from just $6.99/mo."
                canonical="https://fluxdm.space/pricing"
            />
            <Navbar />
            <PricingSection />
            <PricingComparison />
            <Footer />
        </AuroraBackground>
    );
};

export default Pricing;
