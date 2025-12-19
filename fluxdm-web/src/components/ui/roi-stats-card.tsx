import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useTransform, useInView, useMotionValue } from 'framer-motion';
import { TrendingUp, MessageCircle, MousePointer2, User } from 'lucide-react';

export const RoiStatsCard = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    // Main number animation logic
    const baseValue = 1302415;
    const count = useSpring(0, { stiffness: 50, damping: 20, duration: 2.5 });

    // Transform to formatted string with commas
    const displayCount = useTransform(count, (latest) => Math.round(latest).toLocaleString());

    // Live ticking effect
    useEffect(() => {
        if (isInView) {
            // Initial count up
            count.set(baseValue);

            // Start live ticking after initial animation
            const timeout = setTimeout(() => {
                const interval = setInterval(() => {
                    // Random small increment between 1 and 5
                    const increment = Math.floor(Math.random() * 5) + 1;
                    count.set(count.get() + increment);
                }, 3000); // Update every 3 seconds

                return () => clearInterval(interval);
            }, 3000); // Wait for initial spring to likely finish

            return () => clearTimeout(timeout);
        }
    }, [isInView, count]);

    return (
        <div ref={containerRef} className="w-full max-w-md bg-white rounded-3xl border border-border shadow-xl overflow-hidden relative p-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            {/* Header Section */}
            <div className="relative z-10 mb-8 text-center sm:text-left">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 text-blue-600">
                    <TrendingUp size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Unlock More Brand Deals</h3>
                <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                    Brands prioritize engagement. Prove your reach with verified data.
                </p>
            </div>

            {/* Stats Cluster */}
            <div className="relative z-10 py-6 flex flex-col items-center">

                {/* Main Stats with Avatar */}
                <div className="relative flex flex-col items-center mb-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[1.5px]">
                            <div className="w-full h-full rounded-full bg-white p-[1px]">
                                <img
                                    src="https://github.com/shadcn.png"
                                    className="w-full h-full rounded-full object-cover"
                                    alt="Profile"
                                />
                            </div>
                        </div>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Accounts Reached</span>
                    </div>
                    <motion.div className="text-5xl sm:text-6xl font-black text-gray-900 tracking-tight" layout>
                        <motion.span>{displayCount}</motion.span>
                    </motion.div>
                </div>

                {/* Floating Badges Container */}
                <div className="relative w-full h-32">

                    {/* Badge 1: Comments */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="absolute left-0 top-2"
                    >
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg rounded-2xl p-3 sm:p-4 flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                                <MessageCircle size={18} fill="currentColor" className="opacity-20" />
                                <MessageCircle size={18} className="absolute" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 font-medium">Comments</div>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-gray-900">2.5K</span>
                                    <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                                        <TrendingUp size={10} />
                                        23%
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Badge 2: Link Clicks */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="absolute right-0 bottom-2"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg rounded-2xl p-3 sm:p-4 flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                <MousePointer2 size={18} />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 font-medium">Link Clicks</div>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-gray-900">1.1K</span>
                                    <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                                        <TrendingUp size={10} />
                                        70%
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

        </div>
    );
};
