"use client";

import { useLanguage } from "@/context/LanguageContext";
import {
  BookOpen,
  Calendar,
  Clock,
  Instagram,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

// DUMMY DATA BLOG POSTS (Fokus Informatika / Software Engineering)
const posts = [
  {
    id: 1,
    category: "Database Architecture",
    date: "April 18, 2026",
    readTime: "5 min read",
    title: {
      EN: "Structuring Scalable Databases with MySQL & Laravel",
      ID: "Struktur Database Skalabel dengan MySQL & Laravel",
    },
    excerpt: {
      EN: "A deep dive into optimizing relationships and queries for administrative systems handling complex, interconnected data.",
      ID: "Pembahasan mendalam tentang optimasi relasi dan kueri untuk sistem administrasi yang menangani data kompleks dan saling terkait.",
    },
    slug: "#",
  },
  {
    id: 2,
    category: "Frontend Development",
    date: "March 24, 2026",
    readTime: "8 min read",
    title: {
      EN: "Mastering State Management in React Applications",
      ID: "Menguasai Manajemen State dalam Aplikasi React",
    },
    excerpt: {
      EN: "A practical guide to building clean and maintainable UI components using Context API and custom hooks.",
      ID: "Panduan praktis membangun komponen UI yang bersih dan mudah dikelola menggunakan Context API dan custom hooks.",
    },
    slug: "#",
  },
  {
    id: 3,
    category: "Backend Optimization",
    date: "February 12, 2026",
    readTime: "6 min read",
    title: {
      EN: "Optimizing API Performance in Laravel",
      ID: "Mengoptimalkan Performa API di Laravel",
    },
    excerpt: {
      EN: "Techniques for reducing response times and optimizing database loads using eager loading and query caching.",
      ID: "Teknik untuk mengurangi waktu respons dan mengoptimalkan beban database menggunakan eager loading dan query caching.",
    },
    slug: "#",
  },
];

export default function BlogPage() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen pt-32 pb-20 bg-light-bg dark:bg-navy-900 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* HEADER SECTION */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <BookOpen size={12} />
            {lang === "EN" ? "Journal & Insights" : "Jurnal & Wawasan"}
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-text-main dark:text-text-darkMain tracking-tighter mb-6 leading-[0.95]">
            {lang === "EN" ? "Thoughts." : "Pemikiran."} <br />
            <span className="text-accent">
              {lang === "EN" ? "Written down." : "Tertulis."}
            </span>
          </h1>
          <p className="max-w-xl text-lg text-text-muted dark:text-text-darkMuted leading-relaxed">
            {lang === "EN"
              ? "Writing about web development, system architecture, clean code, and modern software engineering practices."
              : "Menulis tentang pengembangan web, arsitektur sistem, kode bersih, dan praktik rekayasa perangkat lunak modern."}
          </p>
        </header>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col bg-white dark:bg-navy-800 rounded-[2rem] border border-light-border dark:border-navy-700 overflow-hidden hover:border-accent/50 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="p-8 flex flex-col flex-grow">
                {/* Meta Data */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 bg-light-bg dark:bg-navy-900 text-accent text-[10px] font-black uppercase tracking-widest rounded-lg">
                    {post.category}
                  </span>
                </div>

                {/* Title & Excerpt */}
                <h2 className="text-xl font-bold text-text-main dark:text-text-darkMain leading-tight mb-4 group-hover:text-accent transition-colors">
                  <Link href={post.slug}>
                    {lang === "EN" ? post.title.EN : post.title.ID}
                  </Link>
                </h2>
                <p className="text-sm text-text-muted dark:text-text-darkMuted leading-relaxed mb-8 flex-grow">
                  {lang === "EN" ? post.excerpt.EN : post.excerpt.ID}
                </p>

                {/* Footer Article */}
                <div className="flex items-center justify-between pt-6 border-t border-light-border dark:border-navy-700 mt-auto">
                  <div className="flex items-center gap-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA CONNECT (Instagram & WhatsApp) */}
        <div className="mt-24 p-10 md:p-16 bg-accent rounded-[3rem] text-center text-white relative overflow-hidden shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)]">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">
              {lang === "EN" ? "Let's connect." : "Mari terhubung."}
            </h3>
            <p className="text-white/80 mb-10 text-lg">
              {lang === "EN"
                ? "Want to discuss web development, collaborations, or just say hi? Reach out to me directly or follow my updates."
                : "Ingin berdiskusi tentang pengembangan web, kolaborasi, atau sekadar menyapa? Hubungi saya langsung atau ikuti update saya."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              {/* Instagram Button */}
              <a
                href="https://instagram.com/_dim.rp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-navy-900 text-white font-black text-[10px] tracking-widest rounded-full hover:bg-navy-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Instagram size={18} />
                @_dim.rp
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/6285801051358" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-accent font-black text-[10px] tracking-widest rounded-full hover:bg-light-surface transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <MessageCircle size={18} />
                {lang === "EN" ? "WHATSAPP ME" : "HUBUNGI WA"}
              </a>
            </div>
          </div>

          {/* Subtle background decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>
    </main>
  );
}
