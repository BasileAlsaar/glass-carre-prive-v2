"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { useLocale } from "@/lib/locale-context";

const EASE = [0.16, 1, 0.3, 1] as const;

function CountUp({
  target,
  decimals,
  suffix,
}: {
  target: number;
  decimals: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reducedMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setValue(target);
      return;
    }
    const start = performance.now();
    const duration = 1400;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, reducedMotion]);

  const finalLabel = `${target.toFixed(decimals)}${suffix}`;

  return (
    <span ref={ref} aria-label={finalLabel} className="tabular">
      <span aria-hidden="true">{value.toFixed(decimals)}</span>
      <span aria-hidden="true" className="text-glass-rose/60">
        {suffix}
      </span>
    </span>
  );
}

export function SocialProof() {
  const { dictionary } = useLocale();
  const t = dictionary.socialProof;

  return (
    <section
      aria-label={t.eyebrow}
      className="relative isolate flex min-h-screen flex-col justify-center border-t border-white/5 bg-glass-black"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
        {/* Bloc 1 — chiffres clés */}
        <ul className="grid grid-cols-2 gap-y-12 gap-x-6 border-b border-white/10 pb-16 md:grid-cols-4 md:pb-20">
          {t.stats.map((stat) => (
            <li key={stat.label} className="flex flex-col items-start">
              <p className="font-display tracking-display text-5xl leading-none text-glass-rose md:text-6xl lg:text-7xl">
                <CountUp target={stat.target} decimals={stat.decimals} suffix={stat.suffix} />
              </p>
              <p className="tracking-label mt-3 text-[10px] uppercase text-glass-mute md:text-[11px]">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>

        {/* Bloc 2 — témoignages */}
        <header className="mt-16 max-w-2xl md:mt-20">
          <p className="tracking-label text-[11px] uppercase text-glass-flame">{t.eyebrow}</p>
          <h2 className="font-display tracking-display mt-3 text-3xl text-glass-white md:text-5xl">
            {t.title}
          </h2>
        </header>
        <div className="mt-12 grid gap-10 md:mt-14 md:grid-cols-3 md:gap-8">
          {t.testimonials.map((q, i) => (
            <motion.blockquote
              key={q.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: EASE }}
              className="border-l-2 border-glass-rose pl-6"
            >
              <p className="font-display text-xl italic leading-snug text-glass-white md:text-2xl">
                <span aria-hidden="true">«&nbsp;</span>
                {q.text}
                <span aria-hidden="true">&nbsp;»</span>
              </p>
              <cite className="tracking-label mt-5 block text-[11px] uppercase not-italic text-glass-mute">
                {q.name} · {q.context}
              </cite>
            </motion.blockquote>
          ))}
        </div>

        {/* Bloc 3 — logos congrès (statique) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mt-20 md:mt-28"
        >
          <p className="tracking-label text-[11px] uppercase text-glass-flame">{t.trustedBy}</p>
          <ul className="mt-8 grid grid-cols-2 gap-px bg-glass-rose/15 md:grid-cols-4">
            {t.congresses.map((c) => (
              <li
                key={c}
                className="flex items-center justify-center bg-glass-black px-4 py-7 text-center font-display text-xs uppercase tracking-[0.3em] text-glass-white/70 md:py-9 md:text-sm"
                aria-label={c}
              >
                {c}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
