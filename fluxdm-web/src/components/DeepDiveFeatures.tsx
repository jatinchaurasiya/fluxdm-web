import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Moon, Layers } from 'lucide-react';
import { FollowGateAnimation } from './ui/follow-gate-animation';
import { RoiStatsCard } from './ui/roi-stats-card';
import cashToCommentImg from '../assets/cashtocomment.png';

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
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 py-16 lg:py-24`}>
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

const BentoItem = ({ title, description, icon: Icon }: { title: string; description: string; icon: any }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all shadow-sm hover:shadow-lg hover:-translate-y-1 duration-300 group"
    >
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
            <Icon size={20} />
        </div>
        <h3 className="text-xl font-semibold text-card-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
);

export const DeepDiveFeatures = () => {

    return (
        <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Row 1: The Automation Engine */}
                <FeatureRow
                    title="Comment-to-Cash Engine"
                    description="Automatically send links, discounts, or playbooks the moment someone comments. Capture leads while interest is at its peak."
                    badge="Instantly Responsive"
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
                    title="Supercharge your growth"
                    description="Unlock more brand deals and prove your worth. Our real-time analytics dashboards help you visualize every interaction."
                    badge="Viral Growth"
                    isReversed
                    visualComponent={<RoiStatsCard />}
                />

                {/* Row 3: Privacy & CRM */}
                <FeatureRow
                    title="The 'Follow Gate' Growth Engine"
                    description="Stop giving value away for free. Automatically gate your files, links, and guides behind a 'Follow' action to skyrocket your audience growth."
                    badge="Growth Hack"
                    visualComponent={<FollowGateAnimation />}
                />

                {/* Bento Grid */}
                <div className="mt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-4">Built for Power Users</h2>
                        <p className="text-muted-foreground">Everything you need to scale your automation empire.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <BentoItem
                            title="Unlimited Accounts"
                            description="Scale 1 or 100 pages. No extra cost."
                            icon={CheckCircle2}
                        />
                        <BentoItem
                            title="Human Emulation"
                            description="Variable typing delays to behave exactly like a human."
                            icon={Zap}
                        />
                        <BentoItem
                            title="Smart Link Delivery"
                            description="Instantly send high-converting links and personalized images to turn every DM into a potential sale."
                            icon={Layers}
                        />
                        <BentoItem
                            title="Midnight Mode"
                            description="Sleek, battery-saving dark UI."
                            icon={Moon}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

