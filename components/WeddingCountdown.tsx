"use client";

import { useEffect, useState } from "react";
import { WEDDING } from "@/lib/wedding-data";
import { OrnamentDivider } from "./GoldBotanicalOrnament";

function getRemaining(target: number) {
  const diff = target - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export function WeddingCountdown() {
  const target = new Date(WEDDING.weddingDateTimeISO).getTime();
  const [remaining, setRemaining] = useState<ReturnType<typeof getRemaining> | "pending">("pending");

  useEffect(() => {
    setRemaining(getRemaining(target));
    const interval = setInterval(() => {
      const r = getRemaining(target);
      setRemaining(r);
      if (!r) clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  if (remaining === "pending") {
    return <section className="mx-auto max-w-[760px] px-6" style={{ paddingTop: "clamp(3rem, 8vh, 5rem)", paddingBottom: "clamp(3rem, 8vh, 5rem)" }} />;
  }

  return (
    <section
      className="mx-auto max-w-[760px] px-6 text-center"
      style={{ paddingTop: "clamp(3rem, 8vh, 5rem)", paddingBottom: "clamp(3rem, 8vh, 5rem)" }}
    >
      {!remaining ? (
        <p
          className="italic"
          style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "var(--antique-gold)" }}
        >
          Today, our forever begins.
        </p>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {([
            ["Days", remaining.days],
            ["Hours", remaining.hours],
            ["Minutes", remaining.minutes],
            ["Seconds", remaining.seconds],
          ] as const).map(([label, value], i) => (
            <div key={label} className="flex items-center gap-4 sm:gap-6">
              <div className="flex min-w-16 flex-col items-center">
                <span
                  className="tabular-nums"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 5vw, 2.8rem)", color: "var(--espresso)" }}
                >
                  {String(value).padStart(2, "0")}
                </span>
                <span
                  className="mt-1 text-[0.65rem] tracking-[0.16em] uppercase"
                  style={{ color: "var(--taupe)" }}
                >
                  {label}
                </span>
              </div>
              {i < 3 && <OrnamentDivider className="hidden h-4 w-10 sm:block" style={{ color: "var(--line)" }} />}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
