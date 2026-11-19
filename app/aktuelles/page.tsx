import { colors } from "@/lib/theme";
import Visual from "@/components/Visual";
import Reveal from "@/components/Reveal";
import ShapeDivider from "@/components/ShapeDivider";
import Container from "@/components/salient/Container";
import PageHero from "@/components/salient/PageHero";

export const metadata = { title: "Aktuelles | Kitas von Katja Koch", alternates: { canonical: "/aktuelles" } };

export default function AktuellesPage() {
  return (
    <main>
      <PageHero
        crumb="Aktuelles"
        eyebrow="Aktuelles"
        title="Neuigkeiten aus unseren Kitas."
        description="Neuigkeiten, Termine und Ankündigungen aus allen vier Häusern."
        visual={<Visual theme="alltag" aspect="4 / 3.2" radius={24} />}
      />

      <ShapeDivider from={colors.background} to={colors.backgroundAlt} />
      <section className="section-y-sm bg-backgroundAlt">
        <Container narrow>
          <Reveal>
            <div className="rounded-2xl border border-dashed border-inkMuted bg-card p-8 text-center text-inkMuted">
              Es liegen aktuell keine veröffentlichten Beiträge vor.
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
