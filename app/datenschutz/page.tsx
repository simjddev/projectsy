import Link from "next/link";

export default function DatenschutzPage() {
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
          <p className="legal-kicker">Datenschutz</p>
          <h1>Datenschutzerklärung</h1>
          <div className="legal-copy">
            <p>
              Verantwortlicher ist aliantus UG (haftungsbeschränkt), Rosenstr.
              21, 71088 Holzgerlingen, E-Mail: info@aliantus.de.
            </p>
            <p>
              Personenbezogene Daten werden nur verarbeitet, soweit dies zur
              Bereitstellung der Website erforderlich ist oder eine gesetzliche
              Grundlage beziehungsweise eine Einwilligung vorliegt.
            </p>
            <p>
              Beim Besuch erfasst der Hoster Vercel technische Zugriffsdaten wie
              IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browser und
              Betriebssystem auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p>
              Bei Kontakt per E-Mail werden die übermittelten Angaben zur
              Bearbeitung der Anfrage gespeichert und gelöscht, sobald sie nicht
              mehr benötigt werden. Tracking- oder Marketing-Cookies werden
              nicht eingesetzt.
            </p>
            <p>
              Diese Website lädt Google Fonts, wodurch eine Übertragung der
              IP-Adresse an Google erfolgen kann. Betroffene haben Rechte auf
              Auskunft, Berichtigung, Löschung, Einschränkung,
              Datenübertragbarkeit und Widerspruch nach Art. 15 bis 21 DSGVO.
            </p>
            <p>
              Zuständige Aufsichtsbehörde ist der Landesbeauftragte für den
              Datenschutz und die Informationsfreiheit Baden-Württemberg. Stand:
              März 2026.
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
