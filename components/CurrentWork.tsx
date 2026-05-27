import { Blocks, Code2, Rocket } from "lucide-react";

const workItems = [
  {
    title: "Agent 应用与 Infra 创业",
    body: "围绕软件工程工作流，探索 AI Agent 从个人效率工具走向团队基础设施的产品机会。",
    icon: Rocket,
    accent: "text-accent-cyan",
  },
  {
    title: "开源贡献",
    body: "围绕 Agent 运行可观测性、人机交互界面、 可复用 skill 发布开箱可用的开源项目。",
    icon: Code2,
    accent: "text-accent-emerald",
  },
  {
    title: "AI 产品探索",
    body: "把模型能力、上下文工程、工具调用和产品体验结合，提供直接满足终端用户需求的 toC 产品。",
    icon: Blocks,
    accent: "text-accent-violet",
  },
];

export default function CurrentWork() {
  return (
    <section id="current" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium tracking-[0.28em] text-accent-emerald uppercase">
            我在做什么
          </p>
          <h2 className="text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
            把 AI 落到真实工程场景
          </h2>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {workItems.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="group min-h-[250px] rounded-lg border border-white/10 bg-panel/72 p-6 transition hover:-translate-y-1 hover:border-white/18 hover:bg-panel-strong/80"
            >
              <div
                className={`mb-8 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/6 ${item.accent}`}
              >
                <Icon aria-hidden="true" size={22} strokeWidth={2.1} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
