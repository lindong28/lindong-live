import Image from "next/image";
import { ArrowDown, Github, Linkedin } from "lucide-react";

const tags = ["技术&产品人", "AI 创业者", "开源贡献者"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid min-h-[82svh] scroll-mt-20 items-center gap-10 py-16 md:grid-cols-[1fr_340px] md:py-20"
    >
      <div className="max-w-3xl">
        <p className="mb-5 text-sm font-medium tracking-[0.32em] text-accent-cyan uppercase">
          lindong.live
        </p>
        <h1 className="text-5xl font-semibold tracking-normal text-foreground sm:text-7xl">
          林东
        </h1>
        <p className="mt-6 max-w-2xl text-2xl leading-snug font-semibold text-foreground sm:text-3xl">
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

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition hover:bg-accent-cyan"
          >
            查看作品
            <ArrowDown aria-hidden="true" size={18} strokeWidth={2.2} />
          </a>
          <a
            href="https://www.linkedin.com/in/lindong28/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/12 px-5 text-sm font-semibold text-foreground transition hover:border-accent-violet hover:bg-white/8"
          >
            <Linkedin aria-hidden="true" size={18} strokeWidth={2.1} />
            领英
          </a>
          <a
            href="https://github.com/lindong28"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/12 px-5 text-sm font-semibold text-foreground transition hover:border-accent-emerald hover:bg-white/8"
          >
            <Github aria-hidden="true" size={18} strokeWidth={2.1} />
            GitHub
          </a>
        </div>
      </div>

      <div className="relative mx-auto flex aspect-square w-full max-w-[280px] items-center justify-center md:max-w-[320px]">
        <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-panel/70 shadow-2xl shadow-black/50" />
        <div className="absolute inset-5 rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgb(102_227_255_/_0.16),rgb(167_139_250_/_0.12),rgb(52_211_153_/_0.1))]" />
        <Image
          src="/avatar.jpg"
          alt="林东头像"
          width={160}
          height={160}
          priority
          unoptimized
          sizes="(min-width: 640px) 160px, 144px"
          className="relative h-36 w-36 rounded-full border border-white/15 bg-background object-cover shadow-xl shadow-black/40 sm:h-40 sm:w-40"
        />
      </div>
    </section>
  );
}
