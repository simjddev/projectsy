import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { content, isLocale } from "@/lib/i18n";

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = content[locale];

  return (
    <main className="page">
      <SiteHeader locale={locale} />

      <section className="layout" id="top">
        <section className="hero-card">
          <div className="hero-copy">
            <h1>{copy.home.heroTitle}</h1>
            <p className="hero-description">{copy.home.heroDescription}</p>
          </div>
        </section>

        <section className="card-grid" aria-label={copy.home.ariaLabel}>
          {copy.home.cards.map((card: (typeof copy.home.cards)[number]) => (
            <a
              key={card.title}
              className={`card card--${card.variant}`}
              href={card.href}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noreferrer" : undefined}
            >
              <div className="card-top">
                <span className="pill">{card.cta}</span>
                <span className="arrow">↗</span>
              </div>

              <div className="card-bg" aria-hidden="true">
                <span className="card-glow card-glow--one" />
                <span className="card-glow card-glow--two" />
              </div>

              <div className="card-body">
                <p>{card.subtitle}</p>
                <h2>{card.title}</h2>
                {card.variant === "overview" ? (
                  <div className="card-cta-row" aria-hidden="true">
                    <span className="card-button">{copy.home.overviewButton}</span>
                  </div>
                ) : null}
              </div>
            </a>
          ))}
        </section>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
