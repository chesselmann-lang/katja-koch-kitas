import { colors } from "@/lib/theme";
import { kitaWissenCategories } from "@/lib/kita-wissen-data";
import { kitaWissenArticles } from "@/lib/kita-wissen-articles";
import Visual from "@/components/Visual";
import Reveal from "@/components/Reveal";
import ShapeDivider from "@/components/ShapeDivider";
import Container from "@/components/salient/Container";
import PageHero from "@/components/salient/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Kita-Wissen | Kitas von Katja Koch",
  description:
    "Pädagogische Themen, Orientierung für den Familienalltag und Hintergrundwissen zu Natur, Bewegung, Eingewöhnung und mehr.",
  alternates: { canonical: "/kita-wissen" },
};

export default function KitaWissenPage() {
  return (
    <main>
      <PageHero
        crumb="Kita-Wissen"
        eyebrow="Kita-Wissen"
        title="Kita beginnt nicht an der Eingangstür."
        description="Kita beginnt nicht an der Eingangstür und endet nicht beim Abholen. Hier erklären wir pädagogische Themen, geben Orientierung für den Familienalltag und zeigen, warum Spielen, Natur, Bewegung und Beziehungen für die Entwicklung von Kindern wichtig sind."
        visual={<Visual theme="natur" aspect="4 / 3.2" radius={24} />}
      />

      <ShapeDivider from={colors.background} to={colors.backgroundAlt} />
      <section className="section-y-sm bg-backgroundAlt">
        <Container>
          <div className="mb-10 flex flex-wrap gap-2.5">
            {kitaWissenCategories.map((c, i) => (
              <Reveal key={c} delay={i * 50} as="span">
                <span className="rounded-full bg-card px-4 py-2 text-[13px] font-semibold text-inkSoft shadow-sm">
                  {c}
                </span>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {kitaWissenArticles.map((a, i) => (
              <Reveal key={a.slug} delay={i * 40}>
                <Link
                  href={`/kita-wissen/${a.slug}`}
                  className="flex h-full flex-col gap-3 rounded-xl bg-card px-5 py-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="text-xs font-bold uppercase text-waldgruen">{a.category}</div>
                  <div className="text-[16px] font-bold leading-snug text-ink">{a.title}</div>
                  <p className="text-sm leading-relaxed text-inkMuted">{a.teaser}</p>
                  <span className="mt-auto text-sm font-semibold text-waldgruen">Weiterlesen &rarr;</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
