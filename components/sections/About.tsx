"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { useLocale } from "@/lib/locale-context";

const EASE = [0.16, 1, 0.3, 1] as const;

export function About() {
  const { dictionary } = useLocale();
  const t = dictionary.about;

  return (
    <section
      id="lieu"
      aria-labelledby="about-title"
      className="relative border-t border-white/5 bg-glass-black"
    >
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 md:grid-cols-12 md:gap-16 md:px-10 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="md:col-span-7 lg:col-span-6 lg:col-start-1"
        >
          <p className="tracking-label text-[11px] uppercase text-glass-flame">{t.eyebrow}</p>
          <h2
            id="about-title"
            className="font-display tracking-display mt-3 text-3xl text-glass-white md:text-5xl"
          >
            {t.title}
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {t.chips.map((chip) => (
              <li
                key={chip}
                className="tracking-label border border-white/10 px-3 py-1 text-[10px] uppercase text-glass-white/70"
              >
                {chip}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-glass-white/80">{t.body}</p>
          <a
            href="#privatisations"
            className="tracking-label group mt-8 inline-flex items-center gap-2 text-[11px] uppercase text-glass-flame transition-all hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-flame focus-visible:ring-offset-4 focus-visible:ring-offset-glass-black"
          >
            {t.seeOffers}
            <ArrowRight size={14} aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.12, ease: EASE }}
          className="relative md:col-span-5 lg:col-span-6"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[3/4] lg:aspect-[4/5]">
            <Image
              src="/images/about-bar.jpg"
              alt={t.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              quality={80}
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-glass-black/40 to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
