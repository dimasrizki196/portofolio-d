"use client";

import { useTheme } from "next-themes";
import { Sun, MoonStar } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mencegah hydration error di Next.js
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-16 h-8"></div>;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-16 h-8 bg-gray-200 dark:bg-navy-900 rounded-full flex items-center shadow-inner-neumorphic transition-colors focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      {/* Lingkaran Putih Mengambang */}
      <div
        className={`absolute left-1 top-1 w-6 h-6 bg-white dark:bg-navy-700 rounded-full shadow-neumorphic-light dark:shadow-neumorphic-dark transition-transform duration-300 transform ${
          isDark ? "translate-x-8" : "translate-x-0"
        }`}
      ></div>
      
      {/* Ikon Matahari (Light Mode) */}
      <div className="absolute left-1.5 w-5 h-5 flex items-center justify-center z-10">
        <Sun className={`w-3.5 h-3.5 ${isDark ? "text-gray-500" : "text-amber-500"}`} />
      </div>

      {/* Ikon Bulan (Dark Mode) */}
      <div className="absolute right-1.5 w-5 h-5 flex items-center justify-center z-10">
        <MoonStar className={`w-3.5 h-3.5 ${isDark ? "text-blue-400" : "text-gray-400"}`} />
      </div>
    </button>
  );
}