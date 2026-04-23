"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, Github, FolderGit2, Terminal } from "lucide-react";
import Image from "next/image";

const projectsData = [
  {
    title: "AnglePhysio",
    category: "Health-Tech Web",
    isPublic: true,
    tech: ["ReactJS", "Supabase"],
    desc: {
      EN: "A developing health-tech web platform designed for comprehensive posture analysis and physiotherapy assessments.",
      ID: "Platform web health-tech dalam tahap pengembangan yang dirancang untuk analisis postur dan asesmen fisioterapi komprehensif.",
    },
    image: "/images/agl.png",
    links: { github: "#", live: "https://anglephysio.com/" },
  },
  {
    title: "Lab Fisioterapi UMS",
    category: "Management System",
    isPublic: true,
    tech: ["Laravel", "MySQL", "Tailwind"],
    desc: {
      EN: "A digital laboratory management system tailored specifically for the Physiotherapy Study Program.",
      ID: "Sistem manajemen laboratorium digital yang disesuaikan khusus untuk Program Studi Fisioterapi.",
    },
    image: "/images/lab.png",
    links: { github: "#", live: "https://labfisioums.com" },
  },
  {
    title: "Sistem SPP TK Bina Pratama",
    category: "Fullstack Web",
    isPublic: true,
    tech: ["Laravel", "ReactJS", "MySQL"],
    desc: {
      EN: "Comprehensive digital communication and tuition fee management system for kindergarten.",
      ID: "Sistem manajemen pembayaran SPP dan komunikasi digital komprehensif untuk TK.",
    },
    image: "/images/paud.png",
    links: { github: "#", live: "https://paudbinapratama.my.id" },
  },
  {
    title: "Sistem Administrasi Persuratan",
    category: "Internship Project",
    isPublic: false,
    tech: ["Laravel", "MySQL", "Backend Dev"],
    desc: {
      EN: "Backend development using Laravel to transform a GUI-based mail administration system into a modern web application for the Protocol, Communication, and Executive Administration of Surakarta.",
      ID: "Pengembangan backend Laravel untuk mentransformasi sistem administrasi persuratan GUI menjadi website di Protokol, Komunikasi, dan Administrasi Pimpinan Kota Surakarta.",
    },
    image: "/images/diskominfo.png",
    links: { github: "#", live: "" },
  },
  {
    title: "Profile Sekolah",
    category: "Web Branding",
    isPublic: false,
    tech: ["Laravel", "ReactJS", "Tailwind"],
    desc: {
      EN: "Responsive school profile website featuring interactive UI components and modern backend integration.",
      ID: "Website profil sekolah responsif dengan komponen UI interaktif dan integrasi backend modern.",
    },
    image: "",
    links: { github: "#", live: "" },
  },
];

export default function ProjectsPage() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen pt-32 pb-20 bg-light-bg dark:bg-navy-900 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <FolderGit2 size={12} />
            {lang === "EN" ? "Selected Works" : "Karya Terpilih"}
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-text-main dark:text-text-darkMain tracking-tighter mb-6 leading-[0.95]">
            {lang === "EN" ? "Featured Projects." : "Proyek Unggulan."}
          </h1>
          <p className="max-w-xl text-lg text-text-muted dark:text-text-darkMuted leading-relaxed">
            {lang === "EN"
              ? "A collection of digital products and technical solutions I've built, focusing on clean code, scalable architecture, and intuitive design."
              : "Koleksi produk digital dan solusi teknis yang telah saya bangun, berfokus pada kode yang bersih, arsitektur skalabel, dan desain intuitif."}
          </p>
        </header>

        {/* PROJECTS GRID (3 Kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, i) => (
            <div
              key={i}
              className="group flex flex-col bg-light-surface/40 dark:bg-navy-800/40 backdrop-blur-md border border-light-border dark:border-navy-700 rounded-2xl overflow-hidden hover:border-accent/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all duration-500"
            >
              {/* BAGIAN ATAS: GAMBAR ATAU IKON */}
              <div className="relative w-full h-56 md:h-48 lg:h-52 overflow-hidden border-b border-light-border dark:border-navy-700 bg-light-bg dark:bg-navy-900 flex flex-col items-center justify-center">
                {/* 1. LOGIKA MENAMPILKAN GAMBAR (Jika image tidak kosong) */}
                {project.image ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-light-border to-light-surface dark:from-navy-700 dark:to-navy-900 animate-pulse z-0"></div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105 z-10"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </>
                ) : (
                  /* FALLBACK: Jika tidak ada foto, tampilkan ikon Terminal besar di background */
                  <Terminal
                    size={48}
                    className="text-text-muted/30 dark:text-text-darkMuted/30 z-0 group-hover:text-accent/50 transition-colors duration-500"
                  />
                )}

                {/* 2. LOGIKA OVERLAY & TEKS BERDASARKAN STATUS PUBLIK/INTERNAL */}
                {project.isPublic ? (
                  /* OVERLAY PUBLIK: Muncul ikon link saat di-hover (Hanya jika ada gambar) */
                  project.image && (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-accent text-white rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl"
                        title="Visit Live Site"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  )
                ) : /* OVERLAY INTERNAL: Menampilkan teks "Internal Project" */
                project.image ? (
                  /* Jika ada foto -> Teks "Internal Project" muncul saat di-hover (efek kaca/blur) agar foto bisa dilihat utuh di awal */
                  <div className="absolute inset-0 bg-navy-900/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex flex-col items-center justify-center">
                    <Terminal
                      size={24}
                      className="text-white/80 mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                    />
                    <span className="text-xs font-bold text-white tracking-widest uppercase translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      Internal Project
                    </span>
                  </div>
                ) : (
                  /* Jika tidak ada foto -> Teks "Internal Project" statis menetap di tengah */
                  <div className="absolute mt-16 z-20">
                    <span className="text-xs font-bold text-text-muted tracking-widest uppercase">
                      Internal Project
                    </span>
                  </div>
                )}
              </div>

              {/* BAGIAN BAWAH: TEKS DAN DETAIL */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-accent/10 px-2 py-1 rounded-md">
                      {project.category}
                    </span>
                    <a
                      href={project.links.github}
                      className="text-text-muted hover:text-accent transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                  <h4 className="text-xl font-bold text-text-main dark:text-text-darkMain mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-text-muted dark:text-text-darkMuted leading-relaxed line-clamp-3">
                    {project.desc[lang]}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-light-border dark:border-navy-700">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-bold px-2 py-1 bg-light-bg dark:bg-navy-900 text-text-muted border border-light-border dark:border-navy-700 rounded uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
