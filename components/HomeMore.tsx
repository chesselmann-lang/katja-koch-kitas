import { allKitas } from "@/lib/kitas-data";
import Visual, { type VisualTheme } from "@/components/Visual";
import Container from "@/components/salient/Container";
import CallToAction from "@/components/salient/CallToAction";
import Reveal from "@/components/Reveal";

const TAGESABLAUF = [
  { title: "Ankommen", text: "Begrüßung, Ankommen im eigenen Tempo." },
  { title: "Freispiel", text: "Eigene Ideen verfolgen, Spielpartner wählen." },
  { title: "Gemeinschaft", text: "Morgenkreis, gemeinsamer Austausch." },
  { title: "Natur & Bewegung", text: "Wald-, Hof- oder Gartenzeit, je nach Haus." },
  { title: "Essen", text: "Gemeinsame Mahlzeiten als fester Ankerpunkt." },
  { title: "Ruhe", text: "Rückzug, Schlaf- oder Entspannungsphase." },
  { title: "Projekte", text: "Angebote zu Themen, die Kinder gerade beschäftigen." },
  { title: "Nachmittag", text: "Freispiel, Snack, ruhigeres Tempo." },
  { title: "Abholen", text: "Übergabe, kurzer Austausch mit den Eltern." },
];

const RAEUME_THEMEN: { title: string; theme: VisualTheme }[] = [
  { title: "Bewegung", theme: "raeume" },
  { title: "Bauen", theme: "raeume" },
  { title: "Lesen", theme: "alltag" },
  { title: "Kreativität", theme: "kind" },
  { title: "Rollenspiel", theme: "kinderhaus" },
  { title: "Rückzug", theme: "alltag" },
  { title: "Essen", theme: "bauernhof" },
  { title: "Begegnung", theme: "team" },
];

export default function HomeMore() {
  return (
    <>
      {/* 7. EIN KITA-TAG (Timeline) */}
      <section className="section-y">
        <Container>
          <h2 className="mx-auto mb-2 text-center text-2xl font-extrabold sm:text-3xl">
            Ein Kita-Tag besteht aus vielen kleinen Momenten.
          </h2>
          <p className="mx-auto mb-11 max-w-xl text-center text-sm text-inkMuted">
            Der grobe Rhythmus ähnelt sich – der genaue Ablauf unterscheidet sich von Haus zu Haus und von Gruppe zu
            Gruppe.
          </p>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-9">
            {TAGESABLAUF.map((step, i) => (
              <Reveal key={step.title} delay={i * 40}>
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-waldgruen text-sm font-bold text-white transition-transform duration-200 hover:scale-110">
                    {i + 1}
                  </div>
                  <h3 className="mb-1.5 text-sm font-bold">{step.title}</h3>
                  <p className="text-[12.5px] leading-snug text-inkMuted">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. RÄUME (Mosaik) */}
      <section className="section-y bg-backgroundAlt">
        <Container>
          <h2 className="mb-11 text-center text-2xl font-extrabold sm:text-3xl">Räume, die etwas ermöglichen.</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {RAEUME_THEMEN.map((r, i) => (
              <Reveal key={r.title} delay={i * 60}>
                <div>
                  <Visual theme={r.theme} aspect="1 / 1" radius={14} zoomOnHover />
                  <p className="mt-2.5 text-center text-sm font-semibold text-ink">{r.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. KINDERSCHUTZ */}
      <section className="section-y">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-2.5 text-[13px] font-bold uppercase tracking-wide text-salbei">Kinderschutz</p>
              <h2 className="mb-[18px] text-2xl font-extrabold sm:text-3xl">Kinder haben Rechte. Jeden Tag.</h2>
              <p className="mb-7 leading-relaxed text-inkSoft">
                Kinder sollen sich sicher fühlen, ihre Grenzen ausdrücken dürfen und erleben, dass ihre Meinung ernst
                genommen wird.
              </p>
              <div className="mb-7 flex flex-wrap justify-center gap-2.5">
                {["Schutz", "Beteiligung", "Beschwerden", "Grenzen", "Vertrauen"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-card px-4 py-2 text-[13px] font-semibold text-inkSoft shadow-sm transition-shadow duration-150 hover:shadow-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a href="/kinderrechte" className="font-bold text-waldgruen transition-colors duration-150 hover:text-terrakotta">
                Mehr über Kinderschutz &rarr;
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 10. ELTERN */}
      <section className="section-y bg-waldgruen text-[#F1EEE2]">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="mb-[18px] text-2xl font-extrabold sm:text-3xl">Gute Kita braucht Zusammenarbeit.</h2>
              <p className="mb-6 leading-relaxed text-[#C9C6B4]">
                Eltern kennen ihr Kind auf eine andere Weise als pädagogische Fachkräfte. Gute Zusammenarbeit
                entsteht, wenn beide Perspektiven miteinander im Gespräch bleiben.
              </p>
              <a
                href="/fuer-eltern"
                className="inline-block rounded-full bg-white px-[26px] py-3 text-sm font-bold text-waldgruen transition-transform duration-200 hover:scale-105"
              >
                Informationen für Eltern
              </a>
            </div>
            <Visual theme="team" aspect="4 / 3" zoomOnHover />
          </div>
        </Container>
      </section>

      {/* 11. KITA-PLATZ CTA — Salient "CallToAction"-Primitive */}
      <CallToAction
        title="Möchten Sie eine unserer Kitas kennenlernen?"
        actions={
          <>
            <a href="/anmeldung" className="btn-primary">
              Kita-Platz anfragen
            </a>
            <a href="/kontakt" className="btn-secondary">
              Besichtigung anfragen
            </a>
          </>
        }
      />

      {/* 12. KATJA KOCH */}
      <section className="section-y">
        <Container>
          <Reveal>
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
              <Visual theme="team" aspect="3 / 4" zoomOnHover />
              <div>
                <p className="mb-2.5 text-[13px] font-bold uppercase tracking-wide text-salbei">Katja Koch</p>
                <h2 className="mb-[18px] text-2xl font-extrabold leading-snug sm:text-3xl">
                  Hinter den vier Einrichtungen steht eine gemeinsame pädagogische Haltung.
                </h2>
                <p className="mb-2.5 leading-relaxed text-inkSoft">
                  Katja Koch begleitet die vier Kitas mit einer Haltung, die auf verlässlichen Beziehungen,
                  Naturerfahrung und individueller Entwicklung aufbaut. Die vier Häuser setzen diese Haltung jeweils
                  mit eigenem Profil um.
                </p>
                <a href="/ueber-uns" className="font-bold text-waldgruen transition-colors duration-150 hover:text-terrakotta">
                  Mehr über uns &rarr;
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 13. STANDORTE */}
      <section className="section-y bg-backgroundAlt">
        <Container>
          <h2 className="mb-10 text-center text-2xl font-extrabold sm:text-3xl">Vier Standorte in Marl.</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {allKitas.map((k, i) => (
              <Reveal key={k.slug} delay={i * 60}>
                <a
                  href={`/${k.slug}`}
                  className="block rounded-2xl bg-card p-[22px] shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderTop: `4px solid ${k.accentColor}` }}
                >
                  <h3 className="mb-2 text-[17px] font-bold">{k.shortName}</h3>
                  <p className="mb-1 text-[13.5px] text-inkSoft">{k.address}</p>
                  <p className="text-[13px] text-inkMuted">{k.phone}</p>
                </a>
              </Reveal>
            ))}
          </div>
          <p className="mt-7 text-center">
            <a href="/kontakt" className="font-bold text-waldgruen transition-colors duration-150 hover:text-terrakotta">
              Alle Kontaktdaten &rarr;
            </a>
          </p>
        </Container>
      </section>
    </>
  );
}
