"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { useLocale } from "@/lib/locale-context";
import type { GlassEvent } from "@/lib/events";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const statusColor: Record<GlassEvent["status"], string> = {
  upcoming: "text-glass-rose",
  "sold-out": "text-glass-blood",
  past: "text-glass-mute",
  cancelled: "text-glass-mute",
};

function formatDate(dateIso: string, locale: "fr" | "en"): string {
  try {
    const d = new Date(dateIso);
    const opts: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    return new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-GB", opts)
      .format(d)
      .replace(/\./g, "")
      .toUpperCase();
  } catch {
    return dateIso;
  }
}

export function EventCard({ event, index }: { event: GlassEvent; index: number }) {
  const { dictionary, locale } = useLocale();
  const t = dictionary.events;
  const title = locale === "fr" ? event.title : event.titleEn;
  const description =
    locale === "fr" ? event.description : event.descriptionEn ?? event.description;

  const statusLabel = {
    upcoming: t.statusUpcoming,
    "sold-out": t.statusSoldOut,
    past: t.statusReplay,
    cancelled: t.statusCancelled,
  }[event.status];

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: EASE }}
      className="group relative flex flex-col gap-4 border border-white/10 border-l-2 border-l-glass-rose bg-glass-ink p-8 transition-all hover:-translate-y-0.5 hover:border-glass-rose-deep"
    >
      <span
        className={cn(
          "tracking-label absolute right-6 top-6 text-[10px] uppercase",
          statusColor[event.status],
        )}
      >
        {statusLabel}
      </span>
      <p className="tracking-label text-sm uppercase text-glass-rose">
        {formatDate(event.date, locale)}
      </p>
      <h3 className="font-display text-2xl italic text-glass-white md:text-3xl">{title}</h3>
      {event.musicStyle && (
        <p className="text-sm italic text-glass-mute">{event.musicStyle}</p>
      )}
      {event.djs && event.djs.length > 0 && (
        <p className="tracking-label text-sm uppercase text-glass-white">
          {event.djs.join(" · ")}
        </p>
      )}
      {description && <p className="text-sm text-glass-mute">{description}</p>}
      <footer className="mt-auto flex items-baseline justify-between border-t border-white/10 pt-4">
        <p className="text-xs text-glass-mute">
          {event.timeStart}
          {event.timeEnd && ` – ${event.timeEnd}`}
        </p>
        {event.bookingUrl ? (
          <a
            href={event.bookingUrl}
            target={event.bookingUrl.startsWith("http") ? "_blank" : undefined}
            rel={event.bookingUrl.startsWith("http") ? "noopener noreferrer" : undefined}
            className="tracking-label inline-flex items-center gap-2 text-[11px] uppercase text-glass-rose transition-all hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-blood focus-visible:ring-offset-4 focus-visible:ring-offset-glass-ink"
          >
            {t.ctaBooking}
            {event.bookingUrl.startsWith("http") ? (
              <ArrowUpRight size={14} aria-hidden="true" />
            ) : (
              <ArrowRight size={14} aria-hidden="true" />
            )}
          </a>
        ) : (
          <a
            href={`/#contact-form?type=event-${event.id}`}
            className="tracking-label inline-flex items-center gap-2 text-[11px] uppercase text-glass-rose transition-all hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-blood focus-visible:ring-offset-4 focus-visible:ring-offset-glass-ink"
          >
            {t.ctaInfo}
            <ArrowRight size={14} aria-hidden="true" />
          </a>
        )}
      </footer>
    </motion.article>
  );
}
