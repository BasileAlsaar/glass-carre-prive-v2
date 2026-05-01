"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { useLocale } from "@/lib/locale-context";

const EASE = [0.16, 1, 0.3, 1] as const;
const STAGGER = 0.12;

export function MembershipConcept() {
  const { dictionary } = useLocale();
  const t = dictionary.membership;

  return (
    <section
      aria-labelledby="membership-title"
      className="relative isolate flex min-h-[80vh] flex-col items-center justify-center bg-glass-black px-6 py-24 md:py-32"
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col items-start">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-xs uppercase tracking-[0.3em] text-glass-rose"
        >
          {t.eyebrow}
        </motion.p>
        <motion.h1
          id="membership-title"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: STAGGER, ease: EASE }}
          className="font-display tracking-display mt-6 text-5xl italic leading-[1.05] text-glass-white sm:text-6xl lg:text-7xl"
        >
          {t.title}
        </motion.h1>
        <motion.div
          aria-hidden="true"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: STAGGER * 2, ease: EASE }}
          className="mt-10 h-px w-24 origin-left bg-glass-rose"
        />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: STAGGER * 3, ease: EASE }}
          className="mt-10 text-sm uppercase tracking-[0.2em] text-glass-mute"
        >
          {t.subtitle}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: STAGGER * 4, ease: EASE }}
          className="mt-10 text-lg leading-relaxed text-glass-white/85 md:text-xl md:leading-[1.6]"
        >
          {t.body}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: STAGGER * 5, ease: EASE }}
          className="mt-12"
        >
          <a
            href="/#contact-form?type=membership"
            className="tracking-[0.15em] group inline-flex items-center gap-2 bg-glass-rose px-8 py-5 text-sm font-medium uppercase text-glass-black transition-all hover:gap-3 hover:bg-glass-burgundy hover:text-glass-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-blood focus-visible:ring-offset-4 focus-visible:ring-offset-glass-black"
          >
            {t.cta}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
