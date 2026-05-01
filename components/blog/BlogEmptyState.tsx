"use client";

import { useLocale } from "@/lib/locale-context";

export function BlogEmptyState() {
  const { dictionary } = useLocale();

  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center md:py-32">
      <p className="text-base text-glass-mute md:text-lg">{dictionary.blog.emptyMessage}</p>
    </section>
  );
}
