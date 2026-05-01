import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { EventsHeader } from "@/components/events/EventsHeader";
import { EventsList } from "@/components/events/EventsList";
import { Footer } from "@/components/sections/Footer";
import { StickyHeader } from "@/components/header/StickyHeader";
import { LocaleSync } from "@/components/menu/LocaleSync";
import { LOCALES, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Événements — Glass Club Cannes",
  description:
    "Programmation Glass Club Cannes. Soirées House, Deep House, Techno du jeudi au samedi.",
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

function isValidLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export default function EventsPage({ params }: { params: { locale: string } }) {
  if (!isValidLocale(params.locale)) notFound();

  return (
    <>
      <LocaleSync locale={params.locale} />
      <StickyHeader />
      <main aria-label="Événements Glass Club" className="bg-glass-black pt-16 md:pt-20">
        <EventsHeader />
        <EventsList />
      </main>
      <Footer />
    </>
  );
}
