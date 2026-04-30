"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  GraduationCap,
  Briefcase,
  Camera,
  Code,
  Users,
  Cog,
  Layout,
  BookOpen,
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
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// --- DATA: EXPERIENCE (KOLOM KIRI - 3 Proyek) ---
const experienceDataLeft = [
  {
    id: 1,
    year: "Apr 2026 - Present",
    title: { EN: "Freelance Web Developer", ID: "Pengembang Web Lepas" },
    subtitle: "Profile Sekolah",
    desc: {
      EN: "Developing a responsive school profile website featuring interactive UI components and modern backend integration.",
      ID: "Mengembangkan website profil sekolah responsif dengan komponen UI interaktif dan integrasi backend modern.",
    },
    icon: Layout,
  },
  {
    id: 2,
    year: "Nov 2025 - Feb 2026",
    title: { EN: "Informatics Thesis Project", ID: "Proyek Skripsi Informatika" },
    subtitle: "Sistem SPP TK Bina Pratama",
    desc: {
      EN: "Built a comprehensive digital communication and tuition fee management system for kindergarten.",
      ID: "Membangun sistem manajemen pembayaran SPP dan komunikasi digital komprehensif untuk TK.",
    },
    icon: BookOpen,
  },
  {
    id: 3,
    year: "Feb 2025 - May 2025",
    title: { EN: "Backend Developer Intern", ID: "Magang Backend Developer" },
    subtitle: "Diskominfo SP Surakarta",
    desc: {
      EN: "Transformed a GUI-based mail administration system into a modern web application using Laravel.",
      ID: "Mentransformasi sistem administrasi persuratan GUI menjadi aplikasi berbasis web modern menggunakan Laravel.",
    },
    icon: Briefcase,
  },
];

// --- DATA: EXPERIENCE (KOLOM KANAN - 2 Proyek) ---
const experienceDataRight = [
  {
    id: 4,
    year: "Nov 2025 - May 2026",
    title: { EN: "System Developer", ID: "Pengembang Sistem" },
    subtitle: "Lab Fisioterapi UMS",
    desc: {
      EN: "Developed a digital laboratory management system tailored specifically for the Physiotherapy Study Program.",
      ID: "Mengembangkan sistem manajemen laboratorium digital yang disesuaikan khusus untuk Program Studi Fisioterapi.",
    },
    icon: Briefcase,
  },
  {
    id: 5,
    year: "Aug 2025 - Present",
    title: { EN: "Software Engineer", ID: "Software Engineer" },
    subtitle: "AnglePhysio",
    desc: {
      EN: "Developing a health-tech web platform designed for comprehensive posture analysis and physiotherapy assessments.",
      ID: "Mengembangkan platform web health-tech yang dirancang untuk analisis postur dan asesmen fisioterapi komprehensif.",
    },
    icon: Code,
  },
];

// --- DATA: EDUCATION (KOLOM KIRI PADA TAB 2) ---
const educationData = [
  {
    id: 1,
    year: "2022 - 2026",
    title: { EN: "Bachelor of Informatics", ID: "S1 Teknik Informatika" },
    subtitle: "Universitas Muhammadiyah Surakarta",
    desc: {
      EN: "Focused on software engineering, web development, and system architecture.",
      ID: "Fokus pada rekayasa perangkat lunak, pengembangan web, dan arsitektur sistem.",
    },
    icon: GraduationCap,
  },
  {
    id: 2,
    year: "2019 - 2022",
    title: { EN: "Vocational High School", ID: "SMK Teknik Pemesinan" },
    subtitle: "SMK Negeri 2 Surakarta",
    desc: {
      EN: "Built a strong foundation in mechanical logic, precision, and problem-solving.",
      ID: "Membangun fondasi yang kuat dalam logika presisi dan pemecahan masalah sistematis.",
    },
    icon: Cog,
  },
];

// --- DATA: ORGANIZATION (KOLOM KANAN PADA TAB 2) ---
const organizationData = [
  {
    id: 1,
    year: "2023 - 2025",
    title: { EN: "Leadership & Organization", ID: "Kepemimpinan & Organisasi" },
    subtitle: "Ikatan Mahasiswa Muhammadiyah (IMM)",
    desc: {
      EN: "Actively involved in organizational development, communication, and teamwork.",
      ID: "Aktif dalam pengembangan organisasi, komunikasi, dan kerja sama tim.",
    },
    icon: Users,
  },
  {
    id: 2,
    year: "2023 - 2025",
    title: { EN: "Unit Kegiatan Mahasiswa", ID: "Unit Kegiatan Mahasiswa" },
    subtitle: "Fotografi Komunikasi dan Informatika (FINIC)",
    desc: {
      EN: "Managed grand event logistics and showcased visual creativity at Taman Budaya.",
      ID: "Mengelola logistik acara pameran besar dan menampilkan kreativitas visual di Taman Budaya.",
    },
    icon: Camera,
  },
];

// --- KOMPONEN HELPER TIMELINE ---
const TimelineList = ({ data, startDelay = 0, isSectionVisible, lang }: { data: any[]; startDelay?: number; isSectionVisible: boolean; lang: "EN" | "ID" }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isSectionVisible) {
      const timer = setTimeout(() => setAnimate(true), 50);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
    }
  }, [isSectionVisible]);

  return (
    <div className="relative mt-6">
      {/* Garis Vertikal Latar */}
      <div className="absolute left-[19px] sm:left-[19px] md:left-[39px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-accent/50 via-cyan-400/30 to-purple-500/10"></div>

      <div className="space-y-8 sm:space-y-10">
        {data.map((item, index) => {
          const IconComponent = item.icon;
          const baseDelay = startDelay + index * 150;

          return (
            <div
              key={item.id}
              className={`relative pl-14 sm:pl-16 md:pl-24 group transition-all duration-700 ease-out ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${baseDelay}ms` }}
            >
              {/* Lingkaran Ikon */}
              <div className="absolute left-0 sm:left-0 md:left-5 top-1 w-10 h-10 rounded-full bg-light-bg dark:bg-navy-900 border-2 border-accent flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.2)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] group-hover:scale-110 transition-all duration-300 z-10 shrink-0">
                <IconComponent size={18} className="text-accent" />
              </div>

              {/* Kartu Konten */}
              <div className="bg-light-surface/40 dark:bg-navy-800/40 backdrop-blur-md border border-light-border dark:border-navy-700 p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:border-accent/40 transition-colors duration-300 overflow-hidden">
                <div 
                  className={`inline-block px-3 py-1 mb-3 rounded-md bg-accent/10 text-accent text-[10px] font-bold tracking-wider uppercase transition-all duration-700 ease-out ${
                    animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${baseDelay + 150}ms` }}
                >
                  {item.year}
                </div>
                <h4 
                  className={`text-lg sm:text-xl font-bold text-text-main dark:text-text-darkMain mb-1 transition-all duration-700 ease-out ${
                    animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${baseDelay + 250}ms` }}
                >
                  {item.title[lang]}
                </h4>
                <p 
                  className={`text-xs sm:text-sm font-bold text-text-muted dark:text-text-darkMuted mb-3 sm:mb-4 transition-all duration-700 ease-out ${
                    animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${baseDelay + 350}ms` }}
                >
                  {item.subtitle}
                </p>
                <p 
                  className={`text-xs sm:text-sm text-text-muted dark:text-text-darkMuted leading-relaxed transition-all duration-700 ease-out ${
                    animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${baseDelay + 450}ms` }}
                >
                  {item.desc[lang]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// --- KOMPONEN UTAMA EXPERIENCE ---
export default function Experience() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState("experience");
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const tabs = [
    {
      id: "experience",
      label: { EN: "Experience & Projects", ID: "Pengalaman & Proyek" },
      icon: Briefcase,
    },
    {
      id: "edu-org",
      label: { EN: "Education & Organization", ID: "Pendidikan & Organisasi" },
      icon: GraduationCap,
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef} 
      className="w-full py-16 sm:py-24 relative z-10 min-h-[800px] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header Animasi */}
        <div
          className={`mb-10 sm:mb-12 text-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-accent text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-3">
            <span className="w-6 sm:w-8 h-[2px] bg-accent"></span>
            {lang === "EN" ? "Journey" : "Perjalanan"}
            <span className="w-6 sm:w-8 h-[2px] bg-accent"></span>
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-text-main dark:text-text-darkMain">
            {lang === "EN" ? "Path & Background." : "Rekam Jejak."}
          </h3>
        </div>

        {/* Navigation Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-accent text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-105"
                    : "bg-light-surface/50 dark:bg-navy-800/50 text-text-muted hover:text-text-main dark:hover:text-text-darkMain hover:bg-light-border dark:hover:bg-navy-700"
                }`}
              >
                <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                {tab.label[lang]}
              </button>
            );
          })}
        </div>

        {/* --- TIMELINE CONTENT --- */}
        <div className="relative" key={activeTab}>
          {/* JIKA TAB EXPERIENCE AKTIF */}
          {activeTab === "experience" && (
            <>
              {/* === TAMPILAN MOBILE: Semua data digabung jadi 1 List agar garis nyambung === */}
              <div className="block lg:hidden">
                <TimelineList 
                  data={[...experienceDataLeft, ...experienceDataRight]} 
                  startDelay={100} 
                  isSectionVisible={isVisible} 
                  lang={lang} 
                />
              </div>

              {/* === TAMPILAN DESKTOP: Dipisah jadi 2 Kolom === */}
              <div className="hidden lg:grid grid-cols-2 gap-16">
                <TimelineList data={experienceDataLeft} startDelay={100} isSectionVisible={isVisible} lang={lang} />
                <TimelineList data={experienceDataRight} startDelay={250} isSectionVisible={isVisible} lang={lang} />
              </div>
            </>
          )}

          {/* JIKA TAB EDU-ORG AKTIF */}
          {activeTab === "edu-org" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
              {/* Kolom Kiri: Education */}
              <div>
                <h4 className="text-xl sm:text-2xl font-black text-text-main dark:text-text-darkMain flex items-center gap-3 border-b border-light-border dark:border-navy-700 pb-3 sm:pb-4 mb-4">
                  <GraduationCap className="text-accent w-5 h-5 sm:w-6 sm:h-6" />
                  {lang === "EN" ? "Education" : "Pendidikan Akademik"}
                </h4>
                <TimelineList data={educationData} startDelay={100} isSectionVisible={isVisible} lang={lang} />
              </div>

              {/* Kolom Kanan: Organization */}
              <div>
                <h4 className="text-xl sm:text-2xl font-black text-text-main dark:text-text-darkMain flex items-center gap-3 border-b border-light-border dark:border-navy-700 pb-3 sm:pb-4 mb-4">
                  <Users className="text-accent w-5 h-5 sm:w-6 sm:h-6" />
                  {lang === "EN" ? "Organization" : "Organisasi & UKM"}
                </h4>
                <TimelineList data={organizationData} startDelay={250} isSectionVisible={isVisible} lang={lang} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}