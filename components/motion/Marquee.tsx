import { cn } from "@/lib/utils";

const DEFAULT_TEXT = "GLASS CLUB · CARRÉ D'OR · CANNES · ";

type MarqueeProps = {
  text?: string;
  className?: string;
};

/**
 * Marquee horizontal infini §11 — 60s/loop, pause au hover, désactivé en
 * prefers-reduced-motion via la variante motion-safe: de Tailwind.
 *
 * Le contenu est dupliqué sur deux spans identiques de 50 % chacun ; le
 * track est translaté de -50 % en boucle pour un loop seamless.
 */
export function Marquee({ text = DEFAULT_TEXT, className }: MarqueeProps) {
  const repeated = text.repeat(8);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden border-y border-white/5 bg-glass-black py-8 md:py-10",
        className,
      )}
    >
      <div className="flex w-max motion-safe:animate-marquee">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="font-display tracking-display flex shrink-0 items-center pr-8 text-3xl uppercase leading-none text-glass-white/15 md:text-5xl lg:text-7xl"
          >
            {repeated}
          </span>
        ))}
      </div>
    </div>
  );
}
