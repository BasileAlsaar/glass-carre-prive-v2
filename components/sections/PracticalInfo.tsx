"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";

import { useLocale } from "@/lib/locale-context";

const EASE = [0.16, 1, 0.3, 1] as const;

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=6+rue+des+Fr%C3%A8res+Pradignac+06400+Cannes";

export function PracticalInfo() {
  const { dictionary } = useLocale();
  const t = dictionary.practical;

  return (
    <section
      id="events"
      aria-labelledby="practical-title"
      className="relative border-t border-white/5 bg-glass-ink"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12 max-w-2xl md:mb-16"
        >
          <p className="tracking-label text-[11px] uppercase text-glass-flame">{t.eyebrow}</p>
          <h2
            id="practical-title"
            className="font-display tracking-display mt-3 text-3xl text-glass-white md:text-5xl"
          >
            {t.title}
          </h2>
        </motion.header>

        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          {/* Liste features §4.4 */}
          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 md:col-span-7"
          >
            {t.features.map((f) => (
              <div
                key={f.label}
                className="flex flex-col gap-1 border-t border-white/10 pt-4"
              >
                <dt className="tracking-label text-[10px] uppercase text-glass-mute">
                  {f.label}
                </dt>
                <dd className="text-sm text-glass-white">{f.value}</dd>
              </div>
            ))}
          </motion.dl>

          {/* Address card + map link */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            className="md:col-span-5"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/10 bg-glass-black">
              <Image
                src="/images/practical-cannes.jpg"
                alt="Vieux Port de Cannes la nuit, lumières du quai"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                loading="lazy"
                quality={75}
                className="object-cover opacity-70"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-glass-black/90 via-glass-black/40 to-transparent"
              />
              <div className="absolute inset-0 flex flex-col justify-end gap-4 p-6">
                <p className="tracking-label text-[10px] uppercase text-glass-flame">
                  {t.addressLabel}
                </p>
                <p className="font-display text-xl text-glass-white">{t.address}</p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tracking-label group inline-flex items-center gap-2 text-[11px] uppercase text-glass-flame transition-all hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-flame focus-visible:ring-offset-4 focus-visible:ring-offset-glass-ink"
                >
                  <MapPin size={14} aria-hidden="true" />
                  {t.viewMap}
                  <ArrowUpRight
                    size={14}
                    aria-hidden="true"
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* §4.6 schedule strip */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.24, ease: EASE }}
          className="mx-auto mt-16 max-w-3xl border-t border-white/10 pt-8 text-sm leading-relaxed text-glass-white/80 md:mt-20"
        >
          {t.schedule}
        </motion.p>
      </div>
    </section>
  );
}
