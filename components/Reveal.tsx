"use client";

// Leichtgewichtiges Scroll-Reveal ohne zusätzliche Abhängigkeit (kein
// Framer Motion o.ä.) — passend zum "Blazing Performance"-Anspruch, den
// Salient selbst für sich bewirbt. Reines IntersectionObserver + CSS-
// Transition, respektiert prefers-reduced-motion.
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  as = "div",
  style,
}: {
  children: ReactNode;
  /** Verzögerung in ms, z. B. für gestaffeltes Einblenden in einem Grid. */
  delay?: number;
  as?: "div" | "span";
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== "undefined" &&
      (window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver === "undefined")
    ) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    // Sicherheitsnetz: falls der Observer aus irgendeinem Grund nie auslöst
    // (Edge Cases in einzelnen Browsern, ungewöhnliche Layout-/Scroll-
    // Situationen), darf Inhalt NIE dauerhaft unsichtbar bleiben — nach
    // kurzer Zeit wird in jedem Fall eingeblendet.
    const fallback = window.setTimeout(() => setVisible(true), 1200);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
