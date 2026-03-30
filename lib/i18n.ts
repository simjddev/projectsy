export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";
export const localeCookieName = "projectsy-locale";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function withLocale(locale: Locale, path = "/") {
  if (path === "/") {
    return `/${locale}`;
  }

  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}

export function switchLocaleInPath(pathname: string, locale: Locale) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return withLocale(locale);
  }

  if (isLocale(segments[0] ?? "")) {
    segments[0] = locale;
    return `/${segments.join("/")}`;
  }

  return withLocale(locale, pathname);
}

type LocalizedContent = {
  meta: {
    title: string;
    description: string;
    ogDescription: string;
  };
  nav: {
    brandAriaLabel: string;
    primaryLabel: string;
    contact: string;
    language: string;
    themeToDark: string;
    themeToLight: string;
  };
  home: {
    ariaLabel: string;
    heroTitle: string;
    heroDescription: string;
    overviewButton: string;
    cards: {
      title: string;
      subtitle: string;
      href: string;
      cta: string;
      variant: "pizza" | "fairdient" | "overview";
      external: boolean;
    }[];
  };
  footer: {
    copyright: string;
    email: string;
    privacy: string;
    imprint: string;
  };
  legal: {
    privacy: {
      kicker: string;
      title: string;
      body: string[];
    };
    imprint: {
      kicker: string;
      title: string;
      body: string[];
    };
  };
};

export const content: Record<Locale, LocalizedContent> = {
  de: {
    meta: {
      title: "projectsy | Entwickeln. Bauen. Skalieren.",
      description:
        "projectsy entwickelt fokussierte digitale Produkte mit klarer Positionierung, präziser Umsetzung und operativer Nähe zum Markt.",
      ogDescription:
        "Studio-Landingpage für projectsy mit Produktfokus auf PizzaApp und FairDient.",
    },
    nav: {
      brandAriaLabel: "projectsy Startseite",
      primaryLabel: "Hauptnavigation",
      contact: "Kontakt",
      language: "Sprache",
      themeToDark: "Dunkles Design aktivieren",
      themeToLight: "Helles Design aktivieren",
    },
    home: {
      ariaLabel: "Projekte",
      heroTitle: "Digitale Produkte mit Geschmack, Klarheit und Dynamik.",
      heroDescription:
        "Wir entwickeln und launchen fokussierte Software-Produkte mit ruhigem Branding, klarer Struktur und präzisen Oberflächen.",
      overviewButton: "Los geht's",
      cards: [
        {
          title: "PizzaApp",
          subtitle: "KI-Kochbegleiter",
          href: "https://pizza.projectsy.xyz",
          cta: "Zur App",
          variant: "pizza",
          external: true,
        },
        {
          title: "FairDient",
          subtitle: "HR-SaaS in Entwicklung",
          href: "mailto:hi@projectsy.xyz?subject=FairDient",
          cta: "Zur App",
          variant: "fairdient",
          external: true,
        },
        {
          title: "Alle Produkte",
          subtitle: "Übersicht im neuen Tab",
          href: "https://projectsy.xyz",
          cta: "Zur Übersicht",
          variant: "overview",
          external: true,
        },
      ],
    },
    footer: {
      copyright: "© 2026 projectsy.xyz",
      email: "hi@projectsy.xyz",
      privacy: "Datenschutz",
      imprint: "Impressum",
    },
    legal: {
      privacy: {
        kicker: "Datenschutz",
        title: "Datenschutzerklärung",
        body: [
          "Verantwortlicher ist aliantus UG (haftungsbeschränkt), Rosenstr. 21, 71088 Holzgerlingen, E-Mail: info@aliantus.de.",
          "Personenbezogene Daten werden nur verarbeitet, soweit dies zur Bereitstellung der Website erforderlich ist oder eine gesetzliche Grundlage beziehungsweise eine Einwilligung vorliegt.",
          "Beim Besuch erfasst der Hoster Vercel technische Zugriffsdaten wie IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browser und Betriebssystem auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.",
          "Bei Kontakt per E-Mail werden die übermittelten Angaben zur Bearbeitung der Anfrage gespeichert und gelöscht, sobald sie nicht mehr benötigt werden. Tracking- oder Marketing-Cookies werden nicht eingesetzt.",
          "Diese Website lädt Google Fonts, wodurch eine Übertragung der IP-Adresse an Google erfolgen kann. Betroffene haben Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch nach Art. 15 bis 21 DSGVO.",
          "Zuständige Aufsichtsbehörde ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg. Stand: März 2026.",
        ],
      },
      imprint: {
        kicker: "Impressum",
        title: "Angaben gemäß § 5 TMG",
        body: [
          "aliantus UG (haftungsbeschränkt)\nRosenstr. 21\n71088 Holzgerlingen\nDeutschland",
          "Telefon: +49 174 2319930 (kein Support)\nE-Mail: info@aliantus.de",
          "Vertretung: Yannick Johannes Haasner (Geschäftsführer)\nRechtsform: Unternehmergesellschaft (haftungsbeschränkt)",
          "Handelsregister: HRB 782960\nRegistergericht: Amtsgericht Stuttgart\nUSt-IdNr.: DE351788218",
          "Es besteht keine Verpflichtung und keine Bereitschaft zur Teilnahme an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle.",
          "Für eigene Inhalte wird nach § 7 Abs. 1 TMG Verantwortung übernommen. Für externe Links wird keine Haftung übernommen. Alle Inhalte dieser Website unterliegen dem Urheberrecht.",
        ],
      },
    },
  },
  en: {
    meta: {
      title: "projectsy | Build. Launch. Scale.",
      description:
        "projectsy builds focused digital products with clear positioning, precise execution, and close market feedback loops.",
      ogDescription:
        "Studio landing page for projectsy with a product focus on PizzaApp and FairDient.",
    },
    nav: {
      brandAriaLabel: "projectsy home",
      primaryLabel: "Primary navigation",
      contact: "Contact",
      language: "Language",
      themeToDark: "Enable dark theme",
      themeToLight: "Enable light theme",
    },
    home: {
      ariaLabel: "Projects",
      heroTitle: "Digital products with taste, clarity, and momentum.",
      heroDescription:
        "We build and launch focused software products with calm branding, clear structure, and precise interfaces.",
      overviewButton: "Get started",
      cards: [
        {
          title: "PizzaApp",
          subtitle: "AI cooking companion",
          href: "https://pizza.projectsy.xyz",
          cta: "Open app",
          variant: "pizza",
          external: true,
        },
        {
          title: "FairDient",
          subtitle: "HR SaaS in progress",
          href: "mailto:hi@projectsy.xyz?subject=FairDient",
          cta: "Open app",
          variant: "fairdient",
          external: true,
        },
        {
          title: "All products",
          subtitle: "Overview in a new tab",
          href: "https://projectsy.xyz",
          cta: "View overview",
          variant: "overview",
          external: true,
        },
      ],
    },
    footer: {
      copyright: "© 2026 projectsy.xyz",
      email: "hi@projectsy.xyz",
      privacy: "Privacy",
      imprint: "Legal notice",
    },
    legal: {
      privacy: {
        kicker: "Privacy",
        title: "Privacy Policy",
        body: [
          "The controller is aliantus UG (haftungsbeschränkt), Rosenstr. 21, 71088 Holzgerlingen, Germany, email: info@aliantus.de.",
          "Personal data is processed only where necessary to provide the website, where required by law, or where consent has been granted.",
          "When you visit this website, the hosting provider Vercel processes technical access data such as IP address, date and time, requested page, browser, and operating system on the basis of Art. 6(1)(f) GDPR.",
          "If you contact us by email, the transmitted information is stored for handling the request and deleted once it is no longer required. No tracking or marketing cookies are used.",
          "This website loads Google Fonts, which may involve transmitting your IP address to Google. Data subjects have rights of access, rectification, deletion, restriction, data portability, and objection under Articles 15 to 21 GDPR.",
          "The competent supervisory authority is the State Commissioner for Data Protection and Freedom of Information Baden-Württemberg. Updated: March 2026.",
        ],
      },
      imprint: {
        kicker: "Legal notice",
        title: "Information according to Section 5 TMG",
        body: [
          "aliantus UG (haftungsbeschränkt)\nRosenstr. 21\n71088 Holzgerlingen\nGermany",
          "Phone: +49 174 2319930 (no support)\nEmail: info@aliantus.de",
          "Represented by: Yannick Johannes Haasner (Managing Director)\nLegal form: Entrepreneurial company with limited liability",
          "Commercial register: HRB 782960\nRegister court: Local Court Stuttgart\nVAT ID: DE351788218",
          "There is no obligation and no willingness to participate in dispute resolution proceedings before a consumer arbitration board.",
          "We are responsible for our own content in accordance with Section 7(1) TMG. No liability is assumed for external links. All content on this website is protected by copyright.",
        ],
      },
    },
  },
};
