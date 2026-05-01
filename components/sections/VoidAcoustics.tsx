"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { useLocale } from "@/lib/locale-context";

const EASE = [0.16, 1, 0.3, 1] as const;

export function VoidAcoustics() {
  const { dictionary } = useLocale();
  const t = dictionary.void;

  return (
    <section
      aria-labelledby="void-title"
      className="relative isolate overflow-hidden border-t border-white/5 bg-glass-ink"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-20 md:grid-cols-12 md:gap-16 md:px-10 md:py-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: EASE }}
          className="relative md:col-span-5 md:order-1"
        >
          <div className="relative aspect-square w-full overflow-hidden md:aspect-[4/5]">
            <Image
              src="/images/void-vinyl.jpg"
              alt={t.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              loading="lazy"
              quality={80}
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.12, ease: EASE }}
          className="md:col-span-7 md:order-2"
        >
          <p className="tracking-label text-[11px] uppercase text-glass-flame">{t.eyebrow}</p>
          <h2
            id="void-title"
            className="font-display tracking-display mt-3 text-balance text-3xl uppercase leading-[1.05] text-glass-white md:text-5xl lg:text-6xl"
          >
            {t.title}
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-glass-white/80">{t.body}</p>
        </motion.div>
      </div>
    </section>
  );
}
