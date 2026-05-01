"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { LOCALES, type Locale } from "@/lib/i18n";
import { useLocale } from "@/lib/locale-context";
import { cn } from "@/lib/utils";

function Flag({ locale }: { locale: Locale }) {
  if (locale === "fr") {
    return (
      <svg viewBox="0 0 3 2" width="22" height="15" aria-hidden="true" className="block">
        <rect width="1" height="2" fill="#0055A4" />
        <rect x="1" width="1" height="2" fill="#FFFFFF" />
        <rect x="2" width="1" height="2" fill="#EF4135" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 60 30" width="22" height="15" aria-hidden="true" className="block">
      <clipPath id="uk-t">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-t)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

const LOCALE_LABEL: Record<Locale, string> = { fr: "Français", en: "English" };

export function LangSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Langue actuelle : ${LOCALE_LABEL[locale]}`}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-8 items-center gap-2 px-1.5 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-rose focus-visible:ring-offset-2 focus-visible:ring-offset-glass-black"
      >
        <Flag locale={locale} />
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={cn("text-glass-white/70 transition-transform duration-200", open && "rotate-180")}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 top-full z-50 mt-2 min-w-[140px] border border-glass-rose/20 bg-glass-ink p-2 shadow-2xl shadow-black/60"
          >
            {LOCALES.map((l) => (
              <li key={l}>
                <button
                  type="button"
                  role="option"
                  aria-selected={locale === l}
                  onClick={() => {
                    setLocale(l);
                    setOpen(false);
                  }}
                  className={cn(
                    "tracking-label inline-flex w-full items-center gap-2 px-3 py-2 text-[11px] uppercase transition-colors hover:bg-glass-rose/10 hover:text-glass-rose focus-visible:bg-glass-rose/10 focus-visible:outline-none",
                    locale === l ? "text-glass-white" : "text-glass-mute",
                  )}
                >
                  <Flag locale={l} />
                  <span>{l.toUpperCase()}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
