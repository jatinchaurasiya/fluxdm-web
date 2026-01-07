import { Check, Plus, BarChart3, MessageCircle, Zap } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';

import { useTranslation } from 'react-i18next';

const ContentSchedulingSection = () => {
    const { t } = useTranslation();
    return (
        <section className="relative overflow-hidden py-8 sm:py-16 transition-all duration-300">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">

                    {/* Left Column - Text Content */}
                    <FadeIn delay={0.2} className="flex flex-col justify-center">
                        <div className="inline-flex w-fit items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-600 mb-6">
                            {t('scheduling.badge')}
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                            {t('scheduling.headline')}
                        </h2>

                        <p className="text-lg leading-8 text-gray-600 mb-8">
                            {t('scheduling.description')}
                        </p>

                        <ul className="space-y-4">
                            {(t('scheduling.features', { returnObjects: true }) as string[]).map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>

                    {/* Right Column - The Visual Mockup */}
                    <FadeIn delay={0.4} className="relative">
                        {/* Window Container */}
                        <div className="relative rounded-2xl bg-white shadow-2xl ring-1 ring-gray-900/10 overflow-hidden transform transition-all hover:scale-[1.01] duration-500 max-w-[600px] mx-auto lg:mx-0">

                            {/* Window Header */}
                            <div className="border-b border-gray-200 bg-gray-50/80 backdrop-blur-sm px-4 py-3 flex items-center justify-between sticky top-0 z-10">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="h-3 w-3 rounded-full bg-[#FF5F57] border border-[#E0443E]"></div>
                                        <div className="h-3 w-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]"></div>
                                        <div className="h-3 w-3 rounded-full bg-[#28C840] border border-[#1AAB29]"></div>
                                    </div>
                                    <div className="ml-4 text-xs font-medium text-gray-500 flex items-center gap-1">
                                        {t('scheduling.mockup.breadcrumbs')}
                                    </div>
                                </div>
                                <button className="hidden sm:inline-flex items-center gap-1.5 rounded-md bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-zinc-700 transition-colors shadow-sm">
                                    <Plus className="h-3.5 w-3.5" />
                                    {t('scheduling.mockup.schedule')}
                                </button>
                            </div>

                            {/* Main App Area */}
                            <div className="flex h-[350px] sm:h-[420px] overflow-hidden">

                                {/* Calendar Grid Area */}
                                <div className="flex-1 p-4 sm:p-6 bg-white overflow-y-auto overflow-x-hidden">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="font-semibold text-gray-900">{t('scheduling.calendar.month')}</h3>
                                        <div className="flex gap-2">
                                            <button className="p-1.5 rounded-md hover:bg-gray-100 text-gray-400 transition-colors">{'<'}</button>
                                            <button className="p-1.5 rounded-md hover:bg-gray-100 text-gray-600 transition-colors">{'>'}</button>
                                        </div>
                                    </div>

                                    {/* Calendar Grid */}
                                    <div className="grid grid-cols-7 gap-px bg-gray-100 rounded-lg overflow-hidden border border-gray-200 shadow-inner">
                                        {/* Days Header */}
                                        {(t('scheduling.calendar.days', { returnObjects: true }) as string[]).map((day) => (
                                            <div key={day} className="bg-gray-50/50 py-2 text-center text-[10px] sm:text-xs font-semibold text-gray-500">
                                                {day}
                                            </div>
                                        ))}

                                        {/* Prev Month Padding */}
                                        <div className="bg-white/50 h-16 sm:h-24 p-1 sm:p-2 text-[10px] text-gray-300">30</div>

                                        {/* Days */}
                                        {Array.from({ length: 13 }).map((_, i) => (
                                            <div key={i} className="bg-white h-16 sm:h-24 p-1 sm:p-2 text-[10px] sm:text-xs font-medium text-gray-500 hover:bg-gray-50 transition-colors relative group">
                                                {i + 1}
                                                {i === 4 && (
                                                    <div className="mt-1 sm:mt-2 w-full bg-blue-50 text-[8px] sm:text-[10px] text-blue-600 px-1 py-0.5 rounded border border-blue-100 truncate shadow-sm">
                                                        {t('scheduling.calendar.events.launch')}
                                                    </div>
                                                )}
                                                {i === 8 && (
                                                    <div className="mt-1 sm:mt-2 w-full bg-purple-50 text-[8px] sm:text-[10px] text-purple-600 px-1 py-0.5 rounded border border-purple-100 truncate shadow-sm">
                                                        {t('scheduling.calendar.events.story')}
                                                    </div>
                                                )}
                                            </div>
                                        ))}

                                        {/* Active Day - 14th */}
                                        <div className="bg-blue-50/40 h-16 sm:h-24 p-1 sm:p-2 text-[10px] sm:text-xs font-medium text-blue-600 relative ring-1 ring-inset ring-blue-500/20 z-10 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                                            <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-blue-600 text-white shadow-md shadow-blue-500/20">14</span>
                                            <div className="mt-1 sm:mt-2 w-full bg-zinc-800 text-[8px] sm:text-[10px] text-white px-1.5 py-1 rounded shadow-md flex items-center gap-1 transform transition-transform hover:scale-105 cursor-pointer">
                                                <Zap className="h-2.5 w-2.5 text-yellow-400" />
                                                <span className="truncate">{t('scheduling.calendar.events.blackFriday')}</span>
                                            </div>
                                        </div>

                                        {/* Rest of days */}
                                        {Array.from({ length: 16 }).map((_, i) => (
                                            <div key={i + 15} className="bg-white h-16 sm:h-24 p-1 sm:p-2 text-[10px] sm:text-xs font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                                                {i + 15}
                                                {i === 3 && (
                                                    <div className="mt-1 sm:mt-2 w-full bg-orange-50 text-[8px] sm:text-[10px] text-orange-600 px-1 py-0.5 rounded border border-orange-100 truncate shadow-sm">
                                                        {t('scheduling.calendar.events.reel')}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Sidebar - Hidden on mobile, visible on sm+ */}
                                <div className="w-56 border-l border-gray-200 bg-gray-50/50 backdrop-blur-sm p-4 flex flex-col gap-6 hidden sm:flex shrink-0">

                                    {/* Stats Box */}
                                    <div className="rounded-xl bg-white p-4 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-gray-100/60">
                                        <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                            <BarChart3 className="h-3.5 w-3.5" />
                                            {t('scheduling.mockup.queue')}
                                        </div>
                                        <div className="flex items-baseline gap-1.5">
                                            <span className="text-2xl font-bold text-gray-900">3</span>
                                            <span className="text-xs text-gray-500 font-medium">{t('scheduling.mockup.postsReady')}</span>
                                        </div>
                                        <div className="mt-2 h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
                                            <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_10px_rgba(59,130,246,0.4)]"></div>
                                        </div>
                                    </div>

                                    {/* Recent Automations */}
                                    <div className="flex-1 min-h-0 flex flex-col">
                                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">
                                            {t('scheduling.mockup.draggables')}
                                        </h4>
                                        <div className="space-y-2.5 overflow-y-auto pr-1">
                                            <div className="group cursor-grab active:cursor-grabbing flex items-center gap-3 rounded-xl border border-gray-200/60 bg-white p-2.5 shadow-sm hover:shadow-md hover:border-blue-300/50 hover:bg-blue-50/30 transition-all">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-orange-600 group-hover:scale-105 transition-transform shadow-inner">
                                                    <Zap className="h-4 w-4" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-xs font-semibold text-gray-900 truncate">{t('scheduling.calendar.events.blackFriday')}</p>
                                                    <p className="text-[9px] text-gray-500 truncate">{t('scheduling.calendar.events.triggerDeal')}</p>
                                                </div>
                                            </div>

                                            <div className="group cursor-grab active:cursor-grabbing flex items-center gap-3 rounded-xl border border-gray-200/60 bg-white p-2.5 shadow-sm hover:shadow-md hover:border-blue-300/50 hover:bg-blue-50/30 transition-all">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600 group-hover:scale-105 transition-transform shadow-inner">
                                                    <MessageCircle className="h-4 w-4" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-xs font-semibold text-gray-900 truncate">{t('scheduling.calendar.events.welcomeMsg')}</p>
                                                    <p className="text-[9px] text-gray-500 truncate">{t('scheduling.calendar.events.triggerFollow')}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hint */}
                                    <div className="mt-auto rounded-lg bg-blue-50/80 p-3 text-[10px] leading-relaxed text-blue-700 border border-blue-100">
                                        <strong>{t('scheduling.mockup.tip')}</strong>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default ContentSchedulingSection;
