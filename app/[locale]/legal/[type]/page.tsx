import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/sections/Footer";
import { StickyHeader } from "@/components/header/StickyHeader";
import { LocaleSync } from "@/components/menu/LocaleSync";
import { LOCALES, getDictionary, type Locale } from "@/lib/i18n";

const LEGAL_TYPES = ["mentions-legales", "confidentialite", "conditions", "cookies"] as const;
type LegalType = (typeof LEGAL_TYPES)[number];

const TITLES: Record<LegalType, Record<Locale, string>> = {
  "mentions-legales": { fr: "Mentions légales", en: "Legal notice" },
  confidentialite: { fr: "Politique de confidentialité", en: "Privacy policy" },
  conditions: { fr: "Termes et conditions", en: "Terms and conditions" },
  cookies: { fr: "Cookies", en: "Cookies" },
};

const PLACEHOLDERS: Record<Locale, string> = {
  fr: "Texte légal à venir.",
  en: "Legal text coming soon.",
};

type Params = { locale: string; type: string };

export function generateStaticParams() {
  const out: Params[] = [];
  for (const locale of LOCALES) {
    for (const type of LEGAL_TYPES) {
      out.push({ locale, type });
    }
  }
  return out;
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  if (!isValidLocale(params.locale) || !isValidType(params.type)) {
    return { title: "Glass Club Cannes" };
  }
  return {
    title: `${TITLES[params.type][params.locale]} — Glass Club Cannes`,
  };
}

function isValidLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

function isValidType(value: string): value is LegalType {
  return (LEGAL_TYPES as readonly string[]).includes(value);
}

export default function LegalPage({ params }: { params: Params }) {
  if (!isValidLocale(params.locale)) notFound();
  if (!isValidType(params.type)) notFound();
  const locale = params.locale;
  const type = params.type;
  const title = TITLES[type][locale];
  const dict = getDictionary(locale);

  return (
    <>
      <LocaleSync locale={locale} />
      <StickyHeader />
      <main aria-label={title} className="bg-glass-black pt-16 md:pt-20">
        <article className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-glass-rose">
            {dict.footer.copyright}
          </p>
          <h1 className="font-display tracking-display mt-6 text-4xl italic leading-tight text-glass-white md:text-5xl">
            {title}
          </h1>
          <div
            aria-hidden="true"
            className="mt-8 h-px w-24 origin-left bg-glass-rose"
          />
          <p className="mt-12 text-base text-glass-mute md:text-lg">
            {PLACEHOLDERS[locale]}
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
