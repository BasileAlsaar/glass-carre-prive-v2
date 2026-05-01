import { StickyHeader } from "@/components/header/StickyHeader";
import { Hero } from "@/components/hero/Hero";
import { OffersGrid } from "@/components/offers/OffersGrid";

export default function Page() {
  return (
    <>
      <StickyHeader />
      <main id="top">
        <Hero />
        <OffersGrid />
      </main>
    </>
  );
}
