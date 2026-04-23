"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { Mail, Briefcase, Settings2, ChevronDown } from "lucide-react";

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
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-6xl z-50 bg-light-surface/80 dark:bg-navy-800/80 backdrop-blur-md border border-light-border dark:border-navy-700 shadow-lg transition-all duration-300 ${
        isOpen ? "rounded-3xl" : "rounded-full"
      }`}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 h-16">
        {/* LOGO */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold tracking-tighter text-text-main dark:text-text-darkMain"
        >
          dr<span className="text-accent">.dev</span>
        </Link>

        {/* NAV MENU (Desktop) */}
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
                    : "text-text-muted dark:text-text-darkMuted hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* ACTIONS AREA */}
        <div className="flex items-center space-x-3">
          {/* SETTINGS DROPDOWN (Language & Theme) */}
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

          {/* HIRE ME BUTTON (Hero CTA) */}
          <Link
            href="mailto:hello@dimas.dev"
            className="flex items-center gap-2 px-6 py-2.5 bg-text-main dark:bg-white text-white dark:text-navy-900 text-[10px] font-black tracking-[0.2em] rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            <Briefcase size={14} className="hidden sm:block" />
            HIRE ME
          </Link>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-main dark:text-text-darkMain focus:outline-none"
          >
            {isOpen ? (
              <Settings2 className="rotate-90 transition-transform" />
            ) : (
              <Settings2 />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen
            ? "max-h-[500px] opacity-100 pb-8 pt-2 px-6"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 border-t border-light-border dark:border-navy-700 pt-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-3 text-lg font-black uppercase tracking-tighter text-text-main dark:text-text-darkMain hover:text-accent"
            >
              {link.name}
            </Link>
          ))}

          <div className="mt-6 flex items-center justify-between p-4 bg-light-bg dark:bg-navy-900 rounded-2xl">
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
