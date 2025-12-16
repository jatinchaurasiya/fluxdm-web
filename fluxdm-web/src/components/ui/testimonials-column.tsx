"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Standard shadcn utility

export interface Testimonial {
    text: string;
    image: string;
    name: string;
    role: string;
}

export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: Testimonial[];
    duration?: number;
}) => {
    return (
        <div className={cn(props.className)}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6"
            >
                {[...new Array(2)].fill(0).map((_, index) => (
                    <React.Fragment key={index}>
                        {props.testimonials.map(({ text, image, name, role }, i) => (
                            <div
                                className="p-6 rounded-3xl border border-border bg-card shadow-xl max-w-xs w-full"
                                key={i}
                            >
                                <div className="text-muted-foreground text-sm leading-relaxed">
                                    "{text}"
                                </div>
                                <div className="flex items-center gap-3 mt-5">
                                    <img
                                        width={40}
                                        height={40}
                                        src={image}
                                        alt={name}
                                        className="h-10 w-10 rounded-full object-cover border border-border"
                                    />
                                    <div className="flex flex-col">
                                        <div className="font-medium text-card-foreground tracking-tight leading-5">
                                            {name}
                                        </div>
                                        <div className="leading-5 text-muted-foreground text-xs tracking-tight">
                                            {role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
};
