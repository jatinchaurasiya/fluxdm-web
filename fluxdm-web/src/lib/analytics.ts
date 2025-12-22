import ReactGA from "react-ga4";

// Initialize GA4 - Call this in the main app entry point
export const initGA = () => {
    const measurementId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
    if (measurementId) {
        ReactGA.initialize(measurementId);
        console.log("GA Inited");
    } else {
        console.warn("GA Measurement ID not found in environment variables.");
    }
};

// Track Page Views
export const trackPageView = (path: string) => {
    const measurementId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
    if (measurementId) {
        ReactGA.send({ hitType: "pageview", page: path });
    }
};

// Track Custom Events
export const trackEvent = (category: string, action: string, label?: string) => {
    const measurementId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
    if (measurementId) {
        ReactGA.event({
            category,
            action,
            label,
        });
    }
};

// Helper for 'Begin Checkout' e.g. Pricing Page
export const trackBeginCheckout = (productName: string, value?: number) => {
    ReactGA.event({
        category: "Ecommerce",
        action: "Begin Checkout",
        label: productName,
        value: value
    });
};
