'use client';

import { Check, Minus, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLocalizedPricing } from "@/hooks/useLocalizedPricing";
import { Link } from "react-router-dom";

function Pricing() {
    const { symbol, proPrice, agencyPrice, loading } = useLocalizedPricing();

    return (
        <div className="w-full py-10 lg:py-20">
            <div className="container mx-auto">
                <div className="flex text-center justify-center items-center gap-4 flex-col">
                    <Badge variant="outline">Compare Plans</Badge>
                    <div className="flex gap-2 flex-col">
                        <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-bold">
                            Choose the right plan for you
                        </h2>
                        <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
                            Whether you are a solo creator or scaling an agency, we have a lifetime deal for you.
                        </p>
                    </div>

                    {/* Grid Container - 3 Columns on LG: Labels | Solo | Agency */}
                    <div className="grid text-left w-full grid-cols-1 lg:grid-cols-3 divide-x pt-20 border-x border-b rounded-lg">

                        {/* Header Row - Empty 1st col, Plan Names in 2nd/3rd */}
                        <div className="hidden lg:block col-span-1 p-6"></div>

                        {/* Solo Plan Header */}
                        <div className="px-6 py-8 flex flex-col gap-4 bg-muted/20">
                            <div>
                                <p className="text-2xl font-bold">Solo Creator</p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    For individual creators building their brand.
                                </p>
                            </div>
                            <div className="flex items-baseline gap-1 mt-4">
                                <span className="text-2xl text-muted-foreground">{symbol}</span>
                                {loading ? (
                                    <div className="h-8 w-16 bg-muted animate-pulse rounded" />
                                ) : (
                                    <span className="text-4xl font-bold">{proPrice}</span>
                                )}
                                <span className="text-sm text-muted-foreground"> / lifetime</span>
                            </div>
                            <a href="https://test.dodopayments.com/buy/" target="_blank" rel="noopener noreferrer" className="w-full mt-4 block">
                                <Button variant="outline" className="w-full gap-2">
                                    Get Solo <MoveRight className="w-4 h-4" />
                                </Button>
                            </a>
                        </div>

                        {/* Agency Plan Header */}
                        <div className="px-6 py-8 flex flex-col gap-4 bg-muted/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] px-2 py-1 font-bold uppercase tracking-wider rounded-bl-lg">
                                Best Value
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-blue-600">Agency</p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    For businesses scaling multiple clients.
                                </p>
                            </div>
                            <div className="flex items-baseline gap-1 mt-4">
                                <span className="text-2xl text-muted-foreground">{symbol}</span>
                                {loading ? (
                                    <div className="h-8 w-16 bg-muted animate-pulse rounded" />
                                ) : (
                                    <span className="text-4xl font-bold">{agencyPrice}</span>
                                )}
                                <span className="text-sm text-muted-foreground"> / lifetime</span>
                            </div>
                            <Link to="/contact-sales" className="w-full mt-4 block">
                                <Button className="w-full gap-2 bg-blue-600 hover:bg-blue-500 text-white">
                                    Get Agency <MoveRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>

                        {/* FEATURE SECTION 1: CORE */}
                        <div className="col-span-1 lg:col-span-3 bg-muted/50 p-4 font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                            Core Features
                        </div>

                        {/* Unlimited Automation */}
                        <div className="hidden lg:flex items-center p-4 font-medium text-sm">Unlimited Automation Flows</div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t lg:border-t-0">
                            <span className="lg:hidden text-sm font-medium">Unlimited Automation Flows</span>
                            <Check className="w-5 h-5 text-green-500" />
                        </div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t lg:border-t-0">
                            <span className="lg:hidden text-sm font-medium">Unlimited Automation Flows</span>
                            <Check className="w-5 h-5 text-green-500" />
                        </div>

                        {/* Smart Scheduling */}
                        <div className="hidden lg:flex items-center p-4 font-medium text-sm">Smart Scheduling</div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t">
                            <span className="lg:hidden text-sm font-medium">Smart Scheduling</span>
                            <Check className="w-5 h-5 text-green-500" />
                        </div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t">
                            <span className="lg:hidden text-sm font-medium">Smart Scheduling</span>
                            <Check className="w-5 h-5 text-green-500" />
                        </div>

                        {/* Auto-DM Engine */}
                        <div className="hidden lg:flex items-center p-4 font-medium text-sm">Auto-DM Engine</div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t">
                            <span className="lg:hidden text-sm font-medium">Auto-DM Engine</span>
                            <Check className="w-5 h-5 text-green-500" />
                        </div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t">
                            <span className="lg:hidden text-sm font-medium">Auto-DM Engine</span>
                            <Check className="w-5 h-5 text-green-500" />
                        </div>

                        {/* Data Privacy */}
                        <div className="hidden lg:flex items-center p-4 font-medium text-sm">Local Data Privacy (Runs on Device)</div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t">
                            <span className="lg:hidden text-sm font-medium">Local Data Privacy</span>
                            <Check className="w-5 h-5 text-green-500" />
                        </div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t">
                            <span className="lg:hidden text-sm font-medium">Local Data Privacy</span>
                            <Check className="w-5 h-5 text-green-500" />
                        </div>

                        {/* FEATURE SECTION 2: ADVANCED */}
                        <div className="col-span-1 lg:col-span-3 bg-muted/50 p-4 font-semibold text-sm uppercase tracking-wider text-muted-foreground mt-4 lg:mt-0">
                            Agency & Growth
                        </div>

                        {/* White Label */}
                        <div className="hidden lg:flex items-center p-4 font-medium text-sm">White Label License (Remove Branding)</div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t lg:border-t-0">
                            <span className="lg:hidden text-sm font-medium">White Label License</span>
                            <Minus className="w-5 h-5 text-muted-foreground/30" />
                        </div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t lg:border-t-0 bg-blue-50/5 dark:bg-blue-900/10">
                            <span className="lg:hidden text-sm font-medium">White Label License</span>
                            <Check className="w-5 h-5 text-blue-500" />
                        </div>

                        {/* Client Dashboard */}
                        <div className="hidden lg:flex items-center p-4 font-medium text-sm">Client Management Dashboard</div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t">
                            <span className="lg:hidden text-sm font-medium">Client Management Dashboard</span>
                            <Minus className="w-5 h-5 text-muted-foreground/30" />
                        </div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t bg-blue-50/5 dark:bg-blue-900/10">
                            <span className="lg:hidden text-sm font-medium">Client Management Dashboard</span>
                            <Check className="w-5 h-5 text-blue-500" />
                        </div>

                        {/* Commercial Rights */}
                        <div className="hidden lg:flex items-center p-4 font-medium text-sm">Commercial Resell Rights</div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t">
                            <span className="lg:hidden text-sm font-medium">Commercial Resell Rights</span>
                            <Minus className="w-5 h-5 text-muted-foreground/30" />
                        </div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t bg-blue-50/5 dark:bg-blue-900/10">
                            <span className="lg:hidden text-sm font-medium">Commercial Resell Rights</span>
                            <Check className="w-5 h-5 text-blue-500" />
                        </div>

                        {/* Priority Support */}
                        <div className="hidden lg:flex items-center p-4 font-medium text-sm">Priority Support</div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t">
                            <span className="lg:hidden text-sm font-medium">Priority Support</span>
                            <Minus className="w-5 h-5 text-muted-foreground/30" />
                        </div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t bg-blue-50/5 dark:bg-blue-900/10">
                            <span className="lg:hidden text-sm font-medium">Priority Support</span>
                            <Check className="w-5 h-5 text-blue-500" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export { Pricing };
