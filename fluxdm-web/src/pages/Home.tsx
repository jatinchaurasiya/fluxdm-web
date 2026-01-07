import { lazy, Suspense } from 'react';
import Testimonials from "@/components/Testimonials";
import { PricingSection } from "@/components/PricingSection";
import Footer from "@/components/Legal";
import { FadeIn } from "@/components/ui/fade-in";
import Navbar from "@/components/Navbar";
import { FluxLandingHero } from "@/components/ui/flux-landing-hero";
import { HeroVideo } from "@/components/HeroVideo";
import { AuroraBackground } from "@/components/ui/aurora-background";
import ContentSchedulingSection from "@/components/ContentSchedulingSection";

import { SEO } from "@/lib/seo";

import { AutomationJourney } from "@/components/AutomationJourney";

// Lazy load DeepDiveFeatures because it contains heavy assets
const DeepDiveFeatures = lazy(() => import("@/components/DeepDiveFeatures").then(module => ({ default: module.DeepDiveFeatures })));

const Home = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "FluxDM",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Cloud",
        "offers": {
            "@type": "Offer",
            "price": "6.99",
            "priceCurrency": "USD"
        },
        "description": "Turn Instagram Comments into Revenue. On Autopilot. FluxDM automates your DM marketing."
    };

    return (
        <AuroraBackground className="min-h-screen selection:bg-blue-500/30">
            <SEO
                title="FluxDM - Instagram Comment Automation Tool"
                description="Turn Instagram Comments into Revenue on Autopilot. FluxDM helps creators and agencies automate DM replies, grow engagement, and increase sales."
                canonical="/"
                schema={jsonLd}
            />
            <Navbar />
            <FluxLandingHero />
            <HeroVideo />

            <div className="space-y-0 pb-0">
                <section id="process">
                    <FadeIn delay={0.2}>
                        <AutomationJourney />
                    </FadeIn>
                </section>

                <section id="capabilities">
                    <FadeIn delay={0.3}>
                        <Suspense fallback={<div className="h-96 w-full" />}>
                            <DeepDiveFeatures />
                        </Suspense>
                    </FadeIn>
                </section>

                <section id="scheduling">
                    <FadeIn delay={0.35}>
                        <ContentSchedulingSection />
                    </FadeIn>
                </section>

                <section id="creators">
                    <FadeIn delay={0.4}>
                        <Testimonials />
                    </FadeIn>
                </section>

                {/* Pricing Placeholder for Scroll Link - Redirects if configured or just provides anchor opacity */}
                <section id="pricing">
                    <PricingSection />
                </section>
            </div>
            <Footer />
        </AuroraBackground>
    );
};

export default Home;
