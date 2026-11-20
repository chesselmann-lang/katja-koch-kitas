# Katja Koch Kitas – Websites

Öffentliche Websites der vier Kitas (Schatzkiste, Blumenwiese, Baumhaus, Kinderhaus). Teil des Projekts KitaHub;
Gesamtstand und Regeln stehen in `..\app\CLAUDE.md` und `..\app\STATUS.md` (Phase 3: Websites mit der App verbinden).

| Was | Ort |
| --- | --- |
| Code | GitHub `chesselmann-lang/katja-koch-kitas` |
| Hosting | Vercel `katja-koch-kitas` (noch ohne eigene Domain, Deploy per CLI) |
| Inhalte | Sanity-Projekt `ebuntiof`, Dataset `production` (Schema per MCP deployt, kein Studio-Quellcode) |
| Formulare | Supabase `katja-koch-kitas` (Tabelle `anmeldungen`, `kitas`) |

Stack: Next.js 15 · Tailwind · `@sanity/client` · `@supabase/supabase-js`. Variablen siehe `.env.example` (`vercel env pull .env.local`).

**Rechtlich:** Die Websites laufen unter Katja Koch und ihren Trägern. Christian und seine Marken erscheinen dort nicht
(kein Impressum-, Partner- oder Werbehinweis).

Inhalte mit `contentStatus` „entwurf“ oder „platzhalter“ und Preise mit `preisStatus` „entwurf“ sind nicht freigegeben.
