import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Image as ImageIcon, Mic, Menu, ThumbsUp, Check, ArrowRight } from 'lucide-react';

export const FollowGateAnimation = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const sequence = async () => {
            while (true) {
                // Reset
                setStep(0);
                await new Promise(r => setTimeout(r, 2000));

                // Step 1: User sends Keyword "GROWTH"
                setStep(1);
                await new Promise(r => setTimeout(r, 1500));

                // Step 2: Bot "Wait! You're missing out..."
                setStep(2);
                await new Promise(r => setTimeout(r, 2500));

                // Step 3: Show Quick Reply options
                setStep(3);
                await new Promise(r => setTimeout(r, 1500));

                // Step 4: User taps "I'm following" (Simulated)
                setStep(4);
                await new Promise(r => setTimeout(r, 1500));

                // Step 5: Bot "Legend..."
                setStep(5);
                await new Promise(r => setTimeout(r, 8000));
            }
        };

        sequence();
    }, []);

    const msgVariants: any = {
        hidden: { opacity: 0, y: 10, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    return (
        <div className="w-full h-full flex items-center justify-center p-8 bg-transparent">
            {/* Phone Mockup */}
            <div className="relative w-[320px] h-[680px] bg-white rounded-[45px] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] border-[8px] border-black overflow-hidden flex flex-col font-sans mb-10">

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-black rounded-b-[16px] z-50"></div>

                {/* Status Bar */}
                <div className="h-12 w-full bg-white flex items-end justify-between px-6 pb-2 z-20 shrink-0">
                    <div className="text-[12px] font-semibold text-black">11:43</div>
                    <div className="flex gap-1.5 items-center">
                        <div className="w-4 h-2.5 bg-black rounded-[2px]" />
                    </div>
                </div>

                {/* Header */}
                <div className="h-14 w-full bg-white flex items-center justify-between px-3 z-20 shrink-0 border-b border-gray-100/50">
                    <div className="flex items-center gap-1 text-[#0084FF]">
                        <ChevronLeft className="w-7 h-7" />
                        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center overflow-hidden border border-gray-100">
                            <span className="text-white font-bold text-[10px]">FLUX</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1.5">
                            <span className="font-bold text-[15px] text-black">FLUXDM</span>
                            <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center">
                                <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                            </div>
                        </div>
                    </div>

                    <div className="w-8" />
                </div>

                {/* Chat Area */}
                <div className="flex-1 bg-white overflow-hidden flex flex-col relative">
                    <div className="flex-1 overflow-y-auto p-4 space-y-5">

                        {/* User Message "GROWTH" */}
                        <AnimatePresence>
                            {step >= 1 && (
                                <motion.div
                                    variants={msgVariants} initial="hidden" animate="visible"
                                    className="flex justify-end"
                                >
                                    <div className="bg-[#0084FF] text-white px-5 py-2 rounded-[18px] rounded-br-[4px] text-[15px] font-normal shadow-sm">
                                        GROWTH
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Bot "Missing Out" Message */}
                        <AnimatePresence>
                            {step >= 2 && (
                                <motion.div
                                    variants={msgVariants} initial="hidden" animate="visible"
                                    className="flex items-end gap-2"
                                >
                                    <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center shrink-0 mb-1">
                                        <span className="text-white text-[8px] font-bold">F</span>
                                    </div>
                                    <div className="bg-[#1C1C1E] text-white px-4 py-2.5 rounded-[18px] rounded-tl-[4px] text-[15px] leading-snug max-w-[85%] shadow-sm">
                                        Wait! You're missing out ⚡<br />
                                        Follow me first — then click I'm following to grab the link 🔒🚀
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* User "I'm following" Message */}
                        <AnimatePresence>
                            {step >= 4 && (
                                <motion.div
                                    variants={msgVariants} initial="hidden" animate="visible"
                                    className="flex justify-end"
                                >
                                    <div className="bg-[#E3FCEF] text-[#006644] border border-[#36B37E]/20 px-5 py-2 rounded-[20px] rounded-br-[4px] text-[15px] font-medium shadow-sm flex items-center gap-1.5">
                                        I'm following <div className="w-4 h-4 rounded-full bg-[#36B37E] flex items-center justify-center"><Check className="w-2.5 h-2.5 text-white" strokeWidth={3} /></div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Bot "Legend" Message + Link */}
                        <AnimatePresence>
                            {step >= 5 && (
                                <div className="space-y-2">
                                    <motion.div
                                        variants={msgVariants} initial="hidden" animate="visible"
                                        className="flex items-end gap-2"
                                    >
                                        <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center shrink-0 mb-1">
                                            <span className="text-white text-[8px] font-bold">F</span>
                                        </div>
                                        <div className="bg-[#1C1C1E] text-white px-4 py-2.5 rounded-[18px] rounded-tl-[4px] text-[15px] leading-snug max-w-[85%] shadow-sm">
                                            Legend. You did it! 👑<br />
                                            Here's the link — thanks for the follow! 🚀
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        variants={msgVariants} initial="hidden" animate="visible"
                                        className="flex items-center gap-2 pl-9"
                                    >
                                        <div className="bg-[#F0F2F5] p-1.5 rounded-[18px] max-w-[85%] shadow-sm w-full">
                                            <div className="bg-white rounded-[14px] p-3 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
                                                <div className="flex flex-col">
                                                    <span className="text-[14px] font-bold text-black">Get Guide</span>
                                                    <span className="text-[11px] text-gray-500">fluxdm.space</span>
                                                </div>
                                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                                    <ArrowRight className="w-4 h-4 text-gray-600" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            )}
                        </AnimatePresence>

                    </div>

                    {/* Quick Replies Area (Floating above footer) */}
                    <AnimatePresence>
                        {step === 3 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="absolute bottom-[65px] left-0 right-0 px-4 flex gap-2 justify-end"
                            >
                                <div className="bg-white border border-gray-200 shadow-lg shadow-black/5 px-4 py-2 rounded-full text-[14px] font-semibold text-[#0084FF] cursor-pointer hover:bg-gray-50 active:scale-95 transition-all">
                                    I'm following ✅
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>


                    {/* Footer / Input Area */}
                    <div className="h-[60px] bg-white border-t border-gray-100 px-3 flex items-center gap-3 shrink-0 relative z-10">
                        <div className="grid grid-cols-3 gap-1">
                            <div className="p-1.5 rounded-full hover:bg-gray-100"><Menu size={22} className="text-[#0084FF]" /></div>
                            <div className="p-1.5 rounded-full hover:bg-gray-100"><ImageIcon size={22} className="text-[#0084FF]" /></div>
                            <div className="p-1.5 rounded-full hover:bg-gray-100"><Mic size={22} className="text-[#0084FF]" /></div>
                        </div>
                        <div className="flex-1 bg-[#F0F2F5] h-9 rounded-full flex items-center px-3">
                            <span className="text-gray-400 text-[14px]">Message...</span>
                        </div>
                        <div className="p-1.5 rounded-full hover:bg-gray-100">
                            <ThumbsUp size={22} className="text-[#0084FF]" />
                        </div>
                    </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[110px] h-[4px] bg-black rounded-full z-50"></div>
            </div>
        </div>
    );
};
