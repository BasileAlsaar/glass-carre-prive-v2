"use client";

import { motion } from "framer-motion";

import { useLocale } from "@/lib/locale-context";

const EASE = [0.16, 1, 0.3, 1] as const;

export function MenuFooter() {
  const { dictionary } = useLocale();
  const t = dictionary.menu.footer;

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: EASE }}
      className="mx-auto max-w-3xl border-t border-glass-rose/30 px-6 py-12 text-center md:py-16"
    >
      <div className="border-b border-glass-rose/30 pb-8">
        <p className="text-xs uppercase tracking-wider text-glass-mute md:text-sm">
          {t.bottles}
        </p>
        <p className="mt-4 text-xs uppercase tracking-wider text-glass-mute md:text-sm">
          {t.service}
        </p>
      </div>
      <p className="mt-8 text-[11px] italic text-glass-mute/70">{t.warning}</p>
    </motion.footer>
  );
}
