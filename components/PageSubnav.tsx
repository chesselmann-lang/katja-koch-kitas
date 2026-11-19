"use client";

// Salient-"Page Submenu"-Äquivalent: sticky In-Page-Navigation für lange
// Unterseiten (Kita-Detailseiten). Markiert per IntersectionObserver den
// Abschnitt, der gerade im Viewport ist — keine Inhalte nötig, rein
// strukturell, daher ohne Einschränkung sofort einsetzbar.
import { useEffect, useState } from "react";
import { colors, maxWidth } from "@/lib/theme";

export type SubnavItem = { id: string; label: string };

export default function PageSubnav({ items, accent }: { items: SubnavItem[]; accent: string }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Abschnitte dieser Seite"
      style={{
        position: "sticky",
        top: 65,
        zIndex: 20,
        background: colors.card,
        borderBottom: `1px solid ${colors.border}`,
        overflowX: "auto",
      }}
      className="page-subnav"
    >
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", gap: 4, padding: "0 24px", maxWidth, margin: "0 auto", overflowX: "auto" }} className="page-subnav-track">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                padding: "14px 14px",
                fontSize: 13.5,
                fontWeight: 600,
                whiteSpace: "nowrap",
                textDecoration: "none",
                color: active === item.id ? accent : colors.inkMuted,
                borderBottom: active === item.id ? `2px solid ${accent}` : "2px solid transparent",
                transition: "color 150ms ease, border-color 150ms ease",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
        {/* Fade-Kanten als Scroll-Hinweis auf Mobile, wo die Subnav horizontal scrollt */}
        <div aria-hidden="true" className="page-subnav-fade-left" style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 24, background: `linear-gradient(90deg, ${colors.card}, transparent)`, pointerEvents: "none" }} />
        <div aria-hidden="true" className="page-subnav-fade-right" style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 24, background: `linear-gradient(270deg, ${colors.card}, transparent)`, pointerEvents: "none" }} />
      </div>
      <style>{`
        .page-subnav-track::-webkit-scrollbar { display: none; }
        @media (min-width: 761px) {
          .page-subnav-fade-left, .page-subnav-fade-right { display: none; }
        }
      `}</style>
    </nav>
  );
}
