import { Zap, Calendar, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Features() {
    const { t } = useTranslation();

    const FEATURE_LIST = [
        {
            icon: Zap,
            title: t('featureGrid.automation.title'),
            desc: t('featureGrid.automation.desc')
        },
        {
            icon: Calendar,
            title: t('featureGrid.scheduler.title'),
            desc: t('featureGrid.scheduler.desc')
        },
        {
            icon: ShieldCheck,
            title: t('featureGrid.secure.title'),
            desc: t('featureGrid.secure.desc')
        }
    ];

    return (
        <section id="features" className="py-32 px-6 bg-background relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                    {FEATURE_LIST.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:bg-muted/30 hover:-translate-y-2 hover:shadow-xl duration-300"
                        >
                            <div className="w-12 h-12 mb-6 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                                <feature.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
