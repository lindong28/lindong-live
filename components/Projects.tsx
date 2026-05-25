import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI Planet",
    href: "http://aiplanet.live",
    label: "aiplanet.live",
    body: "面向 AI 时代的信息与产品实验场，持续沉淀对 AI 工具、应用和生态的观察。",
    meta: "AI 产品",
  },
  {
    title: "AI Agent Config Share",
    href: "https://github.com/lindong28/ai-agent-config-share",
    label: "GitHub 仓库",
    body: "面向 AI Agent 使用者的配置分享项目，聚焦可复用的工作流、提示词和工程实践。",
    meta: "开源工具",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-sm font-medium tracking-[0.28em] text-accent-amber uppercase">
          作品与工具
        </p>
        <h2 className="text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
          正在公开迭代的项目
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.href}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[260px] flex-col justify-between rounded-lg border border-white/10 bg-panel/72 p-6 transition hover:-translate-y-1 hover:border-accent-cyan/60 hover:bg-panel-strong/80"
          >
            <div>
              <div className="mb-7 flex items-center justify-between gap-4">
                <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-muted">
                  {project.meta}
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="text-muted transition group-hover:text-accent-cyan"
                  size={21}
                  strokeWidth={2.1}
                />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                {project.body}
              </p>
            </div>
            <span className="mt-8 text-sm font-semibold text-accent-cyan">
              {project.label} →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
