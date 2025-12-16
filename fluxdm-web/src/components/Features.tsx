import { Zap, Calendar, ShieldCheck } from 'lucide-react';

const FEATURE_LIST = [
    {
        icon: Zap,
        title: "Smart Automation",
        desc: "Trigger complex DM flows from comments. Convert engagement into sales automatically."
    },
    {
        icon: Calendar,
        title: "Visual Scheduler",
        desc: "Drag, drop, and schedule Reels & Carousels for the entire month with a powerful visual editor."
    },
    {
        icon: ShieldCheck,
        title: "Local & Secure",
        desc: "Your data stays on your PC. We never store your auth tokens or private messages."
    }
];

export default function Features() {
    return (
        <section id="features" className="py-32 px-6 bg-background relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                    {FEATURE_LIST.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:bg-muted/50 hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 mb-6 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
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
