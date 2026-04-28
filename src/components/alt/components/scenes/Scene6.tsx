import s from "../../alt.module.css";
import { WinFrame } from "./_shared";
import { ACCENT, BROWN, MONO, SVG_PROPS } from "./_tokens";

/* ============================================================
 * Scene 6 — CONTACT: terminal greeting + links
 * ============================================================ */
export function Scene6() {
  return (
    <section className={s.sc}>
      <svg {...SVG_PROPS} strokeWidth="2.2">
        <g data-hover>
          <WinFrame x={150} y={90} w={800} h={420} title="contact.sh" />

          <text x="180" y="140" fontFamily={MONO} fontSize="14" fill={BROWN}>
            <tspan fill={ACCENT}>$</tspan> echo "let's build something together"
          </text>
          <text x="180" y="165" fontFamily={MONO} fontSize="12" fill={BROWN} opacity="0.75">
            → let's build something together
          </text>

          <text x="180" y="215" fontFamily={MONO} fontSize="14" fill={BROWN}>
            <tspan fill={ACCENT}>$</tspan> cat ./contact.json
          </text>
          <text x="180" y="245" fontFamily={MONO} fontSize="13" fill={BROWN}>
            {"{"}
          </text>
          <text x="200" y="270" fontFamily={MONO} fontSize="13" fill={BROWN}>
            <tspan fill={ACCENT}>"email"</tspan>:{" "}
            <tspan opacity="0.85">"trungyna1708@gmail.com"</tspan>,
          </text>
          <text x="200" y="295" fontFamily={MONO} fontSize="13" fill={BROWN}>
            <tspan fill={ACCENT}>"github"</tspan>: <tspan opacity="0.85">"github.com/trung"</tspan>,
          </text>
          <text x="200" y="320" fontFamily={MONO} fontSize="13" fill={BROWN}>
            <tspan fill={ACCENT}>"linkedin"</tspan>:{" "}
            <tspan opacity="0.85">"in/trung-frontend"</tspan>,
          </text>
          <text x="200" y="345" fontFamily={MONO} fontSize="13" fill={BROWN}>
            <tspan fill={ACCENT}>"available"</tspan>: <tspan fill={ACCENT}>true</tspan>,
          </text>
          <text x="200" y="370" fontFamily={MONO} fontSize="13" fill={BROWN}>
            <tspan fill={ACCENT}>"timezone"</tspan>: <tspan opacity="0.85">"GMT+7"</tspan>
          </text>
          <text x="180" y="395" fontFamily={MONO} fontSize="13" fill={BROWN}>
            {"}"}
          </text>

          <text x="180" y="445" fontFamily={MONO} fontSize="14" fill={BROWN}>
            <tspan fill={ACCENT}>$</tspan> mailto trungyna1708@gmail.com
          </text>
          <text x="180" y="475" fontFamily={MONO} fontSize="14" fill={ACCENT}>
            ▸ thanks for stopping by ♥ <tspan className="CARET">▮</tspan>
          </text>
        </g>
      </svg>
    </section>
  );
}
