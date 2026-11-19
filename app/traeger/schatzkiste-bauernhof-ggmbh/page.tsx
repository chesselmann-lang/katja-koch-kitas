import Link from "next/link";
import Visual from "@/components/Visual";
import Reveal from "@/components/Reveal";
import Container from "@/components/salient/Container";
import Hero from "@/components/salient/Hero";
import FeatureGrid from "@/components/salient/FeatureGrid";
import CallToAction from "@/components/salient/CallToAction";

export const metadata = {
  title: "Schatzkiste Bauernhof gGmbH | Kitas von Katja Koch",
  description:
    "Die Schatzkiste Bauernhof gGmbH ist Trägerin der Kita Schatzkiste und der Kita Blumenwiese in Marl.",
  alternates: { canonical: "/traeger/schatzkiste-bauernhof-ggmbh" },
};

export default function SchatzkisteTraegerPage() {
  return (
    <main>
      <Hero
        eyebrow="Trägergesellschaft"
        title="Schatzkiste Bauernhof gGmbH"
        description={
          <>
            Gemeinnützige Trägergesellschaft mit Sitz in Marl. Trägerin der{" "}
            <Link href="/schatzkiste" className="font-semibold text-waldgruen">
              Kita Schatzkiste
            </Link>{" "}
            und der{" "}
            <Link href="/blumenwiese" className="font-semibold text-waldgruen">
              Kita Blumenwiese
            </Link>
            .
          </>
        }
        actions={
          <>
            <Link href="/anmeldung" className="btn-primary">
              Kita-Platz anfragen
            </Link>
            <Link href="/impressum" className="btn-secondary">
              Rechtliche Angaben
            </Link>
          </>
        }
        visual={<Visual theme="bauernhof" aspect="4 / 3.4" radius={24} />}
      />

      <section className="section-y-sm bg-backgroundAlt">
        <Container>
          <Reveal>
            <h2 className="mb-7 text-2xl font-extrabold sm:text-3xl">Angaben zur Gesellschaft</h2>
          </Reveal>
          <FeatureGrid
            columns={3}
            features={[
              {
                title: "Sitz & Anschrift",
                description: (
                  <>
                    Forststraße 76
                    <br />
                    45768 Marl
                  </>
                ),
              },
              {
                title: "Geschäftsführung",
                description: "Katja Koch, Nicole Scholz",
              },
              {
                title: "Registergericht",
                description: "Amtsgericht Gelsenkirchen, HRB 18071",
              },
              {
                title: "Telefon",
                description: "0178 6363724",
              },
              {
                title: "Rechtsform",
                description: "Gemeinnützige Gesellschaft mit beschränkter Haftung (gGmbH)",
              },
              {
                title: "Vollständiges Impressum",
                description: (
                  <Link href="/impressum" className="font-semibold text-salbei">
                    Zum Impressum &rarr;
                  </Link>
                ),
              },
            ]}
          />
        </Container>
      </section>

      <section className="section-y-sm">
        <Container narrow>
          <Reveal>
            <h2 className="mb-2 text-2xl font-extrabold sm:text-3xl">Getragene Einrichtungen</h2>
            <p className="mb-7 max-w-[700px] leading-relaxed text-inkSoft">
              Die Schatzkiste Bauernhof gGmbH ist Trägerin von zwei eigenständigen Kitas mit jeweils eigenem
              Standort und eigener Leitung.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Reveal>
              <Link href="/schatzkiste" className="card-salient block p-6">
                <h3 className="mb-2 text-[17px] font-bold">Kita Schatzkiste</h3>
                <p className="text-sm leading-relaxed text-inkSoft">
                  Wald- und Bauernhofpädagogik in Marl-Brassert.
                </p>
                <p className="mt-3 text-sm font-semibold text-salbei">Zur Kita Schatzkiste &rarr;</p>
              </Link>
            </Reveal>
            <Reveal delay={80}>
              <Link href="/blumenwiese" className="card-salient block p-6">
                <h3 className="mb-2 text-[17px] font-bold">Kita Blumenwiese</h3>
                <p className="text-sm leading-relaxed text-inkSoft">Eine der vier Kitas unter gemeinsamer Haltung.</p>
                <p className="mt-3 text-sm font-semibold text-salbei">Zur Kita Blumenwiese &rarr;</p>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      <CallToAction
        title="Mehr über die Kitas der Schatzkiste Bauernhof gGmbH erfahren"
        actions={
          <>
            <Link href="/ueber-uns" className="btn-primary">
              Über uns & Träger
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
