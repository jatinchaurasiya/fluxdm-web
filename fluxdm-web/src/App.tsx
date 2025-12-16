import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import './i18n';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
