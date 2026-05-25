const tags = ["技术&产品人", "AI 创业者", "开源贡献者"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[82svh] scroll-mt-20 py-16 flex items-center md:py-20"
    >
      <div className="max-w-3xl">
        <h1 className="hero-name pb-2 text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
          Dong Lin
        </h1>
        <p className="mt-8 max-w-2xl text-2xl leading-snug font-semibold text-foreground sm:text-3xl">
          技术&产品人 · 用 AI Agent 重构软件工程
        </p>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          从分布式系统、机器学习基础设施到 AI 产品创业，长期关注怎样把复杂工程变成可复用、可规模化、能真实提升效率的系统。
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
