"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const keys = [
  "task",
  "plan",
  "prompt",
  "revise",
  "validate",
  "improve",
] as const;

export function HeroWorkflow() {
  const t = useTranslations("hero.workflow");
  const locale = useLocale();
  const rtl = locale === "ar";
  const reduce = useReducedMotion();

  return (
    <div
      className="relative isolate min-h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A]/80 p-6 shadow-[0_0_80px_-24px_rgba(59,130,246,0.35)] sm:min-h-[320px] sm:p-8"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(59,130,246,0.2),transparent_55%),radial-gradient(ellipse_at_80%_60%,rgba(34,211,238,0.12),transparent_50%)]" />
      <svg
        className={cn(
          "pointer-events-none absolute inset-4 opacity-35 sm:inset-8",
          rtl && "scale-x-[-1]",
        )}
        viewBox="0 0 400 140"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="flow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 16 72 C 80 32, 120 110, 200 72 S 320 36, 384 72"
          fill="none"
          stroke="url(#flow)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: reduce ? 0 : 1.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div
        className={cn(
          "relative flex flex-wrap items-stretch justify-center gap-3 sm:gap-4",
          rtl && "flex-row-reverse",
        )}
      >
        {keys.map((key, i) => (
          <motion.div
            key={key}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: reduce ? 0 : 0.07 * i,
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={
              reduce
                ? undefined
                : {
                    y: -2,
                    boxShadow: "0 0 32px -8px rgba(34,211,238,0.35)",
                  }
            }
            className={cn(
              "flex min-w-[88px] flex-1 basis-[28%] flex-col items-center justify-center rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent px-2 py-4 text-center sm:basis-[14%] sm:py-5",
              i === 0 && "ring-1 ring-blue-500/45",
              i === keys.length - 1 && "ring-1 ring-cyan-400/40",
            )}
          >
            <span className="text-xs font-medium text-[#F8FAFC] sm:text-sm">
              {t(key)}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
