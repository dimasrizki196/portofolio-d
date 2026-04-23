"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  // Panggil data bahasa dari context global
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="text-sm font-medium text-text-muted dark:text-text-darkMuted px-3 py-1.5 bg-light-bg/50 dark:bg-navy-700/50 rounded-full border border-light-border dark:border-navy-700 hover:text-accent dark:hover:text-accent-dark hover:bg-light-border dark:hover:bg-navy-600 transition-colors focus:outline-none"
    >
      {lang}
    </button>
  );
}
