import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import ContactSales from "@/pages/ContactSales";
import Mission from "@/pages/Mission";
import Careers from "@/pages/Careers";
import DataDeletion from "@/pages/DataDeletion";
import './i18n';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/contact-sales" element={<ContactSales />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/data-deletion" element={<DataDeletion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
