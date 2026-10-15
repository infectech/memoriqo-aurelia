"use client";

import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { WEDDING } from "@/lib/wedding-data";

export type MusicControlHandle = {
  play: () => void;
};

export const MusicControl = forwardRef<MusicControlHandle>(function MusicControl(_props, ref) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useImperativeHandle(ref, () => ({
    play: () => {
      audioRef.current
        ?.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay blocked by the browser; the visible toggle still works.
        });
    },
  }));

  if (!WEDDING.music.enabled) return null;

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <audio ref={audioRef} loop preload="none">
        <source src={WEDDING.music.src} type="audio/mpeg" />
        <source src={WEDDING.music.srcOgg} type="audio/ogg" />
      </audio>
      <button
        type="button"
        onClick={toggle}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        aria-pressed={isPlaying}
        className="flex h-11 w-11 items-center justify-center rounded-full border transition-transform active:scale-95"
        style={{
          background: "var(--ivory)",
          borderColor: "var(--line)",
          color: "var(--antique-gold)",
          boxShadow: "0 6px 20px var(--shadow-tint)",
        }}
      >
        {isPlaying ? (
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" aria-hidden="true">
            <rect x="8" y="7" width="2.6" height="10" fill="currentColor" />
            <rect x="13.4" y="7" width="2.6" height="10" fill="currentColor" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" aria-hidden="true">
            <path d="M9 7L18 12L9 17V7Z" fill="currentColor" />
          </svg>
        )}
      </button>
    </div>
  );
});
