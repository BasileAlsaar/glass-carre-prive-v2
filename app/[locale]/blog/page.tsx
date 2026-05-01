import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleList } from "@/components/blog/ArticleList";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { Footer } from "@/components/sections/Footer";
import { StickyHeader } from "@/components/header/StickyHeader";
import { LocaleSync } from "@/components/menu/LocaleSync";
import { getArticles } from "@/lib/blog";
import { LOCALES, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Le Journal — Glass Club Cannes",
  description:
    "Le journal du Glass Club Cannes. Lifestyle, mixologie, coulisses et calendrier des grands rendez-vous de Cannes.",
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

function isValidLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export default function BlogPage({ params }: { params: { locale: string } }) {
  if (!isValidLocale(params.locale)) notFound();
  const articles = getArticles(params.locale);

  return (
    <>
      <LocaleSync locale={params.locale} />
      <StickyHeader />
      <main aria-label="Le journal du Glass Club" className="bg-glass-black pt-16 md:pt-20">
        <BlogHeader />
        <ArticleList articles={articles} />
      </main>
      <Footer />
    </>
  );
}
