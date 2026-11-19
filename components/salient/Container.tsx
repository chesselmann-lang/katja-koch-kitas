import type { ReactNode } from "react";

// Salient-Architektur: ein zentraler Container mit fester Max-Breite und
// identischem horizontalem Gutter auf allen Breakpoints (24px mobil, 32px ab
// sm/lg) statt der bisherigen, pro Seite leicht unterschiedlichen
// maxWidth-Inline-Styles. `narrow` für reine Fließtext-Seiten (Impressum,
// Datenschutz, Anmeldung).
export default function Container({
  children,
  narrow = false,
  className = "",
}: {
  children: ReactNode;
  narrow?: boolean;
  className?: string;
}) {
  return (
    <div className={`${narrow ? "container-narrow" : "container-salient"} ${className}`}>
      {children}
    </div>
  );
}
