// JSON-LD LocalBusiness §9 PLAN — adresse + horaires + contact §4.4 / §4.5
// Pas de "use client" : injecté en SSR via <script type="application/ld+json">.

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://glass-carre-prive.vercel.app";

const LD = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  "@id": `${SITE_URL}#glass-club`,
  name: "Glass Club",
  description:
    "Bar-club privatisable au cœur du Carré d'Or, à 3 minutes du Palais des Festivals à Cannes.",
  url: SITE_URL,
  image: `${SITE_URL}/images/hero.jpg`,
  telephone: "+33651662145",
  email: "caroline@glasscannes.com",
  priceRange: "€€€",
  servesCuisine: ["Cocktails"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "6 rue des Frères Pradignac",
    postalCode: "06400",
    addressLocality: "Cannes",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.5513,
    longitude: 7.0173,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday", "Friday", "Saturday"],
      opens: "00:00",
      closes: "07:00",
    },
  ],
  sameAs: [
    "https://instagram.com/glass_club_cannes",
    "https://wa.me/33651662145",
    "https://www.facebook.com/Glass-Bar",
  ],
} as const;

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }}
    />
  );
}
