import type { MetadataRoute } from "next";

// Minimale, ehrliche Web-App-Manifest-Datei: macht die Seite auf Mobilgeräten
// "zum Homescreen hinzufügen"-fähig (Android/Chrome). Nutzt ausschließlich das
// bereits vorhandene app/icon.svg — es werden keine zusätzlichen, erfundenen
// Icon-Grafiken oder Screenshots vorgetäuscht, die es nicht gibt.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kitas von Katja Koch",
    short_name: "Katja Koch Kitas",
    description: "Schatzkiste, Blumenwiese, Baumhaus, Kinderhaus – vier Kitas in Marl",
    start_url: "/",
    display: "standalone",
    background_color: "#FDF6EC",
    theme_color: "#3F6B4A",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
