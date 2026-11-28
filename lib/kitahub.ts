// Anbindung an die Kita-App (KitaHub). Alles bleibt aus, solange die Variablen fehlen.
//   KITAHUB_URL        z. B. https://kids.mindry.de
//   KITAHUB_KITAS      JSON: {"schatzkiste":"<kita-kennung>", ...}  (Kennung steht in der App unter Einstellungen → Einrichtung)
//   KITAHUB_TOKEN      gemeinsamer Schlüssel für Anmeldungen (= WEBSITE_API_TOKEN in der App), nur serverseitig
import type { KitaSlug } from "./kitas-data";

export type AppTermin = { titel: string; beschreibung: string | null; ort: string | null; beginn: string; ende: string | null; ganztag: boolean };

function kitaIds(): Partial<Record<KitaSlug, string>> {
  try { return JSON.parse(process.env.KITAHUB_KITAS || "{}"); } catch { return {}; }
}

export function kitaKennung(slug: string): string | null {
  return (kitaIds() as Record<string, string>)[slug] ?? null;
}

export async function appTermine(slug: KitaSlug): Promise<AppTermin[]> {
  const url = process.env.KITAHUB_URL;
  const id = kitaKennung(slug);
  if (!url || !id) return [];
  try {
    const res = await fetch(`${url.replace(/\/$/, "")}/api/website/termine?kita=${id}&tage=120`, { next: { revalidate: 300 } });
    if (!res.ok) return [];
    const json = await res.json();
    return Array.isArray(json.termine) ? json.termine : [];
  } catch {
    return [];
  }
}
