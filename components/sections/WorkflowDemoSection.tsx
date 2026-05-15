"use client";

import { Fragment } from "react";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

const stepPillClass =
  "rounded-xl border border-white/10 bg-[#020617] px-2.5 py-1.5 text-center text-xs text-[#CBD5E1] sm:px-3 sm:py-2 sm:text-sm md:text-sm lg:px-4 lg:py-3 lg:text-base";

const strongStepPillClass =
  "w-full rounded-xl border border-cyan-400/20 bg-[#020617]/90 px-2.5 py-1.5 text-center text-xs font-medium text-[#F8FAFC] shadow-[0_0_24px_-8px_rgba(34,211,238,0.25)] sm:max-w-xs sm:px-3 sm:py-2 sm:text-sm md:text-sm lg:px-4 lg:py-3 lg:text-base";

export function WorkflowDemoSection() {
  const t = useTranslations("workflowDemo");
  const reduce = useReducedMotion();
  const weak = t.raw("weakFlow") as string[];
  const strong = t.raw("strongSteps") as string[];

  return (
    <section className="border-t border-white/5 py-12 sm:py-20 lg:py-28">
      <motion.div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-[#F8FAFC] sm:text-3xl lg:text-4xl">
            {t("title")}
          </h2>
        </MotionReveal>
        <motion.div
          className="mt-8 grid gap-5 sm:mt-14 sm:gap-8"
          variants={staggerContainer}
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-red-500/20 bg-[#0F172A]/60 p-4 sm:p-8"
          >
            <h3 className="font-heading text-sm font-semibold text-[#FCA5A5] sm:text-base lg:text-lg">
              {t("weakTitle")}
            </h3>
            <motion.div className="mt-4 flex flex-col items-stretch gap-2 sm:mt-8 sm:flex-row sm:items-center sm:gap-3">
              {weak.map((label, i) => (
                <Fragment key={label}>
                  <div className={stepPillClass}>{label}</div>
                  {i < weak.length - 1 ? (
                    <>
                      <ArrowDown
                        className="mx-auto size-5 shrink-0 text-slate-500 sm:hidden"
                        aria-hidden
                      />
                      <ArrowRight
                        className="hidden size-5 shrink-0 text-slate-500 sm:block lg:size-8"
                        aria-hidden
                      />
                    </>
                  ) : null}
                </Fragment>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-emerald-500/25 bg-gradient-to-b from-emerald-500/5 to-[#0F172A] p-4 sm:p-8"
          >
            <h3 className="font-heading text-sm font-semibold text-[#6EE7B7] sm:text-base lg:text-lg">
              {t("strongTitle")}
            </h3>
            <motion.div
              className={cn(
                "mt-4 grid grid-cols-2 gap-2",
                "sm:mt-8 sm:flex sm:flex-row sm:items-center sm:gap-3",
              )}
            >
              {strong.map((label, i) => (
                <Fragment key={label}>
                  <motion.div
                    className={strongStepPillClass}
                    whileHover={
                      reduce
                        ? undefined
                        : { scale: 1.01, borderColor: "rgba(34,211,238,0.45)" }
                    }
                  >
                    {label}
                  </motion.div>
                  {i < strong.length - 1 ? (
                    <ArrowRight
                      className="hidden size-5 shrink-0 text-cyan-400 sm:block lg:size-8"
                      aria-hidden
                    />
                  ) : null}
                </Fragment>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
