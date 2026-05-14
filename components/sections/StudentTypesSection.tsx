"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { studentPersonasData } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function StudentTypesSection() {
  const t = useTranslations("studentTypes");
  const reduce = useReducedMotion();

  return (
    <section className="border-t border-white/5 py-20 sm:py-28">
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
          className="mt-14 grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
        >
          {studentPersonasData.map((persona) => {
            const features = t.raw(
              `${persona.variant}.features`,
            ) as string[];
            return (
              <motion.article
                key={persona.id}
                variants={fadeUp}
                whileHover={
                  reduce
                    ? undefined
                    : {
                        y: -4,
                        boxShadow:
                          persona.variant === "max"
                            ? "0 0 48px -8px rgba(99,102,241,0.45)"
                            : "0 0 36px -10px rgba(34,211,238,0.25)",
                      }
                }
                className={cn(
                  "flex flex-col rounded-2xl border border-white/10 bg-[#0F172A]/70 p-6",
                  persona.variant === "weak" &&
                    "border-cyan-400/20 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.08)]",
                  persona.variant === "max" &&
                    "border-indigo-400/35 bg-gradient-to-b from-indigo-500/10 to-[#0F172A]",
                )}
              >
                <h3 className="font-heading text-lg font-semibold text-[#F8FAFC]">
                  {t(`${persona.variant}.title`)}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-[#94A3B8]">
                  {features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-cyan-400">▹</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
