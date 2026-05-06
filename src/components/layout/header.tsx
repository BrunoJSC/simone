"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Nossa História", href: "/historia" },
  { label: "Galeria", href: "/galeria" },
  { label: "Na Mídia", href: "/midia" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out bg-white`}
      
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group relative z-10">
            <span 
              className="text-xl font-light tracking-[0.25em] uppercase transition-opacity duration-300 group-hover:opacity-60"
              style={{ color: "#1a1a1a" }}
            >
              Mercado
            </span>
            <span 
              className="ml-2 text-xl font-semibold tracking-[0.15em] uppercase transition-opacity duration-300 group-hover:opacity-60"
              style={{ color: "#1a1a1a" }}
            >
              Babilônia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-[13px] font-medium uppercase tracking-[0.12em] transition-colors duration-300"
                style={{ color: "rgba(26, 26, 26, 0.7)" }}
              >
                {link.label}
                <span 
                  className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 ease-out group-hover:w-full"
                  style={{ backgroundColor: "#1a1a1a" }}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            <span
              className={`h-px w-5 transition-all duration-300 ease-out ${
                isMenuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
              style={{ backgroundColor: "#1a1a1a" }}
            />
            <span
              className={`h-px w-5 transition-all duration-300 ease-out ${
                isMenuOpen ? "opacity-0" : ""
              }`}
              style={{ backgroundColor: "#1a1a1a" }}
            />
            <span
              className={`h-px w-5 transition-all duration-300 ease-out ${
                isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
              style={{ backgroundColor: "#1a1a1a" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 transition-all duration-500 ease-out md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "#ffffff" }}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl font-light uppercase tracking-[0.2em] transition-all duration-500 hover:tracking-[0.3em] ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                color: "rgba(26, 26, 26, 0.8)",
                transitionDelay: isMenuOpen ? `${100 + i * 60}ms` : "0ms",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}