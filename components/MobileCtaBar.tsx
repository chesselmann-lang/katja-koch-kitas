"use client";

// Sticky CTA-Leiste, die ausschließlich auf schmalen Bildschirmen erscheint
// (per CSS-Media-Query, siehe style unten) — auf Mobilgeräten ist der
// "Kita-Platz anfragen"-Button im Header sonst oft erst nach Scrollen oder
// über das Burger-Menü erreichbar. Nutzt env(safe-area-inset-bottom), damit
// die Leiste auf iPhones mit Home-Indicator nicht von der Systemleiste
// verdeckt wird (siehe viewport-fit=cover in app/layout.tsx).
import Link from "next/link";
import { colors } from "@/lib/theme";

export default function MobileCtaBar() {
  return (
    <div
      className="mobile-cta-bar"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 55,
        display: "none",
        background: colors.background,
        borderTop: `1px solid ${colors.border}`,
        padding: "10px 16px calc(10px + env(safe-area-inset-bottom))",
        boxShadow: "0 -6px 18px rgba(43,43,34,0.1)",
      }}
    >
      <Link
        href="/anmeldung"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          minHeight: 48,
          borderRadius: 999,
          background: colors.waldgruen,
          color: "#fff",
          textDecoration: "none",
          fontSize: 15,
          fontWeight: 700,
        }}
      >
        Kita-Platz anfragen
      </Link>
      <style>{`
        @media (max-width: 640px) {
          .mobile-cta-bar { display: block !important; }
          /* Platz am Seitenende reservieren, damit die Leiste nichts verdeckt */
          body { padding-bottom: 76px; }
        }
      `}</style>
    </div>
  );
}
