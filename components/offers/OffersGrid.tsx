"use client";

import { OfferCard } from "@/components/offers/OfferCard";
import { useLocale } from "@/lib/locale-context";
import { OFFERS } from "@/lib/offers";

export function OffersGrid() {
  const { dictionary } = useLocale();

  return (
    <section
      id="privatisations"
      aria-labelledby="offers-title"
      className="relative border-t border-white/5 bg-glass-black"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
        <header className="mb-12 max-w-3xl md:mb-16">
          <p className="tracking-label text-[11px] uppercase text-glass-flame">
            {dictionary.offers.eyebrow}
          </p>
          <h2
            id="offers-title"
            className="font-display tracking-display mt-3 text-3xl text-glass-white md:text-5xl"
          >
            {dictionary.offers.title}
          </h2>
          <p className="mt-5 max-w-2xl text-sm text-glass-mute md:text-base">
            {dictionary.offers.lede}
          </p>
        </header>
        <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
          {OFFERS.map((offer, i) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              index={i}
              ctaLabel={dictionary.offers.privatizeFormula}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
