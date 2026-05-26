const tags = ["技术&产品人", "AI 创业者", "开源贡献者"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[82svh] scroll-mt-20 py-16 flex items-start justify-end pt-[18vh] md:py-20 md:pt-[18vh]"
    >
      <div className="text-right">
        <h1 className="hero-name whitespace-nowrap pb-2 text-4xl font-light uppercase tracking-[0.12em] sm:text-6xl md:text-7xl" style={{ fontFamily: "'Cinzel', serif" }}>
          Cyber Rabbit
        </h1>
        <p className="mt-6 text-2xl font-light uppercase tracking-[0.2em] text-white/70 sm:text-3xl" style={{ fontFamily: "'Cinzel', serif" }}>
          用 AI 重构创作
        </p>

        <div className="mt-8 flex flex-wrap justify-end gap-3">
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
