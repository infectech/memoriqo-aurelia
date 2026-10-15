"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { WEDDING } from "@/lib/wedding-data";
import { OrnamentCorner, OrnamentSprig } from "./GoldBotanicalOrnament";
import { Monogram } from "./Monogram";
import type { MusicControlHandle } from "./MusicControl";

const PARTICLES = [
  { left: "18%", top: "30%", delay: 0 },
  { left: "76%", top: "22%", delay: 0.08 },
  { left: "40%", top: "68%", delay: 0.16 },
  { left: "64%", top: "72%", delay: 0.05 },
  { left: "30%", top: "50%", delay: 0.22 },
  { left: "82%", top: "55%", delay: 0.12 },
];

export function InvitationOpening({ musicRef }: { musicRef: React.RefObject<MusicControlHandle | null> }) {
  const [stage, setStage] = useState<"idle" | "opening" | "done">("idle");
  const reduce = useReducedMotion();

  function open() {
    musicRef.current?.play();
    if (reduce) {
      setStage("done");
      return;
    }
    setStage("opening");
    setTimeout(() => setStage("done"), 900);
  }

  if (stage === "done") return null;

  return (
    <AnimatePresence>
      <motion.section
        aria-label="Wedding invitation opening"
        className="fixed inset-0 z-100 flex items-center justify-center p-6"
        style={{
          background:
            "radial-gradient(circle at 18% 12%, rgba(198,166,107,0.18), transparent 42%), radial-gradient(circle at 82% 88%, rgba(168,137,77,0.14), transparent 46%), var(--ivory)",
        }}
        initial={false}
        animate={stage === "opening" ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="relative w-full max-w-[540px] border px-7 pt-14 pb-11 text-center"
          style={{ borderColor: "var(--line)" }}
          animate={stage === "opening" ? { scale: 1.04, opacity: 0 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <OrnamentCorner className="absolute -top-px -left-px h-14 w-14" style={{ color: "var(--antique-gold)" }} />
          <OrnamentCorner className="absolute -top-px -right-px h-14 w-14 -scale-x-100" style={{ color: "var(--antique-gold)" }} />
          <OrnamentCorner className="absolute -bottom-px -left-px h-14 w-14 -scale-y-100" style={{ color: "var(--antique-gold)" }} />
          <OrnamentCorner className="absolute -bottom-px -right-px h-14 w-14 scale-[-1]" style={{ color: "var(--antique-gold)" }} />

          <Monogram className="mx-auto mb-6 h-14 w-14 text-base" />

          <p
            className="mb-5 text-[0.7rem] tracking-[0.24em] uppercase"
            style={{ color: "var(--antique-gold)" }}
          >
            Together with their families
          </p>

          <p className="mb-2 text-sm tracking-[0.1em] uppercase" style={{ color: "var(--taupe)" }}>
            The Wedding Of
          </p>

          <h1
            className="mb-5 leading-tight"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 7vw, 3.2rem)", color: "var(--espresso)" }}
          >
            {WEDDING.bride} &amp; {WEDDING.groom}
          </h1>

          <OrnamentSprig className="mx-auto mb-5 block h-9 w-35" style={{ color: "var(--antique-gold)" }} />

          <p className="mb-8 text-sm tracking-wide" style={{ color: "var(--taupe)" }}>
            {WEDDING.weddingDateDisplay}
          </p>

          <button
            type="button"
            onClick={open}
            className="relative inline-flex items-center justify-center overflow-hidden rounded-sm px-10 py-4 text-xs tracking-[0.16em] uppercase transition-transform active:scale-[0.98]"
            style={{ background: "var(--antique-gold)", color: "var(--ivory)" }}
          >
            Open Invitation
          </button>

          {stage === "opening" &&
            !reduce &&
            PARTICLES.map((p, i) => (
              <motion.span
                key={i}
                className="pointer-events-none absolute h-1 w-1 rounded-full"
                style={{ left: p.left, top: p.top, background: "var(--champagne-gold)" }}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: [0, 1, 0], scale: [0.4, 1.4, 0.6], y: -16 }}
                transition={{ duration: 0.7, delay: p.delay, ease: "easeOut" }}
              />
            ))}
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
}
