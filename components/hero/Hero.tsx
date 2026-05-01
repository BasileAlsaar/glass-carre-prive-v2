"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { ReservationDialog } from "@/components/cta/ReservationDialog";
import { useLocale } from "@/lib/locale-context";

// §11 BRIEF — ease-out-expo, durée 1s, stagger 120ms
const EASE = [0.16, 1, 0.3, 1] as const;
const DURATION = 1;
const STAGGER = 0.12;

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: DURATION, ease: EASE, delay },
});

export function Hero() {
  const { dictionary } = useLocale();

  return (
    <section
      aria-labelledby="hero-tagline"
      className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-glass-black"
    >
      {/* Photo nuit + overlay 65% (§6 + §6bis.2) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-glass-black/65" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-glass-black/80 to-transparent"
        />
      </div>

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center px-6 py-32 text-center md:py-40">
        {/* Logo Glass — §6bis.2 */}
        <motion.div {...fade(0)}>
          <Image
            src="/logo/glass-logo-blanc.png"
            alt="Glass Club"
            width={5000}
            height={5000}
            priority
            sizes="(max-width: 768px) 200px, 280px"
            className="mx-auto h-44 w-44 md:h-64 md:w-64"
          />
        </motion.div>

        {/* Tagline display §6 */}
        <motion.h1
          id="hero-tagline"
          {...fade(STAGGER)}
          className="font-display tracking-display mt-4 max-w-3xl text-balance text-3xl leading-[1.1] text-glass-white md:text-5xl lg:text-6xl"
        >
          <span className="block">{dictionary.hero.taglineLine1}</span>
          <span className="block">{dictionary.hero.taglineLine2}</span>
        </motion.h1>

        {/* Double CTA */}
        <motion.div
          {...fade(STAGGER * 2)}
          className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href="#contact-form"
            className="tracking-label group inline-flex h-12 items-center gap-2 bg-glass-rose px-7 text-xs font-medium uppercase text-glass-black transition-all hover:bg-glass-burgundy hover:text-glass-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-blood focus-visible:ring-offset-4 focus-visible:ring-offset-glass-black"
          >
            {dictionary.cta.privatizeFull}
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <ReservationDialog
            trigger={
              <button
                type="button"
                className="tracking-label inline-flex h-12 items-center justify-center border border-glass-rose px-7 text-xs font-medium uppercase text-glass-rose transition-colors hover:bg-glass-rose hover:text-glass-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-blood focus-visible:ring-offset-4 focus-visible:ring-offset-glass-black"
              >
                {dictionary.cta.bookTable}
              </button>
            }
          />
        </motion.div>

        {/* Footer hero §6 */}
        <motion.p
          {...fade(STAGGER * 3)}
          className="tracking-label mt-14 text-[11px] uppercase text-glass-white/70"
        >
          {dictionary.hero.footnote}
        </motion.p>
      </div>
    </section>
  );
}
