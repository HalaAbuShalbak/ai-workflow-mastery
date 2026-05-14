"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { topicRoadmapData } from "@/lib/data";
import { SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { staggerContainer, fadeUp } from "@/lib/animations";
import Aurora from "@/components/animations/Aurora";

export function TopicsRoadmapSection() {
  const t = useTranslations("topics");
  const locale = useLocale();
  const rtl = locale === "ar";
  const reduce = useReducedMotion();

  return (
    <section
      id={SECTION_IDS.topics}
      className="relative scroll-mt-24 overflow-hidden border-t border-white/5 bg-[#020617] py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 z-0 min-h-[28rem] opacity-75 sm:min-h-[32rem]">
        <Aurora
          colorStops={["#1D4ED8", "#22B2D1", "#5B21B6"]}
          blend={0.52}
          amplitude={0.78}
          speed={0.36}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-[#F8FAFC] sm:text-4xl">
            {t("title")}
          </h2>
        </MotionReveal>
        <motion.div
          className="relative mx-auto mt-16 max-w-3xl"
          variants={staggerContainer}
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div
            className={cn(
              "absolute top-0 bottom-8 w-px bg-gradient-to-b from-blue-500/50 via-cyan-400/40 to-indigo-500/30",
              rtl ? "end-4" : "start-4",
            )}
            aria-hidden
          />
          <div className="space-y-10">
            {topicRoadmapData.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                variants={fadeUp}
                className={cn(
                  "relative grid gap-4 ps-12 sm:ps-14",
                  rtl && "ps-0 pe-12 sm:pe-14",
                )}
              >
                <motion.div
                  className={cn(
                    "absolute top-1 size-3 rounded-full border-2 border-cyan-400 bg-[#020617] shadow-[0_0_12px_rgba(34,211,238,0.6)]",
                    rtl ? "end-[10px]" : "start-[10px]",
                  )}
                  initial={reduce ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index, duration: 0.35 }}
                />
                {index < topicRoadmapData.length - 1 ? (
                  <motion.div
                    className={cn(
                      "absolute top-6 bottom-[-2.5rem] w-px bg-gradient-to-b from-cyan-400/40 to-transparent",
                      rtl ? "end-[13px]" : "start-[13px]",
                    )}
                    initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.12 + index * 0.06, duration: 0.5 }}
                    style={{ transformOrigin: "top" }}
                  />
                ) : null}
                <div
                  className={cn(
                    "rounded-2xl border border-white/10 bg-[#0F172A]/80 p-5 sm:p-6",
                    milestone.capstone &&
                      "border-cyan-400/35 bg-gradient-to-br from-blue-500/15 via-[#0F172A] to-indigo-500/10 shadow-[0_0_48px_-16px_rgba(59,130,246,0.4)]",
                  )}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium text-[#94A3B8]">
                      {index + 1}.0
                    </span>
                    {milestone.capstone ? (
                      <span className="rounded-full bg-cyan-400/15 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                        {t("capstoneBadge")}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-[#F8FAFC] sm:text-xl">
                    {t(`items.${index}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#94A3B8] sm:text-base">
                    {t(`items.${index}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
