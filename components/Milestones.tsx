// Salient-"Milestone"-Äquivalent — ausschließlich aus echten, bestätigten
// Stammdaten (lib/kitas-data.ts) berechnet. Bewusst KEINE erfundenen Zahlen
// (keine "120+ Kinder betreut", kein Sterne-Rating o.ä.) — nur, was sich aus
// den vorliegenden Daten ehrlich ableiten lässt, entsprechend beschriftet.
import { allKitas } from "@/lib/kitas-data";
import { colors } from "@/lib/theme";
import Reveal from "./Reveal";

// Generische, themenneutrale Icons je Stat-Kachel — rein dekorativ, keine
// erfundene Bedeutung, nur zur optischen Auflockerung der reinen Zahlenreihe.
function IconHouses({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 10l7-6 7 6" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 9v7h10V9" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconUsersGroup({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="7" cy="6.5" r="2.6" stroke={color} strokeWidth="1.5" />
      <path d="M2.5 16c0-2.8 2-4.5 4.5-4.5s4.5 1.7 4.5 4.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="14" cy="7" r="2" stroke={color} strokeWidth="1.3" />
      <path d="M12.8 11.8c2 .2 3.7 1.6 3.7 4.2" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
function IconLayers({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 3l7 3.5-7 3.5-7-3.5L10 3Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M3 10.5l7 3.5 7-3.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 14l7 3.5 7-3.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconMapPin({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 17.5s5.5-5 5.5-9.3A5.5 5.5 0 0 0 4.5 8.2c0 4.3 5.5 9.3 5.5 9.3Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="10" cy="8.2" r="2" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}
const STAT_ICONS = [IconHouses, IconUsersGroup, IconLayers, IconMapPin];

function totalCapacity(): number {
  return allKitas.reduce((sum, k) => {
    const match = k.capacityText.match(/\d+/);
    return sum + (match ? parseInt(match[0], 10) : 0);
  }, 0);
}

function providerCount(): number {
  return new Set(allKitas.map((k) => k.provider.name)).size;
}

export default function Milestones() {
  const stats: { value: string; label: string }[] = [
    { value: String(allKitas.length), label: "eigenständige Kitas" },
    { value: `${totalCapacity()}`, label: "Plätze Gesamtkapazität" },
    { value: String(providerCount()), label: "Trägerorganisationen" },
    { value: "Marl", label: "Alle vier Häuser in einer Stadt" },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: 24,
        textAlign: "center",
      }}
    >
      {stats.map((s, i) => {
        const Icon = STAT_ICONS[i % STAT_ICONS.length];
        return (
          <Reveal key={s.label} delay={i * 80}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: `${colors.terrakotta}1a`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 10px",
              }}
            >
              <Icon color={colors.terrakotta} />
            </div>
            <div
              style={{
                fontSize: "clamp(28px, 4vw, 38px)",
                fontWeight: 800,
                color: colors.terrakotta,
                fontFamily: "var(--font-heading)",
              }}
            >
              {s.value}
            </div>
            <div style={{ fontSize: 13, color: colors.inkSoft, marginTop: 4 }}>{s.label}</div>
          </Reveal>
        );
      })}
    </div>
  );
}
