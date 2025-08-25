// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import BusinessSection from "./components/BusinessSection";
import NewsSection from "./components/NewsSection";
import NewsDetail from "./components/NewsDetail"; // Impor komponen baru
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

// Komponen untuk halaman homepage penuh
function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="business">
          <BusinessSection />
        </section>
        <section id="news">
          <NewsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  );
}

// Komponen untuk halaman detail berita
function NewsDetailPage() {
  return (
    <>
      <Header />
      <main>
        <NewsDetail />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Route untuk halaman homepage */}
        <Route path="/" element={<HomePage />} />
        {/* Route untuk halaman detail berita */}
        <Route path="/news/:id" element={<NewsDetailPage />} />
      </Routes>
    </Router>
  );
}