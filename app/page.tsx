import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <Experience />
      <TechStack />
      <Contact />
    </main>
  );
}