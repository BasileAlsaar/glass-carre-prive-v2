"use client";

import { Mail, Menu, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { LangSwitcher } from "@/components/header/LangSwitcher";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLocale } from "@/lib/locale-context";

const WHATSAPP_NUMBER = "33651662145";
const EMAIL_ADDRESS = "caroline@glasscannes.com";

type NavLabelKey = "privatization" | "menu" | "events" | "membership" | "blog" | "about";
type NavLink = { href: string; labelKey: NavLabelKey };

function buildNavLinks(locale: "fr" | "en"): readonly NavLink[] {
  return [
    { href: "/#formule-privatisation-seche", labelKey: "privatization" },
    { href: `/${locale}/carte`, labelKey: "menu" },
    { href: `/${locale}/events`, labelKey: "events" },
    { href: `/${locale}/membership`, labelKey: "membership" },
    { href: `/${locale}/blog`, labelKey: "blog" },
    { href: "/#lieu", labelKey: "about" },
  ];
}

function buildWhatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function buildMailtoUrl(subject: string): string {
  return `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}`;
}

export function StickyHeader() {
  const { dictionary, locale } = useLocale();
  const [open, setOpen] = useState(false);
  const NAV_LINKS = buildNavLinks(locale);
  const headerStrings = dictionary.header;
  const waUrl = buildWhatsappUrl(headerStrings.whatsappMessage);
  const mailUrl = buildMailtoUrl(headerStrings.emailSubject);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-glass-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-4 md:h-20 md:px-8 lg:h-28">
        {/* LEFT — logo + FR/EN cluster */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link href="/" aria-label="Glass Club — accueil" className="block shrink-0">
            <Image
              src="/logo/glass-logo-blanc.png"
              alt="Glass Club"
              width={5000}
              height={5000}
              priority
              quality={95}
              sizes="(min-width: 1024px) 80px, (min-width: 768px) 56px, 44px"
              className="h-11 w-auto object-contain md:h-14 lg:h-20"
            />
          </Link>
          <LangSwitcher className="hidden md:block" />
        </div>

        {/* CENTER — nav 6 ancres (xl+) */}
        <nav aria-label="Navigation principale" className="hidden xl:block">
          <ul className="tracking-label flex items-center gap-6 text-[11px] uppercase">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-glass-white/80 transition-colors hover:text-glass-rose focus-visible:text-glass-rose focus-visible:outline-none"
                >
                  {dictionary.nav[link.labelKey]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT — contact cluster (desktop) + WhatsApp icon-only (tablet) + hamburger (mobile) */}
        <div className="flex items-center gap-3">
          {/* Desktop : cluster vertical CTA + email */}
          <div className="hidden flex-col items-end gap-1.5 lg:flex">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter Glass Club via WhatsApp"
              className="tracking-[0.15em] group inline-flex items-center gap-2 bg-glass-rose px-6 py-3 text-sm font-semibold uppercase text-glass-black transition-all hover:scale-[1.02] hover:bg-glass-rose-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-blood focus-visible:ring-offset-4 focus-visible:ring-offset-glass-black"
            >
              <MessageCircle size={16} aria-hidden="true" />
              {headerStrings.ctaContact}
            </a>
            <a
              href={mailUrl}
              className="text-xs tracking-wide text-glass-mute transition-colors hover:text-glass-rose focus-visible:text-glass-rose focus-visible:outline-none"
            >
              {EMAIL_ADDRESS}
            </a>
          </div>

          {/* Tablet (md to lg) : CTA compact + email mini */}
          <div className="hidden flex-col items-end gap-1 md:flex lg:hidden">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter Glass Club via WhatsApp"
              className="tracking-[0.15em] inline-flex items-center gap-1.5 bg-glass-rose px-4 py-2 text-xs font-semibold uppercase text-glass-black transition-all hover:bg-glass-rose-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-blood focus-visible:ring-offset-4 focus-visible:ring-offset-glass-black"
            >
              <MessageCircle size={14} aria-hidden="true" />
              {headerStrings.ctaContact}
            </a>
            <a
              href={mailUrl}
              className="text-[10px] tracking-wide text-glass-mute transition-colors hover:text-glass-rose"
            >
              {EMAIL_ADDRESS}
            </a>
          </div>

          {/* Mobile : icône WhatsApp seule */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter Glass Club via WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center bg-glass-rose text-glass-black transition-colors hover:bg-glass-rose-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-blood focus-visible:ring-offset-4 focus-visible:ring-offset-glass-black md:hidden"
          >
            <MessageCircle size={18} aria-hidden="true" />
          </a>

          {/* Hamburger mobile (< xl) */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Ouvrir le menu"
                className="inline-flex h-10 w-10 items-center justify-center text-glass-white transition-colors hover:text-glass-rose focus-visible:text-glass-rose focus-visible:outline-none xl:hidden"
              >
                <Menu size={22} aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-sm border-l border-white/10 bg-glass-black p-0 text-glass-white"
            >
              <SheetHeader className="border-b border-white/10 px-6 py-5">
                <SheetTitle className="font-display tracking-display text-xl text-glass-white">
                  Glass Club
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 px-6 py-8">
                <ul className="flex flex-col gap-4">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="tracking-label block text-sm uppercase text-glass-white transition-colors hover:text-glass-rose"
                      >
                        {dictionary.nav[link.labelKey]}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/10 pt-6">
                  <LangSwitcher />
                </div>
                <div className="flex flex-col gap-3 border-t border-white/10 pt-6">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="tracking-[0.15em] inline-flex h-11 items-center justify-center gap-2 bg-glass-rose px-5 text-xs font-semibold uppercase text-glass-black transition-colors hover:bg-glass-rose-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-blood focus-visible:ring-offset-4 focus-visible:ring-offset-glass-black"
                  >
                    <MessageCircle size={14} aria-hidden="true" />
                    {headerStrings.ctaContact}
                  </a>
                  <a
                    href={mailUrl}
                    onClick={() => setOpen(false)}
                    className="tracking-label inline-flex h-11 items-center justify-center gap-2 border border-glass-rose px-5 text-[11px] font-medium uppercase text-glass-rose transition-colors hover:bg-glass-rose hover:text-glass-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-blood focus-visible:ring-offset-4 focus-visible:ring-offset-glass-black"
                  >
                    <Mail size={14} aria-hidden="true" />
                    {headerStrings.emailCaroline}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
