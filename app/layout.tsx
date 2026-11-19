import type { ReactNode } from "react";
import { Manrope, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BackToTop from "@/components/BackToTop";
import MobileCtaBar from "@/components/MobileCtaBar";
import "./globals.css";

// Self-gehostet über next/font (kein Laufzeit-Request an fonts.googleapis.com —
// damit bleibt die Datenschutzerklärung weiterhin korrekt, die aktuell keine
// externen Font-Requests nennt) und ohne Layout-Shift beim Laden.
// Design-Update: Überschriften liefen bisher in Fraunces (editorial/Serife,
// Konzept A); lib/theme.ts definiert `font.heading` jetzt als Manrope
// (wärmere, rundere Grotesk, Konzept F) — hier entsprechend umgestellt.
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://katja-koch-kitas.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kitas von Katja Koch",
    template: "%s",
  },
  description: "Schatzkiste, Blumenwiese, Baumhaus, Kinderhaus – vier Kitas in Marl",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Kitas von Katja Koch",
    title: "Kitas von Katja Koch",
    description: "Schatzkiste, Blumenwiese, Baumhaus, Kinderhaus – vier Kitas in Marl",
  },
  twitter: {
    card: "summary",
    title: "Kitas von Katja Koch",
    description: "Schatzkiste, Blumenwiese, Baumhaus, Kinderhaus – vier Kitas in Marl",
  },
  // Hinweis: Sobald eine eigene Domain eingerichtet ist, SITE_URL oben anpassen
  // und bei Google Search Console hinterlegen.
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon.svg",
    // Bewusst kein separates apple-touch-icon: dafür bräuchte es ein echtes
    // PNG (iOS unterstützt dort kein SVG zuverlässig) — ohne vorliegende
    // Bildvorlage würde das sonst nur verschwommen/falsch skaliert werden.
  },
};

// viewport-fit=cover (Layout darf bis an Notch/Home-Indicator reichen, siehe
// env(safe-area-inset-*) in MobileCtaBar/BackToTop) + themeColor für die
// Browser-UI-Farbe auf Mobilgeräten (Android-Adressleiste, iOS-Statusleiste).
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
  themeColor: "#3F6B4A",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className={`${manrope.variable} ${inter.variable}`}>
      <body className="m-0 flex min-h-screen flex-col font-body">
        <a href="#main-content" className="skip-link absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <div id="main-content" className="flex-1">
          {children}
        </div>
        <SiteFooter />
        <BackToTop />
        <MobileCtaBar />
        <Analytics />
        {/* Sitewide responsive Grundregel für zweispaltige Hero-/Split-Layouts.
            Ohne diese Regel bleiben .kita-hero / .kita-split(-reverse) auf
            Mobilgeräten zweispaltig und quetschen das Bild auf einen winzigen
            Streifen (gefunden auf Pädagogik, Für Eltern, Team, Karriere,
            Aktuelles, Kita-Wissen, Häufige Fragen, Über uns). Die Kita-Seiten
            selbst (KitaPageTemplate) und die Startseite (HomeMore) bringen
            dieselbe Regel bereits lokal mit — diese globale Fassung deckt alle
            übrigen Seiten ab. */}
        {/* Überschriften nutzen die Display-Schrift (Manrope, s.o.). Einzelne
            Seiten setzen laut Grep keine eigene fontFamily auf Überschriften,
            daher ist eine globale Regel hier sicher. */}
        <style>{`
          h1, h2, h3, h4 {
            font-family: var(--font-heading);
          }
          /* Entfernt den grauen Tap-Highlight-Flash auf Android/iOS-WebKit,
             der bei eigenen :active-/Hover-Übergängen eher stört als hilft. */
          a, button, [role="button"] {
            -webkit-tap-highlight-color: transparent;
          }
          @media (max-width: 760px) {
            .kita-hero, .kita-split, .kita-split-reverse {
              grid-template-columns: 1fr !important;
            }
            .kita-split-reverse > *:first-child {
              order: 2;
            }
          }
          .skip-link:focus {
            left: 16px !important;
            top: 16px !important;
            width: auto !important;
            height: auto !important;
            padding: 10px 18px;
            background: #26332C;
            color: #fff;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            text-decoration: none;
          }
          [aria-current="page"] {
            font-weight: 700;
          }
          a:focus-visible,
          button:focus-visible,
          input:focus-visible,
          select:focus-visible,
          textarea:focus-visible,
          [role="button"]:focus-visible {
            outline: 3px solid #D98E52;
            outline-offset: 2px;
          }
          @media print {
            header, footer, .skip-link { display: none !important; }
            main { padding: 0 !important; }
            a { color: #000 !important; text-decoration: underline !important; }
          }
        `}</style>
      </body>
    </html>
  );
}
