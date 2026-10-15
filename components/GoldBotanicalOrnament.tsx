/**
 * Fine, hand-drawn-engraving style gold botanical line art. These are the
 * approved decorative language for Aurelia (aurelia.md section 16): thin
 * lines, restrained foliage, no clip-art flowers.
 */

type OrnamentProps = { className?: string; style?: React.CSSProperties };

export function OrnamentSprite() {
  return (
    <svg aria-hidden="true" style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}>
      <defs>
        <g id="aurelia-corner">
          <path d="M3 70 C3 32, 32 3, 70 3" fill="none" stroke="currentColor" strokeWidth="0.9" />
          <path d="M3 70 C20 64, 28 50, 22 38 C32 46, 42 40, 42 28 C50 36, 58 32, 58 20"
            fill="none" stroke="currentColor" strokeWidth="0.7" />
          <ellipse cx="22" cy="38" rx="3.4" ry="2" fill="currentColor" opacity="0.55" transform="rotate(-35 22 38)" />
          <ellipse cx="42" cy="28" rx="3" ry="1.8" fill="currentColor" opacity="0.5" transform="rotate(-20 42 28)" />
          <ellipse cx="58" cy="20" rx="2.6" ry="1.6" fill="currentColor" opacity="0.45" transform="rotate(-10 58 20)" />
        </g>

        <g id="aurelia-sprig">
          <path d="M6 44 C50 6, 110 6, 154 44" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <path d="M40 26 C44 18, 42 12, 34 9" fill="none" stroke="currentColor" strokeWidth="0.6" />
          <path d="M80 10 C80 4, 77 0, 70 -1" fill="none" stroke="currentColor" strokeWidth="0.6" />
          <path d="M120 26 C116 18, 118 12, 126 9" fill="none" stroke="currentColor" strokeWidth="0.6" />
          <ellipse cx="34" cy="7" rx="4" ry="2.3" fill="currentColor" opacity="0.5" transform="rotate(-25 34 7)" />
          <ellipse cx="70" cy="-3" rx="4" ry="2.3" fill="currentColor" opacity="0.6" />
          <ellipse cx="126" cy="7" rx="4" ry="2.3" fill="currentColor" opacity="0.5" transform="rotate(25 126 7)" />
        </g>

        <g id="aurelia-divider">
          <line x1="0" y1="12" x2="54" y2="12" stroke="currentColor" strokeWidth="0.7" />
          <circle cx="70" cy="12" r="2.4" fill="none" stroke="currentColor" strokeWidth="0.7" />
          <line x1="86" y1="12" x2="140" y2="12" stroke="currentColor" strokeWidth="0.7" />
        </g>

        <g id="aurelia-frame">
          <path d="M14 56 C14 24, 46 8, 90 8 C134 8, 166 24, 166 56" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <path d="M44 56 C44 34, 62 22, 90 22 C118 22, 136 34, 136 56" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        </g>
      </defs>
    </svg>
  );
}

export const OrnamentCorner = ({ className, style }: OrnamentProps) => (
  <svg className={className} style={style} viewBox="0 0 70 70" aria-hidden="true">
    <use href="#aurelia-corner" />
  </svg>
);

export const OrnamentSprig = ({ className, style }: OrnamentProps) => (
  <svg className={className} style={style} viewBox="-5 -5 164 54" aria-hidden="true">
    <use href="#aurelia-sprig" />
  </svg>
);

export const OrnamentDivider = ({ className, style }: OrnamentProps) => (
  <svg className={className} style={style} viewBox="0 0 140 24" aria-hidden="true">
    <use href="#aurelia-divider" />
  </svg>
);

export const OrnamentFrame = ({ className, style }: OrnamentProps) => (
  <svg className={className} style={style} viewBox="0 0 180 64" aria-hidden="true">
    <use href="#aurelia-frame" />
  </svg>
);
