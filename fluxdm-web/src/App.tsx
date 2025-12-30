import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGA, trackPageView } from '@/lib/analytics';
import { PaymentTracker } from '@/components/PaymentTracker';
import './i18n';

// Lazy load pages for code splitting
const Home = React.lazy(() => import("@/pages/Home"));
const Pricing = React.lazy(() => import("@/pages/Pricing"));
const PrivacyPolicy = React.lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = React.lazy(() => import("@/pages/TermsOfService"));
const ContactSales = React.lazy(() => import("@/pages/ContactSales"));
const Mission = React.lazy(() => import("@/pages/Mission"));
const Careers = React.lazy(() => import("@/pages/Careers"));
const DataDeletion = React.lazy(() => import("@/pages/DataDeletion"));
const Affiliates = React.lazy(() => import("@/pages/Affiliates"));
const BlogIndex = React.lazy(() => import("@/pages/BlogIndex"));
const BlogPost = React.lazy(() => import("@/pages/BlogPost"));
const DownloadSuccess = React.lazy(() => import("@/pages/DownloadSuccess"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

// Component to track page views on route change
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
};

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <PaymentTracker />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/affiliates" element={<Affiliates />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/contact-sales" element={<ContactSales />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
          <Route path="/download-success" element={<DownloadSuccess />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
