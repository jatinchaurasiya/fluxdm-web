'use client';
import { PlusIcon, ShieldCheckIcon, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BorderTrail } from '@/components/ui/border-trail';
import { useLocalizedPricing } from '@/hooks/useLocalizedPricing';

export function PricingSection() {
    const { symbol, proPrice, agencyPrice, loading } = useLocalizedPricing();

    // If loading, you might want to show a skeleton or just default values. 
    // For now, we'll let it render with defaults/fetched values.

    return (
        <section className="relative min-h-screen overflow-hidden py-12 bg-background text-foreground">
            <div id="pricing" className="mx-auto w-full max-w-6xl space-y-10 px-4">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-xl space-y-5 text-center"
                >
                    <Badge variant="outline" className="border-blue-500/50 text-blue-400 uppercase tracking-widest">
                        Lifetime Access
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
                        Pay Once. <span className="text-blue-500">Own Forever.</span>
                    </h2>
                    <p className="text-zinc-400 text-lg">
                        Stop renting your software. Secure your lifetime license today.
                    </p>
                </motion.div>

                {/* Grid Background */}
                <div className="relative">
                    <div
                        className={cn(
                            'pointer-events-none absolute inset-0 size-full z-0',
                            'bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]',
                            'bg-[size:32px_32px] opacity-20',
                            '[mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_80%)]',
                        )}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="relative z-10 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                    >
                        {/* PLAN 1: SOLO CREATOR */}
                        <div className="relative bg-card border border-border p-8 rounded-2xl flex flex-col shadow-sm">
                            {/* Decorative Plus Icons */}
                            <PlusIcon className="absolute -top-3 -left-3 size-6 text-muted-foreground/30" />
                            <PlusIcon className="absolute -top-3 -right-3 size-6 text-muted-foreground/30" />

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-foreground">Solo Creator</h3>
                                <p className="text-muted-foreground text-sm mt-2">Perfect for individual growth.</p>
                            </div>

                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-2xl text-muted-foreground">{symbol}</span>
                                {loading ? (
                                    <div className="h-12 w-24 bg-muted animate-pulse rounded my-auto" />
                                ) : (
                                    <span className="text-5xl font-extrabold text-foreground">{proPrice}</span>
                                )}
                                <span className="text-muted-foreground text-sm">/lifetime</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {['Lifetime License (One-time payment)', 'Unlimited Automation Flows', 'Smart Scheduling', 'Runs Locally on 1 Device'].map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                                        <Check className="size-5 text-blue-500" /> {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 h-12 text-md font-semibold">
                                Get Instant Access
                            </Button>
                        </div>

                        {/* PLAN 2: AGENCY (Highlighted) */}
                        <div className="relative bg-card dark:bg-zinc-900/80 p-8 rounded-2xl flex flex-col border border-border shadow-md">
                            {/* The Glowing Border Trail */}
                            <BorderTrail
                                className="bg-gradient-to-l from-blue-500 to-purple-500"
                                size={120}
                            />

                            {/* Decorative Plus Icons */}
                            <PlusIcon className="absolute -bottom-3 -left-3 size-6 text-muted-foreground/30" />
                            <PlusIcon className="absolute -bottom-3 -right-3 size-6 text-muted-foreground/30" />

                            <div className="mb-6 flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground">Agency / White Label</h3>
                                    <p className="text-muted-foreground text-sm mt-2">For scaling businesses.</p>
                                </div>
                                <Badge className="bg-blue-600 hover:bg-blue-700 text-white">For Business</Badge>
                            </div>

                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-2xl text-muted-foreground">{symbol}</span>
                                {loading ? (
                                    <div className="h-12 w-24 bg-muted animate-pulse rounded my-auto" />
                                ) : (
                                    <span className="text-5xl font-extrabold text-foreground">{agencyPrice}</span>
                                )}
                                <span className="text-muted-foreground text-sm">/lifetime</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {[
                                    'Everything in Solo',
                                    'White Label License (Remove FluxDM branding)',
                                    'Client Management Dashboard',
                                    'Commercial Rights to Resell',
                                    'Priority Support'
                                ].map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-foreground font-medium">
                                        <ShieldCheckIcon className="size-5 text-yellow-500" /> {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button className="w-full bg-yellow-500 hover:bg-yellow-400 h-12 text-md font-bold shadow-[0_0_20px_rgba(234,179,8,0.3)] text-black border-none">
                                Get Agency Access
                            </Button>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
