import { motion } from 'framer-motion';
import Mockup from '../assets/dashboard-mockup.svg';
import { Download, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

            <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-tight"
                >
                    {t('hero.titleLine1')} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600">
                        {t('hero.titleLine2')}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="max-w-2xl text-lg md:text-xl text-slate-400 mb-12"
                >
                    {t('hero.description')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-5 mb-24"
                >
                    <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-500 transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-10px_rgba(37,99,235,0.6)] hover:scale-105 active:scale-95">
                        <Download className="w-5 h-5" />
                        {t('hero.cta.download')}
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-slate-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                        <ShieldCheck className="w-5 h-5" />
                        {t('hero.cta.safety')}
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative w-full max-w-6xl group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-2xl rounded-2xl group-hover:opacity-30 transition-opacity duration-500" />
                    <img
                        src={Mockup}
                        alt="Dashboard"
                        className="relative rounded-xl border border-white/10 shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] bg-[#0A0A0A]"
                    />
                </motion.div>

            </div>
        </section>
    );
}
