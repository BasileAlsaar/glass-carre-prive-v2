"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { useLocale } from "@/lib/locale-context";
import type { Article } from "@/lib/blog";

const EASE = [0.16, 1, 0.3, 1] as const;

function formatDate(iso: string, locale: "fr" | "en"): string {
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

export function ArticleCard({ article, index }: { article: Article; index: number }) {
  const { dictionary, locale } = useLocale();
  const t = dictionary.blog;
  const categoryKey = article.category as keyof typeof t.categories;
  const categoryLabel = t.categories[categoryKey] ?? article.category;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: EASE }}
      className="group flex flex-col"
    >
      <Link
        href={`/${locale}/blog/${article.slug}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-rose focus-visible:ring-offset-4 focus-visible:ring-offset-glass-black"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-glass-ink">
          {article.cover ? (
            <Image
              src={article.cover}
              alt={article.coverAlt ?? article.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-glass-rose/15 to-glass-burgundy/15" />
          )}
        </div>
        <div className="mt-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-glass-rose">
            {categoryLabel}
          </p>
          <h3 className="font-display tracking-display mt-3 text-2xl italic leading-tight text-glass-white transition-colors group-hover:text-glass-rose-deep md:text-3xl">
            {article.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm text-glass-mute md:text-base">
            {article.excerpt}
          </p>
          <p className="mt-5 text-xs uppercase tracking-wider text-glass-mute">
            {formatDate(article.publishedAt, locale)} · {article.author} · {article.readingMinutes}{" "}
            {t.minRead}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
