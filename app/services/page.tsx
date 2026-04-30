"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Code2,
  Server,
  Layers,
  Globe,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Briefcase,
  Zap,
} from "lucide-react";

// DATA SERVICES
const services = [
  {
    id: 1,
    icon: <Code2 size={24} />,
    title: {
      EN: "Full-Stack Web Development",
      ID: "Pengembangan Web Full-Stack",
    },
    desc: {
      EN: "End-to-end web applications built with modern frameworks for optimal performance.",
      ID: "Aplikasi web menyeluruh yang dibangun dengan framework modern untuk performa optimal.",
    },
    features: [
      "ReactJS & Tailwind",
      "Responsive Interfaces",
      "Seamless Integration",
    ],
    color: "text-blue-500",
  },
  {
    id: 2,
    icon: <Globe size={24} />,
    title: {
      EN: "Branding & Profile Websites",
      ID: "Website Profil & Branding",
    },
    desc: {
      EN: "Professional personal portfolios, school profiles, and company landing pages.",
      ID: "Portofolio profesional, website profil sekolah, dan landing page perusahaan.",
    },
    features: ["SEO Friendly", "Fast Loading", "Modern Animations"],
    color: "text-orange-500",
  },
  {
    id: 3,
    icon: <Layers size={24} />,
    title: { EN: "Custom Management Systems", ID: "Sistem Manajemen Kustom" },
    desc: {
      EN: "Tailored digital workflows for administration, education, and healthcare sectors.",
      ID: "Alur kerja digital khusus untuk sektor administrasi, pendidikan, dan kesehatan.",
    },
    features: [
      "Process Automation",
      "Secure Data Handling",
      "Scalable Architecture",
    ],
    color: "text-purple-500",
  },
  {
    id: 4,
    icon: <Server size={24} />,
    title: { EN: "Backend & API Architecture", ID: "Arsitektur Backend & API" },
    desc: {
      EN: "Robust server-side logic, secure routing, and efficient database management.",
      ID: "Logika server yang tangguh, perutean aman, dan manajemen database yang efisien.",
    },
    features: ["Laravel Framework", "MySQL Optimization", "RESTful APIs"],
    color: "text-emerald-500",
  },
];

// --- HOOK UNTUK SCROLL ANIMATION ---
function useScrollReveal(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export default function ServicesPage() {
  const { lang } = useLanguage();
  const [isPageReady, setIsPageReady] = useState(false); // State untuk sinkronisasi loading
  const { ref: gridRef, isVisible: isGridVisible } = useScrollReveal(0.05);
  const { ref: pricingRef, isVisible: isPricingVisible } = useScrollReveal(0.1);

  useEffect(() => {
    // Menunggu 1.6 detik (durasi loading logo + sedikit jeda memudar)
    // baru memicu animasi konten halaman
    const timer = setTimeout(() => {
      setIsPageReady(true);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 bg-light-bg dark:bg-navy-900 px-4 sm:px-6 transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* =========================================
           1. HEADER SECTION (Hanya muncul jika isPageReady true)
           ========================================= */}
        <header className="mb-16 md:mb-24 relative z-10 text-center md:text-left">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-4 sm:mb-6 transition-all duration-700 ease-out ${
              isPageReady
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Zap size={12} />
            {lang === "EN" ? "Technical Solutions" : "Solusi Teknis"}
          </div>

          {/* Title */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-text-main dark:text-text-darkMain tracking-tighter mb-4 sm:mb-6 leading-[1] md:leading-[0.95] transition-all duration-700 ease-out ${
              isPageReady
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            {lang === "EN" ? "Expert Services." : "Layanan Ahli."}{" "}
            <br className="hidden sm:block" />
            <span className="text-accent">Built to Scale.</span>
          </h1>

          {/* Description */}
          <p
            className={`max-w-xl mx-auto md:mx-0 text-base sm:text-lg text-text-muted dark:text-text-darkMuted leading-relaxed transition-all duration-700 ease-out ${
              isPageReady
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {lang === "EN"
              ? "Helping organizations and individuals build fast, secure, and intuitive digital ecosystems."
              : "Membantu organisasi dan individu membangun ekosistem digital yang cepat, aman, dan intuitif."}
          </p>
        </header>

        {/* =========================================
           2. SERVICES GRID SECTION (Triggered by Scroll)
           ========================================= */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-24 md:mb-32 relative z-10"
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group p-6 sm:p-8 bg-white dark:bg-navy-800 border border-light-border dark:border-navy-700 rounded-3xl sm:rounded-[2.5rem] hover:border-accent/50 transition-all duration-700 shadow-sm hover:shadow-xl hover:shadow-accent/5 flex flex-col ease-out ${
                isGridVisible && isPageReady
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-light-bg dark:bg-navy-900 flex items-center justify-center ${service.color} mb-6 sm:mb-8 border border-light-border dark:border-navy-700 group-hover:scale-110 transition-transform`}
              >
                {service.icon}
              </div>
              <h2 className="text-lg sm:text-xl font-black text-text-main dark:text-text-darkMain mb-3 sm:mb-4 uppercase tracking-tight">
                {lang === "EN" ? service.title.EN : service.title.ID}
              </h2>
              <p className="text-xs sm:text-sm text-text-muted dark:text-text-darkMuted leading-relaxed mb-6 sm:mb-8 flex-grow">
                {lang === "EN" ? service.desc.EN : service.desc.ID}
              </p>
              <div className="space-y-2 sm:space-y-3 mb-8 sm:mb-10 border-t border-light-border dark:border-navy-700 pt-5 sm:pt-6">
                {service.features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-center gap-2 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-text-main/70 dark:text-text-darkMain/70"
                  >
                    <CheckCircle2 size={12} className="text-accent" />
                    {feat}
                  </div>
                ))}
              </div>
              <a
                href={`mailto:dimasrizki2004@gmail.com?subject=Interest in ${lang === "EN" ? service.title.EN : service.title.ID}`}
                className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-black text-accent uppercase tracking-widest group-hover:gap-4 transition-all mt-auto w-fit"
              >
                {lang === "EN" ? "Inquire Now" : "Tanya Sekarang"}
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* =========================================
           3. PRICING SECTION
           ========================================= */}
        <div
          ref={pricingRef}
          className={`relative z-10 bg-white dark:bg-navy-800 p-8 sm:p-10 md:p-16 rounded-3xl sm:rounded-[3rem] border border-light-border dark:border-navy-700 shadow-xl transition-all duration-1000 ease-out ${
            isPricingVisible && isPageReady
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                <Sparkles size={12} />
                {lang === "EN" ? "Pricing Strategy" : "Strategi Harga"}
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-text-main dark:text-text-darkMain tracking-tighter mb-4 leading-tight">
                {lang === "EN" ? "Investment Plans." : "Rencana Investasi."}
              </h3>
              <p className="text-xs sm:text-sm text-text-muted dark:text-text-darkMuted leading-relaxed max-w-md mx-auto lg:mx-0">
                {lang === "EN"
                  ? "Flexible pricing based on project complexity."
                  : "Harga fleksibel sesuai kompleksitas proyek."}
              </p>
            </div>

            <div className="p-8 sm:p-10 bg-light-bg dark:bg-navy-900 rounded-3xl border border-light-border dark:border-navy-700 shadow-inner flex flex-col justify-between">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-text-main dark:text-text-darkMain mb-6">
                <span className="text-base sm:text-lg font-medium opacity-60 block mb-2">
                  {lang === "EN" ? "Starts from" : "Mulai dari"}
                </span>
                {lang === "EN" ? "IDR 1.5 Million" : "Rp 1,5 Juta"}
              </div>
              <a
                href="mailto:dimasrizki2004@gmail.com?subject=Project Quote Inquiry"
                className="block text-center py-4 bg-accent text-white font-black text-[10px] tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all shadow-md shadow-accent/20"
              >
                {lang === "EN" ? "REQUEST A QUOTE" : "MINTA PENAWARAN"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
