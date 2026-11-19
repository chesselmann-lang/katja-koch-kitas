"use client";

import { Suspense, useMemo, useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { colors } from "@/lib/theme";
import { allKitas } from "@/lib/kitas-data";
import { supabase } from "@/lib/supabase";
import Reveal from "@/components/Reveal";
import Container from "@/components/salient/Container";

const STEPS = [
  { title: "Anfrage absenden", text: "Sie schicken uns diese Anfrage ab." },
  { title: "Prüfung", text: "Wir prüfen die Angaben und freie Kapazitäten in der gewünschten Kita." },
  { title: "Kennenlernen", text: "Wir laden Sie zu einem unverbindlichen Kennenlern- bzw. Besichtigungstermin ein." },
  { title: "Nächste Schritte", text: "Bei einem freien Platz besprechen wir die nächsten Schritte persönlich." },
  { title: "Betreuungsvertrag", text: "Bei einer Zusage folgt der Betreuungsvertrag." },
];

const inputClass =
  "w-full rounded-lg border border-border px-3.5 py-3 text-[15px] font-sans focus:border-salbei focus:outline-none focus:ring-2 focus:ring-salbei/20";

// Zwei-Schritte-Formular (Salient-typisches Progress-Pattern): Schritt 1
// erfasst, WAS gewünscht wird (Kita, Kind), Schritt 2 WIE wir antworten
// können (Kontakt). Dieselben Felder, dieselbe Submit-Logik wie zuvor — nur
// auf zwei Bildschirme verteilt, mit Fortschrittsanzeige und einer
// "Zurück"-Möglichkeit, bevor tatsächlich abgeschickt wird.
export default function AnmeldungPage() {
  return (
    <Suspense fallback={null}>
      <AnmeldungForm />
    </Suspense>
  );
}

function AnmeldungForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [step, setStep] = useState<1 | 2>(1);
  const stepOneRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();

  // Vorauswahl der Kita aus dem `kita`-Query-Parameter (z. B. von einer
  // Kita-Seite verlinkt) — Allowlist-Check gegen `allKitas`, ein unbekannter
  // Wert wird ignoriert statt übernommen.
  const preselectedKita = useMemo(() => {
    const value = searchParams.get("kita");
    if (!value) return "";
    return allKitas.some((k) => k.slug === value) ? value : "";
  }, [searchParams]);

  function goToStep2() {
    const container = stepOneRef.current;
    if (!container) return;
    const fields = container.querySelectorAll<HTMLInputElement | HTMLSelectElement>("input, select");
    for (const field of fields) {
      if (!field.checkValidity()) {
        field.reportValidity();
        return;
      }
    }
    setStep(2);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: für Menschen unsichtbares Feld (siehe absolute Positionierung
    // unten). Bots füllen es trotzdem meist aus — ist es nicht leer, wird
    // die Anfrage stillschweigend verworfen, ohne den Absender zu warnen.
    if ((data.get("website") as string)?.length) {
      setStatus("sent");
      return;
    }

    setStatus("sending");

    const { error } = await supabase.from("anmeldungen").insert({
      parent_name: (data.get("parent_name") as string)?.trim(),
      email: (data.get("email") as string)?.trim(),
      phone: (data.get("phone") as string)?.trim() || null,
      gewuenschte_kita: data.get("gewuenschte_kita") as string,
      geburtsmonat_jahr: (data.get("geburtsmonat_jahr") as string)?.trim(),
      betreuungsbeginn: (data.get("betreuungsbeginn") as string)?.trim() || null,
      nachricht: (data.get("nachricht") as string)?.trim() || null,
    });

    if (error) {
      console.error("Anmeldung-Insert fehlgeschlagen:", error.message);
      setStatus("error");
      return;
    }

    setStatus("sent");
    form.reset();
    setStep(1);
  }

  return (
    <main className="section-y-sm">
      <Container narrow>
        <Reveal>
          <p className="eyebrow mb-2.5">Anmeldung</p>
          <h1 className="mb-4 text-3xl font-extrabold sm:text-4xl">Kita-Platz anfragen</h1>
          <p className="mb-6 max-w-xl leading-relaxed text-inkSoft">
            Diese Anfrage ist unverbindlich und stellt <strong>keine Garantie</strong> auf einen Betreuungsplatz dar.
            Die Vergabe hängt von freien Plätzen, dem Alter Ihres Kindes und weiteren Kriterien der jeweiligen Kita
            ab. Wir melden uns, sobald wir Ihre Anfrage geprüft haben.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="card-salient mb-9 p-7">
            <h2 className="mb-[18px] text-[17px] font-bold">So geht es weiter</h2>
            <div className="grid gap-4">
              {STEPS.map((s, i) => (
                <div key={s.title} className="flex items-start gap-3.5">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-salbei text-[13px] font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <div className="mb-0.5 text-[14.5px] font-bold text-ink">{s.title}</div>
                    <div className="text-sm leading-relaxed text-inkSoft">{s.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {status === "sent" ? (
          <div className="card-salient p-8 text-center" role="status">
            <div
              aria-hidden="true"
              className="mx-auto mb-3.5 flex h-11 w-11 items-center justify-center rounded-full bg-salbei/10 text-salbei"
            >
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                <path d="M3 8.5l3.2 3L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-lg font-bold text-salbei">Danke für Ihre Anfrage!</p>
            <p className="mt-2.5 text-inkSoft">Wir melden uns so bald wie möglich bei Ihnen.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="anmeldung-form card-salient grid gap-4 p-7">
            {/* Fortschrittsanzeige */}
            <div className="mb-1 flex items-center gap-2.5">
              {[1, 2].map((n) => (
                <div key={n} className={`flex items-center gap-2.5 ${n === 1 ? "flex-none" : "flex-1"}`}>
                  <div
                    className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full text-[12.5px] font-bold transition-colors duration-200"
                    style={{
                      background: step >= n ? colors.salbei : colors.border,
                      color: step >= n ? "#fff" : colors.inkMuted,
                    }}
                  >
                    {n}
                  </div>
                  {n === 1 && (
                    <div
                      className="h-0.5 flex-1 transition-colors duration-200"
                      style={{ background: step >= 2 ? colors.salbei : colors.border }}
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="mb-1 text-[12.5px] font-semibold uppercase tracking-wide text-inkMuted">
              Schritt {step} von 2 — {step === 1 ? "Wunschkita & Kind" : "Ihre Kontaktdaten"}
            </p>

            {/* Honeypot-Feld gegen einfache Spam-Bots: für Menschen unsichtbar
                und per aria-hidden aus dem Screenreader-Baum entfernt, damit
                es niemanden verwirrt, der die Seite tatsächlich sieht/hört. */}
            <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div ref={stepOneRef} className={`${step === 1 ? "grid" : "hidden"} gap-4`}>
              <div className="grid gap-1.5">
                <label htmlFor="gewuenschte_kita" className="text-[13px] text-inkSoft">
                  Gewünschte Kita *
                </label>
                <select
                  id="gewuenschte_kita"
                  name="gewuenschte_kita"
                  required
                  className={inputClass}
                  defaultValue={preselectedKita}
                >
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  {allKitas.map((k) => (
                    <option key={k.slug} value={k.slug}>
                      {k.name}
                    </option>
                  ))}
                  <option value="egal">Keine Präferenz</option>
                </select>
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="geburtsmonat_jahr" className="text-[13px] text-inkSoft">
                  Geburtsmonat/-jahr des Kindes *
                </label>
                <input
                  id="geburtsmonat_jahr"
                  name="geburtsmonat_jahr"
                  required
                  placeholder="z. B. 03/2025"
                  autoComplete="off"
                  inputMode="numeric"
                  className={inputClass}
                />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="betreuungsbeginn" className="text-[13px] text-inkSoft">
                  Gewünschter Betreuungsbeginn
                </label>
                <input
                  id="betreuungsbeginn"
                  name="betreuungsbeginn"
                  placeholder="z. B. August 2027"
                  autoComplete="off"
                  className={inputClass}
                />
              </div>
              <button type="button" onClick={goToStep2} className="btn-primary justify-self-start">
                Weiter &rarr;
              </button>
            </div>

            <div className={`${step === 2 ? "grid" : "hidden"} gap-4`}>
              <div className="grid gap-1.5">
                <label htmlFor="parent_name" className="text-[13px] text-inkSoft">
                  Name (Elternteil) *
                </label>
                <input id="parent_name" name="parent_name" required={step === 2} autoComplete="name" className={inputClass} />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="email" className="text-[13px] text-inkSoft">
                  E-Mail *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required={step === 2}
                  autoComplete="email"
                  inputMode="email"
                  className={inputClass}
                />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="phone" className="text-[13px] text-inkSoft">
                  Telefon
                </label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" className={inputClass} />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="nachricht" className="text-[13px] text-inkSoft">
                  Nachricht (optional)
                </label>
                <textarea id="nachricht" name="nachricht" rows={4} className={`${inputClass} resize-y`} />
              </div>
              <label className="flex items-start gap-2.5 text-[13px] text-inkSoft">
                <input type="checkbox" required={step === 2} className="mt-0.5" />
                Ich habe verstanden, dass diese Anfrage unverbindlich ist und keinen Anspruch auf einen
                Betreuungsplatz begründet.
              </label>

              {status === "error" && (
                <p className="text-sm text-fehler" role="alert">
                  Beim Senden ist etwas schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an
                  die Kita-E-Mail-Adresse.
                </p>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="rounded-full border-[1.5px] border-border px-5 py-3.5 text-[15px] font-semibold text-inkSoft"
                >
                  &larr; Zurück
                </button>
                <button type="submit" disabled={status === "sending"} className="btn-primary flex-1">
                  {status === "sending" ? "Wird gesendet…" : "Anfrage senden"}
                </button>
              </div>
            </div>
          </form>
        )}
      </Container>
    </main>
  );
}
