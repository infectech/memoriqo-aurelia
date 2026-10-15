import Image from "next/image";
import { WEDDING } from "@/lib/wedding-data";
import { mapUrl } from "@/lib/map-url";
import { OrnamentDivider } from "./GoldBotanicalOrnament";
import { Reveal } from "./Reveal";

export function WeddingEvents() {
  if (!WEDDING.events.length) return null;

  return (
    <section
      id="events"
      className="mx-auto max-w-[820px] px-6"
      style={{ paddingTop: "clamp(3rem, 8vh, 5rem)", paddingBottom: "clamp(3rem, 8vh, 5rem)" }}
    >
      <Reveal className="mb-14 text-center">
        <h2 style={{ fontSize: "clamp(1.9rem, 4vw, 2.5rem)" }}>The Celebration</h2>
      </Reveal>

      <div className="flex flex-col">
        {WEDDING.events.map((event, i) => {
          const link = mapUrl(event.mapQuery, event.venueName, event.address);
          return (
            <Reveal key={event.id} delay={i * 0.05}>
              {i > 0 && <OrnamentDivider className="mx-auto mb-10 h-5 w-35" style={{ color: "var(--line)" }} />}
              <div className={`grid gap-6 sm:gap-10 ${event.photo ? "sm:grid-cols-[1fr_1.2fr]" : ""} items-center`}>
                {event.photo && (
                  <div className="relative aspect-[4/5] w-full overflow-hidden" style={{ background: "var(--cream)" }}>
                    <Image
                      src={event.photo.src}
                      alt={event.photo.alt}
                      fill
                      sizes="(min-width: 640px) 40vw, 100vw"
                      className="object-cover"
                      loading="lazy"
                      unoptimized
                    />
                  </div>
                )}
                <div className="text-center sm:text-left">
                  <h3 className="mb-2" style={{ fontSize: "1.5rem" }}>
                    {event.name}
                  </h3>
                  <p className="mb-1 text-sm" style={{ color: "var(--taupe)" }}>
                    {event.dateDisplay}
                  </p>
                  <p
                    className="mb-4"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--espresso)" }}
                  >
                    {event.startTime}
                    {event.endTime ? ` to ${event.endTime}` : ""}
                  </p>
                  <p className="mb-1" style={{ color: "var(--espresso)" }}>
                    {event.venueName}
                  </p>
                  <p className="mb-3 text-sm" style={{ color: "var(--taupe)" }}>
                    {event.address}
                  </p>
                  {event.dressCode && (
                    <p className="mb-3 text-sm">
                      <span style={{ color: "var(--taupe)" }}>Dress code: </span>
                      {event.dressCode}
                    </p>
                  )}
                  {event.note && (
                    <p className="mb-3 text-sm" style={{ color: "var(--olive)" }}>
                      {event.note}
                    </p>
                  )}
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-xs tracking-[0.1em] uppercase underline"
                      style={{ color: "var(--antique-gold)", textDecorationColor: "var(--champagne-gold)" }}
                    >
                      View Location
                    </a>
                  )}
                </div>
              </div>
              {i < WEDDING.events.length - 1 && <div className="h-10 sm:h-14" />}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
