import type { ReactNode } from "react";

export type Feature = {
  icon?: ReactNode;
  title: string;
  description: ReactNode;
};

// Salient "SecondaryFeatures"-Muster: 2 Spalten ab sm (640px), 3 Spalten ab
// lg (1024px), Icon-Chip oben, Titel, kurzer Text. Ersetzt die bisher auf
// mehreren Seiten wiederholten, leicht unterschiedlichen Card-Grids.
export default function FeatureGrid({ features, columns = 3 }: { features: Feature[]; columns?: 2 | 3 | 4 }) {
  const colsClass =
    columns === 2 ? "sm:grid-cols-2" : columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid grid-cols-1 gap-8 ${colsClass}`}>
      {features.map((f, i) => (
        <div key={i} className="feature-card card-salient p-6 sm:p-8">
          {f.icon ? (
            <div className="feature-card-icon mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-waldgruen/10 text-waldgruen transition-transform duration-200">
              {f.icon}
            </div>
          ) : null}
          <h3 className="text-lg font-bold text-ink">{f.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-inkSoft">{f.description}</p>
        </div>
      ))}
      <style>{`
        .feature-card { transition: transform 180ms ease, box-shadow 180ms ease; }
        .feature-card:hover { transform: translateY(-4px); box-shadow: 0 10px 24px rgba(43,43,34,0.12); }
        .feature-card:hover .feature-card-icon { transform: rotate(-6deg) scale(1.06); }
      `}</style>
    </div>
  );
}
