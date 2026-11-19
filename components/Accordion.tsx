"use client";

// Ersetzt die bisherigen nativen <details>/<summary>-FAQ-Blöcke durch ein
// animiertes Akkordeon (Salient-"Toggle Panels"-Äquivalent) — weiterhin
// gespeist aus echten FAQ-Daten, nur die Interaktion/Optik ist neu.
import { useState } from "react";
import { colors } from "@/lib/theme";

export type AccordionItem = { q: string; a: string };

export default function Accordion({
  items,
  accent = colors.waldgruen,
  defaultOpen,
}: {
  items: AccordionItem[];
  accent?: string;
  /** Index, der initial geöffnet sein soll (optional). */
  defaultOpen?: number;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen ?? null);

  return (
    <div style={{ display: "grid", gap: 10 }}>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.q}
            style={{
              background: colors.card,
              borderRadius: 14,
              boxShadow: "0 1px 3px rgba(43,43,34,0.08)",
              overflow: "hidden",
            }}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                padding: "16px 20px",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                font: "inherit",
                fontWeight: 700,
                fontSize: 15,
                color: colors.ink,
              }}
            >
              <span>{item.q}</span>
              <span
                aria-hidden="true"
                style={{
                  flexShrink: 0,
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: `${accent}1a`,
                  color: accent,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 700,
                  lineHeight: 1,
                  transform: open ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 200ms ease",
                }}
              >
                +
              </span>
            </button>
            <div
              style={{
                display: "grid",
                gridTemplateRows: open ? "1fr" : "0fr",
                transition: "grid-template-rows 220ms ease",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <p
                  style={{
                    margin: "0 20px 18px",
                    color: colors.inkSoft,
                    lineHeight: 1.6,
                    fontSize: 14.5,
                    opacity: open ? 1 : 0,
                    transition: "opacity 180ms ease",
                    transitionDelay: open ? "60ms" : "0ms",
                  }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
