"use client";

import { Menu, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { LangSwitcher } from "@/components/header/LangSwitcher";
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

function isActiveLink(href: string, pathname: string | null): boolean {
  if (!pathname) return false;
  if (href.startsWith("/#")) return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const CTA_BASE =
  "group inline-flex items-center bg-glass-rose font-medium uppercase tracking-[0.14em] text-glass-black transition-all duration-[250ms] ease-out shadow-[inset_0_-2px_0_rgba(0,0,0,0.08)] hover:bg-glass-rose-deep hover:scale-[1.02] hover:shadow-[inset_0_-2px_0_rgba(0,0,0,0.12),0_8px_24px_rgba(199,96,136,0.35)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-blood focus-visible:ring-offset-4 focus-visible:ring-offset-glass-black";

const NAV_LINK_BASE =
  "relative text-[13px] font-normal uppercase tracking-[0.12em] text-glass-white/85 transition-colors duration-200 ease-out hover:text-glass-rose focus-visible:text-glass-rose focus-visible:outline-none after:absolute after:bottom-[-4px] after:left-1/2 after:h-px after:-translate-x-1/2 after:bg-glass-rose after:content-[''] motion-safe:after:transition-[width] motion-safe:after:duration-300 motion-safe:after:ease-out";

export function StickyHeader() {
  const { dictionary, locale } = useLocale();
  const pathname = usePathname();
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
        {/* LEFT — logo + LangSwitcher */}
        <div className="flex items-center gap-x-3 md:gap-x-4">
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
          <ul className="flex items-center gap-x-9">
            {NAV_LINKS.map((link) => {
              const active = isActiveLink(link.href, pathname);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      NAV_LINK_BASE,
                      active
                        ? "text-glass-rose after:w-full"
                        : "after:w-0 motion-safe:hover:after:w-full",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {dictionary.nav[link.labelKey]}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* RIGHT — CTA WhatsApp + hamburger mobile */}
        <div className="flex items-center gap-3">
          {/* Desktop (lg+) */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter Glass Club via WhatsApp"
            className={cn(CTA_BASE, "hidden gap-2 px-6 py-3.5 text-[13px] lg:inline-flex")}
          >
            <MessageSquare
              size={18}
              strokeWidth={1.75}
              aria-hidden="true"
              className="relative top-px"
            />
            {headerStrings.ctaContact}
          </a>

          {/* Tablet (md-lg) */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter Glass Club via WhatsApp"
            className={cn(CTA_BASE, "hidden gap-2 px-5 py-3 text-xs md:inline-flex lg:hidden")}
          >
            <MessageSquare
              size={16}
              strokeWidth={1.75}
              aria-hidden="true"
              className="relative top-px"
            />
            {headerStrings.ctaContact}
          </a>

          {/* Mobile (<md) : icône seule */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter Glass Club via WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center bg-glass-rose text-glass-black shadow-[inset_0_-2px_0_rgba(0,0,0,0.08)] transition-all duration-[250ms] hover:bg-glass-rose-deep hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-blood focus-visible:ring-offset-4 focus-visible:ring-offset-glass-black md:hidden"
          >
            <MessageSquare size={18} strokeWidth={1.75} aria-hidden="true" />
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
                        className="block text-sm uppercase tracking-[0.12em] text-glass-white transition-colors hover:text-glass-rose"
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
                  className={cn(CTA_BASE, "h-11 justify-center gap-2 px-5 text-xs")}
                >
                  <MessageSquare size={14} strokeWidth={1.75} aria-hidden="true" />
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
