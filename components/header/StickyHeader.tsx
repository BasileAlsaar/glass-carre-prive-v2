"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { LangSwitcher } from "@/components/header/LangSwitcher";
import { WhatsAppIcon } from "@/components/icons/WhatsApp";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLocale } from "@/lib/locale-context";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "33651662145";

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

const CTA_BASE_CLASSES =
  "group inline-flex items-center bg-glass-rose font-medium uppercase tracking-[0.18em] text-glass-black transition-all duration-300 ease-out shadow-lg shadow-glass-rose/20 hover:bg-glass-rose-deep hover:shadow-glass-rose/40 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-blood focus-visible:ring-offset-4 focus-visible:ring-offset-glass-black";

export function StickyHeader() {
  const { dictionary, locale } = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const NAV_LINKS = buildNavLinks(locale);
  const headerStrings = dictionary.header;
  const waUrl = buildWhatsappUrl(headerStrings.whatsappMessage);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 motion-safe:transition-[background-color,backdrop-filter,border-color,padding] motion-safe:duration-300 motion-safe:ease-out",
        scrolled
          ? "border-b border-glass-rose/10 bg-glass-black/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 md:px-8 motion-safe:transition-[padding] motion-safe:duration-300",
          scrolled ? "py-3 md:py-4" : "py-4 md:py-5",
        )}
      >
        {/* LEFT — logo + FR/EN */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link href="/" aria-label="Glass Club — accueil" className="block shrink-0">
            <Image
              src="/logo/glass-logo-blanc.png"
              alt="Glass Club"
              width={5000}
              height={5000}
              priority
              quality={95}
              sizes="(min-width: 1024px) 80px, (min-width: 768px) 64px, 56px"
              className="h-14 w-auto object-contain md:h-16 lg:h-20"
            />
          </Link>
          <LangSwitcher className="hidden md:block" />
        </div>

        {/* CENTER — nav 6 ancres (xl+) */}
        <nav aria-label="Navigation principale" className="hidden xl:block">
          <ul className="flex items-center gap-6 text-base font-medium uppercase tracking-[0.2em]">
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

        {/* RIGHT — CTA WhatsApp + hamburger mobile */}
        <div className="flex items-center gap-3">
          {/* Desktop (lg+) : CTA texte + icône WhatsApp officielle */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter Glass Club via WhatsApp"
            className={cn(CTA_BASE_CLASSES, "hidden gap-2.5 px-7 py-4 text-sm lg:inline-flex")}
          >
            <WhatsAppIcon size={18} className="-translate-y-px" />
            {headerStrings.ctaContact}
          </a>

          {/* Tablet (md-lg) : CTA compact */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter Glass Club via WhatsApp"
            className={cn(CTA_BASE_CLASSES, "hidden gap-2 px-6 py-3 text-xs md:inline-flex lg:hidden")}
          >
            <WhatsAppIcon size={16} className="-translate-y-px" />
            {headerStrings.ctaContact}
          </a>

          {/* Mobile (<md) : icône seule */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter Glass Club via WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center bg-glass-rose text-glass-black transition-all hover:bg-glass-rose-deep hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-blood focus-visible:ring-offset-4 focus-visible:ring-offset-glass-black md:hidden"
          >
            <WhatsAppIcon size={18} />
          </a>

          {/* Hamburger menu (<xl) */}
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
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className={cn(
                    CTA_BASE_CLASSES,
                    "h-11 justify-center gap-2 border-t border-white/10 px-5 text-xs",
                  )}
                  style={{ borderTop: "none" }}
                >
                  <WhatsAppIcon size={14} />
                  {headerStrings.ctaContact}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
