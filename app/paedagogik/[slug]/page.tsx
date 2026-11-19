import { getPaedagogikTopic, paedagogikTopics } from "@/lib/paedagogik-data";
import { colors } from "@/lib/theme";
import { notFound } from "next/navigation";
import Link from "next/link";
import Visual from "@/components/Visual";
import Reveal from "@/components/Reveal";
import Container from "@/components/salient/Container";

export function generateStaticParams() {
  return paedagogikTopics.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const topic = getPaedagogikTopic(params.slug);
  if (!topic) return {};
  return {
    title: `${topic.title} | Pädagogik | Kitas von Katja Koch`,
    description: topic.teaser,
    alternates: { canonical: `/paedagogik/${topic.slug}` },
  };
}

export default function PaedagogikTopicPage({ params }: { params: { slug: string } }) {
  const topic = getPaedagogikTopic(params.slug);
  if (!topic) return notFound();

  const idx = paedagogikTopics.findIndex((t) => t.slug === topic.slug);
  const next = paedagogikTopics[(idx + 1) % paedagogikTopics.length];

  return (
    <main>
      <section className="pt-6">
        <Container>
          <div className="text-[13px] text-inkMuted">
            <Link href="/" className="text-inkMuted no-underline">
              Startseite
            </Link>{" "}
            /{" "}
            <Link href="/paedagogik" className="text-inkMuted no-underline">
              Pädagogik
            </Link>{" "}
            / {topic.title}
          </div>
        </Container>
      </section>

      <section className="section-y">
        <Container>
          <div
            className={`grid grid-cols-1 items-center gap-10 lg:gap-11 ${
              topic.serious ? "" : "lg:grid-cols-[0.85fr_1.15fr]"
            }`}
          >
            {!topic.serious && (
              <Reveal>
                <Visual theme={topic.theme} aspect="4 / 4.6" radius={22} />
              </Reveal>
            )}
            <Reveal delay={90} style={topic.serious ? { maxWidth: 740, margin: "0 auto", textAlign: "center" } : undefined}>
              {topic.serious && (
                <div className="mb-7 flex justify-center">
                  <Visual theme={topic.theme} aspect="16 / 7" radius={18} style={{ maxWidth: 560, width: "100%" }} />
                </div>
              )}
              <p className="eyebrow mb-2.5">Pädagogik</p>
              <h1 className="mb-5 text-3xl font-extrabold leading-tight sm:text-4xl">{topic.title}</h1>
              <div className="grid gap-4">
                {topic.body.map((p, i) => (
                  <p key={i} className={`text-[16.5px] leading-[1.8] text-inkSoft ${topic.serious ? "text-left" : ""}`}>
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t pt-7" style={{ borderColor: colors.border }}>
            <Link href="/paedagogik" className="font-semibold text-inkMuted">
              &larr; Alle Themen
            </Link>
            <Link href={`/paedagogik/${next.slug}`} className="font-bold text-waldgruen">
              Weiter: {next.title} &rarr;
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
