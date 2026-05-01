import { FloatingCTA } from "@/components/cta/FloatingCTA";
import { StickyHeader } from "@/components/header/StickyHeader";
import { Hero } from "@/components/hero/Hero";
import { OfferSplit } from "@/components/offers/OfferSplit";
import { About } from "@/components/sections/About";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { Gallery } from "@/components/sections/Gallery";
import { KeyFigures } from "@/components/sections/KeyFigures";
import { PracticalInfo } from "@/components/sections/PracticalInfo";
import { VoidAcoustics } from "@/components/sections/VoidAcoustics";
import { OFFERS } from "@/lib/offers";

export default function Page() {
  return (
    <>
      <StickyHeader />
      <main id="top">
        <Hero />
        {OFFERS.map((offer, i) => (
          <OfferSplit key={offer.id} offer={offer} photoSide={i % 2 === 0 ? "left" : "right"} />
        ))}
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
