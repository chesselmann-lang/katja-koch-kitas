import Reveal from "@/components/Reveal";
import Container from "@/components/salient/Container";

export const metadata = { title: "Datenschutz | Kitas von Katja Koch", alternates: { canonical: "/datenschutz" } };

export default function DatenschutzPage() {
  return (
    <main className="section-y-sm">
      <Container narrow>
        <Reveal>
          <div className="card-salient px-7 py-9 sm:px-10">
            <h1 className="mb-5 text-3xl font-extrabold sm:text-4xl">Datenschutzerklärung</h1>
            <div className="grid gap-[18px] text-[15px] leading-relaxed text-inkSoft">
              <section>
                <h2 className="mb-2 text-[17px] font-bold text-ink">1. Verantwortliche Stellen</h2>
                <p>
                  Schatzkiste Bauernhof gGmbH (Forststraße 76, 45768 Marl) für die Kitas Schatzkiste und Blumenwiese,
                  sowie LiN Leben in der Natur gGmbH (Forststraße 76, 45768 Marl,{" "}
                  <a href="mailto:eatr@gmx.de" className="text-salbei">
                    eatr@gmx.de
                  </a>
                  ) für die Kitas Baumhaus und Kinderhaus. Einzelheiten siehe{" "}
                  <a href="/impressum" className="text-salbei">
                    Impressum
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-[17px] font-bold text-ink">2. Hosting</h2>
                <p>
                  Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der Seite werden automatisch technische
                  Zugriffsdaten (z. B. IP-Adresse, Datum/Uhrzeit, aufgerufene Seite) in Server-Logs verarbeitet, die
                  für den sicheren und stabilen Betrieb erforderlich sind (Art. 6 Abs. 1 lit. f DSGVO). Eine
                  Übermittlung in Drittländer ist im Rahmen des Hostings möglich; die Verarbeitung erfolgt im Rahmen
                  der Auftragsverarbeitung gemäß Art. 28 DSGVO auf Grundlage der Vercel Data Processing Addendum.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-[17px] font-bold text-ink">3. Content-Management (Sanity)</h2>
                <p>
                  Redaktionelle Inhalte einzelner Unterseiten werden über den Dienst Sanity verwaltet und
                  ausgeliefert. Dabei werden keine personenbezogenen Daten von Besucher:innen verarbeitet, sondern
                  ausschließlich Redaktionsinhalte.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-[17px] font-bold text-ink">4. Elternportal (Login-Bereich)</h2>
                <p>
                  Ein geschützter Elternbereich mit Login ist technisch nicht im öffentlichen Betrieb dieser Website
                  freigeschaltet. Es werden daher aktuell keine personenbezogenen Daten über diesen Kanal
                  verarbeitet.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-[17px] font-bold text-ink">5. Kontakt- und Anmeldeformular</h2>
                <p>
                  Über das Formular auf der Seite „Kita-Platz anfragen&quot; können Sie uns Kontakt- und Angaben zu
                  Ihrem Kind übermitteln (Name, E-Mail, ggf. Telefonnummer, gewünschte Kita, Geburtsmonat/-jahr des
                  Kindes, gewünschter Betreuungsbeginn, freiwillige Nachricht). Diese Angaben werden in einer
                  Datenbank unseres technischen Dienstleisters Supabase (Hosting in der EU) gespeichert und
                  ausschließlich zur Bearbeitung Ihrer Anfrage genutzt (Art. 6 Abs. 1 lit. b bzw. f DSGVO). Ein
                  öffentlicher Lesezugriff auf gespeicherte Anfragen ist technisch ausgeschlossen. Die Daten werden
                  gelöscht, sobald sie für die Bearbeitung Ihrer Anfrage nicht mehr erforderlich sind; die genaue
                  Aufbewahrungsdauer legt die jeweils verantwortliche Trägergesellschaft (siehe Ziffer 1) fest.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-[17px] font-bold text-ink">6. Cookies und Analyse-Tools</h2>
                <p>
                  Diese Website nutzt Vercel Web Analytics, ein cookieloses, aggregiertes Reichweiten-Messverfahren
                  unseres Hosting-Anbieters Vercel Inc. Es werden dabei keine Cookies gesetzt und keine
                  personenbezogenen Profile einzelner Besucher:innen gebildet (Art. 6 Abs. 1 lit. f DSGVO). Weitere
                  Tracking- oder Werbe-Tools (z. B. Google Analytics) sowie nicht-technisch notwendige Cookies setzen
                  wir aktuell nicht ein. Sollte sich das ändern, wird vorab ein Cookie-Consent-Banner eingebunden und
                  diese Erklärung entsprechend aktualisiert.
                </p>
              </section>

              <section>
                <h2 className="mb-2 text-[17px] font-bold text-ink">7. Ihre Rechte</h2>
                <p>
                  Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer
                  Daten sowie ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde.
                </p>
              </section>
            </div>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}
