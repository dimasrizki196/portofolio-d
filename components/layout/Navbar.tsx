"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { Briefcase, Settings2, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const pathname = usePathname();
  const settingsRef = useRef<HTMLDivElement>(null);

  // Menutup dropdown settings saat klik di luar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setShowSettings(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header
      className={`fixed top-4 sm:top-6 left-1/2 w-[calc(100%-24px)] sm:w-[calc(100%-48px)] max-w-6xl z-50 bg-light-surface/80 dark:bg-navy-800/80 backdrop-blur-md border border-light-border dark:border-navy-700 shadow-lg transition-all duration-300 animate-nav-enter ${
        isOpen ? "rounded-3xl" : "rounded-full"
      }`}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 h-16 sm:h-18">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12">
            <Image
              src="/images/logo-light.png"
              alt="Dimas.dev Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-lg sm:text-2xl font-black tracking-tighter text-navy-900 dark:text-white">
            dr<span className="text-accent">.dev</span>
          </span>
        </Link>

        {/* NAV MENU (Desktop & Large Tablet) */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[12px] font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all ${
                  isActive
                    ? "bg-accent text-white shadow-md"
                    : "text-text-muted dark:text-text-darkMuted hover:text-accent hover:bg-accent/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* ACTIONS AREA */}
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
          {/* SETTINGS DROPDOWN (Language & Theme) - Hidden on very small mobile */}
          <div className="relative hidden sm:block" ref={settingsRef}>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className={`p-2.5 rounded-full border transition-all ${
                showSettings
                  ? "bg-accent/10 border-accent text-accent"
                  : "border-light-border dark:border-navy-700 text-text-muted hover:border-accent/50"
              }`}
            >
              <Settings2 size={18} />
            </button>

            {showSettings && (
              <div className="absolute right-0 mt-3 w-48 p-2 bg-light-surface dark:bg-navy-800 border border-light-border dark:border-navy-700 rounded-2xl shadow-xl animate-in fade-in zoom-in duration-200">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between p-2 rounded-xl hover:bg-light-bg dark:hover:bg-navy-700 transition-colors">
                    <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">
                      Appearance
                    </span>
                    <ThemeToggle />
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl hover:bg-light-bg dark:hover:bg-navy-700 transition-colors">
                    <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">
                      Language
                    </span>
                    <LanguageToggle />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* HIRE ME BUTTON (Responsive sizing) */}
          <Link
            href="mailto:hello@dimas.dev"
            className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 bg-text-main dark:bg-white text-white dark:text-navy-900 text-[10px] font-black tracking-[0.2em] rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            <Briefcase size={14} className="hidden sm:block" />
            HIRE ME
          </Link>

          {/* MOBILE HAMBURGER TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-main dark:text-text-darkMain focus:outline-none transition-transform"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="animate-in spin-in-90 duration-200" />
            ) : (
              <Menu size={24} className="animate-in fade-in duration-200" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU CONTENT */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[600px] opacity-100 pb-6 pt-2 px-6"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 border-t border-light-border dark:border-navy-700 pt-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-3 px-4 rounded-xl text-base sm:text-lg font-black uppercase tracking-tighter transition-colors ${
                  isActive
                    ? "bg-accent/10 text-accent"
                    : "text-text-main dark:text-text-darkMain hover:text-accent hover:bg-light-bg dark:hover:bg-navy-900"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Mobile Settings Area */}
          <div className="mt-4 sm:hidden flex items-center justify-between p-4 bg-light-bg dark:bg-navy-900 rounded-2xl border border-light-border/50 dark:border-navy-700/50">
            <div className="flex gap-4">
              <ThemeToggle />
              <LanguageToggle />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-accent">
              Preferences
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
