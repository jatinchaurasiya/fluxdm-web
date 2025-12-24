import { BadgeCheck, Clock, Wallet, MoveRight, CheckCircle2, ShieldCheck, Lock, Users, Zap, TrendingUp, Briefcase } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Legal";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const Affiliates = () => {
    const handleJoinClick = () => {
        window.open("https://fluxdm.goaffpro.com/create-account", "_blank");
    };

    const handleLoginClick = () => {
        window.open("https://fluxdm.goaffpro.com/login", "_blank");
    };

    return (
        <AuroraBackground className="min-h-screen selection:bg-blue-500/30">
            <Navbar />

            <div className="pt-24 pb-16">
                {/* Section 1: Hero */}
                <section className="container mx-auto px-4 text-center max-w-4xl py-20 relative">
                    <FadeIn delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-sm font-semibold mb-6 border border-blue-500/20">
                            <BadgeCheck className="w-4 h-4" />
                            <span>Official Partner Program</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
                            Partner with FluxDM & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Earn 30% Commission.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                            Join the fastest-growing Instagram automation community. Recommend a tool people love and get paid for every single sale.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                            <Button size="lg" onClick={handleJoinClick} className="w-full sm:w-auto text-base h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 rounded-full transition-all hover:scale-105">
                                Join the Partner Program <MoveRight className="ml-2 w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="lg" onClick={handleLoginClick} className="w-full sm:w-auto text-base h-12 px-8 rounded-full border-zinc-200 dark:border-zinc-800 bg-background/50 backdrop-blur-sm hover:bg-background/80">
                                Affiliate Login
                            </Button>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground font-medium">
                            <div className="flex items-center gap-1.5">
                                <ShieldCheck className="w-4 h-4 text-green-500" />
                                <span>Verified Payouts</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Lock className="w-4 h-4 text-blue-500" />
                                <span>Secure Tracking</span>
                            </div>
                        </div>
                    </FadeIn>
                </section>

                {/* Section 2: Program Highlights */}
                <section className="container mx-auto px-4 py-16">
                    <FadeIn delay={0.2}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            <div className="bg-background/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:bg-background/60 transition-all duration-300 text-center group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-14 h-14 mx-auto bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative z-10">
                                    <BadgeCheck className="w-7 h-7 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 relative z-10">30% Per Sale</h3>
                                <p className="text-muted-foreground relative z-10">Earn recurring revenue for every customer you refer.</p>
                            </div>
                            <div className="bg-background/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:bg-background/60 transition-all duration-300 text-center group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-14 h-14 mx-auto bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative z-10">
                                    <Clock className="w-7 h-7 text-purple-600" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 relative z-10">30-Day Duration</h3>
                                <p className="text-muted-foreground relative z-10">Get credited even if they simply click and buy a month later.</p>
                            </div>
                            <div className="bg-background/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:bg-background/60 transition-all duration-300 text-center group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-14 h-14 mx-auto bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative z-10">
                                    <Wallet className="w-7 h-7 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 relative z-10">$5 Min. Payout</h3>
                                <p className="text-muted-foreground relative z-10">Withdraw your earnings instantly once you hit the threshold.</p>
                            </div>
                        </div>
                    </FadeIn>
                </section>

                {/* Section: Who Is This For? */}
                <section className="container mx-auto px-4 py-20">
                    <FadeIn delay={0.25}>
                        <h2 className="text-3xl font-bold text-center mb-12">Who Is This For?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <div className="flex flex-col items-center text-center p-6">
                                <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 mb-4">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">Content Creators</h3>
                                <p className="text-sm text-muted-foreground">Monetize your audience by recommending the tool that powers your own growth.</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-6">
                                <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center text-pink-600 mb-4">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">Digital Marketers</h3>
                                <p className="text-sm text-muted-foreground">Add a high-converting offer to your stack with a proven sales funnel.</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-6">
                                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 mb-4">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">Agencies</h3>
                                <p className="text-sm text-muted-foreground">Refer clients to FluxDM for their automation needs and earn on every subscription.</p>
                            </div>
                        </div>
                    </FadeIn>
                </section>

                {/* Section 3: How it Works */}
                <section className="container mx-auto px-4 py-20 bg-muted/20">
                    <FadeIn delay={0.3}>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                            <p className="text-muted-foreground">Start earning in 3 simple steps.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[
                                { title: "1. Apply", desc: "Sign up in 60 seconds via our partner portal.", step: "01" },
                                { title: "2. Promote", desc: "Get your unique link and access our library of high-converting banners.", step: "02" },
                                { title: "3. Earn", desc: "Track every click in real-time and withdraw your earnings on demand.", step: "03" }
                            ].map((item, i) => (
                                <div key={i} className="relative p-8 rounded-2xl bg-background border border-border shadow-sm">
                                    <span className="absolute -top-4 -left-4 text-6xl font-black text-muted/30 select-none font-mono">{item.step}</span>
                                    <h3 className="text-xl font-bold mb-3 relative z-10">{item.title}</h3>
                                    <p className="text-muted-foreground relative z-10">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </section>

                {/* Section 4: Why FluxDM (Enhanced) */}
                <section className="py-20 border-y border-border relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <FadeIn delay={0.4}>
                            <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
                                <div className="flex-1 space-y-8">
                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">Why Top Creators Promote FluxDM?</h2>
                                        <p className="text-lg text-muted-foreground">We built an affiliate program that respects your traffic and converts it into cold hard cash.</p>
                                    </div>

                                    <div className="space-y-4">
                                        {[
                                            { title: "High-Converting Funnel", desc: "We turn your traffic into customers." },
                                            { title: "Advanced Tracking", desc: "No lost commissions. Our 30-day cookie ensures you get paid." },
                                            { title: "Global Payouts", desc: "Receive your earnings via PayPal or UPI." }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors cursor-default">
                                                <div className="mt-1 bg-blue-600 rounded-full p-1.5 h-fit shadow-lg shadow-blue-500/20">
                                                    <CheckCircle2 className="w-4 h-4 text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-lg">{item.title}</h4>
                                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <Button onClick={handleJoinClick} className="bg-foreground text-background hover:opacity-90 h-12 px-8 rounded-full">
                                        Start Earning Today
                                    </Button>

                                    <div className="flex gap-4 text-xs text-muted-foreground underline">
                                        <Link to="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link>
                                        <Link to="/terms-of-service" className="hover:text-foreground">Affiliate Terms</Link>
                                    </div>
                                </div>
                                <div className="flex-1 w-full">
                                    {/* Enhanced Visual: Dashboard Widget */}
                                    <div className="relative w-full aspect-video rounded-2xl p-1 bg-gradient-to-br from-white/20 to-white/5 dark:from-white/10 dark:to-white/0 backdrop-blur-2xl border border-white/20 shadow-2xl">
                                        <div className="absolute inset-0 bg-blue-500/10 blur-3xl -z-10 rounded-full"></div>

                                        <div className="w-full h-full bg-background/80 backdrop-blur-xl rounded-xl p-8 flex flex-col justify-between relative overflow-hidden">
                                            {/* Mock Dashboard UI */}
                                            <div className="flex justify-between items-center mb-8 border-b border-border pb-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                                </div>
                                                <div className="text-xs font-mono text-muted-foreground">fluxdm.goaffpro.com</div>
                                            </div>

                                            <div className="space-y-6">
                                                <div>
                                                    <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-1">Total Earnings</div>
                                                    <div className="text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">
                                                        $1,250.00
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/10">
                                                        <div className="text-xs text-blue-600 font-bold mb-1 flex items-center gap-1"><Zap className="w-3 h-3" /> Conversions</div>
                                                        <div className="text-2xl font-bold">142</div>
                                                    </div>
                                                    <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/10">
                                                        <div className="text-xs text-green-600 font-bold mb-1 flex items-center gap-1"><MoveRight className="w-3 h-3" /> Clicks</div>
                                                        <div className="text-2xl font-bold">2,405</div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Decorative Elements */}
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl pointer-events-none"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="container mx-auto px-4 py-20 max-w-3xl">
                    <FadeIn delay={0.5}>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                        </div>
                        <div className="space-y-4">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1" className="bg-background/50 backdrop-blur-sm border rounded-xl px-4 transition-all duration-300 hover:pl-6 hover:bg-muted/30 hover:shadow-lg hover:border-blue-500/20 group">
                                    <AccordionTrigger className="hover:no-underline group-hover:text-blue-600 transition-colors">When do I get paid?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        Payments are processed on-demand once your approved balance reaches the $5 minimum threshold. You can withdraw comfortably via PayPal or local bank transfer (where supported).
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2" className="bg-background/50 backdrop-blur-sm border rounded-xl px-4 transition-all duration-300 hover:pl-6 hover:bg-muted/30 hover:shadow-lg hover:border-blue-500/20 group mt-4">
                                    <AccordionTrigger className="hover:no-underline group-hover:text-blue-600 transition-colors">How long does the tracking cookie last?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        We offer a generous 30-day cookie window. This means if a user clicks your link and purchases anytime within 30 days, you get the commission.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3" className="bg-background/50 backdrop-blur-sm border rounded-xl px-4 transition-all duration-300 hover:pl-6 hover:bg-muted/30 hover:shadow-lg hover:border-blue-500/20 group mt-4">
                                    <AccordionTrigger className="hover:no-underline group-hover:text-blue-600 transition-colors">Can I run ads to my affiliate link?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        Yes! You are free to promote FluxDM via social media, blogs, YouTube, or paid ads, provided you don't bid on "FluxDM" branded keywords on Google/Bing.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </FadeIn>
                </section>
            </div>

            <Footer />
        </AuroraBackground>
    );
};

export default Affiliates;
