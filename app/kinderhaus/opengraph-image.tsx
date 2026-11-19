import { ImageResponse } from "next/og";
import { kitaColors } from "@/lib/theme";
import { getKitaData } from "@/lib/kitas-data";

// Kita-spezifisches OG-Bild (File-based Metadata Convention) — gestaltete
// Typo-Karte in der jeweiligen Kita-Akzentfarbe, kein Foto.

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const kita = getKitaData("kinderhaus");
  const accent = kitaColors.kinderhaus.primary;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: accent,
          color: "#FDF6EC",
          fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#FDF6EC",
            opacity: 0.85,
            marginBottom: 24,
          }}
        >
          Kitas von Katja Koch
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.1,
            padding: "0 60px",
          }}
        >
          {kita.name}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 30,
            fontWeight: 500,
            textAlign: "center",
            opacity: 0.92,
          }}
        >
          {kita.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
