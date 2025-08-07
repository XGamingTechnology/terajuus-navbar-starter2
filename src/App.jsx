import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import BusinessSection from "./components/BusinessSection";
import NewsSection from "./components/NewsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

// Komponen ini akan mengatur scroll ke atas setiap kali route berubah
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke posisi paling atas (0,0)
  }, [pathname]); // Efek ini dijalankan setiap kali pathname (URL) berubah

  return null; // Komponen ini tidak merender apa pun
}
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/business" element={<BusinessSection />} />
            <Route path="/news" element={<NewsSection />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;