"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { useLocale } from "@/lib/locale-context";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

// Bento layout — 6 cols desktop, 2 cols mobile, spans variables.
const GALLERY = [
  { src: "/images/gallery-1.jpg", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/gallery-6.jpg", span: "md:col-span-2" },
  { src: "/images/gallery-3.jpg", span: "md:col-span-2" },
  { src: "/images/gallery-7.jpg", span: "md:col-span-2" },
  { src: "/images/gallery-4.jpg", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/gallery-2.jpg", span: "md:col-span-2" },
  { src: "/images/gallery-8.jpg", span: "md:col-span-3" },
  { src: "/images/gallery-5.jpg", span: "md:col-span-3" },
  { src: "/images/gallery-9.jpg", span: "md:col-span-6" },
] as const;

export function Gallery() {
  const { dictionary } = useLocale();
  const t = dictionary.gallery;

  return (
    <section
      aria-labelledby="gallery-title"
      className="relative border-t border-white/5 bg-glass-black"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
        <header className="mb-12 max-w-2xl md:mb-16">
          <p className="tracking-label text-[11px] uppercase text-glass-flame">{t.eyebrow}</p>
          <h2
            id="gallery-title"
            className="font-display tracking-display mt-3 text-3xl text-glass-white md:text-5xl"
          >
            {t.title}
          </h2>
          <p className="mt-5 max-w-xl text-sm text-glass-mute md:text-base">{t.lede}</p>
        </header>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-2 md:auto-rows-[220px] md:grid-cols-6 md:gap-3">
          {GALLERY.map((img, i) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: EASE }}
              className={cn(
                "group relative overflow-hidden bg-glass-ink",
                img.span,
              )}
            >
              <Image
                src={img.src}
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
                quality={75}
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-glass-black/0 transition-colors duration-500 group-hover:bg-glass-black/30"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
