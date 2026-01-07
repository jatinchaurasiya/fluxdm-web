import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Calendar, MessageSquare, Zap, BarChart3, Check } from 'lucide-react';
import { FollowGateAnimation } from './ui/follow-gate-animation';

import calendarScheduler from '@/assets/calendar-scheduler.png';
import automationSetting from '@/assets/automationsetting.png';
import dashboardImg from '@/assets/Dashboard.png';

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
            // We use a slightly adjusted range to ensure the last step stays active long enough
            const stepIndex = Math.min(
                Math.floor(latest * 4), // 4 steps
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
        const targetScroll = containerRef.current.offsetTop + (stepHeight * index) + (stepHeight * 0.1); // + offset
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
        <section ref={containerRef} className="relative h-[300vh]">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* Background Elements (Optional, subtle) */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-50/30 rounded-full blur-[100px]" />
                </div>

                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col h-full py-10 md:py-20">

                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 shrink-0">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/50 backdrop-blur-sm border border-gray-200 text-xs font-semibold text-gray-600 mb-4 uppercase tracking-wider shadow-sm">
                            Process
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
                            {t('automationJourney.headline')}
                        </h2>
                        <p className="text-lg text-gray-600">
                            {t('automationJourney.subheadline')}
                        </p>
                    </div>

                    {/* Steps Navigation */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative mb-8 md:mb-12 px-4 md:px-0 shrink-0">
                        {/* Progress Line */}
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
                                    className={`flex flex-col items-center gap-4 cursor-pointer group relative w-full md:w-auto ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'} transition-opacity`}
                                    onClick={() => scrollToStep(index)}
                                >
                                    {/* Icon Circle */}
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-black text-white scale-110 shadow-lg' : 'bg-white border border-gray-200 text-gray-500 group-hover:border-gray-300 shadow-sm'}`}>
                                        {isPast ? <Check size={24} /> : <Icon size={24} />}
                                    </div>

                                    {/* Text info */}
                                    <div className="text-center max-w-[150px]">
                                        <h3 className={`font-bold text-sm mb-1 ${isActive ? 'text-black' : 'text-gray-600'}`}>
                                            {step.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 hidden md:block">
                                            {step.desc}
                                        </p>
                                    </div>

                                    {/* Active Indicator Bar (Mobile) */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeStep"
                                            className="h-1 w-full bg-black rounded-full absolute -bottom-4 md:hidden"
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Dynamic Content Area */}
                    <div className="flex-1 min-h-0 relative">
                        <div className="bg-white/60 backdrop-blur-xl rounded-[32px] md:rounded-[48px] border border-white/50 shadow-2xl overflow-hidden w-full h-full relative ring-1 ring-gray-900/5 items-center justify-center flex">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="w-full h-full p-6 md:p-12 flex items-center justify-center"
                                >
                                    {/* Visual Content Based on Step */}
                                    {activeStep === 0 && <StepVisualSchedule />}
                                    {activeStep === 1 && <StepVisualKeywords />}
                                    {activeStep === 2 && <StepVisualAutomate />}
                                    {activeStep === 3 && <StepVisualViral />}

                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* --- Visual Sub-Components --- */

const StepVisualSchedule = () => (
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6 order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Visual Content Calendar</h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Drag and drop your posts, reels, and stories. See exactly how your feed will look before you post.
            </p>
            <ul className="space-y-3">
                {["Multi-account support", "Auto-publish to Reels", "First comment scheduling"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center"><Check size={12} className="text-blue-600" /></div>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
        <div className="relative order-1 md:order-2 perspective-1000">
            <motion.div
                initial={{ rotateY: 10, rotateX: 5, scale: 0.9, opacity: 0 }}
                animate={{ rotateY: 0, rotateX: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative z-10"
            >
                <img
                    src={calendarScheduler}
                    alt="Content Calendar Interface"
                    className="w-full rounded-xl shadow-2xl border border-gray-100/50"
                />

                {/* Floating Element Animation */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -right-4 top-10 bg-white p-3 rounded-lg shadow-xl border border-gray-100 hidden md:block"
                >
                    <Calendar className="text-blue-600 w-6 h-6" />
                </motion.div>
            </motion.div>
        </div>
    </div>
);

const StepVisualKeywords = () => (
    <div className="w-full max-w-4xl flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Define Your Triggers</h3>

        <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-2xl"
        >
            <img
                src={automationSetting}
                alt="Automation Keyword Settings"
                className="w-full rounded-2xl shadow-2xl border border-gray-100"
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg"
            >
                Start automation with "GROWTH"
            </motion.div>
        </motion.div>
    </div>
);

const StepVisualAutomate = () => (
    <div className="flex items-center justify-center w-full h-full">
        <div className="w-full max-w-md h-[400px] md:h-[500px] flex items-center justify-center">
            {/* Reusing the actual component for the 'Automate' step as it's the perfect demo */}
            <div className="scale-75 md:scale-90 origin-center w-full h-full flex items-center justify-center">
                <FollowGateAnimation />
            </div>
        </div>
    </div>
);

const StepVisualViral = () => (
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Watch Your Engagement Soar</h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Track your growth in real-time. See which posts are performing best and optimize your strategy.
            </p>
            <div className="flex gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex-1">
                    <div className="text-sm text-gray-500 mb-1">Total Revenue</div>
                    <div className="text-2xl font-bold text-gray-900">$12,450</div>
                    <div className="text-xs text-green-600 font-medium mt-1">+24.5%</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex-1">
                    <div className="text-sm text-gray-500 mb-1">New Leads</div>
                    <div className="text-2xl font-bold text-gray-900">3,842</div>
                    <div className="text-xs text-green-600 font-medium mt-1">+18.2%</div>
                </div>
            </div>
        </div>

        <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
        >
            <img
                src={dashboardImg}
                alt="Analytics Dashboard"
                className="w-full rounded-2xl shadow-2xl border border-gray-100"
            />
        </motion.div>
    </div>
);
