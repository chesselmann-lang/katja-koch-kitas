export type FaqEntry = { category: string; q: string; a: string };

export const faqEntries: FaqEntry[] = [
  // Anmeldung
  { category: "Anmeldung", q: "Wie melde ich mein Kind an?", a: "Über das Formular unter „Kita-Platz anfragen“. Es handelt sich um eine unverbindliche Interessensbekundung." },
  { category: "Anmeldung", q: "Garantiert eine Anfrage einen Platz?", a: "Nein. Die Vergabe hängt von freien Kapazitäten, Alter des Kindes und weiteren Kriterien ab." },
  { category: "Anmeldung", q: "Ab wann kann ich mein Kind anmelden?", a: "Je früher, desto besser – viele Familien fragen bereits während der Schwangerschaft an." },
  { category: "Anmeldung", q: "Kann ich mich für mehrere Kitas gleichzeitig bewerben?", a: "Ja, im Anmeldeformular können Sie eine Wunschkita angeben oder „keine Präferenz“ wählen." },
  { category: "Anmeldung", q: "Was passiert nach meiner Anfrage?", a: "Wir prüfen die Angaben, laden zu einem Kennenlerntermin ein und informieren Sie über freie Plätze." },
  // Eingewöhnung
  { category: "Eingewöhnung", q: "Wie lange dauert die Eingewöhnung?", a: "Individuell verschieden, meist zwischen zwei und sechs Wochen." },
  { category: "Eingewöhnung", q: "Muss ich als Elternteil während der Eingewöhnung anwesend sein?", a: "In der Anfangsphase ja – eine vertraute Bezugsperson begleitet das Kind zunächst." },
  { category: "Eingewöhnung", q: "Was, wenn mein Kind sich schwertut?", a: "Das Tempo wird individuell angepasst – es gibt keine feste Frist, die erzwungen wird." },
  // Alltag
  { category: "Alltag", q: "Gehen die Kinder bei jedem Wetter nach draußen?", a: "Ja, sofern es kein Extremwetter ist – passende Kleidung ist wichtig." },
  { category: "Alltag", q: "Wie sieht ein normaler Tag aus?", a: "Der Beispiel-Tagesablauf ist auf jeder Kita-Seite beschrieben – er variiert je nach Gruppe." },
  { category: "Alltag", q: "Gibt es feste Ruhezeiten?", a: "Ja, für jüngere Kinder ist eine Ruhe- oder Schlafphase am frühen Nachmittag üblich." },
  { category: "Alltag", q: "Wie viele Kinder sind in einer Gruppe?", a: "Die genaue Gruppengröße je Kita wird hier ergänzt, sobald bestätigt." },
  // Verpflegung
  { category: "Verpflegung", q: "Wie läuft die Verpflegung ab?", a: "Frühstück, Mittagessen und Nachmittagssnack sind in der Regel enthalten – die Details können sich je Kita unterscheiden." },
  { category: "Verpflegung", q: "Werden Allergien berücksichtigt?", a: "Ja, Allergien und Unverträglichkeiten werden im Aufnahmegespräch erfasst." },
  // Kosten & Verwaltung
  { category: "Kosten", q: "Was kostet ein Kita-Platz?", a: "Die Kita-Beiträge richten sich nach den kommunalen Beitragssatzungen der Stadt Marl und dem Einkommen der Eltern – für genaue Beträge wenden Sie sich bitte an die zuständige Stelle der Stadt Marl bzw. an uns direkt." },
  { category: "Kosten", q: "Gibt es einen beitragsfreien Zeitraum?", a: "In NRW gibt es ein beitragsfreies letztes Kita-Jahr vor der Einschulung – die genauen Regelungen ändern sich gelegentlich, bitte im Zweifel nachfragen." },
  // Kommunikation
  { category: "Kommunikation", q: "Wie kommuniziert die Kita mit Eltern?", a: "Über persönliche Gespräche, Telefon und E-Mail." },
  { category: "Kommunikation", q: "Wie erfahre ich von Terminen und Ausflügen?", a: "Über Aushänge in der Kita sowie im persönlichen Gespräch beim Bringen und Abholen." },
  // Sicherheit & Kinderschutz
  { category: "Sicherheit", q: "Wie ist der Kinderschutz geregelt?", a: "Nach § 8a SGB VIII mit festen Verfahren, geschultem Personal und Ansprechpersonen – mehr dazu auf der Kinderschutz-Seite." },
  { category: "Sicherheit", q: "Wer darf mein Kind abholen?", a: "Nur Personen, die Sie der Kita ausdrücklich benannt haben." },
  // Sonstiges
  { category: "Sonstiges", q: "Bietet ihr auch Praktikumsplätze an?", a: "Informationen dazu finden Sie auf der Karriere-Seite." },
  { category: "Sonstiges", q: "Kann ich die Kita vorab besichtigen?", a: "Ja, über die Kontaktseite können Sie eine Besichtigung anfragen." },
  { category: "Sonstiges", q: "Was mache ich bei einer Beschwerde?", a: "Wenden Sie sich an die Kita-Leitung – mehr zum Verfahren auf der Seite „Beschwerdemanagement“." },
  // Öffnungszeiten, Plätze & Standorte (ergänzt nach verifizierten Stammdaten)
  { category: "Sonstiges", q: "Wo befinden sich die vier Kitas?", a: "Schatzkiste (Forststraße 76, Brassert), Blumenwiese (Fliederstraße 2b, Drewer-Nord), Baumhaus (Merkelheider Weg 197, Marl-Hamm) und Kinderhaus (Brassertstraße 45B, Brassert) — alle in Marl." },
  { category: "Sonstiges", q: "Wie viele Plätze haben die einzelnen Kitas?", a: "Schatzkiste und Blumenwiese je 42 Plätze, Baumhaus öffentlich mit 40 Plätzen angegeben, Kinderhaus 20 Plätze (eingruppig)." },
  { category: "Sonstiges", q: "Ab welchem Alter werden Kinder aufgenommen?", a: "In der Regel ab 2 Jahren bis zum Schuleintritt — die genaue Altersspanne je Kita steht auf der jeweiligen Kita-Seite." },
  { category: "Sonstiges", q: "Wie sind die Betreuungszeiten geregelt?", a: "Je nach Vertragsmodell 35 oder 45 Stunden pro Woche, z. B. 08:00–15:00 Uhr oder 07:00–16:00 Uhr — Details stehen auf der jeweiligen Kita-Seite." },
  { category: "Sonstiges", q: "Wer ist Trägerin der Kitas?", a: "Schatzkiste und Blumenwiese werden von der Schatzkiste Bauernhof gGmbH getragen, Baumhaus und Kinderhaus von der LiN Leben in der Natur gGmbH. Mehr dazu auf der Seite „Über uns“." },
  { category: "Sonstiges", q: "Gibt es eine offizielle Anmeldestrecke der Stadt Marl?", a: "Ja. Unser Formular ist eine unverbindliche Interessensbekundung an uns direkt; die offizielle Anmeldung läuft zusätzlich über den Kita-Navigator der Stadt Marl." },
];
