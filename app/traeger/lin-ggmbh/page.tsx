import Link from "next/link";
import Visual from "@/components/Visual";
import Reveal from "@/components/Reveal";
import Container from "@/components/salient/Container";
import Hero from "@/components/salient/Hero";
import FeatureGrid from "@/components/salient/FeatureGrid";
import CallToAction from "@/components/salient/CallToAction";

export const metadata = {
  title: "LiN Leben in der Natur gGmbH | Kitas von Katja Koch",
  description:
    "Die LiN Leben in der Natur gGmbH ist Trägerin der Kita Baumhaus und der Kita Kinderhaus in Marl.",
  alternates: { canonical: "/traeger/lin-ggmbh" },
};

export default function LinTraegerPage() {
  return (
    <main>
      <Hero
        eyebrow="Trägergesellschaft"
        title="LiN Leben in der Natur gGmbH"
        description={
          <>
            Gemeinnützige Trägergesellschaft mit Sitz in Marl. Trägerin der{" "}
            <Link href="/baumhaus" className="font-semibold text-waldgruen">
              Kita Baumhaus
            </Link>{" "}
            und der{" "}
            <Link href="/kinderhaus" className="font-semibold text-waldgruen">
              Kita Kinderhaus
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
        visual={<Visual theme="team" aspect="4 / 3.4" radius={24} />}
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
                title: "Telefon",
                description: "0178 6363724",
              },
              {
                title: "E-Mail",
                description: (
                  <a href="mailto:eatr@gmx.de" className="text-salbei">
                    eatr@gmx.de
                  </a>
                ),
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
              Die LiN Leben in der Natur gGmbH ist Trägerin von zwei eigenständigen Kitas mit jeweils eigenem
              Standort und eigener Leitung.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Reveal>
              <Link href="/baumhaus" className="card-salient block p-6">
                <h3 className="mb-2 text-[17px] font-bold">Kita Baumhaus</h3>
                <p className="text-sm leading-relaxed text-inkSoft">
                  Wald, Abenteuer und eine ausführliche inklusive Pädagogik.
                </p>
                <p className="mt-3 text-sm font-semibold text-salbei">Zur Kita Baumhaus &rarr;</p>
              </Link>
            </Reveal>
            <Reveal delay={80}>
              <Link href="/kinderhaus" className="card-salient block p-6">
                <h3 className="mb-2 text-[17px] font-bold">Kita Kinderhaus</h3>
                <p className="text-sm leading-relaxed text-inkSoft">Eine der vier Kitas unter gemeinsamer Haltung.</p>
                <p className="mt-3 text-sm font-semibold text-salbei">Zur Kita Kinderhaus &rarr;</p>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      <CallToAction
        title="Mehr über die Kitas der LiN Leben in der Natur gGmbH erfahren"
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
