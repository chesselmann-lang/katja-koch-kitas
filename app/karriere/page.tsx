import { allKitas } from "@/lib/kitas-data";
import { colors } from "@/lib/theme";
import Visual from "@/components/Visual";
import Reveal from "@/components/Reveal";
import ShapeDivider from "@/components/ShapeDivider";
import Container from "@/components/salient/Container";
import PageHero from "@/components/salient/PageHero";

export const metadata = { title: "Karriere | Kitas von Katja Koch", alternates: { canonical: "/karriere" } };

export default function KarrierePage() {
  return (
    <main>
      <PageHero
        crumb="Karriere"
        eyebrow="Karriere"
        title="Arbeiten in unseren Kitas."
        description="Wir suchen engagierte pädagogische Fachkräfte für unsere vier Häuser."
        visual={<Visual theme="wald" aspect="4 / 3.2" radius={24} />}
      />

      <ShapeDivider from={colors.background} to={colors.backgroundAlt} />
      <section className="section-y-sm bg-backgroundAlt">
        <Container>
          <Reveal>
            <div className="card-salient mb-6 max-w-[700px] p-6">
              <h2 className="mb-2 text-[17px] font-bold">Offene Stellen</h2>
              <p className="text-sm leading-relaxed text-inkSoft">Aktuell sind keine Stellen ausgeschrieben.</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mb-4 text-lg font-bold">Initiativbewerbung</h2>
            <p className="mb-5 max-w-[700px] text-[15px] leading-relaxed text-inkSoft">
              Auch ohne aktuelle Ausschreibung freuen wir uns über Initiativbewerbungen — direkt an die jeweilige
              Kita:
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {allKitas.map((k, i) => (
              <Reveal key={k.slug} delay={i * 70}>
                <div className="card-salient p-5" style={{ borderTop: `4px solid ${k.accentColor}` }}>
                  <div className="mb-1.5 text-[15px] font-bold">{k.shortName}</div>
                  <a href={`mailto:${k.email}`} className="text-sm text-inkSoft">
                    {k.email}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
