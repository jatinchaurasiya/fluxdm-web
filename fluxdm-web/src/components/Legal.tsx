import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import FluxIcon from "@/assets/fluxdm-icon.png";

const Footer = () => {
    const { t } = useTranslation();
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const openModal = (type: string) => setActiveModal(type);
    const closeModal = () => setActiveModal(null);

    return (
        <footer className="relative z-20 bg-background border-t border-border pt-20 pb-10">
            <div className="container mx-auto px-4 max-w-7xl">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">

                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <img src={FluxIcon} alt="FluxDM" className="w-8 h-8 object-contain" />
                            <span className="text-xl font-bold text-foreground tracking-tight">FluxDM</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            {t('footer.tagline')}
                        </p>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-zinc-800 hover:text-white cursor-pointer transition-colors font-bold border border-white/5">𝕏</div>
                            <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-zinc-800 hover:text-white cursor-pointer transition-colors font-bold border border-white/5">IG</div>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-4">{t('footer.product')}</h4>
                        <ul className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
                            <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.download')}</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.features')}</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">{t('footer.pricing')}</a></li>
                        </ul>
                    </div>

                    {/* Enterprise & Agency */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-4">{t('footer.company')}</h4>
                        <ul className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
                            <li className="flex items-center gap-2 group cursor-pointer">
                                <span className="group-hover:text-foreground transition-colors">White Label (Agencies)</span>
                                <span className="bg-blue-500/10 text-blue-500 text-[10px] px-1.5 py-0.5 rounded uppercase font-bold border border-blue-500/20">New</span>
                            </li>
                            <li><Link to="/mission" className="hover:text-foreground transition-colors">Our Mission</Link></li>
                            <li><Link to="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Legal (Meta Required) */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-4">{t('footer.legal')}</h4>
                        <ul className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
                            <li>
                                <Link to="/privacy-policy" className="hover:text-foreground hover:underline transition-colors flex items-center gap-2">
                                    <Shield size={14} /> Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms-of-service" className="hover:text-foreground hover:underline transition-colors flex items-center gap-2">
                                    <FileText size={14} /> Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link to="/data-deletion" className="hover:text-red-500 transition-colors flex items-center gap-2">
                                    <Lock size={14} /> Data Deletion
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-500 text-xs">
                        © {new Date().getFullYear()} FluxDM Inc. {t('footer.rights')} Not affiliated with Meta Platforms, Inc. or Instagram.
                    </p>
                    <div className="flex items-center gap-2 text-zinc-500 text-xs">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.4)]"></span>
                        {t('footer.status')}
                    </div>
                </div>
            </div>

            {/* Legal Modals - Simple Overlay */}
            <AnimatePresence>
                {activeModal && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
                            className="bg-card border border-border rounded-2xl max-w-lg w-full p-8 relative shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 className="text-2xl font-bold text-foreground mb-4 capitalize">{activeModal.replace('-', ' ')}</h3>
                            <div className="text-muted-foreground space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar text-sm">
                                <p><strong>Last Updated: December 2025</strong></p>
                                <p>FluxDM operates as a desktop-native application. Unlike cloud-based competitors, we do not store your Instagram authentication tokens, DMs, or user data on external servers.</p>
                                <p>All automation logic is executed locally on your machine. Your data remains in your control at all times.</p>
                                <p className="bg-muted p-3 rounded border border-border">
                                    <strong>Meta Compliance:</strong> We use the official Instagram Basic Display API and Graph API solely for the purpose of replying to comments and managing your scheduled content.
                                </p>
                            </div>
                            <button
                                onClick={closeModal}
                                className="mt-6 w-full bg-foreground text-background font-bold py-3 rounded-xl hover:opacity-90 transition-opacity"
                            >
                                Understood
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </footer>
    );
};

export default Footer;
