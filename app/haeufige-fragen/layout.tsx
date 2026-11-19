import type { ReactNode } from "react";

// Die Seite selbst ist eine Client Component (Filter-State) und kann daher
// kein `metadata`-Objekt exportieren – das übernimmt dieses Layout.
export const metadata = {
  title: "Häufige Fragen | Kitas von Katja Koch",
  description:
    "Antworten auf häufige Fragen rund um Anmeldung, Eingewöhnung, Alltag, Verpflegung und mehr in den vier Kitas von Katja Koch.",
  alternates: { canonical: "/haeufige-fragen" },
};

export default function HaeufigeFragenLayout({ children }: { children: ReactNode }) {
  return children;
}
