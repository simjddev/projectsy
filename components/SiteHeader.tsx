import Link from "next/link";

import { Locale, content, withLocale } from "@/lib/i18n";

import { LocaleSwitcher } from "./LocaleSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <header className="topbar">
      <Link className="brand" href={withLocale(locale)} aria-label={copy.nav.brandAriaLabel}>
        <span className="brand-word">
          <span className="brand-project">PROJECT</span>
          <span className="brand-s">S</span>
          <span className="brand-y">Y</span>
        </span>
      </Link>

      <nav className="topnav" aria-label={copy.nav.primaryLabel}>
        <a href="mailto:hi@projectsy.xyz">{copy.nav.contact}</a>
        <LocaleSwitcher currentLocale={locale} label={copy.nav.language} />
        <ThemeToggle darkLabel={copy.nav.themeToDark} lightLabel={copy.nav.themeToLight} />
      </nav>
    </header>
  );
}
