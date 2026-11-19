import type { MetadataRoute } from "next";
import { allKitas } from "@/lib/kitas-data";
import { paedagogikTopics } from "@/lib/paedagogik-data";
import { kitaWissenArticles } from "@/lib/kita-wissen-articles";
import { getKitaSeiten } from "@/lib/sanity";

const SITE_URL = "https://katja-koch-kitas.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/anmeldung",
    "/aktuelles",
    "/datenschutz",
    "/fuer-eltern",
    "/haeufige-fragen",
    "/impressum",
    "/karriere",
    "/kinderrechte",
    "/kita-wissen",
    "/kontakt",
    "/paedagogik",
    "/team",
    "/ueber-uns",
    "/schatzkiste/bauernhof",
    "/schatzkiste/tiere",
    "/traeger/schatzkiste-bauernhof-ggmbh",
    "/traeger/lin-ggmbh",
  ];

  const now = new Date();

  // Sanity-Unterseiten der Kita Schatzkiste zur Laufzeit abfragen — Sanity
  // ist beim Build evtl. nicht erreichbar, daher wird ein Fehler bereits in
  // getKitaSeiten() abgefangen (liefert dann ein leeres Array statt zu werfen).
  const schatzkisteSeiten = await getKitaSeiten("kita-schatzkiste");

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.6,
    })),
    ...allKitas.map((k) => ({
      url: `${SITE_URL}/${k.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...paedagogikTopics.map((t) => ({
      url: `${SITE_URL}/paedagogik/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...kitaWissenArticles.map((a) => ({
      url: `${SITE_URL}/kita-wissen/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...schatzkisteSeiten.map((s) => ({
      url: `${SITE_URL}/schatzkiste/${s.slug.current}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
