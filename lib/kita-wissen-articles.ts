// Vollständig ausgearbeitete, redaktionelle Artikel für den Wissensbereich
// "Kita-Wissen". Inhaltlich handelt es sich um allgemeines frühpädagogisches
// Fachwissen (Eingewöhnungsmodelle, Entwicklungspsychologie, Naturpädagogik,
// Elternarbeit) — nicht um Tatsachenbehauptungen über eine der vier
// konkreten Kitas von Katja Koch. Wo ein Artikel auf die eigene Praxis
// verweisen könnte, bleibt die Formulierung bewusst allgemein.

import type { KitaWissenCategory } from "./kita-wissen-data";

export type KitaWissenSection = {
  heading?: string;
  paragraphs: string[];
};

export type KitaWissenArticle = {
  slug: string;
  title: string;
  category: KitaWissenCategory;
  teaser: string;
  status: "published";
  sections: KitaWissenSection[];
};

export const kitaWissenArticles: KitaWissenArticle[] = [
  {
    slug: "eingewoehnung-start-in-die-kita",
    title: "Eingewöhnung: Wie der Start in die Kita gelingt",
    category: "Eingewöhnung",
    teaser:
      "Der Einstieg in die Kita ist für Kinder und Eltern ein großer Schritt. Mit Zeit, einer verlässlichen Bezugsperson und einem klaren Ablauf gelingt er leichter, als viele Familien zunächst denken.",
    status: "published",
    sections: [
      {
        paragraphs: [
          "Für ein Kind ist die Kita zu Beginn eine völlig neue Welt: neue Räume, neue Gerüche, neue Gesichter, neue Geräusche – und zum ersten Mal längere Zeit ohne die vertrauten Eltern. Eingewöhnung bedeutet, diesen Übergang nicht abrupt, sondern Schritt für Schritt zu gestalten, damit das Kind Sicherheit in der neuen Umgebung aufbauen kann, bevor es dort wirklich allein zurechtkommen muss.",
          "Viele Einrichtungen orientieren sich dabei – in eigenen Varianten – an Grundgedanken, die unter dem Begriff des Berliner Eingewöhnungsmodells bekannt geworden sind. Das Modell beschreibt keine starre Checkliste, sondern eine Haltung: Das Kind bestimmt mit seinem Verhalten das Tempo, nicht der Kalender.",
        ],
      },
      {
        heading: "Die Grundphase: gemeinsam ankommen",
        paragraphs: [
          "In den ersten Tagen kommt eine vertraute Bezugsperson – meist Mutter oder Vater – gemeinsam mit dem Kind für kurze, feste Zeiten in die Gruppe, oft nicht länger als ein bis zwei Stunden. Es wird noch nicht getrennt. Die Bezugsperson verhält sich dabei eher zurückhaltend: Sie ist präsent und ansprechbar, drängt das Kind aber nicht zum Spielen und mischt sich nicht ständig ein.",
          "In dieser Zeit beobachtet die pädagogische Fachkraft, nähert sich behutsam an, bietet erste kleine Kontakte an und lässt dem Kind die Entscheidung, wann es von sich aus Interesse zeigt. Ziel der Grundphase ist, dass sich zwischen Kind und Fachkraft eine erste, vorsichtige Vertrautheit entwickeln kann, während die eigentliche Sicherheit noch von der mitgebrachten Bezugsperson ausgeht.",
        ],
      },
      {
        heading: "Der erste Trennungsversuch",
        paragraphs: [
          "Nach einigen Tagen – die genaue Dauer ist individuell und hängt vom Kind ab – steht der erste kurze Trennungsversuch an: Die Bezugsperson verabschiedet sich bewusst und verlässt für wenige Minuten den Raum, bleibt aber in der Nähe erreichbar. Wie das Kind darauf reagiert, ist die wichtigste Information der gesamten Eingewöhnung.",
          "Lässt sich ein Kind von der Fachkraft trösten, findet zurück ins Spiel und wirkt insgesamt stabil, kann die Trennungszeit in den folgenden Tagen schrittweise verlängert werden. Reagiert ein Kind dagegen sehr unruhig, lässt sich kaum beruhigen oder wirkt über längere Zeit überfordert, ist das kein Rückschritt, sondern ein wichtiges Signal: Das Tempo wird dann verlangsamt, und der nächste Trennungsversuch folgt erst, wenn das Kind dafür bereit ist.",
        ],
      },
      {
        heading: "Woran Eltern merken, dass es passt",
        paragraphs: [
          "Eine gelingende Eingewöhnung zeigt sich nicht daran, dass ein Kind nie weint – Abschiedsschmerz ist normal und kein Zeichen, dass etwas falsch läuft. Entscheidender sind andere Signale: Lässt sich das Kind nach kurzer Zeit von der Fachkraft trösten? Findet es zurück ins Spiel? Nimmt es Kontakt zu anderen Kindern auf? Schläft und isst es im Kita-Alltag zunehmend normal? Freut es sich – nach einer gewissen Zeit – wieder auf die Kita oder geht zumindest zunehmend entspannter mit hin?",
          "Auch der Abschluss der Eingewöhnung wird gemeinsam eingeschätzt: Erst wenn das Kind eine verlässliche Bindung zu mindestens einer Fachkraft aufgebaut hat und sich auch in schwierigen Momenten – etwa beim Hinfallen oder bei Müdigkeit – von ihr trösten lässt, gilt die Eingewöhnung als stabil.",
        ],
      },
      {
        heading: "Was Eltern in dieser Zeit erwarten können",
        paragraphs: [
          "Eingewöhnung braucht Zeit – häufig mehrere Wochen – und sie braucht Eltern, die in dieser Phase selbst gut erreichbar und zeitlich flexibel sind, etwa um ein Kind bei Bedarf früher abzuholen. Ein offener, regelmäßiger Austausch zwischen Familie und Fachkräften gehört ebenso dazu: Wie hat das Kind reagiert, was hat geholfen, was braucht es als Nächstes.",
          "Es ist normal, dass sich Eingewöhnungen nicht exakt an einen Plan halten – manche Kinder brauchen weniger Zeit, andere deutlich mehr, und auch Geschwisterkinder verlaufen oft ganz unterschiedlich. Entscheidend ist nicht die Geschwindigkeit, sondern dass das Kind am Ende das Gefühl hat: Hier bin ich sicher, auch wenn meine Eltern gerade nicht da sind.",
        ],
      },
    ],
  },
  {
    slug: "was-muss-in-die-kita-tasche",
    title: "Was muss in die Kita-Tasche?",
    category: "Eltern",
    teaser:
      "Wechselkleidung, Wetterschutz, ein Vesper – die Kita-Tasche will gut durchdacht sein. Eine allgemeine Orientierung, was in den meisten Einrichtungen sinnvoll ist, ersetzt aber nie die genaue Packliste der jeweiligen Kita.",
    status: "published",
    sections: [
      {
        paragraphs: [
          "Jede Kita hat ihre eigenen Abläufe, und die genauen Vorgaben zur Kita-Tasche sollten Eltern immer direkt bei der jeweiligen Einrichtung erfragen. Trotzdem gibt es einige Dinge, die in fast jeder Kita sinnvoll oder sogar notwendig sind – vor allem, weil Kinder draußen und drinnen viel in Bewegung sind, matschen, klettern und auch mal etwas verschütten.",
        ],
      },
      {
        heading: "Wechselkleidung – und zwar reichlich",
        paragraphs: [
          "Ein komplettes Wechselset gehört in jede Kita-Tasche: Unterwäsche, Socken, eine Hose und ein Oberteil. Kleinere Kinder, die noch nicht trocken sind oder gerade erst sauber werden, brauchen oft mehr als ein Set, da nasse oder verschmutzte Kleidung schneller aufgebraucht ist, als man denkt.",
          "Praktisch ist es, die Wechselkleidung in einem eigenen Beutel griffbereit zu halten und regelmäßig zu kontrollieren, ob noch alles passt – Kinder wachsen schnell, und eine zu kleine Ersatzhose nützt im Ernstfall wenig.",
        ],
      },
      {
        heading: "Wetterschutz für jede Jahreszeit",
        paragraphs: [
          "Viele Kitas verbringen einen großen Teil des Tages draußen, bei fast jedem Wetter. Im Herbst und Winter gehören daher wasserdichte Matschhose und -jacke, feste Gummistiefel und bei Kälte zusätzlich Mütze, Schal oder Halstuch und warme Handschuhe dazu. Im Sommer sind stattdessen Sonnenhut oder Schirmmütze, leichte, luftige Kleidung und – je nach Kita-Regelung – bereits aufgetragener Sonnenschutz wichtig.",
          "Auch für den Übergang lohnt sich ein Blick in die Tasche: Ein dünner Pullover oder eine leichte Jacke helfen, wenn das Wetter morgens und mittags unterschiedlich ausfällt.",
        ],
      },
      {
        heading: "Vesper, Trinkflasche und kleine Helfer",
        paragraphs: [
          "Ob und was an Essen mitgebracht werden muss, hängt stark von der jeweiligen Kita ab – manche Einrichtungen bieten ein eigenes Frühstücks- oder Mittagsangebot, andere erwarten ein mitgebrachtes Vesper. Eine robuste, auslaufsichere Trinkflasche ist dagegen fast überall sinnvoll, ebenso eine Brotdose, die sich leicht öffnen und reinigen lässt.",
          "Für Krippenkinder kommen je nach Alter und Kita-Vorgabe oft noch Schnuller, ein vertrautes Kuscheltier für die Ruhephase, Windeln und Feuchttücher hinzu. Auch hier gilt: Die genaue Liste gibt die Kita vor, nicht umgekehrt.",
        ],
      },
      {
        heading: "Beschriftung spart Nerven",
        paragraphs: [
          "So banal es klingt: Name in Kleidung, Schuhen und Trinkflasche zu schreiben, erspart Familien und Fachkräften viel Sucherei. Gerade bei ähnlichen Matschhosen oder Gummistiefeln in Gruppengröße hilft eine klare Beschriftung, Verwechslungen zu vermeiden – am besten mit wasserfestem Stift oder Bügeletiketten, damit die Beschriftung auch nach mehreren Wäschen lesbar bleibt.",
          "Ein regelmäßiger Blick in das Fach oder die Tasche des Kindes – etwa einmal pro Woche – hilft außerdem, fehlende oder zu kleine Kleidungsstücke früh zu bemerken, statt erst, wenn sie gerade gebraucht werden.",
        ],
      },
    ],
  },
  {
    slug: "warum-spielen-lernen-ist",
    title: "Warum Spielen Lernen ist",
    category: "Entwicklung",
    teaser:
      "Freies Spiel sieht für Erwachsene oft wie reiner Zeitvertreib aus. Tatsächlich steckt darin ein Großteil dessen, was Kinder in den ersten Lebensjahren lernen – von Bewegung über Sprache bis zum Lösen von Konflikten.",
    status: "published",
    sections: [
      {
        paragraphs: [
          "Wenn ein Kind stundenlang Bauklötze stapelt, mit einem Kochtopf Suppe kocht oder im Sandkasten Straßen für Spielzeugautos baut, wirkt das für Außenstehende oft wie bloße Beschäftigung. Aus entwicklungspsychologischer Sicht ist freies Spiel jedoch eine der wichtigsten Lernformen überhaupt – vielleicht die wichtigste in den ersten Lebensjahren.",
          "Anders als beim gezielten Üben einer Fertigkeit entscheidet beim freien Spiel das Kind selbst, was es tut, wie lange und mit welchem Ziel. Genau diese Selbstbestimmung macht das Spiel so wirksam: Kinder bleiben bei dem, was sie wirklich interessiert, und genau dort findet das intensivste Lernen statt.",
        ],
      },
      {
        heading: "Bewegung und Körpergefühl",
        paragraphs: [
          "Klettern, Balancieren, Rennen, Springen – im Spiel erproben Kinder ständig, was ihr Körper kann. Sie lernen, ihre Kraft einzuschätzen, ihr Gleichgewicht zu halten und Bewegungen aufeinander abzustimmen. Diese motorischen Erfahrungen sind keine Nebensache, sondern eine wichtige Grundlage für spätere Fähigkeiten wie Schreiben, Sport oder einfach ein sicheres Bewegen im Alltag.",
        ],
      },
      {
        heading: "Fantasie und Problemlösen",
        paragraphs: [
          "Im Rollenspiel – wenn ein Kind Arzt, Verkäuferin oder Pirat spielt – übt es, Perspektiven zu wechseln und sich in andere hineinzudenken. Es probiert Rollen und Situationen aus, die im echten Leben noch nicht möglich oder zu riskant wären, und verarbeitet dabei oft auch eigene Erlebnisse.",
          "Baut ein Kind einen Turm, der immer wieder einstürzt, erlebt es nebenbei etwas sehr Grundlegendes: Ausprobieren, Scheitern, Anpassen, noch einmal versuchen. Diese Form des Problemlösens – ganz ohne erklärende Erwachsene – stärkt Ausdauer und die Erfahrung, selbst etwas bewirken zu können.",
        ],
      },
      {
        heading: "Sprache und soziales Lernen",
        paragraphs: [
          "Spielen Kinder miteinander, müssen sie sich verständigen: Wer übernimmt welche Rolle, wessen Idee wird zuerst umgesetzt, was passiert, wenn jemand anderer Meinung ist. Dabei entstehen ganz nebenbei neue Wörter, neue Satzstrukturen und die Erfahrung, wie Aushandeln funktioniert.",
          "Konflikte gehören dazu – etwa, wenn zwei Kinder dieselbe Schaufel wollen. Statt solche Situationen nur zu verhindern, bieten sie eine wertvolle Gelegenheit, erste eigene Lösungen zu finden, oft mit behutsamer Begleitung durch eine Fachkraft im Hintergrund.",
        ],
      },
      {
        heading: "Warum nicht jede Minute angeleitet sein muss",
        paragraphs: [
          "Erwachsene neigen manchmal dazu, Spielzeit möglichst sinnvoll zu lenken – mit Erklärungen, Angeboten oder gut gemeinten Korrekturen. Dabei braucht kindliches Lernen auch ungestörte Zeit, in der ein Kind selbst entscheidet, was als Nächstes passiert, ohne dass jeder Schritt bewertet oder optimiert wird.",
          "Freies Spiel ersetzt deshalb keine gezielten pädagogischen Angebote, ergänzt sie aber auf eine Weise, die sich kaum durch etwas anderes herstellen lässt: Es ist der Raum, in dem Kinder das, was sie an anderer Stelle erleben, in ihrem eigenen Tempo verarbeiten und festigen.",
        ],
      },
    ],
  },
  {
    slug: "wald-und-natur-was-kinder-draussen-lernen",
    title: "Wald und Natur: Was Kinder draußen lernen",
    category: "Wald",
    teaser:
      "Unebener Boden, Wind, Matsch und Tiere: Draußen in der Natur machen Kinder Erfahrungen, die ein Spielplatz oder ein Gruppenraum kaum ersetzen kann – von Bewegung bis zur eigenen Risikoeinschätzung.",
    status: "published",
    sections: [
      {
        paragraphs: [
          "Ein Waldboden ist nie gleich: Wurzeln, Steine, Pfützen, Hügel und Äste verändern sich mit jedem Schritt und jeder Jahreszeit. Für Kinder ist das ein völlig anderer Erfahrungsraum als ein ebener Spielplatz oder ein Gruppenraum mit glattem Boden – und genau diese Unregelmäßigkeit macht die Natur pädagogisch so wertvoll.",
        ],
      },
      {
        heading: "Bewegung auf echtem Terrain",
        paragraphs: [
          "Über einen umgestürzten Baumstamm balancieren, einen Hang hochklettern, über eine Pfütze springen oder durch dichtes Unterholz gehen – all das fordert Gleichgewicht, Kraft und Körperkontrolle auf eine Weise, die genormte Spielgeräte selten bieten. Kinder müssen sich bei jedem Schritt neu auf den Untergrund einstellen, was Koordination und Körperwahrnehmung besonders intensiv trainiert.",
        ],
      },
      {
        heading: "Risikokompetenz: kleine Gefahren selbst einschätzen",
        paragraphs: [
          "In der Natur begegnen Kinder überschaubaren, altersgerechten Risiken: ein rutschiger Abhang, ein wackliger Ast, ein tiefer Schlammbereich. Unter aufmerksamer Begleitung durch Erwachsene lernen sie dabei etwas Wichtiges, das sich nicht einfach erklären lässt: die eigene Kraft, das eigene Können und die eigenen Grenzen realistisch einzuschätzen.",
          "Diese Fähigkeit – oft als Risikokompetenz bezeichnet – schützt Kinder langfristig besser als ständiges Vermeiden jeder kleinen Gefahr. Wer nie geübt hat, einen Hang vorsichtig hinunterzugehen, hat es später schwerer, Gefahren überhaupt richtig einzuschätzen.",
        ],
      },
      {
        heading: "Sinneserfahrungen mit allen Sinnen",
        paragraphs: [
          "Der Geruch von feuchter Erde nach dem Regen, das Rascheln von Laub, die unterschiedliche Rinde verschiedener Bäume, der Temperaturunterschied zwischen Sonne und Schatten: Draußen gibt es ständig etwas zu riechen, zu hören, zu fühlen und zu beobachten. Diese Vielfalt an Sinneseindrücken lässt sich drinnen kaum künstlich herstellen.",
          "Jahreszeiten erleben Kinder in der Natur nicht abstrakt, sondern unmittelbar: wie sich Blätter verfärben und fallen, wie aus Knospen im Frühling neue Blätter werden, wie sich Temperatur und Licht über das Jahr verändern.",
        ],
      },
      {
        heading: "Konzentration und Ruhe",
        paragraphs: [
          "Wer ein Insekt beim Krabbeln beobachtet oder eine Weile einem Vogel zuhört, übt dabei still und nebenbei etwas, das sich gezielt kaum vermitteln lässt: aufmerksame Konzentration auf eine Sache. Studien zur Wirkung von Naturerfahrung deuten darauf hin, dass Zeit im Grünen helfen kann, zur Ruhe zu kommen und sich besser zu konzentrieren – ein Effekt, der nach einer bewegten Vormittagszeit draußen oft auch im weiteren Kita-Alltag spürbar wird.",
          "Nicht zuletzt lernen Kinder im Wald und in der Natur einen respektvollen Umgang mit Lebewesen und Umwelt: Pflanzen nicht einfach zertrampeln, Tiere nicht erschrecken, Müll nicht liegen lassen. Dieser Respekt entsteht nicht durch Belehrung, sondern durch wiederholte, selbst erlebte Naturbegegnungen.",
        ],
      },
    ],
  },
  {
    slug: "gute-zusammenarbeit-zwischen-kita-und-eltern",
    title: "Gute Zusammenarbeit zwischen Kita und Eltern",
    category: "Eltern",
    teaser:
      "Eltern kennen ihr Kind anders als pädagogische Fachkräfte. Wenn beide Seiten im Gespräch bleiben und sich als Team verstehen, profitiert davon vor allem eines: das Kind selbst.",
    status: "published",
    sections: [
      {
        paragraphs: [
          "Eine Kita kann noch so gut ausgestattet sein – ohne eine funktionierende Zusammenarbeit mit den Eltern bleibt pädagogische Arbeit unvollständig. Eltern bringen Wissen über ihr Kind mit, das keine Fachkraft in wenigen Betreuungsstunden erfassen kann: Gewohnheiten, familiäre Hintergründe, besondere Vorlieben oder aktuelle Entwicklungen zu Hause. Fachkräfte wiederum sehen das Kind in einem anderen Kontext – in der Gruppe, im Vergleich mit Gleichaltrigen, in Situationen ohne die eigenen Eltern. Erst im Austausch beider Perspektiven entsteht ein vollständigeres Bild.",
        ],
      },
      {
        heading: "Kommunikation, die trägt",
        paragraphs: [
          "Gute Zusammenarbeit beginnt oft mit kleinen, alltäglichen Gesprächen: beim Bringen oder Abholen kurz erzählen, wie die Nacht war, ob etwas Besonderes anstand, oder wie der Tag in der Kita gelaufen ist. Solche kurzen Übergaben wirken unscheinbar, sind aber die Grundlage für größeres Vertrauen.",
          "Darüber hinaus gehören strukturierte Formate dazu, etwa regelmäßige Entwicklungsgespräche, Elternabende oder schriftliche Informationen zu Abläufen und Projekten. Wichtig ist dabei weniger die Form als die Haltung: offen, wertschätzend und auch dann ehrlich, wenn eine Rückmeldung nicht nur positiv ausfällt.",
        ],
      },
      {
        heading: "Vertrauen wächst auf beiden Seiten",
        paragraphs: [
          "Eltern, die ihr Kind morgens in fremde Hände geben, brauchen das Gefühl, gut informiert und ernst genommen zu werden. Fachkräfte wiederum arbeiten entspannter und wirksamer, wenn sie erleben, dass Eltern ihre pädagogischen Entscheidungen grundsätzlich mittragen, auch wenn nicht jede Einzelheit sofort einleuchtet.",
          "Dieses Vertrauen entsteht nicht auf Knopfdruck, sondern über Zeit – durch verlässliche Absprachen, nachvollziehbare Erklärungen und die Erfahrung, dass Anliegen von beiden Seiten ernst genommen werden.",
        ],
      },
      {
        heading: "Was Eltern von der Kita erwarten können",
        paragraphs: [
          "Dazu gehört in der Regel: verständliche Informationen über den Alltag und die pädagogische Arbeit, Ansprechbarkeit bei Fragen oder Sorgen, Transparenz bei Entscheidungen, die das eigene Kind betreffen, und ein respektvoller Umgang auch in schwierigen Situationen, etwa bei Konflikten in der Gruppe.",
          "Eltern dürfen zudem erwarten, dass Beobachtungen zur Entwicklung ihres Kindes nachvollziehbar und ohne vorschnelle Bewertung mitgeteilt werden – als Grundlage für ein gemeinsames Gespräch, nicht als fertiges Urteil.",
        ],
      },
      {
        heading: "Was die Kita umgekehrt von Eltern erwarten darf",
        paragraphs: [
          "Zusammenarbeit ist keine Einbahnstraße. Fachkräfte sind auf verlässliche Absprachen angewiesen – etwa bei Abholzeiten, Krankmeldungen oder wichtigen Veränderungen im familiären Alltag, die das Verhalten des Kindes beeinflussen können. Ebenso hilfreich ist es, pädagogische Entscheidungen zunächst im Gespräch zu klären, statt sie vorschnell infrage zu stellen.",
          "Am Ende profitieren Kinder am meisten, wenn sie erleben, dass die wichtigsten Erwachsenen in ihrem Leben – Eltern und Fachkräfte – nicht gegeneinander, sondern miteinander für sie da sind.",
        ],
      },
    ],
  },
];

export function getKitaWissenArticle(slug: string): KitaWissenArticle | undefined {
  return kitaWissenArticles.find((a) => a.slug === slug);
}
