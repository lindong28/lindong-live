"use client";

import { useEffect, useRef, useState } from "react";

const REVEAL_THRESHOLD = 0.55;

const timelineItems = [
  {
    time: "2006",
    title: "上海交通大学 ACM 班",
  },
  {
    time: "2010",
    title: "UPenn 计算机博士",
  },
  {
    time: "2015",
    title: "LinkedIn 与 Google Brain",
  },
  {
    time: "2021",
    title: "阿里云与字节跳动",
  },
  {
    time: "2026",
    title: "All in AI",
  },
];

const opensourceItems = [
  {
    time: "2018",
    title: "Kafka",
    role: "Committer & PMC",
    left: "60%",
    delay: 1500,
  },
  {
    time: "2022",
    title: "Flink",
    role: "Committer & PMC",
    left: "74%",
    delay: 1920,
  },
  {
    time: "2025",
    title: "ASF",
    role: "Member",
    left: "86%",
    delay: 2280,
  },
];

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Animation constants
  const TOTAL_DURATION = 4000;
  const numItems = timelineItems.length;
  const trackOffsetValue = 100 / (numItems * 2); // 10%
  const trackWidth = 100 - 2 * trackOffsetValue; // 80%
  const segmentDuration = TOTAL_DURATION / (numItems - 1); // 1000ms
  
  const trackOffset = `${trackOffsetValue}%`;

  useEffect(() => {
    const section = sectionRef.current;
    let observer: IntersectionObserver | null = null;
    let frame: number | null = null;
    let revealed = false;

    if (!section) {
      return;
    }

    const reveal = () => {
      if (revealed) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const visibleHeight =
        Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);
      const visibleRatio = Math.max(0, visibleHeight) / rect.height;

      if (visibleRatio >= REVEAL_THRESHOLD) {
        revealed = true;
        setIsVisible(true);
        observer?.disconnect();
        window.removeEventListener("scroll", scheduleRevealCheck);
        window.removeEventListener("resize", scheduleRevealCheck);
      }
    };

    const scheduleRevealCheck = () => {
      if (frame !== null) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        frame = null;
        reveal();
      });
    };

    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting &&
            entry.intersectionRatio >= REVEAL_THRESHOLD
          ) {
            reveal();
          }
        },
        { threshold: [0, REVEAL_THRESHOLD] },
      );

      observer.observe(section);
    }

    window.addEventListener("scroll", scheduleRevealCheck, { passive: true });
    window.addEventListener("resize", scheduleRevealCheck);
    scheduleRevealCheck();

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", scheduleRevealCheck);
      window.removeEventListener("resize", scheduleRevealCheck);
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="scroll-mt-20 py-16 sm:py-20"
    >
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-sm font-medium tracking-[0.28em] text-accent-violet uppercase">
          关于我
        </p>
        <h2 className="text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
          从系统工程到 AI Agent
        </h2>
      </div>

      <div
        className="overflow-x-auto overflow-y-visible pb-32 pt-8 [scrollbar-width:thin] [scrollbar-color:rgb(255_255_255_/_0.18)_transparent]"
        aria-label="关于我的经历时间线"
      >
        <div className="relative min-w-[54rem] pr-4 sm:min-w-[60rem] lg:min-w-0 lg:pr-0">
          <div
            className="absolute top-[7.5rem] h-px"
            style={{ left: trackOffset, right: trackOffset }}
            aria-hidden="true"
          >
            {Array.from({ length: timelineItems.length - 1 }).map((_, i) => {
              const segLeft = `${(i / (timelineItems.length - 1)) * 100}%`;
              const segWidth = `${(1 / (timelineItems.length - 1)) * 100}%`;
              return (
                <span
                  key={`seg-${i}`}
                  className="timeline-draw-line absolute top-0 h-full"
                  style={{
                    left: segLeft,
                    width: segWidth,
                    padding: "0 12px",
                    clipPath: "inset(0 12px 0 12px)",
                    background: "linear-gradient(90deg, rgba(247,171,66,0.85), rgba(247,171,66,0.2))",
                    boxShadow: "0 0 12px rgba(247,171,66,0.4), 0 0 30px rgba(247,171,66,0.15)",
                    transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                    transition: `transform ${segmentDuration}ms linear ${i * segmentDuration}ms`,
                  }}
                />
              );
            })}
            <span
              className="timeline-spark absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fcd34d] shadow-[0_0_8px_2px_rgb(252_211_77_/_0.9),0_0_18px_6px_rgb(247_171_66_/_0.5),0_0_42px_12px_rgb(247_171_66_/_0.2)]"
              style={{
                left: isVisible ? "100%" : "0%",
                opacity: isVisible ? 1 : 0,
                transition: `left ${TOTAL_DURATION}ms linear, opacity 180ms ease`,
              }}
            />
          </div>

          <ol className="relative grid grid-cols-5">
            {timelineItems.map((item, index) => (
              <li
                key={`${item.time}-${item.title}`}
                className={`timeline-reveal-item relative flex h-[7.5rem] flex-col items-center px-3 text-center transition-[opacity,transform] duration-[760ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * segmentDuration}ms` : "0ms",
                }}
              >
                <span className="font-mono text-sm font-semibold tracking-[0.18em] text-[#f7ab42]/85">
                  {item.time}
                </span>
                <h3 className="mt-2 max-w-36 text-base font-semibold leading-snug text-foreground sm:max-w-40">
                  {item.title}
                </h3>
                <div className="flex-1 w-px border-l border-dashed border-[#f7ab42]/40" />
                <span className="h-3 w-3 translate-y-1/2 rounded-full border border-background bg-[#f7ab42] shadow-[0_0_0_6px_rgb(247_171_66_/_0.15),0_0_20px_rgb(247_171_66_/_0.45)]" />
              </li>
            ))}
          </ol>

          {opensourceItems.map((item) => {
            const leftPercent = parseFloat(item.left);
            const progress = (leftPercent - trackOffsetValue) / trackWidth;
            const delay = progress * TOTAL_DURATION;
            
            return (
              <div
                key={item.title}
                className="absolute top-[7.5rem]"
                style={{ left: item.left }}
              >
                <div
                  className={`timeline-reveal-item flex -translate-x-1/2 flex-col items-center text-center transition-[opacity,transform] duration-[760ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${delay}ms` : "0ms",
                  }}
                >
                  <div className="h-8 w-px border-l border-dashed border-[#f7ab42]/40" aria-hidden="true" />
                  <span className="h-2 w-2 rounded-full border border-background bg-[#f7ab42]/60 shadow-[0_0_0_4px_rgb(247_171_66_/_0.1),0_0_12px_rgb(247_171_66_/_0.2)]" />
                  <h4 className="mt-3 whitespace-nowrap text-base font-semibold leading-snug text-foreground">
                    {item.title}
                  </h4>
                  <span className="mt-1 whitespace-nowrap text-base font-semibold leading-snug text-foreground">
                    {item.role}
                  </span>
                  <span className="mt-1 font-mono text-sm font-semibold tracking-[0.18em] text-[#f7ab42]/85">
                    {item.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .timeline-reveal-item {
          will-change: opacity, transform;
        }

        .timeline-spark::after {
          content: '';
          position: absolute;
          top: 50%;
          right: 100%;
          width: 48px;
          height: 2px;
          transform: translateY(-50%);
          background: linear-gradient(90deg, transparent, rgba(252, 211, 77, 0.8));
          border-radius: 1px;
          filter: blur(1px);
        }

        @media (prefers-reduced-motion: reduce) {
          .timeline-draw-line,
          .timeline-spark,
          .timeline-reveal-item {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
