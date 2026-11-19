import Visual from "@/components/Visual";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Container from "@/components/salient/Container";

export const metadata = {
  title: "Unsere Tiere | Kita Schatzkiste",
  description: "Pferde, Schweine, Ziegen und Hühner auf dem Bauernhof der Kita Schatzkiste.",
  alternates: { canonical: "/schatzkiste/tiere" },
};

const ANIMALS = [
  { name: "Pferde", info: "Große, ruhige Tiere, die Kindern zeigen, wie wichtig behutsames, respektvolles Verhalten ist." },
  { name: "Schweine", info: "Neugierige Tiere, an denen Kinder Verhalten und Körpersprache beobachten können." },
  { name: "Ziegen", info: "Lebhafte Tiere, die zum genauen Hinschauen und vorsichtigen Umgang einladen." },
  { name: "Hühner", info: "Zeigen Kindern anschaulich natürliche Kreisläufe — zum Beispiel, woher ein Ei kommt." },
];

export default function TierePage() {
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
          / Unsere Tiere
        </div>

        <Reveal>
          <p className="eyebrow mb-2.5">Schatzkiste</p>
          <h1 className="mb-5 text-3xl font-extrabold sm:text-4xl">Unsere Tiere</h1>
          <p className="mb-3 text-lg leading-relaxed text-inkSoft">
            Nach aktuellem Konzeptstand gehören diese Tiere zu unserem Bauernhof. Der Kontakt ist immer pädagogisch
            begleitet — kein Streichelzoo-Erlebnis, sondern eine Gelegenheit, Verantwortung, Beobachtung und Respekt
            vor Lebewesen zu lernen.
          </p>
        </Reveal>
        <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {ANIMALS.map((a, i) => (
            <Reveal key={a.name} delay={i * 70}>
              <div className="card-salient p-6">
                <Visual theme="bauernhof" aspect="4 / 3" radius={12} style={{ marginBottom: 14 }} />
                <h2 className="mb-2 text-[17px] font-bold">{a.name}</h2>
                <p className="text-sm leading-relaxed text-inkSoft">{a.info}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10">
          <Link href="/schatzkiste/bauernhof" className="font-semibold text-salbei">
            &larr; Zurück zum Bauernhof
          </Link>
        </p>
      </Container>
    </main>
  );
}
