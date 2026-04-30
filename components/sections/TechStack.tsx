"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

// --- HOOK UNTUK SCROLL ANIMATION PADA HEADER ---
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
      { threshold: 0.2 }, // Animasi judul terpicu saat 20% area terlihat
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

const techs = [
  { name: "Laravel", color: "FF2D20" },
  { name: "React", color: "61DAFB" },
  { name: "Next.js", color: "000000", invertDark: true },
  { name: "TypeScript", color: "3178C6" },
  { name: "Tailwind CSS", color: "06B6D4" },
  { name: "MySQL", color: "4479A1" },
  { name: "Supabase", color: "3ECF8E" },
  { name: "Vercel", color: "000000", invertDark: true },
  { name: "PHP", color: "777BB4" },
  { name: "JavaScript", color: "F7DF1E" },
];

// Gandakan array agar pasti menutupi layar desktop yang sangat lebar sekalipun (Ultrawide)
const trackData = [...techs, ...techs];

export default function TechStack() {
  const { lang } = useLanguage();
  const { ref: headerRef, isVisible } = useScrollReveal();

  return (
    <section className="w-full py-16 sm:py-24 relative z-10 overflow-hidden">
      {/* STYLE: Animasi murni menggeser -100% dari dirinya sendiri */}
      <style>
        {`
          @keyframes scroll-x {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
          .animate-scroll-x {
            animation: scroll-x 35s linear infinite;
            will-change: transform;
          }
        `}
      </style>

      {/* --- HEADER ANIMASI --- */}
      <div
        ref={headerRef}
        className={`max-w-6xl mx-auto px-4 sm:px-6 mb-10 sm:mb-12 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-accent text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-3 sm:mb-4 flex items-center gap-3">
          <span className="w-6 sm:w-8 h-[2px] bg-accent"></span>
          {lang === "EN" ? "Capabilities" : "Kapabilitas"}
        </h2>
        <h3 className="text-3xl sm:text-4xl font-black text-text-main dark:text-text-darkMain">
          {lang === "EN" ? "Core Technologies." : "Teknologi Inti."}
        </h3>
      </div>

      {/* CONTAINER UTAMA MARQUEE */}
      <div className="relative flex overflow-hidden border-y border-light-border dark:border-navy-700 py-12 sm:py-16 bg-light-surface/20 dark:bg-navy-800/20 backdrop-blur-sm group">
        {/* === TRACK 1 === */}
        <div className="flex animate-scroll-x group-hover:[animation-play-state:paused]">
          {trackData.map((tech, idx) => (
            // Gunakan fixed width (w-[120px] untuk hp kecil, sm:w-[140px], md:w-[180px])
            <div
              key={`t1-${idx}`}
              className="w-[120px] sm:w-[140px] md:w-[180px] shrink-0 flex justify-center"
            >
              <div className="relative flex flex-col items-center justify-center group/icon h-20 cursor-pointer">
                {/* LOGO dengan Transform GPU */}
                <div className="transition-all duration-500 -translate-y-3 sm:-translate-y-4 md:translate-y-0 md:group-hover/icon:-translate-y-4">
                  <img
                    src={`https://cdn.simpleicons.org/${tech.name.replace(/\s+/g, "").toLowerCase()}/${tech.color}`}
                    alt={tech.name}
                    loading="lazy"
                    className={`h-10 w-10 sm:h-12 sm:w-12 object-contain opacity-100 md:opacity-40 md:group-hover/icon:opacity-100 transition-all duration-300 filter grayscale-0 md:grayscale md:group-hover/icon:grayscale-0 md:group-hover/icon:scale-110 transform-gpu style-[backface-visibility:hidden] ${
                      tech.invertDark ? "dark:invert" : ""
                    }`}
                  />
                </div>

                <span className="absolute bottom-0 text-[9px] sm:text-[10px] font-black text-accent uppercase tracking-[0.1em] sm:tracking-[0.2em] pointer-events-none whitespace-nowrap transition-all duration-300 opacity-100 translate-y-0 md:opacity-0 md:translate-y-2 md:group-hover/icon:opacity-100 md:group-hover/icon:translate-y-0">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* === TRACK 2 (DUPLIKAT) === */}
        <div
          className="flex animate-scroll-x group-hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          {trackData.map((tech, idx) => (
            <div
              key={`t2-${idx}`}
              className="w-[120px] sm:w-[140px] md:w-[180px] shrink-0 flex justify-center"
            >
              <div className="relative flex flex-col items-center justify-center group/icon h-20 cursor-pointer">
                <div className="transition-all duration-500 -translate-y-3 sm:-translate-y-4 md:translate-y-0 md:group-hover/icon:-translate-y-4">
                  <img
                    src={`https://cdn.simpleicons.org/${tech.name.replace(/\s+/g, "").toLowerCase()}/${tech.color}`}
                    alt={tech.name}
                    loading="lazy"
                    className={`h-10 w-10 sm:h-12 sm:w-12 object-contain opacity-100 md:opacity-40 md:group-hover/icon:opacity-100 transition-all duration-300 filter grayscale-0 md:grayscale md:group-hover/icon:grayscale-0 md:group-hover/icon:scale-110 transform-gpu style-[backface-visibility:hidden] ${
                      tech.invertDark ? "dark:invert" : ""
                    }`}
                  />
                </div>
                <span className="absolute bottom-0 text-[9px] sm:text-[10px] font-black text-accent uppercase tracking-[0.1em] sm:tracking-[0.2em] pointer-events-none whitespace-nowrap transition-all duration-300 opacity-100 translate-y-0 md:opacity-0 md:translate-y-2 md:group-hover/icon:opacity-100 md:group-hover/icon:translate-y-0">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Efek Fade Transisi Kiri & Kanan */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 md:w-48 bg-gradient-to-r from-light-bg via-light-bg/80 to-transparent dark:from-navy-900 dark:via-navy-900/80 z-20"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 md:w-48 bg-gradient-to-l from-light-bg via-light-bg/80 to-transparent dark:from-navy-900 dark:via-navy-900/80 z-20"></div>
      </div>
    </section>
  );
}
