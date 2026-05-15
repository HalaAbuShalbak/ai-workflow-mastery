"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SECTION_IDS, SITE } from "@/lib/constants";
import { usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const navKeys = [
  { id: SECTION_IDS.about, labelKey: "nav.about" as const },
  { id: SECTION_IDS.objectives, labelKey: "nav.objectives" as const },
  { id: SECTION_IDS.topics, labelKey: "nav.topics" as const },
  { id: SECTION_IDS.methodology, labelKey: "nav.methodology" as const },
  { id: SECTION_IDS.testimonials, labelKey: "nav.testimonials" as const },
  { id: SECTION_IDS.instructor, labelKey: "nav.instructor" as const },
  { id: SECTION_IDS.contact, labelKey: "nav.contact" as const },
];

export function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    setOpen(false);
  };

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(15, 23, 42, 0.72)" : "rgba(2, 6, 23, 0)",
        backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
        borderBottomColor: scrolled ? "rgba(148, 163, 184, 0.12)" : "rgba(148, 163, 184, 0)",
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="font-heading text-start text-sm font-semibold tracking-tight text-[#F8FAFC] transition-opacity hover:opacity-90"
        >
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            PF
          </span>
          <span className="ms-2 hidden sm:inline">Planning Workflows</span>
        </button>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {navKeys.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className="rounded-lg px-3 py-2 text-sm text-[#CBD5E1] transition-colors hover:bg-white/5 hover:text-[#F8FAFC]"
            >
              {t(item.labelKey)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="flex items-center rounded-lg border border-white/10 bg-white/5 p-0.5 text-xs font-medium"
            role="group"
            aria-label={t("nav.language")}
          >
            {(["en", "ar"] as const).map((loc) => (
              <button
                key={loc}
                type="button"
                onClick={() => router.replace(pathname, { locale: loc })}
                className={cn(
                  "rounded-md px-2 py-1 transition-colors",
                  locale === loc
                    ? "bg-blue-500/20 text-[#F8FAFC]"
                    : "text-[#94A3B8] hover:text-[#F8FAFC]",
                )}
                aria-pressed={locale === loc}
              >
                {loc.toUpperCase()}
              </button>
            ))}
          </div>

          <Button
            size="lg"
            className="hidden border-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 text-[#020617] shadow-[0_0_24px_-4px_rgba(59,130,246,0.55)] hover:opacity-95 sm:inline-flex"
            render={
              <a
                href={SITE.workshopBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            {t("nav.book")}
          </Button>

          <button
            type="button"
            className="inline-flex rounded-lg border border-white/10 p-2 text-[#F8FAFC] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-[#020617]/95 px-4 py-4 backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {navKeys.map((item) => (
              <button
                key={item.id}
                type="button"
                className="rounded-lg px-3 py-3 text-start text-sm text-[#CBD5E1]"
                onClick={() => scrollTo(item.id)}
              >
                {t(item.labelKey)}
              </button>
            ))}
            <Button
              className="mt-2 border-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 text-[#020617]"
              render={
                <a
                  href={SITE.workshopBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              {t("nav.book")}
            </Button>
          </div>
        </div>
      ) : null}
    </motion.header>
  );
}
