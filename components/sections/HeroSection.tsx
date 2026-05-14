"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { SECTION_IDS } from "@/lib/constants";
import { HeroWorkflow } from "@/components/sections/HeroWorkflow";
import Aurora from "@/components/animations/Aurora";

export function HeroSection() {
  const t = useTranslations();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 z-0 min-h-[22rem] opacity-90 sm:min-h-[24rem]">
        <Aurora
          colorStops={["#2563EB", "#22D3EE", "#6366F1"]}
          blend={0.48}
          amplitude={0.95}
          speed={0.42}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#020617] via-[#020617]/40 to-[#020617]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.12),transparent),radial-gradient(ellipse_60%_40%_at_100%_0%,rgba(34,211,238,0.06),transparent)]" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div className="space-y-8">
          <MotionReveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#22D3EE]">
              <Sparkles className="size-3.5" aria-hidden />
              <span>{t("hero.eyebrow")}</span>
            </p>
          </MotionReveal>
          <MotionReveal delay={0.05}>
            <h1 className="font-heading text-balance text-4xl font-semibold tracking-tight text-[#F8FAFC] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              {t("hero.title")}
            </h1>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="max-w-xl text-pretty text-lg text-[#CBD5E1] sm:text-xl">
              {t("hero.subtitle")}
            </p>
          </MotionReveal>
          <MotionReveal delay={0.12}>
            <ul className="flex flex-wrap gap-2 text-sm text-[#94A3B8]">
              {(
                [
                  "hero.bullets.duration",
                  "hero.bullets.level",
                  "hero.bullets.practical",
                  "hero.bullets.scenarios",
                ] as const
              ).map((key) => (
                <li
                  key={key}
                  className="rounded-lg border border-white/10 bg-[#0F172A]/60 px-3 py-1.5"
                >
                  {t(key)}
                </li>
              ))}
            </ul>
          </MotionReveal>
          <MotionReveal delay={0.15}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="h-11 border-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 px-6 text-[#020617] shadow-[0_0_28px_-6px_rgba(59,130,246,0.55)] hover:opacity-95"
                onClick={() => scrollTo(SECTION_IDS.contact)}
              >
                {t("hero.ctaPrimary")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-11 border-white/15 bg-transparent text-[#F8FAFC] hover:bg-white/5"
                onClick={() => scrollTo(SECTION_IDS.topics)}
              >
                {t("hero.ctaSecondary")}
                <ArrowRight className="ms-1 size-4 rtl:rotate-180" />
              </Button>
            </div>
          </MotionReveal>
        </div>
        <MotionReveal delay={0.08} className="lg:justify-self-end">
          <HeroWorkflow />
        </MotionReveal>
      </div>
    </section>
  );
}
