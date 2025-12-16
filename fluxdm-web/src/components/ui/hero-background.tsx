"use client";

import { motion } from "framer-motion";
import {
    Instagram,
    MessageCircle,
    Send,
    DollarSign,
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

export function HeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none w-full h-full min-h-screen">
            {/* Spotlight Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

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
    );
}
