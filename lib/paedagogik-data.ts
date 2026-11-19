// Allgemeine pädagogische Themenseiten — bewusst generisch und fachlich fundiert
// gehalten (Bildungsgrundsätze NRW, gängige Fachstandards), ohne hausspezifische
// Fakten zu erfinden. Hausspezifische Ergänzungen stehen als TODO in den
// jeweiligen Kita-Seiten. `theme` steuert das illustrative Bild (Visual.tsx)
// und `serious` markiert Themen, die bewusst ruhiger/zurückhaltender gestaltet
// werden (kein verspieltes Muster, gedeckte Fläche) statt mit Natur-Illustration.

import type { VisualTheme } from "@/components/Visual";

export type PaedagogikTopic = {
  slug: string;
  title: string;
  teaser: string;
  theme: VisualTheme;
  serious?: boolean;
  body: string[];
};

export const paedagogikTopics: PaedagogikTopic[] = [
  {
    slug: "bild-vom-kind",
    title: "Unser Bild vom Kind",
    teaser: "Die Grundhaltung, die sich durch alle vier Kitas zieht.",
    theme: "kind",
    body: [
      "Kinder entwickeln sich unterschiedlich — in ihrem eigenen Tempo, mit ihren eigenen Stärken und Themen. Ein Kind darf deshalb nicht vorschnell anhand eines momentanen Entwicklungsstandes festgelegt werden.",
      "Entwicklung braucht Zeit, Vertrauen, verlässliche Beziehungen, Ermutigung, eigene Erfahrungen, Freiraum, Orientierung und familiären Rückhalt. Diese Haltung zeigt sich im Alltag ganz konkret: wenn ein Kind für eine Aufgabe länger braucht und dafür Raum bekommt statt Druck; wenn ein zurückhaltendes Kind erst beobachten darf, bevor es mitmacht; wenn Fehler als Teil des Lernens gelten, nicht als Makel.",
      "Diese Grundhaltung ist keine abstrakte Floskel, sondern die Linse, durch die pädagogische Fachkräfte in allen vier Häusern jeden Tag aufs Neue hinschauen.",
    ],
  },
  {
    slug: "inklusion",
    title: "Jedes Kind gehört dazu",
    teaser: "Inklusion als gelebter Alltag, besonders ausgeprägt im Baumhaus.",
    theme: "wald",
    body: [
      "Inklusion bedeutet, dass Kinder mit unterschiedlichen Voraussetzungen und Bedürfnissen gemeinsam aufwachsen — mit individueller Begleitung statt Gleichmacherei. Teilhabe und der Abbau von Barrieren sind dabei zentrale Leitgedanken.",
      "In der Kita Baumhaus wird dieser Ansatz besonders ausführlich gelebt: individuelle Entwicklung wird genau beobachtet und begleitet, die Zusammenarbeit mit Familien ist eng, und wo tatsächlich Kooperationen mit externen Fachstellen bestehen, fließen sie in die Begleitung ein.",
      "Was hier bewusst nicht dargestellt wird: konkrete Diagnosen, Einzelfallverläufe oder Leistungen, die wir nicht zusichern können. Inklusion zeigt sich im Alltag — nicht in Aktenvermerken.",
    ],
  },
  {
    slug: "tiere-bauernhof",
    title: "Tiere & Bauernhof",
    teaser: "Praktische Erfahrungen statt Streichelzoo — besonders in der Schatzkiste.",
    theme: "bauernhof",
    body: [
      "Der Bauernhof der Kita Schatzkiste ist kein dekoratives Element, sondern ein pädagogischer Erfahrungsraum. Laut Konzept gehören Pferde, Schweine, Ziegen und Hühner dazu.",
      "Im Umgang mit den Tieren lernen Kinder Verantwortung: füttern, beobachten, Rücksicht nehmen. Sie erleben natürliche Kreisläufe und bekommen ein Gefühl dafür, woher Lebensmittel eigentlich kommen — vom Ei bis zur Wolle.",
      "Tierpflege wird dabei immer altersgerecht und unter Begleitung durch Fachkräfte gestaltet, nie unbeaufsichtigt. Respekt vor dem Lebewesen steht über dem reinen Erlebnisfaktor.",
    ],
  },
  {
    slug: "eingewoehnung",
    title: "Eingewöhnung",
    teaser: "Wie der Start in die Kita gelingt.",
    theme: "alltag",
    body: [
      "Die Eingewöhnung ist der behutsame Übergang von der Betreuung zu Hause in den Kita-Alltag. Viele Einrichtungen orientieren sich am Berliner Eingewöhnungsmodell: In einer Grundphase kommt das Kind gemeinsam mit einer vertrauten Bezugsperson für kurze, feste Zeiten in die Gruppe.",
      "Nach einigen Tagen folgt ein erster, kurzer Trennungsversuch. Reagiert das Kind stabil, werden die Zeiten ohne Bezugsperson schrittweise verlängert. Reagiert es sehr unruhig, wird das Tempo angepasst.",
      "Die Dauer variiert von Kind zu Kind — zwischen rund zwei und sechs Wochen sind üblich. Wichtig ist durchgehend: ein fester Ansprechpartner in der Gruppe, viel Geduld und enger Austausch mit den Eltern.",
      "Eine Checkliste für den Start: bequeme, wetterfeste Kleidung zum Wechseln, ein vertrautes Übergangsobjekt (Kuscheltier, Schnuller), realistische Zeitplanung ohne Termindruck in den ersten Wochen, und die Bereitschaft, kurzfristig erreichbar zu sein.",
    ],
  },
  {
    slug: "verpflegung",
    title: "Verpflegung",
    teaser: "Essen, Trinken und Allergiemanagement im Kita-Alltag.",
    theme: "kinderhaus",
    body: [
      "Zur Verpflegung gehören in der Regel ein gemeinsames Frühstück, ein warmes Mittagessen und ein Nachmittagssnack. Getränke (meist Wasser und ungesüßter Tee) stehen ganztägig zur Verfügung.",
      "Allergien, Unverträglichkeiten und religiös bedingte Essgewohnheiten werden im Aufnahmegespräch erfasst und in der Essensplanung berücksichtigt.",
      "Ob eine Einrichtung selbst kocht oder von einem Caterer beliefert wird, ob Bio-Ware verwendet wird und wie mit Zucker und stark verarbeiteten Produkten umgegangen wird, unterscheidet sich von Haus zu Haus.",
    ],
  },
  {
    slug: "kinderschutz",
    title: "Kinderschutz",
    teaser: "Wie der gesetzliche Schutzauftrag umgesetzt wird.",
    theme: "dunkel",
    serious: true,
    body: [
      "Der Schutzauftrag bei Kindeswohlgefährdung ist in § 8a SGB VIII gesetzlich geregelt. Kitas müssen über ein Verfahren verfügen, wie sie bei Anhaltspunkten für eine Gefährdung vorgehen — von der kollegialen Einschätzung bis zur Einbindung einer insoweit erfahrenen Fachkraft.",
      "Dazu gehören in der Regel ein Schutzkonzept, geschultes Personal, feste Ansprechpersonen und ein Beschwerdeverfahren, das auch Kindern selbst zugänglich ist.",
      "Konkrete Ansprechpersonen und das vollständige Schutzkonzept der jeweiligen Kita werden hier ergänzt, sobald sie final abgestimmt sind.",
    ],
  },
  {
    slug: "kinderrechte-partizipation",
    title: "Kinderrechte & Partizipation",
    teaser: "Wie Kinder im Alltag mitbestimmen.",
    theme: "kind",
    body: [
      "Partizipation bedeutet, Kinder altersgerecht an Entscheidungen zu beteiligen, die sie betreffen — etwa bei der Gestaltung des Freispiels, der Raumgestaltung oder kleinen Konflikten.",
      "Die UN-Kinderrechtskonvention und die Bildungsgrundsätze NRW bilden dafür den rechtlichen und fachlichen Rahmen. Konkrete Beteiligungsformen (Kinderkonferenzen, Abstimmungen, Wahlämter) werden je nach Haus unterschiedlich gelebt.",
    ],
  },
  {
    slug: "beschwerdemanagement",
    title: "Beschwerdemanagement",
    teaser: "Wie Anliegen von Kindern und Eltern aufgenommen werden.",
    theme: "raeume",
    body: [
      "Ein strukturiertes Beschwerdemanagement stellt sicher, dass Anliegen von Kindern und Eltern gehört, dokumentiert und bearbeitet werden — nicht nur informell zwischen Tür und Angel.",
      "Dazu gehören klare Ansprechpersonen, ein transparenter Ablauf und die Rückmeldung, was mit einer Beschwerde passiert ist.",
    ],
  },
  {
    slug: "vorschule",
    title: "Vorschule & Übergang zur Grundschule",
    teaser: "Wie der letzte Kita-Jahrgang auf die Schule vorbereitet wird.",
    theme: "team",
    body: [
      "Im letzten Kita-Jahr vor der Einschulung liegt ein zusätzlicher Fokus auf Selbstständigkeit, Konzentration und ersten schriftsprachlichen sowie mathematischen Erfahrungen — spielerisch, nicht als Vorwegnahme des Schulunterrichts.",
      "Viele Einrichtungen kooperieren mit örtlichen Grundschulen für gemeinsame Kennenlerntage. Konkrete Kooperationspartner werden hier ergänzt, sobald bestätigt.",
    ],
  },
  {
    slug: "bewegung-und-sprache",
    title: "Bewegung & Sprachliche Bildung",
    teaser: "Zwei zentrale Bausteine früher Bildung.",
    theme: "garten",
    body: [
      "Bewegung fördert nicht nur die Motorik, sondern auch Konzentration und Selbstvertrauen — deshalb hat freies Spiel und Bewegung im Alltag viel Raum.",
      "Sprachliche Bildung findet durchgängig statt: in Gesprächen, beim Vorlesen, in Reimen und Liedern — nicht nur in gezielten Förderangeboten.",
    ],
  },
  {
    slug: "natur",
    title: "Natur & Jahreszeiten",
    teaser: "Warum draußen ein fester Teil des Alltags ist, nicht die Ausnahme.",
    theme: "natur",
    body: [
      "Naturpädagogik bedeutet regelmäßigen, nicht nur gelegentlichen Aufenthalt im Freien — bei fast jedem Wetter, mit wetterfester Kleidung statt Schönwetter-Programm. Draußen erleben Kinder Jahreszeiten unmittelbar: Matsch im Herbst, Frost im Winter, erste Knospen im Frühling, Wärme und Wachstum im Sommer.",
      "Wald, Wiese, Garten und Hof sind dabei kein Ausflugsziel, sondern ein eigener Lernraum: Kinder balancieren auf Baumstämmen, beobachten Insekten, sammeln Naturmaterial und erfahren am eigenen Körper, wie sich Wetter und Boden verändern.",
      "Naturerfahrung fördert motorische Sicherheit, Risikokompetenz und Konzentration — Kinder, die regelmäßig draußen sind, lernen nachweislich, ihre eigenen Fähigkeiten realistischer einzuschätzen.",
      "Konkrete Waldtage, Kooperationspartner und saisonale Projekte unterscheiden sich von Haus zu Haus — Details stehen auf den jeweiligen Kita-Seiten, sobald final bestätigt.",
    ],
  },
  {
    slug: "raeume",
    title: "Räume als dritter Erzieher",
    teaser: "Wie Raumgestaltung das Spielen und Lernen mitprägt.",
    theme: "raeume",
    body: [
      "In der Reggio-Pädagogik gilt der Raum als „dritter Erzieher“: Eine durchdachte Raumgestaltung regt zum eigenständigen Spielen, Forschen und Rückzug an, ohne dass eine Fachkraft ständig anleiten muss.",
      "Dazu gehören klar erkennbare Funktionsbereiche (Bauecke, Rollenspiel, Rückzug, kreatives Gestalten), Materialien in Kinderhöhe, wechselnde Impulse und ausreichend Platz für Bewegung ebenso wie für Ruhe.",
      "Räume werden außerdem regelmäßig an die Interessen und die Entwicklung der jeweiligen Gruppe angepasst — ein Raum, der nach demselben Muster bleibt, bildet die Kinder nicht mehr ab, die gerade darin spielen.",
      "Wie die Räume in den einzelnen Häusern konkret aufgeteilt sind, zeigen die jeweiligen Kita-Seiten unter „Räume & Außengelände“.",
    ],
  },
];

export function getPaedagogikTopic(slug: string) {
  return paedagogikTopics.find((t) => t.slug === slug);
}
