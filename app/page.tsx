import { StickyHeader } from "@/components/header/StickyHeader";
import { Hero } from "@/components/hero/Hero";

export default function Page() {
  return (
    <>
      <StickyHeader />
      <main id="top">
        <Hero />
        <section className="flex min-h-[60vh] items-center justify-center bg-background px-6 py-24 text-foreground">
          <div className="text-center">
            <p className="tracking-label text-xs uppercase text-glass-mute">Glass Club · V2</p>
            <h2 className="font-display tracking-display mt-4 text-3xl">Hero en place.</h2>
            <p className="mt-2 text-sm text-glass-mute">
              OffersGrid (§6 §2) à construire à l'étape suivante.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
