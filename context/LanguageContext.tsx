"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type LanguageContextType = {
  lang: "EN" | "ID";
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<"EN" | "ID">("EN");
  
  const toggleLang = () => {
    setLang((prev) => (prev === "EN" ? "ID" : "EN"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}