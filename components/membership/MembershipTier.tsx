"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { useLocale } from "@/lib/locale-context";
import type { MembershipTier as Tier } from "@/lib/membership";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const borderClass: Record<Tier["id"], string> = {
  classic: "border-glass-rose/15",
  gold: "border-glass-rose/40",
  black: "border-glass-rose hover:border-glass-rose-deep",
};

export function MembershipTier({
  tier,
  index,
}: {
  tier: Tier;
  index: number;
}) {
  const { dictionary, locale } = useLocale();
  const t = dictionary.membership;
  const benefits = tier.benefits[locale];
  const price = tier.price[locale];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: EASE }}
      className={cn(
        "relative flex h-full flex-col border bg-glass-ink p-10 transition-all motion-safe:hover:-translate-y-0.5",
        borderClass[tier.id],
      )}
      aria-labelledby={`tier-${tier.id}-name`}
    >
      {tier.featured && (
        <span className="absolute right-6 top-6 border border-glass-rose px-2 py-1 text-[9px] uppercase tracking-[0.3em] text-glass-rose">
          {t.badgeMostRequested}
        </span>
      )}

      <h3
        id={`tier-${tier.id}-name`}
        className="text-sm uppercase tracking-[0.3em] text-glass-rose"
      >
        {tier.name}
      </h3>

      <p
        aria-label={`${dictionary.menu.priceAria} : ${price}`}
        className="font-display tabular mt-3 text-4xl italic leading-none text-glass-white sm:text-5xl"
      >
        {price}
      </p>

      <div aria-hidden="true" className="my-8 h-px w-full bg-glass-rose/20" />

      <ul className="flex-1 space-y-4">
        {benefits.map((b) => (
          <li key={b} className="flex gap-3 text-base text-glass-white">
            <span aria-hidden="true" className="mt-[0.1em] text-glass-rose">·</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <a
        href={tier.ctaHref}
        className="tracking-[0.15em] mt-10 inline-flex items-center justify-center gap-2 bg-glass-rose px-6 py-4 text-xs font-medium uppercase text-glass-black transition-all hover:gap-3 hover:bg-glass-rose-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-blood focus-visible:ring-offset-4 focus-visible:ring-offset-glass-ink"
      >
        {t.ctaRequest}
        <ArrowRight size={14} aria-hidden="true" />
      </a>

      {tier.introductionOnly && (
        <p className="mt-4 text-center text-xs italic text-glass-mute">{t.introOnlyNote}</p>
      )}
    </motion.article>
  );
}
