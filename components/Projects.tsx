const projects = [
  {
    title: "AI Planet",
    href: "http://aiplanet.live",
    body: "参照 http://aihot.virxact.com/ 界面复制的项目，目前正在进一步改造中，计划之后开源。让每个人都可以建立自己的一站式信息收集助手。",
  },
  {
    title: "AI Agent Config Share",
    href: "https://github.com/lindong28/ai-agent-config-share",
    body: "面向 AI Agent 使用者的配置分享项目，聚焦可复用的工作流、提示词和工程实践。",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-16 sm:py-20">
      <h2 className="mb-10 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
        作品和工具
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.href}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[200px] flex-col justify-between rounded-lg border border-white/10 bg-panel/72 p-6 transition hover:-translate-y-1 hover:border-accent-cyan/60 hover:bg-panel-strong/80"
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                {project.body}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
