import { appTermine } from "@/lib/kitahub";
import type { KitaSlug } from "@/lib/kitas-data";

/** Nächste Termine aus der Kita-App – erscheint nur, wenn die Kita Termine für die Website freigegeben hat. */
export default async function KitaTermine({ slug, accent }: { slug: KitaSlug; accent: string }) {
  const termine = (await appTermine(slug)).slice(0, 6);
  if (!termine.length) return null;
  const tz = { timeZone: "Europe/Berlin" } as const;
  return (
    <section id="termine" className="section-y-sm scroll-mt-28">
      <div className="mx-auto max-w-5xl px-5">
        <p className="mb-2.5 text-[13px] font-bold uppercase tracking-wide" style={{ color: accent }}>Termine</p>
        <h2 className="mb-6 text-2xl font-extrabold sm:text-3xl">Nächste Termine</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {termine.map((t, i) => {
            const b = new Date(t.beginn);
            return (
              <li key={i} className="flex gap-4 rounded-2xl border border-border bg-white p-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl text-center leading-tight text-white" style={{ background: accent }}>
                  <span><span className="block text-lg font-extrabold">{b.toLocaleDateString("de-DE", { day: "numeric", ...tz })}</span><span className="block text-[11px] uppercase">{b.toLocaleDateString("de-DE", { month: "short", ...tz })}</span></span>
                </div>
                <div className="min-w-0">
                  <p className="font-bold">{t.titel}</p>
                  <p className="text-sm text-inkSoft">
                    {b.toLocaleDateString("de-DE", { weekday: "long", ...tz })}
                    {!t.ganztag && `, ${b.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit", ...tz })} Uhr`}
                    {t.ort && ` · ${t.ort}`}
                  </p>
                  {t.beschreibung && <p className="mt-1 line-clamp-3 text-sm text-inkSoft">{t.beschreibung}</p>}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
