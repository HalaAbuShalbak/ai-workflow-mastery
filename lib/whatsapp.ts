import { SITE } from "@/lib/constants";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${SITE.whatsAppNumber}?text=${encodeURIComponent(message)}`;
}
