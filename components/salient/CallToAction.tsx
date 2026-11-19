import type { ReactNode } from "react";

// Salient "CallToAction": dunkle, markenfarbige Vollbreiten-Sektion kurz vor
// dem Footer, zentrierter Titel + ein bis zwei Buttons. Ersetzt die bisher
// pro Seite einzeln gebauten dunklen CTA-Blöcke.
export default function CallToAction({
  title,
  description,
  actions,
}: {
  title: ReactNode;
  description?: ReactNode;
  actions: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-waldgruen">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white opacity-10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full bg-white opacity-5 blur-3xl"
      />
      <div className="container-salient relative py-16 text-center sm:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
        {description ? <p className="mx-auto mt-4 max-w-xl text-white/80">{description}</p> : null}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">{actions}</div>
      </div>
    </section>
  );
}
