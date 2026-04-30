"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  Instagram,
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  MapPin,
} from "lucide-react";

// --- HOOK UNTUK SCROLL ANIMATION ---
function useScrollReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }, // Terpicu saat 15% dari tinggi footer terlihat
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export default function Footer() {
  const { lang } = useLanguage();
  const { ref: footerRef, isVisible } = useScrollReveal();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: { EN: "Home", ID: "Beranda" }, path: "/" },
    { name: { EN: "About", ID: "Tentang" }, path: "/about" },
    { name: { EN: "Experience", ID: "Pengalaman" }, path: "/experience" },
    { name: { EN: "Projects", ID: "Proyek" }, path: "/projects" },
    { name: { EN: "Services", ID: "Layanan" }, path: "/services" },
    { name: { EN: "Blog", ID: "Blog" }, path: "/blog" },
  ];

  return (
    <footer
      ref={footerRef}
      className="w-full bg-light-surface/40 dark:bg-navy-800/40 backdrop-blur-md border-t border-light-border dark:border-navy-700 pt-16 pb-8 transition-colors duration-300 overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20">
        {/* === MAIN GRID CONTENT === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-14 lg:gap-12 mb-16">
          {/* Bagian 1: Identitas Digital */}
          <div
            className={`space-y-6 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="flex items-center gap-3">
              {/* LOGO CUSTOM DIMAS.DEV */}
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 shrink-0">
                <Image
                  src="/images/logo-light.png"
                  alt="Dimas.dev Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl font-black tracking-tighter text-text-main dark:text-text-darkMain">
                dr<span className="text-accent">.dev</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-text-muted dark:text-text-darkMuted leading-relaxed max-w-sm">
              {lang === "EN"
                ? "Focused on building scalable, high-performance web ecosystems. Bridging design aesthetics with logical precision."
                : "Fokus pada pengembangan ekosistem web yang skalabel dan performa tinggi. Menghubungkan estetika desain dengan ketajaman logika."}
            </p>
            <div className="flex gap-4">
              {[
                {
                  icon: <Instagram size={20} />,
                  href: "https://instagram.com/_dim.rp",
                },
                {
                  icon: <Github size={20} />,
                  href: "https://github.com/dimasrizki196",
                },
                {
                  icon: <Linkedin size={20} />,
                  href: "https://linkedin.com/in/dimasrizki84",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent hover:-translate-y-1 transition-all duration-300 p-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Bagian 2: Navigasi Cepat */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-accent mb-6 sm:mb-8 uppercase">
              {lang === "EN" ? "Quick Links" : "Navigasi Cepat"}
            </h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-4 sm:gap-x-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-xs sm:text-sm font-medium text-text-muted hover:text-accent dark:hover:text-accent transition-colors flex items-center gap-2 group w-fit"
                >
                  <span className="w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-3"></span>
                  {lang === "EN" ? item.name.EN : item.name.ID}
                </Link>
              ))}
            </div>
          </div>

          {/* Bagian 3: Lokasi & Waktu */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <h3 className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-accent mb-6 sm:mb-8 uppercase">
              {lang === "EN" ? "Location" : "Lokasi"}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-text-muted dark:text-text-darkMuted">
                <MapPin size={18} className="text-accent shrink-0" />
                <span className="text-xs sm:text-sm font-medium">
                  Surakarta, Indonesia
                </span>
              </div>
              <p className="text-[9px] sm:text-[10px] text-text-muted uppercase tracking-[0.15em] sm:tracking-widest font-bold opacity-60">
                GMT+7 — West Indonesia Time
              </p>
            </div>
          </div>

          {/* Bagian 4: Status Kerja & Kontak */}
          <div
            className={`flex flex-col lg:items-end lg:text-right space-y-6 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="w-full lg:w-auto flex flex-col lg:items-end">
              <h3 className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-accent mb-3 sm:mb-2 uppercase">
                {lang === "EN" ? "Availability" : "Ketersediaan"}
              </h3>
              <div className="flex items-center gap-3 px-4 py-2 bg-green-500/5 border border-green-500/20 rounded-full w-fit">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-black text-green-600 dark:text-green-400 uppercase tracking-tighter">
                  {lang === "EN" ? "Open for Projects" : "Terbuka untuk Proyek"}
                </span>
              </div>
            </div>

            <a
              href="mailto:dimasrizki2004@gmail.com"
              className="group relative px-6 sm:px-8 py-3.5 sm:py-4 bg-accent text-white font-black text-[9px] sm:text-[10px] tracking-[0.2em] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 inline-block w-fit"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail size={14} className="shrink-0" />
                {lang === "EN" ? "SEND A MESSAGE" : "KIRIM PESAN"}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* === GARIS BAWAH & INFO SISTEM === */}
        <div
          className={`pt-8 border-t border-light-border dark:border-navy-700/50 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-[9px] sm:text-[10px] font-bold text-text-muted tracking-[0.1em] text-center md:text-left">
            <span>© {currentYear} Dimas Rizki Prasetyo</span>
            <span className="hidden sm:block opacity-30">|</span>
            <span className="uppercase text-accent/60">
              V.2.0.0 — Crafted with Passion
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 sm:p-0 rounded-full sm:rounded-none bg-light-surface/50 sm:bg-transparent dark:bg-navy-800/50 sm:dark:bg-transparent border border-light-border sm:border-transparent dark:border-navy-700 sm:dark:border-transparent text-[9px] sm:text-[10px] font-bold text-accent uppercase tracking-widest hover:opacity-70 transition-all group"
          >
            {lang === "EN" ? "Jump to Top" : "Kembali ke Atas"}
            <ArrowUp
              size={14}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
