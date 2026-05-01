"use client";

import { useEffect } from "react";

import type { Locale } from "@/lib/i18n";
import { useLocale } from "@/lib/locale-context";

/**
 * Synchronise le state du LocaleProvider avec le segment d'URL [locale].
 * Sur les routes /[locale]/... la source de vérité est l'URL.
 */
export function LocaleSync({ locale }: { locale: Locale }) {
  const { setLocale } = useLocale();

  useEffect(() => {
    setLocale(locale);
  }, [locale, setLocale]);

  return null;
}
