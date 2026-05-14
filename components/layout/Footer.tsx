"use client";

import { useLocale, useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";
import { SITE, SECTION_IDS } from "@/lib/constants";
import { usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const footerLinks = [
  { id: SECTION_IDS.about, labelKey: "nav.about" as const },
  { id: SECTION_IDS.objectives, labelKey: "nav.objectives" as const },
  { id: SECTION_IDS.topics, labelKey: "nav.topics" as const },
  { id: SECTION_IDS.methodology, labelKey: "nav.methodology" as const },
  { id: SECTION_IDS.testimonials, labelKey: "nav.testimonials" as const },
  { id: SECTION_IDS.contact, labelKey: "nav.contact" as const },
];

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#020617] py-12 text-sm text-[#94A3B8]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="space-y-2">
          <p className="font-heading text-[#F8FAFC]">{t("footer.workshop")}</p>
          <p>{t("footer.rights", { year })}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href={SITE.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#CBD5E1] transition-colors hover:text-[#22D3EE]"
          >
            <ExternalLink className="size-4" aria-hidden />
            LinkedIn
          </a>
          <div
            className="flex items-center gap-1 rounded-lg border border-white/10 p-0.5"
            role="group"
            aria-label={t("nav.language")}
          >
            {(["en", "ar"] as const).map((loc) => (
              <button
                key={loc}
                type="button"
                onClick={() => router.replace(pathname, { locale: loc })}
                className={cn(
                  "rounded-md px-2 py-1 text-xs font-medium transition-colors",
                  locale === loc
                    ? "bg-white/10 text-[#F8FAFC]"
                    : "text-[#94A3B8] hover:text-[#F8FAFC]",
                )}
              >
                {loc.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <nav
          className="flex flex-wrap gap-x-4 gap-y-2"
          aria-label="Footer workshop links"
        >
          {footerLinks.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className="text-[#94A3B8] transition-colors hover:text-[#F8FAFC]"
            >
              {t(item.labelKey)}
            </button>
          ))}
        </nav>
      </div>
    </footer>
  );
}
