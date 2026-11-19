import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ebuntiof",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});

export type SeitePreview = {
  _id: string;
  titel: string;
  slug: { current: string };
  eyebrow?: string;
  intro?: string;
  reihenfolge?: number;
};

export async function getKitaSeiten(kitaId: string): Promise<SeitePreview[]> {
  try {
    return await sanityClient.fetch(
      `*[_type == "seite" && kita._ref == $kitaId && inNavigation == true]{_id, titel, slug, eyebrow, intro, reihenfolge} | order(reihenfolge asc)`,
      { kitaId }
    );
  } catch (e) {
    console.error("Sanity fetch failed:", (e as Error).message);
    return [];
  }
}

export async function getSeite(kitaId: string, slug: string) {
  try {
    return await sanityClient.fetch(
      `*[_type == "seite" && kita._ref == $kitaId && slug.current == $slug][0]{titel, eyebrow, intro, body}`,
      { kitaId, slug }
    );
  } catch (e) {
    console.error("Sanity fetch failed:", (e as Error).message);
    return null;
  }
}
