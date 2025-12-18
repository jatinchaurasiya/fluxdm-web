import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Legal";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

const Mission = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <AuroraBackground className="min-h-screen selection:bg-blue-500/30 flex flex-col">
            <Navbar />

            <div className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-zinc-400 mb-8 tracking-tight">
                        Our Mission
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed mb-10">
                        At FluxDM, our mission is to empower creators and businesses with intelligent, desktop-first automation. We believe in reclaiming your time without compromising on authenticity or data privacy.
                    </p>
                    <p className="text-zinc-500">
                        Built for the community, by the community.
                    </p>
                </motion.div>
            </div>

            <Footer />
        </AuroraBackground>
    );
};

export default Mission;
