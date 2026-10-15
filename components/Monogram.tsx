import { WEDDING } from "@/lib/wedding-data";

export function Monogram({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border ${className ?? ""}`}
      style={{
        borderColor: "var(--antique-gold)",
        color: "var(--antique-gold)",
        fontFamily: "var(--font-display)",
      }}
      aria-hidden="true"
    >
      {WEDDING.initials}
    </span>
  );
}
