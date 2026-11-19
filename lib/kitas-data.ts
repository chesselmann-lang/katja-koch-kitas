// Strukturiertes Datenmodell für alle vier Kitas.
//
// Stammdaten (Adresse, Telefon, E-Mail, Leitung, Träger, Kapazität,
// Altersgruppe, Betreuungszeiten) wurden von Christian als aktuell
// öffentlich bestätigte Daten übermittelt (Audit vom 30.09.2026) und gelten
// als CONFIRMED. Der Bauernhof-Tierbestand (Schatzkiste) sowie einzelne
// pädagogische Detailaussagen bleiben VERIFY, bis Katja sie final bestätigt
// — siehe CONTENT-MATRIX.md. Nicht bestätigte Einzelwerte (z. B. exakte
// Gruppenanzahl, Schließzeiten je Haus) bleiben TODO_*-Platzhalter statt
// erfunden zu werden. Siehe KATJA-FRAGEN.md für offene Punkte.

import { colors, kitaColors } from "./theme";

export type KitaSlug = "schatzkiste" | "blumenwiese" | "baumhaus" | "kinderhaus";

export type FaqItem = { q: string; a: string };

export type Provider = {
  name: string;
  address: string;
  phone?: string;
  email?: string;
};

export type KitaData = {
  slug: KitaSlug;
  name: string;
  shortName: string;
  accentColor: string;
  leitidee: string; // gestalterische Leitidee laut Konzept-Dossier
  tagline: string;
  intro: string;
  address: string; // vollständige Adresse inkl. PLZ und Stadtteil
  district: string;
  phone: string;
  email: string;
  website?: string;
  leitungLabel: string; // "Leitung" oder z. B. "Ansprechpartnerin" (Baumhaus)
  leitung: string;
  provider: Provider;
  openingHours?: string; // undefined = nicht bestätigt -> Fact-Chip wird ausgeblendet
  ageRange: string;
  capacityText: string; // z. B. "42 Plätze"
  developmentStatus?: { current: string; planned: string }; // nur Baumhaus
  hasDeepContent: boolean;
  profile: string[];
  pedagogyFocusPoints: { title: string; text: string }[];
  dailyRhythmExample: { time: string; text: string }[];
  outdoorAndRooms?: string; // undefined = Section wird ausgeblendet
  foodInfo?: string; // undefined = Section wird ausgeblendet
  faq: FaqItem[];
};

const SHARED_DAILY_RHYTHM_NOTE =
  "Der folgende Tagesablauf ist ein Beispiel und kann von Gruppe zu Gruppe abweichen. Er dient zur Orientierung, nicht als exakter Stundenplan.";

const SCHATZKISTE_BAUERNHOF_GGMBH: Provider = {
  name: "Schatzkiste Bauernhof gGmbH",
  address: "Forststraße 76, 45768 Marl",
  phone: "0178 6363724",
};

const LIN_GGMBH: Provider = {
  name: "LiN Leben in der Natur gGmbH",
  address: "Forststraße 76, 45768 Marl",
  email: "eatr@gmx.de",
};

const kitas: Record<KitaSlug, KitaData> = {
  schatzkiste: {
    slug: "schatzkiste",
    name: "Kita Schatzkiste",
    shortName: "Schatzkiste",
    accentColor: kitaColors.schatzkiste.primary,
    leitidee: "Entdecken und Schätze fürs Leben",
    tagline: "Wo Natur, Tiere und Kindheit zusammengehören.",
    intro:
      "Die Kita Schatzkiste ist der Ausgangspunkt des Natur- und Familienkonzepts von Katja Koch: Bauernhof, Tiere, Wald und Bewegung prägen den Alltag. Kinder entdecken, fragen, probieren aus und übernehmen kleine Verantwortungen im Umgang mit Tieren und Natur.",
    address: "Forststraße 76, 45768 Marl",
    district: "Brassert",
    phone: "0179 6775507",
    email: "schatzkistebauernhof@gmail.com",
    leitungLabel: "Leitung",
    leitung: "Sören Winkler",
    provider: SCHATZKISTE_BAUERNHOF_GGMBH,
    openingHours: "35-Std.-Vertrag: 08:00–15:00 Uhr · 45-Std.-Vertrag: 07:00–16:00 Uhr",
    ageRange: "ab 2 Jahren bis zum Schuleintritt",
    capacityText: "42 Plätze",
    hasDeepContent: true,
    profile: [
      "Bauernhof ist bei uns kein Dekor.",
      "Die Schatzkiste verbindet Bauernhof-Alltag mit einem festen Gruppenrhythmus: Kinder erleben Tiere, Jahreszeiten und Wetter hautnah, während drinnen Struktur, Rituale und verlässliche Bezugspersonen Sicherheit geben.",
      "Der Umgang mit den Hoftieren ist kein Streichelzoo-Erlebnis, sondern pädagogisch begleitet: Verantwortung übernehmen, Tiere respektieren, beobachten und die Herkunft von Lebensmitteln verstehen gehören genauso dazu wie Wald- und Naturzeiten.",
    ],
    pedagogyFocusPoints: [
      { title: "Bauernhof & Tiere", text: "Praktische Erfahrungen mit Pferden, Schweinen, Ziegen und Hühnern — Verantwortung statt Streichelzoo." },
      { title: "Wald & Natur", text: "Regelmäßige Zeiten draußen, an denen Kinder Natur mit allen Sinnen erleben." },
      { title: "Verlässliche Rituale", text: "Feste Tagesstruktur, die Kindern Orientierung und Sicherheit gibt." },
      { title: "Gemeinschaft", text: "Miteinander entdecken, Aufgaben teilen und gemeinsam Verantwortung übernehmen." },
    ],
    dailyRhythmExample: [
      { time: "ab 7:00", text: "Ankommen, Freispiel, gleitendes Frühstück" },
      { time: "9:00", text: "Morgenkreis, danach Wald-/Hofzeit oder Gruppenangebot" },
      { time: "12:00", text: "Gemeinsames Mittagessen" },
      { time: "12:30", text: "Ruhe- bzw. Schlafphase für die Jüngeren, Rückzugsangebote für Ältere" },
      { time: "14:30", text: "Freispiel, Nachmittagssnack, Abholphase" },
    ],
    outdoorAndRooms:
      "Zum Gelände gehören ein Bauernhaus, Natur- und Außenbereiche sowie ein Waldkindergartenwagen.",
    foodInfo: undefined,
    faq: [
      {
        q: "Gehen die Kinder bei jedem Wetter nach draußen?",
        a: "Wald- und Hofzeiten finden bei fast jedem Wetter statt — passende Kleidung ist wichtig. Bei Extremwetter (Sturm, Hitzewarnung) entscheidet das Team situativ.",
      },
      {
        q: "Welche Tiere gibt es auf dem Hof?",
        a: "Zum Bauernhof der Schatzkiste gehören Pferde, Schweine, Ziegen und Hühner. Der Kontakt ist pädagogisch begleitet: Kinder lernen Verantwortung, Respekt vor Lebewesen und Tierpflege — kein Streichelzoo-Erlebnis.",
      },
      {
        q: "Ab welchem Alter kann mein Kind aufgenommen werden und wie viele Plätze gibt es?",
        a: "Die Schatzkiste betreut Kinder ab 2 Jahren bis zum Schuleintritt und verfügt über 42 Plätze. Ob aktuell ein Platz frei ist, klärt sich über eine Anfrage.",
      },
      {
        q: "Wie sind die Betreuungszeiten?",
        a: "Im 35-Stunden-Vertrag von 08:00 bis 15:00 Uhr, im 45-Stunden-Vertrag von 07:00 bis 16:00 Uhr.",
      },
    ],
  },
  blumenwiese: {
    slug: "blumenwiese",
    name: "Kita Blumenwiese",
    shortName: "Blumenwiese",
    accentColor: kitaColors.blumenwiese.primary,
    leitidee: "Blumen, Natur und gemeinsames Wachsen",
    tagline: "Wachsen braucht Raum.",
    intro:
      "Die Kita Blumenwiese steht für Naturpädagogik, draußen lernen und gemeinsames Wachsen — eingebettet in die gemeinsame Haltung der vier Kitas von Katja Koch, mit einem eigenen, leichteren Charakter rund um Wachstum und Entwicklung. Rund 400 m² Innenfläche und etwa 3.000 m² Außengelände geben dafür viel Raum.",
    address: "Fliederstraße 2b, 45772 Marl",
    district: "Drewer-Nord",
    phone: "0179 6771081",
    email: "info-blumenwiese@skb-ggmbh.de",
    leitungLabel: "Leitung",
    leitung: "Jessica Klug, B.A. Erziehungswissenschaft",
    provider: SCHATZKISTE_BAUERNHOF_GGMBH,
    openingHours: "35-Std.-Vertrag: 08:00–15:00 Uhr · 45-Std.-Vertrag: 07:00–16:00 Uhr",
    ageRange: "ab 2 Jahren bis zum Schuleintritt",
    capacityText: "42 Plätze",
    hasDeepContent: false,
    profile: [
      "Die Blumenwiese verbindet Naturpädagogik mit einem strukturierten Alltag: draußen lernen, Natur erleben und gemeinsames Wachsen stehen im Mittelpunkt.",
      "Die Gruppenbereiche Gänseblümchen und Sonnenblumen, ein Atelier und eine Kinderküche geben dem Haus innen ebenso viel Möglichkeit zur Entfaltung wie draußen.",
    ],
    pedagogyFocusPoints: [
      { title: "Naturpädagogik", text: "Draußen lernen als fester Bestandteil des Alltags, nicht als Ausnahme." },
      { title: "Gemeinsames Wachsen", text: "Entwicklung wird als gemeinsamer Prozess von Kindern, Familien und Team verstanden." },
      { title: "Gemeinschaft", text: "Miteinander lernen, Rücksicht nehmen und Beziehungen aufbauen." },
    ],
    dailyRhythmExample: [
      { time: "ab 7:00", text: "Ankommen, Freispiel, gleitendes Frühstück" },
      { time: "9:00", text: "Morgenkreis, danach Gruppenangebote" },
      { time: "12:00", text: "Gemeinsames Mittagessen" },
      { time: "12:30", text: "Ruhephase bzw. Rückzugsangebote" },
      { time: "14:30", text: "Freispiel, Nachmittagssnack, Abholphase" },
    ],
    outdoorAndRooms:
      "Die Blumenwiese verfügt über rund 400 m² Kita-Fläche, darunter eine rund 100 m² große Mehrzweckhalle mit großer Fensterfront. Die Gruppenbereiche Gänseblümchen und Sonnenblumen werden ergänzt durch ein Atelier, eine Kinderküche, Schlafbereiche und einen Essbereich. Draußen: rund 3.000 m² Außengelände zum freien Entdecken und Bewegen.",
    foodInfo: undefined,
    faq: [
      {
        q: "Was unterscheidet die Blumenwiese von den anderen Häusern?",
        a: "Die Blumenwiese legt ihren Schwerpunkt auf Naturpädagogik, draußen lernen und gemeinsames Wachsen — auf rund 3.000 m² Außengelände.",
      },
      {
        q: "Wie viele Plätze gibt es und ab welchem Alter?",
        a: "Die Blumenwiese betreut Kinder ab 2 Jahren bis zum Schuleintritt und verfügt über 42 Plätze.",
      },
      {
        q: "Wie sind die Betreuungszeiten?",
        a: "Im 35-Stunden-Vertrag von 08:00 bis 15:00 Uhr, im 45-Stunden-Vertrag von 07:00 bis 16:00 Uhr.",
      },
    ],
  },
  baumhaus: {
    slug: "baumhaus",
    name: "Kindertagesstätte Baumhaus",
    shortName: "Baumhaus",
    accentColor: kitaColors.baumhaus.primary,
    leitidee: "Abenteuer, Natur und Entwicklung",
    tagline: "Der Wald liegt direkt vor der Tür.",
    intro:
      "Die Kindertagesstätte Baumhaus steht für Wald, Abenteuer und individuelle Entwicklung. Ein besonderer Schwerpunkt liegt auf Inklusion: Für das Baumhaus gibt es eine ausführliche inklusionspädagogische Konzeption, die Teilhabe für Kinder mit unterschiedlichen Bedürfnissen sichtbar in den Alltag einbettet.",
    address: "Merkelheider Weg 197, 45772 Marl",
    district: "Marl-Hamm",
    phone: "0178 6363724",
    email: "eatr@gmx.de",
    leitungLabel: "Ansprechpartnerin",
    leitung: "Katja Koch",
    provider: LIN_GGMBH,
    openingHours: "Bitte direkt bei der Kita erfragen",
    ageRange: "ab 2 Jahren",
    capacityText: "40 Plätze (genehmigte Kapazität)",
    developmentStatus: {
      current: "Aktuell: Übergangsgruppe / Waldgruppe.",
      planned: "Geplant: Ausbau auf zwei Gruppen — noch nicht umgesetzt, hier als Vorhaben und nicht als bestehender Zustand gekennzeichnet.",
    },
    hasDeepContent: false,
    profile: [
      "Wald, Natur und Abenteuer prägen den Alltag im Baumhaus — Kinder erproben sich, entdecken ihre Grenzen und werden dabei individuell begleitet.",
      "Ein besonderer Schwerpunkt liegt auf Inklusion: individuelle Entwicklung, Teilhabe und der Abbau von Barrieren sind fester Bestandteil der pädagogischen Konzeption. Konkrete Kooperationen mit Fachstellen werden nur genannt, sofern sie tatsächlich bestehen.",
      "Das Baumhaus befindet sich aktuell in einer Entwicklungs- und Umbauphase: Betrieb ist als Übergangs- bzw. Waldgruppe bestätigt, ein Ausbau auf zwei Gruppen ist als Vorhaben beschrieben, aber noch nicht umgesetzt.",
    ],
    pedagogyFocusPoints: [
      { title: "Wald & Abenteuer", text: "Natur als Erfahrungsraum für Mut, Ausprobieren und eigene Entdeckungen." },
      { title: "Inklusion", text: "Jedes Kind gehört dazu — individuelle Begleitung statt Gleichmacherei." },
      { title: "Individuelle Entwicklung", text: "Beobachtung und Begleitung, die sich am einzelnen Kind orientiert, nicht an starren Normen." },
    ],
    dailyRhythmExample: [
      { time: "ab 7:30", text: "Ankommen, Freispiel, gleitendes Frühstück" },
      { time: "9:00", text: "Morgenkreis, danach Wald- oder Gruppenangebot" },
      { time: "12:00", text: "Gemeinsames Mittagessen" },
      { time: "12:30", text: "Ruhephase bzw. Rückzugsangebote" },
      { time: "14:30", text: "Freispiel, Nachmittagssnack, Abholphase" },
    ],
    outdoorAndRooms: undefined,
    foodInfo: undefined,
    faq: [
      {
        q: "Was bedeutet Inklusion im Baumhaus konkret?",
        a: "Das Baumhaus verfügt über eine ausführliche inklusionspädagogische Konzeption: individuelle Begleitung, Teilhabe und der Abbau von Barrieren sind fester Bestandteil des Alltags. Konkrete Diagnosen oder Einzelfall-Leistungen werden hier nicht dargestellt.",
      },
      {
        q: "Ist das Baumhaus aktuell ein- oder zweigruppig?",
        a: "Aktuell läuft der Betrieb als Übergangs- bzw. Waldgruppe. Ein Ausbau auf zwei Gruppen ist als Vorhaben beschrieben, aber noch nicht umgesetzt — wir kennzeichnen das hier bewusst als Planung, nicht als bestehenden Zustand.",
      },
      {
        q: "Wie viele Plätze gibt es und ab welchem Alter?",
        a: "Die genehmigte Kapazität liegt bei 40 Plätzen, Aufnahme ab 2 Jahren. Aktuell läuft der Betrieb als Übergangs- bzw. Waldgruppe (siehe Entwicklungsstand oben).",
      },
    ],
  },
  kinderhaus: {
    slug: "kinderhaus",
    name: "Kita Kinderhaus",
    shortName: "Kinderhaus",
    accentColor: kitaColors.kinderhaus.primary,
    leitidee: "Gemeinschaft und Geborgenheit",
    tagline: "Eine kleine Kita mit viel Raum für Beziehung.",
    intro:
      "Die Kita Kinderhaus steht für Gemeinschaft und Geborgenheit: individuelle Begleitung, verlässliche Beziehungen und ein warmes, familiäres Miteinander prägen den Alltag der eingruppigen Einrichtung.",
    address: "Brassertstraße 45B, 45768 Marl",
    district: "Brassert",
    phone: "02365 15557",
    email: "info-kita-kinderhaus-marl@gmx.de",
    website: "kita-kinderhaus.de",
    leitungLabel: "Leitung",
    leitung: "Joanna Laskowski",
    provider: LIN_GGMBH,
    openingHours: "45-Std.-Vertrag: 07:00–16:00 Uhr",
    ageRange: "ab 2 Jahren bis zum Schuleintritt",
    capacityText: "20 Plätze",
    hasDeepContent: false,
    profile: [
      "Im Kinderhaus stehen Gemeinschaft, Geborgenheit und verlässliche Beziehungen im Mittelpunkt — ein warmes, familiäres Miteinander, in dem jedes Kind individuell begleitet wird.",
      "Als eingruppige Einrichtung mit 20 Plätzen kennt sich hier jeder: kurze Wege, viel Nähe und ein Garten, der Spiel-, Bewegungs- und Lernraum zugleich ist.",
    ],
    pedagogyFocusPoints: [
      { title: "Gemeinschaft", text: "Ein familiäres Miteinander, in dem sich Kinder zugehörig fühlen." },
      { title: "Geborgenheit", text: "Verlässliche Beziehungen als Grundlage für Vertrauen und Entwicklung." },
      { title: "Individuelle Begleitung", text: "Jedes Kind wird in seinem eigenen Tempo begleitet." },
    ],
    dailyRhythmExample: [
      { time: "ab 7:00", text: "Ankommen, Freispiel, gleitendes Frühstück" },
      { time: "9:00", text: "Morgenkreis, danach Gruppenangebote" },
      { time: "12:00", text: "Gemeinsames Mittagessen" },
      { time: "12:30", text: "Ruhephase bzw. Rückzugsangebote" },
      { time: "14:30", text: "Freispiel, Nachmittagssnack, Abholphase" },
    ],
    outdoorAndRooms:
      "Als eingruppige Einrichtung verfügt das Kinderhaus über Küche, Frühstücksecke, Kreativbereich, Leseecke, Rollenspielbereich, Baubereich sowie einen Schlaf-/Mehrzweckraum. Der Garten ist Spielraum, Bewegungsraum und Lernraum zugleich: Gemüse- und Kräuterbeete, ein Naschgarten, Sandbereich, Matschküche, Rutschturm, Fahrweg, Vogelnestschaukel, Baumstämme, eine Gartenlaube und eine überdachte Terrasse.",
    foodInfo: "Frisch gekocht im Kinderhaus.",
    faq: [
      {
        q: "Was unterscheidet das Kinderhaus von den anderen Häusern?",
        a: "Gemeinschaft und Geborgenheit stehen im Mittelpunkt — eine eingruppige, besonders familiäre Einrichtung mit 20 Plätzen.",
      },
      {
        q: "Wie sind die Betreuungszeiten?",
        a: "Im 45-Stunden-Vertrag von 07:00 bis 16:00 Uhr.",
      },
      {
        q: "Gibt es eine eigene Website des Kinderhauses?",
        a: "Ja, zusätzlich zu dieser Seite unter kita-kinderhaus.de.",
      },
    ],
  },
};

export const allKitas: KitaData[] = [
  kitas.schatzkiste,
  kitas.blumenwiese,
  kitas.baumhaus,
  kitas.kinderhaus,
];

export function getKitaData(slug: KitaSlug): KitaData {
  return kitas[slug];
}

export const dailyRhythmNote = SHARED_DAILY_RHYTHM_NOTE;
