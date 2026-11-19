import type { ReactNode } from "react";

// Salient-Hero: großer Titel links, Visual rechts, weicher Blob-Gradient im
// Hintergrund, zweispaltig ab lg (1024px), darunter einspaltig mit Visual
// zuerst untergeordnet. Ersetzt die bisherigen, pro Seite einzeln gebauten
// `.kita-hero`-Grids.
export default function Hero({
  eyebrow,
  title,
  description,
  actions,
  visual,
  accentClassName = "text-waldgruen",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  visual?: ReactNode;
  accentClassName?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className={`pointer-events-none absolute -top-32 right-0 h-[480px] w-[480px] rounded-full opacity-25 blur-3xl ${accentClassName}`}
        style={{ background: "currentColor" }}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute -bottom-20 -left-20 h-[320px] w-[320px] rounded-full opacity-10 blur-3xl ${accentClassName}`}
        style={{ background: "currentColor" }}
      />
      <div className="hero-fade-in container-salient relative grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          {eyebrow ? <p className={`eyebrow mb-4 ${accentClassName}`}>{eyebrow}</p> : null}
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-inkSoft">{description}</p>
          ) : null}
          {actions ? <div className="mt-8 flex flex-wrap items-center gap-4">{actions}</div> : null}
        </div>
        {visual ? <div className="relative">{visual}</div> : null}
      </div>
      <style>{`
        .hero-fade-in { animation: heroFadeIn 650ms ease-out both; }
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-fade-in { animation: none; }
        }
      `}</style>
    </section>
  );
}
