import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { content, isLocale, withLocale } from "@/lib/i18n";

export default async function OverviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = content[locale].overview;

  return (
    <main className="overview-page">
      <div className="overview-shell">
        <SiteHeader
          locale={locale}
          secondaryLinkHref={withLocale(locale)}
          secondaryLinkLabel={copy.backLabel}
        />

        <section className="overview-grid" aria-label={copy.kicker}>
          {copy.products.map((product: (typeof copy.products)[number]) => (
            <a
              key={product.title}
              className={`card card--${product.variant}`}
              href={product.href}
              target={product.external ? "_blank" : undefined}
              rel={product.external ? "noreferrer" : undefined}
            >
              <div className="card-top">
                <span className="pill">{product.cta}</span>
                <span className="arrow">↗</span>
              </div>

              <div className="card-bg" aria-hidden="true">
                <span className="card-glow card-glow--one" />
                <span className="card-glow card-glow--two" />
              </div>

              <div className="card-body">
                <p>{product.subtitle}</p>
                <h2>{product.title}</h2>
              </div>
            </a>
          ))}
        </section>

        <SiteFooter locale={locale} />
      </div>
    </main>
  );
}
