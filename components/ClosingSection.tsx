import { WEDDING } from "@/lib/wedding-data";
import { OrnamentFrame } from "./GoldBotanicalOrnament";
import { Monogram } from "./Monogram";
import { Reveal } from "./Reveal";

export function ClosingSection() {
  return (
    <footer
      className="px-6 text-center"
      style={{ paddingTop: "clamp(4rem, 10vh, 7rem)", paddingBottom: "clamp(2.5rem, 6vh, 3.5rem)", background: "var(--cream)" }}
    >
      <Reveal>
        <OrnamentFrame className="mx-auto mb-7 block h-16 w-45" style={{ color: "var(--antique-gold)" }} />

        <p
          className="mb-1 text-[0.7rem] tracking-[0.22em] uppercase"
          style={{ color: "var(--antique-gold)" }}
        >
          With Love, and a Heart Full of Gratitude
        </p>

        <p
          className="mt-5 mb-1 italic"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 3vw, 1.5rem)", color: "var(--espresso)" }}
        >
          Thank you for being part of our story.
        </p>
        <p className="mb-8 italic" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 3vw, 1.5rem)", color: "var(--espresso)" }}>
          We cannot wait to celebrate with you.
        </p>

        <p className="mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 5vw, 2.3rem)", color: "var(--espresso)" }}>
          {WEDDING.bride} &amp; {WEDDING.groom}
        </p>
        <p className="mb-9 text-sm tracking-[0.06em]" style={{ color: "var(--taupe)" }}>
          {WEDDING.weddingDateShort}
        </p>

        <Monogram className="mx-auto mb-6 h-10 w-10 text-sm" />

        <p className="m-0 text-[0.7rem] tracking-[0.14em] uppercase" style={{ color: "var(--taupe)" }}>
          Memoriqa
        </p>
      </Reveal>
    </footer>
  );
}
