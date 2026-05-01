"use client";

import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";

import { INSTAGRAM_URL } from "@/lib/events";
import { useLocale } from "@/lib/locale-context";

const EASE = [0.16, 1, 0.3, 1] as const;
const STAGGER = 0.1;

const fade = (delay: number) =>
  ({
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" } as const,
    transition: { duration: 0.7, delay, ease: EASE },
  }) as const;

export function EventEmptyState() {
  const { dictionary } = useLocale();
  const t = dictionary.events;

  return (
    <section
      aria-labelledby="events-empty-title"
      className="mx-auto flex max-w-xl flex-col items-start px-6 py-32 md:py-40"
    >
      <motion.p {...fade(0)} className="text-xs uppercase tracking-[0.4em] text-glass-rose">
        {t.emptyEyebrow}
      </motion.p>

      <motion.h2
        {...fade(STAGGER)}
        id="events-empty-title"
        className="font-display tracking-display mt-6 text-4xl italic leading-tight text-glass-white md:text-5xl"
      >
        {t.emptyTitle}
      </motion.h2>

      <motion.p
        {...fade(STAGGER * 2)}
        className="mt-8 text-base leading-relaxed text-glass-mute md:text-lg"
      >
        {t.emptyMessage}
      </motion.p>

      <motion.div
        {...fade(STAGGER * 3)}
        className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
      >
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="tracking-label group inline-flex h-12 items-center gap-2 bg-glass-rose px-6 text-xs font-medium uppercase text-glass-black transition-all hover:gap-3 hover:bg-glass-burgundy hover:text-glass-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-blood focus-visible:ring-offset-4 focus-visible:ring-offset-glass-black"
        >
          <Instagram size={14} aria-hidden="true" />
          {t.ctaInstagram}
        </a>
        <a
          href="/#contact-form?type=privatisation-seche"
          className="tracking-label inline-flex h-12 items-center gap-2 border border-glass-rose px-6 text-xs font-medium uppercase text-glass-rose transition-colors hover:bg-glass-rose hover:text-glass-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-blood focus-visible:ring-offset-4 focus-visible:ring-offset-glass-black"
        >
          {t.ctaPrivatize}
          <ArrowRight size={14} aria-hidden="true" />
        </a>
      </motion.div>

      <motion.p
        {...fade(STAGGER * 4)}
        className="mt-10 max-w-md text-xs italic leading-relaxed text-glass-mute/70"
      >
        {t.emptyFestivalNote}
      </motion.p>
    </section>
  );
}
