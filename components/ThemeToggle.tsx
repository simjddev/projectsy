"use client";

import { useEffect, useState } from "react";

type ThemeToggleProps = {
  darkLabel: string;
  lightLabel: string;
};

export function ThemeToggle({ darkLabel, lightLabel }: ThemeToggleProps) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    setDark(currentTheme === "dark");
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    const nextTheme = next ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", nextTheme);
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={dark ? lightLabel : darkLabel}
      aria-pressed={dark}
    >
      <span className={`theme-toggle-icon${dark ? " theme-toggle-icon--dark" : ""}`} aria-hidden="true">
        <span className="theme-glyph theme-glyph--moon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path
              d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="theme-glyph theme-glyph--sun">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2.75v2.5" strokeLinecap="round" />
            <path d="M12 18.75v2.5" strokeLinecap="round" />
            <path d="m5.47 5.47 1.77 1.77" strokeLinecap="round" />
            <path d="m16.76 16.76 1.77 1.77" strokeLinecap="round" />
            <path d="M2.75 12h2.5" strokeLinecap="round" />
            <path d="M18.75 12h2.5" strokeLinecap="round" />
            <path d="m5.47 18.53 1.77-1.77" strokeLinecap="round" />
            <path d="m16.76 7.24 1.77-1.77" strokeLinecap="round" />
          </svg>
        </span>
      </span>
    </button>
  );
}
