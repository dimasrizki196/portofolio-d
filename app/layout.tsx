import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlobalBackground from "@/components/ui/GlobalBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dimas | FullStack Web Developer",
  description:
    "Portfolio of Dimas, showcasing web development projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-light-bg text-text-main dark:bg-navy-900 dark:text-text-darkMain transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            {/* SATU CANVAS UNTUK SEMUA */}
            <GlobalBackground />

            <div className="relative z-10 flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
