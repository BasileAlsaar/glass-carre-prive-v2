import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";

import { JsonLd } from "@/components/seo/JsonLd";
import { LocaleProvider } from "@/lib/locale-context";

import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://glass-carre-prive.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Glass Club — Carré d'Or, Cannes",
    template: "%s — Glass Club Cannes",
  },
  description:
    "Bar-club privatisable au cœur du Carré d'Or, à 3 minutes du Palais des Festivals. Privatisation, événements, formules sur mesure.",
  keywords: [
    "Glass Club",
    "Cannes",
    "Carré d'Or",
    "privatisation",
    "bar-club",
    "événement corporate",
    "Palais des Festivals",
  ],
  authors: [{ name: "Glass Club" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: "Glass Club",
    title: "Glass Club — Carré d'Or, Cannes",
    description:
      "Bar-club privatisable au cœur du Carré d'Or, à 3 minutes du Palais des Festivals.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 2400,
        height: 1600,
        alt: "Glass Club — atmosphère club premium, faisceaux rouges",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glass Club — Carré d'Or, Cannes",
    description:
      "Bar-club privatisable au cœur du Carré d'Or, à 3 minutes du Palais des Festivals.",
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: "/logo/glass-logo-blanc.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased">
        <LocaleProvider>{children}</LocaleProvider>
        <JsonLd />
      </body>
    </html>
  );
}
