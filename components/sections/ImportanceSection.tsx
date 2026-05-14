"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { audienceCardsData } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { SECTION_IDS } from "@/lib/constants";

export function ImportanceSection() {
  const t = useTranslations("importance");
  const reduce = useReducedMotion();

  const blockKeys = ["gap", "roles", "prompting"] as const;

  return (
    <section
      id={SECTION_IDS.about}
      className="scroll-mt-24 border-t border-white/5 bg-[#020617] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-8">
            <MotionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
                {t("eyebrow")}
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-[#F8FAFC] sm:text-4xl">
                {t("title")}
              </h2>
              <p className="mt-4 max-w-xl text-lg text-[#CBD5E1]">{t("lead")}</p>
            </MotionReveal>
            <motion.div
              className="grid gap-4"
              variants={staggerContainer}
              initial={reduce ? false : "hidden"}
              whileInView={reduce ? undefined : "visible"}
              viewport={{ once: true, margin: "-80px" }}
            >
              {blockKeys.map((key) => (
                <motion.div
                  key={key}
                  variants={fadeUp}
                  className="rounded-2xl border border-white/10 bg-[#0F172A]/70 p-5 shadow-[0_0_0_1px_rgba(59,130,246,0.06)]"
                >
                  <h3 className="font-heading text-lg font-medium text-[#F8FAFC]">
                    {t(`blocks.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                    {t(`blocks.${key}.body`)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            <MotionReveal>
              <div className="flex flex-wrap gap-2">
                {(t.raw("keywords") as string[]).map((word) => (
                  <span
                    key={word}
                    className="rounded-md bg-gradient-to-r from-blue-500/15 via-cyan-400/10 to-indigo-500/15 px-2.5 py-1 text-xs font-medium text-[#E2E8F0] ring-1 ring-white/10"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </MotionReveal>
          </div>
          <div>
            <MotionReveal>
              <p className="text-sm font-medium text-[#94A3B8]">{t("audienceTitle")}</p>
            </MotionReveal>
            <div className="mt-6 space-y-4">
              {audienceCardsData.map((card, i) => {
                const Icon = card.icon;
                return (
                  <MotionReveal key={card.id} delay={0.06 * i}>
                    <motion.div
                      whileHover={
                        reduce
                          ? undefined
                          : { y: -3, boxShadow: "0 0 40px -12px rgba(34,211,238,0.35)" }
                      }
                      className="group flex gap-4 rounded-2xl border border-white/10 bg-[#0F172A]/80 p-5 transition-colors hover:border-cyan-400/35"
                    >
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-[#22D3EE] ring-1 ring-blue-500/25">
                        <Icon className="size-5" aria-hidden />
                      </div>
                      <div>
                        <h3 className="font-heading text-base font-semibold text-[#F8FAFC]">
                          {t(`audience.${card.audienceKey}.title`)}
                        </h3>
                        <p className="mt-1 text-sm text-[#94A3B8]">
                          {t(`audience.${card.audienceKey}.description`)}
                        </p>
                      </div>
                    </motion.div>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
