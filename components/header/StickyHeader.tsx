"use client";

import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { LangSwitcher } from "@/components/header/LangSwitcher";
import { ReservationDialog } from "@/components/cta/ReservationDialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLocale } from "@/lib/locale-context";
import { cn } from "@/lib/utils";

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

const PRIMARY_CTA_BASE =
  "tracking-label inline-flex items-center gap-2 bg-glass-rose px-5 text-[11px] font-medium uppercase text-glass-black transition-all hover:gap-3 hover:bg-glass-burgundy hover:text-glass-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-blood focus-visible:ring-offset-2 focus-visible:ring-offset-glass-black";

const OUTLINE_CTA_BASE =
  "tracking-label inline-flex items-center justify-center border border-glass-rose px-5 text-[11px] font-medium uppercase text-glass-rose transition-colors hover:bg-glass-rose hover:text-glass-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-blood focus-visible:ring-offset-2 focus-visible:ring-offset-glass-black";

export function StickyHeader() {
  const { dictionary, locale } = useLocale();
  const [open, setOpen] = useState(false);
  const NAV_LINKS = buildNavLinks(locale);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-glass-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-5 md:h-20 md:px-8">
        {/* LEFT — logo + FR/EN cluster */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link href="#top" aria-label="Glass Club — accueil" className="block shrink-0">
            <Image
              src="/logo/glass-logo-blanc.png"
              alt="Glass Club"
              width={5000}
              height={5000}
              priority
              sizes="40px"
              className="h-9 w-9 md:h-10 md:w-10"
            />
          </Link>
          <LangSwitcher className="hidden md:block" />
        </div>

        {/* CENTER — nav 6 ancres (desktop xl+) */}
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

        {/* RIGHT — double CTA (desktop) + hamburger (mobile) */}
        <div className="flex items-center gap-3">
          <a href="#contact-form" className={cn(PRIMARY_CTA_BASE, "hidden h-10 md:inline-flex")}>
            {dictionary.cta.privatize}
            <ArrowRight size={14} aria-hidden="true" />
          </a>
          <ReservationDialog
            trigger={
              <button type="button" className={cn(OUTLINE_CTA_BASE, "hidden h-10 md:inline-flex")}>
                {dictionary.cta.book}
              </button>
            }
          />

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
                    href="#contact-form"
                    onClick={() => setOpen(false)}
                    className={cn(PRIMARY_CTA_BASE, "h-11 justify-center")}
                  >
                    {dictionary.cta.privatize}
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                  <ReservationDialog
                    trigger={
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className={cn(OUTLINE_CTA_BASE, "h-11")}
                      >
                        {dictionary.cta.book}
                      </button>
                    }
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
