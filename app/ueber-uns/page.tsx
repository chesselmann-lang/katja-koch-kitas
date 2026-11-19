import { colors } from "@/lib/theme";
import Link from "next/link";
import Visual from "@/components/Visual";
import Reveal from "@/components/Reveal";
import ShapeDivider from "@/components/ShapeDivider";
import Container from "@/components/salient/Container";
import CallToAction from "@/components/salient/CallToAction";

export const metadata = {
  title: "Über uns – Katja Koch & Träger | Kitas von Katja Koch",
  description:
    "Wer hinter den vier Kitas von Katja Koch steht: die pädagogische Haltung, Katja Koch und die beiden Trägergesellschaften Schatzkiste Bauernhof gGmbH und LiN Leben in der Natur gGmbH.",
  alternates: { canonical: "/ueber-uns" },
};

const KATJA_ROLES = [
  "Einrichtungsübergreifende Leitung / Geschäftsführung",
  "Erzieherin",
  "Bauernhofpädagogin",
  "Montessoripädagogin",
  "B.A. Bildungswissenschaften",
  "Kinderschutzfachkraft",
];

export default function UeberUnsPage() {
  return (
    <main>
      <section className="section-y">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <p className="eyebrow mb-2.5">Über uns</p>
              <h1 className="mb-5 text-3xl font-extrabold leading-tight sm:text-4xl">
                Vier Einrichtungen unter einer gemeinsamen pädagogischen Dachmarke.
              </h1>
              <p className="text-lg leading-relaxed text-inkSoft">
                Die Kitas Schatzkiste, Blumenwiese, Baumhaus und Kinderhaus sind eigenständige Einrichtungen mit
                jeweils eigenem Standort, eigener Leitung und eigenem Charakter. Verbunden sind sie durch eine
                gemeinsame pädagogische Haltung: Natur, Bewegung, Beziehung und die Überzeugung, dass Kinder sich am
                besten entwickeln, wenn man ihnen Zeit, Vertrauen und echte Erfahrungen zutraut.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <Visual theme="team" aspect="4 / 3.4" radius={24} />
            </Reveal>
          </div>
        </Container>
      </section>

      <ShapeDivider from={colors.background} to={colors.backgroundAlt} />
      <section className="section-y-sm bg-backgroundAlt">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-11">
            <Reveal>
              <Visual theme="kind" aspect="4 / 4.6" radius={22} />
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mb-4 text-2xl font-extrabold sm:text-3xl">
                Kinder brauchen Menschen, die ihnen Entwicklung zutrauen.
              </h2>
              <p className="mb-5 leading-relaxed text-inkSoft">
                Katja Koch begleitet die vier Kitas einrichtungsübergreifend. Ihr Blick auf Kinder ist geprägt von
                Naturpädagogik, Bauernhofpädagogik und einem klaren Verständnis von Kinderschutz: Kindern Zeit geben,
                ihnen Verantwortung zutrauen und dabei verlässlich an ihrer Seite bleiben.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {KATJA_ROLES.map((r) => (
                  <span key={r} className="rounded-full bg-white px-4 py-2 text-[13px] text-inkSoft shadow-sm">
                    {r}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <ShapeDivider from={colors.backgroundAlt} to={colors.background} flip />
      <section className="section-y-sm">
        <Container narrow>
          <Reveal>
            <h2 className="mb-2 text-2xl font-extrabold sm:text-3xl">Unsere Träger</h2>
            <p className="mb-7 max-w-[700px] leading-relaxed text-inkSoft">
              Die vier Kitas werden rechtlich von zwei eigenständigen gemeinnützigen Trägergesellschaften betrieben.
              Das zeigen wir hier bewusst offen, statt es hinter einer gemeinsamen Marke zu verstecken.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Reveal>
              <div className="card-salient p-6">
                <h3 className="mb-2.5 text-[17px] font-bold">Schatzkiste Bauernhof gGmbH</h3>
                <p className="mb-3 text-sm leading-relaxed text-inkSoft">
                  Forststraße 76, 45768 Marl
                  <br />
                  Geschäftsführung: Katja Koch, Nicole Scholz
                </p>
                <p className="text-[13px] text-inkMuted">Träger von:</p>
                <div className="mt-2 flex flex-wrap gap-2.5">
                  <Link href="/schatzkiste" className="text-sm font-semibold text-salbei">
                    Kita Schatzkiste →
                  </Link>
                  <Link href="/blumenwiese" className="text-sm font-semibold text-salbei">
                    Kita Blumenwiese →
                  </Link>
                </div>
                <p className="mt-3">
                  <Link href="/traeger/schatzkiste-bauernhof-ggmbh" className="text-sm font-semibold text-salbei">
                    Zur Trägerseite →
                  </Link>
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card-salient p-6">
                <h3 className="mb-2.5 text-[17px] font-bold">LiN Leben in der Natur gGmbH</h3>
                <p className="mb-3 text-sm leading-relaxed text-inkSoft">
                  Forststraße 76, 45768 Marl
                  <br />
                  Telefon: 0178 6363724 ·{" "}
                  <a href="mailto:eatr@gmx.de" className="text-salbei">
                    eatr@gmx.de
                  </a>
                </p>
                <p className="text-[13px] text-inkMuted">Träger von:</p>
                <div className="mt-2 flex flex-wrap gap-2.5">
                  <Link href="/baumhaus" className="text-sm font-semibold text-salbei">
                    Kita Baumhaus →
                  </Link>
                  <Link href="/kinderhaus" className="text-sm font-semibold text-salbei">
                    Kita Kinderhaus →
                  </Link>
                </div>
                <p className="mt-3">
                  <Link href="/traeger/lin-ggmbh" className="text-sm font-semibold text-salbei">
                    Zur Trägerseite →
                  </Link>
                </p>
              </div>
            </Reveal>
          </div>
          <p className="mt-5">
            <Link href="/impressum" className="font-semibold text-salbei">
              Vollständige rechtliche Angaben im Impressum &rarr;
            </Link>
          </p>
        </Container>
      </section>

      <ShapeDivider from={colors.background} to={colors.waldgruen} />
      <CallToAction
        title="Lernen Sie unsere vier Einrichtungen kennen"
        actions={
          <>
            <Link href="/#kitas" className="btn-primary">
              Unsere vier Kitas
            </Link>
            <Link href="/kontakt" className="rounded-full border-[1.5px] border-white px-6 py-3 text-sm font-bold text-white">
              Kontakt aufnehmen
            </Link>
          </>
        }
      />
    </main>
  );
}
