"use client";

import { useTranslations } from "next-intl";
import { ClipboardCheck, Presentation, Users } from "lucide-react";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { buttonVariants } from "@/components/ui/button";
import { SITE, SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MethodologySection() {
  const t = useTranslations("methodology");
  const ta = useTranslations("methodology.activities");
  const performanceBullets = ta.raw("performanceBullets") as string[];
  const peerBullets = ta.raw("peerBullets") as string[];

  return (
    <section
      id={SECTION_IDS.methodology}
      className="scroll-mt-24 border-t border-white/5 bg-[#0F172A]/35 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-[#F8FAFC] sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-[#94A3B8]">{t("subtitle")}</p>
        </MotionReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <MotionReveal>
            <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#020617]/80 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-blue-500/15 text-[#3B82F6]">
                  <ClipboardCheck className="size-5" aria-hidden />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#F8FAFC]">
                  {t("pre.title")}
                </h3>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#94A3B8]">
                {t("pre.description")}
              </p>
              <a
                href={SITE.preAssessmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-6 inline-flex w-full border-0 bg-gradient-to-r from-blue-500 to-cyan-400 text-[#020617] hover:opacity-95 sm:w-auto",
                )}
              >
                {t("pre.cta")}
              </a>
            </article>
          </MotionReveal>

          <MotionReveal delay={0.05}>
            <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-[#0F172A] to-[#020617] p-6 shadow-[0_0_60px_-24px_rgba(99,102,241,0.35)] sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
                  <Presentation className="size-5" aria-hidden />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#F8FAFC]">
                  {t("presentation.title")}
                </h3>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#94A3B8]">
                {t("presentation.description")}
              </p>
              <a
                href={SITE.presentationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "mt-6 inline-flex w-full border-white/20 bg-transparent text-[#F8FAFC] hover:bg-white/5 sm:w-auto",
                )}
              >
                {t("presentation.cta")}
              </a>
            </article>
          </MotionReveal>
        </div>

        <MotionReveal delay={0.08} className="mt-10">
          <h3 className="font-heading text-xl font-semibold text-[#F8FAFC]">
            {ta("title")}
          </h3>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[#020617]/80 p-6">
              <div className="flex items-center gap-2 text-[#22D3EE]">
                <ClipboardCheck className="size-4" aria-hidden />
                <h4 className="font-medium text-[#F8FAFC]">{ta("performanceTitle")}</h4>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-[#94A3B8]">
                {performanceBullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-cyan-400">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#020617]/80 p-6">
              <div className="flex items-center gap-2 text-[#22D3EE]">
                <Users className="size-4" aria-hidden />
                <h4 className="font-medium text-[#F8FAFC]">{ta("peerTitle")}</h4>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-[#94A3B8]">
                {peerBullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-cyan-400">—</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div
                className="mt-6 space-y-3 rounded-xl border border-white/10 bg-[#0F172A] p-4"
                aria-label="Peer feedback preview"
              >
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-blue-500/20 px-3 py-2 text-xs text-[#E2E8F0]">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-blue-300">
                      {ta("chat.you")}
                    </span>
                    {ta("chat.msgYou")}
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-white/10 bg-white/5 px-3 py-2 text-xs text-[#CBD5E1]">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {ta("chat.peer")}
                    </span>
                    {ta("chat.msgPeer")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.1} className="mt-10">
          <article className="rounded-2xl border border-cyan-400/25 bg-gradient-to-r from-blue-500/10 via-[#0F172A] to-indigo-500/10 p-6 sm:p-8">
            <h3 className="font-heading text-lg font-semibold text-[#F8FAFC]">
              {t("post.title")}
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-[#94A3B8]">{t("post.description")}</p>
            <a
              href={SITE.postAssessmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-6 inline-flex border-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 text-[#020617] hover:opacity-95",
              )}
            >
              {t("post.cta")}
            </a>
          </article>
        </MotionReveal>
      </div>
    </section>
  );
}
