import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Monitor, Apple, Download } from 'lucide-react';

export default function DownloadSuccess() {
    const [downloading, setDownloading] = useState<'windows' | 'mac' | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleDownload = async (platform: 'windows' | 'mac') => {
        setDownloading(platform);
        setError(null);
        try {
            const response = await fetch(`/api/download?platform=${platform}`);
            const data = await response.json();

            if (data.url) {
                window.location.assign(data.url);
            } else {
                console.error('Download link generation failed:', data.error);
                setError('We could not generate your download link. Please contact support.');
            }
        } catch (error) {
            console.error('Download error:', error);
            setError('A network error occurred. Please check your connection and retry.');
        } finally {
            setDownloading(null);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 max-w-3xl w-full flex flex-col items-center text-center space-y-10"
            >
                {/* Success Checkmark */}
                <div className="relative">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                        className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(74,222,128,0.4)]"
                    >
                        <Check className="w-12 h-12 text-black stroke-[3px]" />
                    </motion.div>
                </div>

                {/* Heading */}
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Thank You!
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto">
                        Your payment was successful. Install FluxDM to start automating your revenue.
                    </p>
                </div>

                {/* Download Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl px-4"
                >
                    <button
                        onClick={() => handleDownload('windows')}
                        disabled={downloading !== null}
                        className="group relative flex items-center justify-center p-6 bg-[#00A4EF]/10 hover:bg-[#00A4EF]/20 border border-[#00A4EF]/30 hover:border-[#00A4EF] rounded-2xl transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00A4EF]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <div className="flex flex-col items-center space-y-3">
                            <div className="p-3 bg-[#00A4EF]/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                                <Monitor className="w-8 h-8 text-[#00A4EF]" />
                            </div>
                            <div className="text-center">
                                <div className="text-xl font-bold text-white group-hover:text-[#00A4EF] transition-colors">Download for Windows</div>
                                <span className="text-sm text-gray-400">Windows 10/11 (.exe)</span>
                            </div>
                        </div>
                    </button>

                    <button
                        onClick={() => handleDownload('mac')}
                        disabled={downloading !== null}
                        className="group relative flex items-center justify-center p-6 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/60 rounded-2xl transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <div className="flex flex-col items-center space-y-3">
                            <div className="p-3 bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                                <Apple className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-center">
                                <div className="text-xl font-bold text-white">Download for Mac</div>
                                <span className="text-sm text-gray-400">macOS (.dmg)</span>
                            </div>
                        </div>
                    </button>
                </motion.div>

                {/* Loading State */}
                {downloading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-gray-400 flex items-center space-x-3 bg-white/5 px-6 py-3 rounded-full border border-white/10"
                    >
                        <div className="w-5 h-5 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
                        <span className="font-medium">Generating secure download link...</span>
                    </motion.div>
                )}

                {/* Error State */}
                {error && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-400 flex items-center space-x-3 bg-red-500/10 px-6 py-3 rounded-full border border-red-500/20"
                    >
                        <span className="font-medium">{error}</span>
                    </motion.div>
                )}

                {/* Expiration Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-sm text-gray-500 max-w-sm mx-auto flex items-center justify-center gap-2"
                >
                    <Download className="w-4 h-4" />
                    Links expire in 15 minutes. Please start your download now.
                </motion.p>
            </motion.div>
        </div>
    );
}
