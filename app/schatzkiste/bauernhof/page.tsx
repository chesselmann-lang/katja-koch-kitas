import Link from "next/link";
import Reveal from "@/components/Reveal";
import Container from "@/components/salient/Container";

export const metadata = {
  title: "Unser Bauernhof – Lernen mit allen Sinnen | Kita Schatzkiste",
  description: "Der Bauernhof der Kita Schatzkiste: Tiere beobachten, Verantwortung erleben, natürliche Zusammenhänge verstehen.",
  alternates: { canonical: "/schatzkiste/bauernhof" },
};

const CARDS = [
  {
    t: "Verantwortung beginnt im Kleinen",
    d: "Tiere sind keine Spielzeuge. Kinder lernen, aufmerksam zu beobachten, Grenzen zu respektieren und Lebewesen achtsam zu begegnen.",
  },
  {
    t: "Natürliche Kreisläufe",
    d: "Vom Ei bis zur Wolle: Kinder erleben, woher Dinge kommen, statt sie nur fertig vorzufinden.",
  },
  {
    t: "Immer begleitet",
    d: "Der Kontakt zu Tieren findet altersgerecht und unter Begleitung durch Fachkräfte statt, nie unbeaufsichtigt.",
  },
];

export default function BauernhofPage() {
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
          / Bauernhof
        </div>

        <Reveal>
          <p className="eyebrow mb-2.5">Schatzkiste</p>
          <h1 className="mb-6 text-3xl font-extrabold sm:text-4xl">Unser Bauernhof – Lernen mit allen Sinnen</h1>
          <p className="mb-8 text-lg leading-relaxed text-inkSoft">
            Ein Bauernhof eröffnet Kindern Erfahrungsräume, die sich kaum aus Büchern vermitteln lassen. Tiere
            beobachten, Verantwortung erleben, Veränderungen wahrnehmen und natürliche Zusammenhänge verstehen — das
            ist der Kern unseres Konzepts in der Schatzkiste.
          </p>
        </Reveal>

        <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.t} delay={i * 70}>
              <div className="card-salient p-[22px]">
                <h3 className="mb-2 text-base font-bold">{c.t}</h3>
                <p className="text-sm leading-relaxed text-inkSoft">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h2 className="mb-3 text-xl font-bold">Was Kinder von Tieren lernen</h2>
          <div className="mb-10 grid gap-2.5">
            {["Empathie", "Verantwortung", "Geduld", "Beobachtung", "Respekt"].map((s) => (
              <div key={s} className="flex items-center gap-2.5">
                <span className="inline-block h-2 w-2 rounded-full bg-salbei" />
                <span className="text-[15px] text-inkSoft">{s}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-3 rounded-2xl bg-backgroundAlt p-6">
            <p className="text-sm leading-relaxed text-inkSoft">
              Zum Bauernhof der Schatzkiste gehören Pferde, Schweine, Ziegen und Hühner. Der Kontakt mit den Tieren
              ist immer pädagogisch begleitet.
            </p>
          </div>
        </Reveal>
        <p className="mt-5">
          <Link href="/schatzkiste/tiere" className="font-semibold text-salbei">
            Unsere Tiere kennenlernen &rarr;
          </Link>
        </p>
      </Container>
    </main>
  );
}
