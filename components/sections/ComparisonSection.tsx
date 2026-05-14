"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { X, Check } from "lucide-react";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function ComparisonSection() {
  const t = useTranslations("comparison");
  const reduce = useReducedMotion();
  const typical = t.raw("typical") as string[];
  const ours = t.raw("ours") as string[];

  return (
    <section className="border-t border-white/5 bg-[#0F172A]/40 py-20 sm:py-28">
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
          className="mt-14 grid gap-6 lg:grid-cols-2"
          variants={staggerContainer}
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-[#020617]/80 p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 text-[#94A3B8]">
              <X className="size-4" aria-hidden />
              <h3 className="font-heading text-lg font-semibold text-[#CBD5E1]">
                {t("typicalTitle")}
              </h3>
            </div>
            <ul className="mt-6 space-y-3">
              {typical.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[#94A3B8]">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-500"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-blue-500/10 via-[#0F172A] to-indigo-500/10 p-6 shadow-[0_0_60px_-20px_rgba(59,130,246,0.45)] sm:p-8"
          >
            <div className="flex items-center gap-2 text-[#22D3EE]">
              <Check className="size-4" aria-hidden />
              <h3 className="font-heading text-lg font-semibold text-[#F8FAFC]">
                {t("oursTitle")}
              </h3>
            </div>
            <ul className="mt-6 space-y-3">
              {ours.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[#E2E8F0]">
                  <Check className="mt-0.5 size-4 shrink-0 text-cyan-400" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
