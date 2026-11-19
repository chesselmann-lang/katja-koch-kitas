import Link from "next/link";
import Reveal from "@/components/Reveal";
import Container from "@/components/salient/Container";

export const metadata = {
  title: "Kinder haben Rechte. Jeden Tag. | Kitas von Katja Koch",
  description:
    "Kinderrechte im Kita-Alltag: Schutz, Beteiligung, Spiel, Bildung, Ruhe, Privatsphäre, respektvolle Behandlung und eigene Meinung.",
  alternates: { canonical: "/kinderrechte" },
};

const RIGHTS = [
  { title: "Schutz", text: "Jedes Kind hat das Recht, vor Gefahr und Gewalt geschützt zu werden." },
  { title: "Beteiligung", text: "Kinder dürfen bei Entscheidungen, die sie betreffen, altersgerecht mitreden." },
  { title: "Spiel", text: "Spielen ist kein Zeitvertreib, sondern ein anerkanntes Recht von Kindern." },
  { title: "Bildung", text: "Jedes Kind hat ein Recht auf Förderung entsprechend seinen Fähigkeiten." },
  { title: "Ruhe", text: "Kinder dürfen sich zurückziehen und müssen nicht ständig aktiv sein." },
  { title: "Privatsphäre", text: "Auch kleine Kinder haben ein Recht auf einen geschützten, eigenen Bereich." },
  { title: "Respektvolle Behandlung", text: "Kinder werden als eigenständige Personen ernst genommen, nicht herabgesetzt." },
  { title: "Eigene Meinung", text: "Kinder dürfen ihre Meinung äußern — auch wenn sie Erwachsenen widerspricht." },
];

const TRUST_STATEMENTS = [
  "Ich kann sagen, wenn mir etwas nicht gefällt.",
  "Ein Erwachsener hört mir zu.",
  "Meine Beschwerde wird ernst genommen.",
  "Ich darf Nein sagen — auch zu Erwachsenen.",
  "Mein Körper gehört mir.",
];

export default function KinderrechtePage() {
  return (
    <main className="section-y">
      <Container>
        <Reveal>
          <p className="eyebrow mb-2.5">Kinderrechte &amp; Kinderschutz</p>
          <h1 className="mb-5 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Kinder haben Rechte. Jeden Tag.
          </h1>
          <p className="mb-11 max-w-[760px] text-lg leading-relaxed text-inkSoft">
            Kinderrechte sind kein abstraktes Prinzip, sondern etwas, das sich im Alltag zeigen muss: in der Art, wie
            mit Kindern gesprochen wird, wie auf ihre Grenzen reagiert wird und wie ernst ihre Anliegen genommen
            werden. Auf dieser Seite erklären wir, welche Rechte das konkret sind — und was das für unseren Alltag
            bedeutet.
          </p>
        </Reveal>

        <div className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {RIGHTS.map((r, i) => (
            <Reveal key={r.title} delay={i * 60}>
              <div className="card-salient p-6">
                <h2 className="mb-2 text-[17px] font-bold">{r.title}</h2>
                <p className="text-sm leading-relaxed text-inkSoft">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mb-10 rounded-[24px] bg-waldgruen px-6 py-10 text-white sm:px-9">
            <h2 className="mb-5 text-2xl font-extrabold sm:text-3xl">Was Kinder bei uns erleben dürfen</h2>
            <div className="grid max-w-xl gap-3.5">
              {TRUST_STATEMENTS.map((s) => (
                <p key={s} className="text-lg leading-snug">
                  &bdquo;{s}&ldquo;
                </p>
              ))}
            </div>
            <p className="mt-6 max-w-xl text-[13px] leading-relaxed text-[#D8D3C1]">
              Diese Sätze beschreiben unseren Anspruch. Die konkreten Beschwerde- und Schutzverfahren unserer
              Einrichtungen sind intern dokumentiert — interne, vertrauliche Verfahrensdetails veröffentlichen wir
              hier bewusst nicht, um Schutz und Wirksamkeit nicht zu gefährden.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl bg-backgroundAlt p-7">
            <h2 className="mb-2.5 text-lg font-bold">Körperliche Selbstbestimmung</h2>
            <p className="max-w-[700px] leading-relaxed text-inkSoft">
              Schon kleine Kinder lernen bei uns altersgerecht: Mein Körper gehört mir. Das heißt konkret, dass wir
              Kindern beibringen, eigene Grenzen zu spüren, Nein zu sagen und sich Hilfe zu holen, wenn sie sich
              unwohl fühlen — und dass Erwachsene diese Grenzen respektieren.
            </p>
          </div>
        </Reveal>

        <p className="mt-10">
          <Link href="/paedagogik/kinderschutz" className="font-semibold text-salbei">
            Mehr zu unserem gesetzlichen Kinderschutzauftrag &rarr;
          </Link>
        </p>
      </Container>
    </main>
  );
}
