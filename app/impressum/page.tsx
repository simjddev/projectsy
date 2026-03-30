import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <header className="topbar">
          <Link className="brand" href="/" aria-label="projectsy homepage">
            <span className="brand-word">
              <span className="brand-project">PROJECT</span>
              <span className="brand-s">S</span>
              <span className="brand-y">Y</span>
            </span>
          </Link>

          <nav className="topnav" aria-label="Primary">
            <Link href="/">Startseite</Link>
            <a href="mailto:hi@projectsy.xyz">Kontakt</a>
          </nav>
        </header>

        <section className="legal-card legal-card--page">
          <p className="legal-kicker">Impressum</p>
          <h1>Angaben gemäß § 5 TMG</h1>
          <div className="legal-copy">
            <p>
              aliantus UG (haftungsbeschränkt)
              <br />
              Rosenstr. 21
              <br />
              71088 Holzgerlingen
              <br />
              Deutschland
            </p>
            <p>
              Telefon: +49 174 2319930 (kein Support)
              <br />
              E-Mail: info@aliantus.de
            </p>
            <p>
              Vertretung: Yannick Johannes Haasner (Geschäftsführer)
              <br />
              Rechtsform: Unternehmergesellschaft (haftungsbeschränkt)
            </p>
            <p>
              Handelsregister: HRB 782960
              <br />
              Registergericht: Amtsgericht Stuttgart
              <br />
              USt-IdNr.: DE351788218
            </p>
            <p>
              Es besteht keine Verpflichtung und keine Bereitschaft zur
              Teilnahme an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle.
            </p>
            <p>
              Für eigene Inhalte wird nach § 7 Abs. 1 TMG Verantwortung
              übernommen. Für externe Links wird keine Haftung übernommen. Alle
              Inhalte dieser Website unterliegen dem Urheberrecht.
            </p>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-bar">
            <p>© 2026 projectsy.xyz</p>
            <a href="mailto:hi@projectsy.xyz">hi@projectsy.xyz</a>
            <Link href="/datenschutz">Datenschutz</Link>
            <Link href="/impressum">Impressum</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
