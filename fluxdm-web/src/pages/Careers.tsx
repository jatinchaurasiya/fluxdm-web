import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Legal";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { Briefcase } from 'lucide-react';

const Careers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <AuroraBackground className="min-h-screen selection:bg-blue-500/30 flex flex-col">
            <Navbar />

            <div className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl w-full bg-neutral-950/50 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center"
                >
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10">
                        <Briefcase className="w-8 h-8 text-zinc-400" />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Join the Team
                    </h1>
                    <p className="text-lg text-zinc-400 mb-8">
                        We are currently not hiring, but check back soon!
                    </p>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="text-white border-b border-zinc-500 pb-0.5 hover:text-zinc-300 hover:border-zinc-300 transition-colors"
                    >
                        Back to Home
                    </button>
                </motion.div>
            </div>

            <Footer />
        </AuroraBackground>
    );
};

export default Careers;
