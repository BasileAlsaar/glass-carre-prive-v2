"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { useLocale } from "@/lib/locale-context";

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

export function KeyFigures() {
  const { dictionary } = useLocale();
  const t = dictionary.keyFigures;

  return (
    <section
      aria-label={t.regionLabel}
      className="relative border-t border-white/5 bg-glass-black"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 md:px-10 md:py-32">
        <ul className="grid grid-cols-2 gap-y-12 gap-x-6 md:grid-cols-4">
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
      </div>
    </section>
  );
}
