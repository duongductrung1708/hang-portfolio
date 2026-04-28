export const FONT =
  '"Geist Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const COLORS = {
  brown: "#4a1515",
  cream: "#f7f2ea",
  accent: "#e07878",
} as const;

// Back-compat aliases while refactoring:
export const MONO = FONT;
export const BROWN = COLORS.brown;
export const CREAM = COLORS.cream;
export const ACCENT = COLORS.accent;

export const SVG_PROPS = {
  viewBox: "0 0 1100 600",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: COLORS.brown,
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// Mobile scenes: crop/zoom the stage so elements read larger.
export const SVG_PROPS_MOBILE = {
  ...SVG_PROPS,
  // Pull the crop up a bit to avoid cutting top elements.
  viewBox: "110 30 880 570",
};
