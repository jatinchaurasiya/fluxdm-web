'use client';
import { PlusIcon, ShieldCheckIcon, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BorderTrail } from '@/components/ui/border-trail';
import { Link } from 'react-router-dom';

export function PricingSection() {
    // Defines the plans
    const plans = [
        {
            name: "Solo Creator",
            price: "$6.99",
            period: "/month",
            description: "Perfect for individual creators.",
            features: [
                'Unlimited Automation Flows',
                'Smart Scheduling',
                'Runs Locally on 1 Device',
                'Standard Support'
            ],
            buttonText: "Get Started",
            href: "https://test.dodopayments.com/buy/",
            isExternal: true,
            highlight: false
        },
        {
            name: "Agency",
            price: "$79.99",
            period: "/month",
            description: "For scaling teams and agencies.",
            features: [
                'Everything in Solo',
                'Unlimited Client Accounts',
                'Team Collaboration Tools',
                'Priority Support'
            ],
            buttonText: "Get Started",
            href: "https://test.dodopayments.com/buy/",
            isExternal: true,
            highlight: true
        },
        {
            name: "White Label",
            price: "Contact Sales",
            period: "",
            description: "Full rebranding and custom domain support.",
            features: [
                'Everything in Agency',
                'Remove FluxDM Branding',
                'Custom Domain & SSL',
                'Dedicated Account Manager',
                'Commercial Resell Rights'
            ],
            buttonText: "Contact Sales",
            href: "/contact-sales",
            isExternal: false,
            highlight: false
        }
    ];

    return (
        <section className="relative min-h-screen overflow-hidden py-12 bg-transparent text-foreground">
            <div id="pricing" className="mx-auto w-full max-w-7xl space-y-10 px-4">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-xl space-y-5 text-center"
                >
                    <Badge variant="outline" className="border-blue-500/50 text-blue-400 uppercase tracking-widest">
                        Simple Pricing
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
                        Pay Once. <span className="text-blue-500">Own Forever.</span>
                    </h2>
                    <p className="text-zinc-400 text-lg">
                        Transparent pricing for everyone. No hidden fees.
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
                        className="relative z-10 grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
                    >
                        {plans.map((plan, index) => (
                            <div
                                key={plan.name}
                                className={cn(
                                    "relative p-8 rounded-2xl flex flex-col shadow-sm border",
                                    plan.highlight
                                        ? "bg-card dark:bg-zinc-900/80 border-border shadow-md"
                                        : "bg-card border-border"
                                )}
                            >
                                {plan.highlight && (
                                    <BorderTrail
                                        className="bg-gradient-to-l from-blue-500 to-purple-500"
                                        size={120}
                                    />
                                )}

                                {/* Decorative Plus Icons */}
                                <PlusIcon className="absolute -top-3 -left-3 size-6 text-muted-foreground/30" />
                                <PlusIcon className="absolute -top-3 -right-3 size-6 text-muted-foreground/30" />
                                <PlusIcon className="absolute -bottom-3 -left-3 size-6 text-muted-foreground/30" />
                                <PlusIcon className="absolute -bottom-3 -right-3 size-6 text-muted-foreground/30" />

                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                                    <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
                                </div>

                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className={cn("text-4xl font-extrabold text-foreground", plan.price === "Contact Sales" && "text-3xl")}>
                                        {plan.price}
                                    </span>
                                    {plan.period && (
                                        <span className="text-muted-foreground text-sm">{plan.period}</span>
                                    )}
                                </div>

                                <ul className="space-y-4 mb-8 flex-1">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                                            {plan.highlight ? (
                                                <ShieldCheckIcon className="size-5 text-yellow-500 flex-shrink-0" />
                                            ) : (
                                                <Check className="size-5 text-blue-500 flex-shrink-0" />
                                            )}
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {plan.isExternal ? (
                                    <a
                                        href={plan.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full"
                                    >
                                        <Button className={cn(
                                            "w-full h-12 text-md font-semibold",
                                            plan.highlight
                                                ? "bg-yellow-500 hover:bg-yellow-400 text-black shadow-[0_0_20px_rgba(234,179,8,0.3)] border-none"
                                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                        )}>
                                            {plan.buttonText} <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </a>
                                ) : (
                                    <Link to={plan.href} className="w-full">
                                        <Button className={cn(
                                            "w-full h-12 text-md font-semibold",
                                            plan.highlight
                                                ? "bg-yellow-500 hover:bg-yellow-400 text-black shadow-[0_0_20px_rgba(234,179,8,0.3)] border-none"
                                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                        )}>
                                            {plan.buttonText} <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        ))}

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
