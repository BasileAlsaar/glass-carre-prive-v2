"use client";

import { motion } from "framer-motion";

import { MenuItem } from "@/components/menu/MenuItem";
import { useLocale } from "@/lib/locale-context";
import type { MenuCategory as MenuCategoryData } from "@/lib/menu";

const EASE = [0.16, 1, 0.3, 1] as const;

export function MenuCategory({ category }: { category: MenuCategoryData }) {
  const { dictionary } = useLocale();
  const t = dictionary.menu;

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className="break-inside-avoid"
    >
      <header className="flex items-center gap-3">
        <span aria-hidden="true" className="block h-px w-4 flex-none bg-glass-rose" />
        <h2 className="text-sm font-medium uppercase tracking-[0.4em] text-glass-rose">
          {t.categories[category.id]}
        </h2>
        <span aria-hidden="true" className="block h-px w-4 flex-none bg-glass-rose" />
      </header>

      {category.subtitle && (
        <p className="mt-3 text-xs italic text-glass-mute">{category.subtitle}</p>
      )}

      {typeof category.flatPrice === "number" && (
        <p className="mt-4 font-display italic text-glass-rose">
          <span className="text-4xl tabular">{category.flatPrice}</span>
          <span className="ml-1 align-baseline text-xl">€</span>
        </p>
      )}

      <ul className="mt-6 space-y-6">
        {category.items.map((item, i) => (
          <MenuItem
            key={`${category.id}-${item.name ?? item.unit ?? i}-${i}`}
            item={item}
            showPrice={item.price !== undefined}
          />
        ))}
      </ul>
    </motion.section>
  );
}
