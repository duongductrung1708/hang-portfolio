import s from "../../../alt.module.css";
import { WinFrame } from "../_shared";
import { ACCENT, BROWN, MONO, SVG_PROPS_MOBILE } from "../_tokens";

/* ============================================================
 * Scene 4 (Mobile) — focus: profile card only
 * ============================================================ */
export function Scene4Mobile() {
  return (
    <section className={s.sc}>
      <svg {...SVG_PROPS_MOBILE} strokeWidth="2">
        <g data-hover>
          <WinFrame x={150} y={110} w={800} h={420} title="~/whoami" />
          <circle cx="550" cy="220" r="62" />
          <path d="M550 282 q-26 7 -34 34" />
          <path d="M550 282 q26 7 34 34" />
          <circle cx="530" cy="214" r="4" fill={BROWN} />
          <circle cx="570" cy="214" r="4" fill={BROWN} />
          <path d="M534 240 q16 10 32 0" strokeWidth="1.8" />

          <text x="550" y="355" fontFamily={MONO} fontSize="26" fill={BROWN} textAnchor="middle">
            Duong Duc Trung
          </text>
          <text x="550" y="382" fontFamily={MONO} fontSize="15" fill={ACCENT} textAnchor="middle">
            Frontend Developer · Vietnam
          </text>

          <line x1="210" y1="410" x2="890" y2="410" strokeWidth="1.2" opacity="0.35" />
          <text x="210" y="442" fontFamily={MONO} fontSize="15" fill={BROWN} opacity="0.9">
            loves: clean code · tiny details · caffeine ☕
          </text>
        </g>
      </svg>
    </section>
  );
}
