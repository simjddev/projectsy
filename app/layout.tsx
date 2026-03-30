import type { Metadata } from "next";
import { headers } from "next/headers";

import "./globals.css";

const themeScript = `
  (() => {
    try {
      const storedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme = storedTheme === "dark" || storedTheme === "light"
        ? storedTheme
        : prefersDark
          ? "dark"
          : "light";

      document.documentElement.setAttribute("data-theme", theme);
      document.documentElement.style.colorScheme = theme;
    } catch {
      document.documentElement.setAttribute("data-theme", "light");
      document.documentElement.style.colorScheme = "light";
    }
  })();
`;

export const metadata: Metadata = {
  title: "projectsy | Entwickeln. Bauen. Skalieren.",
  description:
    "projectsy entwickelt fokussierte digitale Produkte mit klarer Positionierung, präziser Umsetzung und operativer Nähe zum Markt.",
  metadataBase: new URL("https://projectsy.xyz"),
  openGraph: {
    title: "projectsy | Entwickeln. Bauen. Skalieren.",
    description:
      "Studio-Landingpage für projectsy mit Produktfokus auf PizzaApp und FairDient.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const locale = headerStore.get("x-current-locale") === "en" ? "en" : "de";

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
