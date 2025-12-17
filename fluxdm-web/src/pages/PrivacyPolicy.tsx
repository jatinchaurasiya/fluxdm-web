import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Legal";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
    // Ensure page starts at top when visited
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
                            Privacy Policy
                        </h1>
                        <p className="text-zinc-400">Last Updated: {new Date().toLocaleDateString()}</p>
                    </div>

                    <div className="space-y-8 text-zinc-300 font-light leading-relaxed">

                        {/* 1. Introduction */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                            <p className="mb-4">
                                Welcome to <strong>Fluxdm</strong> ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>Fluxdm.space</strong> and use our Instagram DM Automation application (the "Service").
                            </p>
                            <p>
                                By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy.
                            </p>
                        </section>

                        {/* 2. Data We Collect */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
                            <p className="mb-4">We gather the minimum amount of data necessary to provide our services efficiently:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-blue-500">
                                <li><strong>Personal Identification:</strong> Name and Email address provided during registration.</li>
                                <li><strong>Authentication Data:</strong> OAuth tokens for Instagram and Facebook APIs to enable automation features. <em>(Note: We do not store your Facebook/Instagram passwords).</em></li>
                                <li><strong>Usage Data & Cookies:</strong> Information on how you interact with our application (e.g., features used, session duration) to improve user experience.</li>
                            </ul>
                            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                                <p className="text-blue-200 font-medium">
                                    We strictly <strong>DO NOT</strong> sell, trade, or rent your personal data to third parties, advertisers, or data brokers.
                                </p>
                            </div>
                        </section>

                        {/* 3. How We Use Data */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">3. How We Use Your Data</h2>
                            <p className="mb-4">We use the collected data for the following specific purposes:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
                                <li>To provide, operate, and maintain our Service (e.g., automating DMs, managing comments).</li>
                                <li>To authenticate your access via Instagram/Facebook APIs.</li>
                                <li>To process transactions via our Merchant of Record.</li>
                                <li>To communicate with you regarding updates, security alerts, and support.</li>
                                <li>To comply with legal obligations and enforce our Terms of Service.</li>
                            </ul>
                        </section>

                        {/* 4. Payment Processing */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">4. Payment Processing</h2>
                            <p className="mb-4">
                                Fluxdm does not store or process your credit card details on our servers. All financial transactions are handled by our Merchant of Record (MoR).
                            </p>
                            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                <p className="font-semibold text-white mb-1">Merchant of Record: Dodo Payments</p>
                                <p className="text-sm text-zinc-400">
                                    Our payments are securely processed by Dodo Payments. They are responsible for all payment processing, tax compliance (GST/VAT), and financial data security. By making a purchase, you agree to Dodo Payments' Privacy Policy and Terms.
                                </p>
                            </div>
                        </section>

                        {/* 5. Meta/Facebook Compliance */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">5. Meta Platform Data & Disclaimer</h2>
                            <p className="mb-4">
                                Our Service integrates with the Meta Platform (Instagram and Facebook). By using our Service, you acknowledge that your data may be processed in accordance with Meta's Data Policy.
                            </p>
                            <div className="mb-4 bg-yellow-500/10 p-4 rounded border-l-4 border-yellow-500">
                                <p className="text-yellow-200">
                                    <strong>Disclaimer:</strong> Fluxdm is an independent application and is <strong>not affiliated, associated, authorized, endorsed by, or in any way officially connected</strong> with Instagram, Facebook, or Meta Platforms, Inc.
                                </p>
                            </div>
                            <p>
                                We comply with the Meta Platform Terms. We do not use data obtained from the Platform API to make decisions about eligibility, including for employment, credit, or housing.
                            </p>
                        </section>

                        {/* 6. Data Retention & Deletion */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">6. Data Retention & Deletion Instructions</h2>
                            <p className="mb-4">
                                We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.
                            </p>
                            <p className="font-semibold text-white mb-2">How to Delete Your Data:</p>
                            <p className="mb-4">
                                You have the right to request the deletion of your data at any time. To request deletion:
                            </p>
                            <ol className="list-decimal pl-6 space-y-2 marker:text-white">
                                <li>Email us at <a href="mailto:privacy@fluxdm.space" className="text-blue-400 hover:text-blue-300">privacy@fluxdm.space</a> with the subject "Data Deletion Request".</li>
                                <li>We will delete your account and all associated data within 30 days.</li>
                                <li>Alternatively, you can remove our app's access via your Facebook Settings ("Business Integrations").</li>
                            </ol>
                        </section>

                        {/* 7. Security */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">7. Data Security</h2>
                            <p>
                                We implement appropriate technical and organizational security measures (encryption, secure servers) designed to protect the security of any personal information we process. However, please remember that no transmission over the internet is 100% secure.
                            </p>
                        </section>

                        {/* 8. Your Rights */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">8. Your Rights (GDPR & International)</h2>
                            <p className="mb-4">Depending on your location, you may have the following rights:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
                                <li><strong>Access:</strong> Request copies of your personal data.</li>
                                <li><strong>Rectification:</strong> Request correction of inaccurate information.</li>
                                <li><strong>Erasure:</strong> Request that we erase your personal data ("Right to be Forgotten").</li>
                                <li><strong>Restriction:</strong> Request that we restrict the processing of your data.</li>
                            </ul>
                            <p className="mt-4">
                                To exercise these rights, please contact us at <a href="mailto:privacy@fluxdm.space" className="text-blue-400 hover:text-blue-300 hover:underline">privacy@fluxdm.space</a>.
                            </p>
                        </section>

                        {/* 9. Contact */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">9. Contact Us</h2>
                            <p>
                                If you have questions or comments about this policy, please contact us by email at:
                                <br />
                                <a href="mailto:privacy@fluxdm.space" className="text-blue-400 font-bold hover:text-blue-300 hover:underline">privacy@fluxdm.space</a>
                            </p>
                        </section>

                    </div>
                </motion.div>
            </div>

            <Footer />
        </AuroraBackground>
    );
};

export default PrivacyPolicy;
