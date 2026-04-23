"use client";

import { useState } from "react";
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
    title: {
      EN: "Informatics Thesis Project",
      ID: "Proyek Skripsi Informatika",
    },
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
    title: {
      EN: "Software Engineer",
      ID: "Software Engineer",
    },
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

export default function Experience() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState("experience");

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

  // Komponen Helper untuk merender list timeline
  const TimelineList = ({ data }: { data: any[] }) => (
    <div className="relative mt-6">
      {/* Garis Vertikal Latar */}
      <div className="absolute left-[19px] md:left-[39px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-accent/50 via-cyan-400/30 to-purple-500/10"></div>

      <div className="space-y-10">
        {data.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.id} className="relative pl-16 md:pl-24 group">
              {/* Lingkaran Ikon */}
              <div className="absolute left-0 md:left-5 top-1 w-10 h-10 rounded-full bg-light-bg dark:bg-navy-900 border-2 border-accent flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.2)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] group-hover:scale-110 transition-all duration-300 z-10">
                <IconComponent size={18} className="text-accent" />
              </div>

              {/* Kartu Konten */}
              <div className="bg-light-surface/40 dark:bg-navy-800/40 backdrop-blur-md border border-light-border dark:border-navy-700 p-6 md:p-8 rounded-2xl shadow-lg hover:border-accent/40 transition-colors duration-300">
                <div className="inline-block px-3 py-1 mb-3 rounded-md bg-accent/10 text-accent text-[10px] font-bold tracking-wider uppercase">
                  {item.year}
                </div>
                <h4 className="text-xl font-bold text-text-main dark:text-text-darkMain mb-1">
                  {item.title[lang]}
                </h4>
                <p className="text-sm font-bold text-text-muted dark:text-text-darkMuted mb-4">
                  {item.subtitle}
                </p>
                <p className="text-sm text-text-muted dark:text-text-darkMuted leading-relaxed">
                  {item.desc[lang]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section
      id="experience"
      className="w-full py-24 relative z-10 min-h-[800px]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-[2px] bg-accent"></span>
            {lang === "EN" ? "Journey" : "Perjalanan"}
            <span className="w-8 h-[2px] bg-accent"></span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight text-text-main dark:text-text-darkMain">
            {lang === "EN" ? "Path & Background." : "Rekam Jejak."}
          </h3>
        </div>

        {/* --- NAVIGATION TABS --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-accent text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-105"
                    : "bg-light-surface/50 dark:bg-navy-800/50 text-text-muted hover:text-text-main dark:hover:text-text-darkMain hover:bg-light-border dark:hover:bg-navy-700"
                }`}
              >
                <Icon size={18} />
                {tab.label[lang]}
              </button>
            );
          })}
        </div>

        {/* --- TIMELINE CONTENT --- */}
        <div className="relative animate-fade-in-up" key={activeTab}>
          {/* JIKA TAB EXPERIENCE AKTIF (Tampilkan 2 Kolom Langsung) */}
          {activeTab === "experience" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <TimelineList data={experienceDataLeft} />
              <TimelineList data={experienceDataRight} />
            </div>
          )}

          {/* JIKA TAB EDU-ORG AKTIF (Tampilkan 2 Kolom dengan Judul Terpisah) */}
          {activeTab === "edu-org" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Kolom Kiri: Education */}
              <div>
                <h4 className="text-2xl font-black text-text-main dark:text-text-darkMain flex items-center gap-3 border-b border-light-border dark:border-navy-700 pb-4 mb-4">
                  <GraduationCap className="text-accent" />
                  {lang === "EN" ? "Education" : "Pendidikan Akademik"}
                </h4>
                <TimelineList data={educationData} />
              </div>

              {/* Kolom Kanan: Organization */}
              <div>
                <h4 className="text-2xl font-black text-text-main dark:text-text-darkMain flex items-center gap-3 border-b border-light-border dark:border-navy-700 pb-4 mb-4">
                  <Users className="text-accent" />
                  {lang === "EN" ? "Organization" : "Organisasi & UKM"}
                </h4>
                <TimelineList data={organizationData} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
