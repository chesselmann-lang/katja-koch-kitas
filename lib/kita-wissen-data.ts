// Kategorien für den redaktionellen Wissensbereich "Kita-Wissen". Die
// tatsächlichen Artikel (Titel, Teaser, vollständiger Fließtext) stehen in
// lib/kita-wissen-articles.ts.

export type KitaWissenCategory =
  | "Entwicklung"
  | "Natur"
  | "Wald"
  | "Tiere"
  | "Bewegung"
  | "Ernährung"
  | "Eingewöhnung"
  | "Vorschule"
  | "Eltern"
  | "Kinderrechte";

export const kitaWissenCategories: KitaWissenCategory[] = [
  "Entwicklung",
  "Natur",
  "Wald",
  "Tiere",
  "Bewegung",
  "Ernährung",
  "Eingewöhnung",
  "Vorschule",
  "Eltern",
  "Kinderrechte",
];

// Internes TODO-Backlog für die spätere Redaktion (NICHT öffentlich rendern —
// das war vorher der Fehler: eine Liste "geplanter" Artikel mit
// "in Planung"-Badges war öffentlich auf /kita-wissen sichtbar und zeigte
// Besuchern den internen Arbeitsstand statt fertigen Inhalt, siehe F03).
// Bereits ausgearbeitete und veröffentlichte Themen (siehe
// lib/kita-wissen-articles.ts) sind hier entfernt, die restlichen rund 25
// Ideen bleiben als Stichpunkte für künftige Artikel erhalten:
//
// - Draußen bei Regen (Natur)
// - Kinder und Tiere (Tiere)
// - Warum Kinder Bewegung brauchen (Bewegung)
// - Selbstständigkeit fördern (Entwicklung)
// - Warum Rituale Sicherheit geben (Entwicklung)
// - Freispiel verstehen (Entwicklung)
// - Vorschule ohne Schulstress (Vorschule)
// - Der Übergang zur Grundschule (Vorschule)
// - Konflikte gehören dazu (Entwicklung)
// - Kinderrechte einfach erklärt (Kinderrechte)
// - Was bedeutet Partizipation? (Kinderrechte)
// - Inklusion verstehen (Entwicklung)
// - Ernährung im Kita-Alltag (Ernährung)
// - Mit Kindern die Jahreszeiten entdecken (Natur)
// - Gartenarbeit mit Kindern (Natur)
// - Spielen mit Naturmaterialien (Natur)
// - Warum nicht jede Minute verplant sein muss (Entwicklung)
// - Freundschaften in der Kita (Entwicklung)
// - Sprache entsteht überall (Entwicklung)
// - Kreativität braucht Freiraum (Entwicklung)
// - Warum Kinder Rückzugsorte brauchen (Entwicklung)
// - Gefühle begleiten (Entwicklung)
// - Was passiert bei einem Entwicklungsgespräch? (Eltern)
// - Abschied von der Kita (Vorschule)
// - Der erste Kita-Tag (Eingewöhnung)
