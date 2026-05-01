import { StickyHeader } from "@/components/header/StickyHeader";
import { Hero } from "@/components/hero/Hero";
import { OffersGrid } from "@/components/offers/OffersGrid";
import { About } from "@/components/sections/About";
import { VoidAcoustics } from "@/components/sections/VoidAcoustics";

export default function Page() {
  return (
    <>
      <StickyHeader />
      <main id="top">
        <Hero />
        <OffersGrid />
        <About />
        <VoidAcoustics />
      </main>
    </>
  );
}
