import { colors, kitaColors, maxWidth } from "@/lib/theme";

const ACCENT_STRIP = [
  kitaColors.schatzkiste.primary,
  kitaColors.blumenwiese.primary,
  kitaColors.baumhaus.primary,
  kitaColors.kinderhaus.primary,
];

export default function SiteFooter() {
  return (
    <footer style={{ background: colors.waldgruen, color: "#E9E4D6", marginTop: 64 }}>
      <div style={{ display: "flex", height: 4 }}>
        {ACCENT_STRIP.map((c, i) => (
          <span key={i} style={{ flex: 1, background: c, opacity: 0.85 }} />
        ))}
      </div>

      {/* Kompaktes CTA-Band oberhalb der Link-Spalten */}
      <div
        style={{
          maxWidth,
          margin: "0 auto",
          padding: "32px 24px 0",
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: 17, fontWeight: 700, color: "#fff" }}>
          Interesse an einem Kita-Platz?
        </div>
        <a
          href="/anmeldung"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 22px",
            borderRadius: 999,
            background: colors.salbei,
            color: "#fff",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: 14.5,
            whiteSpace: "nowrap",
          }}
        >
          Kita-Platz anfragen
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
      <div style={{ maxWidth, margin: "20px auto 0", padding: "0 24px" }}>
        <div style={{ height: 1, background: "rgba(255,255,255,0.12)" }} />
      </div>

      <div
        style={{
          maxWidth,
          margin: "0 auto",
          padding: "48px 24px 32px",
          display: "grid",
          gap: 32,
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: colors.salbei,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 800,
                color: "#fff",
              }}
            >
              KK
            </span>
            <strong style={{ fontSize: 16 }}>Kitas von Katja Koch</strong>
          </div>
          <p style={{ color: "#B9B49F", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
            Vier Kita-Welten in Marl &mdash; naturnahe Betreuung und individuelle Begleitung für jedes Kind.
          </p>
        </div>

        <div>
          <div style={{ fontWeight: 700, marginBottom: 12, fontSize: 14, letterSpacing: 0.3 }}>
            Unsere Kitas
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <a href="/schatzkiste" style={{ color: "#D8D3C1", textDecoration: "none", fontSize: 14 }}>Kita Schatzkiste</a>
            <a href="/blumenwiese" style={{ color: "#D8D3C1", textDecoration: "none", fontSize: 14 }}>Kita Blumenwiese</a>
            <a href="/baumhaus" style={{ color: "#D8D3C1", textDecoration: "none", fontSize: 14 }}>Kita Baumhaus</a>
            <a href="/kinderhaus" style={{ color: "#D8D3C1", textDecoration: "none", fontSize: 14 }}>Kita Kinderhaus</a>
          </div>
        </div>

        <div>
          <div style={{ fontWeight: 700, marginBottom: 12, fontSize: 14, letterSpacing: 0.3 }}>
            Pädagogik
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <a href="/paedagogik" style={{ color: "#D8D3C1", textDecoration: "none", fontSize: 14 }}>Bild vom Kind</a>
            <a href="/paedagogik" style={{ color: "#D8D3C1", textDecoration: "none", fontSize: 14 }}>Natur &amp; Bewegung</a>
            <a href="/paedagogik" style={{ color: "#D8D3C1", textDecoration: "none", fontSize: 14 }}>Partizipation &amp; Inklusion</a>
            <a href="/kinderrechte" style={{ color: "#D8D3C1", textDecoration: "none", fontSize: 14 }}>Kinderschutz</a>
          </div>
        </div>

        <div>
          <div style={{ fontWeight: 700, marginBottom: 12, fontSize: 14, letterSpacing: 0.3 }}>
            Für Eltern
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <a href="/anmeldung" style={{ color: "#D8D3C1", textDecoration: "none", fontSize: 14 }}>Kita-Platz anfragen</a>
            <a href="/fuer-eltern" style={{ color: "#D8D3C1", textDecoration: "none", fontSize: 14 }}>Eingewöhnung</a>
            <a href="/haeufige-fragen" style={{ color: "#D8D3C1", textDecoration: "none", fontSize: 14 }}>Häufige Fragen</a>
            <a href="/aktuelles" style={{ color: "#D8D3C1", textDecoration: "none", fontSize: 14 }}>Aktuelles aus den Kitas</a>
            <a href="/kontakt" style={{ color: "#D8D3C1", textDecoration: "none", fontSize: 14 }}>Kontakt</a>
          </div>
        </div>

        <div>
          <div style={{ fontWeight: 700, marginBottom: 12, fontSize: 14, letterSpacing: 0.3 }}>
            Über uns
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <a href="/ueber-uns" style={{ color: "#D8D3C1", textDecoration: "none", fontSize: 14 }}>Katja Koch &amp; Träger</a>
            <a href="/team" style={{ color: "#D8D3C1", textDecoration: "none", fontSize: 14 }}>Team</a>
          </div>
        </div>

        <div>
          <div style={{ fontWeight: 700, marginBottom: 12, fontSize: 14, letterSpacing: 0.3 }}>
            Rechtliches
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <a href="/impressum" style={{ color: "#D8D3C1", textDecoration: "none", fontSize: 14 }}>Impressum</a>
            <a href="/datenschutz" style={{ color: "#D8D3C1", textDecoration: "none", fontSize: 14 }}>Datenschutz</a>
          </div>
          <div style={{ marginTop: 18, color: "#B9B49F", fontSize: 13, lineHeight: 1.8 }}>
            <div>Forststraße 76, 45768 Marl</div>
            <div>0178 6363724</div>
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid #43432f",
          padding: "16px 24px",
          display: "flex",
          flexWrap: "wrap",
          gap: "6px 20px",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 12.5,
          color: "#8f8a76",
          textAlign: "center",
        }}
      >
        <span>&copy; {new Date().getFullYear()} Kitas von Katja Koch</span>
        <span style={{ opacity: 0.7 }}>Träger: Schatzkiste Bauernhof gGmbH &middot; LiN Leben in der Natur gGmbH</span>
      </div>
    </footer>
  );
}
