import Link from "next/link";
import { allKitas } from "@/lib/kitas-data";
import { colors } from "@/lib/theme";
import Visual from "@/components/Visual";
import Reveal from "@/components/Reveal";
import ShapeDivider from "@/components/ShapeDivider";
import Container from "@/components/salient/Container";

export const metadata = {
  title: "Kontakt | Kitas von Katja Koch",
  description: "Kontaktangaben für alle vier Kitas sowie die Möglichkeit, eine Besichtigung anzufragen.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage({
  searchParams,
}: {
  searchParams?: { kita?: string; anliegen?: string };
}) {
  // Allowlist-Check: ein unbekannter `kita`-Wert wird ignoriert, nicht übernommen.
  const requestedKita = searchParams?.kita;
  const kita = requestedKita ? allKitas.find((k) => k.slug === requestedKita) : undefined;
  const isBesichtigung = searchParams?.anliegen === "besichtigung";

  return (
    <main>
      <section className="pt-12">
        <Container>
          <div className="mb-5 text-[13px] text-inkMuted">
            <Link href="/" className="text-inkMuted no-underline">
              Startseite
            </Link>{" "}
            / Kontakt
          </div>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <Reveal>
            <div className="max-w-xl">
              <p className="eyebrow mb-2.5">Kontakt</p>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl">So erreichen Sie uns.</h1>
              {kita && (
                <p className="mb-4 inline-block rounded-full bg-waldgruen/10 px-4 py-2 text-sm font-semibold text-waldgruen">
                  Ihre Anfrage betrifft: {kita.name}
                  {isBesichtigung ? " — Besichtigungsanfrage" : ""}
                </p>
              )}
              <p className="max-w-lg text-lg leading-relaxed text-inkSoft">
                Für eine allgemeine Frage oder eine Besichtigung wenden Sie sich direkt an die jeweilige Kita. Für
                eine Platzanfrage nutzen Sie bitte das{" "}
                <Link href="/anmeldung" className="font-bold text-waldgruen">
                  Anmeldeformular
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <ShapeDivider from={colors.background} to={colors.backgroundAlt} />
      <section id="besichtigung" className="section-y bg-backgroundAlt">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {allKitas.map((k, i) => (
              <Reveal key={k.slug} delay={i * 80}>
                <div className="overflow-hidden rounded-card bg-card shadow-sm">
                  <Visual theme={k.slug} aspect="16 / 10" radius={0} factLabel={k.district} />
                  <div className="p-[22px]">
                    <h2 className="mb-3 text-lg font-bold">{k.name}</h2>
                    <div className="grid gap-1.5 text-sm text-inkSoft">
                      <div>
                        {k.address}, {k.district}{" "}
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${k.address}, ${k.district}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-waldgruen"
                        >
                          Route
                        </a>
                      </div>
                      <div>
                        <a href={`tel:${k.phone.replace(/\s+/g, "")}`} className="text-inkSoft">
                          {k.phone}
                        </a>
                      </div>
                      <div>
                        <a
                          href={
                            kita?.slug === k.slug
                              ? `mailto:${k.email}?subject=${encodeURIComponent(
                                  isBesichtigung ? `Besichtigungsanfrage ${k.name}` : `Anfrage ${k.name}`
                                )}`
                              : `mailto:${k.email}`
                          }
                          className="text-inkSoft"
                        >
                          {k.email}
                        </a>
                      </div>
                      {k.openingHours && <div>{k.openingHours}</div>}
                      <div>
                        {k.leitungLabel}: {k.leitung}
                      </div>
                    </div>
                    <Link href={`/${k.slug}`} className="mt-3.5 inline-block text-sm font-bold text-waldgruen">
                      Zur Kita-Seite &rarr;
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
