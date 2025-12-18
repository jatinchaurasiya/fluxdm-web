import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Legal";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { Lock } from 'lucide-react';

const DataDeletion = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <AuroraBackground className="min-h-screen selection:bg-blue-500/30 flex flex-col">
            <Navbar />

            <div className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-3xl bg-neutral-950/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl"
                >
                    <div className="mb-8 border-b border-white/10 pb-6 flex items-center gap-4">
                        <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                            <Lock className="w-6 h-6 text-red-400" />
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-white">
                                Data Deletion Request
                            </h1>
                            <p className="text-zinc-500 text-sm mt-1">GDPR & Meta Compliance</p>
                        </div>
                    </div>

                    <div className="space-y-6 text-zinc-300 font-light leading-relaxed">
                        <p>
                            We value your privacy and data ownership. If you wish to remove your data from FluxDM, please follow the instructions below.
                        </p>

                        <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                            <h3 className="text-white font-semibold mb-2">Instructions:</h3>
                            <p className="mb-4">
                                Please email <a href="mailto:privacy@fluxdm.space" className="text-blue-400 hover:underline">privacy@fluxdm.space</a> with the subject line <strong>"Data Deletion"</strong>.
                            </p>
                            <p className="text-sm text-zinc-400">
                                In your email, please include the email address associated with your account so we can verify and process your request.
                            </p>
                        </div>

                        <p className="text-sm bg-neutral-900 p-4 rounded text-zinc-400 border border-neutral-800">
                            <strong>Note:</strong> We will process your request within 30 days. You will receive a confirmation email once your data has been permanently removed from our systems.
                        </p>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <p className="mb-2 font-semibold text-white">Alternative: Remove Access via Facebook</p>
                            <p className="text-sm mb-4">You can also revoke our app's permissions directly through your Facebook settings:</p>
                            <ol className="list-decimal pl-5 space-y-2 text-sm">
                                <li>Go to your Facebook Settings & Privacy.</li>
                                <li>Select "Settings" {'>'} "Business Integrations".</li>
                                <li>Find "FluxDM" and click "Remove".</li>
                            </ol>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </AuroraBackground>
    );
};

export default DataDeletion;
