"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { testimonialsData } from "@/lib/data";
import { SECTION_IDS } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const tRoot = useTranslations();
  const reduce = useReducedMotion();

  return (
    <section
      id={SECTION_IDS.testimonials}
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
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2"
          variants={staggerContainer}
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
        >
          {testimonialsData.map((item) => (
            <motion.figure
              key={item.id}
              variants={fadeUp}
              className={cn(
                "flex flex-col rounded-2xl border border-white/10 bg-[#0F172A]/70 p-5 transition-colors hover:border-cyan-400/25",
                item.span === "lg" && "lg:col-span-2 lg:row-span-2",
                item.span === "md" && "lg:col-span-2",
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-400/20 text-xs font-semibold text-[#F8FAFC]"
                  aria-hidden
                >
                  {item.initials}
                </div>
                <figcaption>
                  <p className="font-medium text-[#F8FAFC]">
                    {tRoot(`testimonials.items.${item.id}.name` as never)}
                  </p>
                  <p className="text-xs text-[#64748B]">
                    {tRoot(`testimonials.items.${item.id}.role` as never)}
                  </p>
                </figcaption>
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[#CBD5E1]">
                “{tRoot(`testimonials.items.${item.id}.quote` as never)}”
              </blockquote>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
