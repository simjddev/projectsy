import Link from "next/link";

import { Locale, createMailtoHref, content, withLocale } from "@/lib/i18n";

import { LocaleSwitcher } from "./LocaleSwitcher";

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <footer className="footer" aria-label={copy.footer.ariaLabel}>
      <div className="footer-bar">
        <div className="footer-meta">
          <p>{copy.footer.copyright}</p>
          <a href={createMailtoHref()}>{copy.footer.email}</a>
        </div>

        <div className="footer-end">
          <div className="footer-links">
            <Link href={withLocale(locale, "/datenschutz")}>{copy.footer.privacy}</Link>
            <Link href={withLocale(locale, "/impressum")}>{copy.footer.imprint}</Link>
          </div>
          <LocaleSwitcher currentLocale={locale} label={copy.nav.language} />
        </div>
      </div>
    </footer>
  );
}
