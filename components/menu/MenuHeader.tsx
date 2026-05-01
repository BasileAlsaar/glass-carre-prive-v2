"use client";

import { motion } from "framer-motion";

import { useLocale } from "@/lib/locale-context";

const EASE = [0.16, 1, 0.3, 1] as const;
const STAGGER = 0.1;

export function MenuHeader() {
  const { dictionary } = useLocale();
  const t = dictionary.menu;

  return (
    <header className="relative flex min-h-[50vh] flex-col items-center justify-center border-b border-white/5 bg-glass-black px-6 py-24 text-center md:py-32">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="font-display tracking-display text-6xl italic leading-none text-glass-white sm:text-7xl lg:text-8xl"
      >
        {t.title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: STAGGER, ease: EASE }}
        className="mt-8 text-xs uppercase tracking-[0.3em] text-glass-mute md:text-sm"
      >
        {t.subtitle}
      </motion.p>
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: STAGGER * 2, ease: EASE }}
        className="mt-10 h-px w-24 origin-center bg-glass-rose"
      />
    </header>
  );
}
