import s from "../../../alt.module.css";
import { FEATURED_PROJECTS } from "../../../data";
import { WinFrame } from "../_shared";
import { ACCENT, BROWN, MONO, SVG_PROPS_MOBILE } from "../_tokens";
import { useState } from "react";

/* ============================================================
 * Scene 3 (Mobile) — focus: one featured card
 * ============================================================ */
export interface Scene3MobileProps {
  onOpenDoor?: () => void;
}

export function Scene3Mobile({ onOpenDoor }: Scene3MobileProps = {}) {
  const projects = FEATURED_PROJECTS;
  const [idx, setIdx] = useState(0);
  const p = projects[idx] ?? projects[0]!;

  const goPrev = () => setIdx((v) => (v - 1 + projects.length) % projects.length);
  const goNext = () => setIdx((v) => (v + 1) % projects.length);
  const open = () => window.open(p.href, "_blank", "noopener,noreferrer");

  const x = 160;
  const y = 120;

  return (
    <section className={s.sc}>
      <svg {...SVG_PROPS_MOBILE} viewBox="110 30 880 620" strokeWidth="2">
        <g
          data-hover
          role="button"
          tabIndex={0}
          aria-label="Previous project"
          onClick={goPrev}
          style={{ cursor: "none", pointerEvents: "all" }}
        >
          <rect x="335" y="552" width="50" height="48" rx="14" />
          <path d="M365 564 l-14 12 l14 12" />
        </g>
        <g
          data-hover
          role="button"
          tabIndex={0}
          aria-label="Next project"
          onClick={goNext}
          style={{ cursor: "none", pointerEvents: "all" }}
        >
          <rect x="693" y="552" width="50" height="48" rx="14" />
          <path d="M712 564 l14 12 l-14 12" />
        </g>

        <g
          data-hover
          role="button"
          tabIndex={0}
          aria-label={`Open ${p.title}`}
          onClick={open}
          style={{ cursor: "none" }}
        >
          <WinFrame x={x} y={y} w={780} h={420} title={p.urlLabel} />
          <rect x={x + 20} y={y + 42} width={740} height="26" rx="13" strokeWidth="1.4" />
          <text
            x={x + 390}
            y={y + 60}
            fontFamily={MONO}
            fontSize="13"
            fill={BROWN}
            textAnchor="middle"
            opacity="0.8"
          >
            https://{p.urlLabel}
          </text>

          <rect x={x + 40} y={y + 110} width="700" height="160" rx="6" strokeWidth="1.6" />
          <line x1={x + 60} y1={y + 150} x2={x + 560} y2={y + 150} strokeWidth="2.2" />
          <line
            x1={x + 60}
            y1={y + 185}
            x2={x + 720}
            y2={y + 185}
            strokeWidth="1.4"
            opacity="0.55"
          />
          <line
            x1={x + 60}
            y1={y + 210}
            x2={x + 650}
            y2={y + 210}
            strokeWidth="1.4"
            opacity="0.55"
          />
          <rect x={x + 60} y={y + 230} width="120" height="18" rx="9" fill={ACCENT} stroke="none" />

          <text x={x + 40} y={y + 320} fontFamily={MONO} fontSize="24" fill={BROWN}>
            {p.title}
          </text>
          <text x={x + 40} y={y + 350} fontFamily={MONO} fontSize="14" fill={BROWN} opacity="0.75">
            {p.desc}
          </text>
          <text x={x + 40} y={y + 395} fontFamily={MONO} fontSize="14" fill={ACCENT}>
            tap to open · swipe with arrows →
          </text>
        </g>

        {/* optional: keep old "door" affordance by long-pressing the label */}
        <g
          data-hover
          role="button"
          tabIndex={0}
          aria-label="Open about me"
          onClick={onOpenDoor}
          style={{ cursor: "none", pointerEvents: "all" }}
        >
          <rect x="432" y="552" width="236" height="48" rx="16" fill="none" />
          <text x="550" y="583" fontFamily={MONO} fontSize="12" fill={ACCENT} textAnchor="middle">
            about me →
          </text>
        </g>
      </svg>
    </section>
  );
}
