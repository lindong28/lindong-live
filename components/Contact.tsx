import { Github, Linkedin } from "lucide-react";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lindong28/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/lindong28",
    icon: Github,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-16 sm:py-20">
      <h2 className="mb-6 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
        联系
      </h2>
      <p className="mb-8 max-w-2xl text-sm leading-7 text-muted sm:text-base">
        如果你也在做 AI Agent、开发者工具、工程基础设施或 AI 产品创业，欢迎联系。
      </p>
      <div className="flex gap-4">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted transition hover:border-accent-cyan/60 hover:text-foreground"
            >
              <Icon aria-hidden="true" size={22} strokeWidth={2.1} />
            </a>
          );
        })}
      </div>
    </section>
  );
}
