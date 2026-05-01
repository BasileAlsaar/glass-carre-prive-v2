"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import type { Offer } from "@/lib/offers";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

type OfferCardProps = {
  offer: Offer;
  index: number;
  ctaLabel: string;
};

// adapté du JSX de référence §6bis.1 du BRIEF
export function OfferCard({ offer, index, ctaLabel }: OfferCardProps) {
  const isMultiTier = offer.tiers.length > 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: EASE }}
      style={{ transformPerspective: 1000 }}
      className="group relative flex flex-col bg-glass-ink p-8 transition-colors hover:border-glass-flame/40 md:p-10 border border-white/10"
    >
      <header className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4">
        <h3 className="font-display tracking-display text-2xl text-glass-white">{offer.name}</h3>
        <span className="tracking-label shrink-0 text-[11px] uppercase text-glass-mute">
          {offer.schedule}
        </span>
      </header>

      {offer.capacity && <p className="mt-3 text-sm text-glass-mute">{offer.capacity}</p>}

      <ul className="mt-6 space-y-2 text-sm text-glass-white/80">
        {offer.highlights.map((h) => (
          <li
            key={h}
            className="flex gap-3 before:mt-[0.65em] before:block before:h-px before:w-3 before:flex-none before:bg-glass-flame"
          >
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {offer.options && offer.options.length > 0 && (
        <ul className="mt-5 space-y-1 text-xs text-glass-mute">
          {offer.options.map((o) => (
            <li key={o.label}>
              <em className="not-italic text-glass-white/70">{o.label}</em> · {o.detail}
            </li>
          ))}
        </ul>
      )}

      <footer className="mt-auto pt-8">
        <div className="space-y-3 border-t border-white/10 pt-6">
          {offer.tiers.map((tier) => (
            <div key={tier.capacity} className="flex items-baseline justify-between gap-4">
              {isMultiTier && (
                <div className="min-w-0">
                  <p className="text-xs text-glass-mute">{tier.capacity}</p>
                  {tier.openBar && (
                    <p className="text-[10px] text-glass-mute/70">{tier.openBar}</p>
                  )}
                </div>
              )}
              <span
                className={cn(
                  "tabular font-display text-glass-white",
                  isMultiTier ? "text-xl" : "ml-auto text-3xl",
                )}
              >
                {tier.price}
              </span>
            </div>
          ))}
        </div>

        <a
          href={offer.ctaHref}
          className="tracking-label group/cta mt-6 inline-flex items-center gap-2 text-[11px] uppercase text-glass-flame transition-all hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-flame focus-visible:ring-offset-4 focus-visible:ring-offset-glass-ink"
        >
          {ctaLabel}
          <ArrowRight size={14} aria-hidden="true" />
        </a>
      </footer>
    </motion.article>
  );
}
