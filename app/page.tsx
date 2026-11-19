import { getKitaData } from "@/lib/kitas-data";
import Visual, { type VisualTheme } from "@/components/Visual";
import HomeMore from "@/components/HomeMore";
import Milestones from "@/components/Milestones";
import ShapeDivider from "@/components/ShapeDivider";
import Reveal from "@/components/Reveal";
import Container from "@/components/salient/Container";

export const revalidate = 60;

export const metadata = {
  title: "Kitas von Katja Koch – Vier Kitas in Marl",
  description:
    "Schatzkiste, Blumenwiese, Baumhaus und Kinderhaus: vier eigenständige Kitas in Marl mit gemeinsamer Haltung – Nähe, Natur und echte Begleitung für Kinder und Familien.",
  alternates: { canonical: "/" },
};

const HALTUNG_PRINZIPIEN = [
  "Beziehung schafft Sicherheit.",
  "Bewegung gehört zur Entwicklung.",
  "Natur eröffnet echte Erfahrungen.",
  "Selbstständigkeit wächst durch eigenes Tun.",
  "Gemeinschaft entsteht im Alltag.",
];

const NATUR_THEMEN = [
  { title: "Beobachten", text: "Wetter, Jahreszeiten, Pflanzen und Tiere – genau hinsehen, was sich verändert." },
  { title: "Bewegen", text: "Unebener Boden, Äste, Hügel und Matsch fordern den Körper anders heraus als ein Spielplatz." },
  { title: "Forschen", text: "Fragen stellen, ausprobieren, noch einmal versuchen – draußen gibt es dafür viel Raum." },
  { title: "Erleben", text: "Regen, Wind, Sonne und Kälte mit allen Sinnen spüren, nicht nur durchs Fenster beobachten." },
];

const KITA_TILES: {
  slug: string;
  theme: VisualTheme;
  headline: string;
  untertitel: string;
  text: string;
  cta: string;
}[] = [
  {
    slug: "schatzkiste",
    theme: "schatzkiste",
    headline: "Schatzkiste",
    untertitel: "Bauernhof · Tiere · Wald · Natur",
    text: "Hier begegnen Kinder Tieren, erleben Natur unmittelbar und entdecken Zusammenhänge nicht nur aus Büchern, sondern mit den eigenen Händen und Sinnen.",
    cta: "Schatzkiste entdecken",
  },
  {
    slug: "blumenwiese",
    theme: "blumenwiese",
    headline: "Blumenwiese",
    untertitel: "Natur · Bewegung · gemeinsames Wachsen",
    text: "Großzügige Räume und ein weitläufiges Außengelände schaffen Möglichkeiten für Bewegung, Kreativität, Naturerfahrungen und selbstständiges Entdecken.",
    cta: "Blumenwiese entdecken",
  },
  {
    slug: "baumhaus",
    theme: "baumhaus",
    headline: "Baumhaus",
    untertitel: "Wald · Natur · Entwicklung · Inklusion",
    text: "Direkt am Wald entsteht ein Erfahrungsraum, in dem Bewegung, Naturbeobachtung und individuelle Entwicklung eng miteinander verbunden werden.",
    cta: "Baumhaus entdecken",
  },
  {
    slug: "kinderhaus",
    theme: "kinderhaus",
    headline: "Kinderhaus",
    untertitel: "Gemeinschaft · Garten · Geborgenheit",
    text: "Eine kleine, eingruppige Einrichtung mit familiärer Atmosphäre, eigenem Garten und viel Raum für persönliche Beziehungen.",
    cta: "Kinderhaus entdecken",
  },
];

export default function HomePage() {
  const schatzkiste = getKitaData("schatzkiste");

  return (
    <main>
      {/* 1. HERO — Salient-Muster: Vollbreiten-Visual, Titel/CTA mittig unten,
          zweisprachiger Button-Satz (primär gefüllt, sekundär outline). */}
      <section className="relative">
        <Visual theme="hero" aspect="21 / 12" radius={0} minHeight={420} style={{ borderRadius: 0 }}>
          <div className="absolute inset-0 flex items-end">
            <div className="hero-home-fade-in mx-auto mb-10 w-full max-w-2xl px-6 text-center sm:mb-14">
              <p className="mb-3 text-[13px] font-bold uppercase tracking-wide text-[#F1EEE2] [text-shadow:0_1px_6px_rgba(0,0,0,0.3)]">
                Vier Kita-Welten in Marl
              </p>
              <h1 className="mb-5 text-3xl font-extrabold leading-tight text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.35)] sm:text-4xl lg:text-5xl">
                Vier Kitas. Eine Haltung. Ganz viel Kindheit.
              </h1>
              <p className="mb-8 text-base leading-relaxed text-[#F1EEE2] [text-shadow:0_1px_6px_rgba(0,0,0,0.3)] sm:text-lg">
                Schatzkiste, Blumenwiese, Baumhaus und Kinderhaus sind vier eigenständige Einrichtungen mit einem
                gemeinsamen Gedanken: Kinder brauchen verlässliche Beziehungen, Bewegung, Naturerfahrungen und Raum,
                ihre Welt selbst zu entdecken.
              </p>
              <div className="flex flex-wrap justify-center gap-3.5">
                <a
                  href="#kitas"
                  className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-waldgruen transition-transform duration-200 hover:scale-105"
                >
                  Unsere Kitas entdecken
                </a>
                <a
                  href="/anmeldung"
                  className="rounded-full border border-white/70 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/20"
                >
                  Kita-Platz anfragen
                </a>
              </div>
              <div className="mt-4">
                <a href="/paedagogik" className="text-sm text-[#F1EEE2] underline decoration-white/50 transition-colors hover:text-white">
                  Unsere Pädagogik
                </a>
              </div>
            </div>
          </div>
        </Visual>
        <style>{`
          .hero-home-fade-in { animation: heroHomeFadeIn 700ms ease-out both; }
          @keyframes heroHomeFadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
          @media (prefers-reduced-motion: reduce) { .hero-home-fade-in { animation: none; } }
        `}</style>
      </section>

      {/* Milestones — Salient-"Milestone"-Äquivalent, nur echte, aus den
          Stammdaten abgeleitete Zahlen (siehe components/Milestones.tsx) */}
      <section className="section-y-sm">
        <Container>
          <Milestones />
        </Container>
      </section>

      {/* 2. VIER KITAS */}
      <section id="kitas" className="section-y">
        <Container>
          <p className="mb-2.5 text-center text-[13px] font-bold uppercase tracking-wide text-salbei">
            Die vier Häuser
          </p>
          <h2 className="mx-auto mb-3.5 max-w-2xl text-center text-2xl font-extrabold sm:text-3xl lg:text-4xl">
            Vier Häuser. Vier eigene Geschichten.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-inkSoft">
            Jede unserer Einrichtungen hat ihren eigenen Charakter. Was sie verbindet, ist eine Pädagogik, die Kinder
            ernst nimmt und Entwicklung nicht beschleunigen, sondern aufmerksam begleiten möchte.
          </p>

          <div className="grid gap-16 sm:gap-20">
            {KITA_TILES.map((tile, i) => (
              <Reveal key={tile.slug} delay={i * 60}>
                <div
                  className={`grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <Visual theme={tile.theme} aspect="4 / 3" zoomOnHover />
                  <div>
                    <h3 className="mb-1.5 text-2xl font-bold">{tile.headline}</h3>
                    <p className="mb-4 text-[13px] font-bold uppercase tracking-wide text-salbei">{tile.untertitel}</p>
                    <p className="mb-5 leading-relaxed text-inkSoft">{tile.text}</p>
                    <a
                      href={`/${tile.slug}`}
                      className="font-bold text-waldgruen transition-colors duration-150 hover:text-terrakotta"
                    >
                      {tile.cta} &rarr;
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. UNSERE HALTUNG (Editorial Split) */}
      <section className="section-y bg-backgroundAlt">
        <Container>
          <Reveal>
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 lg:[&>*:first-child]:order-2">
              <Visual theme="kind" aspect="4 / 3" zoomOnHover />
              <div>
                <p className="mb-2.5 text-[13px] font-bold uppercase tracking-wide text-salbei">Unsere Haltung</p>
                <h2 className="mb-[18px] text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                  Kinder lernen nicht nur, wenn wir ihnen etwas erklären.
                </h2>
                <p className="mb-5 leading-relaxed text-inkSoft">
                  Kinder lernen, wenn sie ausprobieren. Wenn sie eine Frage verfolgen. Wenn sie sich bewegen, streiten,
                  Lösungen finden, beobachten, bauen, helfen, scheitern und noch einmal beginnen.
                </p>
                <div className="grid gap-2.5">
                  {HALTUNG_PRINZIPIEN.map((p) => (
                    <div key={p} className="flex items-baseline gap-2.5">
                      <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terrakotta" />
                      <p className="m-0 text-[15px] font-semibold text-ink">{p}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <ShapeDivider from="#F3E2C7" to="#33281D" />

      {/* 4. BILD VOM KIND (Dark Statement) */}
      <section className="section-y bg-ink text-[#F1EEE2]">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-5 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                Jedes Kind entwickelt sich auf seine Weise.
              </h2>
              <p className="text-base leading-relaxed text-[#C9C6B4] sm:text-lg">
                Kinder bringen unterschiedliche Erfahrungen, Interessen, Fähigkeiten und ihr eigenes Tempo mit.
                Pädagogische Begleitung bedeutet für uns, genau hinzusehen, Orientierung zu geben und Kindern etwas
                zuzutrauen.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <ShapeDivider from="#33281D" to="#FDF6EC" flip />

      {/* 5. NATUR */}
      <section className="section-y">
        <Container>
          <Reveal>
            <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 lg:[&>*:first-child]:order-2">
              <div>
                <p className="mb-2.5 text-[13px] font-bold uppercase tracking-wide text-salbei">Natur</p>
                <h2 className="mb-[18px] text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                  Draußen verändert sich jeden Tag etwas.
                </h2>
                <p className="leading-relaxed text-inkSoft">
                  Ein Blatt sieht heute anders aus als gestern. Pfützen entstehen und verschwinden. Tiere hinterlassen
                  Spuren. Pflanzen wachsen. Jahreszeiten verändern Licht, Temperatur und Farben. Natur stellt jeden Tag
                  neue Fragen.
                </p>
              </div>
              <Visual theme="wald" aspect="4 / 3" zoomOnHover />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {NATUR_THEMEN.map((t, i) => (
              <Reveal key={t.title} delay={i * 60}>
                <div>
                  <h3 className="mb-2 text-[17px] font-bold text-waldgruen">{t.title}</h3>
                  <p className="text-sm leading-relaxed text-inkSoft">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. BAUERNHOF */}
      <section className="section-y bg-backgroundAlt">
        <Container>
          <Reveal>
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
              <Visual theme="bauernhof" aspect="4 / 3" factLabel={schatzkiste.capacityText} zoomOnHover />
              <div>
                <p className="mb-2.5 text-[13px] font-bold uppercase tracking-wide text-terrakotta">Schatzkiste</p>
                <h2 className="mb-[18px] text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                  Tiere sind keine Dekoration.
                </h2>
                <p className="mb-5 leading-relaxed text-inkSoft">
                  Der Umgang mit Tieren eröffnet Kindern besondere Erfahrungen. Tiere reagieren nicht auf Knopfdruck. Sie
                  brauchen Aufmerksamkeit, Ruhe und Respekt. Daraus können Verantwortung, Geduld und ein Verständnis für
                  andere Lebewesen entstehen.
                </p>
                <a
                  href="/schatzkiste/bauernhof"
                  className="font-bold text-waldgruen transition-colors duration-150 hover:text-terrakotta"
                >
                  Bauernhof der Schatzkiste kennenlernen &rarr;
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <HomeMore />
    </main>
  );
}
