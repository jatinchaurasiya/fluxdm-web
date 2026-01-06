import { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    private handleReload = () => {
        window.location.reload();
    };

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
                    <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-6 text-center shadow-2xl">
                        <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto">
                            <AlertCircle className="w-8 h-8 text-red-500" />
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold">Something went wrong</h2>
                            <p className="text-gray-400">
                                We encountered an unexpected error. Usually reloading the page fixes this.
                            </p>
                        </div>

                        <button
                            onClick={this.handleReload}
                            className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-xl font-medium transition-colors"
                        >
                            <RefreshCw className="w-4 h-4" />
                            <span>Reload Application</span>
                        </button>

                        {import.meta.env.DEV && this.state.error && (
                            <div className="text-left bg-black/50 p-4 rounded-lg overflow-auto max-h-48">
                                <p className="text-xs font-mono text-red-400 break-words">
                                    {this.state.error.toString()}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
