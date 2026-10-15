import { WEDDING } from "@/lib/wedding-data";
import { mapUrl } from "@/lib/map-url";
import { Reveal } from "./Reveal";

export function VenueSection() {
  const link = mapUrl(WEDDING.venue.mapQuery, WEDDING.venue.name, WEDDING.venue.address);
  const embedQuery = encodeURIComponent(WEDDING.venue.mapQuery || `${WEDDING.venue.name}, ${WEDDING.venue.address}`);

  return (
    <section
      id="venue"
      className="mx-auto max-w-[900px] px-6 text-center"
      style={{ paddingTop: "clamp(3rem, 8vh, 5rem)", paddingBottom: "clamp(3rem, 8vh, 5rem)" }}
    >
      <Reveal>
        <h2 className="mb-5" style={{ fontSize: "clamp(1.9rem, 4vw, 2.5rem)" }}>
          Finding Your Way
        </h2>
        <p
          className="mb-1"
          style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "var(--espresso)" }}
        >
          {WEDDING.venue.name}
        </p>
        <p className="mb-5 text-sm" style={{ color: "var(--taupe)" }}>
          {WEDDING.venue.address}
        </p>
        <p className="mx-auto mb-8 max-w-[52ch] text-[0.98rem]" style={{ color: "var(--espresso)" }}>
          {WEDDING.venue.description}
        </p>

        <div
          className="mx-auto mb-7 aspect-[16/9] w-full max-w-[640px] overflow-hidden border"
          style={{ borderColor: "var(--line)" }}
        >
          <iframe
            title="Venue location map"
            src={`https://maps.google.com/maps?q=${embedQuery}&output=embed`}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm px-9 py-3.5 text-[0.78rem] tracking-[0.16em] uppercase transition-transform active:scale-[0.98]"
            style={{ background: "var(--antique-gold)", color: "var(--ivory)" }}
          >
            Get Directions
          </a>
        )}
      </Reveal>
    </section>
  );
}
