import s from "../../alt.module.css";
import { FEATURED_PROJECTS } from "../../data";
import { WinFrame } from "./_shared";
import { ACCENT, BROWN, MONO, SVG_PROPS } from "./_tokens";
import { useMemo, useState } from "react";

/* ============================================================
 * Scene 3 — FEATURED PROJECTS: 3 browser cards
 * ============================================================ */
export interface Scene3Props {
  onOpenDoor?: () => void; // kept for API compat; navigates to About
}

export function Scene3({ onOpenDoor }: Scene3Props = {}) {
  const projects = FEATURED_PROJECTS;
  const [idx, setIdx] = useState(0);
  const p = projects[idx] ?? projects[0]!;
  const meta = useMemo(() => ['"initial commit"', '"polish + a11y"', '"feature: dark mode"'], []);

  const goPrev = () => setIdx((v) => (v - 1 + projects.length) % projects.length);
  const goNext = () => setIdx((v) => (v + 1) % projects.length);
  const open = () => window.open(p.href, "_blank", "noopener,noreferrer");

  return (
    <section className={s.sc}>
      <svg {...SVG_PROPS} strokeWidth="2">
        <text
          x="550"
          y="90"
          fontFamily={MONO}
          fontSize="14"
          fill={BROWN}
          textAnchor="middle"
          letterSpacing="2"
        >
          $ git log --oneline featured/
        </text>

        {/* prev/next controls (below the card, above bottom nav overlay) */}
        <g
          data-hover
          role="button"
          tabIndex={0}
          aria-label="Previous project"
          onClick={goPrev}
          style={{ cursor: "none", pointerEvents: "all" }}
        >
          <rect x="310" y="515" width="52" height="44" rx="12" />
          <path d="M340 527 l-10 10 l10 10" />
        </g>
        <g
          data-hover
          role="button"
          tabIndex={0}
          aria-label="Next project"
          onClick={goNext}
          style={{ cursor: "none", pointerEvents: "all" }}
        >
          <rect x="738" y="515" width="52" height="44" rx="12" />
          <path d="M760 527 l10 10 l-10 10" />
        </g>

        {/* featured card */}
        <g
          data-hover
          role="button"
          tabIndex={0}
          aria-label={`Open ${p.title}`}
          onClick={open}
          style={{ cursor: "none" }}
        >
          <WinFrame x={165} y={120} w={770} h={380} title={p.urlLabel} />
          <rect x={185} y={162} width={730} height="24" rx="12" strokeWidth="1.4" />
          <text
            x={550}
            y={180}
            fontFamily={MONO}
            fontSize="11"
            fill={BROWN}
            textAnchor="middle"
            opacity="0.75"
          >
            https://{p.urlLabel}
          </text>

          <rect x={205} y={210} width="690" height="150" rx="6" strokeWidth="1.6" />
          <line x1={225} y1={250} x2={705} y2={250} strokeWidth="2.2" />
          <line x1={225} y1={285} x2={885} y2={285} strokeWidth="1.4" opacity="0.55" />
          <line x1={225} y1={312} x2={820} y2={312} strokeWidth="1.4" opacity="0.55" />
          <rect x={225} y={330} width="140" height="18" rx="9" fill={ACCENT} stroke="none" />

          <text x={205} y={405} fontFamily={MONO} fontSize="18" fill={BROWN}>
            {p.title}
          </text>
          <text x={205} y={430} fontFamily={MONO} fontSize="12" fill={BROWN} opacity="0.72">
            {p.desc}
          </text>
          <text x={205} y={472} fontFamily={MONO} fontSize="11" fill={ACCENT}>
            v1.{idx + 2}.0 · main
          </text>
          <text x={205} y={490} fontFamily={MONO} fontSize="10" fill={BROWN} opacity="0.6">
            {meta[idx] ?? meta[0]}
          </text>
        </g>

        <text
          x="550"
          y="555"
          fontFamily={MONO}
          fontSize="11"
          fill={BROWN}
          textAnchor="middle"
          opacity="0.7"
        >
          (use arrows to switch · tap card to open)
        </text>
      </svg>
    </section>
  );
}
