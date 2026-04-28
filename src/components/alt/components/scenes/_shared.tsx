import type { SVGProps } from "react";
import { COLORS, FONT } from "./_tokens";

type SvgTextProps = SVGProps<SVGTextElement> & {
  crisp?: boolean;
};

export function SvgText({ crisp = true, className, style, ...props }: SvgTextProps) {
  return (
    <text
      {...props}
      stroke="none"
      className={[crisp ? "svgTextCrisp" : null, className].filter(Boolean).join(" ")}
      style={{
        fontFamily: FONT,
        fontWeight: 400,
        fill: COLORS.brown,
        ...(style ?? {}),
      }}
    />
  );
}

/* ---------- Reusable: a "window chrome" frame (macOS-ish) ---------- */
export function WinFrame({
  x,
  y,
  w,
  h,
  title,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" strokeWidth="2.4" />
      <line x1={x} y1={y + 28} x2={x + w} y2={y + 28} strokeWidth="1.6" />
      <circle cx={x + 16} cy={y + 14} r="4.5" />
      <circle cx={x + 32} cy={y + 14} r="4.5" />
      <circle cx={x + 48} cy={y + 14} r="4.5" />
      <SvgText x={x + w / 2} y={y + 18} fontSize="11" textAnchor="middle" opacity="0.75">
        {title}
      </SvgText>
    </g>
  );
}
