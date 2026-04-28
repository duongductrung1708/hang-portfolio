import s from "../../alt.module.css";
import { WinFrame } from "./_shared";
import { ACCENT, BROWN, MONO, SVG_PROPS } from "./_tokens";

/* ============================================================
 * Scene 4 — ABOUT ME: profile card + commit timeline
 * ============================================================ */
export function Scene4() {
  return (
    <section className={s.sc}>
      <svg {...SVG_PROPS} strokeWidth="2">
        {/* profile card */}
        <g data-hover>
          <WinFrame x={80} y={90} w={420} h={420} title="~/whoami" />
          {/* avatar */}
          <circle cx="290" cy="190" r="50" />
          <path d="M290 240 q-22 6 -28 28" />
          <path d="M290 240 q22 6 28 28" />
          <circle cx="275" cy="185" r="3" fill={BROWN} />
          <circle cx="305" cy="185" r="3" fill={BROWN} />
          <path d="M278 205 q12 8 24 0" strokeWidth="1.6" />

          <text x="290" y="290" fontFamily={MONO} fontSize="18" fill={BROWN} textAnchor="middle">
            Duong Duc Trung
          </text>
          <text x="290" y="312" fontFamily={MONO} fontSize="11" fill={ACCENT} textAnchor="middle">
            Frontend Developer · Vietnam
          </text>

          <line x1="120" y1="335" x2="460" y2="335" strokeWidth="1.2" opacity="0.4" />

          <text x="120" y="360" fontFamily={MONO} fontSize="11" fill={BROWN}>
            <tspan fill={ACCENT}>const</tspan> me = {"{"}
          </text>
          <text x="140" y="380" fontFamily={MONO} fontSize="11" fill={BROWN}>
            loves: ['clean code', 'tiny details'],
          </text>
          <text x="140" y="398" fontFamily={MONO} fontSize="11" fill={BROWN}>
            drinks: 'flat white ☕',
          </text>
          <text x="140" y="416" fontFamily={MONO} fontSize="11" fill={BROWN}>
            since: 2020,
          </text>
          <text x="140" y="434" fontFamily={MONO} fontSize="11" fill={BROWN}>
            mood: 'curious + caffeinated'
          </text>
          <text x="120" y="454" fontFamily={MONO} fontSize="11" fill={BROWN}>
            {"}"};
          </text>
          <text x="120" y="486" fontFamily={MONO} fontSize="10" fill={BROWN} opacity="0.7">
            // I balance intuition with structure,
          </text>
          <text x="120" y="500" fontFamily={MONO} fontSize="10" fill={BROWN} opacity="0.7">
            // chaos with clarity.
          </text>
        </g>

        {/* contribution-graph + timeline */}
        <g data-hover>
          <WinFrame x={550} y={90} w={470} h={420} title="contribution graph" />

          {/* graph cells */}
          <g>
            {Array.from({ length: 7 }).map((_, row) =>
              Array.from({ length: 26 }).map((_, col) => {
                const filled = ((row * 7 + col * 3) % 5) % 4;
                const opacities = [0.08, 0.25, 0.55, 0.95];
                return (
                  <rect
                    key={`${row}-${col}`}
                    x={570 + col * 16}
                    y={130 + row * 16}
                    width="12"
                    height="12"
                    rx="2"
                    fill={BROWN}
                    stroke="none"
                    opacity={opacities[filled]}
                  />
                );
              }),
            )}
          </g>
          <text x="570" y="265" fontFamily={MONO} fontSize="9" fill={BROWN} opacity="0.6">
            less
          </text>
          <text x="985" y="265" fontFamily={MONO} fontSize="9" fill={BROWN} opacity="0.6">
            more
          </text>

          {/* timeline */}
          <line x1="600" y1="310" x2="600" y2="490" strokeWidth="1.6" opacity="0.5" />
          {[
            { y: 320, year: "2026", what: "shipping interactive portfolios" },
            { y: 365, year: "2024", what: "design systems @ studio" },
            { y: 410, year: "2022", what: "first frontend role" },
            { y: 455, year: "2020", what: "rm -rf and started over" },
          ].map((t) => (
            <g key={t.year}>
              <circle cx="600" cy={t.y} r="5" fill={ACCENT} stroke={BROWN} strokeWidth="1.5" />
              <text x="620" y={t.y - 2} fontFamily={MONO} fontSize="12" fill={BROWN}>
                {t.year}
              </text>
              <text x="620" y={t.y + 14} fontFamily={MONO} fontSize="10" fill={BROWN} opacity="0.7">
                {t.what}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </section>
  );
}
