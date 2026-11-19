import type { CSSProperties, ReactNode } from "react";

// Salient wiederholt für fast jede Sektion dasselbe Muster: kleine
// farbige "Eyebrow"-Kennzeichnung, großer Titel, ruhiger Subtext darunter,
// optional zentriert. Dieses Muster war bisher auf jeder Seite einzeln als
// Inline-Style kopiert — jetzt eine Komponente mit konsistenten Breakpoints.
export default function SectionHeading({
  eyebrow,
  title,
  children,
  center = false,
  as: Tag = "h2",
  eyebrowClassName,
  eyebrowStyle,
  maxWidth = "max-w-2xl",
  titleSize = "lg",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  children?: ReactNode;
  center?: boolean;
  as?: "h1" | "h2";
  /** Überschreibt die Standard-Akzentfarbe (text-waldgruen) der Eyebrow, z. B. mit der
      kita-spezifischen Akzentfarbe (etwa "text-baumhaus-primary"). */
  eyebrowClassName?: string;
  /** Alternative zu eyebrowClassName für Fälle mit dynamischem Hex-Wert (z. B. kita.accentColor). */
  eyebrowStyle?: CSSProperties;
  /** Erlaubt breiteren Fließtext für Sections mit viel Inhalt statt max-w-2xl. */
  maxWidth?: string;
  /** "lg" (Standard, Salient-typisch groß) für eigenständige Sections, "sm" für
      dicht aufeinanderfolgende Sections innerhalb einer langen Kita-Seite. */
  titleSize?: "sm" | "lg";
}) {
  const titleClass =
    titleSize === "sm"
      ? "text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl"
      : "text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl";
  return (
    <div className={`${maxWidth} ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p
          className={`eyebrow mb-3 inline-flex items-center gap-2 ${center ? "justify-center" : ""} ${eyebrowClassName ?? ""}`}
          style={eyebrowStyle}
        >
          <span aria-hidden className="inline-block h-[2px] w-4 rounded-full bg-current opacity-70" />
          {eyebrow}
        </p>
      ) : null}
      <Tag className={titleClass}>{title}</Tag>
      {children ? <p className="mt-4 text-base leading-relaxed text-inkSoft sm:text-lg">{children}</p> : null}
    </div>
  );
}
