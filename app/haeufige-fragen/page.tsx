"use client";

import { useState } from "react";
import { faqEntries } from "@/lib/faq-data";
import { colors } from "@/lib/theme";
import Visual from "@/components/Visual";
import Accordion from "@/components/Accordion";
import Container from "@/components/salient/Container";
import PageHero from "@/components/salient/PageHero";

const ALL = "Alle";

export default function FaqPage() {
  const categories = [ALL, ...Array.from(new Set(faqEntries.map((f) => f.category)))];
  const [active, setActive] = useState(ALL);

  const visible = active === ALL ? faqEntries : faqEntries.filter((f) => f.category === active);
  const grouped = Array.from(new Set(visible.map((f) => f.category)));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntries.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        crumb="Häufige Fragen"
        eyebrow="Häufige Fragen"
        title="Antworten auf die Fragen, die uns am häufigsten erreichen."
        description="Nach Themen gefiltert — von Anmeldung über Eingewöhnung bis Verpflegung."
        visual={<Visual theme="raeume" aspect="4 / 3.2" radius={24} />}
      />

      <section className="section-y-sm">
        <Container narrow>
          <div className="mb-9 flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-[18px] py-2.5 text-[13.5px] font-semibold shadow-sm ${
                  active === cat ? "bg-waldgruen text-white" : "bg-card text-inkSoft"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {grouped.map((cat) => (
            <div key={cat} className="mb-9">
              <h2 className="mb-3.5 text-lg font-bold">{cat}</h2>
              <Accordion
                items={visible.filter((f) => f.category === cat).map((f) => ({ q: f.q, a: f.a }))}
                accent={colors.waldgruen}
              />
            </div>
          ))}
        </Container>
      </section>
    </main>
  );
}
