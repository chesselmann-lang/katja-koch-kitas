import { ImageResponse } from "next/og";
import { colors } from "@/lib/theme";

// Standard-OG-Bild für die gesamte Seite (File-based Metadata Convention).
// Next.js bindet dieses Bild automatisch als og:image/twitter:image in jede
// Route ein, die kein eigenes opengraph-image.tsx definiert. Bewusst eine
// gestaltete Typo-Karte in Markenfarben, kein Foto — es soll nicht wie ein
// echtes Foto einer Kita wirken.

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          background: colors.waldgruen,
          color: "#FDF6EC",
          fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#E8B13A",
            marginBottom: 24,
          }}
        >
          Kitas in Marl
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.1,
            padding: "0 60px",
          }}
        >
          Kitas von Katja Koch
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 30,
            fontWeight: 500,
            color: "#C3D79A",
            textAlign: "center",
          }}
        >
          Schatzkiste · Blumenwiese · Baumhaus · Kinderhaus — Marl
        </div>
      </div>
    ),
    { ...size }
  );
}
