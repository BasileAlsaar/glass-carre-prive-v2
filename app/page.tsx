import { StickyHeader } from "@/components/header/StickyHeader";

export default function Page() {
  return (
    <>
      <StickyHeader />
      <main id="top">
        <section className="flex min-h-screen items-center justify-center bg-background px-6 pt-24 text-foreground">
          <div className="text-center">
            <p className="tracking-label text-xs uppercase text-glass-mute">Glass Club · V2</p>
            <h1 className="font-display tracking-display mt-4 text-4xl">Header en place.</h1>
            <p className="mt-2 text-sm text-glass-mute">
              Hero à construire à l'étape suivante.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
