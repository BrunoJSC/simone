"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Header() {
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
        <div className="flex h-20 items-center justify-center">
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
        </div>
      </div>
    </header>
  );
}
