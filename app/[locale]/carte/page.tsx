import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LocaleSync } from "@/components/menu/LocaleSync";
import { MenuFooter } from "@/components/menu/MenuFooter";
import { MenuGrid } from "@/components/menu/MenuGrid";
import { MenuHeader } from "@/components/menu/MenuHeader";
import { StickyHeader } from "@/components/header/StickyHeader";
import { Footer } from "@/components/sections/Footer";
import { LOCALES, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Carte — Glass Club Cannes",
  description:
    "Cocktails signature, classiques, spiritueux et champagne. Carte du Glass Club, Carré d'Or Cannes.",
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

function isValidLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export default function CartePage({ params }: { params: { locale: string } }) {
  if (!isValidLocale(params.locale)) notFound();
  const locale = params.locale;

  return (
    <>
      <LocaleSync locale={locale} />
      <StickyHeader />
      <main aria-label="Carte du Glass Club" className="bg-glass-black pt-16 md:pt-20">
        <MenuHeader />
        <MenuGrid />
        <MenuFooter />
      </main>
      <Footer />
    </>
  );
}
