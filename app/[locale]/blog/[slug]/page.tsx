import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleBody } from "@/components/blog/ArticleBody";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { Footer } from "@/components/sections/Footer";
import { StickyHeader } from "@/components/header/StickyHeader";
import { LocaleSync } from "@/components/menu/LocaleSync";
import { getAllSlugs, getArticleBySlug, getRelatedArticles } from "@/lib/blog";
import { LOCALES, getDictionary, type Locale } from "@/lib/i18n";

type Params = { locale: string; slug: string };

export function generateStaticParams() {
  return getAllSlugs();
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const article = isValidLocale(params.locale)
    ? getArticleBySlug(params.locale, params.slug)
    : undefined;
  if (!article) return { title: "Article — Glass Club Cannes" };
  return {
    title: `${article.title} — Glass Club Cannes`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: article.cover ? [article.cover] : undefined,
    },
  };
}

function isValidLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

function formatDate(iso: string, locale: Locale): string {
  try {
    return new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default function ArticlePage({ params }: { params: Params }) {
  if (!isValidLocale(params.locale)) notFound();
  const article = getArticleBySlug(params.locale, params.slug);
  if (!article) notFound();

  const dict = getDictionary(params.locale);
  const t = dict.blog;
  const categoryKey = article.category as keyof typeof t.categories;
  const categoryLabel = t.categories[categoryKey] ?? article.category;
  const related = getRelatedArticles(article, params.locale);

  return (
    <>
      <LocaleSync locale={params.locale} />
      <StickyHeader />
      <main className="bg-glass-black pt-16 md:pt-20">
        <article aria-labelledby="article-title">
          <header className="mx-auto max-w-3xl px-6 py-20 md:py-28">
            <p className="text-[11px] uppercase tracking-[0.3em] text-glass-rose">
              {categoryLabel}
            </p>
            <h1
              id="article-title"
              className="font-display tracking-display mt-6 text-5xl italic leading-[1.05] text-glass-white md:text-6xl"
            >
              {article.title}
            </h1>
            <p className="mt-8 text-sm uppercase tracking-wider text-glass-mute">
              {t.publishedOn} {formatDate(article.publishedAt, params.locale)} · {t.by}{" "}
              {article.author} · {article.readingMinutes} {t.minRead}
            </p>
          </header>

          {article.cover && (
            <div className="relative mx-auto aspect-[16/9] max-w-screen-xl overflow-hidden bg-glass-ink">
              <Image
                src={article.cover}
                alt={article.coverAlt ?? article.title}
                fill
                sizes="(min-width: 1280px) 1280px, 100vw"
                priority
                className="object-cover"
              />
            </div>
          )}

          <ArticleBody html={article.contentHtml} />

          <footer className="mx-auto max-w-2xl border-t border-white/10 px-6 py-12">
            <Link
              href={`/${params.locale}/blog`}
              className="tracking-label inline-flex items-center gap-2 text-[11px] uppercase text-glass-rose transition-all hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-blood focus-visible:ring-offset-4 focus-visible:ring-offset-glass-black"
            >
              ← {t.backToList}
            </Link>
          </footer>
        </article>

        {related.length > 0 && (
          <section
            aria-label={t.relatedTitle}
            className="border-t border-white/10 bg-glass-black px-6 py-16 md:px-10 md:py-24"
          >
            <div className="mx-auto max-w-screen-xl">
              <h2 className="text-xs uppercase tracking-[0.3em] text-glass-rose">
                {t.relatedTitle}
              </h2>
              <ul className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
                {related.map((r, i) => (
                  <li key={r.slug}>
                    <ArticleCard article={r} index={i} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
