"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { metricsData, experienceHighlightsData } from "@/lib/data";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function InstructorSection() {
  const t = useTranslations("instructor");

  return (
    <section className="border-t border-white/5 bg-[#020617] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <MotionReveal>
            <figure className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-2xl border border-white/10 bg-[#020617] shadow-[0_0_80px_-24px_rgba(59,130,246,0.45)] ring-1 ring-white/5 lg:mx-0">
              <Image
                src="/images/instructor-portrait.png"
                alt={t("imageAlt")}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"
                aria-hidden
              />
            </figure>
          </MotionReveal>
          <div className="space-y-6">
            <MotionReveal delay={0.05}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
                {t("eyebrow")}
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-[#F8FAFC] sm:text-4xl">
                {t("title")}
              </h2>
              <p className="mt-4 text-lg text-[#CBD5E1]">{t("description")}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
                {t("background")}
              </p>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {metricsData.map((m, index) => (
                  <div
                    key={m.id}
                    className="rounded-xl border border-white/10 bg-[#0F172A]/80 p-4"
                  >
                    <p className="font-heading text-2xl font-semibold tabular-nums text-[#F8FAFC]">
                      <AnimatedCounter value={m.value} />
                      {m.suffix}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-[#94A3B8]">
                      {t(`metricLabels.${String(index)}` as "metricLabels.0")}
                    </p>
                  </div>
                ))}
              </div>
            </MotionReveal>
            <MotionReveal delay={0.1}>
              <p className="text-sm font-medium text-[#CBD5E1]">
                {t("experienceTitle")}
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {experienceHighlightsData.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={item.id}
                      className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 text-sm text-[#94A3B8]"
                    >
                      <Icon
                        className="size-4 shrink-0 text-[#22D3EE]"
                        aria-hidden
                      />
                      {t(`experience.${String(index)}` as "experience.0")}
                    </li>
                  );
                })}
              </ul>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
