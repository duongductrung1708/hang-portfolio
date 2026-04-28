import s from "../../alt.module.css";
import { WinFrame } from "./_shared";
import { ACCENT, BROWN, MONO, SVG_PROPS } from "./_tokens";

/* ============================================================
 * Scene 5 — SKILLS: command output + progress bars
 * ============================================================ */
export function Scene5() {
  const skills: Array<[string, number]> = [
    ["HTML / CSS / a11y", 95],
    ["JavaScript / TypeScript", 92],
    ["React / Next / Vite", 90],
    ["Tailwind / shadcn / Figma", 88],
    ["Animation (Framer / GSAP)", 80],
    ["Node / API / SQL", 72],
  ];

  return (
    <section className={s.sc}>
      <svg {...SVG_PROPS} strokeWidth="2">
        <g data-hover>
          <WinFrame x={90} y={70} w={920} h={470} title="$ cat /etc/skills" />

          <text x="120" y="120" fontFamily={MONO} fontSize="12" fill={BROWN}>
            <tspan fill={ACCENT}>$</tspan> ./show --skills --years
          </text>

          {skills.map(([name, pct], i) => {
            const y = 160 + i * 50;
            const barX = 460;
            const barW = 480;
            return (
              <g key={name}>
                <text x="120" y={y + 14} fontFamily={MONO} fontSize="13" fill={BROWN}>
                  {name}
                </text>
                {/* track */}
                <rect x={barX} y={y} width={barW} height="18" rx="9" strokeWidth="1.4" />
                {/* fill */}
                <rect
                  x={barX + 2}
                  y={y + 2}
                  width={(barW - 4) * (pct / 100)}
                  height="14"
                  rx="7"
                  fill={BROWN}
                  stroke="none"
                />
                <text x={barX + barW + 12} y={y + 14} fontFamily={MONO} fontSize="11" fill={ACCENT}>
                  {pct}%
                </text>
              </g>
            );
          })}

          <line x1="120" y1="490" x2="980" y2="490" strokeWidth="1" opacity="0.35" />
          <text x="120" y="515" fontFamily={MONO} fontSize="11" fill={BROWN} opacity="0.75">
            also: Git · CI/CD · testing (Vitest, Playwright) · perf budgets · Lighthouse 95+
          </text>
        </g>
      </svg>
    </section>
  );
}
