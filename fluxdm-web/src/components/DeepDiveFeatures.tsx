import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Moon, Layers } from 'lucide-react';

// ... (FeatureRowProps and FeatureRow component remain unchanged, since they take props) ...
interface FeatureRowProps {
    title: string;
    description: string;
    badge: string;
    isReversed?: boolean;
    visualDelay?: number;
}

const FeatureRow = ({ title, description, badge, isReversed = false }: FeatureRowProps) => {
    return (
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 py-12`}>
            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex-1 w-full lg:w-1/2 space-y-6"
            >
                <div className="inline-flex items-center px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                    {badge}
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                    {title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                    {description}
                </p>
            </motion.div>


            {/* Visual Component (Placeholder) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, x: isReversed ? -50 : 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="flex-1 w-full lg:w-1/2"
            >
                <div className="aspect-[4/3] w-full rounded-2xl bg-muted/50 border border-border flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Placeholder for actual image */}
                    <div className="text-muted-foreground font-medium">
                        Visual Placeholder
                    </div>
                </div>
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
        className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors shadow-sm"
    >
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
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
                />

                {/* Row 2: The Visual Scheduler */}
                <FeatureRow
                    title="Story Mention ROI"
                    description="Turn every @mention into a connection. Automatically thank fans and repost content to build social proof."
                    badge="Viral Growth"
                    isReversed
                />

                {/* Row 3: Privacy & CRM */}
                <FeatureRow
                    title="The 'Follow-to-Unlock' Hack"
                    description="Force growth by gating your DMs. Users must follow you to receive the automated link."
                    badge="Growth Hack"
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

