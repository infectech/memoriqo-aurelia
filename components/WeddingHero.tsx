"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { WEDDING } from "@/lib/wedding-data";
import { OrnamentDivider } from "./GoldBotanicalOrnament";

export function WeddingHero() {
  const reduce = useReducedMotion();

  return (
    <header id="hero" className="relative flex min-h-[100dvh] items-end overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={WEDDING.heroImage.src}
          alt={WEDDING.heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 32%" }}
          unoptimized
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(56,43,36,0.74) 0%, rgba(56,43,36,0.24) 48%, rgba(56,43,36,0.04) 76%)",
          }}
        />
      </div>

      <div
        className="relative z-10 w-full px-6 text-center"
        style={{ color: "var(--ivory)", paddingBottom: "clamp(3rem, 10vh, 6rem)" }}
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3 text-[0.72rem] tracking-[0.24em] uppercase"
          style={{ color: "var(--champagne-gold)" }}
        >
          Together with their families
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.6rem, 8vw, 4.4rem)", color: "var(--ivory)" }}
          className="leading-tight"
        >
          {WEDDING.bride} &amp; {WEDDING.groom}
        </motion.h1>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <OrnamentDivider className="mx-auto my-4 h-5 w-35" style={{ color: "var(--champagne-gold)" }} />
          <p
            className="mb-2 text-base italic"
            style={{ fontFamily: "var(--font-display)", color: "var(--cream)" }}
          >
            invite you to celebrate the beginning of their forever.
          </p>
          <p className="text-sm tracking-[0.06em]">{WEDDING.weddingDateDisplay}</p>
          <p className="text-sm tracking-[0.06em] opacity-85">{WEDDING.location}</p>
        </motion.div>
      </div>
    </header>
  );
}
