"use client";

// Foto-Galerie (Salient-"Gallery"/Lightbox-Äquivalent) — läuft bewusst mit
// TESTBILDERN statt echten Fotos. Jede Kachel ist eine illustrative Visual-
// Fläche (siehe Visual.tsx), deutlich mit einem "Testbild"-Badge markiert,
// damit niemand sie mit einer echten Aufnahme der Einrichtung verwechseln
// kann. Sobald rechtefreie, echte Fotos vorliegen (siehe PHOTO-SHOTLIST.md),
// werden hier die `theme`-Kacheln 1:1 durch <Image src="..."> ersetzt — die
// Grid- und Lightbox-Logik bleibt unverändert.
import { useEffect, useState } from "react";
import { colors } from "@/lib/theme";
import Visual, { type VisualTheme } from "./Visual";
import Reveal from "./Reveal";

export type GalleryImage = {
  theme: VisualTheme;
  /** Generische Aktivitätsbeschreibung, keine Behauptung eines konkreten, dokumentierten Moments. */
  caption: string;
};

export default function Gallery({ images, accent }: { images: GalleryImage[]; accent: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [openIndex, images.length]);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gap: 14,
          gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
        }}
      >
        {images.map((img, i) => (
          <Reveal key={img.caption} delay={i * 60}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Testbild vergrößern: ${img.caption}`}
              style={{
                all: "unset",
                cursor: "zoom-in",
                display: "block",
                width: "100%",
              }}
            >
              <div style={{ position: "relative" }}>
                <Visual theme={img.theme} aspect="4 / 3.1" radius={16} />
                {/* Diagonales Wasserzeichen-Muster zusätzlich zum Badge — macht auf
                    einen Blick (auch ohne das Badge zu lesen) klar, dass es sich um
                    ein Platzhalter-Testbild handelt. */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "repeating-linear-gradient(45deg, rgba(255,255,255,0.07) 0 2px, transparent 2px 26px)",
                    pointerEvents: "none",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    background: "rgba(26,16,9,0.55)",
                    color: "#fff",
                    fontSize: 10.5,
                    fontWeight: 700,
                    letterSpacing: 0.4,
                    textTransform: "uppercase",
                    padding: "3px 8px",
                    borderRadius: 999,
                  }}
                >
                  Testbild
                </span>
                <div
                  style={{
                    position: "absolute",
                    left: 12,
                    bottom: 10,
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 600,
                    textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                  }}
                >
                  {img.caption}
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
      <p style={{ color: colors.inkMuted, fontSize: 12.5, marginTop: 12 }}>
        Diese Kacheln sind illustrative Testbilder (Verlauf + Muster), keine echten Fotos der Einrichtung. Sie
        dienen nur dem Layout, bis rechtefreie, echte Aufnahmen vorliegen.
      </p>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenIndex(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(20,14,9,0.86)",
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: 760, width: "100%" }}
          >
            <Visual theme={images[openIndex].theme} aspect="4 / 3" radius={18} factLabel="Testbild — kein echtes Foto">
              <div
                style={{
                  position: "absolute",
                  left: 18,
                  top: 16,
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 15,
                  textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                }}
              >
                {images[openIndex].caption}
              </div>
            </Visual>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
              <button
                type="button"
                onClick={() => setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length))}
                style={{
                  padding: "10px 18px",
                  borderRadius: 999,
                  border: "1.5px solid #fff",
                  background: "transparent",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                &larr; Zurück
              </button>
              <button
                type="button"
                onClick={() => setOpenIndex(null)}
                style={{
                  padding: "10px 22px",
                  borderRadius: 999,
                  background: accent,
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 700,
                }}
              >
                Schließen
              </button>
              <button
                type="button"
                onClick={() => setOpenIndex((i) => (i === null ? i : (i + 1) % images.length))}
                style={{
                  padding: "10px 18px",
                  borderRadius: 999,
                  border: "1.5px solid #fff",
                  background: "transparent",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Weiter &rarr;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
