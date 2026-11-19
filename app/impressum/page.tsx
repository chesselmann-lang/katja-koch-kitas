import Reveal from "@/components/Reveal";
import Container from "@/components/salient/Container";

export const metadata = { title: "Impressum | Kitas von Katja Koch", alternates: { canonical: "/impressum" } };

export default function ImpressumPage() {
  return (
    <main className="section-y-sm">
      <Container narrow>
        <Reveal>
          <div className="card-salient px-7 py-9 sm:px-10">
            <h1 className="mb-2 text-3xl font-extrabold sm:text-4xl">Impressum</h1>
            <p className="mb-7 text-sm text-inkMuted">
              Diese Website informiert über vier Kitas, die von zwei Trägergesellschaften betrieben werden. Beide
              sind hier gemeinsam als verantwortliche Stellen für diese Website angegeben.
            </p>

            <div className="grid gap-7 text-[15px] leading-relaxed text-inkSoft">
              <section>
                <h2 className="mb-2.5 text-lg font-bold text-ink">
                  Träger für Kita Schatzkiste &amp; Kita Blumenwiese
                </h2>
                <p className="mb-1">
                  <strong>Schatzkiste Bauernhof gGmbH</strong>
                  <br />
                  Forststraße 76
                  <br />
                  45768 Marl
                </p>
                <p className="mb-1">
                  <strong>Geschäftsführung:</strong> Katja Koch, Nicole Scholz
                </p>
                <p className="mb-1">
                  <strong>Registergericht:</strong> Amtsgericht Gelsenkirchen, HRB 18071
                </p>
                <p>
                  <strong>Telefon:</strong> 0178 6363724
                </p>
              </section>

              <section>
                <h2 className="mb-2.5 text-lg font-bold text-ink">Träger für Kita Baumhaus &amp; Kita Kinderhaus</h2>
                <p className="mb-1">
                  <strong>LiN Leben in der Natur gGmbH</strong>
                  <br />
                  Forststraße 76
                  <br />
                  45768 Marl
                </p>
                <p className="mb-1">
                  <strong>Telefon:</strong> 0178 6363724
                </p>
                <p>
                  <strong>E-Mail:</strong>{" "}
                  <a href="mailto:eatr@gmx.de" className="text-salbei">
                    eatr@gmx.de
                  </a>
                </p>
              </section>

              <section>
                <h2 className="mb-2.5 text-lg font-bold text-ink">
                  Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV
                </h2>
                <p>Katja Koch, Forststraße 76, 45768 Marl</p>
              </section>

              <section>
                <h2 className="mb-2.5 text-lg font-bold text-ink">Technische Umsetzung</h2>
                <p>Konzeption, Design und technische Umsetzung dieser Website: whatsdigital.de.</p>
              </section>
            </div>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}
