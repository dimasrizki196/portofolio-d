"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SplashScreen() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    // Trik Cache-Buster agar animasi SVG selalu mengulang dari awal
    setTimestamp(Date.now().toString());
    setIsLoading(true);

    // Waktu loading diset 1.5 detik (1500ms) agar lebih snappy dan tidak bosan
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-light-bg dark:bg-navy-900 ${
        isLoading
          ? "z-[9999] opacity-100 transition-none backdrop-blur-md" // KUNCI: Muncul secepat kilat (tanpa transisi) untuk menutupi render halaman baru
          : "z-[-1] opacity-0 transition-all duration-700 ease-in-out pointer-events-none backdrop-blur-none" // Hilang dengan mulus (fade-out perlahan)
      }`}
    >
      {/* Container Utama Animasi */}
      <div className="relative flex flex-col items-center justify-center animate-in fade-in duration-300">
        {/* LOGO DENGAN IMG HTML BIASA DENGAN TRIK CACHE-BUSTER */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex justify-center items-center">
          {timestamp && (
            <img
              src={`/images/DR-Logo-Animated-Light.svg?v=${timestamp}`}
              alt="Loading Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            />
          )}
        </div>

        {/* Teks Loading */}
        <div className="mt-8 flex items-center gap-2 text-xs font-black tracking-[0.3em] uppercase text-text-main dark:text-text-darkMain transition-colors">
          <span className="animate-pulse">Loading</span>
          <div className="flex gap-1">
            <span
              className="w-1.5 h-1.5 rounded-full bg-text-main dark:bg-text-darkMain animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></span>
            <span
              className="w-1.5 h-1.5 rounded-full bg-text-main dark:bg-text-darkMain animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></span>
            <span
              className="w-1.5 h-1.5 rounded-full bg-text-main dark:bg-text-darkMain animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}
