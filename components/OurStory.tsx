import Image from "next/image";
import { WEDDING } from "@/lib/wedding-data";
import { Reveal } from "./Reveal";

export function OurStory() {
  if (!WEDDING.story.length) return null;

  return (
    <section
      id="story"
      className="mx-auto max-w-[1100px] px-6"
      style={{ paddingTop: "clamp(3rem, 8vh, 5rem)", paddingBottom: "clamp(3rem, 8vh, 5rem)" }}
    >
      <Reveal className="mb-16 text-center">
        <h2 style={{ fontSize: "clamp(1.9rem, 4vw, 2.5rem)" }}>A Love Told Beautifully</h2>
      </Reveal>

      <div className="flex flex-col gap-16 sm:gap-20">
        {WEDDING.story.map((milestone, i) => {
          const imageFirst = i % 2 === 0;
          return (
            <Reveal
              key={milestone.title}
              className={`grid items-center gap-8 sm:grid-cols-2 sm:gap-12 ${
                imageFirst ? "" : "sm:[&>*:first-child]:order-2"
              }`}
            >
              {milestone.photo && (
                <div
                  className="relative aspect-[4/5] w-full overflow-hidden"
                  style={{ background: "var(--cream)" }}
                >
                  <Image
                    src={milestone.photo.src}
                    alt={milestone.photo.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                    loading="lazy"
                    unoptimized
                  />
                </div>
              )}
              <div className={milestone.photo ? "" : "sm:col-span-2 text-center"}>
                <h3 className="mb-4" style={{ fontSize: "1.6rem" }}>
                  {milestone.title}
                </h3>
                <div className="mb-4 h-px w-16" style={{ background: "var(--line)" }} />
                <p
                  className="italic"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--espresso)", maxWidth: "48ch" }}
                >
                  {milestone.passage}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
