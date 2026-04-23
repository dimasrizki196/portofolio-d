"use client";

import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, Award, Terminal } from "lucide-react";

export default function AboutPage() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen pt-32 pb-20 bg-light-bg dark:bg-navy-900 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* SECTION 1: PERSONAL STORY */}
        <header className="mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-text-main dark:text-text-darkMain tracking-tighter mb-8">
            {lang === "EN" ? "Building the future, " : "Membangun masa depan, "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-500">
              one line at a time.
            </span>
          </h1>

          <div className="space-y-6">
            <p className="text-lg text-text-muted dark:text-text-darkMuted leading-relaxed">
              {lang === "EN"
                ? "Hi, I'm Dimas Rizki Prasetyo. A Full-Stack Developer focused on building scalable web applications, robust backend architectures, and intuitive user interfaces."
                : "Halo, saya Dimas Rizki Prasetyo. Seorang Full-Stack Developer yang berfokus pada pengembangan aplikasi web skalabel, arsitektur backend yang tangguh, dan antarmuka pengguna yang intuitif."}
            </p>
            <p className="text-lg text-text-muted dark:text-text-darkMuted leading-relaxed">
              {lang === "EN"
                ? "As an Informatics student at Universitas Muhammadiyah Surakarta (UMS), I have built a strong foundation in software engineering and system architecture. I truly enjoy the process of transforming complex workflows within the fields of management, education, and healthcare into modern, efficient digital ecosystems."
                : "Sebagai mahasiswa program studi S1 Teknik Informatika di Universitas Muhammadiyah Surakarta (UMS), saya telah membangun fondasi yang kuat dalam rekayasa perangkat lunak dan arsitektur sistem. Saya sangat menikmati proses mengubah alur kerja yang kompleks di bidang manajemen, pendidikan, dan kesehatan menjadi ekosistem digital yang modern dan efisien."}
            </p>
            <p className="text-lg text-text-muted dark:text-text-darkMuted leading-relaxed">
              {lang === "EN"
                ? "Working as a freelance developer, I am accustomed to handling projects end-to-end, from conceptualizing databases to crafting responsive frontends. I believe that the best software is not just written with clean code, but built with a deep empathy for the people who use it."
                : "Dalam peran saya sebagai pengembang web lepas, saya terbiasa menangani proyek secara end-to-end, mulai dari perancangan arsitektur database hingga integrasi frontend yang responsif. Saya percaya bahwa perangkat lunak terbaik tidak hanya ditulis dengan kode yang bersih, tetapi dibangun dengan empati mendalam terhadap penggunanya."}
            </p>
          </div>
        </header>

        {/* SECTION 2: THE HYBRID PILLARS (HRD & CLIENTS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 bg-white dark:bg-navy-800 border border-light-border dark:border-navy-700 rounded-3xl hover:border-accent/40 transition-colors duration-300 shadow-sm hover:shadow-xl hover:shadow-accent/5">
            <BookOpen className="text-accent mb-4" size={24} />
            <h3 className="text-sm font-black uppercase tracking-widest mb-4 text-text-main dark:text-text-darkMain">
              {lang === "EN" ? "System Architecture" : "Arsitektur Sistem"}
            </h3>
            <p className="text-sm text-text-muted dark:text-text-darkMuted leading-relaxed">
              {lang === "EN"
                ? "Specializing in comprehensive digital ecosystems, from laboratory management to complex school administration. I thrive on transforming intricate workflows into streamlined web solutions using Laravel and React."
                : "Berfokus pada ekosistem digital komprehensif, mulai dari manajemen laboratorium hingga administrasi sekolah. Saya sangat antusias dalam mengubah alur kerja yang rumit menjadi solusi web yang terpadu menggunakan Laravel dan React."}
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-navy-800 border border-light-border dark:border-navy-700 rounded-3xl hover:border-accent/40 transition-colors duration-300 shadow-sm hover:shadow-xl hover:shadow-accent/5">
            <Award className="text-accent mb-4" size={24} />
            <h3 className="text-sm font-black uppercase tracking-widest mb-4 text-text-main dark:text-text-darkMain">
              {lang === "EN"
                ? "Communication & Leadership"
                : "Komunikasi & Kepemimpinan"}
            </h3>
            <p className="text-sm text-text-muted dark:text-text-darkMuted leading-relaxed">
              {lang === "EN"
                ? "Active involvement in organizational leadership and external relations has equipped me with the ability to bridge the gap between technical logic and human-centric client needs."
                : "Keterlibatan aktif dalam kepemimpinan organisasi dan hubungan eksternal membekali saya dengan kemampuan untuk menjembatani logika teknis dengan kebutuhan klien secara nyata."}
            </p>
          </div>
        </div>

        {/* SECTION 3: QUICK FACTS (The "Human" side) */}
        <div className="border-t border-light-border dark:border-navy-700 pt-16">
          <h3 className="text-xl font-black uppercase tracking-widest mb-10 flex items-center gap-3 text-text-main dark:text-text-darkMain">
            <Terminal size={20} className="text-accent" />
            {lang === "EN" ? "Beyond the screen" : "Di luar layar"}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Location", val: "Surakarta, ID" },
              { label: { EN: "Interests", ID: "Minat" }, val: "Traveling" },
              { label: "Core Stack", val: "Laravel / ReactJS" },
              {
                label: "Status",
                val: { EN: "Available for Work", ID: "Tersedia untuk Bekerja" },
              },
            ].map((fact, index) => (
              <div key={index}>
                <div className="text-[10px] font-black uppercase text-accent mb-2 tracking-wider">
                  {typeof fact.label === "string"
                    ? fact.label
                    : fact.label[lang]}
                </div>
                <div className="text-sm font-bold text-text-main dark:text-text-darkMain">
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
