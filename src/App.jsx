import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import BusinessSection from "./components/BusinessSection";
import NewsSection from "./components/NewsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <BusinessSection />
        <NewsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
