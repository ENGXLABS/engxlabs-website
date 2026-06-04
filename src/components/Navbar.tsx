"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/Logo";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Services", href: "#services" },
  { label: "Method", href: "#method" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/80 backdrop-blur-2xl border-b border-white/[0.07] shadow-[0_1px_0_0_rgba(255,255,255,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between gap-8">

        {/* Logo */}
        <a href="#" className="flex-shrink-0 flex items-center" aria-label="ENGXLABS home">
          <Logo markSize={18} textSize="text-[17px]" variant="blue" />
        </a>

        {/* Desktop nav — centred */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-text-secondary hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-200 group"
            >
              {link.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/5 h-px bg-accent-blue/60 transition-all duration-300 rounded-full" />
            </a>
          ))}
        </nav>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <a
            href="mailto:hello@engxlabs.com"
            className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-200"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white overflow-hidden group"
            style={{
              background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
              boxShadow: "0 0 0 1px rgba(59,130,246,0.4), 0 4px 12px rgba(59,130,246,0.25)",
            }}
          >
            <span className="relative z-10 whitespace-nowrap">Book a Call</span>
            <svg className="relative z-10 w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex-shrink-0 w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] text-text-secondary hover:text-white hover:border-white/[0.15] transition-all duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-4 h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-4 h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-4 h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#0D0D0D]/98 backdrop-blur-2xl border-b border-white/[0.06]"
          >
            <nav className="flex flex-col px-6 py-5 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-text-secondary hover:text-white hover:bg-white/[0.04] px-4 py-3 rounded-xl transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <div className="h-px bg-white/[0.06] my-2" />
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-center py-3 px-4 rounded-xl text-sm font-semibold text-white"
                style={{
                  background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
                  boxShadow: "0 4px 12px rgba(59,130,246,0.3)",
                }}
              >
                Book a Call ↗
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
