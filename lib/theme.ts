// Zentrale Design-Tokens für alle Kita-Seiten.
// Warme, bunte Naturton-Palette (Design-Update auf Basis von Konzept "F —
// Warm Glass" aus der Layout-Exploration): wärmer und farbiger je Kita als
// die vorherige, eher gedeckte Forest-Palette, aber bewusst kein greller
// "Kita-Regenbogen" — die vier Akzentfarben bleiben erdig/gedämpft genug für
// eine seriöse Betreuungs-Website.
import type { CSSProperties } from "react";

// Bestehende Token-Namen wurden beibehalten, um Komponenten nicht überall
// umbenennen zu müssen; die Hex-Werte wurden auf die wärmere Palette
// umgestellt (Cream/Sand wärmer, Ink als warmes Dunkelbraun statt Grün-Grau,
// Terracotta/Sun kräftiger, waldgruen bleibt als dunkler Marken-/CTA-Ton
// erhalten, nur wärmer/heller als zuvor).
export const colors = {
  background: "#FDF6EC", // warmes Cream
  backgroundAlt: "#F3E2C7", // warmer Sand
  card: "#FFFDF9",
  ink: "#33281D", // warmes Dunkelbraun statt Grün-Grau
  inkSoft: "#5C4C3C",
  inkMuted: "#9C8266",
  border: "#E8D4AE",
  waldgruen: "#3F6B4A", // Forest — als dunkler Marken-/CTA-Ton, wärmer/heller als zuvor
  salbei: "#8FAE6E", // Sage, kräftiger
  salbeiHell: "#C3D79A",
  terrakotta: "#D9722E", // Terracotta, kräftiger/wärmer
  terrakottaHell: "#F0A868",
  gelb: "#E8B13A", // Sun, kräftiger
  holz: "#7C5A3E", // Earth
  fehler: "#C0524A",
} as const;

// Individuelle Kita-Farbwelten (Primary/Secondary/Accent) — vier deutlich
// unterscheidbare, warme Farben (Terracotta/Gold/Grün/Rosé) statt der
// vorherigen, eng beieinanderliegenden Grüntöne. Jede Farbe bleibt gedämpft
// genug fürs Gesamtbild, ist aber auf einen Blick der jeweiligen Kita
// zuordenbar (Badge, Buttons, Unterseiten-Header, Rand-Akzent der Karten).
export const kitaColors: Record<string, { primary: string; secondary: string; accent: string }> = {
  schatzkiste: { primary: "#D9722E", secondary: "#B98A54", accent: "#E8B13A" },
  blumenwiese: { primary: "#E0A62A", secondary: "#D98A7A", accent: "#8FAE6E" },
  baumhaus: { primary: "#3F7A54", secondary: "#8A6A4F", accent: "#D9722E" },
  kinderhaus: { primary: "#D9637A", secondary: "#E3B98A", accent: "#6B8F5E" },
};

export const accentByKita: Record<string, string> = {
  schatzkiste: kitaColors.schatzkiste.primary,
  blumenwiese: kitaColors.blumenwiese.primary,
  baumhaus: kitaColors.baumhaus.primary,
  kinderhaus: kitaColors.kinderhaus.primary,
};

export const font = {
  // Umstellung von Fraunces (editorial/Serife, Konzept A) auf Manrope
  // (warme, runde Grotesk, Konzept F) — passend zur wärmeren, moderneren
  // Bildsprache. Selbst gehostet über next/font in app/layout.tsx, kein
  // Laufzeit-Request an fonts.googleapis.com (siehe Kommentar dort).
  heading: "'Manrope', 'Segoe UI', system-ui, -apple-system, Roboto, sans-serif",
  body: "'Inter', 'Segoe UI', system-ui, -apple-system, Roboto, sans-serif",
};

// Container-Breiten: genau zwei Stufen statt der bisher 13 verschiedenen
// Werte, die quer über die Seiten verstreut waren (Ursache für "springende"
// Breiten beim Navigieren). `maxWidth` für normale Seitenabschnitte
// (Hero, Grids, Sektionen), `maxWidthNarrow` für reinen Fließtext
// (Impressum, Datenschutz, Anmeldung, Unterseiten-Detailtexte).
export const maxWidth = 1120;
export const maxWidthNarrow = 760;

export const container: CSSProperties = {
  maxWidth,
  margin: "0 auto",
  padding: "0 24px",
};

export const containerNarrow: CSSProperties = {
  maxWidth: maxWidthNarrow,
  margin: "0 auto",
  padding: "0 24px",
};

export function sectionPad(size: "sm" | "md" | "lg" = "md") {
  const map = { sm: "40px 24px", md: "64px 24px", lg: "88px 24px" };
  return map[size];
}

// Typo-Skala: ersetzt die bisher 7 unterschiedlichen h1-Formeln und die
// h2-Größen zwischen 17–24px ohne erkennbares System. Drei feste Stufen für
// Seitentitel (h1), Sektionsüberschriften (h2) und die kleine Augenbrauen-
// Kennzeichnung (eyebrow) über Titeln.
export const typeScale = {
  h1: "clamp(28px, 4.5vw, 40px)",
  h1Hero: "clamp(32px, 5vw, 48px)",
  h2: "clamp(22px, 3vw, 28px)",
  h3: 20,
  eyebrow: {
    fontSize: 13,
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: 1,
  },
};

// Einheitlicher Card-Radius (Salient nutzt durchgängig einen Wert statt 18/20
// gemischt) — neue Komponenten nutzen diese Konstante, bestehende behalten
// ihre bisherigen Werte, um keine Diffs ohne Mehrwert zu erzeugen.
export const cardRadius = 18;

// Weicher, akzentfarbiger "Glow"-Schatten statt harter Outline — Ergänzung zu
// Kartenränder/Border-Top, Salient-typisches Mikro-Detail.
export function glowShadow(accent: string, strength: "sm" | "md" = "sm") {
  const spread = strength === "md" ? "0 8px 24px" : "0 4px 14px";
  return `${spread} ${accent}26, 0 1px 3px rgba(43,43,34,0.08)`;
}

// Sehr dezentes Punktraster als Hintergrund-Textur für Sections, die etwas
// Tiefe statt einer flachen Farbfläche bekommen sollen (Natur-/Außen-Bezug).
export function dotGridPattern(color = "rgba(63,107,74,0.14)") {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28'><circle cx='3' cy='3' r='1.4' fill='${color}'/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

// Sehr weich verlaufener, verwaschener Farbkreis ("Blob") als Hintergrund-
// Dekoration hinter Hero-/Feature-Bildern — rein dekorativ, aria-hidden beim
// Einsatz, keine Bildrechte-Relevanz (kein Foto, reines SVG/CSS).
export function blobGradient(accent: string) {
  return `radial-gradient(circle at 35% 35%, ${accent}33 0%, ${accent}14 45%, transparent 72%)`;
}
