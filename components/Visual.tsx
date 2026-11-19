// Illustrative, foto-ähnliche Flächen für Bereiche, in denen noch keine
// echten (bildrechtlich freigegebenen) Fotos vorliegen. ILLUSTRATIVE_PLACEHOLDER:
// ausschließlich allgemeine Natur-/Themenmotive (Verlauf + Muster), niemals eine
// konkrete Einrichtung, einen konkreten Raum oder eine konkrete Person
// darstellend. Sobald echte Fotos vorliegen (siehe PHOTO-SHOTLIST.md), werden
// diese Flächen 1:1 durch <img>/<Image> ersetzt — Layout bleibt unverändert.
import type { CSSProperties } from "react";

export type VisualTheme =
  | "hero"
  | "schatzkiste"
  | "blumenwiese"
  | "baumhaus"
  | "kinderhaus"
  | "natur"
  | "bauernhof"
  | "wald"
  | "raeume"
  | "alltag"
  | "kind"
  | "team"
  | "garten"
  | "dunkel";

// Design-Update (Konzept "F — Warm Glass"): wärmere, buntere Verläufe statt
// der vorherigen, eng beieinanderliegenden Grün-Erde-Töne. Jedes Kita-Theme
// greift jetzt sichtbar die jeweilige kitaColors-Akzentfarbe auf, damit die
// illustrativen Flächen dieselbe Farbgeschichte erzählen wie Badges/Buttons.
const GRADIENTS: Record<VisualTheme, string> = {
  hero: "linear-gradient(135deg, #3F6B4A 0%, #D9722E 55%, #E8B13A 100%)",
  schatzkiste: "linear-gradient(135deg, #B9502B 0%, #D9722E 55%, #E8B13A 100%)",
  blumenwiese: "linear-gradient(135deg, #D9722E 0%, #E0A62A 55%, #F0D493 100%)",
  baumhaus: "linear-gradient(135deg, #1F4D2E 0%, #3F7A54 55%, #8FAE6E 100%)",
  kinderhaus: "linear-gradient(135deg, #D9637A 0%, #E8A48A 55%, #F0D493 100%)",
  natur: "linear-gradient(135deg, #3F7A54 0%, #8FAE6E 55%, #E0A62A 100%)",
  bauernhof: "linear-gradient(135deg, #7C5A3E 0%, #B98A54 55%, #E8B13A 100%)",
  wald: "linear-gradient(160deg, #163522 0%, #1F4D2E 55%, #3F7A54 100%)",
  raeume: "linear-gradient(135deg, #F0D493 0%, #E8B13A 55%, #D9722E 100%)",
  alltag: "linear-gradient(135deg, #9C8266 0%, #E0A62A 55%, #F3E2C7 100%)",
  kind: "linear-gradient(135deg, #D9637A 0%, #E8B13A 55%, #F3E2C7 100%)",
  team: "linear-gradient(135deg, #7C5A3E 0%, #B98A54 55%, #E0A62A 100%)",
  garten: "linear-gradient(135deg, #3F7A54 0%, #8FAE6E 55%, #E0A62A 100%)",
  dunkel: "linear-gradient(135deg, #1A1009 0%, #33281D 60%, #5C4C3C 100%)",
};

// Dezente, sich wiederholende SVG-Textur (Blätter/Punkte) als Daten-URI,
// sorgt für fotografische Tiefe statt flacher Farbfläche.
function pattern(theme: VisualTheme): string {
  const leafy = `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><g fill='none' stroke='rgba(255,255,255,0.14)' stroke-width='1.5'><path d='M10 100 C 30 60, 50 60, 60 20'/><path d='M60 110 C 80 70, 100 70, 110 30'/><circle cx='20' cy='30' r='3' fill='rgba(255,255,255,0.12)'/><circle cx='90' cy='95' r='4' fill='rgba(255,255,255,0.1)'/></g></svg>`;
  const dotted = `<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><circle cx='6' cy='6' r='2' fill='rgba(255,255,255,0.18)'/><circle cx='34' cy='24' r='1.4' fill='rgba(255,255,255,0.12)'/><circle cx='18' cy='44' r='1.8' fill='rgba(255,255,255,0.14)'/></svg>`;
  const svg = theme === "raeume" || theme === "team" ? dotted : leafy;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

type VisualProps = {
  theme: VisualTheme;
  aspect?: string; // z. B. "16 / 9"
  minHeight?: number;
  radius?: number;
  style?: CSSProperties;
  /** Kurzes Overlay-Label, nur für echte Fakten (z. B. "3.000 m² Außengelände"), nie eine Bildunterschrift-Fiktion. */
  factLabel?: string;
  children?: React.ReactNode;
  /** Optionaler, sanfter Zoom-Effekt bei Hover — rein dekorativ, für Kacheln/Links gedacht, respektiert prefers-reduced-motion. */
  zoomOnHover?: boolean;
};

export default function Visual({
  theme,
  aspect = "4 / 3",
  minHeight,
  radius = 20,
  style,
  factLabel,
  children,
  zoomOnHover = false,
}: VisualProps) {
  return (
    <div
      role="img"
      aria-label="Illustrative Natur- und Themenaufnahme"
      className={zoomOnHover ? "visual-zoom" : undefined}
      style={{
        position: "relative",
        aspectRatio: minHeight ? undefined : aspect,
        minHeight,
        borderRadius: radius,
        overflow: "hidden",
        background: GRADIENTS[theme],
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: pattern(theme),
          backgroundRepeat: "repeat",
          mixBlendMode: "overlay",
          opacity: 0.9,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.28) 100%)",
        }}
      />
      {factLabel && (
        <div
          style={{
            position: "absolute",
            left: 18,
            bottom: 16,
            color: "#fff",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 0.3,
            textShadow: "0 1px 4px rgba(0,0,0,0.35)",
          }}
        >
          {factLabel}
        </div>
      )}
      {children}
      {zoomOnHover && (
        <style>{`
          .visual-zoom { transition: transform 450ms cubic-bezier(0.4,0,0.2,1); }
          .visual-zoom:hover { transform: scale(1.035); }
          @media (prefers-reduced-motion: reduce) { .visual-zoom:hover { transform: none; } }
        `}</style>
      )}
    </div>
  );
}
