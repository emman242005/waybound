"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/track", label: "Tracking" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass-nav py-3 shadow-lg shadow-navy-deep/20" : "bg-navy-deep/60 backdrop-blur-sm py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Waybound" width={34} height={34} className="rounded-md" />
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Waybound
          </span>
        </Link>

        <nav className="hidden items-center gap-9 text-sm font-medium text-white/75 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/track"
          className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep transition-transform hover:scale-[1.03] md:block"
        >
          Track Shipment
        </Link>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="glass-nav overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/track"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-gold px-5 py-2.5 text-center text-sm font-semibold text-navy-deep"
              >
                Track Shipment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}