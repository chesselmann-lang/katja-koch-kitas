import Link from "next/link";
import Container from "@/components/salient/Container";

export default function NotFound() {
  return (
    <main className="section-y text-center">
      <Container>
        <p className="eyebrow mb-2.5">Seite nicht gefunden</p>
        <h1 className="mb-4 text-3xl font-extrabold sm:text-4xl">Diese Seite gibt es nicht (mehr).</h1>
        <p className="mx-auto mb-8 max-w-[520px] leading-relaxed text-inkSoft">
          Möglicherweise wurde die Adresse falsch eingegeben oder die Seite wurde verschoben. Von der Startseite aus
          finden Sie alle vier Kitas und weitere Informationen.
        </p>
        <Link href="/" className="btn-primary">
          Zur Startseite
        </Link>
      </Container>
    </main>
  );
}
