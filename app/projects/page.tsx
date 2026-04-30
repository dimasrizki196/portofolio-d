"use client";

import { useState, useEffect, useRef } from "react";
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
      EN: "Backend development using Laravel to transform a GUI-based mail administration system into a modern web application.",
      ID: "Pengembangan backend Laravel untuk mentransformasi sistem administrasi persuratan GUI menjadi website.",
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

export default function ProjectsPage() {
  const { lang } = useLanguage();
  const [isPageReady, setIsPageReady] = useState(false);
  const { ref: gridRef, isVisible: isGridVisible } = useScrollReveal(0.05);

  useEffect(() => {
    const timer = setTimeout(() => setIsPageReady(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 bg-light-bg dark:bg-navy-900 px-4 sm:px-6 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <header className="mb-16 sm:mb-20">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-6 transition-all duration-700 ease-out ${isPageReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <FolderGit2 size={12} />
            {lang === "EN" ? "Selected Works" : "Karya Terpilih"}
          </div>
          <h1
            className={`text-4xl sm:text-7xl font-black text-text-main dark:text-text-darkMain tracking-tighter mb-6 leading-[1.1] transition-all duration-1000 ease-out ${isPageReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "150ms" }}
          >
            {lang === "EN" ? "Featured Projects." : "Proyek Unggulan."}
          </h1>
          <p
            className={`max-w-xl text-base sm:text-lg text-text-muted dark:text-text-darkMuted leading-relaxed transition-all duration-1000 ease-out ${isPageReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "300ms" }}
          >
            {lang === "EN"
              ? "Focused on clean code and scalable architecture."
              : "Berfokus pada kode bersih dan arsitektur skalabel."}
          </p>
        </header>

        {/* PROJECTS GRID */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projectsData.map((project, i) => (
            <div
              key={i}
              className={`group flex flex-col bg-white dark:bg-navy-800/40 backdrop-blur-md border border-light-border dark:border-navy-700 rounded-2xl overflow-hidden hover:border-accent/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all duration-700 ease-out ${
                isGridVisible && isPageReady
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* IMAGE CONTAINER */}
              <div className="relative w-full h-52 sm:h-56 overflow-hidden border-b border-light-border dark:border-navy-700 bg-light-bg dark:bg-navy-900 flex flex-col items-center justify-center">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105 z-10"
                  />
                ) : (
                  <Terminal
                    size={48}
                    className="text-text-muted/30 dark:text-text-darkMuted/30 z-0 group-hover:text-accent/50 transition-colors duration-500"
                  />
                )}

                {/* OVERLAY: Tetap ada hover di Desktop, tapi di Mobile kita sediakan tombol klik di bawah */}
                <div
                  className={`absolute inset-0 z-20 transition-all duration-500 flex items-center justify-center bg-navy-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 hidden md:flex`}
                >
                  {project.isPublic ? (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-accent text-white rounded-full shadow-xl"
                    >
                      <ExternalLink size={20} />
                    </a>
                  ) : (
                    <span className="text-[10px] font-black tracking-widest uppercase text-white">
                      Internal Project
                    </span>
                  )}
                </div>
              </div>

              {/* DETAILS */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[9px] font-black text-accent uppercase tracking-widest bg-accent/10 px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <div className="flex gap-3 items-center">
                    {/* Tombol Eksternal muncul di MOBILE secara permanen jika publik */}
                    {project.isPublic && project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        className="md:hidden text-accent"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    <a
                      href={project.links.github}
                      target="_blank"
                      className="text-text-muted hover:text-accent transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-text-main dark:text-text-darkMain mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-text-muted dark:text-text-darkMuted leading-relaxed line-clamp-3 mb-6">
                  {project.desc[lang]}
                </p>

                {/* TECH STACK */}
                <div className="mt-auto pt-5 border-t border-light-border dark:border-navy-700">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-bold px-2 py-1 bg-light-bg dark:bg-navy-900 text-text-muted border border-light-border dark:border-navy-700 rounded uppercase tracking-tighter"
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
