"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const t = useTranslations("faq");
  const items = t.raw("items") as { question: string; answer: string }[];
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-white/5 py-20 sm:py-28">
      <motion.div
        className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial={reduce ? false : "hidden"}
        whileInView={reduce ? undefined : "visible"}
        viewport={{ once: true, margin: "-60px" }}
      >
        <MotionReveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-[#F8FAFC] sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-[#94A3B8]">{t("subtitle")}</p>
        </MotionReveal>

        <motion.div className="mt-14 space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div key={item.question} variants={fadeUp}>
                <motion.div
                  className={cn(
                    "overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A]/70 transition-colors",
                    isOpen && "border-cyan-400/25 bg-[#0F172A]",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-base font-semibold text-[#F8FAFC] sm:text-lg">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "size-5 shrink-0 text-[#22D3EE] transition-transform duration-200",
                        isOpen && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: reduce ? 0 : 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-[#94A3B8] sm:px-6 sm:pb-6">
                      {item.answer}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
