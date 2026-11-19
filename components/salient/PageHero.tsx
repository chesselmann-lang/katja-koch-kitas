import Link from "next/link";
import type { ReactNode } from "react";
import Container from "./Container";

// Wiederkehrendes Muster der sekundären Seiten (Aktuelles, Karriere, FAQ,
// Kontakt, Team, Über uns, …): Breadcrumb, Eyebrow, Titel, Text, optional
// Visual rechts. Ersetzt die bisher auf jeder Seite einzeln kopierte
// `.kita-hero`-Grid-Konstruktion durch eine einzige, konsistent responsive
// Komponente (einspaltig < lg, zweispaltig ab lg).
export default function PageHero({
  crumb,
  eyebrow,
  title,
  description,
  visual,
}: {
  crumb: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  visual?: ReactNode;
}) {
  return (
    <>
      <section className="pt-12">
        <Container>
          <div className="mb-5 text-[13px] text-inkMuted">
            <Link href="/" className="text-inkMuted no-underline transition-colors duration-150 hover:text-ink hover:underline">
              Startseite
            </Link>{" "}
            / {crumb}
          </div>
        </Container>
      </section>
      <section className="pb-12">
        <Container>
          <div
            className={`pagehero-fade-in grid grid-cols-1 items-center gap-10 ${visual ? "lg:grid-cols-2 lg:gap-12" : ""}`}
          >
            <div>
              {eyebrow ? <p className="eyebrow mb-2.5">{eyebrow}</p> : null}
              <h1 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h1>
              {description ? <p className="text-lg leading-relaxed text-inkSoft">{description}</p> : null}
            </div>
            {visual ? <div>{visual}</div> : null}
          </div>
        </Container>
      </section>
      <style>{`
        .pagehero-fade-in { animation: pageHeroFadeIn 550ms ease-out both; }
        @keyframes pageHeroFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .pagehero-fade-in { animation: none; }
        }
      `}</style>
    </>
  );
}
