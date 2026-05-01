import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/sections/Footer";
import { StickyHeader } from "@/components/header/StickyHeader";
import { LocaleSync } from "@/components/menu/LocaleSync";
import { MembershipConcept } from "@/components/membership/MembershipConcept";
import { MembershipTiers } from "@/components/membership/MembershipTiers";
import { LOCALES, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Membership — Glass Club Cannes",
  description:
    "Glass Club Membership — un cercle d'initiés au cœur du Carré d'Or, à Cannes.",
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

function isValidLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export default function MembershipPage({ params }: { params: { locale: string } }) {
  if (!isValidLocale(params.locale)) notFound();

  return (
    <>
      <LocaleSync locale={params.locale} />
      <StickyHeader />
      <main aria-label="Membership Glass Club" className="bg-glass-black pt-16 md:pt-20">
        <MembershipConcept />
        <MembershipTiers />
      </main>
      <Footer />
    </>
  );
}
