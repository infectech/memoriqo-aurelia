"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { WEDDING } from "@/lib/wedding-data";
import { Reveal } from "./Reveal";

const SIZE_CLASS: Record<string, string> = {
  tall: "aspect-[3/4] sm:row-span-2",
  wide: "aspect-[16/9] sm:col-span-2",
  square: "aspect-square",
};

export function PhotoGallery() {
  const photos = WEDDING.gallery;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const showOffset = useCallback(
    (offset: number) => {
      setOpenIndex((current) => (current === null ? current : (current + offset + photos.length) % photos.length));
    },
    [photos.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showOffset(-1);
      if (e.key === "ArrowRight") showOffset(1);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, showOffset]);

  if (!photos.length) return null;

  return (
    <section
      id="gallery"
      className="mx-auto max-w-[1200px] px-6"
      style={{ paddingTop: "clamp(3rem, 8vh, 5rem)", paddingBottom: "clamp(3rem, 8vh, 5rem)" }}
    >
      <Reveal className="mb-10 text-center">
        <h2 style={{ fontSize: "clamp(1.9rem, 4vw, 2.5rem)" }}>Moments in Gold</h2>
      </Reveal>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {photos.map((photo, i) => (
          <Reveal key={i} delay={(i % 6) * 0.05} className={SIZE_CLASS[photo.size]}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label="Open photograph in viewer"
              className="relative block h-full w-full overflow-hidden"
              style={{ background: "var(--cream)" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-[1.04]"
                loading="lazy"
                unoptimized
              />
            </button>
          </Reveal>
        ))}
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photograph viewer"
          className="fixed inset-0 z-200 flex items-center justify-center p-6"
          style={{ background: "rgba(56,43,36,0.94)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const delta = e.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(delta) > 50) showOffset(delta > 0 ? -1 : 1);
            touchStartX.current = null;
          }}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close photograph viewer"
            className="absolute top-5 right-6 text-3xl leading-none"
            style={{ color: "var(--ivory)" }}
          >
            &times;
          </button>
          <button
            type="button"
            onClick={() => showOffset(-1)}
            aria-label="Previous photograph"
            className="absolute left-2 top-1/2 -translate-y-1/2 px-4 py-2.5 text-4xl leading-none"
            style={{ color: "var(--ivory)" }}
          >
            &lsaquo;
          </button>
          <Image
            src={photos[openIndex].src}
            alt={photos[openIndex].alt}
            width={1200}
            height={1400}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            unoptimized
          />
          <button
            type="button"
            onClick={() => showOffset(1)}
            aria-label="Next photograph"
            className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2.5 text-4xl leading-none"
            style={{ color: "var(--ivory)" }}
          >
            &rsaquo;
          </button>
        </div>
      )}
    </section>
  );
}
