"use client";

// Salient-typischer "Nach oben"-Button — blendet sich erst nach etwas
// Scroll-Strecke ein, rein clientseitig, keine Layout-Auswirkung sonst.
import { useEffect, useState } from "react";
import { colors } from "@/lib/theme";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <button
      type="button"
      aria-label="Nach oben scrollen"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="back-to-top-btn"
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        zIndex: 60,
        width: 44,
        height: 44,
        borderRadius: 999,
        border: "none",
        background: colors.waldgruen,
        color: "#fff",
        cursor: "pointer",
        boxShadow: "0 6px 18px rgba(43,43,34,0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 180ms ease, transform 180ms ease",
      }}
    >
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 12.5V3.5M3.5 8L8 3.5 12.5 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
    {/* Auf schmalen Bildschirmen überschneidet sich die feste Position sonst
        mit der sticky MobileCtaBar am unteren Rand — hier etwas höher
        setzen, inkl. Safe-Area für iPhones mit Home-Indicator. */}
    <style>{`
      @media (max-width: 640px) {
        .back-to-top-btn { bottom: calc(76px + env(safe-area-inset-bottom)) !important; }
      }
    `}</style>
    </>
  );
}
