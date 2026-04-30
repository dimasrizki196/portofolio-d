"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, Award, Terminal } from "lucide-react";

// --- HOOK UNTUK SCROLL ANIMATION ---
function useScrollReveal(threshold = 0.15) {
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

export default function AboutPage() {
  const { lang } = useLanguage();
  const [isPageReady, setIsPageReady] = useState(false); // State sinkronisasi loading

  // Ref untuk memantau kapan section bawah masuk layar
  const { ref: pillarsRef, isVisible: isPillarsVisible } = useScrollReveal();
  const { ref: factsRef, isVisible: isFactsVisible } = useScrollReveal();

  useEffect(() => {
    // Sinkronisasi dengan durasi loading logo (1.5s) + jeda transisi
    const timer = setTimeout(() => {
      setIsPageReady(true);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 bg-light-bg dark:bg-navy-900 px-4 sm:px-6 transition-colors duration-300 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* === SECTION 1: PERSONAL STORY (SYNCED ON-LOAD) === */}
        <header className="mb-16 sm:mb-20">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-text-main dark:text-text-darkMain tracking-tighter mb-6 sm:mb-8 leading-tight transition-all duration-1000 ease-out ${
              isPageReady
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {lang === "EN" ? "Building the future, " : "Membangun masa depan, "}
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-500">
              one line at a time.
            </span>
          </h1>

          <div className="space-y-5 sm:space-y-6">
            <p
              className={`text-base sm:text-lg text-text-muted dark:text-text-darkMuted leading-relaxed transition-all duration-700 ease-out ${
                isPageReady
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {lang === "EN"
                ? "Hi, I'm Dimas Rizki Prasetyo. A Full-Stack Developer focused on building scalable web applications, robust backend architectures, and intuitive user interfaces."
                : "Halo, saya Dimas Rizki Prasetyo. Seorang Full-Stack Developer yang berfokus pada pengembangan aplikasi web skalabel, arsitektur backend yang tangguh, dan antarmuka pengguna yang intuitif."}
            </p>
            <p
              className={`text-base sm:text-lg text-text-muted dark:text-text-darkMuted leading-relaxed transition-all duration-700 ease-out ${
                isPageReady
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              {lang === "EN"
                ? "As an Informatics student at Universitas Muhammadiyah Surakarta (UMS), I have built a strong foundation in software engineering and system architecture."
                : "Sebagai mahasiswa program studi S1 Teknik Informatika di Universitas Muhammadiyah Surakarta (UMS), saya telah membangun fondasi yang kuat dalam rekayasa perangkat lunak dan arsitektur sistem."}
            </p>
            <p
              className={`text-base sm:text-lg text-text-muted dark:text-text-darkMuted leading-relaxed transition-all duration-700 ease-out ${
                isPageReady
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              {lang === "EN"
                ? "Working as a freelance developer, I am accustomed to handling projects end-to-end, from conceptualizing databases to crafting responsive frontends."
                : "Dalam peran saya sebagai pengembang web lepas, saya terbiasa menangani proyek secara end-to-end, mulai dari perancangan arsitektur database hingga integrasi frontend yang responsif."}
            </p>
          </div>
        </header>

        {/* === SECTION 2: THE HYBRID PILLARS (ON-SCROLL) === */}
        <div
          ref={pillarsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20"
        >
          {/* Card 1 */}
          <div
            className={`p-6 sm:p-8 bg-white dark:bg-navy-800 border border-light-border dark:border-navy-700 rounded-3xl hover:border-accent/40 transition-all duration-700 ease-out shadow-sm hover:shadow-xl hover:shadow-accent/5 ${
              isPillarsVisible && isPageReady
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <BookOpen className="text-accent mb-4 w-6 h-6 sm:w-8 sm:h-8" />
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-widest mb-3 sm:mb-4 text-text-main dark:text-text-darkMain">
              {lang === "EN" ? "System Architecture" : "Arsitektur Sistem"}
            </h3>
            <p className="text-sm text-text-muted dark:text-text-darkMuted leading-relaxed">
              {lang === "EN"
                ? "Specializing in comprehensive digital ecosystems, from laboratory management to complex school administration."
                : "Berfokus pada ekosistem digital komprehensif, mulai dari manajemen laboratorium hingga administrasi sekolah."}
            </p>
          </div>

          {/* Card 2 */}
          <div
            className={`p-6 sm:p-8 bg-white dark:bg-navy-800 border border-light-border dark:border-navy-700 rounded-3xl hover:border-accent/40 transition-all duration-700 ease-out shadow-sm hover:shadow-xl hover:shadow-accent/5 ${
              isPillarsVisible && isPageReady
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <Award className="text-accent mb-4 w-6 h-6 sm:w-8 sm:h-8" />
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-widest mb-3 sm:mb-4 text-text-main dark:text-text-darkMain">
              {lang === "EN"
                ? "Communication & Leadership"
                : "Komunikasi & Kepemimpinan"}
            </h3>
            <p className="text-sm text-text-muted dark:text-text-darkMuted leading-relaxed">
              {lang === "EN"
                ? "Active involvement in organizational leadership has equipped me with the ability to bridge technical logic and human needs."
                : "Keterlibatan aktif dalam kepemimpinan organisasi membekali saya dengan kemampuan untuk menjembatani logika teknis dengan kebutuhan manusia."}
            </p>
          </div>
        </div>

        {/* === SECTION 3: QUICK FACTS (ON-SCROLL) === */}
        <div
          ref={factsRef}
          className={`border-t border-light-border dark:border-navy-700 pt-12 sm:pt-16 transition-all duration-700 ease-out ${
            isFactsVisible && isPageReady
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-lg sm:text-xl font-black uppercase tracking-widest mb-8 sm:mb-10 flex items-center gap-3 text-text-main dark:text-text-darkMain">
            <Terminal size={20} className="text-accent w-5 h-5 sm:w-6 sm:h-6" />
            {lang === "EN" ? "Beyond the screen" : "Di luar layar"}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { label: "Location", val: "Surakarta, ID" },
              { label: { EN: "Interests", ID: "Minat" }, val: "Traveling" },
              { label: "Core Stack", val: "Laravel / ReactJS" },
              {
                label: "Status",
                val: { EN: "Available for Work", ID: "Tersedia untuk Bekerja" },
              },
            ].map((fact, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-out ${
                  isFactsVisible && isPageReady
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-6"
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="text-[9px] sm:text-[10px] font-black uppercase text-accent mb-1 sm:mb-2 tracking-wider">
                  {typeof fact.label === "string"
                    ? fact.label
                    : fact.label[lang]}
                </div>
                <div className="text-xs sm:text-sm font-bold text-text-main dark:text-text-darkMain">
                  {typeof fact.val === "string" ? fact.val : fact.val[lang]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
