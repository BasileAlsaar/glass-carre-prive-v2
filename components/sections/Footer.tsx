"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useLocale } from "@/lib/locale-context";

const PHONE = "+33 6 51 66 21 45";
const PHONE_TEL = "tel:+33651662145";
const EMAIL = "caroline@glasscannes.com";
const ADDRESS = "6 rue des Frères Pradignac, 06400 Cannes";
const WHATSAPP_URL = "https://wa.me/33651662145";
const INSTAGRAM_URL = "https://instagram.com/glass_club_cannes";
const LINKEDIN_URL = "https://www.linkedin.com/in/glasscannes";
const FACEBOOK_URL = "https://www.facebook.com/Glass-Bar";

const PHOTO_CREDITS = [
  "Gustavo Trotta",
  "konrads-photo",
  "Eva Bronzini",
  "Jos Penaran",
  "Vaibky",
  "Anna McDonald",
  "Vovkapanda",
  "Rafael Guajardo",
  "beratilgin",
  "jibanesports",
  "Carlo Giovanni Ghiardelli",
  "Branimir Klaric",
  "Spolyakov",
];

export function Footer() {
  const { dictionary } = useLocale();
  const t = dictionary.footer;

  return (
    <footer
      id="contact"
      className="relative border-t border-white/10 bg-glass-black"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Logo + accroche */}
          <div className="md:col-span-4">
            <Link href="#top" aria-label="Glass Club — accueil" className="inline-block">
              <Image
                src="/logo/glass-logo-blanc.png"
                alt="Glass Club"
                width={5000}
                height={5000}
                sizes="80px"
                className="h-20 w-20"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-glass-mute">{t.tagline}</p>
          </div>

          {/* Contact §4.5 */}
          <div className="md:col-span-4">
            <p className="tracking-label text-[11px] uppercase text-glass-rose">
              {t.contactLabel}
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center gap-3 text-glass-white transition-colors hover:text-glass-rose"
                >
                  <Phone size={14} aria-hidden="true" /> {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-3 text-glass-white transition-colors hover:text-glass-rose"
                >
                  <Mail size={14} aria-hidden="true" /> {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3 text-glass-white/80">
                <MapPin size={14} aria-hidden="true" className="mt-1 shrink-0" />
                <span>{ADDRESS}</span>
              </li>
            </ul>
          </div>

          {/* Réseaux + horaires */}
          <div className="md:col-span-4">
            <p className="tracking-label text-[11px] uppercase text-glass-rose">
              {t.socialLabel}
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-glass-white transition-colors hover:text-glass-rose"
                >
                  <MessageCircle size={14} aria-hidden="true" /> {t.links.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-glass-white transition-colors hover:text-glass-rose"
                >
                  <Instagram size={14} aria-hidden="true" /> {t.links.instagram}
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-glass-white transition-colors hover:text-glass-rose"
                >
                  <Linkedin size={14} aria-hidden="true" /> {t.links.linkedin}
                </a>
              </li>
              <li>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-glass-white transition-colors hover:text-glass-rose"
                >
                  <Facebook size={14} aria-hidden="true" /> {t.links.facebook}
                </a>
              </li>
            </ul>
            <p className="tracking-label mt-8 text-[11px] uppercase text-glass-rose">
              {t.hoursLabel}
            </p>
            <p className="mt-3 text-sm text-glass-white">{t.hoursShort}</p>
          </div>
        </div>

        {/* Bottom strip — légal + crédits */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 text-[11px] text-glass-mute md:flex-row md:items-center md:justify-between">
            <p>{t.copyright}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a
                href="#"
                className="tracking-label uppercase transition-colors hover:text-glass-rose"
              >
                {t.legalLabel}
              </a>
              <details className="group">
                <summary className="tracking-label cursor-pointer list-none uppercase transition-colors hover:text-glass-rose">
                  {t.creditsLabel}
                </summary>
                <p className="mt-3 max-w-md text-[10px] leading-relaxed text-glass-mute/70">
                  {PHOTO_CREDITS.join(" · ")} — Pexels.com
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
