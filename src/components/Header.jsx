"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "hero" },
  { name: "About Us", href: "about" },
  { name: "The Business", href: "business" },
  { name: "News", href: "news" },
  { name: "Contact Us", href: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const ticking = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    lastScrollY.current = window.scrollY || 0;

    const handleScroll = () => {
      const currentY = window.scrollY || 0;
      const delta = currentY - lastScrollY.current;

      if (Math.abs(delta) < 5) {
        lastScrollY.current = currentY;
        return;
      }

      if (currentY <= 0) {
        setShowHeader(true);
      } else if (delta > 0) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = currentY;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleTriggerClick = () => {
    setShowHeader(true);
    if (typeof window !== "undefined") lastScrollY.current = window.scrollY || 0;
  };

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      {!showHeader && (
        <button
          onClick={handleTriggerClick}
          className="fixed top-4 right-4 z-50 p-2 bg-white rounded-full shadow-md border hover:shadow-lg transition"
          aria-label="Show header"
        >
          <Menu />
        </button>
      )}

      <header
        className={`fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-md z-40 transform transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleScrollTo("hero")}
            className="flex items-center text-xl font-bold tracking-wide text-gray-900 space-x-2"
          >
            <span className="text-blue-800">PT</span>
            <span className="relative">
              <span className="text-gray-800">TUS</span>
              <span className="absolute -right-5 top-1/2 transform -translate-y-1/2 h-8 w-[3px] bg-blue-900 opacity-60"></span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScrollTo(link.href)}
                className="font-medium relative group px-3 py-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-blue-700"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((s) => !s)}
            className="md:hidden text-gray-900"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden bg-white border-t px-6 py-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScrollTo(link.href)}
                className="block w-full text-left py-3 px-4 rounded-lg mb-2 text-gray-700"
              >
                {link.name}
              </button>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}