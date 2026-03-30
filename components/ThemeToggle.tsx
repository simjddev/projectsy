"use client";

import { useEffect, useState } from "react";

type ThemeToggleProps = {
  darkLabel: string;
  lightLabel: string;
};

export function ThemeToggle({ darkLabel, lightLabel }: ThemeToggleProps) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");

    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={dark ? lightLabel : darkLabel}
    >
      {dark ? "☀" : "☽"}
    </button>
  );
}
