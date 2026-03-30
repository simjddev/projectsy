import Link from "next/link";

import { Locale, content, createMailtoHref, withLocale } from "@/lib/i18n";

import { ThemeToggle } from "./ThemeToggle";

type SiteHeaderProps = {
  locale: Locale;
  secondaryLinkHref?: string;
  secondaryLinkLabel?: string;
};

export function SiteHeader({
  locale,
  secondaryLinkHref,
  secondaryLinkLabel,
}: SiteHeaderProps) {
  const copy = content[locale];

  return (
    <header className="topbar">
      <div className="topbar-start">
        <Link className="brand" href={withLocale(locale)} aria-label={copy.nav.brandAriaLabel}>
          <span className="brand-word">
            <span className="brand-project">PROJECT</span>
            <span className="brand-s">S</span>
            <span className="brand-y">Y</span>
          </span>
        </Link>
        {secondaryLinkHref && secondaryLinkLabel ? (
          <Link className="brand-secondary-link" href={secondaryLinkHref}>
            {secondaryLinkLabel}
          </Link>
        ) : null}
      </div>

      <nav className="topnav" aria-label={copy.nav.primaryLabel}>
        <a href={createMailtoHref()}>{copy.nav.contact}</a>
        <ThemeToggle darkLabel={copy.nav.themeToDark} lightLabel={copy.nav.themeToLight} />
      </nav>
    </header>
  );
}
