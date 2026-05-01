import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { marked } from "marked";

import type { Locale } from "@/lib/i18n";

export type ArticleCategory =
  | "coulisses"
  | "cocktails"
  | "cannes"
  | "lifestyle"
  | "mixology"
  | "interview"
  | "clubNews";

export type ArticleFrontmatter = {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  category: ArticleCategory;
  tags: readonly string[];
  cover?: string;
  coverAlt?: string;
  locale: Locale;
  featured?: boolean;
  relatedSlugs?: readonly string[];
};

export type Article = ArticleFrontmatter & {
  /** Markdown source. */
  contentMd: string;
  /** HTML rendu côté serveur. */
  contentHtml: string;
  /** Temps de lecture estimé en minutes. */
  readingMinutes: number;
};

const CONTENT_ROOT = path.join(process.cwd(), "content", "blog");

function estimateReadingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

function loadFor(locale: Locale): Article[] {
  const dir = path.join(CONTENT_ROOT, locale);
  let files: string[];
  try {
    files = readdirSync(dir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  } catch {
    return [];
  }
  const articles: Article[] = [];
  for (const file of files) {
    const raw = readFileSync(path.join(dir, file), "utf8");
    const parsed = matter(raw);
    const fm = parsed.data as ArticleFrontmatter;
    const contentHtml = marked.parse(parsed.content, { async: false }) as string;
    articles.push({
      ...fm,
      contentMd: parsed.content,
      contentHtml,
      readingMinutes: estimateReadingMinutes(parsed.content),
    });
  }
  return articles.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getArticles(locale: Locale): Article[] {
  return loadFor(locale);
}

export function getArticleBySlug(locale: Locale, slug: string): Article | undefined {
  return getArticles(locale).find((a) => a.slug === slug);
}

export function getAllSlugs(): { locale: Locale; slug: string }[] {
  const out: { locale: Locale; slug: string }[] = [];
  for (const locale of ["fr", "en"] as const) {
    for (const article of loadFor(locale)) {
      out.push({ locale, slug: article.slug });
    }
  }
  return out;
}

export function getRelatedArticles(article: Article, locale: Locale, max = 2): Article[] {
  const all = getArticles(locale);
  const candidates = all.filter((a) => a.slug !== article.slug);
  // Prioritise relatedSlugs from frontmatter, then most recent.
  const related: Article[] = [];
  if (article.relatedSlugs) {
    for (const slug of article.relatedSlugs) {
      const found = candidates.find((a) => a.slug === slug);
      if (found && !related.includes(found)) related.push(found);
      if (related.length >= max) break;
    }
  }
  for (const a of candidates) {
    if (related.length >= max) break;
    if (!related.includes(a)) related.push(a);
  }
  return related.slice(0, max);
}
