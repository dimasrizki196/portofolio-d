"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const content = {
  EN: {
    badge: "Full-Stack Web Developer",
    greeting: "Hi, I'm",
    desc: "I specialize in building scalable web applications, focusing on robust backend architectures and intuitive frontend experiences. From complex administration platforms to dynamic user interfaces, I transform technical challenges into efficient digital solutions.",
    btnWork: "View My Work",
  },
  ID: {
    badge: "Full-Stack Web Developer",
    greeting: "Halo, Saya",
    desc: "Saya berfokus pada pengembangan aplikasi web yang skalabel, dengan keahlian di arsitektur backend yang tangguh dan antarmuka frontend yang intuitif. Dari platform administrasi kompleks hingga antarmuka dinamis, saya mengubah tantangan teknis menjadi solusi digital yang efisien.",
    btnWork: "Lihat Karya Saya",
  },
};

export default function Hero() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center w-full px-4 sm:px-6 mb-6 md:mb-12">
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center pt-10">
        {/* === BAGIAN KIRI: TEKS === */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          <div className="inline-block px-5 py-2 mb-6 rounded-full bg-light-surface/80 dark:bg-navy-800/80 backdrop-blur-md text-accent dark:text-accent-dark text-[10px] font-black uppercase tracking-widest shadow-sm border border-light-border dark:border-navy-700 transition-all">
            {t.badge}
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-text-main dark:text-text-darkMain mb-6 transition-all leading-[1.1]">
            {t.greeting} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-text-main to-text-main/30 dark:from-white dark:to-white/20 drop-shadow-sm">
              Dimas Rizki Prasetyo
            </span>
            <span className="text-accent">.</span>
          </h1>

          <p className="max-w-lg text-base md:text-lg text-text-muted dark:text-text-darkMuted mb-10 leading-relaxed transition-all">
            {t.desc}
          </p>

          <div className="flex flex-col w-full sm:w-auto">
            <Link href="/projects" passHref>
              <Button
                variant="primary"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-black tracking-widest text-[10px] uppercase shadow-lg shadow-accent/20 hover:scale-105 transition-transform"
              >
                {t.btnWork} <ArrowRight className="ml-3 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* === BAGIAN KANAN: FOTO === */}
        <div className="flex justify-center items-center order-1 md:order-2 pt-20 md:pt-32 pb-10">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] animate-float">
            {/* 1. Efek Percikan Api Berputar */}
            <div className="absolute inset-[-12px] rounded-full overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.3)] z-0">
              <div
                className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite]"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0%, transparent 60%, #3B82F6 80%, #60A5FA 90%, #FFFFFF 100%)",
                }}
              ></div>
              <div className="absolute inset-[3px] rounded-full bg-light-bg dark:bg-navy-900"></div>
            </div>

            {/* 2. Cahaya Glow Statis */}
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl animate-pulse -z-10"></div>

            {/* 3. Container Foto Profil */}
            <div className="absolute inset-[8px] rounded-full overflow-hidden z-20 group border border-white/10 shadow-2xl bg-light-bg dark:bg-navy-900">
              <Image
                src="/images/profile.jpg"
                alt="Dimas Profile"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 288px, 450px"
                priority
              />
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
