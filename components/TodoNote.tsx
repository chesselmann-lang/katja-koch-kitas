// Interner Platzhalter-Marker für unbestätigte Werte. Wird NIE öffentlich
// angezeigt (auch nicht als "folgt"-Badge) — betroffene Abschnitte werden
// stattdessen vollständig ausgeblendet. isTodo() dient nur dazu, Call-Sites
// zu erlauben, den jeweiligen Abschnitt bedingt gar nicht erst zu rendern.
export function isTodo(value: string) {
  return value.startsWith("TODO_");
}

export default function TodoNote({ value }: { value: string; label?: string }) {
  if (isTodo(value)) return null;
  return <>{value}</>;
}
