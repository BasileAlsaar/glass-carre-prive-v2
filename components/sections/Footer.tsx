"use client";

import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";

import { useLocale } from "@/lib/locale-context";

const PHONE_TEL = "tel:+33651662145";
const EMAIL = "caroline@glasscannes.com";
const MAPS_URL =
  "https://maps.google.com/?q=6+rue+des+Fr%C3%A8res+Pradignac+06400+Cannes";
const WHATSAPP_URL =
  "https://wa.me/33651662145?text=Bonjour%20Glass%20Cannes%2C";
const INSTAGRAM_URL = "https://instagram.com/glass_club_cannes";
const FACEBOOK_URL = "https://www.facebook.com/p/Glass-Bar-61557666163833/";
const LINKEDIN_URL = "https://www.linkedin.com/in/glasscannes/";

const SOCIAL_ICON_CLASS =
  "text-glass-white transition-all hover:scale-110 hover:text-glass-rose focus-visible:scale-110 focus-visible:text-glass-rose focus-visible:outline-none";

export function Footer() {
  const { dictionary, locale } = useLocale();
  const t = dictionary.footer;
  const mailUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(
    locale === "fr" ? "Demande Glass Club" : "Glass Club enquiry",
  )}`;

  return (
    <footer
      role="contentinfo"
      id="contact"
      className="bg-glass-black px-6 pt-12 pb-8 text-center md:pt-20"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
        <h2 className="text-base uppercase tracking-[0.3em] text-glass-white">
          {t.brand}
        </h2>

        <address className="mt-8 text-sm not-italic text-glass-mute">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-glass-rose focus-visible:text-glass-rose focus-visible:outline-none"
          >
            {t.address}
          </a>
        </address>

        <p className="mt-12 max-w-2xl text-xs leading-relaxed text-glass-mute/70">
          <a
            href={PHONE_TEL}
            className="transition-colors hover:text-glass-rose focus-visible:text-glass-rose focus-visible:outline-none"
          >
            {t.phoneDisplay}
          </a>
          {" · "}
          <a
            href={mailUrl}
            className="transition-colors hover:text-glass-rose focus-visible:text-glass-rose focus-visible:outline-none"
          >
            {EMAIL}
          </a>
          {" · "}
          {t.hours}
          {" · "}
          {t.location}
        </p>

        <ul className="mt-12 flex items-center justify-center gap-x-12">
          <li>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.socialAriaInstagram}
              className={SOCIAL_ICON_CLASS}
            >
              <Instagram size={24} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.socialAriaFacebook}
              className={SOCIAL_ICON_CLASS}
            >
              <Facebook size={24} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.socialAriaLinkedin}
              className={SOCIAL_ICON_CLASS}
            >
              <Linkedin size={24} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.socialAriaWhatsapp}
              className={SOCIAL_ICON_CLASS}
            >
              <MessageCircle size={24} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </li>
        </ul>

        <p className="mt-16 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-glass-mute">
          <span>{t.copyright}</span>
          <span aria-hidden="true">·</span>
          <Link
            href={`/${locale}/legal/mentions-legales`}
            className="transition-colors hover:text-glass-rose focus-visible:text-glass-rose focus-visible:outline-none"
          >
            {t.legal}
          </Link>
          <span aria-hidden="true">·</span>
          <Link
            href={`/${locale}/legal/confidentialite`}
            className="transition-colors hover:text-glass-rose focus-visible:text-glass-rose focus-visible:outline-none"
          >
            {t.privacy}
          </Link>
          <span aria-hidden="true">·</span>
          <Link
            href={`/${locale}/legal/conditions`}
            className="transition-colors hover:text-glass-rose focus-visible:text-glass-rose focus-visible:outline-none"
          >
            {t.terms}
          </Link>
          <span aria-hidden="true">·</span>
          <Link
            href={`/${locale}/legal/cookies`}
            className="transition-colors hover:text-glass-rose focus-visible:text-glass-rose focus-visible:outline-none"
          >
            {t.cookies}
          </Link>
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-[11px] italic text-glass-mute/60 pb-2">
          {t.warning}
        </p>
      </div>
    </footer>
  );
}
