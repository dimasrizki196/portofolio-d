"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Button from "@/components/ui/Button";
import { Mail, Linkedin, Github, Send } from "lucide-react";

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
      { threshold: 0.15 }, // Animasi terpicu saat 15% area box terlihat
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export default function Contact() {
  const { lang } = useLanguage();
  const { ref: boxRef, isVisible } = useScrollReveal();

  const socialLinks = [
    {
      icon: Linkedin,
      url: "https://linkedin.com/in/dimasrizki84",
      name: "LinkedIn",
    },
    {
      icon: Github,
      url: "https://github.com/dimasrizki196",
      name: "GitHub",
    },
    {
      icon: Mail,
      url: "mailto:dimasrizki2004@gmail.com",
      name: "Email",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full py-16 sm:py-24 relative z-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* --- CTA BENTO BOX CONTAINER DENGAN ANIMASI --- */}
        <div
          ref={boxRef}
          className={`bg-light-surface/40 dark:bg-navy-800/40 backdrop-blur-xl border border-light-border dark:border-navy-700 rounded-3xl p-6 sm:p-10 md:p-16 shadow-[0_30px_40px_-20px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_40px_-20px_rgba(0,0,0,0.3)] hover:shadow-[0_40px_50px_-20px_rgba(37,99,235,0.15)] hover:border-accent/40 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* --- KOLOM TEKS (KIRI) --- */}
            <div className="lg:col-span-8 text-center lg:text-left">
              <h2
                className={`text-accent text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-4 sm:mb-5 flex items-center justify-center lg:justify-start gap-3 transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-6"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <span className="w-6 sm:w-8 h-[2px] bg-accent"></span>
                {lang === "EN" ? "Collaborate" : "Kolaborasi"}
              </h2>

              <h3
                className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-text-main dark:text-text-darkMain mb-4 sm:mb-6 leading-tight transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                {lang === "EN"
                  ? "Got an interesting idea? Let's make it real."
                  : "Punya ide proyek menarik? Mari buat jadi nyata."}
              </h3>

              <p
                className={`max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg text-text-muted dark:text-text-darkMuted leading-relaxed mb-8 sm:mb-10 transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                {lang === "EN"
                  ? "Open for Full Stack Web Development opportunities, technical consulting, or just a chat about digital innovations. Reach out to me today."
                  : "Terbuka untuk peluang Full Stack Web Development, konsultasi teknis, atau sekadar bertukar pikiran tentang inovasi digital. Hubungi saya sekarang."}
              </p>

              {/* Tombol CTA */}
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <a href="mailto:dimasrizki2004@gmail.com?subject=Kolaborasi Proyek">
                  <Button
                    variant="primary"
                    className="w-full sm:w-auto h-12 sm:h-14 text-sm sm:text-lg px-8 hover:scale-105 active:scale-95 transition-transform group"
                  >
                    {lang === "EN"
                      ? "Let's Start a Chat"
                      : "Mari Mulai Mengobrol"}
                    <Send className="ml-3 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </a>
              </div>
            </div>

            {/* --- KOLOM IKON / DETAIL (KANAN) --- */}
            <div
              className={`lg:col-span-4 flex flex-col items-center lg:items-end gap-5 sm:gap-6 border-t lg:border-t-0 lg:border-l border-light-border dark:border-navy-700 pt-8 sm:pt-10 lg:pt-0 lg:pl-10 transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <span className="text-xs sm:text-sm font-bold text-text-muted dark:text-text-darkMuted uppercase tracking-widest mb-1 sm:mb-2">
                {lang === "EN" ? "Connect" : "Terhubung"}
              </span>

              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  // Menambahkan stagger effect khusus untuk masing-masing ikon
                  const iconDelay = 600 + index * 150;

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 sm:p-4 rounded-full bg-light-bg dark:bg-navy-900 border border-light-border dark:border-navy-700 text-text-muted hover:text-accent hover:border-accent hover:shadow-[0_10px_20px_rgba(37,99,235,0.2)] group transition-all duration-500 ease-out ${
                        isVisible
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-50"
                      }`}
                      style={{ transitionDelay: `${iconDelay}ms` }}
                      title={social.name}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
