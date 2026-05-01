"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { useLocale } from "@/lib/locale-context";
import type { Offer } from "@/lib/offers";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;
const STAGGER = 0.12;

const fade = (delay: number) =>
  ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" } as const,
    transition: { duration: 0.7, ease: EASE, delay },
  }) as const;

type OfferSplitProps = {
  offer: Offer;
  /** Côté de la photo desktop. Mobile : photo toujours en haut. */
  photoSide: "left" | "right";
};

export function OfferSplit({ offer, photoSide }: OfferSplitProps) {
  const { dictionary } = useLocale();
  const reducedMotion = useReducedMotion();
  const t = dictionary.offers;
  const isMultiTier = offer.tiers.length > 1;
  const photoFirst = photoSide === "left";

  return (
    <section
      id={`formule-${offer.id}`}
      aria-labelledby={`offer-title-${offer.id}`}
      className="relative grid min-h-screen grid-cols-1 overflow-hidden border-t border-white/5 bg-glass-black lg:grid-cols-2"
    >
      {/* Photo */}
      <div
        className={cn(
          "relative h-[60vh] overflow-hidden lg:h-auto",
          photoFirst ? "lg:order-1" : "lg:order-2",
        )}
      >
        <motion.div
          initial={false}
          animate={reducedMotion ? undefined : { scale: [1, 1.06] }}
          transition={
            reducedMotion
              ? undefined
              : {
                  duration: 30,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse" as const,
                }
          }
          className="absolute inset-0"
        >
          <Image
            src={offer.imageSrc}
            alt={`${offer.name} — Glass Club`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            quality={80}
            loading="lazy"
            className="object-cover"
          />
        </motion.div>
        <div aria-hidden="true" className="absolute inset-0 bg-glass-black/15" />
      </div>

      {/* Fiche */}
      <div
        className={cn(
          "flex flex-col justify-center px-6 py-14 lg:px-16 lg:py-20",
          photoFirst ? "lg:order-2" : "lg:order-1",
        )}
      >
        <motion.h2
          {...fade(0)}
          id={`offer-title-${offer.id}`}
          className="font-display text-4xl italic leading-[1.05] text-glass-white sm:text-5xl lg:text-6xl"
        >
          {offer.name}
        </motion.h2>

        <motion.p
          {...fade(STAGGER)}
          className="mt-5 text-sm uppercase tracking-[0.2em] text-glass-mute"
        >
          {offer.schedule}
          {offer.capacity && <> · {offer.capacity}</>}
        </motion.p>

        {/* Prix */}
        <motion.div {...fade(STAGGER * 2)} className="mt-10 space-y-3">
          {offer.tiers.map((tier) => (
            <div
              key={tier.capacity}
              className="flex flex-wrap items-baseline gap-x-3 gap-y-1"
            >
              {isMultiTier && (
                <span className="tracking-label w-full text-[11px] uppercase text-glass-mute">
                  {tier.capacity}
                </span>
              )}
              <span className="font-display tabular text-5xl leading-none text-glass-rose lg:text-6xl">
                {tier.price.replace(/\s*HT\s*$/i, "").replace(/à partir de\s*/i, "")}
              </span>
              <span className="tracking-label text-xs uppercase text-glass-mute">
                {/^à partir de/i.test(tier.price) ? "à partir · HT" : "HT"}
              </span>
              {tier.openBar && (
                <span className="block w-full text-xs text-glass-mute">{tier.openBar}</span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Inclus */}
        <motion.div {...fade(STAGGER * 3)} className="mt-12">
          <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-glass-mute">
            {t.included}
          </h3>
          <ul className="space-y-3">
            {offer.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm text-glass-white">
                <span aria-hidden="true" className="mt-[0.1em] text-glass-rose">·</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* En option */}
        {offer.options && offer.options.length > 0 && (
          <motion.div {...fade(STAGGER * 4)} className="mt-8">
            <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-glass-mute">
              {t.options}
            </h3>
            <ul className="space-y-2 text-xs text-glass-mute">
              {offer.options.map((o) => (
                <li key={o.label} className="flex gap-2">
                  <span aria-hidden="true" className="text-glass-rose">·</span>
                  <span>
                    <em className="not-italic text-glass-white/80">{o.label}</em> · {o.detail}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div {...fade(STAGGER * 5)} className="mt-12">
          <a
            href={offer.ctaHref}
            className="tracking-[0.15em] group inline-flex items-center gap-2 bg-glass-rose px-8 py-5 text-sm font-medium uppercase text-glass-black transition-all hover:gap-3 hover:bg-glass-rose-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-blood focus-visible:ring-offset-4 focus-visible:ring-offset-glass-black"
          >
            {t.choose}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
