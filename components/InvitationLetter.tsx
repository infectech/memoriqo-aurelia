import { WEDDING } from "@/lib/wedding-data";
import { OrnamentDivider } from "./GoldBotanicalOrnament";
import { Monogram } from "./Monogram";
import { Reveal } from "./Reveal";

export function InvitationLetter() {
  return (
    <Reveal
      className="mx-auto max-w-[600px] px-6 text-center"
      style={{ paddingTop: "clamp(4rem, 10vh, 7rem)", paddingBottom: "clamp(4rem, 10vh, 7rem)" }}
    >
      <p
        className="mb-6 text-[0.72rem] tracking-[0.22em] uppercase"
        style={{ color: "var(--antique-gold)" }}
      >
        {WEDDING.invitation.eyebrow}
      </p>

      <p
        className="mb-6 italic"
        style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.3rem, 3vw, 1.6rem)", color: "var(--espresso)" }}
      >
        {WEDDING.invitation.line}
      </p>

      <OrnamentDivider className="mx-auto mb-6 h-5 w-35" style={{ color: "var(--antique-gold)" }} />

      <p className="mb-5 text-[1.05rem] leading-relaxed" style={{ color: "var(--espresso)" }}>
        {WEDDING.invitation.body}
      </p>

      <p className="mb-2 text-lg" style={{ fontFamily: "var(--font-display)", color: "var(--espresso)" }}>
        {WEDDING.weddingDateDisplay}
      </p>
      <p className="mb-7 text-sm" style={{ color: "var(--taupe)" }}>
        {WEDDING.venue.name}, {WEDDING.location}
      </p>

      <p className="text-[0.98rem] italic" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>
        {WEDDING.invitation.closing}
      </p>

      <Monogram className="mx-auto mt-8 h-11 w-11 text-sm" />
    </Reveal>
  );
}
