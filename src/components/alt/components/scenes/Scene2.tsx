import s from "../../alt.module.css";
import { SvgText, WinFrame } from "./_shared";
import { COLORS, FONT, SVG_PROPS } from "./_tokens";

/* ============================================================
 * Scene 2 — TECH STACK: package.json + sticker grid
 * ============================================================ */
export function Scene2() {
  const stack = [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind",
    "Vite",
    "Node.js",
    "GraphQL",
    "Framer",
    "Figma",
    "Git",
    "shadcn/ui",
    "PostgreSQL",
  ];

  return (
    <section className={s.sc}>
      <svg {...SVG_PROPS} strokeWidth="2">
        {/* package.json window */}
        <g data-hover className="svgTextCrisp">
          <WinFrame x={70} y={80} w={460} h={440} title="package.json" />
          <g fontFamily={FONT} fontSize="14" fill={COLORS.brown}>
            <text x="95" y="125">
              {"{"}
            </text>
            <text x="115" y="148">
              <tspan fill={COLORS.accent}>"name"</tspan>:{" "}
              <tspan opacity="0.8">"trung-portfolio"</tspan>,
            </text>
            <text x="115" y="171">
              <tspan fill={COLORS.accent}>"version"</tspan>:{" "}
              <tspan opacity="0.8">"2026.04.28"</tspan>,
            </text>
            <text x="115" y="194">
              <tspan fill={COLORS.accent}>"role"</tspan>:{" "}
              <tspan opacity="0.8">"Frontend Developer"</tspan>,
            </text>
            <text x="115" y="217">
              <tspan fill={COLORS.accent}>"location"</tspan>:{" "}
              <tspan opacity="0.8">"Vietnam 🇻🇳"</tspan>,
            </text>
            <text x="115" y="240">
              <tspan fill={COLORS.accent}>"dependencies"</tspan>: {"{"}
            </text>
            <text x="135" y="263" opacity="0.85">
              "react": "^19.0.0",
            </text>
            <text x="135" y="282" opacity="0.85">
              "typescript": "^5.6",
            </text>
            <text x="135" y="301" opacity="0.85">
              "tailwindcss": "^4.0",
            </text>
            <text x="135" y="320" opacity="0.85">
              "framer-motion": "latest",
            </text>
            <text x="135" y="339" opacity="0.85">
              "vite": "^7.0",
            </text>
            <text x="135" y="358" opacity="0.85">
              "@tanstack/react-router": "*"
            </text>
            <text x="115" y="377">
              {"},"}
            </text>
            <text x="115" y="400">
              <tspan fill={COLORS.accent}>"scripts"</tspan>: {"{"}
            </text>
            <text x="135" y="423" opacity="0.85">
              "dev": "vite",
            </text>
            <text x="135" y="442" opacity="0.85">
              "build": "vite build",
            </text>
            <text x="135" y="461" opacity="0.85">
              "ship": "git push --force-fun"
            </text>
            <text x="115" y="480">
              {"}"}
            </text>
            <text x="95" y="500">
              {"}"}
            </text>
          </g>
        </g>

        {/* sticker / chip grid */}
        <g>
          <SvgText x="780" y="115" fontSize="14" textAnchor="middle" letterSpacing="2">
            // STICKERS ON MY LAPTOP
          </SvgText>
          {stack.map((name, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const cx = 600 + col * 130;
            const cy = 160 + row * 90;
            const filled = (i + row) % 2 === 0;
            return (
              <g key={name} data-hover>
                <rect
                  x={cx}
                  y={cy}
                  width="115"
                  height="68"
                  rx="34"
                  fill={filled ? COLORS.brown : "transparent"}
                />
                <SvgText
                  x={cx + 57}
                  y={cy + 41}
                  fontSize="13"
                  style={{ fill: filled ? COLORS.cream : COLORS.brown }}
                  textAnchor="middle"
                >
                  {name}
                </SvgText>
              </g>
            );
          })}
          {/* small note under */}
          <SvgText x="780" y="540" fontSize="11" textAnchor="middle" opacity="0.7">
            (and a healthy curiosity for what's next)
          </SvgText>
        </g>
      </svg>
    </section>
  );
}
