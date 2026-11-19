import { getSeite } from "@/lib/sanity";
import { notFound } from "next/navigation";
import { colors } from "@/lib/theme";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Container from "@/components/salient/Container";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const seite = await getSeite("kita-schatzkiste", params.slug);
  if (!seite) return {};
  return {
    title: `${seite.titel} | Schatzkiste | Kitas von Katja Koch`,
    description: seite.intro || `${seite.titel} – Kita Schatzkiste in Marl.`,
    alternates: { canonical: `/schatzkiste/${params.slug}` },
  };
}

// Ergänzender, bewusst allgemein gehaltener Rahmentext pro Thema — beschreibt,
// wie das Thema in Kitas grundsätzlich gehandhabt wird, ohne Schatzkiste-
// spezifische Fakten zu erfinden, die (noch) nicht bestätigt sind.
const FRAMEWORK: Record<string, { points: string[] }> = {
  konzept: {
    points: [
      "Ein pädagogisches Konzept beschreibt, wie eine Kita ihren Alltag gestaltet: Werte, Methoden, Tagesstruktur und Schwerpunkte.",
      "In der Schatzkiste prägen feste Rituale, verlässliche Bezugspersonen und regelmäßige Zeiten in der Natur den Alltag.",
    ],
  },
  "wald-hof": {
    points: [
      "Naturpädagogik bedeutet, dass Kinder regelmäßig draußen sind – nicht nur bei Ausflügen, sondern als fester Bestandteil der Woche.",
      "Dabei lernen Kinder Jahreszeiten, Wetter, Pflanzen und Tiere direkt und mit allen Sinnen kennen.",
      "Zum Bauernhof der Schatzkiste gehören laut Konzept Pferde, Schweine, Ziegen und Hühner. Der Umgang mit ihnen ist immer pädagogisch begleitet – Kinder füttern, beobachten und übernehmen altersgerecht Verantwortung, nie unbeaufsichtigt.",
    ],
  },
  eingewoehnung: {
    points: [
      "Die Eingewöhnung orientiert sich in vielen Kitas am Berliner Eingewöhnungsmodell: erst gemeinsam mit einer Bezugsperson, dann schrittweise längere Zeiten ohne sie.",
      "Tempo und Dauer richten sich nach dem einzelnen Kind – es gibt keine feste Frist, die für jedes Kind gleich passt.",
    ],
  },
  verpflegung: {
    points: [
      "Zur Verpflegung gehören in der Regel Frühstück, Mittagessen und ein Nachmittagssnack, abgestimmt auf Allergien und Unverträglichkeiten.",
    ],
  },
  anmeldung: {
    points: [
      "Der Weg zu einem Kita-Platz führt in der Regel über eine formlose Interessensbekundung, ein Kennenlerngespräch und – bei freiem Platz – einen Betreuungsvertrag.",
      "Eine Anfrage ist keine Zusage: Die Vergabe hängt von freien Plätzen, Alter des Kindes und weiteren Kriterien ab.",
    ],
  },
  kinderschutz: {
    points: [
      "Kinderschutz umfasst feste Verfahren für den Verdachtsfall, geschultes Personal und klare Ansprechpersonen – gesetzlich verankert in § 8a SGB VIII.",
    ],
  },
};

export default async function SchatzkisteUnterseite({ params }: { params: { slug: string } }) {
  const seite = await getSeite("kita-schatzkiste", params.slug);
  if (!seite) return notFound();

  const framework = FRAMEWORK[params.slug];

  return (
    <main className="pb-16 pt-6">
      <Container narrow>
        <div className="mb-4 text-[13px] text-inkMuted">
          <Link href="/" className="text-inkMuted no-underline">
            Startseite
          </Link>{" "}
          /{" "}
          <Link href="/schatzkiste" className="text-inkMuted no-underline">
            Schatzkiste
          </Link>{" "}
          / {seite.titel}
        </div>

        <Reveal>
          <div className="card-salient px-7 py-9 sm:px-10 sm:py-12">
            <p className="mb-2.5 text-[13px] font-bold uppercase tracking-wide text-salbei">{seite.eyebrow}</p>
            <h1 className="mb-[18px] text-3xl font-extrabold sm:text-4xl">{seite.titel}</h1>
            <p className={`text-lg leading-relaxed text-[#3a3a30] ${framework ? "mb-7" : ""}`}>{seite.intro}</p>

            {framework && (
              <div className="border-t pt-7" style={{ borderColor: colors.border }}>
                <h2 className="mb-3.5 text-lg font-bold">Einordnung</h2>
                <div className="grid gap-3">
                  {framework.points.map((p, i) => (
                    <p key={i} className="leading-relaxed text-inkSoft">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            )}

            <p className="mt-10">
              <Link href="/schatzkiste" className="font-semibold text-salbei">
                &larr; Alle Schatzkiste-Seiten
              </Link>
            </p>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}
