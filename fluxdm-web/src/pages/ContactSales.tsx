import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Legal";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";

const ContactSales = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        users: '<10',
        details: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Console log data as requested
        console.log("Contact Sales Form Data:", formData);
        window.minilytics?.('identify', {
            user_id: formData.email,
            email: formData.email,
            name: formData.name,
        });
        window.minilytics?.('goal', 'signup_completed');
        setIsSubmitted(true);
    };

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
                    {!isSubmitted ? (
                        <>
                            <div className="mb-8 border-b border-white/10 pb-6 text-center md:text-left">
                                <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-zinc-400 mb-4 tracking-tight">
                                    Contact Sales
                                </h1>
                                <p className="text-zinc-400 text-lg">
                                    Interested in an Enterprise or White Label license? <br className="hidden md:block" />
                                    Tell us about your needs and we'll get back to you shortly.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-zinc-300">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-zinc-300">Work Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-medium text-zinc-300">Company Name</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            required
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600"
                                            placeholder="Acme Inc."
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="users" className="text-sm font-medium text-zinc-300">Expected Users</label>
                                        <select
                                            id="users"
                                            name="users"
                                            value={formData.users}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all cursor-pointer [&>option]:bg-zinc-900"
                                        >
                                            <option value="<10">&lt; 10 Users</option>
                                            <option value="10-50">10-50 Users</option>
                                            <option value="50+">50+ Users</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="details" className="text-sm font-medium text-zinc-300">Additional Details</label>
                                    <textarea
                                        id="details"
                                        name="details"
                                        rows={4}
                                        value={formData.details}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600 resize-none"
                                        placeholder="Tell us about your agency needs, white label requirements, or any specific questions..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 mt-4"
                                >
                                    Submit Inquiry <Send size={18} />
                                </button>
                            </form>
                        </>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center text-center py-12"
                        >
                            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                                <Check className="w-10 h-10 text-green-500" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">Request Received!</h2>
                            <p className="text-zinc-400 max-w-md mx-auto mb-8 text-lg">
                                Thank you for your interest in FluxDM Enterprise. Our sales team has received your details and will contact you at <strong>{formData.email}</strong> within 24 hours.
                            </p>
                            <button
                                onClick={() => window.location.href = '/'}
                                className="bg-white/5 border border-white/10 text-white font-medium px-8 py-3 rounded-xl hover:bg-white/10 transition-colors"
                            >
                                Return Home
                            </button>
                        </motion.div>
                    )}
                </motion.div>
            </div>

            <Footer />
        </AuroraBackground>
    );
};

export default ContactSales;
