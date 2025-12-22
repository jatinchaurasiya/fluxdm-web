import { DeepDiveFeatures } from "@/components/DeepDiveFeatures";
import TransformationSection from "@/components/TransformationSection";
import Testimonials from "@/components/Testimonials";
import { PricingSection } from "@/components/PricingSection";
import Footer from "@/components/Legal";
import { FadeIn } from "@/components/ui/fade-in";
import Navbar from "@/components/Navbar";
import { FluxLandingHero } from "@/components/ui/flux-landing-hero";
import { HeroVideo } from "@/components/HeroVideo";
import { AuroraBackground } from "@/components/ui/aurora-background";
import ContentSchedulingSection from "@/components/ContentSchedulingSection";

const Home = () => {

    return (
        <AuroraBackground className="min-h-screen selection:bg-blue-500/30">
            <Navbar />
            <FluxLandingHero />
            <HeroVideo />

            <div className="space-y-0 pb-0">
                <section id="roi">
                    <FadeIn delay={0.2}>
                        <TransformationSection />
                    </FadeIn>
                </section>

                <section id="capabilities">
                    <FadeIn delay={0.3}>
                        <DeepDiveFeatures />
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
