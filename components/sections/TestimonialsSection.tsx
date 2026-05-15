"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { testimonialsData, type TestimonialEntry } from "@/lib/data";
import { SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LayoutMode = "sm" | "md" | "lg";

const CARDS_PER_PAGE: Record<LayoutMode, number> = {
  sm: 1,
  md: 2,
  lg: 4,
};

function chunkPages<T>(items: T[], size: number): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages;
}

function useLayoutMode(): LayoutMode {
  const [mode, setMode] = useState<LayoutMode>("sm");

  useEffect(() => {
    const md = window.matchMedia("(min-width: 768px)");
    const lg = window.matchMedia("(min-width: 1024px)");

    const update = () => {
      if (lg.matches) setMode("lg");
      else if (md.matches) setMode("md");
      else setMode("sm");
    };

    update();
    md.addEventListener("change", update);
    lg.addEventListener("change", update);
    return () => {
      md.removeEventListener("change", update);
      lg.removeEventListener("change", update);
    };
  }, []);

  return mode;
}

function pageGridClass(mode: LayoutMode) {
  return cn(
    "gap-4 sm:gap-5",
    mode === "lg" && "grid-cols-2 grid-rows-2",
    mode === "md" && "grid-cols-2",
    mode === "sm" && "grid-cols-1",
  );
}

function TestimonialCard({ item }: { item: TestimonialEntry }) {
  const t = useTranslations("testimonials");
  const tRoot = useTranslations();
  const [expanded, setExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const quote = tRoot(`testimonials.items.${item.id}.quote` as never);

  const measureClamp = useCallback(() => {
    const el = quoteRef.current;
    if (!el || expanded) return;
    setCanExpand(el.scrollHeight > el.clientHeight + 1);
  }, [expanded, quote]);

  useEffect(() => {
    setExpanded(false);
  }, [quote]);

  useEffect(() => {
    measureClamp();
    window.addEventListener("resize", measureClamp);
    return () => window.removeEventListener("resize", measureClamp);
  }, [measureClamp]);

  return (
    <figure className="flex h-64 flex-col rounded-2xl border border-white/10 bg-[#0F172A]/70 p-5 transition-colors hover:border-cyan-400/25 sm:h-72">
      <div className="flex shrink-0 items-center gap-3">
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
          <p className="line-clamp-2 text-xs text-[#64748B]">
            {tRoot(`testimonials.items.${item.id}.role` as never)}
          </p>
        </figcaption>
      </div>

      <div className="mt-4 flex min-h-0 flex-1 flex-col">
        <blockquote
          ref={quoteRef}
          className={cn(
            "text-sm leading-relaxed text-[#CBD5E1]",
            !expanded && "line-clamp-5",
            expanded && "min-h-0 flex-1 overflow-y-auto pr-1",
          )}
        >
          “{quote}”
        </blockquote>
        {canExpand ? (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="mt-2 shrink-0 self-start text-xs font-medium text-[#22D3EE] transition-colors hover:text-cyan-300"
          >
            {expanded ? t("readLess") : t("readMore")}
          </button>
        ) : null}
      </div>
    </figure>
  );
}

export function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const reduce = useReducedMotion();
  const layoutMode = useLayoutMode();
  const scrollRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activePage, setActivePage] = useState(0);

  const pages = useMemo(
    () => chunkPages(testimonialsData, CARDS_PER_PAGE[layoutMode]),
    [layoutMode],
  );

  const scrollToPage = useCallback(
    (pageIndex: number) => {
      const clamped = Math.max(0, Math.min(pages.length - 1, pageIndex));
      pageRefs.current[clamped]?.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "nearest",
        inline: "start",
      });
      setActivePage(clamped);
    },
    [pages.length, reduce],
  );

  useEffect(() => {
    pageRefs.current = [];
    setActivePage(0);
    scrollRef.current?.scrollTo({ left: 0, behavior: "auto" });
  }, [layoutMode]);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.page);
        if (!Number.isNaN(index)) setActivePage(index);
      },
      { root, threshold: 0.55 },
    );

    pageRefs.current.forEach((page) => {
      if (page) observer.observe(page);
    });

    return () => observer.disconnect();
  }, [pages.length, layoutMode]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1;
      scrollToPage(activePage + direction);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [activePage, scrollToPage]);

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
          className="mt-14"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
        >
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {pages.map((pageItems, pageIndex) => (
              <div
                key={`${layoutMode}-${pageIndex}`}
                ref={(node) => {
                  pageRefs.current[pageIndex] = node;
                }}
                data-page={pageIndex}
                className={cn(
                  "grid w-full min-w-full shrink-0 snap-center",
                  pageGridClass(layoutMode),
                )}
              >
                {pageItems.map((item) => (
                  <TestimonialCard key={item.id} item={item} />
                ))}
              </div>
            ))}
          </div>

          <div
            className="mt-8 flex items-center justify-center gap-2"
            role="tablist"
            aria-label={t("paginationLabel")}
          >
            {pages.map((_, pageIndex) => {
              const isActive = activePage === pageIndex;
              return (
                <button
                  key={`${layoutMode}-dot-${pageIndex}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={t("pageLabel", { page: pageIndex + 1 })}
                  onClick={() => scrollToPage(pageIndex)}
                  className={cn(
                    "rounded-full transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]",
                    isActive
                      ? "size-2.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 shadow-[0_0_14px_2px_rgba(59,130,246,0.65)]"
                      : "size-2 bg-white/25 hover:bg-white/40",
                  )}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
