"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { objectivesData } from "@/lib/data";
import { SECTION_IDS } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function ObjectivesSection() {
  const t = useTranslations("objectives");
  const reduce = useReducedMotion();

  return (
    <section
      id={SECTION_IDS.objectives}
      className="scroll-mt-24 border-t border-white/5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-[#F8FAFC] sm:text-4xl">
            {t("title")}
          </h2>
        </MotionReveal>
        <motion.div
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
        >
          {objectivesData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                whileHover={
                  reduce
                    ? undefined
                    : {
                        y: -4,
                        boxShadow: "0 0 40px -12px rgba(59,130,246,0.35)",
                      }
                }
                className="flex flex-col rounded-2xl border border-white/10 bg-[#0F172A]/70 p-6 transition-colors hover:border-blue-500/30"
              >
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-blue-500/15 text-[#3B82F6]">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#F8FAFC]">
                  {t(`items.${index}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                  {t(`items.${index}.description`)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
