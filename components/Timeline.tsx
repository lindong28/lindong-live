const timelineItems = [
  {
    time: "2010",
    title: "上海交通大学 ACM 班",
    body: "从算法、系统与工程基本功开始，建立对复杂问题的拆解习惯。",
  },
  {
    time: "2015",
    title: "宾夕法尼亚大学 CS PhD",
    body: "在计算机科学研究中训练严谨的问题定义、实验验证与技术表达。",
  },
  {
    time: "之后",
    title: "LinkedIn 与 Google Brain",
    body: "进入工业级数据、机器学习与基础设施场景，参与真实规模系统建设。",
  },
  {
    time: "后来",
    title: "阿里云与字节跳动",
    body: "把技术判断、产品判断和组织协作放在同一张图里，持续推进工程效率。",
  },
  {
    time: "10+ 年",
    title: "开源基础设施",
    body: "Apache Flink PMC、Apache Kafka PMC、TensorFlow 贡献者，长期投入开源社区。",
  },
  {
    time: "现在",
    title: "All in AI",
    body: "专注 AI Agent 应用与 Infra，用新一代工具链重构软件工程工作流。",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-sm font-medium tracking-[0.28em] text-accent-violet uppercase">
          关于我
        </p>
        <h2 className="text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
          从系统工程到 AI Agent
        </h2>
      </div>

      <ol className="relative ml-2 border-l border-white/12 pl-8 md:ml-0 md:grid md:grid-cols-2 md:gap-x-10 md:border-l-0 md:pl-0">
        {timelineItems.map((item, index) => (
          <li
            key={`${item.time}-${item.title}`}
            className="relative pb-9 md:grid md:grid-cols-[96px_1fr] md:gap-6 md:border-l md:border-white/12 md:pl-8"
          >
            <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border border-background bg-accent-cyan shadow-[0_0_0_6px_rgb(102_227_255_/_0.12)] md:-left-[7px]" />
            <span className="mb-2 block font-mono text-sm text-accent-cyan">
              {item.time}
            </span>
            <div className="rounded-lg border border-white/10 bg-panel/72 p-5 transition hover:-translate-y-0.5 hover:border-white/18 hover:bg-panel-strong/80">
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
            </div>
            {index === timelineItems.length - 1 ? (
              <span className="absolute bottom-0 left-[-33px] h-8 w-px bg-background md:left-0" />
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
