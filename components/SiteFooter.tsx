import Link from "next/link";

import { Locale, content, withLocale } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer-bar">
        <div className="footer-meta">
          <p>{copy.footer.copyright}</p>
          <a href="mailto:hi@projectsy.xyz">{copy.footer.email}</a>
        </div>

        <div className="footer-links">
          <Link href={withLocale(locale, "/datenschutz")}>{copy.footer.privacy}</Link>
          <Link href={withLocale(locale, "/impressum")}>{copy.footer.imprint}</Link>
        </div>
      </div>
    </footer>
  );
}
