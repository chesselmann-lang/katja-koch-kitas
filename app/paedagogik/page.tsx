import Link from "next/link";
import { paedagogikTopics } from "@/lib/paedagogik-data";
import { colors } from "@/lib/theme";
import Visual from "@/components/Visual";
import ShapeDivider from "@/components/ShapeDivider";
import Reveal from "@/components/Reveal";
import Container from "@/components/salient/Container";
import PageHero from "@/components/salient/PageHero";

export const metadata = {
  title: "Pädagogik | Kitas von Katja Koch",
  description:
    "Eingewöhnung, Natur, Räume, Kinderschutz, Partizipation und mehr – die pädagogischen Grundlagen, nach denen alle vier Kitas arbeiten.",
  alternates: { canonical: "/paedagogik" },
};

export default function PaedagogikPage() {
  const featured = paedagogikTopics[0];

  return (
    <main>
      <PageHero
        crumb="Pädagogik"
        eyebrow="Pädagogik"
        title="Eine gemeinsame Haltung, vier eigene Wege."
        description="Alle vier Kitas arbeiten nach den Bildungsgrundsätzen NRW und einer gemeinsamen pädagogischen Grundhaltung. Die folgenden Themenseiten erklären, wie zentrale Fragen grundsätzlich angegangen werden — hausspezifische Details stehen jeweils auf den Kita-Seiten."
        visual={<Visual theme={featured.theme} aspect="4 / 3.2" radius={24} />}
      />

      <ShapeDivider from={colors.background} to={colors.backgroundAlt} />
      <section className="section-y bg-backgroundAlt">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paedagogikTopics.map((t, i) => (
              <Reveal key={t.slug} delay={i * 60}>
                <Link href={`/paedagogik/${t.slug}`} className="block overflow-hidden rounded-card bg-card shadow-sm no-underline">
                  <Visual theme={t.theme} aspect="16 / 10" radius={0} />
                  <div className="p-[22px]">
                    <h2 className="mb-2 text-lg font-bold [hyphens:auto] [overflow-wrap:break-word]" lang="de">
                      {t.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-inkSoft">{t.teaser}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
