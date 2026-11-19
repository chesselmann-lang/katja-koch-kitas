"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { colors, kitaColors, maxWidth } from "@/lib/theme";
import { allKitas } from "@/lib/kitas-data";
import Visual, { type VisualTheme } from "./Visual";

// Mega-Menu-artiges Dropdown (Salient-"Mega Menu Builder"-Äquivalent) — real
// aus lib/kitas-data.ts gespeist (Name, Farbe, Leitidee), keine Fantasietexte.
// Die kleine Visual-Kachel je Eintrag ist dieselbe illustrative Platzhalter-
// Fläche wie auf den Kita-Seiten selbst (kein echtes Foto, siehe Visual.tsx).
const KITA_LINKS = allKitas.map((k) => ({
  href: `/${k.slug}`,
  label: k.shortName,
  leitidee: k.leitidee,
  color: kitaColors[k.slug].primary,
  theme: k.slug as VisualTheme,
}));

const PARENT_LINKS = [
  { href: "/paedagogik", label: "Pädagogik" },
  { href: "/fuer-eltern", label: "Für Eltern" },
  { href: "/kita-wissen", label: "Kita-Wissen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

function IconChevron() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true" style={{ marginLeft: 5, position: "relative", top: 1 }}>
      <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3.5 3.5l11 11M14.5 3.5l-11 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [kitasOpen, setKitasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const kitasMenuRef = useRef<HTMLDivElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();

  // Fokus ins geöffnete Mobilmenü setzen (Tastatur-/Screenreader-Nutzung):
  // ohne das landet der Fokus beim Öffnen weiterhin auf dem Toggle-Button,
  // obwohl sich darunter ein neuer, langer Link-Block öffnet.
  useEffect(() => {
    if (open) firstMobileLinkRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Schließt das "Unsere Kitas"-Dropdown bei Klick außerhalb oder Escape —
  // nötig, seit es per Klick (nicht nur Hover) bedienbar ist.
  useEffect(() => {
    if (!kitasOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (kitasMenuRef.current && !kitasMenuRef.current.contains(e.target as Node)) {
        setKitasOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setKitasOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [kitasOpen]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? `${colors.background}e6` : colors.background,
        backdropFilter: scrolled ? "blur(8px)" : undefined,
        borderBottom: `1px solid ${colors.border}`,
        boxShadow: scrolled ? "0 4px 18px rgba(38,51,44,0.08)" : "none",
        transition: "box-shadow 160ms ease, background 160ms ease",
      }}
    >
      {/* dünner Markenstreifen aus den vier Kita-Farben */}
      <div style={{ display: "flex", height: 3 }}>
        {KITA_LINKS.map((k) => (
          <span key={k.href} style={{ flex: 1, background: k.color }} />
        ))}
      </div>

      <div
        style={{
          maxWidth,
          margin: "0 auto",
          padding: scrolled ? "10px 24px" : "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          transition: "padding 160ms ease",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: colors.ink,
            fontWeight: 700,
            fontSize: 17,
            whiteSpace: "nowrap",
            fontFamily: "var(--font-heading, inherit)",
          }}
        >
          <span
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              background: colors.waldgruen,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: 0.5,
            }}
          >
            KK
          </span>
          <span>
            Kitas von <span style={{ color: colors.waldgruen }}>Katja Koch</span>
          </span>
        </Link>

        <nav
          className="site-nav-desktop"
          style={{ display: "flex", gap: 26, alignItems: "center" }}
        >
          <div ref={kitasMenuRef} style={{ position: "relative" }}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={kitasOpen}
              onClick={() => setKitasOpen((v) => !v)}
              style={{
                background: "none",
                border: "none",
                color: "#3a3a30",
                fontSize: 15,
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "inherit",
                padding: "8px 0",
                display: "flex",
                alignItems: "center",
              }}
            >
              Unsere Kitas
              <IconChevron />
            </button>
            {kitasOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  background: "#fff",
                  borderRadius: 14,
                  boxShadow: "0 12px 32px rgba(43,43,34,0.16)",
                  padding: 12,
                  width: 420,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 4,
                }}
              >
                {KITA_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setKitasOpen(false)}
                    aria-current={pathname === l.href ? "page" : undefined}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "center",
                      padding: "10px 12px",
                      borderRadius: 10,
                      borderTop: `3px solid ${l.color}`,
                      color: colors.ink,
                      textDecoration: "none",
                      background: colors.background,
                    }}
                  >
                    <Visual theme={l.theme} aspect="1 / 1" radius={8} style={{ width: 36, height: 36, flexShrink: 0 }} />
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 700 }}>{l.label}</div>
                      <div style={{ fontSize: 12, color: colors.inkMuted, marginTop: 2, lineHeight: 1.4 }}>
                        {l.leitidee}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {PARENT_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              style={{ color: "#3a3a30", textDecoration: "none", fontSize: 15, fontWeight: 500 }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Link
            href="/anmeldung"
            className="site-nav-desktop"
            style={{
              padding: "10px 20px",
              borderRadius: 999,
              background: colors.waldgruen,
              color: "#fff",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            Kita-Platz anfragen
          </Link>
          <button
            type="button"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="site-nav-toggle"
            style={{
              display: "none",
              background: "transparent",
              border: `1px solid ${colors.ink}`,
              borderRadius: 8,
              width: 40,
              height: 40,
              cursor: "pointer",
              color: colors.ink,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="site-nav-mobile"
          style={{
            borderTop: `1px solid ${colors.border}`,
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            background: colors.background,
          }}
        >
          <div style={{ fontSize: 12, fontWeight: 700, color: colors.inkMuted, textTransform: "uppercase", margin: "10px 0 4px" }}>
            Unsere Kitas
          </div>
          {KITA_LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              ref={i === 0 ? firstMobileLinkRef : undefined}
              aria-current={pathname === l.href ? "page" : undefined}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "#3a3a30",
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 500,
                padding: "10px 0",
                minHeight: 44,
              }}
              onClick={() => setOpen(false)}
            >
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: l.color, flexShrink: 0 }} />
              {l.label}
            </Link>
          ))}
          <div style={{ fontSize: 12, fontWeight: 700, color: colors.inkMuted, textTransform: "uppercase", margin: "14px 0 4px" }}>
            Für Eltern
          </div>
          {PARENT_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              style={{
                display: "flex",
                alignItems: "center",
                color: "#3a3a30",
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 500,
                padding: "8px 0",
                minHeight: 40,
              }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/anmeldung"
            style={{
              marginTop: 16,
              padding: "14px 18px",
              borderRadius: 999,
              background: colors.waldgruen,
              color: "#fff",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 600,
              textAlign: "center",
            }}
            onClick={() => setOpen(false)}
          >
            Kita-Platz anfragen
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .site-nav-desktop { display: none !important; }
          .site-nav-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
