// Dekorativer Übergang zwischen zwei Sektionen (Salient-"Shape Divider"-
// Äquivalent) — reines SVG, keine Abhängigkeit, keine Bildinhalte, daher
// ohne Einschränkung sofort einsetzbar. `from` ist die Hintergrundfarbe der
// VORHERGEHENDEN Sektion (Fläche des Divider-Blocks selbst), `to` die Farbe
// der folgenden Sektion (Füllfarbe der Welle) — so entsteht ein sauberer
// Übergang statt eines sichtbaren Flickens gegen die Seiten-Grundfarbe.
// Zwei leicht unterschiedliche Wellenkurven, damit nicht jeder Übergang im
// ganzen Seitenverlauf identisch aussieht (je nach Section-Thema wählbar).
const PATHS = {
  wave: "M0,32 C240,64 480,0 720,16 C960,32 1200,64 1440,24 L1440,60 L0,60 Z",
  soft: "M0,20 C360,52 720,52 1080,24 C1260,10 1350,10 1440,16 L1440,60 L0,60 Z",
};

export default function ShapeDivider({
  from,
  to,
  flip = false,
  height = 48,
  variant = "wave",
}: {
  from: string;
  to: string;
  flip?: boolean;
  height?: number;
  variant?: "wave" | "soft";
}) {
  return (
    <div aria-hidden="true" style={{ lineHeight: 0, background: from }}>
      <svg
        viewBox="0 0 1440 60"
        width="100%"
        height={height}
        preserveAspectRatio="none"
        style={{ display: "block", transform: flip ? "scaleY(-1)" : undefined }}
      >
        <path d={PATHS[variant]} fill={to} />
      </svg>
    </div>
  );
}
