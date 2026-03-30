"use client";

import { usePathname, useRouter } from "next/navigation";

import { Locale, localeCookieName, locales, switchLocaleInPath } from "@/lib/i18n";

type LocaleSwitcherProps = {
  currentLocale: Locale;
  label: string;
};

export function LocaleSwitcher({ currentLocale, label }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  function handleLocaleChange(nextLocale: Locale) {
    const nextPath = switchLocaleInPath(pathname, nextLocale);
    document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    router.push(nextPath);
  }

  return (
    <div className="locale-switcher" aria-label={label} role="group">
      {locales.map((locale: Locale, index) => (
        <span key={locale} className="locale-option">
          {index > 0 ? <span className="locale-separator">/</span> : null}
          <button
            type="button"
            className={`locale-button${locale === currentLocale ? " locale-button--active" : ""}`}
            onClick={() => handleLocaleChange(locale)}
            aria-pressed={locale === currentLocale}
          >
            {locale.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
