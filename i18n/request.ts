import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as "en" | "ar")) {
    locale = routing.defaultLocale;
  }

  const messages =
    locale === "ar"
      ? (await import("../content/ar")).default
      : (await import("../content/en")).default;

  return {
    locale,
    messages,
  };
});
