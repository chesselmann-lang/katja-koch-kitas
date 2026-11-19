import KitaPageTemplate from "@/components/KitaPageTemplate";
import { getKitaData } from "@/lib/kitas-data";
import Visual from "@/components/Visual";
import Container from "@/components/salient/Container";

export const metadata = {
  title: "Kindertagesstätte Baumhaus in Marl – Wald & Inklusion | Kitas von Katja Koch",
  description:
    "Die Kindertagesstätte Baumhaus in Marl verbindet Wald und Abenteuer mit einer ausführlichen inklusionspädagogischen Konzeption.",
  alternates: { canonical: "/baumhaus" },
};

function InklusionSignature() {
  const kita = getKitaData("baumhaus");
  return (
    <section className="section-y bg-backgroundAlt">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-11">
          <Visual theme="wald" aspect="16 / 11" radius={22} />
          <div>
            <p className="mb-2.5 text-[13px] font-bold uppercase tracking-wide" style={{ color: kita.accentColor }}>
              Inklusion
            </p>
            <h2 className="mb-4 text-2xl font-extrabold leading-tight sm:text-3xl">Jedes Kind gehört dazu.</h2>
            <p className="mb-3.5 leading-relaxed text-inkSoft">
              Im Baumhaus ist Inklusion kein Zusatzangebot, sondern Teil der pädagogischen Grundhaltung: individuelle
              Begleitung, Teilhabe und der Abbau von Barrieren gehören zum Alltag dazu.
            </p>
            <p className="leading-relaxed text-inkSoft">
              Wald und Natur bieten dabei einen Erfahrungsraum, in dem jedes Kind in seinem eigenen Tempo Mut,
              Bewegung und eigene Entdeckungen machen kann.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function BaumhausPage() {
  return <KitaPageTemplate kita={getKitaData("baumhaus")} heroTheme="wald" signatureSection={<InklusionSignature />} />;
}
