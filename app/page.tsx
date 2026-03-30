"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Kontakt", href: "mailto:hi@projectsy.xyz" },
] as const;

const cards = [
  {
    title: "PizzaApp",
    subtitle: "KI-Kochbegleiter",
    href: "https://pizza.projectsy.xyz",
    cta: "Zur App",
    variant: "pizza" as const,
  },
  {
    title: "FairDient",
    subtitle: "HR-SaaS in Entwicklung",
    href: "mailto:hi@projectsy.xyz?subject=FairDient",
    cta: "Zur App",
    variant: "fairdient" as const,
  },
  {
    title: "Alle Produkte",
    subtitle: "Übersicht im neuen Tab",
    href: "https://projectsy.xyz",
    cta: "Zur Übersicht",
    variant: "overview" as const,
  },
] as const;

export default function HomePage() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="projectsy Startseite">
          <span className="brand-word">
            <span className="brand-project">PROJECT</span>
            <span className="brand-s">S</span>
            <span className="brand-y">Y</span>
          </span>
        </a>

        <nav className="topnav" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={dark ? "Helles Design aktivieren" : "Dunkles Design aktivieren"}
          >
            {dark ? "☀" : "☽"}
          </button>
        </nav>
      </header>

      <section className="layout" id="top">
        <section className="hero-card">
          <div className="hero-copy">
            <h1>Digitale Produkte mit Geschmack, Klarheit und Dynamik.</h1>
            <p className="hero-description">
              Wir entwickeln und launchen fokussierte Software-Produkte mit
              ruhigem Branding, klarer Struktur und präzisen Oberflächen.
            </p>
          </div>
        </section>

        <section className="card-grid" aria-label="Projekte">
          {cards.map((card) => (
            <a
              key={card.title}
              className={`card card--${card.variant}`}
              href={card.href}
              target="_blank"
              rel="noreferrer"
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
                    <span className="card-button">Los geht&apos;s</span>
                  </div>
                ) : null}
              </div>
            </a>
          ))}
        </section>
      </section>

      <footer className="footer" aria-label="Fußzeile">
        <div className="footer-bar">
          <p>© 2026 projectsy.xyz</p>
          <a href="mailto:hi@projectsy.xyz">hi@projectsy.xyz</a>
          <Link href="/datenschutz">Datenschutz</Link>
          <Link href="/impressum">Impressum</Link>
        </div>
      </footer>
    </main>
  );
}
