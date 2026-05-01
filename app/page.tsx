import { StickyHeader } from "@/components/header/StickyHeader";
import { Hero } from "@/components/hero/Hero";
import { OffersGrid } from "@/components/offers/OffersGrid";
import { FloatingCTA } from "@/components/cta/FloatingCTA";
import { About } from "@/components/sections/About";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { Gallery } from "@/components/sections/Gallery";
import { PracticalInfo } from "@/components/sections/PracticalInfo";
import { KeyFigures } from "@/components/sections/KeyFigures";
import { VoidAcoustics } from "@/components/sections/VoidAcoustics";

export default function Page() {
  return (
    <>
      <StickyHeader />
      <main id="top">
        <Hero />
        <OffersGrid />
        <About />
        <KeyFigures />
        <VoidAcoustics />
        <Gallery />
        <PracticalInfo />
        <ContactForm />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
