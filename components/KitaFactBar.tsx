import type { ReactNode } from "react";
import { colors } from "@/lib/theme";
import { isTodo } from "./TodoNote";

export function IconPin() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 14.5s5-4.4 5-8.3A5 5 0 0 0 3 6.2c0 3.9 5 8.3 5 8.3Z" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="8" cy="6.2" r="1.8" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}
export function IconClock() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 4.8V8l2.4 1.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
export function IconUsers() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="6" cy="5.5" r="2.1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 13c0-2.2 1.8-3.6 4-3.6s4 1.4 4 3.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="11.3" cy="5.8" r="1.6" stroke="currentColor" strokeWidth="1.1" />
      <path d="M10.3 9.6c1.7.2 2.9 1.4 2.9 3.2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}
export function IconBaby() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="6" r="3.4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M4 13c0-1.9 1.8-3 4-3s4 1.1 4 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
export function IconPerson() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="5" r="2.6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 13.5c0-2.6 2.2-4.2 5-4.2s5 1.6 5 4.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function FactChip({
  icon,
  label,
  value,
  accent,
}: {
  icon: ReactNode;
  label: string;
  value?: string;
  accent: string;
}) {
  if (!value || isTodo(value)) return null;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        padding: "14px 16px",
        borderRadius: 14,
        background: colors.card,
        boxShadow: "0 1px 3px rgba(43,43,34,0.08)",
        borderTop: `2px solid ${accent}2e`,
      }}
    >
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: 9,
          background: `linear-gradient(135deg, ${accent}1a 0%, ${accent}33 100%)`,
          color: accent,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 12, color: colors.inkMuted, marginBottom: 2 }}>{label}</div>
        <div style={{ fontSize: 14.5, fontWeight: 600, color: colors.ink, lineHeight: 1.3 }}>
          {value}
        </div>
      </div>
    </div>
  );
}
