"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { buttonVariants } from "@/components/ui/button";
import { SITE, SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Aurora from "@/components/animations/Aurora";

export function CtaSection() {
  const t = useTranslations("cta");

  return (
    <section
      id={SECTION_IDS.contact}
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 z-0 min-h-[20rem] opacity-80">
        <Aurora
          colorStops={["#22B2D1", "#B497CF", "#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#020617] via-[#020617]/55 to-[#020617]" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <MotionReveal>
          <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight text-[#F8FAFC] sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-[#94A3B8]">
            {t("subtitle")}
          </p>
        </MotionReveal>
        <MotionReveal
          delay={0.08}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={SITE.workshopBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 min-w-[180px] border-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 px-8 text-[#020617] shadow-[0_0_40px_-8px_rgba(59,130,246,0.55)] hover:opacity-95",
            )}
          >
            {t("book")}
          </a>
          <a
            href={SITE.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 min-w-[180px] border-white/20 bg-transparent text-[#F8FAFC] hover:bg-white/5",
            )}
          >
            {t("linkedin")}
            <ArrowUpRight className="ms-1 size-4" />
          </a>
        </MotionReveal>
      </div>
    </section>
  );
}
