import Contact from "@/components/Contact";
import CurrentWork from "@/components/CurrentWork";
import Globe from "@/components/Globe";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ShootingStars from "@/components/ShootingStars";
import Starfield from "@/components/Starfield";
import Timeline from "@/components/Timeline";

const navItems = [
  { href: "#hero", label: "首页" },
  { href: "#timeline", label: "经历" },
  { href: "#current", label: "现在" },
  { href: "#projects", label: "作品" },
  { href: "#contact", label: "联系" },
];

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <Starfield />
      <ShootingStars />
      <div className="pointer-events-none fixed right-[-15%] top-[-10%] -z-10 hidden md:block">
        <Globe />
      </div>
      <header className="sticky top-0 z-50 border-b border-white/8 bg-background/78 backdrop-blur-xl">
        <nav
          aria-label="主导航"
          className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
        >
          <a
            href="#hero"
            className="text-sm font-semibold tracking-[0.24em] text-foreground uppercase"
          >
            林东
          </a>
          <div className="flex items-center gap-1 text-sm text-muted">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 transition hover:bg-white/8 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Hero />
        <Timeline />
        <CurrentWork />
        <Projects />
        <Contact />
      </main>

      <footer className="mx-auto w-full max-w-6xl px-5 pb-10 pt-4 text-sm text-muted sm:px-8">
        <div className="border-t border-white/10 pt-6">
          © 2026 林东。用 AI Agent 重构软件工程。
        </div>
      </footer>
    </div>
  );
}
