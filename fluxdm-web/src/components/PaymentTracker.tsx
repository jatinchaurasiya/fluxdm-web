import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

declare global {
    interface Window {
        goaffproTrackConversion?: (data: {
            number: string;
            total: number;
            email?: string;
            currency: string;
        }) => void;
    }
}

export const PaymentTracker = () => {
    const [searchParams] = useSearchParams();
    const processedRef = useRef(false);

    useEffect(() => {
        const paymentId = searchParams.get('payment_id');
        const status = searchParams.get('status');
        const customerEmail = searchParams.get('customer_email') || searchParams.get('email');

        if (status === 'succeeded' && paymentId && !processedRef.current) {
            // Check localStorage to avoid duplicate commissions
            const storageKey = `fluxdm_tracked_${paymentId}`;
            if (localStorage.getItem(storageKey)) {
                return;
            }

            if (window.goaffproTrackConversion) {
                window.goaffproTrackConversion({
                    number: paymentId,
                    total: 6.99, // Static for now as per request: "total: 6.99"
                    email: customerEmail || undefined,
                    currency: 'USD'
                });

                // Mark as processed
                processedRef.current = true;
                localStorage.setItem(storageKey, 'true');
                console.log('GoAffPro conversion tracked for:', paymentId);
            }
        }
    }, [searchParams]);

    return null;
};
