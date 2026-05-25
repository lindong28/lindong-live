import { Github, Linkedin } from "lucide-react";

const links = [
  {
    label: "领英",
    href: "https://www.linkedin.com/in/lindong28/",
    detail: "职业经历与合作联系",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/lindong28",
    detail: "开源项目与工程实践",
    icon: Github,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-16 sm:py-20">
      <div className="rounded-lg border border-white/10 bg-panel/80 p-6 sm:p-8 md:p-10">
        <div className="grid gap-8 md:grid-cols-[1fr_420px] md:items-center">
          <div>
            <p className="mb-3 text-sm font-medium tracking-[0.28em] text-accent-cyan uppercase">
              找到我
            </p>
            <h2 className="text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
              交流 AI Agent、工程效率与产品机会
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              如果你也在做 AI Agent、开发者工具、工程基础设施或 AI 产品创业，欢迎从下面的公开渠道联系。
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-20 items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-accent-cyan/60 hover:bg-white/9"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-background text-foreground">
                    <Icon aria-hidden="true" size={21} strokeWidth={2.1} />
                  </span>
                  <span>
                    <span className="block font-semibold text-foreground">
                      {link.label}
                    </span>
                    <span className="mt-1 block text-sm text-muted">
                      {link.detail}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
