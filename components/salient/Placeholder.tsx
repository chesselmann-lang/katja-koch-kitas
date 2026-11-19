import type { ReactNode } from "react";

// Markiert Probetext, der noch durch echten, von Katja/den Trägern
// freigegebenen Inhalt ersetzt werden muss. Bewusst sichtbar (gestrichelter
// Rahmen + kleines Badge), damit niemand den Platzhalter für finalen Text
// hält — entspricht der bisherigen "Testbild"-Konvention bei Bildern.
export default function Placeholder({ children, inline = false }: { children: ReactNode; inline?: boolean }) {
  return (
    <span className={`placeholder-text ${inline ? "" : "block"}`}>
      {children}
      <span className="ml-1 rounded bg-terrakotta px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white align-middle">
        Beispieltext
      </span>
    </span>
  );
}
