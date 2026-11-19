"use client";

import { motion, type Variants } from "framer-motion";
import {
    Instagram,
    MessageCircle,
    Send,
    DollarSign,
    CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

function FloatingIcon({
    icon: Icon,
    className,
    delay = 0,
    size = 48,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    icon: any;
    className?: string;
    delay?: number;
    size?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96] as [number, number, number, number],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                className="relative flex items-center justify-center"
            >
                {/* Glassmorphism Icon Container */}
                <div
                    className={cn(
                        "relative flex items-center justify-center rounded-3xl p-6",
                        "bg-white/40 dark:bg-transparent backdrop-blur-[6px]", // Stronger fill in light mode
                        "border border-black/10 dark:border-white/[0.1] shadow-2xl shadow-black/5 dark:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]", // Darker border/shadow for light
                        gradient
                    )}
                >
                    <Icon
                        size={size}
                        className="text-zinc-800 dark:text-white/90 drop-shadow-sm" // Dark icon in light mode
                        strokeWidth={1.5}
                    />

                    {/* Inner Glow */}
                    <div className="absolute inset-0 rounded-3xl bg-white/20 dark:bg-white/5 opacity-50" />
                </div>
            </motion.div>
        </motion.div>
    );
}

function FluxLandingHero() {
    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
            },
        }),
    };

    return (
        <div className="relative w-full flex items-center justify-center overflow-hidden min-h-[90vh]">
            {/* Spotlight Effect - Optional overlay for extra depth */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* 1. Instagram Logo (Top Left) */}
                <FloatingIcon
                    icon={Instagram}
                    delay={0.3}
                    size={64}
                    rotate={-12}
                    gradient="from-purple-500/[0.15] via-pink-500/[0.1] to-orange-500/[0.05]"
                    className="left-[5%] md:left-[10%] top-[15%] md:top-[20%]"
                />

                {/* 2. Dollar Sign (Top Right - Revenue) */}
                <FloatingIcon
                    icon={DollarSign}
                    delay={0.5}
                    size={56}
                    rotate={15}
                    gradient="from-green-500/[0.15]"
                    className="right-[5%] md:right-[12%] top-[15%] md:top-[25%]"
                />

                {/* 3. Direct Message / Send (Bottom Left) */}
                <FloatingIcon
                    icon={Send}
                    delay={0.4}
                    size={48}
                    rotate={-8}
                    gradient="from-blue-500/[0.15]"
                    className="left-[8%] md:left-[15%] bottom-[15%] md:bottom-[20%]"
                />

                {/* 4. Comment Bubble (Bottom Right) */}
                <FloatingIcon
                    icon={MessageCircle}
                    delay={0.6}
                    size={52}
                    rotate={20}
                    gradient="from-indigo-500/[0.15]"
                    className="right-[10%] md:right-[18%] bottom-[10%] md:bottom-[25%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 mt-12">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Badge */}
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-black/[0.1] dark:border-white/[0.08] mb-8 md:mb-12 backdrop-blur-sm"
                    >
                        <CheckCircle2 className="h-4 w-4 text-blue-500" />
                        <span className="text-sm text-black/60 dark:text-white/60 tracking-wide">
                            v1.0 Public Beta
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold mb-6 md:mb-8 tracking-tight text-foreground">
                            Turn Instagram Comments
                            <br />
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 dark:from-blue-300 dark:via-indigo-200 dark:to-purple-300"
                                )}
                            >
                                into Revenue. On Autopilot.
                            </span>
                        </h1>
                    </motion.div>

                    {/* Subheadline */}
                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
                            Stop manually DMing links. FluxDM instantly converts your comments, story replies, and mentions into sales conversations 24/7. Built for serious creators and scaling agencies.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a href="#pricing" data-ml-goal="start_trial" className="h-12 px-8 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium transition-all hover:shadow-lg flex items-center justify-center">
                            Start Automating Free
                        </a>
                        <a href="#pricing" data-ml-goal="pricing_cta" className="h-12 px-8 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-foreground transition-colors flex items-center justify-center">
                            See Pricing
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export { FluxLandingHero };
