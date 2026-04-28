import s from "../../../alt.module.css";
import { WinFrame } from "../_shared";
import { ACCENT, BROWN, MONO, SVG_PROPS_MOBILE } from "../_tokens";

/* ============================================================
 * Scene 6 (Mobile) — focus: contact essentials
 * ============================================================ */
export function Scene6Mobile() {
  return (
    <section className={s.sc}>
      <svg {...SVG_PROPS_MOBILE} strokeWidth="2.2">
        <g data-hover>
          <WinFrame x={140} y={120} w={820} h={400} title="contact.sh" />

          <text x="180" y="190" fontFamily={MONO} fontSize="18" fill={BROWN}>
            <tspan fill={ACCENT}>$</tspan> mailto trungyna1708@gmail.com
          </text>
          <text x="180" y="230" fontFamily={MONO} fontSize="15" fill={BROWN} opacity="0.75">
            → trungyna1708@gmail.com
          </text>

          <line x1="180" y1="270" x2="920" y2="270" strokeWidth="1.2" opacity="0.35" />

          <text x="180" y="320" fontFamily={MONO} fontSize="17" fill={BROWN}>
            <tspan fill={ACCENT}>$</tspan> echo "let's build something together"
          </text>
          <text x="180" y="358" fontFamily={MONO} fontSize="15" fill={BROWN} opacity="0.8">
            ▸ available: <tspan fill={ACCENT}>true</tspan> · timezone: GMT+7{" "}
            <tspan className="CARET">▮</tspan>
          </text>
        </g>
      </svg>
    </section>
  );
}
