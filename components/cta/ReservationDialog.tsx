"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLocale } from "@/lib/locale-context";

/**
 * Stub fonctionnel — §10 du BRIEF prévoit un formulaire complet
 * (nb pax, date, créneau, coordonnées). Construit à l'étape ContactForm
 * (commit 11 du PLAN) car il partage la mécanique form + mailto/Resend.
 *
 * En attendant : raccourcis tel / WhatsApp / mail directs.
 */
export function ReservationDialog({ trigger }: { trigger: React.ReactNode }) {
  const { dictionary, locale } = useLocale();

  // TODO(§15.5): externaliser dans lib/i18n.ts à l'étape i18n.
  const description =
    locale === "fr"
      ? "Formulaire complet à venir. En attendant, contactez-nous directement — réponse sous 24h."
      : "Full form coming soon. Reach out directly in the meantime — reply within 24h.";

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="border-white/10 bg-glass-ink sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display tracking-display text-2xl">
            {dictionary.cta.bookTable}
          </DialogTitle>
          <DialogDescription className="text-glass-mute">{description}</DialogDescription>
        </DialogHeader>
        <ul className="flex flex-col gap-3 pt-2 text-sm">
          <li>
            <a
              href="tel:+33651662145"
              className="flex items-center gap-3 text-glass-white transition-colors hover:text-glass-flame"
            >
              <Phone size={16} aria-hidden="true" /> +33 6 51 66 21 45
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/33651662145"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-glass-white transition-colors hover:text-glass-flame"
            >
              <MessageCircle size={16} aria-hidden="true" /> WhatsApp
            </a>
          </li>
          <li>
            <a
              href="mailto:caroline@glasscannes.com"
              className="flex items-center gap-3 text-glass-white transition-colors hover:text-glass-flame"
            >
              <Mail size={16} aria-hidden="true" /> caroline@glasscannes.com
            </a>
          </li>
        </ul>
      </DialogContent>
    </Dialog>
  );
}
