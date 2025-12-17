import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Legal";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

const TermsOfService = () => {
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
                    className="mx-auto max-w-4xl bg-neutral-950/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl"
                >
                    {/* Header */}
                    <div className="mb-10 border-b border-white/10 pb-6">
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-zinc-400 mb-4 tracking-tight">
                            Terms of Service
                        </h1>
                        <p className="text-zinc-400">Last Updated: {new Date().toLocaleDateString()}</p>
                    </div>

                    <div className="space-y-8 text-zinc-300 font-light leading-relaxed">

                        {/* 1. Acceptance */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing or using the website <strong>Fluxdm.space</strong> and the Fluxdm software application (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
                            </p>
                        </section>

                        {/* 2. License */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">2. License & Access</h2>
                            <p className="mb-4">
                                Subject to your compliance with these Terms, Fluxdm grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your personal or internal business purposes.
                            </p>
                            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                <p className="font-semibold text-white mb-2">Restrictions:</p>
                                <ul className="list-disc pl-6 space-y-1 marker:text-red-400">
                                    <li>You may not reverse engineer, decompile, or disassemble the software.</li>
                                    <li>You may not use the Service to build a competing product.</li>
                                    <li>You may not share your account credentials with third parties.</li>
                                </ul>
                            </div>
                        </section>

                        {/* 3. Meta Disclaimer */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">3. Meta/Instagram Disclaimer & Compliance</h2>
                            <div className="bg-yellow-500/10 p-4 rounded border-l-4 border-yellow-500 mb-4">
                                <p className="font-bold text-yellow-200 mb-1">Important Disclaimer:</p>
                                <p className="text-yellow-100/80">
                                    Fluxdm is an independent third-party application and is <strong>NOT</strong> affiliated, endorsed, sponsored, or certified by Meta Platforms, Inc., Instagram, or Facebook.
                                </p>
                            </div>
                            <p className="mb-2">
                                <strong>User Responsibility:</strong> You acknowledge that your use of Instagram and Facebook integration is subject to Meta's Terms of Service and Community Guidelines.
                            </p>
                            <p>
                                <strong>Account Safety:</strong> While Fluxdm is designed to respect platform limits, <strong>we are not responsible for any actions taken by Meta against your account</strong> (including shadowbanning, restriction, or suspension) resulting from your use of automation, aggressive marketing, or violation of their policies. You use this automation tool at your own risk.
                            </p>
                        </section>

                        {/* 4. Payments */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">4. Payments & Billing</h2>
                            <p className="mb-4">
                                All financial transactions are processed by our specialized Merchant of Record (MoR).
                            </p>
                            <div className="bg-white/5 p-4 rounded-lg border border-white/10 mb-4">
                                <p className="font-semibold text-white">Merchant of Record: Dodo Payments</p>
                                <p className="text-sm text-zinc-400 mt-1">
                                    Dodo Payments handles all payments, receipts, and tax compliance for Fluxdm. By purchasing a subscription, you are entering into a transaction with Dodo Payments, subject to their Terms and Conditions.
                                </p>
                            </div>
                            <p>
                                <strong>Refunds:</strong> Refund eligibility is determined by the specific policy presented at the time of checkout. Unless explicitly stated otherwise, subscriptions are non-refundable.
                            </p>
                        </section>

                        {/* 5. Prohibited Activities */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">5. Prohibited Activities</h2>
                            <p className="mb-2">You agree not to use the Service to:</p>
                            <ul className="list-disc pl-6 space-y-1 mb-4 marker:text-red-500">
                                <li>Send unsolicited spam or harass users on Instagram/Facebook.</li>
                                <li>Violate any applicable national or international law.</li>
                                <li>Infringe upon the intellectual property rights of others.</li>
                                <li>Transmit viruses or malicious code.</li>
                            </ul>
                            <p className="text-red-400 font-medium border border-red-500/20 bg-red-500/5 p-3 rounded">
                                We reserve the right to terminate your account immediately, without refund, if you are found violating these prohibitions.
                            </p>
                        </section>

                        {/* 6. Liability */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
                            <p className="mb-4">
                                To the maximum extent permitted by law, Fluxdm shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, or goodwill, resulting from:
                            </p>
                            <ul className="list-disc pl-6 space-y-1 mb-4 marker:text-blue-500">
                                <li>Your access to or use of or inability to access or use the Service;</li>
                                <li>Any conduct or content of any third party on the Service;</li>
                                <li>Any content obtained from the Service; and</li>
                                <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
                            </ul>
                            <p className="uppercase text-sm tracking-wide font-bold text-zinc-500">
                                The Service is provided on an "AS IS" and "AS AVAILABLE" basis.
                            </p>
                        </section>

                        {/* 7. Changes */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">7. Changes to Terms</h2>
                            <p>
                                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                            </p>
                        </section>

                        {/* 8. Contact */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">8. Contact Us</h2>
                            <p>
                                If you have any questions about these Terms, please contact us at: <br />
                                <a href="mailto:legal@fluxdm.space" className="text-blue-400 font-bold hover:text-blue-300 hover:underline">legal@fluxdm.space</a>
                            </p>
                        </section>

                    </div>
                </motion.div>
            </div>

            <Footer />
        </AuroraBackground>
    );
};

export default TermsOfService;
