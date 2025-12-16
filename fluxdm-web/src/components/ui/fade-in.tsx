import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export function FadeIn({ children, className, delay = 0, direction = "up" }: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const directionOffset = {
        up: 20,
        down: -20,
        left: 20,
        right: -20,
    };

    const axis = direction === "left" || direction === "right" ? "x" : "y";

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, [axis]: directionOffset[direction] }}
            animate={isInView ? { opacity: 1, [axis]: 0 } : { opacity: 0, [axis]: directionOffset[direction] }}
            transition={{
                duration: 0.7,
                ease: [0.21, 0.47, 0.32, 0.98], // Premium 'Spring' ease
                delay: delay,
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
