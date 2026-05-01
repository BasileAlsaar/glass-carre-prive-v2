"use client";

import { useLocale } from "@/lib/locale-context";
import type { MenuItem as MenuItemData } from "@/lib/menu";
import { cn } from "@/lib/utils";

type MenuItemProps = {
  item: MenuItemData;
  /** Si la catégorie a un flatPrice, on le passe ici pour ne pas répéter à chaque ligne. */
  showPrice?: boolean;
};

export function MenuItem({ item, showPrice = true }: MenuItemProps) {
  const { dictionary, locale } = useLocale();
  const t = dictionary.menu;

  const displayName = item.name ?? (item.unit ? t.units[item.unit] : "");
  const showUnitInline = item.name && item.unit;

  return (
    <li className="group">
      <div
        className={cn(
          "flex items-baseline justify-between gap-x-4 transition-transform duration-200 ease-out",
          "motion-safe:group-hover:translate-x-0.5",
        )}
      >
        <span className="font-medium uppercase tracking-wider text-glass-white transition-colors group-hover:text-glass-rose-deep">
          {displayName}
          {showUnitInline && item.unit && (
            <span className="ml-2 text-glass-mute">— {t.units[item.unit].toUpperCase()}</span>
          )}
        </span>
        {showPrice && item.price !== undefined && (
          <span
            aria-label={`${t.priceAria} : ${item.price} euros`}
            className="font-display tabular text-base text-glass-rose"
          >
            {item.price}
            <span className="ml-0.5 text-sm">€</span>
          </span>
        )}
      </div>
      {item.description && (
        <p
          lang={locale}
          className="mt-1 max-w-[80%] text-xs italic text-glass-mute"
        >
          {item.description[locale]}
        </p>
      )}
    </li>
  );
}
