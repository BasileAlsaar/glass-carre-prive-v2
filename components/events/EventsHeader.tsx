"use client";

import { motion } from "framer-motion";

import { useLocale } from "@/lib/locale-context";

const EASE = [0.16, 1, 0.3, 1] as const;
const STAGGER = 0.1;

export function EventsHeader() {
  const { dictionary } = useLocale();
  const t = dictionary.events;

  return (
    <header className="relative min-h-[50vh] border-b border-white/5 bg-glass-black">
      <div className="mx-auto flex min-h-[50vh] w-full max-w-[1440px] flex-col items-start justify-end px-4 py-24 md:px-8 md:py-32">
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
          className="mt-6 text-xs uppercase tracking-[0.3em] text-glass-mute md:text-sm"
        >
          {t.subtitle}
        </motion.p>
        <motion.div
          aria-hidden="true"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: STAGGER * 2, ease: EASE }}
          className="mt-8 h-px w-24 origin-left bg-glass-rose"
        />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: STAGGER * 3, ease: EASE }}
          className="mt-10 max-w-2xl text-base text-glass-white/80 md:text-lg"
        >
          {t.intro}
        </motion.p>
      </div>
    </header>
  );
}
