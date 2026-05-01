"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { useLocale } from "@/lib/locale-context";
import { cn } from "@/lib/utils";

const WHATSAPP_URL =
  "https://wa.me/33651662145?text=Bonjour%2C%20je%20souhaite%20privatiser%20le%20Glass%20Club";

export function FloatingCTA() {
  const { dictionary } = useLocale();
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [footerInView, setFooterInView] = useState(false);

  // Show after scroll > 100vh (§6 + §10).
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide in footer (R12 PLAN — éviter chevauchement coordonnées footer).
  useEffect(() => {
    const footer = document.getElementById("contact");
    if (!footer) return;
    const obs = new IntersectionObserver(
      ([entry]) => setFooterInView(entry?.isIntersecting ?? false),
      { rootMargin: "-100px 0px 0px 0px" },
    );
    obs.observe(footer);
    return () => obs.disconnect();
  }, []);

  const show = visible && !footerInView;

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${dictionary.cta.privatize} via WhatsApp`}
          initial={{ scale: 0, opacity: 0 }}
          animate={
            reducedMotion
              ? { scale: 1, opacity: 1 }
              : { scale: [1, 1.04, 1], opacity: 1 }
          }
          exit={{ scale: 0, opacity: 0 }}
          transition={
            reducedMotion
              ? { duration: 0.2 }
              : {
                  scale: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                  opacity: { duration: 0.4 },
                }
          }
          style={{ originX: 0.5, originY: 0.5 }}
          className={cn(
            "fixed z-40 inline-flex items-center justify-center bg-glass-rose text-glass-black transition-colors",
            "tracking-label gap-2 text-xs font-medium uppercase",
            "hover:bg-glass-burgundy hover:text-glass-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-white focus-visible:ring-offset-4 focus-visible:ring-offset-glass-black",
            // Mobile : pill plein-largeur 56px
            "inset-x-4 bottom-4 h-14 px-5",
            // Desktop : pastille ronde 64x64 bottom-right
            "md:inset-x-auto md:bottom-8 md:right-8 md:h-16 md:w-16 md:rounded-full md:p-0",
          )}
        >
          <MessageCircle size={20} aria-hidden="true" />
          <span className="md:hidden">{dictionary.cta.privatize}</span>
          <ArrowRight size={16} aria-hidden="true" className="md:hidden" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
