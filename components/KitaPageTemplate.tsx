import Link from "next/link";
import KitaTermine from "./KitaTermine";
import type { ReactNode } from "react";
import { dailyRhythmNote, type KitaData } from "@/lib/kitas-data";
import { colors } from "@/lib/theme";
import Visual, { type VisualTheme } from "./Visual";
import { IconPin, IconClock, IconUsers, IconBaby, IconPerson, FactChip } from "./KitaFactBar";
import type { SeitePreview } from "@/lib/sanity";
import Reveal from "./Reveal";
import Accordion from "./Accordion";
import PageSubnav, { type SubnavItem } from "./PageSubnav";
import Gallery, { type GalleryImage } from "./Gallery";
import Container from "./salient/Container";
import Hero from "./salient/Hero";
import SectionHeading from "./salient/SectionHeading";
import FeatureGrid, { type Feature } from "./salient/FeatureGrid";
import CallToAction from "./salient/CallToAction";

function IconChevronRight({ color }: { color: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true" style={{ margin: "0 2px", position: "relative", top: 1 }}>
      <path d="M4 2.5L8 6l-4 3.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Section({
  id,
  title,
  eyebrow,
  children,
  bg,
  accent,
  dotGrid,
}: {
  id?: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  bg?: "sand" | "dark-waldgruen";
  accent?: string;
  /** Sehr dezentes Punktraster als Hintergrund-Textur statt flacher Farbfläche — nur für die wärmeren Sand-Sections gedacht, nicht für den dunklen Kontakt-Block. */
  dotGrid?: boolean;
}) {
  const bgClass = bg === "sand" ? "bg-backgroundAlt" : bg === "dark-waldgruen" ? "bg-waldgruen" : "";
  return (
    <section id={id} className={`section-y-sm scroll-mt-28 ${bgClass} ${dotGrid ? "bg-dot-grid" : ""}`}>
      <Container>
        <Reveal>
          {(eyebrow || title) && (
            <div className="mb-6">
              <SectionHeading
                eyebrow={eyebrow}
                title={title ?? ""}
                maxWidth="max-w-none"
                titleSize="sm"
                eyebrowStyle={{ color: accent ?? colors.salbei }}
              />
            </div>
          )}
          {children}
        </Reveal>
      </Container>
    </section>
  );
}

// Icon-Badge für die Pädagogik-Schwerpunkte-Karten (Salient-"Fancy Box"-
// Äquivalent) — ein schlichtes, generisches Blatt-Symbol statt erfundener,
// themenspezifischer Icons je Schwerpunkt.
function FocusIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 16c7 0 12-5 12-12-7 0-12 5-12 12Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4 16c2-4 4.5-6.5 8-8.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

// Statische Klassennamen pro Kita (Tailwind scannt Quelltexte per Regex —
// ein per Template-String zusammengesetzter Klassenname wie `text-${slug}-primary`
// würde dabei NICHT erkannt und somit auch nicht generiert; deshalb hier als
// vollständig ausgeschriebene Literale in einer Lookup-Map).
const ACCENT_TEXT_CLASS: Record<string, string> = {
  schatzkiste: "text-schatzkiste-primary",
  blumenwiese: "text-blumenwiese-primary",
  baumhaus: "text-baumhaus-primary",
  kinderhaus: "text-kinderhaus-primary",
};

// Grammatisch korrekte Artikel/Präpositionen je Kita-Name (F07): "Schatzkiste"
// und "Blumenwiese" sind feminin ("die"), "Baumhaus" und "Kinderhaus" sind
// neutrum ("das"). Ein generischer Textbaustein wie "in der ${shortName}"
// ist für die neutralen Namen falsch ("in der Baumhaus") — deshalb hier eine
// Lookup-Map statt eines einzigen Satzbausteins für alle vier Häuser.
const GRAMMAR: Record<
  string,
  { in: string; inAkk: string; akk: string }
> = {
  schatzkiste: { in: "in der", inAkk: "in die", akk: "die" },
  blumenwiese: { in: "in der", inAkk: "in die", akk: "die" },
  baumhaus: { in: "im", inAkk: "ins", akk: "das" },
  kinderhaus: { in: "im", inAkk: "ins", akk: "das" },
};

// Testbild-Sets je Kita (siehe Gallery.tsx) — Themen und generische
// Aktivitätsbeschreibungen, keine Behauptung konkreter, dokumentierter
// Momente. Ersatz durch echte Fotos erfolgt ausschließlich über
// PHOTO-SHOTLIST.md, Struktur hier bleibt dafür unverändert.
const GALLERY_SETS: Record<string, GalleryImage[]> = {
  schatzkiste: [
    { theme: "bauernhof", caption: "Auf dem Bauernhof" },
    { theme: "wald", caption: "Zeit im Wald" },
    { theme: "kind", caption: "Freispiel" },
    { theme: "alltag", caption: "Morgenkreis" },
    { theme: "raeume", caption: "Räume & Gelände" },
    { theme: "garten", caption: "Im Garten" },
  ],
  blumenwiese: [
    { theme: "garten", caption: "Im Garten" },
    { theme: "natur", caption: "Naturerfahrung" },
    { theme: "kind", caption: "Freispiel" },
    { theme: "alltag", caption: "Gemeinsames Mittagessen" },
    { theme: "raeume", caption: "Räume & Gelände" },
    { theme: "blumenwiese", caption: "Draußen unterwegs" },
  ],
  baumhaus: [
    { theme: "wald", caption: "Zeit im Wald" },
    { theme: "natur", caption: "Naturerfahrung" },
    { theme: "kind", caption: "Freispiel" },
    { theme: "alltag", caption: "Morgenkreis" },
    { theme: "raeume", caption: "Räume & Gelände" },
    { theme: "baumhaus", caption: "Abenteuer draußen" },
  ],
  kinderhaus: [
    { theme: "kind", caption: "Freispiel" },
    { theme: "alltag", caption: "Kreativzeit" },
    { theme: "raeume", caption: "Räume & Gelände" },
    { theme: "garten", caption: "Im Garten" },
    { theme: "natur", caption: "Naturerfahrung" },
    { theme: "kinderhaus", caption: "Gemeinsam unterwegs" },
  ],
};

export default function KitaPageTemplate({
  kita,
  deepPages,
  heroTheme,
  signatureSection,
}: {
  kita: KitaData;
  deepPages?: SeitePreview[];
  heroTheme?: VisualTheme;
  /** Hausspezifischer "Gefühl"-Abschnitt (z. B. Bauernhof, Inklusion, Garten-Story), direkt nach den Pädagogik-Schwerpunkten eingefügt. */
  signatureSection?: ReactNode;
}) {
  const accent = kita.accentColor;
  const grammar = GRAMMAR[kita.slug] ?? GRAMMAR.schatzkiste;
  const theme: VisualTheme = heroTheme ?? (kita.slug as VisualTheme);

  // Sub-Navigation nur mit Abschnitten, die auf dieser Kita-Seite tatsächlich
  // existieren (einige Sektionen werden je nach Datenlage ausgeblendet).
  const subnavItems: SubnavItem[] = [
    { id: "profil", label: "Profil" },
    { id: "paedagogik", label: "Pädagogik" },
    { id: "alltag", label: "Alltag" },
    ...(kita.outdoorAndRooms ? [{ id: "raeume", label: "Räume & Gelände" }] : []),
    ...(kita.foodInfo ? [{ id: "verpflegung", label: "Verpflegung" }] : []),
    { id: "impressionen", label: "Impressionen" },
    { id: "gut-zu-wissen", label: "Gut zu wissen" },
    { id: "faq", label: "Fragen" },
    { id: "kontakt", label: "Kontakt" },
  ];

  const galleryImages = GALLERY_SETS[kita.slug] ?? GALLERY_SETS.schatzkiste;

  // "Gut zu wissen"-Kartengrid (Salient "SecondaryFeatures"-Muster): kompakte
  // Kurzfassungen zu Tagesablauf, Eingewöhnung, Team und Zusammenarbeit — alles
  // bereits an anderer Stelle bestätigter, echter Inhalt, hier nur als
  // Schnellüberblick mit Verweis auf die ausführlichen Abschnitte.
  const firstRhythm = kita.dailyRhythmExample[0];
  const lastRhythm = kita.dailyRhythmExample[kita.dailyRhythmExample.length - 1];
  const gutZuWissenFeatures: Feature[] = [
    {
      icon: <IconClock />,
      title: "Tagesablauf",
      description: (
        <>
          {`${firstRhythm.time} Uhr ${firstRhythm.text.toLowerCase()} — bis ${lastRhythm.time} Uhr ${lastRhythm.text.toLowerCase()}.`}{" "}
          <a href="#alltag" className="font-semibold" style={{ color: accent }}>
            Beispiel-Tagesablauf &darr;
          </a>
        </>
      ),
    },
    {
      icon: <FocusIcon color={colors.waldgruen} />,
      title: "Eingewöhnung",
      description: (
        <>
          Der Übergang von zu Hause in die Kita ist ein großer Schritt. Wir begleiten ihn behutsam und im
          individuellen Tempo Ihres Kindes, gemeinsam mit Ihnen als Bezugsperson.{" "}
          <Link href="/paedagogik/eingewoehnung" className="font-semibold" style={{ color: accent }}>
            Im Detail &rarr;
          </Link>
        </>
      ),
    },
    {
      icon: <IconPerson />,
      title: "Unser Team",
      description: (
        <>
          Namen und Qualifikationen veröffentlichen wir, sobald alle Kolleg:innen ihr Einverständnis gegeben haben.{" "}
          <Link href="/team" className="font-semibold" style={{ color: accent }}>
            Zur Team-Seite &rarr;
          </Link>
        </>
      ),
    },
    {
      icon: <IconUsers />,
      title: "Mit Eltern im Austausch",
      description:
        "Kurze Wege, offene Gespräche beim Bringen und Abholen und regelmäßige Entwicklungsgespräche – persönlicher Austausch steht im Vordergrund.",
    },
  ];

  // Strukturierte Daten (Schema.org ChildCare) für Suchmaschinen — nur
  // öffentlich bestätigte Stammdaten aus lib/kitas-data.ts, keine erfundenen
  // Angaben.
  const SITE_URL = "https://katja-koch-kitas.vercel.app";
  const postalCodeMatch = kita.address.match(/\b(\d{5})\b/);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    name: kita.name,
    description: kita.intro,
    url: `${SITE_URL}/${kita.slug}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: kita.address.split(",")[0]?.trim(),
      ...(postalCodeMatch ? { postalCode: postalCodeMatch[1] } : {}),
      addressLocality: "Marl",
      addressRegion: "NRW",
      addressCountry: "DE",
    },
    telephone: kita.phone,
    email: kita.email,
    ...(kita.openingHours && kita.openingHours !== "Bitte direkt bei der Kita erfragen"
      ? { openingHours: kita.openingHours }
      : {}),
    parentOrganization: {
      "@type": "Organization",
      name: kita.provider.name,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Breadcrumb */}
      <div className="pt-3.5">
        <Container>
          <div className="text-[13px] text-inkMuted">
            <Link href="/" className="text-inkMuted no-underline">
              Startseite
            </Link>
            <IconChevronRight color={colors.inkMuted} />
            {kita.shortName}
          </div>
        </Container>
      </div>

      {/* Hero — echtes Salient-Hero-Modul: Eyebrow, großer Titel, Subcopy, zwei CTAs,
          Visual rechts (zweispaltig ab lg, einspaltig darunter). */}
      <Hero
        accentClassName={ACCENT_TEXT_CLASS[kita.slug] ?? "text-waldgruen"}
        eyebrow={
          <span className="inline-flex flex-wrap items-center gap-2.5">
            <span
              className="inline-block rounded-full px-3.5 py-1 text-[13px] font-semibold text-white"
              style={{ background: accent }}
            >
              {kita.name}
            </span>
            <span>{kita.leitidee}</span>
          </span>
        }
        title={kita.tagline}
        description={kita.intro}
        actions={
          <>
            <a
              href={`/anmeldung?kita=${kita.slug}`}
              className="rounded-full px-[26px] py-3 text-[15px] font-semibold text-white"
              style={{ background: accent }}
            >
              Kita-Platz anfragen
            </a>
            <a
              href={`/kontakt?kita=${kita.slug}&anliegen=besichtigung`}
              className="rounded-full border-[1.5px] px-[26px] py-3 text-[15px] font-semibold"
              style={{ borderColor: colors.ink, color: colors.ink }}
            >
              Besichtigung anfragen
            </a>
          </>
        }
        visual={
          <div className="rounded-[28px] p-[3px]" style={{ background: `linear-gradient(135deg, ${accent}55, transparent 60%)` }}>
            <Visual theme={theme} aspect="4 / 3.4" radius={24} factLabel={kita.capacityText} />
          </div>
        }
      />
      <Container>
        <p className="-mt-10 pb-10 text-[12.5px] text-inkMuted">
          Unverbindlich &amp; kostenlos — keine Garantie auf einen Betreuungsplatz.
        </p>
      </Container>

      <PageSubnav items={subnavItems} accent={accent} />

      {/* Fact Bar — als Design-Element, nicht als Tabelle */}
      <Section bg="sand" accent={accent} dotGrid>
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
          <FactChip icon={<IconPin />} label="Adresse" value={`${kita.address} · ${kita.district}`} accent={accent} />
          <FactChip icon={<IconClock />} label="Öffnungszeiten" value={kita.openingHours} accent={accent} />
          <FactChip icon={<IconBaby />} label="Altersspanne" value={kita.ageRange} accent={accent} />
          <FactChip icon={<IconUsers />} label="Plätze" value={kita.capacityText} accent={accent} />
          <FactChip icon={<IconPerson />} label={kita.leitungLabel} value={kita.leitung} accent={accent} />
        </div>
        <p className="mt-3.5 text-[12.5px] text-inkMuted">Träger: {kita.provider.name}</p>
        {kita.developmentStatus && (
          <div
            className="mt-5 grid max-w-[700px] gap-1.5 rounded-2xl border border-dashed bg-white p-5"
            style={{ borderColor: colors.terrakotta }}
          >
            <div className="text-sm font-bold">Aktueller Entwicklungsstand</div>
            <div className="text-sm text-inkSoft">{kita.developmentStatus.current}</div>
            <div className="text-[13px] italic text-inkMuted">{kita.developmentStatus.planned}</div>
          </div>
        )}
      </Section>

      {/* Profil — Editorial Split (Bild rechts) */}
      <Section id="profil" eyebrow="Unser Profil" title={`Wie wir ${grammar.in} ${kita.shortName} arbeiten`} accent={accent}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-11">
          <div className="grid gap-4">
            {kita.profile.map((p, i) =>
              i === 0 && p.length <= 60 ? (
                <p key={i} className="mb-1 text-xl font-bold leading-snug sm:text-2xl" style={{ color: accent }}>
                  {p}
                </p>
              ) : (
                <p key={i} className="leading-relaxed text-inkSoft">
                  {p}
                </p>
              )
            )}
          </div>
          <Visual theme="alltag" aspect="4 / 5" radius={20} />
        </div>
      </Section>

      {/* Pädagogik-Schwerpunkte — als Fancy-Box-Karten mit Icon + Hover-Lift */}
      <Section id="paedagogik" eyebrow="Pädagogik" title="Schwerpunkte im Alltag" bg="sand" accent={accent} dotGrid>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {kita.pedagogyFocusPoints.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <div className="focus-card card-salient p-7" style={{ borderTop: `3px solid ${accent}` }}>
                <div
                  className="focus-card-icon mb-3.5 flex h-[38px] w-[38px] items-center justify-center rounded-[10px] transition-transform duration-200"
                  style={{ background: `${accent}1a` }}
                >
                  <FocusIcon color={accent} />
                </div>
                <h3 className="mb-2 text-[17px] font-bold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-inkSoft">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6">
          <Link href="/paedagogik" className="font-semibold" style={{ color: accent }}>
            Mehr zu unserer Pädagogik &rarr;
          </Link>
        </p>
        <style>{`
          .focus-card { transition: transform 220ms ease, box-shadow 220ms ease; }
          .focus-card:hover { transform: translateY(-6px); box-shadow: 0 16px 32px rgba(43,43,34,0.16); }
          .focus-card:hover .focus-card-icon { transform: rotate(-8deg) scale(1.1); }
          @media (prefers-reduced-motion: reduce) {
            .focus-card, .focus-card:hover, .focus-card-icon, .focus-card:hover .focus-card-icon { transition: none; transform: none; }
          }
        `}</style>
      </Section>

      {signatureSection}

      {/* Alltag — Bild links, Zeitleiste rechts */}
      <Section id="alltag" eyebrow="Alltag" title="Ein Tag bei uns (Beispiel)" accent={accent}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-11">
          <Visual theme="kind" aspect="4 / 5" radius={20} />
          <div>
            <p className="mb-5 text-[13px] italic text-inkMuted">{dailyRhythmNote}</p>
            <div className="grid gap-3">
              {kita.dailyRhythmExample.map((r) => (
                <div key={r.time} className="flex items-baseline gap-4">
                  <div className="min-w-[84px] text-sm font-bold" style={{ color: accent }}>
                    {r.time}
                  </div>
                  <div className="text-[15px] text-inkSoft">{r.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Räume & Außengelände — volle Breite, nur wenn bestätigte Angaben vorliegen */}
      {kita.outdoorAndRooms && (
        <Section id="raeume" eyebrow="Räume & Außengelände" title="Wo die Kinder ihren Alltag verbringen" bg="sand" accent={accent} dotGrid>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <Visual theme="raeume" aspect="16 / 10" radius={20} />
            <p className="leading-relaxed text-inkSoft">{kita.outdoorAndRooms}</p>
          </div>
        </Section>
      )}

      {/* Verpflegung — nur wenn bestätigte Angabe vorliegt */}
      {kita.foodInfo && (
        <Section id="verpflegung" eyebrow="Verpflegung" title="Essen & Trinken" accent={accent}>
          <p className="max-w-[700px] leading-relaxed text-inkSoft">{kita.foodInfo}</p>
          <p className="mt-4">
            <Link href="/paedagogik/verpflegung" className="font-semibold" style={{ color: accent }}>
              Mehr zum Thema Ernährung &rarr;
            </Link>
          </p>
        </Section>
      )}

      {/* Gut zu wissen — echtes Salient-"SecondaryFeatures"-Kartengrid statt
          handgebauter Kartenreihe: Tagesablauf, Eingewöhnung, Team und
          Zusammenarbeit auf einen Blick, mit Verweisen auf die Detailabschnitte. */}
      <Section id="gut-zu-wissen" eyebrow="Gut zu wissen" title="Tagesablauf, Eingewöhnung & Team" bg="sand" accent={accent} dotGrid>
        <FeatureGrid features={gutZuWissenFeatures} columns={4} />
      </Section>

      {/* Vertiefende Unterseiten (nur wenn vorhanden) */}
      {kita.hasDeepContent && deepPages && deepPages.length > 0 && (
        <Section eyebrow="Vertiefung" title={`Mehr aus der ${kita.shortName}`} accent={accent}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deepPages.map((p) => (
              <a
                key={p._id}
                href={`/${kita.slug}/${p.slug.current}`}
                className="card-salient block p-7 no-underline transition-shadow duration-200 hover:shadow-lg"
              >
                <div className="mb-1.5 text-xs font-bold uppercase" style={{ color: accent }}>
                  {p.eyebrow}
                </div>
                <div className="mb-1.5 font-bold">{p.titel}</div>
                <div className="text-sm leading-snug text-inkSoft">{p.intro}</div>
              </a>
            ))}
          </div>
        </Section>
      )}

      {/* Galerie — läuft mit klar gekennzeichneten Testbildern (siehe Gallery.tsx),
          bis rechtefreie, echte Fotos vorliegen (PHOTO-SHOTLIST.md). */}
      <Section id="impressionen" eyebrow="Impressionen" title={`Einblicke ${grammar.inAkk} ${kita.shortName}`} accent={accent}>
        <Gallery images={galleryImages} accent={accent} />
      </Section>

      {/* FAQ — animiertes Akkordeon statt natives <details> */}
      <Section id="faq" eyebrow="Häufige Fragen" title={`Fragen zur ${kita.shortName}`} bg="sand" accent={accent} dotGrid>
        <div className="max-w-[760px]">
          <Accordion items={kita.faq} accent={accent} />
        </div>
        <p className="mt-5">
          <Link href="/haeufige-fragen" className="font-semibold" style={{ color: accent }}>
            Alle allgemeinen Fragen &rarr;
          </Link>
        </p>
      </Section>

      {/* Kontakt — reine Kontaktangaben, die CTA folgt direkt darunter als eigenes Modul */}
      <KitaTermine slug={kita.slug} accent={accent} />

      <Section id="kontakt" accent={accent}>
        <h2 className="mb-3 text-2xl font-extrabold">Kontakt {kita.shortName}</h2>
        <div className="max-w-[420px] text-[15px] leading-[2] text-inkSoft">
          <div>
            {kita.address}, {kita.district}{" "}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${kita.address}, ${kita.district}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
              style={{ color: accent }}
            >
              Route
            </a>
          </div>
          <div>
            <a href={`tel:${kita.phone.replace(/\s+/g, "")}`} className="text-inkSoft">
              {kita.phone}
            </a>
          </div>
          <div>
            <a href={`mailto:${kita.email}`} className="text-inkSoft">
              {kita.email}
            </a>
          </div>
          <div>
            {kita.leitungLabel}: {kita.leitung}
          </div>
          {kita.website && <div>Web: {kita.website}</div>}
        </div>
      </Section>

      {/* CTA-Band vor dem Footer — echtes Salient-CallToAction-Modul statt der
          bisherigen, pro Seite einzeln gebauten dunklen Kontakt-Buttons. */}
      <CallToAction
        title={`Möchten Sie ${grammar.akk} ${kita.shortName} kennenlernen?`}
        description="Unverbindlich & kostenlos — keine Garantie auf einen Betreuungsplatz."
        actions={
          <>
            <a href={`/anmeldung?kita=${kita.slug}`} className="rounded-full bg-white px-[26px] py-3.5 text-[15px] font-bold text-waldgruen">
              Kita-Platz anfragen
            </a>
            <a
              href={`/kontakt?kita=${kita.slug}&anliegen=besichtigung`}
              className="rounded-full border-[1.5px] border-white px-[26px] py-3.5 text-[15px] font-bold text-white"
            >
              Besichtigung anfragen
            </a>
          </>
        }
      />
    </main>
  );
}
