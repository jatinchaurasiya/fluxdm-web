'use client';

import { Check, Minus, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Pricing() {
    const { t } = useTranslation();
    return (
        <div className="w-full py-10 lg:py-20">
            <div className="container mx-auto">
                <div className="flex text-center justify-center items-center gap-4 flex-col">
                    <Badge variant="outline">{t('comparison.badge')}</Badge>
                    <div className="flex gap-2 flex-col">
                        <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-bold">
                            {t('comparison.headline')}
                        </h2>
                        <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
                            {t('comparison.subheadline')}
                        </p>
                    </div>

                    {/* Grid Container - 4 Columns on LG: Labels | Solo | Agency | White Label */}
                    <div className="grid text-left w-full grid-cols-1 lg:grid-cols-4 divide-x pt-20 border-x border-b rounded-lg">

                        {/* Header Row - Empty 1st col, Plan Names in 2nd/3rd/4th */}
                        <div className="hidden lg:block col-span-1 p-6"></div>

                        {/* Solo Plan Header */}
                        <div className="px-6 py-8 flex flex-col gap-4 bg-muted/20">
                            <div>
                                <p className="text-2xl font-bold">{t('comparison.plans.solo.name')}</p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    {t('comparison.plans.solo.desc')}
                                </p>
                            </div>
                            <div className="flex items-baseline gap-1 mt-4">
                                <span className="text-4xl font-bold">{t('comparison.plans.solo.price')}</span>
                                <span className="text-sm text-muted-foreground"> {t('pricing.plans.solo.period')}</span>
                            </div>
                            <a href="https://test.dodopayments.com/buy/" target="_blank" rel="noopener noreferrer" data-ml-goal="checkout_click" data-ml-goal-plan="solo" className="w-full mt-4 block">
                                <Button variant="outline" className="w-full gap-2">
                                    {t('comparison.plans.solo.cta')} <MoveRight className="w-4 h-4" />
                                </Button>
                            </a>
                        </div>

                        {/* Agency Plan Header */}
                        <div className="px-6 py-8 flex flex-col gap-4 bg-muted/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] px-2 py-1 font-bold uppercase tracking-wider rounded-bl-lg">
                                {t('comparison.bestValue')}
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-blue-600">{t('comparison.plans.agency.name')}</p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    {t('comparison.plans.agency.desc')}
                                </p>
                            </div>
                            <div className="flex items-baseline gap-1 mt-4">
                                <span className="text-4xl font-bold">{t('comparison.plans.agency.price')}</span>
                                <span className="text-sm text-muted-foreground"> {t('pricing.plans.agency.period')}</span>
                            </div>
                            <a href="https://test.dodopayments.com/buy/" target="_blank" rel="noopener noreferrer" data-ml-goal="checkout_click" data-ml-goal-plan="agency" className="w-full mt-4 block">
                                <Button className="w-full gap-2 bg-blue-600 hover:bg-blue-500 text-white">
                                    {t('comparison.plans.agency.cta')} <MoveRight className="w-4 h-4" />
                                </Button>
                            </a>
                        </div>

                        {/* White Label Plan Header */}
                        <div className="px-6 py-8 flex flex-col gap-4 bg-muted/20">
                            <div>
                                <p className="text-2xl font-bold">{t('comparison.plans.whiteLabel.name')}</p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    {t('comparison.plans.whiteLabel.desc')}
                                </p>
                            </div>
                            <div className="flex items-baseline gap-1 mt-4">
                                <span className="text-3xl font-bold">{t('comparison.plans.whiteLabel.price')}</span>
                            </div>
                            <Link to="/contact-sales" data-ml-goal="pricing_cta" className="w-full mt-4 block">
                                <Button variant="outline" className="w-full gap-2">
                                    {t('comparison.plans.whiteLabel.cta')} <MoveRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>

                        {/* FEATURE SECTION 1: CORE */}
                        <div className="col-span-1 lg:col-span-4 bg-muted/50 p-4 font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                            {t('comparison.sections.core')}
                        </div>

                        {/* Unlimited Automation */}
                        <div className="hidden lg:flex items-center p-4 font-medium text-sm">{t('comparison.features.unlimitedAutomation')}</div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t lg:border-t-0">
                            <span className="lg:hidden text-sm font-medium">{t('comparison.plans.solo.features.automation')}</span>
                            <Check className="w-5 h-5 text-green-500" />
                        </div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t lg:border-t-0">
                            <span className="lg:hidden text-sm font-medium">{t('comparison.plans.agency.features.automation')}</span>
                            <Check className="w-5 h-5 text-green-500" />
                        </div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t lg:border-t-0">
                            <span className="lg:hidden text-sm font-medium">{t('comparison.plans.whiteLabel.features.automation')}</span>
                            <Check className="w-5 h-5 text-green-500" />
                        </div>

                        {/* Smart Scheduling */}
                        <div className="hidden lg:flex items-center p-4 font-medium text-sm">{t('comparison.features.smartScheduling')}</div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t">
                            <span className="lg:hidden text-sm font-medium">{t('comparison.plans.solo.features.scheduling')}</span>
                            <Check className="w-5 h-5 text-green-500" />
                        </div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t">
                            <span className="lg:hidden text-sm font-medium">{t('comparison.plans.agency.features.scheduling')}</span>
                            <Check className="w-5 h-5 text-green-500" />
                        </div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t">
                            <span className="lg:hidden text-sm font-medium">{t('comparison.plans.whiteLabel.features.scheduling')}</span>
                            <Check className="w-5 h-5 text-green-500" />
                        </div>

                        {/* FEATURE SECTION 2: AGENCY & GROWTH */}
                        <div className="col-span-1 lg:col-span-4 bg-muted/50 p-4 font-semibold text-sm uppercase tracking-wider text-muted-foreground mt-4 lg:mt-0">
                            {t('comparison.sections.agency')}
                        </div>

                        {/* Client Management */}
                        <div className="hidden lg:flex items-center p-4 font-medium text-sm">{t('comparison.features.clientManagement')}</div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t lg:border-t-0">
                            <span className="lg:hidden text-sm font-medium">{t('comparison.plans.solo.features.clientManagement')}</span>
                            <Minus className="w-5 h-5 text-muted-foreground/30" />
                        </div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t lg:border-t-0 bg-blue-50/5 dark:bg-blue-900/10">
                            <span className="lg:hidden text-sm font-medium">{t('comparison.plans.agency.features.clientManagement')}</span>
                            <Check className="w-5 h-5 text-blue-500" />
                        </div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t lg:border-t-0">
                            <span className="lg:hidden text-sm font-medium">{t('comparison.plans.whiteLabel.features.clientManagement')}</span>
                            <Check className="w-5 h-5 text-blue-500" />
                        </div>

                        {/* Priority Support */}
                        <div className="hidden lg:flex items-center p-4 font-medium text-sm">{t('comparison.features.prioritySupport')}</div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t">
                            <span className="lg:hidden text-sm font-medium">{t('comparison.plans.solo.features.prioritySupport')}</span>
                            <Minus className="w-5 h-5 text-muted-foreground/30" />
                        </div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t bg-blue-50/5 dark:bg-blue-900/10">
                            <span className="lg:hidden text-sm font-medium">{t('comparison.plans.agency.features.prioritySupport')}</span>
                            <Check className="w-5 h-5 text-blue-500" />
                        </div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t">
                            <span className="lg:hidden text-sm font-medium">{t('comparison.plans.whiteLabel.features.prioritySupport')}</span>
                            <Check className="w-5 h-5 text-blue-500" />
                        </div>

                        {/* FEATURE SECTION 3: ENTERPRISE */}
                        <div className="col-span-1 lg:col-span-4 bg-muted/50 p-4 font-semibold text-sm uppercase tracking-wider text-muted-foreground mt-4 lg:mt-0">
                            {t('comparison.sections.enterprise')}
                        </div>

                        {/* Remove FluxDM Branding */}
                        <div className="hidden lg:flex items-center p-4 font-medium text-sm">{t('comparison.features.removeBranding')}</div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t lg:border-t-0">
                            <span className="lg:hidden text-sm font-medium">{t('comparison.plans.solo.features.removeBranding')}</span>
                            <Minus className="w-5 h-5 text-muted-foreground/30" />
                        </div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t lg:border-t-0 bg-blue-50/5 dark:bg-blue-900/10">
                            <span className="lg:hidden text-sm font-medium">{t('comparison.plans.agency.features.removeBranding')}</span>
                            <Minus className="w-5 h-5 text-muted-foreground/30" />
                        </div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t lg:border-t-0">
                            <span className="lg:hidden text-sm font-medium">{t('comparison.plans.whiteLabel.features.removeBranding')}</span>
                            <Check className="w-5 h-5 text-purple-500" />
                        </div>

                        {/* Custom Domain */}
                        <div className="hidden lg:flex items-center p-4 font-medium text-sm">{t('comparison.features.customDomain')}</div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t lg:border-t-0">
                            <span className="lg:hidden text-sm font-medium">{t('comparison.plans.solo.features.customDomain')}</span>
                            <Minus className="w-5 h-5 text-muted-foreground/30" />
                        </div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t lg:border-t-0 bg-blue-50/5 dark:bg-blue-900/10">
                            <span className="lg:hidden text-sm font-medium">{t('comparison.plans.agency.features.customDomain')}</span>
                            <Minus className="w-5 h-5 text-muted-foreground/30" />
                        </div>
                        <div className="p-4 flex items-center justify-between lg:justify-center border-t lg:border-t-0">
                            <span className="lg:hidden text-sm font-medium">{t('comparison.plans.whiteLabel.features.customDomain')}</span>
                            <Check className="w-5 h-5 text-purple-500" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export { Pricing };
