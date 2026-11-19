/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 1:1 aus lib/theme.ts übernommen, damit bestehende Markenfarben
        // erhalten bleiben — nur jetzt als Tailwind-Utilities statt Inline-Styles.
        background: "#FDF6EC",
        backgroundAlt: "#F3E2C7",
        card: "#FFFDF9",
        ink: "#33281D",
        inkSoft: "#5C4C3C",
        inkMuted: "#9C8266",
        border: "#E8D4AE",
        waldgruen: "#3F6B4A",
        salbei: "#8FAE6E",
        salbeiHell: "#C3D79A",
        terrakotta: "#D9722E",
        terrakottaHell: "#F0A868",
        gelb: "#E8B13A",
        holz: "#7C5A3E",
        fehler: "#C0524A",
        schatzkiste: { primary: "#D9722E", secondary: "#B98A54", accent: "#E8B13A" },
        blumenwiese: { primary: "#E0A62A", secondary: "#D98A7A", accent: "#8FAE6E" },
        baumhaus: { primary: "#3F7A54", secondary: "#8A6A4F", accent: "#D9722E" },
        kinderhaus: { primary: "#D9637A", secondary: "#E3B98A", accent: "#6B8F5E" },
      },
      fontFamily: {
        display: ["Manrope", "Segoe UI", "system-ui", "sans-serif"],
        body: ["Inter", "Segoe UI", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1120px",
        "container-narrow": "760px",
      },
      borderRadius: {
        card: "18px",
      },
      // Salient nutzt eine feste, großzügige Section-Rhythmus-Skala statt
      // beliebiger Werte — hier als benannte Spacing-Utilities verfügbar
      // (py-section-sm/md/lg), zusätzlich zur normalen Tailwind-Skala.
      spacing: {
        "section-sm": "40px",
        "section-md": "64px",
        "section-lg": "88px",
        "section-xl": "128px",
      },
      boxShadow: {
        glow: "0 4px 14px rgba(63,107,74,0.15), 0 1px 3px rgba(43,43,34,0.08)",
        "glow-md": "0 8px 24px rgba(63,107,74,0.15), 0 1px 3px rgba(43,43,34,0.08)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
