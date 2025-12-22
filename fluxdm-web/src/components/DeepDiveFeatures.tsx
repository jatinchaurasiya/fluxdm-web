import { motion } from 'framer-motion';

import { FollowGateAnimation } from './ui/follow-gate-animation';
import { RoiStatsCard } from './ui/roi-stats-card';
import cashToCommentImg from '../assets/cashtocomment.png';
import { useTranslation } from 'react-i18next';

interface FeatureRowProps {
    title: string;
    description: string;
    badge: string;
    isReversed?: boolean;
    visualDelay?: number;
    visualComponent?: React.ReactNode;
}

const FeatureRow = ({ title, description, badge, isReversed = false, visualComponent }: FeatureRowProps) => {
    return (
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 py-12 lg:py-20`}>
            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex-1 w-full lg:w-1/2 space-y-8"
            >
                <div className="inline-flex items-center px-4 py-1.5 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-600 text-sm font-bold tracking-wide uppercase">
                    {badge}
                </div>
                <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                    {title}
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                    {description}
                </p>
                {/* Optional CTA or Checkmarks could go here */}
            </motion.div>


            {/* Visual Component */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex-1 w-full lg:w-1/2 relative"
            >
                {/* Decorative Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-400/20 blur-[100px] rounded-full pointer-events-none -z-10" />

                {visualComponent ? (
                    <div className="w-full flex justify-center relative z-10">
                        {visualComponent}
                    </div>
                ) : (
                    <div className="aspect-[4/3] w-full rounded-3xl bg-slate-50 border border-slate-200 flex items-center justify-center relative overflow-hidden group shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="text-slate-400 font-medium">
                            Visual Placeholder
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export const DeepDiveFeatures = () => {
    const { t } = useTranslation();

    return (
        <section id="features" className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Row 1: The Automation Engine */}
                <FeatureRow
                    title={t('deepDive.row1.title')}
                    description={t('deepDive.row1.desc')}
                    badge={t('deepDive.row1.badge')}
                    visualComponent={
                        <img
                            src={cashToCommentImg}
                            alt="Comment to Cash Engine"
                            className="w-full h-auto rounded-3xl shadow-lg border border-border"
                        />
                    }
                />

                {/* Row 2: The Visual Scheduler */}
                <FeatureRow
                    title={t('deepDive.row2.title')}
                    description={t('deepDive.row2.desc')}
                    badge={t('deepDive.row2.badge')}
                    isReversed
                    visualComponent={<RoiStatsCard />}
                />

                {/* Row 3: Privacy & CRM */}
                <FeatureRow
                    title={t('deepDive.row3.title')}
                    description={t('deepDive.row3.desc')}
                    badge={t('deepDive.row3.badge')}
                    visualComponent={<FollowGateAnimation />}
                />



            </div>
        </section>
    );
};

