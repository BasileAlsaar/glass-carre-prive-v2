// Server-renderable component (no "use client").
// Le HTML markdown est déjà rendu côté serveur via marked dans lib/blog.ts.

export function ArticleBody({ html }: { html: string }) {
  return (
    <div
      className="prose-glass mx-auto max-w-2xl px-6 pb-16 pt-12 md:px-0 md:pb-24"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
