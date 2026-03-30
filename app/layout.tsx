import type { Metadata } from "next";

import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
