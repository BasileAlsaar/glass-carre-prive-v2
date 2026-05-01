"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Ticket } from "lucide-react";

import { useLocale } from "@/lib/locale-context";
import { INSTAGRAM_URL, SHOTGUN_VENUE_URL } from "@/lib/events";

const EASE = [0.16, 1, 0.3, 1] as const;

export function EventEmptyState() {
  const { dictionary } = useLocale();
  const t = dictionary.events;

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="mx-auto flex max-w-3xl flex-col items-start gap-6 border-l-2 border-glass-rose px-6 py-16 md:px-10 md:py-24"
    >
      <h2 className="font-display text-3xl italic text-glass-white md:text-5xl">
        {t.emptyTitle}
      </h2>
      <p className="max-w-2xl text-base text-glass-mute md:text-lg">{t.emptyMessage}</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-6">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="tracking-label group inline-flex h-11 items-center gap-2 bg-glass-rose px-6 text-xs font-medium uppercase text-glass-black transition-all hover:gap-3 hover:bg-glass-burgundy hover:text-glass-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-blood focus-visible:ring-offset-4 focus-visible:ring-offset-glass-black"
        >
          <Instagram size={14} aria-hidden="true" />
          {t.ctaInstagram}
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <a
          href={SHOTGUN_VENUE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="tracking-label inline-flex h-11 items-center gap-2 border border-glass-rose px-6 text-xs font-medium uppercase text-glass-rose transition-colors hover:bg-glass-rose hover:text-glass-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-blood focus-visible:ring-offset-4 focus-visible:ring-offset-glass-black"
        >
          <Ticket size={14} aria-hidden="true" />
          {t.ctaShotgun}
        </a>
      </div>
    </motion.section>
  );
}
