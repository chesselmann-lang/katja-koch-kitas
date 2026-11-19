import { getKitaWissenArticle, kitaWissenArticles } from "@/lib/kita-wissen-articles";
import type { KitaWissenCategory } from "@/lib/kita-wissen-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Visual, { type VisualTheme } from "@/components/Visual";
import Reveal from "@/components/Reveal";
import ShapeDivider from "@/components/ShapeDivider";
import { colors } from "@/lib/theme";
import Container from "@/components/salient/Container";

// Dieselbe illustrative Zuordnung wie bei den Pädagogik-Themenseiten
// (lib/paedagogik-data.ts) — pro Kategorie ein passendes, generisches
// Visual-Thema statt erfundener, artikelspezifischer Bilder.
const CATEGORY_THEME: Record<KitaWissenCategory, VisualTheme> = {
  Entwicklung: "kind",
  Natur: "natur",
  Wald: "wald",
  Tiere: "bauernhof",
  Bewegung: "raeume",
  Ernährung: "alltag",
  Eingewöhnung: "alltag",
  Vorschule: "kind",
  Eltern: "team",
  Kinderrechte: "kind",
};

export function generateStaticParams() {
  return kitaWissenArticles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getKitaWissenArticle(params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | Kita-Wissen | Kitas von Katja Koch`,
    description: article.teaser,
    alternates: { canonical: `/kita-wissen/${article.slug}` },
  };
}

export default function KitaWissenArticlePage({ params }: { params: { slug: string } }) {
  const article = getKitaWissenArticle(params.slug);
  if (!article) return notFound();

  const idx = kitaWissenArticles.findIndex((a) => a.slug === article.slug);
  const next = kitaWissenArticles[(idx + 1) % kitaWissenArticles.length];
  const theme = CATEGORY_THEME[article.category] ?? "natur";

  return (
    <main>
      <section className="pt-6">
        <Container>
          <div className="text-[13px] text-inkMuted">
            <Link href="/" className="text-inkMuted no-underline">
              Startseite
            </Link>{" "}
            /{" "}
            <Link href="/kita-wissen" className="text-inkMuted no-underline">
              Kita-Wissen
            </Link>{" "}
            / {article.title}
          </div>
        </Container>
      </section>

      <section className="section-y">
        <Container narrow>
          <Reveal>
            <div className="mb-7 flex justify-center">
              <Visual theme={theme} aspect="16 / 7" radius={18} style={{ maxWidth: 560, width: "100%" }} />
            </div>
            <p className="eyebrow mb-2.5 text-center">{article.category}</p>
            <h1 className="mb-5 text-center text-3xl font-extrabold leading-tight sm:text-4xl">{article.title}</h1>
            <p className="mx-auto mb-10 max-w-[620px] text-center text-lg leading-relaxed text-inkSoft">
              {article.teaser}
            </p>
          </Reveal>

          <div className="grid gap-7">
            {article.sections.map((section, i) => (
              <Reveal key={i} delay={60 + i * 40}>
                <div className="grid gap-4">
                  {section.heading && (
                    <h2 className="text-xl font-bold leading-snug text-ink">{section.heading}</h2>
                  )}
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-[16.5px] leading-[1.8] text-inkSoft">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ShapeDivider from={colors.background} to={colors.backgroundAlt} />
      <section className="section-y-sm bg-backgroundAlt">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/kita-wissen" className="font-semibold text-inkMuted">
              &larr; Alle Artikel
            </Link>
            <Link href={`/kita-wissen/${next.slug}`} className="font-bold text-waldgruen">
              Weiter: {next.title} &rarr;
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
