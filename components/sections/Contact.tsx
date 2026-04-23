"use client";

import { useLanguage } from "@/context/LanguageContext";
import Button from "@/components/ui/Button";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  const { lang } = useLanguage();

  return (
    <section
      id="contact"
      className="w-full py-24 relative z-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* GLOBAL GLOW EFFECT DIHAPUS agar tidak ada cahaya biru yang bocor ke atas */}

        {/* --- CTA BENTO BOX CONTAINER --- */}
        {/* KUNCI SHADOW: Nilai spread negatif yang lebih besar (-20px) memastikan blur shadow tidak merambat naik sama sekali */}
        <div className="bg-light-surface/40 dark:bg-navy-800/40 backdrop-blur-xl border border-light-border dark:border-navy-700 rounded-3xl p-10 md:p-16 shadow-[0_30px_40px_-20px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_40px_-20px_rgba(0,0,0,0.3)] hover:shadow-[0_40px_50px_-20px_rgba(37,99,235,0.15)] hover:border-accent/40 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Kolom Teks (Kiri) */}
            <div className="lg:col-span-8 text-center lg:text-left">
              <h2 className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-5 flex items-center justify-center lg:justify-start gap-3">
                <span className="w-8 h-[2px] bg-accent"></span>
                {lang === "EN" ? "Collaborate" : "Kolaborasi"}
              </h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-text-main dark:text-text-darkMain mb-6 leading-tight transition-all">
                {lang === "EN"
                  ? "Got an interesting idea? Let's make it real."
                  : "Punya ide proyek menarik? Mari buat jadi nyata."}
              </h3>
              <p className="max-w-2xl mx-auto lg:mx-0 text-lg text-text-muted dark:text-text-darkMuted leading-relaxed mb-10 transition-all">
                {lang === "EN"
                  ? "Open for Full Stack Web Development opportunities, technical consulting, or just a chat about digital innovations. Reach out to me today."
                  : "Terbuka untuk peluang Full Stack Web Development, konsultasi teknis, atau sekadar bertukar pikiran tentang inovasi digital. Hubungi saya sekarang."}
              </p>

              {/* Tombol CTA Besar */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
                <a href="mailto:dimasrizki2004@gmail.com?subject=Kolaborasi Proyek">
                  <Button
                    variant="primary"
                    className="w-full sm:w-auto h-14 text-lg"
                  >
                    {lang === "EN"
                      ? "Let's Start a Chat"
                      : "Mari Mulai Mengobrol"}
                    <Send className="ml-3 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Kolom Ikon/Detail (Kanan) */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-6 border-t lg:border-t-0 lg:border-l border-light-border dark:border-navy-700 pt-10 lg:pt-0 lg:pl-10">
              <span className="text-sm font-bold text-text-muted dark:text-text-darkMuted uppercase tracking-widest mb-2">
                {lang === "EN" ? "Connect" : "Terhubung"}
              </span>
              <div className="flex gap-4">
                {[
                  {
                    icon: Linkedin,
                    url: "https://linkedin.com/in/dimasrizki84",
                    name: "LinkedIn",
                  },
                  {
                    icon: Github,
                    url: "https://github.com/dimasrizki196",
                    name: "GitHub",
                  },
                  {
                    icon: Mail,
                    url: "mailto:dimasrizki2004@gmail.com",
                    name: "Email",
                  },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-full bg-light-bg dark:bg-navy-900 border border-light-border dark:border-navy-700 text-text-muted hover:text-accent hover:border-accent hover:shadow-[0_10px_20px_rgba(37,99,235,0.2)] group transition-all duration-300"
                      title={social.name}
                    >
                      <Icon
                        size={24}
                        className="group-hover:scale-110 transition-transform"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
