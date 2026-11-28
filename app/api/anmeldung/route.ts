import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { kitaKennung } from "@/lib/kitahub";

/**
 * Anfrage aus dem Website-Formular.
 * Ist die Kita-App angebunden (KITAHUB_URL, KITAHUB_TOKEN, KITAHUB_KITAS), geht die Anfrage direkt in
 * „Aufnahme & Warteliste“ der gewünschten Kita. Sonst – oder bei „Keine Präferenz“ oder einem Fehler –
 * wird sie wie bisher in der Website-Datenbank gespeichert (keine doppelte Speicherung).
 */
const t = (v: FormDataEntryValue | null, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "");

function monatZuDatum(s: string): string | null {
  const m = s.match(/^(\d{1,2})\s*[./-]\s*(\d{4})$/);
  if (m) return `${m[2]}-${m[1].padStart(2, "0")}-01`;
  const monate = ["januar", "februar", "märz", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "dezember"];
  const w = s.toLowerCase().match(/^([a-zäöü]+)\s+(\d{4})$/);
  if (w) { const i = monate.indexOf(w[1]); if (i >= 0) return `${w[2]}-${String(i + 1).padStart(2, "0")}-01`; }
  return null;
}

export async function POST(req: NextRequest) {
  const d = await req.formData();
  if (t(d.get("website"))) return NextResponse.json({ ok: true }); // Honigtopf

  const kita = t(d.get("gewuenschte_kita"), 40);
  const eltern = t(d.get("parent_name"), 120);
  const email = t(d.get("email"), 160);
  const geburt = t(d.get("geburtsmonat_jahr"), 20);
  if (!kita || !eltern || !email || !geburt) return NextResponse.json({ error: "Pflichtfelder fehlen" }, { status: 400 });
  if (d.get("einwilligung") !== "ja") return NextResponse.json({ error: "Einwilligung fehlt" }, { status: 400 });

  const kindName = t(d.get("kind_name"), 120);
  const beginn = t(d.get("betreuungsbeginn"), 40);
  const nachricht = t(d.get("nachricht"), 2000);

  const app = process.env.KITAHUB_URL, token = process.env.KITAHUB_TOKEN, id = kitaKennung(kita);
  if (app && token && id) {
    const teile = kindName.split(/\s+/).filter(Boolean);
    try {
      const res = await fetch(`${app.replace(/\/$/, "")}/api/website/anmeldung`, {
        method: "POST",
        headers: { "content-type": "application/json", "x-website-token": token },
        body: JSON.stringify({
          kita: id,
          kindVorname: teile[0] || "Kind",
          kindNachname: teile.slice(1).join(" ") || "(Name folgt)",
          kindGeburtsdatum: monatZuDatum(geburt),
          elternName: eltern, email, telefon: t(d.get("phone"), 40),
          wunschDatum: monatZuDatum(beginn),
          anmerkungen: [`Geburtsmonat laut Anfrage: ${geburt} (Tag unbekannt)`, beginn && `Gewünschter Beginn: ${beginn}`, nachricht].filter(Boolean).join("\n"),
          einwilligung: true,
        }),
        cache: "no-store",
      });
      if (res.ok) return NextResponse.json({ ok: true });
    } catch { /* weiter mit der Website-Datenbank */ }
  }

  const { error } = await supabase.from("anmeldungen").insert({
    parent_name: eltern, email, phone: t(d.get("phone"), 40) || null, gewuenschte_kita: kita,
    geburtsmonat_jahr: geburt, betreuungsbeginn: beginn || null,
    nachricht: [kindName && `Kind: ${kindName}`, nachricht].filter(Boolean).join("\n") || null,
  });
  if (error) return NextResponse.json({ error: "Speichern fehlgeschlagen" }, { status: 500 });
  return NextResponse.json({ ok: true });
}
