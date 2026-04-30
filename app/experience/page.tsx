"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Briefcase, GraduationCap, Users, Award, X, Eye } from "lucide-react";

// --- DATA 1: PENGALAMAN PROFESIONAL ---
const workExperience = [
  {
    id: 1,
    role: {
      EN: "Freelance Full-Stack Developer",
      ID: "Freelance Full-Stack Developer",
    },
    org: "Independent Projects",
    date: "Aug 2025 - Present",
    desc: {
      EN: "Managed the full software development lifecycle for various clients, translating complex business needs into scalable digital solutions.",
      ID: "Mengelola siklus pengembangan perangkat lunak secara penuh untuk berbagai klien, menerjemahkan kebutuhan bisnis menjadi solusi digital yang skalabel.",
    },
    bullets: [
      "AnglePhysio: Health-tech web platform for posture analysis (ReactJS, Supabase).",
      "Lab Fisioterapi UMS: Digital laboratory management system (Laravel, MySQL).",
      "Profile Sekolah: Responsive branding website with modern UI components.",
    ],
    bullets_ID: [
      "AnglePhysio: Platform web health-tech untuk analisis postur (ReactJS, Supabase).",
      "Lab Fisioterapi UMS: Sistem manajemen laboratorium digital (Laravel, MySQL).",
      "Profile Sekolah: Website branding responsif dengan komponen UI modern.",
    ],
    icon: <Briefcase size={18} />,
  },
  {
    id: 2,
    role: { EN: "Backend Developer Intern", ID: "Magang Backend Developer" },
    org: "Diskominfo SP Surakarta",
    date: "Feb 2025 - May 2025",
    desc: {
      EN: "Contributed to backend architecture at the Protocol, Communication, and Executive Administration of Surakarta.",
      ID: "Berkontribusi pada arsitektur backend di Protokol, Komunikasi, dan Administrasi Pimpinan Kota Surakarta.",
    },
    bullets: [
      "Transformed a legacy GUI-based mail administration system into a modern web application.",
      "Optimized database queries and implemented secure data routing using Laravel framework.",
    ],
    bullets_ID: [
      "Mentransformasi sistem administrasi persuratan berbasis GUI lawas menjadi aplikasi web modern.",
      "Mengoptimalkan kueri database dan mengimplementasikan perutean data yang aman menggunakan framework Laravel.",
    ],
    icon: <Briefcase size={18} />,
  },
];

// --- DATA 2: PENDIDIKAN & RISET ---
const educationExperience = [
  {
    id: 3,
    role: { EN: "Bachelor of Informatics", ID: "S1 Teknik Informatika" },
    org: "Universitas Muhammadiyah Surakarta",
    date: "2022 - 2026",
    desc: {
      EN: "Focused on software engineering, web development, and system architecture.",
      ID: "Berfokus pada rekayasa perangkat lunak, pengembangan web, dan arsitektur sistem.",
    },
    bullets: [
      "Thesis Project: Designed and built a comprehensive web-based tuition fee (SPP) and digital communication system for TK Bina Pratama.",
    ],
    bullets_ID: [
      "Proyek Skripsi: Merancang dan membangun sistem komunikasi digital dan manajemen SPP berbasis web yang komprehensif untuk TK Bina Pratama.",
    ],
    icon: <GraduationCap size={18} />,
  },
  {
    id: 4,
    role: { EN: "Vocational High School", ID: "SMK Teknik Pemesinan" },
    org: "SMK Negeri 2 Surakarta",
    date: "2019 - 2022",
    desc: {
      EN: "Built a strong foundation in mechanical logic, precision, and systematic problem-solving.",
      ID: "Membangun fondasi yang kuat dalam logika presisi dan pemecahan masalah sistematis.",
    },
    icon: <GraduationCap size={18} />,
  },
];

// --- DATA 3: ORGANISASI & KEPEMIMPINAN ---
const orgExperience = [
  {
    id: 5,
    role: {
      EN: "Mentor & Class Facilitator (PMK)",
      ID: "Pendamping Materi Kelas (PMK)",
    },
    org: "Fakultaria UMS",
    date: "2024 & 2025",
    desc: {
      EN: "Served as a mentor for new university students during orientation.",
      ID: "Bertugas sebagai mentor bagi mahasiswa baru selama program orientasi kampus.",
    },
    bullets: [
      "Facilitated material comprehension and guided students in campus transition.",
    ],
    bullets_ID: [
      "Memfasilitasi pemahaman materi dan membimbing mahasiswa baru dalam masa transisi.",
    ],
    icon: <Users size={18} />,
  },
  {
    id: 6,
    role: { EN: "Organization", ID: "Organisasi" },
    org: "IMM & UKM FINIC",
    date: "2023 - 2025",
    desc: {
      EN: "Active in media communication and visual storytelling.",
      ID: "Aktif dalam komunikasi media dan penceritaan visual.",
    },
    icon: <Users size={18} />,
  },
];

// --- HOOK UNTUK SCROLL REVEAL ---
function useScrollReveal(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isVisible };
}

export default function ExperiencePage() {
  const { lang } = useLanguage();
  const [isPageReady, setIsPageReady] = useState(false);
  const [showCV, setShowCV] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsPageReady(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  // Mematikan scroll body saat modal terbuka
  useEffect(() => {
    if (showCV) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showCV]);

  const TimelineSection = ({ title, data, icon: TitleIcon }: any) => {
    const { ref: sectionRef, isVisible } = useScrollReveal(0.05);
    return (
      <div ref={sectionRef} className="mb-20">
        <h2
          className={`text-xl sm:text-2xl font-black text-text-main dark:text-text-darkMain mb-10 flex items-center gap-3 border-b border-light-border dark:border-navy-700 pb-4 transition-all duration-700 ${isVisible && isPageReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <TitleIcon className="text-accent" size={24} />
          {title}
        </h2>
        <div className="relative space-y-10 sm:space-y-12 border-l border-light-border dark:border-navy-700 ml-4 sm:ml-5 pl-8 sm:pl-10">
          {data.map((item: any, idx: number) => (
            <div
              key={item.id}
              className={`relative transition-all duration-700 ease-out ${isVisible && isPageReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="absolute -left-[49px] sm:-left-[58px] top-1 p-2 bg-light-bg dark:bg-navy-900 text-accent rounded-full border border-light-border dark:border-navy-700 z-10 shrink-0">
                {item.icon}
              </div>
              <div className="bg-light-surface/40 dark:bg-navy-800/40 p-5 sm:p-8 rounded-2xl border border-light-border dark:border-navy-700 hover:border-accent/40 transition-colors duration-300 shadow-sm">
                <span className="inline-block px-3 py-1 mb-3 bg-accent/10 text-accent rounded-md text-[10px] font-black uppercase tracking-widest">
                  {item.date}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-text-main dark:text-text-darkMain mb-1">
                  {lang === "EN" ? item.role.EN : item.role.ID}
                </h3>
                <h4 className="text-xs sm:text-sm font-bold text-text-muted dark:text-text-darkMuted mb-4">
                  {item.org}
                </h4>
                <p className="text-xs sm:text-sm text-text-muted dark:text-text-darkMuted leading-relaxed">
                  {lang === "EN" ? item.desc.EN : item.desc.ID}
                </p>
                {item.bullets && item.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {(lang === "ID" ? item.bullets_ID : item.bullets).map(
                      (bullet: string, bIdx: number) => (
                        <li
                          key={bIdx}
                          className="text-xs sm:text-sm text-text-muted dark:text-text-darkMuted flex items-start gap-2"
                        >
                          <span className="text-accent mt-1 shrink-0">•</span>
                          <span>{bullet}</span>
                        </li>
                      ),
                    )}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 bg-light-bg dark:bg-navy-900 px-4 sm:px-6 transition-colors duration-300 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <header className="mb-16 sm:mb-20">
          <h1
            className={`text-4xl sm:text-6xl font-black text-text-main dark:text-text-darkMain tracking-tighter mb-6 transition-all duration-1000 ${isPageReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {lang === "EN" ? "My Experience." : "Pengalaman Saya."}
          </h1>
          <p
            className={`text-base sm:text-lg text-text-muted dark:text-text-darkMuted leading-relaxed max-w-2xl transition-all duration-1000 delay-200 ${isPageReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            {lang === "EN"
              ? "A detailed overview of my professional roles."
              : "Gambaran rinci tentang peran profesional saya."}
          </p>
        </header>

        {/* TIMELINE SECTIONS */}
        <TimelineSection
          title={lang === "EN" ? "Professional" : "Profesional"}
          data={workExperience}
          icon={Briefcase}
        />
        <TimelineSection
          title={lang === "EN" ? "Academic" : "Akademik"}
          data={educationExperience}
          icon={GraduationCap}
        />
        <TimelineSection
          title={lang === "EN" ? "Organization" : "Organisasi"}
          data={orgExperience}
          icon={Users}
        />

        {/* CTA: VIEW CV */}
        <div
          className={`mt-20 p-8 sm:p-12 bg-white dark:bg-navy-800 rounded-[2.5rem] border border-light-border dark:border-navy-700 text-center shadow-xl transition-all duration-1000 delay-300 ${isPageReady ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <Award className="mx-auto text-accent mb-6" size={40} />
          <h3 className="text-xl sm:text-2xl font-black text-text-main dark:text-text-darkMain mb-4 tracking-tighter">
            {lang === "EN"
              ? "Looking for my full credentials?"
              : "Ingin melihat kredensial lengkap?"}
          </h3>
          <button
            onClick={() => setShowCV(true)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-black text-[10px] tracking-widest uppercase rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20"
          >
            <Eye size={16} />
            {lang === "EN" ? "Preview Resume" : "Pratinjau CV"}
          </button>
        </div>
      </div>

      {/* === MODAL CV PREVIEW === */}
      {showCV && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-navy-900/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setShowCV(false)}
          />

          <div className="relative w-full max-w-5xl h-[85vh] bg-white dark:bg-navy-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-light-border dark:border-navy-700 bg-white dark:bg-navy-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg hidden sm:block">
                  <Briefcase size={20} className="text-accent" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-black text-text-main dark:text-text-darkMain uppercase tracking-tight leading-none mb-1">
                    Curriculum Vitae
                  </h2>
                  <p className="text-[9px] text-text-muted uppercase font-bold tracking-widest">
                    Dimas Rizki P. — Read Only
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowCV(false)}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-full transition-all duration-300"
              >
                <X size={20} />
              </button>
            </div>

            {/* Viewer Body */}
            <div className="flex-grow bg-gray-100 dark:bg-navy-900 relative">
              <iframe
                src="/cv-dimas.pdf#toolbar=0&navpanes=0&scrollbar=0"
                className="w-full h-full border-none"
                title="CV Preview"
              />
              <div className="absolute inset-0 pointer-events-none" />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
