import { useEffect, useState, useCallback, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Copy, Monitor, Apple, AlertCircle, RefreshCw, Loader2, Link as LinkIcon } from 'lucide-react';

export default function DownloadSuccess() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    // verificationStatus state as requested 'loading' | 'success' | 'error'
    // Error state will now cover 'Manual Verification Needed'
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
    const [licenseKey, setLicenseKey] = useState<string>('');
    const [isCopied, setIsCopied] = useState(false);
    const [downloading, setDownloading] = useState<'windows' | 'mac' | null>(null);
    const [statusMessage, setStatusMessage] = useState('Verifying payment details...');

    // Polling refs
    const pollCount = useRef(0);
    const maxPolls = 10; // 10 attempts * 3s = 30 seconds

    // Helper to get license key once payment is confirmed
    const verifyFinalSession = async (sessionId: string) => {
        try {
            const response = await fetch(`/api/validate-session?session_id=${sessionId}`);
            const data = await response.json();

            if (data.success) {
                setLicenseKey(data.licenseKey);
                setStatus('success');
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('Final validation error:', error);
            return false;
        }
    };

    const checkPayment = useCallback(async () => {
        const sessionId = searchParams.get('session_id');

        if (!sessionId) {
            navigate('/pricing');
            return;
        }

        // Handle placeholder from Dodo redirect (safety check)
        if (sessionId === '{checkout_session_id}' || sessionId === '{CHECKOUT_SESSION_ID}') {
            setStatusMessage("Hang tight, we're finalizing your order...");
            // We do not poll or error here, we technically just wait.
            // But we can trigger the manual verification UI after a long delay if needed,
            // or just stay here. The user instructions imply simple safety check.
            return;
        }

        try {
            // Updated endpoint: /api/check-payment
            const response = await fetch(`/api/check-payment?session_id=${sessionId}`);
            const data = await response.json();

            if (data.status === 'succeeded') {
                setStatusMessage('Payment confirmed! Generating license...');
                const valid = await verifyFinalSession(sessionId);
                if (!valid) {
                    setStatus('error');
                    setStatusMessage('Payment succeeded but license generation failed.');
                }
            } else {
                // Pending or failed
                pollCount.current += 1;
                if (pollCount.current >= maxPolls) {
                    setStatus('error');
                    setStatusMessage('Manual Verification Needed');
                }
            }
        } catch (error) {
            console.error('Polling error:', error);
            pollCount.current += 1;
            if (pollCount.current >= maxPolls) {
                setStatus('error');
                setStatusMessage('Manual Verification Needed');
            }
        }
    }, [searchParams, navigate]);

    useEffect(() => {
        const sessionId = searchParams.get('session_id');
        if (!sessionId) return;

        if (status === 'success' || status === 'error') return;

        // Poll every 3 seconds
        const interval = setInterval(checkPayment, 3000);

        // Initial check
        checkPayment();

        return () => clearInterval(interval);
    }, [checkPayment, status, searchParams]);

    const handleManualRetry = () => {
        setStatus('loading');
        setStatusMessage('Retrying verification...');
        pollCount.current = 0; // Reset poll count
    };

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
            <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white space-y-6">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                    <Loader2 className="w-12 h-12 text-violet-500" />
                </motion.div>
                <p className="text-gray-400 animate-pulse">{statusMessage}</p>
            </div>
        );
    }

    if (status === 'error') {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 max-w-lg w-full flex flex-col items-center text-center space-y-8"
                >
                    <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20">
                        <AlertCircle className="w-12 h-12 text-red-500" />
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold">Verification Issue</h1>
                        <p className="text-gray-400 text-lg">
                            {statusMessage}
                        </p>
                        <p className="text-sm text-gray-500">
                            We couldn't confirm your payment automatically.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-3 w-full max-w-xs">
                        <button
                            onClick={handleManualRetry}
                            className="flex items-center justify-center space-x-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-xl font-medium transition-colors w-full"
                        >
                            <RefreshCw className="w-5 h-5" />
                            <span>Retry Verification</span>
                        </button>

                        <a
                            href="mailto:support@fluxdm.space"
                            className="flex items-center justify-center space-x-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-medium transition-colors w-full"
                        >
                            <LinkIcon className="w-5 h-5" />
                            <span>Contact Support</span>
                        </a>
                    </div>

                    <p className="text-xs text-gray-500 mt-4">
                        Session ID: <span className="font-mono text-violet-400">{searchParams.get('session_id')}</span>
                    </p>
                </motion.div>
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
                        Welcome to FluxDM. Your automated revenue engine is online.
                    </p>
                </div>

                {/* License Key Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="w-full max-w-xl bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 space-y-4 shadow-2xl hover:border-violet-500/30 transition-colors"
                >
                    <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">Your License Key</h3>
                    <div
                        onClick={handleCopy}
                        className="relative group cursor-pointer"
                    >
                        <div className="bg-black/50 border border-white/10 group-hover:border-violet-500/50 rounded-xl p-4 flex items-center justify-between font-mono text-lg md:text-xl text-green-400 break-all shadow-inner transition-all duration-300">
                            {licenseKey}
                            <div className="ml-4 p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors flex-shrink-0">
                                {isCopied ? (
                                    <Check className="w-5 h-5 text-green-400" />
                                ) : (
                                    <Copy className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                )}
                            </div>
                        </div>
                        <div className="absolute -top-8 right-0 bg-violet-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            Click to Copy
                        </div>
                    </div>
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
