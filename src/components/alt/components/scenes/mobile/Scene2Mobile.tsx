import s from "../../../alt.module.css";
import { SvgText } from "../_shared";
import { COLORS, SVG_PROPS_MOBILE } from "../_tokens";

/* ============================================================
 * Scene 2 (Mobile) — focus: sticker chips only
 * ============================================================ */
export function Scene2Mobile() {
  const stack = ["React", "TypeScript", "Next.js", "Tailwind", "Vite", "Node.js", "Figma", "Git"];

  return (
    <section className={s.sc}>
      <svg {...SVG_PROPS_MOBILE} strokeWidth="2">
        <SvgText x="550" y="110" fontSize="18" textAnchor="middle" letterSpacing="2">
          // MY STACK
        </SvgText>

        {stack.map((name, i) => {
          const col = i % 2;
          const row = Math.floor(i / 2);
          const x = 215 + col * 340;
          const y = 170 + row * 110;
          const filled = i % 3 !== 1;
          return (
            <g key={name} data-hover>
              <rect
                x={x}
                y={y}
                width="300"
                height="80"
                rx="40"
                fill={filled ? COLORS.brown : "transparent"}
              />
              <SvgText
                x={x + 150}
                y={y + 50}
                fontSize="22"
                textAnchor="middle"
                style={{ fill: filled ? COLORS.cream : COLORS.brown }}
              >
                {name}
              </SvgText>
            </g>
          );
        })}
      </svg>
    </section>
  );
}
