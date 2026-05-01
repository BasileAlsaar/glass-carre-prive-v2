"use client";

import { ArticleCard } from "@/components/blog/ArticleCard";
import { BlogEmptyState } from "@/components/blog/BlogEmptyState";
import type { Article } from "@/lib/blog";

export function ArticleList({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return <BlogEmptyState />;

  return (
    <ul className="mx-auto grid max-w-screen-xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 md:gap-x-10 md:gap-y-16 md:px-10 md:py-24">
      {articles.map((article, i) => (
        <li key={article.slug}>
          <ArticleCard article={article} index={i} />
        </li>
      ))}
    </ul>
  );
}
