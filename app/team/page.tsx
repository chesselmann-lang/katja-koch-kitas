import { allKitas } from "@/lib/kitas-data";
import { colors } from "@/lib/theme";
import Visual from "@/components/Visual";
import Reveal from "@/components/Reveal";
import ShapeDivider from "@/components/ShapeDivider";
import Container from "@/components/salient/Container";
import PageHero from "@/components/salient/PageHero";

export const metadata = { title: "Team | Kitas von Katja Koch", alternates: { canonical: "/team" } };

// Initialen-Avatar statt Foto — es liegen noch keine freigegebenen Fotos der
// Leitungen vor (siehe Hinweistext unten), daher bewusst keine Bild-Platzhalter
// mit Gesichtsandeutung, sondern ein neutrales, farbiges Kürzel-Icon.
function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter((w) => /^[A-ZÄÖÜ]/.test(w))
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
}

export default function TeamPage() {
  return (
    <main>
      <PageHero
        crumb="Team"
        eyebrow="Team"
        title="Die Menschen hinter unseren Kitas."
        description="Wir veröffentlichen Namen, Rollen und Qualifikationen unseres Teams erst, wenn alle Kolleg:innen ihr ausdrückliches Einverständnis gegeben haben. Bis dahin finden Sie hier einen allgemeinen Überblick."
        visual={<Visual theme="team" aspect="4 / 3.2" radius={24} />}
      />

      <ShapeDivider from={colors.background} to={colors.backgroundAlt} />
      <section className="section-y-sm bg-backgroundAlt">
        <Container>
          <Reveal>
            <h2 className="mb-5 text-xl font-bold">Die Leitungen unserer vier Häuser</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {allKitas.map((k, i) => (
              <Reveal key={k.slug} delay={i * 80}>
                <div className="card-salient p-6" style={{ borderTop: `4px solid ${k.accentColor}` }}>
                  <div className="mb-3.5 flex items-center gap-3.5">
                    <div
                      aria-hidden="true"
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-base font-extrabold"
                      style={{ background: `${k.accentColor}1f`, color: k.accentColor }}
                    >
                      {initials(k.leitung)}
                    </div>
                    <div className="text-xs font-bold uppercase" style={{ color: k.accentColor }}>
                      {k.shortName}
                    </div>
                  </div>
                  <div className="mb-1 text-base font-bold">{k.leitung}</div>
                  <div className="text-[13.5px] text-inkMuted">{k.leitungLabel}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-7 max-w-[700px] leading-relaxed text-inkSoft">
            In unseren Kitas arbeiten ausgebildete Erzieher:innen und pädagogische Fachkräfte gemäß den
            Personalstandards des Landes NRW. Namen und Fotos des weiteren Teams veröffentlichen wir nur mit
            ausdrücklichem Einverständnis der jeweiligen Kolleg:innen.
          </p>
        </Container>
      </section>
    </main>
  );
}
