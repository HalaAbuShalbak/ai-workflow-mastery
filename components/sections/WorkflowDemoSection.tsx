"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function WorkflowDemoSection() {
  const t = useTranslations("workflowDemo");
  const reduce = useReducedMotion();
  const weak = t.raw("weakFlow") as string[];
  const strong = t.raw("strongSteps") as string[];

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
          className="mt-14 grid gap-8 lg:grid-rows-2 lg:grid-cols-1"
          variants={staggerContainer}
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-red-500/20 bg-[#0F172A]/60 p-6 sm:p-8"
          >
            <h3 className="font-heading text-lg font-semibold text-[#FCA5A5]">
              {t("weakTitle")}
            </h3>
            <div className="mt-8 flex flex-row items-center gap-3">
              {weak.map((label, i) => (
                <div key={label} className="flex flex-row items-center gap-3">
                  <div className="rounded-xl border border-white/10 bg-[#020617] px-4 py-3 text-lg text-[#CBD5E1]">
                    {label}
                  </div>
                  {i < weak.length - 1 ? (
                    <ArrowRight className="size-8 text-slate-500" aria-hidden />
                  ) : null}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-emerald-500/25 bg-gradient-to-b from-emerald-500/5 to-[#0F172A] p-6 sm:p-8"
          >
            <h3 className="font-heading text-lg font-semibold text-[#6EE7B7]">
              {t("strongTitle")}
            </h3>
            <div className="mt-8 flex flex-row items-center gap-3">
              {strong.map((label, i) => (
                <div key={label} className="flex flex-row items-center gap-3">
                  <motion.div
                    className="w-full max-w-xs rounded-xl border border-cyan-400/20 bg-[#020617]/90 px-4 py-3 text-center text-lg font-medium text-[#F8FAFC] shadow-[0_0_24px_-8px_rgba(34,211,238,0.25)]"
                    whileHover={
                      reduce
                        ? undefined
                        : { scale: 1.01, borderColor: "rgba(34,211,238,0.45)" }
                    }
                  >
                    {label}
                  </motion.div>
                  {i < strong.length - 1 ? (
                    <ArrowRight className="size-8 text-cyan-400" aria-hidden />
                  ) : null}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
