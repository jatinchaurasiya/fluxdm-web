import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Calendar, MessageSquare, Zap, BarChart3, Check, MousePointer2, ChevronDown } from 'lucide-react';


import calendarScheduler from '@/assets/calendar-scheduler.png';
import automationSetting from '@/assets/automationsetting.png';
import dashboardImg from '@/assets/Dashboard.png';
import automateDm from '@/assets/automate-dm.png';

export const AutomationJourney = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState(0);

    // Scroll progress for the entire section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            // Map 0-1 progress to 0-3 steps. 
            const stepIndex = Math.min(
                Math.floor(latest * 4),
                3
            );
            setActiveStep(stepIndex);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    // Function to scroll to a specific section manually (on click)
    const scrollToStep = (index: number) => {
        if (!containerRef.current) return;
        const sectionHeight = containerRef.current.scrollHeight;
        const stepHeight = sectionHeight / 4;
        const targetScroll = containerRef.current.offsetTop + (stepHeight * index) + (stepHeight * 0.1);
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    };

    const steps = [
        {
            id: 'schedule',
            icon: Calendar,
            title: t('automationJourney.steps.schedule.title'),
            desc: t('automationJourney.steps.schedule.desc'),
        },
        {
            id: 'keywords',
            icon: MessageSquare,
            title: t('automationJourney.steps.keywords.title'),
            desc: t('automationJourney.steps.keywords.desc'),
        },
        {
            id: 'automate',
            icon: Zap,
            title: t('automationJourney.steps.automate.title'),
            desc: t('automationJourney.steps.automate.desc'),
        },
        {
            id: 'viral',
            icon: BarChart3,
            title: t('automationJourney.steps.viral.title'),
            desc: t('automationJourney.steps.viral.desc'),
        }
    ];

    return (
        <section ref={containerRef} className="relative h-[400vh] md:h-[300vh]">
            <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-center overflow-hidden">

                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-50/30 rounded-full blur-[60px] md:blur-[100px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-50/30 rounded-full blur-[60px] md:blur-[100px]" />
                </div>

                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col h-full py-2 md:py-8">

                    {/* Header - Compact for mobile */}
                    <div className="text-center max-w-3xl mx-auto mb-2 md:mb-6 shrink-0 pt-2 md:pt-0">
                        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-white/50 backdrop-blur-sm border border-gray-200 text-[10px] md:text-xs font-semibold text-gray-600 mb-2 md:mb-3 uppercase tracking-wider shadow-sm">
                            Process
                        </div>
                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight mb-1 md:mb-2 leading-tight">
                            {t('automationJourney.headline')}
                        </h2>
                        {/* Hide subheadline on very small screens if needed, otherwise smaller text */}
                        <p className="text-xs md:text-base text-gray-600 max-w-xs md:max-w-none mx-auto leading-normal">
                            {t('automationJourney.subheadline')}
                        </p>
                    </div>

                    {/* Steps Navigation - Scrollable on mobile */}
                    <div className="flex flex-row md:justify-between items-center relative mb-3 md:mb-6 px-0 md:px-0 shrink-0 gap-4 md:gap-0 overflow-x-auto md:overflow-visible no-scrollbar w-full pb-2 md:pb-0 justify-start">
                        {/* Progress Line (Desktop only) */}
                        <div className="hidden md:block absolute top-[28px] left-0 w-full h-[2px] bg-gray-200/60 -z-10">
                            <motion.div
                                className="h-full bg-black/10"
                                style={{ width: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
                            />
                        </div>

                        {steps.map((step, index) => {
                            const isActive = index === activeStep;
                            const isPast = index < activeStep;
                            const Icon = step.icon;

                            return (
                                <div
                                    key={step.id}
                                    className={`flex flex-col items-center gap-2 cursor-pointer group relative min-w-[70px] md:w-auto ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'} transition-opacity`}
                                    onClick={() => scrollToStep(index)}
                                >
                                    {/* Icon Circle */}
                                    <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-black text-white scale-105 md:scale-110 shadow-lg' : 'bg-white border border-gray-200 text-gray-500 group-hover:border-gray-300 shadow-sm'}`}>
                                        {isPast ? <Check size={16} className="md:w-6 md:h-6" /> : <Icon size={16} className="md:w-6 md:h-6" />}
                                    </div>

                                    {/* Text info */}
                                    <div className="text-center max-w-[100px] md:max-w-[150px]">
                                        <h3 className={`font-bold text-[10px] md:text-sm mb-0.5 leading-tight ${isActive ? 'text-black' : 'text-gray-600'}`}>
                                            {step.title}
                                        </h3>
                                        <p className="text-[10px] text-gray-500 hidden md:block">
                                            {step.desc}
                                        </p>
                                    </div>

                                    {/* Mobile Active Indicator */}
                                    {isActive && (
                                        <motion.div layoutId="activeStep" className="h-0.5 w-full bg-black rounded-full absolute -bottom-2 md:hidden" />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Dynamic Content Area */}
                    <div className="flex-1 min-h-0 relative flex flex-col pb-safe">
                        <div className="bg-white/60 backdrop-blur-xl rounded-[20px] md:rounded-[40px] border border-white/50 shadow-xl md:shadow-2xl overflow-hidden w-full flex-1 relative ring-1 ring-gray-900/5 items-center justify-center flex">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="w-full h-full p-2 md:p-8 flex items-center justify-center"
                                >
                                    {activeStep === 0 && <StepVisualSchedule />}
                                    {activeStep === 1 && <StepVisualKeywords />}
                                    {activeStep === 2 && <StepVisualAutomate />}
                                    {activeStep === 3 && <StepVisualViral />}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Scroll Animation Indicator */}
                        <motion.div
                            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 text-[10px] font-medium pointer-events-none bg-white/90 px-3 py-1.5 rounded-full backdrop-blur-sm border border-gray-100 shadow-sm z-20"
                        >
                            <span>Scroll to explore</span>
                            <ChevronDown size={14} className="animate-bounce" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* --- Visual Sub-Components --- */

const StepVisualSchedule = () => {
    return (
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center h-full content-center">
            <div className="space-y-3 md:space-y-6 order-2 md:order-1 overflow-y-auto max-h-full no-scrollbar pb-8 md:pb-0 px-2 md:px-0">
                <div className="inline-block bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded-full text-[10px] md:text-xs">Step 1</div>
                <h3 className="text-xl md:text-3xl font-bold text-gray-900 leading-tight">Visual Content Calendar</h3>
                <p className="text-gray-600 text-xs md:text-lg leading-relaxed">
                    Drag and drop your posts, reels, and stories. See exactly how your feed will look.
                </p>
                <div className="flex md:flex-col gap-2 flex-wrap md:space-y-3">
                    {["Multi-account", "Reels Auto-publish", "Comments"].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-700 font-medium text-xs md:text-base bg-white/50 px-2 py-1 rounded-lg md:bg-transparent md:p-0">
                            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0"><Check size={10} className="text-blue-600 md:w-3 md:h-3" /></div>
                            {feature}
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative order-1 md:order-2 perspective-1000 h-full flex items-center justify-center max-h-[40%] md:max-h-full">
                <motion.div
                    initial={{ rotateY: 10, rotateX: 5, scale: 0.9, opacity: 0 }}
                    animate={{ rotateY: 0, rotateX: 0, scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="relative z-10 h-full flex items-center"
                >
                    <img
                        src={calendarScheduler}
                        alt="Content Calendar Interface"
                        className="w-full max-h-full object-contain rounded-xl shadow-xl md:shadow-2xl border border-gray-100/50"
                    />
                </motion.div>
            </div>
        </div>
    );
}

const StepVisualKeywords = () => (
    <div className="w-full max-w-4xl flex flex-col items-center text-center h-full justify-center px-2">
        <div className="inline-block bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded-full text-[10px] md:text-xs mb-2 md:mb-4">Step 2</div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Define Your Triggers</h3>

        <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-2xl flex items-center justify-center h-[50vh] md:h-auto"
        >
            <img
                src={automationSetting}
                alt="Automation Keyword Settings"
                className="w-full max-h-full object-contain rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border border-gray-100"
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 w-full max-w-[95%] md:max-w-[90%]"
            >
                <div className="bg-black/90 backdrop-blur-md text-white px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl text-xs md:text-sm font-medium shadow-2xl flex items-center gap-2 md:gap-3 ring-1 ring-white/10 mx-auto w-fit">
                    {/* Tooltip content */}
                    <div className="bg-white/20 p-1 md:p-1.5 rounded-full">
                        <MousePointer2 size={12} className="md:w-4 md:h-4" />
                    </div>
                    <div className="text-left">
                        <div className="text-[8px] md:text-[10px] uppercase tracking-wider text-gray-400 font-bold">Step-by-step Guide</div>
                        <div>Start automation with <span className="text-blue-400 font-bold">"GROWTH"</span></div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </div>
);

const StepVisualAutomate = () => (
    <div className="flex flex-col items-center justify-center w-full h-full relative overflow-hidden pt-2 md:pt-0 md:justify-center">
        {/* Relative header on mobile to prevent overlap, absolute on desktop */}
        <div className="relative md:absolute md:top-4 md:left-4 z-10 text-center md:text-left mb-2 md:mb-0 shrink-0">
            <div className="bg-orange-100 text-orange-700 font-bold px-2 py-0.5 rounded-full text-[10px] md:text-xs mb-1 inline-block">Step 3</div>
            <h3 className="text-base md:text-xl font-bold text-gray-900">Automate DMs</h3>
        </div>

        {/* Container for the phone mockup that scales to fit */}
        <div className="w-full flex-1 flex items-center justify-center min-h-0">
            {/* Adjusted scaling - Using responsive scaling to ensure it fits */}
            <div className="scale-[0.5] sm:scale-[0.6] md:scale-[0.75] xl:scale-[0.85] origin-top md:origin-center">
                <img
                    src={automateDm}
                    alt="Automate DM Interface"
                    className="w-auto h-auto max-h-[600px] object-contain drop-shadow-2xl"
                />
            </div>
        </div>
    </div>
);

const StepVisualViral = () => (
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center h-full content-center">
        <div className="space-y-4 md:space-y-6 order-2 md:order-1 px-2 md:px-0">
            <div className="inline-block bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full text-[10px] md:text-xs">Step 4</div>
            <h3 className="text-lg md:text-3xl font-bold text-gray-900 leading-tight">Watch Your Engagement Soar</h3>
            <p className="text-gray-600 text-xs md:text-lg leading-relaxed">
                Track your growth in real-time. Optimize your strategy.
            </p>
            <div className="flex gap-2 md:gap-4">
                <div className="bg-white p-3 md:p-4 rounded-xl shadow-sm border border-gray-100 flex-1">
                    <div className="text-[10px] md:text-sm text-gray-500 mb-0.5 md:mb-1">Total Revenue</div>
                    <div className="text-base md:text-2xl font-bold text-gray-900">$12,450</div>
                    <div className="text-[10px] md:text-xs text-green-600 font-medium mt-0.5 md:mt-1">+24.5%</div>
                </div>
                <div className="bg-white p-3 md:p-4 rounded-xl shadow-sm border border-gray-100 flex-1">
                    <div className="text-[10px] md:text-sm text-gray-500 mb-0.5 md:mb-1">New Leads</div>
                    <div className="text-base md:text-2xl font-bold text-gray-900">3,842</div>
                    <div className="text-[10px] md:text-xs text-green-600 font-medium mt-0.5 md:mt-1">+18.2%</div>
                </div>
            </div>
        </div>

        <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center max-h-[40%] md:max-h-full order-1 md:order-2"
        >
            <img
                src={dashboardImg}
                alt="Analytics Dashboard"
                className="w-full max-h-full object-contain rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border border-gray-100"
            />
        </motion.div>
    </div>
);
