"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#workshops", label: "Workshops" },
  { href: "#teachers", label: "Teachers" },
  { href: "#accommodation", label: "Alojamento" },
  { href: "#testimonials", label: "Testemunhos" },
  { href: "#location", label: "Localização" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-forest/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo / Wordmark */}
          <Link
            href="/"
            className="font-display text-sm tracking-wide uppercase text-charcoal"
          >
            — ALDEIA DJEMBE CAMP
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.25em] text-charcoal hover:text-lime transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#register"
              className="inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-[0.25em] bg-lime text-charcoal rounded-full hover:bg-charcoal hover:text-white transition-colors duration-300"
            >
              Inscreve-te
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-charcoal/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-[0.25em] text-charcoal hover:text-lime transition-colors duration-300 py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-[0.25em] bg-lime text-charcoal rounded-full hover:bg-charcoal hover:text-white transition-colors duration-300 mt-2"
              >
                Inscreve-te
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
