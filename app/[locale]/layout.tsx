import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { LocaleAttributes } from "@/components/layout/LocaleAttributes";
import { SITE } from "@/lib/constants";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/content/${locale === "ar" ? "ar" : "en"}`))
    .default as { meta: { title: string; description: string; ogTitle: string; ogDescription: string } };

  const { meta } = messages;
  const keywords = [
    "AI prompting workshop",
    "workflow prompting",
    "prompt engineering",
    "AI planning workflows",
    "AI productivity workshop",
  ];

  return {
    metadataBase: new URL(SITE.url),
    title: meta.title,
    description: meta.description,
    keywords,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: `${SITE.url}/${locale}`,
      siteName: SITE.name,
      locale: locale === "ar" ? "ar" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.ogTitle,
      description: meta.ogDescription,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LocaleAttributes />
      <div className="font-sans">{children}</div>
    </NextIntlClientProvider>
  );
}
