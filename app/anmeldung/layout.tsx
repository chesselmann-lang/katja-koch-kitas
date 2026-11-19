import type { ReactNode } from "react";

// Die Seite selbst ist eine Client Component (Formular-State) und kann daher
// kein `metadata`-Objekt exportieren – das übernimmt dieses Layout.
export const metadata = {
  title: "Kita-Platz anfragen | Kitas von Katja Koch",
  description:
    "Unverbindliche Interessensbekundung für einen Betreuungsplatz in einer der vier Kitas von Katja Koch in Marl.",
  alternates: { canonical: "/anmeldung" },
};

export default function AnmeldungLayout({ children }: { children: ReactNode }) {
  return children;
}
