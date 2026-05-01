"use client";

import { motion } from "framer-motion";

import { MembershipTier } from "@/components/membership/MembershipTier";
import { useLocale } from "@/lib/locale-context";
import { MEMBERSHIP_TIERS } from "@/lib/membership";

const EASE = [0.16, 1, 0.3, 1] as const;

export function MembershipTiers() {
  const { dictionary } = useLocale();
  const t = dictionary.membership;

  return (
    <section
      aria-labelledby="tiers-title"
      className="relative border-t border-white/5 bg-glass-black px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-screen-xl">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-glass-rose">
            {t.tiersEyebrow}
          </p>
          <h2
            id="tiers-title"
            className="font-display tracking-display mt-4 text-4xl italic leading-tight text-glass-white md:text-5xl"
          >
            {t.tiersTitle}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-glass-white/80 md:text-lg">
            {t.tiersIntro}
          </p>
        </motion.header>

        <ul className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5">
          {MEMBERSHIP_TIERS.map((tier, i) => (
            <li key={tier.id} className="flex">
              <MembershipTier tier={tier} index={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
