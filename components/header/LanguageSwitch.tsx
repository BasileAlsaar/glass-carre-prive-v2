"use client";

import { LOCALES } from "@/lib/i18n";
import { useLocale } from "@/lib/locale-context";
import { cn } from "@/lib/utils";

export function LanguageSwitch({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      role="group"
      aria-label="Sélecteur de langue"
      className={cn(
        "tracking-label flex items-center gap-1 text-[11px] uppercase",
        className,
      )}
    >
      {LOCALES.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && (
            <span aria-hidden="true" className="mx-1 text-white/30">
              ·
            </span>
          )}
          <button
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={locale === l}
            className={cn(
              "transition-colors hover:text-glass-rose focus-visible:text-glass-rose focus-visible:outline-none",
              locale === l ? "text-glass-white" : "text-glass-mute",
            )}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
