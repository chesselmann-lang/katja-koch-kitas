import KitaPageTemplate from "@/components/KitaPageTemplate";
import { getKitaData } from "@/lib/kitas-data";
import { getKitaSeiten } from "@/lib/sanity";
import { colors } from "@/lib/theme";
import Visual from "@/components/Visual";
import Reveal from "@/components/Reveal";
import ShapeDivider from "@/components/ShapeDivider";
import Container from "@/components/salient/Container";

export const revalidate = 60;

export const metadata = {
  title: "Kita Schatzkiste in Marl – Bauernhof, Wald & Tiere | Kitas von Katja Koch",
  description:
    "Die Kita Schatzkiste in Marl verbindet festen Kita-Alltag mit Bauernhof, Tieren und regelmäßigen Waldzeiten. Konzept, Tagesablauf, Eingewöhnung und Kontakt.",
  alternates: { canonical: "/schatzkiste" },
};

function BauernhofSignature() {
  const kita = getKitaData("schatzkiste");
  return (
    <section className="section-y">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-11">
          <Reveal>
            <Visual theme="bauernhof" aspect="16 / 11" radius={22} factLabel="Pferde · Schweine · Ziegen · Hühner" />
          </Reveal>
          <Reveal delay={90}>
            <p className="mb-2.5 text-[13px] font-bold uppercase tracking-wide" style={{ color: kita.accentColor }}>
              Bauernhof
            </p>
            <h2 className="mb-4 text-2xl font-extrabold leading-tight sm:text-3xl">Tiere sind keine Dekoration.</h2>
            <p className="mb-3.5 leading-relaxed text-inkSoft">
              Pferde, Schweine, Ziegen und Hühner gehören zum Alltag der Schatzkiste. Kinder füttern, beobachten und
              lernen, Verantwortung für Lebewesen zu übernehmen — begleitet von Erwachsenen, nicht als
              Streichelzoo-Erlebnis, sondern als echte Aufgabe.
            </p>
            <p className="mb-6 leading-relaxed text-inkSoft">
              Direkt angrenzend liegt der Wald: feste Zeiten draußen gehören zum festen Rhythmus der Woche, bei fast
              jedem Wetter.
            </p>
            <a href="/schatzkiste/bauernhof" className="font-bold" style={{ color: kita.accentColor }}>
              Bauernhof der Schatzkiste kennenlernen &rarr;
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

const EXTRA_LINKS = [
  { href: "/schatzkiste/bauernhof", label: "Unser Bauernhof" },
  { href: "/schatzkiste/tiere", label: "Unsere Tiere" },
];

export default async function SchatzkistePage() {
  const deepPages = await getKitaSeiten("kita-schatzkiste");
  return (
    <>
      <KitaPageTemplate
        kita={getKitaData("schatzkiste")}
        deepPages={deepPages}
        heroTheme="bauernhof"
        signatureSection={<BauernhofSignature />}
      />
      <ShapeDivider from={colors.background} to={colors.backgroundAlt} />
      <section className="section-y-sm bg-backgroundAlt">
        <Container>
          <Reveal>
            <h2 className="mb-5 text-xl font-extrabold sm:text-2xl">Noch mehr aus der Bauernhof-Welt</h2>
          </Reveal>
          <div className="flex flex-wrap gap-4">
            {EXTRA_LINKS.map((l, i) => (
              <Reveal key={l.href} delay={i * 80}>
                <a href={l.href} className="inline-block rounded-full bg-white px-[22px] py-3.5 font-semibold text-ink shadow-sm">
                  {l.label} &rarr;
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
