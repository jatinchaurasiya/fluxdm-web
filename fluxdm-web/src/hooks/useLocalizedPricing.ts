import { useState, useEffect } from 'react';

interface PricingState {
    currency: string;
    symbol: string;
    proPrice: number;
    agencyPrice: number;
    countryCode: string;
    loading: boolean;
}

export const useLocalizedPricing = () => {
    const [pricing, setPricing] = useState<PricingState>({
        currency: 'USD',
        symbol: '$',
        proPrice: 5.99, // User requested 5.99 default
        agencyPrice: 19.99, // Scaled for agency
        countryCode: 'US',
        loading: true,
    });

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                const country = data.country_code;
                const region = data.continent_code; // 'EU', 'AS', 'NA', etc.

                if (country === 'IN') {
                    setPricing({
                        currency: 'INR',
                        symbol: '₹',
                        proPrice: 597, // User requested 597 for India
                        agencyPrice: 4997,
                        countryCode: 'IN',
                        loading: false,
                    });
                } else if (region === 'EU' || country === 'DE' || country === 'FR' || country === 'IT' || country === 'ES') {
                    setPricing({
                        currency: 'EUR',
                        symbol: '€',
                        proPrice: 5.99, // User requested 5.99 for EU
                        agencyPrice: 97.00,
                        countryCode: country,
                        loading: false,
                    });
                } else if (country === 'GB') {
                    setPricing({
                        currency: 'GBP',
                        symbol: '£',
                        proPrice: 5.99,
                        agencyPrice: 97.00,
                        countryCode: 'GB',
                        loading: false,
                    });
                } else {
                    // Default / US
                    setPricing({
                        currency: 'USD',
                        symbol: '$',
                        proPrice: 5.99,
                        agencyPrice: 97.00,
                        countryCode: country,
                        loading: false,
                    });
                }
            } catch (error) {
                console.error('Failed to fetch location for pricing:', error);
                setPricing((prev) => ({ ...prev, loading: false }));
            }
        };

        fetchLocation();
    }, []);

    const formatPrice = (price: number, currency: string) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: price % 1 === 0 ? 0 : 2,
            maximumFractionDigits: 2,
        }).format(price);
    };

    return { ...pricing, formatPrice };
};
