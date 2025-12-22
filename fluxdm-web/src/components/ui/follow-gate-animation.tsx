import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Lock, CheckCircle2, ArrowRight, Camera, MoreHorizontal, FileText } from 'lucide-react';

import { useTranslation } from 'react-i18next';

export const FollowGateAnimation = () => {
    const { t } = useTranslation();
    const [step, setStep] = useState(0);
    const [followerCount, setFollowerCount] = useState(9999);
    const [isFollowed, setIsFollowed] = useState(false);

    useEffect(() => {
        const sequence = async () => {
            while (true) {
                // Reset
                setStep(0);
                setFollowerCount(9999);
                setIsFollowed(false);
                await new Promise(r => setTimeout(r, 1000));

                // Step 1: User taps "Get Free Guide"
                setStep(1);
                await new Promise(r => setTimeout(r, 2000));

                // Step 2: Bot replies with Lock
                setStep(2);
                await new Promise(r => setTimeout(r, 2800));

                // Step 3: Cursor moves to Follow and Taps
                setStep(3);
                await new Promise(r => setTimeout(r, 1200));

                // Step 4: Follow happens
                setIsFollowed(true);
                setFollowerCount(10000);
                await new Promise(r => setTimeout(r, 1500));

                // Step 5: Bot replies with Link
                setStep(4);
                await new Promise(r => setTimeout(r, 5000));
            }
        };

        sequence();
    }, []);

    // Animation variants
    const msgVariants: Variants = {
        hidden: { opacity: 0, y: 15, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 400, damping: 25 }
        }
    };

    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            {/* Phone Mockup Container */}
            <div className="relative w-[300px] h-[620px] bg-white rounded-[40px] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)] border-[8px] border-zinc-900 overflow-hidden flex flex-col font-sans ring-1 ring-black/5">

                {/* Dynamic Island / Notch Area */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[24px] bg-black rounded-b-xl z-50"></div>

                {/* Status Bar */}
                <div className="h-11 w-full bg-white flex items-end justify-between px-6 pb-2.5 z-20 select-none">
                    <div className="text-[12px] font-bold text-black tracking-wide">9:41</div>
                    <div className="flex gap-1.5 grayscale opacity-90">
                        <div className="w-4 h-2.5 rounded-[1px] border border-black relative after:content-[''] after:absolute after:top-0.5 after:-right-0.5 after:w-0.5 after:h-1.5 after:bg-black after:rounded-r-sm">
                            <div className="h-full w-[80%] bg-black"></div>
                        </div>
                    </div>
                </div>

                {/* Header */}
                <div className="h-14 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 flex items-center px-4 z-20 shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.02)] relative">
                    <button className="p-1 mr-1" aria-label="Go back">
                        <ArrowRight className="w-6 h-6 text-black rotate-180" strokeWidth={2} />
                    </button>

                    <div className="flex items-center gap-3 flex-1 overflow-hidden">
                        <div className="w-8.5 h-8.5 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px] shadow-sm">
                            <div className="w-full h-full rounded-full bg-white p-[2px]">
                                <img
                                    src="https://github.com/shadcn.png"
                                    className="w-full h-full rounded-full object-cover"
                                    alt="Profile"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col leading-tight">
                            <div className="flex items-center gap-1">
                                <span className="text-[13px] font-bold text-black truncate">fluxdm_official</span>
                                <div className="w-3 h-3 bg-[#3797F0] rounded-full flex items-center justify-center">
                                    <svg viewBox="0 0 10 10" className="w-2 h-2 text-white fill-current">
                                        <path d="M3.5 8L1 5.5L2 4.5L3.5 6L8 1.5L9 2.5L3.5 8Z" />
                                    </svg>
                                </div>
                            </div>
                            <AnimatePresence mode='wait'>
                                <motion.span
                                    key={followerCount}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    className="text-[11px] text-gray-500 font-medium"
                                >
                                    {followerCount.toLocaleString()} {t('followGate.ui.followers')}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Header Follow Button */}
                    <motion.button
                        layout
                        animate={{
                            backgroundColor: isFollowed ? "#F1F1F0" : "#3797F0",
                            color: isFollowed ? "#000000" : "#ffffff",
                        }}
                        className={`px-4 py-1.5 rounded-lg text-[13px] font-semibold transition-all duration-300 ml-2 shadow-sm ${isFollowed ? 'hover:bg-gray-200' : 'hover:bg-blue-600 hover:shadow-md hover:shadow-blue-500/20'}`}
                    >
                        {isFollowed ? t('followGate.ui.following') : t('followGate.ui.follow')}
                    </motion.button>
                </div>

                {/* Chat Area */}
                <div className="flex-1 bg-white overflow-hidden flex flex-col p-4 space-y-5 relative">

                    {/* Timestamp */}
                    <div className="w-full flex justify-center py-2">
                        <span className="text-[10px] text-gray-400 font-medium">{t('followGate.ui.time')}</span>
                    </div>

                    {/* Messages Container */}
                    <div className="flex flex-col gap-3 justify-end min-h-0 pb-2">

                        {/* User Message: "Get Free Guide" */}
                        <AnimatePresence>
                            {step >= 1 && (
                                <motion.div
                                    variants={msgVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="self-end max-w-[80%]"
                                >
                                    <div className="bg-[#3797F0] text-white px-5 py-3 rounded-[20px] rounded-tr-[4px] text-[15px] leading-snug shadow-md shadow-blue-500/10">
                                        {t('followGate.messages.userRequest')}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Bot Reply: Lock Gate Card */}
                        <AnimatePresence>
                            {step >= 2 && (
                                <motion.div
                                    variants={msgVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="self-start max-w-[90%]"
                                >
                                    <div className="bg-white border border-gray-200/80 rounded-[20px] rounded-tl-[4px] p-4 shadow-sm hover:shadow-md transition-shadow duration-300 space-y-3 relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>

                                        {/* Card Header */}
                                        <div className="flex items-center gap-2 pb-2 border-b border-gray-50/50">
                                            <div className="w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center shrink-0 border border-amber-100">
                                                <Lock size={12} className="text-amber-600" />
                                            </div>
                                            <span className="text-[13px] font-bold text-gray-900">{t('followGate.messages.lockTitle')}</span>
                                        </div>

                                        {/* Card Content */}
                                        <div className="space-y-1">
                                            <p className="text-[14px] text-gray-700 leading-normal">
                                                {t('followGate.messages.lockBody')}
                                            </p>
                                            <p className="text-[13px] text-gray-500 leading-normal">
                                                {t('followGate.messages.lockFooterPre')} <span className="font-bold text-blue-500">{t('followGate.ui.follow')}</span> {t('followGate.messages.lockFooterPost')}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Bot Reply: Success Card */}
                        <AnimatePresence>
                            {step >= 4 && (
                                <motion.div
                                    variants={msgVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="self-start max-w-[90%]"
                                >
                                    <div className="bg-white border border-gray-200/80 rounded-[20px] rounded-tl-[4px] p-4 shadow-sm hover:shadow-md transition-shadow duration-300 space-y-3 relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>

                                        {/* Card Header */}
                                        <div className="flex items-center gap-2 pb-2">
                                            <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center shrink-0 border border-green-100">
                                                <CheckCircle2 size={14} className="text-green-600" />
                                            </div>
                                            <span className="text-[13px] font-bold text-gray-900">{t('followGate.messages.unlockTitle')}</span>
                                        </div>

                                        {/* Card Content */}
                                        <p className="text-[14px] text-gray-700 leading-normal">
                                            {t('followGate.messages.unlockBody')}
                                        </p>

                                        {/* Attachment */}
                                        <div className="flex items-center gap-3 bg-gray-50/80 p-3 rounded-xl border border-gray-100 hover:bg-gray-100/80 transition-all cursor-pointer group">
                                            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-gray-200/60 shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                                                <FileText size={20} className="text-red-500" />
                                            </div>
                                            <div className="flex flex-col min-w-0">
                                                <span className="text-[13px] font-bold text-gray-900 truncate">Growth_Hacks.pdf</span>
                                                <span className="text-[11px] text-gray-400">PDF Document • 2.4 MB</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Cursor Finger Animation (Overlay) */}
                    {step === 3 && !isFollowed && (
                        <motion.div
                            initial={{ opacity: 0, x: 100, y: 300 }}
                            animate={{
                                opacity: 1,
                                x: 160,
                                y: -450,
                            }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 pointer-events-none z-50 flex items-end justify-center"
                        >
                            <div className="relative w-full h-full">
                                {/* The Finger/Cursor */}
                                <motion.div
                                    className="absolute w-12 h-12 bg-gray-900/10 rounded-full flex items-center justify-center p-2 backdrop-blur-[2px] border border-white/20 shadow-xl"
                                    animate={{ scale: [1, 0.9, 1] }} // Tap squeeze
                                    transition={{ duration: 0.3, delay: 0.8 }}
                                    style={{
                                        top: '12%', // Target the Follow button in header
                                        right: '15%'
                                    }}
                                >
                                    <div className="w-full h-full bg-white/40 rounded-full border border-white/60" />
                                </motion.div>

                                {/* Tap Ripple */}
                                <motion.div
                                    className="absolute w-10 h-10 rounded-full bg-white/40 z-40"
                                    style={{
                                        top: '12%',
                                        right: '15%'
                                    }}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1.5, opacity: [0.5, 0] }}
                                    transition={{ duration: 0.4, delay: 0.85 }}
                                />
                            </div>
                        </motion.div>
                    )}

                </div>

                {/* Footer Input Area */}
                <div className="h-[75px] bg-white border-t border-gray-100 px-4 flex items-center gap-3 shrink-0 pb-3">
                    <div className="w-10 h-10 rounded-full bg-[#3797F0] flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/20">
                        <Camera size={20} className="text-white" />
                    </div>
                    <div className="flex-1 h-11 bg-gray-100 rounded-full px-5 flex items-center gap-2 border border-transparent focus-within:border-gray-300 focus-within:bg-white transition-all">
                        <span className="text-[14px] text-gray-500 font-normal">{t('followGate.ui.messagePlaceholder')}</span>
                    </div>
                    <div className="flex gap-2 text-gray-800">
                        <MoreHorizontal size={24} strokeWidth={1.5} />
                    </div>
                </div>

            </div>
        </div>
    );
};
