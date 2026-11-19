import KitaPageTemplate from "@/components/KitaPageTemplate";
import { getKitaData } from "@/lib/kitas-data";
import Visual from "@/components/Visual";
import Container from "@/components/salient/Container";

export const metadata = {
  title: "Kita Kinderhaus in Marl – Gemeinschaft & Garten | Kitas von Katja Koch",
  description:
    "Die Kita Kinderhaus in Marl ist eine eingruppige Einrichtung mit 20 Plätzen, geprägt von Gemeinschaft, Geborgenheit und einem vielseitigen Garten.",
  alternates: { canonical: "/kinderhaus" },
};

const GARTEN_ELEMENTE = [
  "Gemüse- & Kräuterbeete",
  "Naschgarten",
  "Sandbereich",
  "Matschküche",
  "Rutschturm",
  "Vogelnestschaukel",
  "Baumstämme",
  "Gartenlaube",
];

function GartenSignature() {
  const kita = getKitaData("kinderhaus");
  return (
    <section className="section-y bg-backgroundAlt">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-11">
          <Visual theme="garten" aspect="4 / 5" radius={22} factLabel="Eingruppig · 20 Plätze" />
          <div>
            <p className="mb-2.5 text-[13px] font-bold uppercase tracking-wide" style={{ color: kita.accentColor }}>
              Unser Garten
            </p>
            <h2 className="mb-4 text-2xl font-extrabold leading-tight sm:text-3xl">
              Spielraum, Bewegungsraum und Lernraum zugleich.
            </h2>
            <p className="mb-5 leading-relaxed text-inkSoft">
              Der Garten des Kinderhauses ist weit mehr als eine Außenfläche: Kinder säen, ernten, matschen, klettern
              und ziehen sich zurück — alles auf kurzen Wegen, die zur eingruppigen, familiären Einrichtung passen.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {GARTEN_ELEMENTE.map((g) => (
                <span key={g} className="rounded-full bg-card px-3.5 py-1.5 text-[13px] font-semibold text-inkSoft shadow-sm">
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function KinderhausPage() {
  return (
    <KitaPageTemplate kita={getKitaData("kinderhaus")} heroTheme="kinderhaus" signatureSection={<GartenSignature />} />
  );
}
