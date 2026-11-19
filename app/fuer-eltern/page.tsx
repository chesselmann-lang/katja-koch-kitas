import Link from "next/link";
import { colors } from "@/lib/theme";
import Visual from "@/components/Visual";
import Reveal from "@/components/Reveal";
import ShapeDivider from "@/components/ShapeDivider";
import Container from "@/components/salient/Container";
import PageHero from "@/components/salient/PageHero";

export const metadata = {
  title: "Für Eltern | Kitas von Katja Koch",
  description: "Alle wichtigen Informationen für Eltern: Anmeldung, Eingewöhnung, häufige Fragen und Kontakt.",
  alternates: { canonical: "/fuer-eltern" },
};

const LINKS = [
  {
    href: "/anmeldung",
    title: "Kita-Platz anfragen",
    text: "Formlose Interessensbekundung – unverbindlich und ohne Zusage auf einen Platz.",
    theme: "alltag" as const,
  },
  {
    href: "/paedagogik/eingewoehnung",
    title: "Eingewöhnung",
    text: "Wie der Start in die Kita in individuellem Tempo gelingt.",
    theme: "kind" as const,
  },
  {
    href: "/haeufige-fragen",
    title: "Häufige Fragen",
    text: "Antworten auf die häufigsten Fragen rund um Alltag, Anmeldung und Betreuung.",
    theme: "raeume" as const,
  },
  {
    href: "/kontakt",
    title: "Kontakt & Besichtigung",
    text: "Erreichen Sie uns direkt oder fragen Sie einen Besichtigungstermin an.",
    theme: "team" as const,
  },
];

export default function FuerElternPage() {
  return (
    <main>
      <PageHero
        crumb="Für Eltern"
        eyebrow="Für Eltern"
        title="Alles Wichtige auf einen Blick."
        description="Ob Sie sich für einen Platz interessieren oder Ihr Kind schon bei uns betreut wird: Hier finden Sie die wichtigsten Anlaufstellen rund um Anmeldung, Eingewöhnung und Kontakt."
        visual={<Visual theme="kind" aspect="4 / 3.2" radius={24} />}
      />

      <ShapeDivider from={colors.background} to={colors.backgroundAlt} />
      <section className="section-y bg-backgroundAlt">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LINKS.map((l, i) => (
              <Reveal key={l.href} delay={i * 80}>
                <Link href={l.href} className="block overflow-hidden rounded-card bg-card shadow-sm no-underline">
                  <Visual theme={l.theme} aspect="16 / 10" radius={0} />
                  <div className="p-[22px]">
                    <div className="mb-1.5 text-[17px] font-bold">{l.title}</div>
                    <div className="text-sm leading-relaxed text-inkSoft">{l.text}</div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
