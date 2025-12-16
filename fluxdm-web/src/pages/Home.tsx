import { DeepDiveFeatures } from "@/components/DeepDiveFeatures";
import TransformationSection from "@/components/TransformationSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Legal";
import { FadeIn } from "@/components/ui/fade-in";
import Navbar from "@/components/Navbar";
import { FluxLandingHero } from "@/components/ui/flux-landing-hero";
import { HeroVideo } from "@/components/HeroVideo";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <AuroraBackground className="min-h-screen selection:bg-blue-500/30">
            <Navbar />
            <FluxLandingHero
                badge={t('hero.badge')}
                title1={t('hero.title1')}
                title2={t('hero.title2')}
            />
            <HeroVideo />

            <div className="space-y-12 pb-0">
                <FadeIn delay={0.2}>
                    <TransformationSection />
                </FadeIn>

                <FadeIn delay={0.3}>
                    <DeepDiveFeatures />
                </FadeIn>

                <FadeIn delay={0.4}>
                    <Testimonials />
                </FadeIn>
            </div>
            <Footer />
        </AuroraBackground>
    );
};

export default Home;
