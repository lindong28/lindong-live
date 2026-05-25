import Contact from "@/components/Contact";
import CurrentWork from "@/components/CurrentWork";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ShootingStars from "@/components/ShootingStars";
import Starfield from "@/components/Starfield";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen">
      <Starfield />
      <ShootingStars />

      <main className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Hero />
        <Timeline />
        <CurrentWork />
        <Projects />
        <Contact />
      </main>

      <footer className="mx-auto w-full max-w-7xl px-5 pb-10 pt-4 text-sm text-muted sm:px-8">
        <div className="border-t border-white/10 pt-6">
          © 2026 Cyber Rabbit
        </div>
      </footer>
    </div>
  );
}
