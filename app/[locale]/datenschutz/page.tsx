import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { content, isLocale } from "@/lib/i18n";

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = content[locale].legal.privacy;

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <SiteHeader locale={locale} />

        <section className="legal-card legal-card--page">
          <p className="legal-kicker">{copy.kicker}</p>
          <h1>{copy.title}</h1>
          <div className="legal-copy">
            {copy.body.map((paragraph: string) => (
              <p key={paragraph}>
                {paragraph.split("\n").map((line: string, index: number, lines: string[]) => (
                  <span key={`${line}-${index}`}>
                    {line}
                    {index < lines.length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </section>

        <SiteFooter locale={locale} />
      </div>
    </main>
  );
}
