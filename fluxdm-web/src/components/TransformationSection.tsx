
import { motion } from 'framer-motion';
import { Check, Sparkles, TrendingUp, Rocket, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TransformationSection = () => {
    const { t } = useTranslation();

    return (
        <section id="transformation" className="py-12 sm:py-20 relative overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Headline */}
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground"
                    >
                        {t('transformation.headline')}
                    </motion.h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                        {t('transformation.subheadline')}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1: Work Smarter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-card border border-border rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-sm"
                    >
                        <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-primary">
                            <Sparkles size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{t('transformation.cards.smarter.title')}</h3>
                        <p className="text-muted-foreground mb-6 text-sm">{t('transformation.cards.smarter.desc')}</p>

                        <ul className="space-y-4">
                            {(t('transformation.cards.smarter.list', { returnObjects: true }) as string[]).map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 bg-green-500/20 p-1 rounded-full">
                                        <Check size={12} className="text-green-500 dark:text-green-400" />
                                    </div>
                                    <span className="text-muted-foreground font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Card 2: Convert Better */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-card border border-border rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden shadow-md"
                    >
                        {/* Highlight Glow - Adjusted for theme */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

                        <div className="bg-blue-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-blue-500">
                            <TrendingUp size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{t('transformation.cards.convert.title')}</h3>
                        <p className="text-muted-foreground mb-6 text-sm">{t('transformation.cards.convert.desc')}</p>

                        <ul className="space-y-4">
                            {(t('transformation.cards.convert.list', { returnObjects: true }) as string[]).map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 bg-blue-500/20 p-1 rounded-full">
                                        <Check size={12} className="text-blue-500 dark:text-blue-400" />
                                    </div>
                                    <span className="text-card-foreground font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Card 3: Grow Faster */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-card border border-border rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-sm"
                    >
                        <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-primary">
                            <Rocket size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{t('transformation.cards.faster.title')}</h3>
                        <p className="text-muted-foreground mb-6 text-sm">{t('transformation.cards.faster.desc')}</p>

                        <ul className="space-y-4">
                            {(t('transformation.cards.faster.list', { returnObjects: true }) as string[]).map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 bg-purple-500/20 p-1 rounded-full">
                                        <Check size={12} className="text-purple-500 dark:text-purple-400" />
                                    </div>
                                    <span className="text-muted-foreground font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* CTA Button */}
                <div className="mt-12 text-center">
                    <button className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-primary px-8 font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:ring-4 hover:ring-primary/30">
                        <span className="mr-2 text-lg">{t('transformation.cta')}</span>
                        <ArrowRight className="transition-transform group-hover:translate-x-1" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default TransformationSection;

