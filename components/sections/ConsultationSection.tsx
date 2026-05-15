"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { MotionReveal } from "@/components/animations/MotionReveal";
import { buttonVariants } from "@/components/ui/button";
import { SECTION_IDS } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type Status = "student" | "employee";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-[#0F172A]/80 px-3 py-2.5 text-sm text-[#F8FAFC] placeholder:text-[#64748B] outline-none transition-colors focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20";

export function ConsultationSection() {
  const t = useTranslations("consultation");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("student");
  const [field, setField] = useState("");
  const [project, setProject] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const statusLabel =
      status === "student" ? t("statusStudent") : t("statusEmployee");
    const projectText = project.trim() || t("projectNotProvided");

    const message = t("whatsappMessage", {
      name: name.trim(),
      email: email.trim(),
      status: statusLabel,
      field: field.trim(),
      project: projectText,
    });

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id={SECTION_IDS.consultation}
      className="scroll-mt-24 border-t border-white/5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-[#F8FAFC] sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-[#94A3B8]">{t("subtitle")}</p>
        </MotionReveal>

        <MotionReveal delay={0.06} className="mt-10">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-white/10 bg-[#0F172A]/60 p-6 sm:p-8"
          >
            <div className="space-y-2">
              <label
                htmlFor="consultation-name"
                className="text-sm font-medium text-[#F8FAFC]"
              >
                {t("name")}
              </label>
              <input
                id="consultation-name"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="consultation-email"
                className="text-sm font-medium text-[#F8FAFC]"
              >
                {t("email")}
              </label>
              <input
                id="consultation-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>

            <fieldset className="space-y-3">
              <legend className="text-sm font-medium text-[#F8FAFC]">
                {t("status")}
              </legend>
              <div className="flex flex-wrap gap-4">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-[#CBD5E1]">
                  <input
                    type="radio"
                    name="consultation-status"
                    value="student"
                    checked={status === "student"}
                    onChange={() => setStatus("student")}
                    className="size-4 accent-[#22D3EE]"
                    required
                  />
                  {t("statusStudent")}
                </label>
                <label className="flex cursor-pointer items-center gap-2 text-sm text-[#CBD5E1]">
                  <input
                    type="radio"
                    name="consultation-status"
                    value="employee"
                    checked={status === "employee"}
                    onChange={() => setStatus("employee")}
                    className="size-4 accent-[#22D3EE]"
                  />
                  {t("statusEmployee")}
                </label>
              </div>
            </fieldset>

            <div className="space-y-2">
              <label
                htmlFor="consultation-field"
                className="text-sm font-medium text-[#F8FAFC]"
              >
                {t("field")}
              </label>
              <input
                id="consultation-field"
                type="text"
                required
                value={field}
                onChange={(e) => setField(e.target.value)}
                placeholder={t("fieldPlaceholder")}
                className={inputClass}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="consultation-project"
                className="text-sm font-medium text-[#F8FAFC]"
              >
                {t("project")}
              </label>
              <textarea
                id="consultation-project"
                rows={4}
                value={project}
                onChange={(e) => setProject(e.target.value)}
                placeholder={t("projectPlaceholder")}
                className={cn(inputClass, "resize-y min-h-[6rem]")}
              />
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "min-w-[220px] border-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 text-[#020617] shadow-[0_0_32px_-8px_rgba(59,130,246,0.5)] hover:opacity-95",
                )}
              >
                {t("submit")}
              </button>
            </div>
          </form>
        </MotionReveal>
      </div>
    </section>
  );
}
