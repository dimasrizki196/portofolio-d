"use client";

import { useLanguage } from "@/context/LanguageContext";
import {
  Code2,
  Server,
  Layers,
  Globe, // Icon baru untuk web profil
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Briefcase,
  Zap,
} from "lucide-react";

// DATA SERVICES (4 Pilar Keahlian)
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

export default function ServicesPage() {
  const { lang } = useLanguage();

  return (
    // MAIN CONTAINER
    <main className="min-h-screen pt-32 pb-20 bg-light-bg dark:bg-navy-900 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto overflow-hidden">
        {/* =========================================
           1. HEADER SECTION
           ========================================= */}
        <header className="mb-20 md:mb-24 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Zap size={12} />
            {lang === "EN" ? "Technical Solutions" : "Solusi Teknis"}
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-text-main dark:text-text-darkMain tracking-tighter mb-6 leading-[0.95]">
            {lang === "EN" ? "Expert Services." : "Layanan Ahli."} <br />
            <span className="text-accent">Built to Scale.</span>
          </h1>
          <p className="max-w-xl text-lg text-text-muted dark:text-text-darkMuted leading-relaxed">
            {lang === "EN"
              ? "Helping organizations and individuals build fast, secure, and intuitive digital ecosystems, from company profiles to complex management systems."
              : "Membantu organisasi dan individu membangun ekosistem digital yang cepat, aman, dan intuitif, dari profil perusahaan hingga sistem manajemen yang kompleks."}
          </p>
        </header>

        {/* =========================================
           2. SERVICES GRID SECTION (Sekarang 2 Kolom untuk 4 Item)
           ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 relative z-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group p-8 bg-white dark:bg-navy-800 border border-light-border dark:border-navy-700 rounded-[2.5rem] hover:border-accent/50 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-accent/5 flex flex-col"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-light-bg dark:bg-navy-900 flex items-center justify-center ${service.color} mb-8 border border-light-border dark:border-navy-700 group-hover:scale-110 transition-transform`}
              >
                {service.icon}
              </div>

              {/* Judul & Deskripsi */}
              <h2 className="text-xl font-black text-text-main dark:text-text-darkMain mb-4 uppercase tracking-tight">
                {lang === "EN" ? service.title.EN : service.title.ID}
              </h2>
              <p className="text-sm text-text-muted dark:text-text-darkMuted leading-relaxed mb-8 flex-grow">
                {lang === "EN" ? service.desc.EN : service.desc.ID}
              </p>

              {/* Feature List */}
              <div className="space-y-3 mb-10 border-t border-light-border dark:border-navy-700 pt-6">
                {service.features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-text-main/70 dark:text-text-darkMain/70"
                  >
                    <CheckCircle2 size={14} className="text-accent" />
                    {feat}
                  </div>
                ))}
              </div>

              {/* Link ke email */}
              <a
                href={`mailto:dimasrizki2004@gmail.com?subject=Interest in ${lang === "EN" ? service.title.EN : service.title.ID}`}
                className="inline-flex items-center gap-2 text-xs font-black text-accent uppercase tracking-widest group-hover:gap-4 transition-all mt-auto"
              >
                {lang === "EN" ? "Inquire Now" : "Tanya Sekarang"}
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* =========================================
           3. PRICING STRATEGY SECTION
           ========================================= */}
        <div className="relative z-10 bg-white dark:bg-navy-800 p-10 md:p-16 rounded-[3rem] border border-light-border dark:border-navy-700 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Teks Penjelasan */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                <Sparkles size={12} />
                {lang === "EN" ? "Pricing Strategy" : "Strategi Harga"}
              </div>
              <h3 className="text-4xl font-black text-text-main dark:text-text-darkMain tracking-tighter mb-4 leading-tight">
                {lang === "EN" ? "Investment Plans." : "Rencana Investasi."}
              </h3>
              <p className="text-sm text-text-muted dark:text-text-darkMuted leading-relaxed max-w-md">
                {lang === "EN"
                  ? "I offer flexible pricing models based on the complexity of your requirements. From simple landing pages to complex management systems, we can scale it to fit your needs."
                  : "Saya menawarkan model harga yang fleksibel berdasarkan kompleksitas kebutuhan Anda. Dari landing page sederhana hingga sistem manajemen yang rumit, kita dapat menyesuaikannya."}
              </p>
            </div>

            {/* Kotak Harga Mulai Dari */}
            <div className="p-10 bg-light-bg dark:bg-navy-900 rounded-3xl border border-light-border dark:border-navy-700 shadow-inner group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Briefcase size={32} className="text-accent opacity-60" />
                  <span className="text-[10px] font-black uppercase text-accent tracking-widest">
                    Freelance / Project-Based
                  </span>
                </div>

                {/* BAGIAN HARGA YANG SUDAH DIPERBAIKI */}
                <div className="text-4xl md:text-5xl font-black text-text-main dark:text-text-darkMain mb-6 leading-none">
                  <span className="text-lg font-medium opacity-60">
                    {lang === "EN" ? "Starts from" : "Mulai dari"}
                  </span>{" "}
                  <br />
                  {lang === "EN" ? "IDR 1.5 Million" : "Rp 1,5 Juta"}
                  <span className="text-sm opacity-50 font-medium tracking-normal">
                    {" "}
                    / project
                  </span>
                </div>

                <p className="text-xs text-text-muted mb-8 italic">
                  *{" "}
                  {lang === "EN"
                    ? "Prices are estimates and vary based on project scope, pages, and system complexity."
                    : "Harga adalah estimasi dan bervariasi tergantung lingkup proyek, jumlah halaman, dan kompleksitas sistem."}
                </p>
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
