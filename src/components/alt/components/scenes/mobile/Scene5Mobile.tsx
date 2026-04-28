import s from "../../../alt.module.css";
import { WinFrame } from "../_shared";
import { ACCENT, BROWN, MONO, SVG_PROPS_MOBILE } from "../_tokens";

/* ============================================================
 * Scene 5 (Mobile) — focus: top skills only
 * ============================================================ */
export function Scene5Mobile() {
  const skills: Array<[string, number]> = [
    ["HTML/CSS/a11y", 95],
    ["JS/TS", 92],
    ["React/Next/Vite", 90],
    ["Tailwind/Figma", 88],
  ];

  return (
    <section className={s.sc}>
      <svg {...SVG_PROPS_MOBILE} strokeWidth="2">
        <g data-hover>
          <WinFrame x={140} y={110} w={820} h={420} title="$ cat /etc/skills" />
          {skills.map(([name, pct], i) => {
            const y = 190 + i * 80;
            const barX = 320;
            const barW = 560;
            return (
              <g key={name}>
                <text x="190" y={y + 18} fontFamily={MONO} fontSize="18" fill={BROWN}>
                  {name}
                </text>
                <rect x={barX} y={y} width={barW} height="22" rx="11" strokeWidth="1.5" />
                <rect
                  x={barX + 2}
                  y={y + 2}
                  width={(barW - 4) * (pct / 100)}
                  height="18"
                  rx="9"
                  fill={BROWN}
                  stroke="none"
                />
                <text x={barX + barW + 14} y={y + 18} fontFamily={MONO} fontSize="16" fill={ACCENT}>
                  {pct}%
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </section>
  );
}
