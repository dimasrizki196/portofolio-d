"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Briefcase, GraduationCap, Users, Award } from "lucide-react";

// --- DATA 1: PENGALAMAN PROFESIONAL (Kerja & Magang) ---
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
      EN: "Managed the full software development lifecycle for various clients, translating complex business needs into scalable digital solutions. Projects include:",
      ID: "Mengelola siklus pengembangan perangkat lunak secara penuh untuk berbagai klien, menerjemahkan kebutuhan bisnis menjadi solusi digital yang skalabel. Proyek meliputi:",
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
    icon: <Briefcase size={20} />,
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
    icon: <Briefcase size={20} />,
  },
];

// --- DATA 2: PENDIDIKAN & RISET ---
const educationExperience = [
  {
    id: 1,
    role: { EN: "Bachelor of Informatics", ID: "S1 Teknik Informatika" },
    org: "Universitas Muhammadiyah Surakarta",
    date: "2022 - 2026",
    desc: {
      EN: "Focused on software engineering, web development, and system architecture. Conducted significant academic research:",
      ID: "Berfokus pada rekayasa perangkat lunak, pengembangan web, dan arsitektur sistem. Melakukan riset akademik signifikan:",
    },
    bullets: [
      "Thesis Project: Designed and built a comprehensive web-based tuition fee (SPP) and digital communication system for TK Bina Pratama.",
    ],
    bullets_ID: [
      "Proyek Skripsi: Merancang dan membangun sistem komunikasi digital dan manajemen SPP berbasis web yang komprehensif untuk TK Bina Pratama.",
    ],
    icon: <GraduationCap size={20} />,
  },
  {
    id: 2,
    role: { EN: "Vocational High School", ID: "SMK Teknik Pemesinan" },
    org: "SMK Negeri 2 Surakarta",
    date: "2019 - 2022",
    desc: {
      EN: "Built a strong foundation in mechanical logic, precision, and systematic problem-solving.",
      ID: "Membangun fondasi yang kuat dalam logika presisi dan pemecahan masalah sistematis.",
    },
    bullets: [],
    bullets_ID: [],
    icon: <GraduationCap size={20} />,
  },
];

// --- DATA 3: ORGANISASI & KEPEMIMPINAN ---
const orgExperience = [
  {
    id: 1,
    role: {
      EN: "Mentor & Class Facilitator (PMK)",
      ID: "Pendamping Materi Kelas (PMK)",
    },
    org: "Fakultaria UMS",
    date: "2024 & 2025",
    desc: {
      EN: "Served as a mentor and guide for new university students during the official orientation program.",
      ID: "Bertugas sebagai mentor dan pembimbing bagi peserta/mahasiswa baru selama program orientasi resmi kampus.",
    },
    bullets: [
      "Facilitated material comprehension and guided students in campus transition.",
      "Ensured a supportive and engaging learning environment for incoming freshmen.",
    ],
    bullets_ID: [
      "Memfasilitasi pemahaman materi dan membimbing mahasiswa baru dalam masa transisi ke dunia kampus.",
      "Bertanggung jawab memastikan lingkungan belajar yang suportif dan interaktif selama orientasi berlangsung.",
    ],
    icon: <Users size={20} />,
  },
  {
    id: 2,
    role: { EN: "Organization", ID: "Organisasi" },
    org: "Ikatan Mahasiswa Muhammadiyah (IMM)",
    date: "2023 - 2025",
    desc: {
      EN: "Actively involved in organizational development, leadership training, and media communication.",
      ID: "Terlibat aktif dalam pengembangan organisasi, pelatihan kepemimpinan, dan komunikasi media.",
    },
    bullets: [
      "Managed organizational media communication and digital presence.",
      "Participated in leadership programs and team-building activities.",
    ],
    bullets_ID: [
      "Mengelola komunikasi media organisasi dan kehadiran digital secara konsisten.",
      "Berpartisipasi dalam program kepemimpinan dan aktivitas kolaborasi tim.",
    ],
    icon: <Users size={20} />,
  },
  {
    id: 3,
    role: {
      EN: "Student Activity Unit (UKM)",
      ID: "UKM (Unit Kegiatan Mahasiswa)",
    },
    org: "UKM FINIC (Fotografi Komunikasi & Informatika)",
    date: "2023 - 2025",
    desc: {
      EN: "Explored visual storytelling through photography hunting sessions and collaborative art exhibitions.",
      ID: "Mengeksplorasi penceritaan visual melalui sesi hunting fotografi dan pameran seni kolaboratif.",
    },
    bullets: [
      "Participated in regular photography hunting sessions to develop technical and creative skills.",
      "Contributed to the curation and execution of photography exhibitions to showcase student works.",
    ],
    bullets_ID: [
      "Berpartisipasi dalam sesi hunting fotografi rutin untuk mengasah keterampilan teknis dan kreatif.",
      "Berkontribusi dalam kurasi dan pelaksanaan pameran fotografi untuk menampilkan karya mahasiswa.",
    ],
    icon: <Users size={20} />,
  },
];

export default function ExperiencePage() {
  const { lang } = useLanguage();

  // Komponen Helper untuk merender list timeline per kategori
  const TimelineSection = ({ title, data, icon: TitleIcon }: any) => (
    <div className="mb-20">
      <h2 className="text-2xl font-black text-text-main dark:text-text-darkMain mb-10 flex items-center gap-3 border-b border-light-border dark:border-navy-700 pb-4">
        <TitleIcon className="text-accent" size={28} />
        {title}
      </h2>
      <div className="space-y-12 border-l border-light-border dark:border-navy-700 pl-8 ml-3">
        {data.map((item: any) => (
          <div key={item.id} className="relative group">
            {/* Dot */}
            <div className="absolute -left-[43px] top-0 p-2 bg-light-surface dark:bg-navy-800 text-accent rounded-full border border-light-border dark:border-navy-700 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
              {item.icon}
            </div>

            {/* Content Box */}
            <div className="bg-light-surface/40 dark:bg-navy-800/40 p-6 md:p-8 rounded-2xl border border-light-border dark:border-navy-700 hover:border-accent/40 transition-colors duration-300 shadow-sm">
              <span className="inline-block px-3 py-1 mb-3 bg-accent/10 text-accent rounded-md text-[10px] font-black uppercase tracking-widest">
                {item.date}
              </span>
              <h3 className="text-xl font-bold text-text-main dark:text-text-darkMain mb-1">
                {lang === "EN" ? item.role.EN : item.role.ID}
              </h3>
              <h4 className="text-sm font-bold text-text-muted dark:text-text-darkMuted mb-4">
                {item.org}
              </h4>
              <p className="text-sm text-text-muted dark:text-text-darkMuted leading-relaxed">
                {lang === "EN" ? item.desc.EN : item.desc.ID}
              </p>

              {/* Render Bullets jika ada */}
              {item.bullets && item.bullets.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {(lang === "ID" && item.bullets_ID
                    ? item.bullets_ID
                    : item.bullets
                  ).map((bullet: string, idx: number) => (
                    <li
                      key={idx}
                      className="text-sm text-text-muted dark:text-text-darkMuted flex items-start gap-2"
                    >
                      <span className="text-accent mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen pt-32 pb-20 bg-light-bg dark:bg-navy-900 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <header className="mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-text-main dark:text-text-darkMain tracking-tighter mb-6">
            {lang === "EN" ? "My Experience." : "Pengalaman Saya."}
          </h1>
          <p className="text-lg text-text-muted dark:text-text-darkMuted leading-relaxed max-w-2xl">
            {lang === "EN"
              ? "A detailed overview of my professional roles, academic background, and organizational leadership."
              : "Gambaran rinci tentang peran profesional, latar belakang akademik, dan kepemimpinan organisasi saya."}
          </p>
        </header>

        {/* SECTION 1: PROFESSIONAL */}
        <TimelineSection
          title={lang === "EN" ? "Professional Experience" : "Pengalaman Kerja"}
          data={workExperience}
          icon={Briefcase}
        />

        {/* SECTION 2: EDUCATION */}
        <TimelineSection
          title={lang === "EN" ? "Education & Academic" : "Pendidikan Akademik"}
          data={educationExperience}
          icon={GraduationCap}
        />

        {/* SECTION 3: ORGANIZATION */}
        <TimelineSection
          title={
            lang === "EN"
              ? "Leadership & Campus Involvement"
              : "Organisasi & Kegiatan Kampus"
          }
          data={orgExperience}
          icon={Users}
        />

        {/* CTA */}
        <div className="mt-20 p-10 bg-gradient-to-br from-light-surface to-light-bg dark:from-navy-800 dark:to-navy-900 rounded-3xl border border-light-border dark:border-navy-700 text-center shadow-lg">
          <Award className="mx-auto text-accent mb-4" size={32} />
          <h3 className="text-xl font-bold text-text-main dark:text-text-darkMain mb-2">
            {lang === "EN"
              ? "Certifications & Full Details"
              : "Sertifikasi & Detail Lengkap"}
          </h3>
          <p className="text-sm text-text-muted dark:text-text-darkMuted mb-8 max-w-md mx-auto">
            {lang === "EN"
              ? "Interested in my seminar certificates, course completions, or a printable format of my resume?"
              : "Tertarik melihat sertifikat seminar, penyelesaian kursus, atau format CV cetak saya?"}
          </p>
          <a href="/cv-dimas.pdf" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-4 bg-text-main dark:bg-white text-white dark:text-navy-900 font-black text-[10px] tracking-widest uppercase rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300">
              {lang === "EN" ? "Download Full Resume" : "Unduh CV Lengkap"}
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
