import KitaPageTemplate from "@/components/KitaPageTemplate";
import { getKitaData } from "@/lib/kitas-data";
import Visual from "@/components/Visual";
import Container from "@/components/salient/Container";

export const metadata = {
  title: "Kita Blumenwiese in Marl – Naturpädagogik & Bewegung | Kitas von Katja Koch",
  description:
    "Die Kita Blumenwiese in Marl verbindet Naturpädagogik, Bewegung und gemeinsames Wachsen auf rund 3.000 m² Außengelände.",
  alternates: { canonical: "/blumenwiese" },
};

const RAEUME = ["Gänseblümchen", "Sonnenblumen", "Atelier", "Kinderküche"];

function WachsenSignature() {
  const kita = getKitaData("blumenwiese");
  return (
    <section className="section-y bg-backgroundAlt">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-11">
          <Visual theme="garten" aspect="4 / 5" radius={22} factLabel="≈ 3.000 m² Außengelände" />
          <div>
            <p className="mb-2.5 text-[13px] font-bold uppercase tracking-wide" style={{ color: kita.accentColor }}>
              Viel Platz zum Wachsen
            </p>
            <h2 className="mb-4 text-2xl font-extrabold leading-tight sm:text-3xl">
              Rund 3.000 Quadratmeter zum Entdecken.
            </h2>
            <p className="mb-5 leading-relaxed text-inkSoft">
              Auf dem weitläufigen Außengelände der Blumenwiese gibt es Platz zum Laufen, Klettern, Beobachten und
              Rückzug. Drinnen ergänzen rund 400 m² Innenfläche und eine 100 m² große Mehrzweckhalle mit großer
              Fensterfront den Bewegungsraum.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {RAEUME.map((r) => (
                <span key={r} className="rounded-full bg-card px-3.5 py-1.5 text-[13px] font-semibold text-inkSoft shadow-sm">
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function BlumenwiesePage() {
  return (
    <KitaPageTemplate kita={getKitaData("blumenwiese")} heroTheme="blumenwiese" signatureSection={<WachsenSignature />} />
  );
}
