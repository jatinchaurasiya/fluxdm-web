import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Copy, Monitor, Apple } from 'lucide-react';

export default function DownloadSuccess() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
    const [licenseKey, setLicenseKey] = useState<string>('');
    const [isCopied, setIsCopied] = useState(false);
    const [downloading, setDownloading] = useState<'windows' | 'mac' | null>(null);

    useEffect(() => {
        const verifySession = async () => {
            const sessionId = searchParams.get('session_id');

            if (!sessionId) {
                navigate('/pricing');
                return;
            }

            try {
                const response = await fetch(`/api/validate-session?session_id=${sessionId}`);
                const data = await response.json();

                if (data.success) {
                    setLicenseKey(data.licenseKey);
                    setStatus('success');
                } else {
                    console.error('Validation failed:', data.error);
                    setStatus('error');
                    // navigate('/pricing'); // Disable auto-redirect for debugging
                }
            } catch (error) {
                console.error('Error verifying session:', error);
                setStatus('error');
                // navigate('/pricing'); // Disable auto-redirect for debugging
            }
        };

        verifySession();
    }, [searchParams, navigate]);

    const handleCopy = () => {
        navigator.clipboard.writeText(licenseKey);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    const handleDownload = async (platform: 'windows' | 'mac') => {
        setDownloading(platform);
        try {
            const response = await fetch('/api/download', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ platform }),
            });
            const data = await response.json();

            if (data.url) {
                window.location.href = data.url;
            } else {
                console.error('Download link generation failed:', data.error);
                alert('We could not generate your download link. Please contact support@fluxdm.space for assistance.');
            }
        } catch (error) {
            console.error('Download error:', error);
            alert('A network error occurred while preparing your download. Please check your connection and try again.');
        } finally {
            setDownloading(null);
        }
    };

    if (status === 'loading') {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full"
                />
            </div>
        );
    }

    if (status === 'error') {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
                <div className="max-w-md w-full bg-red-500/10 border border-red-500/20 rounded-xl p-6 text-center space-y-4">
                    <h2 className="text-xl font-bold text-red-500">Payment Verification Failed</h2>
                    <p className="text-gray-400">
                        We couldn't verify your payment session. This might be because the session expired or the payment wasn't confirmed.
                    </p>
                    <div className="text-sm font-mono bg-black/50 p-2 rounded text-red-400 break-all">
                        Session ID: {searchParams.get('session_id') || 'Missing'}
                    </div>
                    <button
                        onClick={() => navigate('/pricing')}
                        className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        Return to Pricing
                    </button>
                    <p className="text-xs text-gray-500 mt-4">
                        If you believe this is an error, please contact support@fluxdm.space
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
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
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Payment Successful!
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto">
                        Welcome to FluxDM. Your automated revenue engine is ready to launch.
                    </p>
                </div>

                {/* License Key Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="w-full max-w-xl bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 space-y-4 shadow-2xl"
                >
                    <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Your License Key</h3>
                    <div className="relative group">
                        <div className="bg-black/50 border border-white/10 rounded-xl p-4 flex items-center justify-between font-mono text-lg md:text-xl text-green-400 break-all shadow-inner">
                            {licenseKey}
                            <button
                                onClick={handleCopy}
                                className="ml-4 p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0 relative"
                                title="Copy to clipboard"
                            >
                                {isCopied ? (
                                    <Check className="w-5 h-5 text-green-400" />
                                ) : (
                                    <Copy className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                )}
                            </button>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500">
                        Keep this key safe. You'll need it to activate FluxDM.
                    </p>
                </motion.div>

                {/* Download Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl"
                >
                    <button
                        onClick={() => handleDownload('windows')}
                        disabled={downloading !== null}
                        className="group relative flex items-center justify-center p-6 bg-[#00A4EF]/10 hover:bg-[#00A4EF]/20 border border-[#00A4EF]/30 hover:border-[#00A4EF] rounded-2xl transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00A4EF]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <div className="flex flex-col items-center space-y-3">
                            <div className="p-3 bg-[#00A4EF]/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                                <Monitor className="w-8 h-8 text-[#00A4EF]" />
                            </div>
                            <div className="text-center">
                                <div className="text-lg font-bold text-white group-hover:text-[#00A4EF] transition-colors">Windows</div>
                                <span className="text-xs text-gray-400">Download .exe</span>
                            </div>
                        </div>
                    </button>

                    <button
                        onClick={() => handleDownload('mac')}
                        disabled={downloading !== null}
                        className="group relative flex items-center justify-center p-6 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/60 rounded-2xl transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <div className="flex flex-col items-center space-y-3">
                            <div className="p-3 bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                                <Apple className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-center">
                                <div className="text-lg font-bold text-white">macOS</div>
                                <span className="text-xs text-gray-400">Download .dmg</span>
                            </div>
                        </div>
                    </button>
                </motion.div>

                {downloading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm text-gray-400 flex items-center space-x-2"
                    >
                        <div className="w-4 h-4 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
                        <span>Preparing your download...</span>
                    </motion.div>
                )}

            </motion.div>
        </div>
    );
}
