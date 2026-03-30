import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { content, isLocale, locales } from "@/lib/i18n";

export async function generateStaticParams() {
  return locales.map((locale: (typeof locales)[number]) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const copy = content[locale];

  return {
    title: copy.meta.title,
    description: copy.meta.description,
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.ogDescription,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return children;
}
