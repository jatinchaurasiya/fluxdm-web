import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

    // Detect scroll to add extra border opacity
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Capabilities", href: '/#capabilities' },
        { name: "ROI", href: '/#roi' },
        { name: "Creators", href: '/#creators' },
        { name: "Pricing", href: '/pricing' },
    ];

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsLangMenuOpen(false);
    };

    return (
        <>
            <nav
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full border w-[95%] max-w-3xl ${isScrolled
                    ? 'bg-white/80 dark:bg-zinc-900/90 backdrop-blur-xl py-2 px-2 shadow-lg dark:shadow-blue-900/10 border-black/5 dark:border-white/10'
                    : 'bg-white/50 dark:bg-zinc-900/60 backdrop-blur-md py-2 px-2 border-transparent dark:border-white/5'
                    }`}
            >
                <div className="flex items-center justify-between w-full">

                    {/* Logo */}
                    <div className="flex items-center gap-3 pl-4 cursor-pointer">
                        <img src={logo} alt="FluxDM Logo" className="h-6 w-auto" />
                        <span className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight hidden sm:block">FluxDM</span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 bg-transparent">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA & Mobile Toggle & Lang Switcher */}
                    <div className="flex items-center gap-2 pr-1">
                        {/* Language Switcher */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                className="flex items-center gap-1.5 px-3 py-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-sm font-medium"
                            >
                                <Globe size={16} />
                                <span className="uppercase">{i18n.language.split('-')[0]}</span>
                            </button>

                            <AnimatePresence>
                                {isLangMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 rounded-xl shadow-xl overflow-hidden py-1 z-50"
                                    >
                                        {[
                                            { code: 'en', label: 'English' },
                                            { code: 'es', label: 'Español' },
                                            { code: 'pt', label: 'Português' },
                                            { code: 'de', label: 'Deutsch' }
                                        ].map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => changeLanguage(lang.code)}
                                                className={`w-full text-left px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors ${i18n.language.startsWith(lang.code) ? 'text-blue-600 font-bold' : 'text-zinc-600 dark:text-zinc-400'}`}
                                            >
                                                {lang.label}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <button
                            onClick={() => window.location.href = '/pricing'}
                            className="hidden md:flex bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 px-6 py-2.5 rounded-full text-sm font-bold transition-all items-center gap-2"
                        >
                            {t('nav.getAccess')} <ArrowRight size={16} />
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white p-2"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black pt-24 px-4 md:hidden"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-bold text-zinc-300 hover:text-white"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="mt-4 bg-blue-600 text-white w-full py-4 rounded-xl font-bold text-lg">
                                {t('nav.download')}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
